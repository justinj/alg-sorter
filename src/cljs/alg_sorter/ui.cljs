(ns alg-sorter.ui
  (:use-macros
    [dommy.macros :only [sel sel1 node]])
  (:require [dommy.core :as dommy]
            [alg-sorter.algorithm :as alg]))

(defn go [e]
  (let [algs (clojure.string/split (dommy/value (sel1 :#alg-list)) "\n")
        elem (sel1 :#result)
        opt (options)
        formatted (format-algs algs opt)]
    (dommy/set-text! elem "")
    (dommy/append! elem formatted)
    ))

(defn checked? [elem]
  (.-checked elem))

(defn options []
  (let [opts ["removepreauf"]]
    (set
      (for [opt opts
            :when (checked? (sel1 (to-id-selector opt)))]
        (keyword opt)))))

(defn to-id-selector [id]
  (keyword (str "#" id)))

(defn format-algs [algs opt]
  (let [sorted (sort-by first (alg/group-algs algs opt))]
    [:.algs
     (map (fn [[length algs]]
            [:.group
             [:h2 (str "Length " length)]
             (map #(vector :.alg %) algs)])
          sorted)]))

(defn init []
  (dommy/listen! (sel1 :#go)
                 :click go))

(init)
