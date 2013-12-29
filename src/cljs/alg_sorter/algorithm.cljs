(ns alg-sorter.algorithm)

(def face-re #"[UDLRFBudlrfbxyz]w?")
(def move-re #"[UDLRFBudlrfbxyz]w?['2]?")

(defn moves [alg]
  (re-seq move-re alg))

(defn- double-turn? [move]
  (= (last move) \2))

(defn- wide? [move]
  (or (#{\u \d \l \r \f \b} (first move))
      (some #{\w} move)))

(defn- dewiden 
  "turn a wide turn into its equivalent non-wide and rotation"
  [move]
  (if (wide? move)
  (let [m (clojure.string/upper-case (first move))]
    (case m
      "U" ["D" "y"]
      "D" ["U" "y" "y" "y"]
      "R" ["L" "x"]
      "L" ["R" "x" "x" "x"]
      "F" ["B" "z"]
      "B" ["F" "z" "z" "z"]))
    [move]))

(defn- prime? [move]
  (= (last move) \'))

(defn- prefix [move]
  (re-find face-re move))

(defn- expand-move [move]
  (let [p (prefix move)]
    (condp #(%1 %2) move
      prime?       [p p p]
      double-turn? [p p]
                   [p])))

(defn expand [alg]
  (mapcat dewiden
          (mapcat expand-move
                  alg)))

(def rotation-results
  {"x"
    {"U" "F"
     "D" "B"
     "L" "L"
     "R" "R"
     "F" "D"
     "B" "U"}
   "y"
    {"U" "U"
     "D" "D"
     "L" "F"
     "R" "B"
     "F" "R"
     "B" "L"}
   "z"
    {"U" "L"
     "D" "R"
     "L" "D"
     "R" "U"
     "F" "F"
     "B" "B"}})

; return the result of eliminating the first (and only) rotation of move-seq
(defn- apply-rotation [[rotation & move-seq]]
  (map (rotation-results rotation) move-seq))
  
(defn- rotation? [move]
  (#{"x" "y" "z"} (prefix move)))

(def move? (comp not rotation?))

; there must be a builtin for this?
(defn- index-of [pred l]
  (count (take-while (comp not pred) l)))

(defn last-partition 
  "Split the seq into two halves, at the last point which satisfies pred"
  [pred l]
  (let [idx (dec (- (count l) (index-of pred (reverse l))))]
      [(take idx l) (drop idx l)]))

(defn- derotate-one [move-seq]
  "Eliminate the last rotation in move-seq"
  (if (not-any? rotation? move-seq)
    move-seq
    (let [[start end] (last-partition rotation? move-seq)]
      (concat start
              (apply-rotation end)))))

(defn- fixed-point [f v]
  "Repeatedly apply f to v until it has no effect"
  (let [result (f v)] (if (= result v) v (recur f result))))

(defn derotate [move-seq]
  (fixed-point derotate-one move-seq))

(defn rerotate [alg]
  (let [rotation (case (first alg)
                   "U" ["z" "z" "z"]
                   "D" ["z"]
                   "L" ["y" "y"]
                   "R" []
                   "F" ["y"]
                   "B" ["y" "y" "y"])]
    (derotate (concat rotation alg))))

(defn canonicalize [alg]
  (let [m (moves alg)]
    (-> m
        expand
        derotate
        rerotate)))

(defn distinct-by
  "Return the first of each equivalence class in l as defined by f"
  [f l]
  (loop [seen #{}
         result []
         remaining l]
    (cond (empty? remaining) result
          (seen (f (first remaining))) (recur seen result (rest remaining))
          :else (recur (conj seen (f (first remaining))) 
                       (conj result (first remaining))
                       (rest remaining)))))

(defn distinct-algs [algs]
  (distinct-by canonicalize algs))

(defn- move-qtm-length [move]
  (if (double-turn? move) 2 1))

(defn qtm-length [alg]
  (reduce + 0 (map move-qtm-length (moves alg))))

(defmulti perform-fix (fn [_ operation] operation))

(defmethod perform-fix :removepreauf
  [lst _]
  (map remove-pre-auf lst))

(defmethod perform-fix :removepostauf
  [lst _]
  (map (comp reverse remove-pre-auf reverse) lst))

(defn remove-pre-auf [alg]
  (if (= (first (first alg)) \U)
    (rest alg)
    alg))

(defn fix-algs [lst options]
  (reduce perform-fix lst options))

(defn group-algs [alg-list options]
  (let [fixed-algs (fix-algs (map moves alg-list) options)
        algs (map #(clojure.string/join " " %) fixed-algs)]
  (group-by qtm-length
            (distinct-algs algs))))
