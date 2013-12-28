(ns specljs.report.progress
  (:require [specljs.config :refer [default-reporters]]
            [specljs.platform :as platform]
            [specljs.reporting :refer [tally-time red green yellow grey stack-trace-str indent prefix]]
            [specljs.results :refer [pass? fail? pending? categorize]]
            [clojure.string :as str]))

(defn full-name [characteristic]
  (loop [context @(.-parent characteristic) name (.-name characteristic)]
    (if context
      (recur @(.-parent context) (str (.-name context) " " name))
      name)))

(defn print-failure [id result]
  (let [characteristic (.-characteristic result)
        failure (.-failure result)]
    (println)
    (println (indent 1 id ") " (full-name characteristic)))
    (println (red (indent 2.5 (platform/error-message failure))))
    (if (platform/failure? failure)
      (println (grey (indent 2.5 (platform/failure-source failure))))
      (println (grey (indent 2.5 (stack-trace-str failure)))))))

(defn print-failures [failures]
  (when (seq failures)
    (println)
    (println "Failures:"))
  (dotimes [i (count failures)]
    (print-failure (inc i) (nth failures i))))

(defn print-pendings [pending-results]
  (when (seq pending-results)
    (println)
    (println "Pending:"))
  (doseq [result pending-results]
    (println)
    (println (yellow (str "  " (full-name (.-characteristic result)))))
    (println (grey (str "    ; " (platform/error-message (.-exception result)))))
    (println (grey (str "    ; " (platform/failure-source (.-exception result)))))))

(defn print-errors [error-results]
  (when (seq error-results)
    (println)
    (println "Errors:"))
  (doseq [[number result] (partition 2 (interleave (iterate inc 1) error-results))]
    (println)
    (println (indent 1 number ") " (red (str (.-exception result)))))
    (println (grey (indent 2.5 (stack-trace-str (.-exception result))))))
  (flush))

(defn- print-duration [results]
  (println)
  (println "Finished in" (platform/format-seconds (tally-time results)) "seconds"))

(defn color-fn-for [result-map]
  (cond
    (not= 0 (count (concat (:fail result-map) (:error result-map)))) red
    (not= 0 (count (:pending result-map))) yellow
    :else green))

(defn- apply-pending-tally [report tally]
  (if (pos? (:pending tally))
    (conj report (str (:pending tally) " pending"))
    report))

(defn- apply-error-tally [report tally]
  (if (pos? (:error tally))
    (conj report (str (:error tally) " errors"))
    report))

(defn describe-counts-for [result-map]
  (let [tally (zipmap (keys result-map) (map count (vals result-map)))
        always-on-counts [(str (apply + (vals tally)) " examples")
                          (str (:fail tally) " failures")]]
    (str/join ", "
      (-> always-on-counts
        (apply-pending-tally tally)
        (apply-error-tally tally)))))

(defn- print-tally [result-map]
  (let [color-fn (color-fn-for result-map)]
    (println (color-fn (describe-counts-for result-map)))))

(defn print-summary [results]
  (let [result-map (categorize results)]
    (print-failures (:fail result-map))
    (print-pendings (:pending result-map))
    (print-errors (:error result-map))
    (print-duration results)
    (print-tally result-map)))

(deftype ProgressReporter []
  specljs.reporting/Reporter
  (report-message [this message]
    (println message) (flush))
  (report-description [this description])
  (report-pass [this result]
    (print (green ".")) (flush))
  (report-pending [this result]
    (print (yellow "*")) (flush))
  (report-fail [this result]
    (print (red "F")) (flush))
  (report-error [this result]
    (print (red "E")) (flush))
  (report-runs [this results]
    (println)
    (print-summary results)))

(defn new-progress-reporter []
  (ProgressReporter.))

(reset! default-reporters [(new-progress-reporter)])
