(ns alg-sorter.algorithm-spec
  (:require-macros [specljs.core :refer [describe it should=]])
  (:require [specljs.core])
  (:use [alg-sorter.algorithm :only (moves canonicalize derotate expand)]))

(describe "algorithm"
  (describe "moves"
    (it "returns a seq of moves"
        (should= ["R"] (moves "R"))
        (should= ["U"] (moves "U"))
        (should= ["R" "U"] (moves "R U"))
        (should= ["Rw" "U"] (moves "Rw U"))
        (should= ["Rw2" "Uw'"] (moves "Rw2Uw'"))))
  (describe "expand"
    (it "turns wide turns into normal turns"
        (should= ["R" "x" "x" "x"] (expand ["Lw"]))
        )
    (it "turns primes and 2's into singles"
        (should= ["R"] (expand ["R"]))
        (should= ["R" "R"] (expand ["R2"]))
    ))
  (describe "derotate"
    (it "eliminates rotations"
        (should= ["R" "U"] (derotate ["R" "U"]))
        (should= ["R" "R" "U"] (derotate ["R" "x" "R" "B"]))
        (should= ["R" "R" "U"] (derotate ["R" "x" "R" "B"]))
        (should= ["R" "R" "U"] (derotate ["R" "x" "x" "x" "x" "x" "R" "B"]))
        )
    )
  (describe "canonicalize"
    (it "performs all the operations"
        (should= ["R"] (canonicalize "R"))
        (should= ["R"] (canonicalize "L"))
        )))
