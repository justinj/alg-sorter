(defproject alg-sorter "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1896"]
                 [speclj "2.5.0"]
                 [specljs "2.8.1"]
                 [prismatic/dommy "0.1.2"]]
  :plugins [[speclj "2.5.0"]
            [specljs "2.8.1"]
            [lein-cljsbuild "0.3.2"]]
  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj"]

  :cljsbuild ~(let [run-specs ["phantomjs" "bin/specljs_runner.js"  "public/javascript/test.js"]]
    {:builds {
      :dev {:source-paths ["src/cljs" "spec/cljs"]
            :compiler {:output-to "public/javascript/dev.js"
                       :optimizations :whitespace
                       :pretty-print true }}
      :test {:source-paths ["src/cljs" "spec/cljs"]
             :compiler {:output-to "public/javascript/test.js"
                        :optimizations :whitespace
                        :pretty-print true}
             :notify-command run-specs}
      :prod {:source-paths ["src/cljs"]
             :compiler {:output-to "public/javascript/cljs.js"
                        :optimizations :advanced}}}
                 :test-commands {"test" run-specs}}
                ))
