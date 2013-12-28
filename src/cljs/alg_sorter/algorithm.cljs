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
(defn index-of [pred l]
  (count (take-while (comp not pred) l)))

(defn last-partition [pred l]
  (let [idx (dec (- (count l) (index-of pred (reverse l))))]
      [(take idx l) (drop idx l)]))

(defn- derotate-one [move-seq]
  (if (not-any? rotation? move-seq)
    move-seq
    (let [[start end] (last-partition rotation? move-seq)]
      (concat start
              (apply-rotation end)))))

(defn- fixed-point [f v]
  (let [result (f v)] (if (= result v) v (fixed-point f result))))

(defn derotate [move-seq]
  (fixed-point derotate-one move-seq))

(defn rerotate [alg]
  (let [rotation (case (first alg)
                   "L" ["y" "y"]
                   "R" [])]
    (derotate (concat rotation alg))))

(defn canonicalize [alg]
  (let [m (moves alg)]
    (-> m
        expand
        derotate
        rerotate)))
