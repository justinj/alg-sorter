(ns alg-sorter.ui
  (:use-macros
    [dommy.macros :only [sel sel1 node]])
  (:require [dommy.core :as dommy]
            [alg-sorter.algorithm :as alg]))

(defn go [e]
  (let [algs (clojure.string/split (dommy/value (sel1 :#alg-list)) "\n")
        elem (sel1 :#result)
        formatted (format-algs algs)]
    (dommy/set-text! elem "")
    (dommy/append! elem formatted)
    ))

(defn format-algs [algs]
  (let [sorted (sort-by first (alg/group-algs algs))]
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
