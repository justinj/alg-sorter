(ns alg-sorter.algorithm-spec
  (:require-macros [specljs.core :refer [describe it should=]])
  (:require [specljs.core])
  (:use [alg-sorter.algorithm :only (moves canonicalize derotate expand distinct-by distinct-algs qtm-length group-algs)])) 
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
        (should= ["R" "x" "x" "x"] (expand ["Lw"])))
    (it "turns primes and 2's into singles"
        (should= ["R"] (expand ["R"]))
        (should= ["R" "R"] (expand ["R2"]))))
  (describe "derotate"
    (it "eliminates rotations"
        (should= ["R" "U"] (derotate ["R" "U"]))
        (should= ["R" "R" "U"] (derotate ["R" "x" "R" "B"]))
        (should= ["R" "R" "U"] (derotate ["R" "x" "R" "B"]))
        (should= ["R" "R" "U"] (derotate ["R" "x" "x" "x" "x" "x" "R" "B"]))))
  (describe "canonicalize"
    (it "performs all the operations"
        (should= ["R"] (canonicalize "R"))
        (should= ["R"] (canonicalize "L"))
        (should= ["R"] (canonicalize "U"))
        (should= ["R" "L"] (canonicalize "F B"))))
  (describe "distinct-by"
    (it "returns the elements of the collection which are distinct by some function"
      (should= [1 2] (distinct-by odd? [1 2]))
      (should= [1 2] (distinct-by odd? [1 2 3]))))
  (describe "distinct-algs"
    (it "returns only distinct algs"
        (should= ["R"] (distinct-algs ["R" "U" "L"]))))
  (describe "qtm-length"
    (it "returns the qtm length for an alg"
        (should= 1 (qtm-length "R"))
        (should= 2 (qtm-length "R L"))
        (should= 3 (qtm-length "R2 L"))))
  (describe "group-algs"
    (it "groups all the distinct algs by their qtm length"
        (should= {1 ["R"]} (group-algs ["R" "L"]))
        (should= {1 ["R"] 2 ["R U"]} (group-algs ["R" "L" "R U"])))))
