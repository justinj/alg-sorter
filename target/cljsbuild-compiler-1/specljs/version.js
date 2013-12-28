goog.provide('specljs.version');
goog.require('cljs.core');
goog.require('clojure.string');
specljs.version.major = 2;
specljs.version.minor = 8;
specljs.version.tiny = 1;
specljs.version.snapshot = false;
specljs.version.string = [cljs.core.str(clojure.string.join.call(null,".",cljs.core.filter.call(null,cljs.core.identity,cljs.core.PersistentVector.fromArray([specljs.version.major,specljs.version.minor,specljs.version.tiny], true)))),cljs.core.str((cljs.core.truth_(specljs.version.snapshot)?"-SNAPSHOT":""))].join('');
specljs.version.summary = [cljs.core.str("specljs "),cljs.core.str(specljs.version.string)].join('');
