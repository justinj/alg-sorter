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
  "turn move into a collection of clockwise turns"
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

; tail recursion would be nice but it's sort of annoying with the varargs
(defn- fixed-point [f v & args]
  "Repeatedly apply f to v until it has no effect"
  (let [result (apply f v args)] (if (= result v) v (apply fixed-point f result args))))

(defn derotate [move-seq]
  "eliminate all the rotations in move-seq"
  (fixed-point derotate-one move-seq))

(defn rerotate [alg]
  "rotate alg so it starts with an 'R' move"
  (let [rotation (case (first alg)
                   "U" ["z" "z" "z"]
                   "D" ["z"]
                   "L" ["y" "y"]
                   "R" []
                   "F" ["y"]
                   "B" ["y" "y" "y"])]
    (derotate (concat rotation alg))))

(def should-commute?
  #{["U" "D"] ["R" "L"] ["F" "B"]})

(defn commute-moves [move-seq]
  (fixed-point commute-once move-seq))

(defn commute-once [move-seq]
  (loop [result []
         moves move-seq]
    (if (empty? moves)
      result
      (if (should-commute? (take 2 moves))
        (recur (concat result (reverse (take 2 moves)))
               (drop 2 moves))
        (recur (concat result [(first moves)])
               (rest moves))))))

(defn move-ds-to-end [move-seq]
  (if (= "D" (first move-seq))
    (concat (rest move-seq) ["D"])
    move-seq))

(defn canonicalize [alg options]
  "bring alg into a form in which it can be compared to other algs"
  (let [m (moves alg)
        rotated (-> m
                    expand
                    derotate
                    rerotate)]
    (if (options :commutemoves)
      (commute-moves rotated)
      rotated)))

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

(defn distinct-algs [algs options]
  (distinct-by #(canonicalize % options) algs))

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

(defmethod perform-fix :commutemoves
  [lst _]
  (map commute-moves lst))

(defmethod perform-fix :movedstoend
  [lst _]
  (map #(fixed-point move-ds-to-end %) lst))

(defmulti perform-input-fix (fn [_ operation] operation))

(defmethod perform-input-fix :removeblank
  [lst _]
  (remove clojure.string/blank? lst))

(defmethod perform-input-fix :removesearchingdepth
  [lst _]
  (remove #(re-find #"Searching depth" (clojure.string/join %)) lst))

(defn remove-pre-auf [alg]
  (if (= (first (first alg)) \U)
    (rest alg)
    alg))

(defn fix-input [lst]
  (reduce perform-input-fix lst #{:removesearchingdepth :removeblank}))

(defn fix-algs [lst options]
  (reduce perform-fix lst options))

(defn group-algs [alg-list options]
  (let [fixed-input (fix-input alg-list options)
        fixed-algs (fixed-point fix-algs (map moves fixed-input) options)
        algs (map #(clojure.string/join " " %) fixed-algs)]
  (group-by qtm-length
            (distinct-algs algs options))))
