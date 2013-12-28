goog.provide('alg_sorter.algorithm');
goog.require('cljs.core');
alg_sorter.algorithm.face_re = /[UDLRFBudlrfbxyz]w?/;
alg_sorter.algorithm.move_re = /[UDLRFBudlrfbxyz]w?['2]?/;
alg_sorter.algorithm.moves = (function moves(alg){return cljs.core.re_seq.call(null,alg_sorter.algorithm.move_re,alg);
});
alg_sorter.algorithm.double_turn_QMARK_ = (function double_turn_QMARK_(move){return cljs.core._EQ_.call(null,cljs.core.last.call(null,move),"2");
});
alg_sorter.algorithm.wide_QMARK_ = (function wide_QMARK_(move){var or__3943__auto__ = cljs.core.PersistentHashSet.fromArray(["b",null,"d",null,"f",null,"l",null,"r",null,"u",null], true).call(null,cljs.core.first.call(null,move));if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray(["w",null], true),move);
}
});
/**
* turn a wide turn into its equivalent non-wide and rotation
*/
alg_sorter.algorithm.dewiden = (function dewiden(move){if(cljs.core.truth_(alg_sorter.algorithm.wide_QMARK_.call(null,move)))
{var m = clojure.string.upper_case.call(null,cljs.core.first.call(null,move));var G__4761 = m;if(cljs.core._EQ_.call(null,"B",G__4761))
{return cljs.core.PersistentVector.fromArray(["F","z","z","z"], true);
} else
{if(cljs.core._EQ_.call(null,"F",G__4761))
{return cljs.core.PersistentVector.fromArray(["B","z"], true);
} else
{if(cljs.core._EQ_.call(null,"L",G__4761))
{return cljs.core.PersistentVector.fromArray(["R","x","x","x"], true);
} else
{if(cljs.core._EQ_.call(null,"R",G__4761))
{return cljs.core.PersistentVector.fromArray(["L","x"], true);
} else
{if(cljs.core._EQ_.call(null,"D",G__4761))
{return cljs.core.PersistentVector.fromArray(["U","y","y","y"], true);
} else
{if(cljs.core._EQ_.call(null,"U",G__4761))
{return cljs.core.PersistentVector.fromArray(["D","y"], true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(m)].join('')));
} else
{return null;
}
}
}
}
}
}
}
} else
{return cljs.core.PersistentVector.fromArray([move], true);
}
});
alg_sorter.algorithm.prime_QMARK_ = (function prime_QMARK_(move){return cljs.core._EQ_.call(null,cljs.core.last.call(null,move),"'");
});
alg_sorter.algorithm.prefix = (function prefix(move){return cljs.core.re_find.call(null,alg_sorter.algorithm.face_re,move);
});
alg_sorter.algorithm.expand_move = (function expand_move(move){var p = alg_sorter.algorithm.prefix.call(null,move);var pred__4767 = (function (p1__4762_SHARP_,p2__4763_SHARP_){return p1__4762_SHARP_.call(null,p2__4763_SHARP_);
});var expr__4768 = move;if(cljs.core.truth_(pred__4767.call(null,alg_sorter.algorithm.prime_QMARK_,expr__4768)))
{return cljs.core.PersistentVector.fromArray([p,p,p], true);
} else
{if(cljs.core.truth_(pred__4767.call(null,alg_sorter.algorithm.double_turn_QMARK_,expr__4768)))
{return cljs.core.PersistentVector.fromArray([p,p], true);
} else
{return cljs.core.PersistentVector.fromArray([p], true);
}
}
});
alg_sorter.algorithm.expand = (function expand(alg){return cljs.core.mapcat.call(null,alg_sorter.algorithm.dewiden,cljs.core.mapcat.call(null,alg_sorter.algorithm.expand_move,alg));
});
alg_sorter.algorithm.rotation_results = cljs.core.PersistentArrayMap.fromArray(["x",cljs.core.PersistentArrayMap.fromArray(["U","F","D","B","L","L","R","R","F","D","B","U"], true),"y",cljs.core.PersistentArrayMap.fromArray(["U","U","D","D","L","F","R","B","F","R","B","L"], true),"z",cljs.core.PersistentArrayMap.fromArray(["U","L","D","R","L","D","R","U","F","F","B","B"], true)], true);
alg_sorter.algorithm.apply_rotation = (function apply_rotation(p__4770){var vec__4772 = p__4770;var rotation = cljs.core.nth.call(null,vec__4772,0,null);var move_seq = cljs.core.nthnext.call(null,vec__4772,1);return cljs.core.map.call(null,alg_sorter.algorithm.rotation_results.call(null,rotation),move_seq);
});
alg_sorter.algorithm.rotation_QMARK_ = (function rotation_QMARK_(move){return cljs.core.PersistentHashSet.fromArray(["x",null,"y",null,"z",null], true).call(null,alg_sorter.algorithm.prefix.call(null,move));
});
alg_sorter.algorithm.move_QMARK_ = cljs.core.comp.call(null,cljs.core.not,alg_sorter.algorithm.rotation_QMARK_);
alg_sorter.algorithm.index_of = (function index_of(pred,l){return cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,pred),l));
});
alg_sorter.algorithm.last_partition = (function last_partition(pred,l){var idx = ((cljs.core.count.call(null,l) - alg_sorter.algorithm.index_of.call(null,pred,cljs.core.reverse.call(null,l))) - 1);return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,idx,l),cljs.core.drop.call(null,idx,l)], true);
});
alg_sorter.algorithm.derotate_one = (function derotate_one(move_seq){if(cljs.core.not_any_QMARK_.call(null,alg_sorter.algorithm.rotation_QMARK_,move_seq))
{return move_seq;
} else
{var vec__4774 = alg_sorter.algorithm.last_partition.call(null,alg_sorter.algorithm.rotation_QMARK_,move_seq);var start = cljs.core.nth.call(null,vec__4774,0,null);var end = cljs.core.nth.call(null,vec__4774,1,null);return cljs.core.concat.call(null,start,alg_sorter.algorithm.apply_rotation.call(null,end));
}
});
alg_sorter.algorithm.fixed_point = (function fixed_point(f,v){var result = f.call(null,v);if(cljs.core._EQ_.call(null,result,v))
{return v;
} else
{return fixed_point.call(null,f,result);
}
});
alg_sorter.algorithm.derotate = (function derotate(move_seq){return alg_sorter.algorithm.fixed_point.call(null,alg_sorter.algorithm.derotate_one,move_seq);
});
alg_sorter.algorithm.rerotate = (function rerotate(alg){var rotation = (function (){var G__4776 = cljs.core.first.call(null,alg);if(cljs.core._EQ_.call(null,"R",G__4776))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(cljs.core._EQ_.call(null,"L",G__4776))
{return cljs.core.PersistentVector.fromArray(["y","y"], true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,alg))].join('')));
} else
{return null;
}
}
}
})();return alg_sorter.algorithm.derotate.call(null,cljs.core.concat.call(null,rotation,alg));
});
alg_sorter.algorithm.canonicalize = (function canonicalize(alg){var m = alg_sorter.algorithm.moves.call(null,alg);return alg_sorter.algorithm.rerotate.call(null,alg_sorter.algorithm.derotate.call(null,alg_sorter.algorithm.expand.call(null,m)));
});
