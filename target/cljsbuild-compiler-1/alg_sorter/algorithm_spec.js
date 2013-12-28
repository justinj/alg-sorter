goog.provide('alg_sorter.algorithm_spec');
goog.require('cljs.core');
goog.require('alg_sorter.algorithm');
goog.require('alg_sorter.algorithm');
goog.require('specljs.core');
var description__4237__auto___18747 = specljs.components.new_description.call(null,"algorithm","alg-sorter.algorithm-spec");var _STAR_parent_description_STAR_18735_18748 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__4237__auto___18747;
var seq__18737_18749 = cljs.core.seq.call(null,cljs.core.list.call(null,(function (){var description__4237__auto____$1 = specljs.components.new_description.call(null,"moves","alg-sorter.algorithm-spec");var _STAR_parent_description_STAR_18741_18753 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__4237__auto____$1;
var seq__18743_18754 = cljs.core.seq.call(null,cljs.core.list.call(null,specljs.components.new_characteristic.call(null,"returns a seq of moves",((function (_STAR_parent_description_STAR_18741_18753,description__4237__auto____$1){
return (function (){var expected__4317__auto__ = "123";var actual__4318__auto__ = alg_sorter.algorithm.moves.call(null,"R");if(!(cljs.core._EQ_.call(null,expected__4317__auto__,actual__4318__auto__)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4317__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4317__auto__))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4318__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4318__auto__))),cljs.core.str(" (using =)")].join('')));
} else
{return null;
}
});})(_STAR_parent_description_STAR_18741_18753,description__4237__auto____$1))
)));var chunk__18744_18755 = null;var count__18745_18756 = 0;var i__18746_18757 = 0;while(true){
if((i__18746_18757 < count__18745_18756))
{var component__4238__auto___18758 = cljs.core._nth.call(null,chunk__18744_18755,i__18746_18757);specljs.components.install.call(null,component__4238__auto___18758,description__4237__auto____$1);
{
var G__18759 = seq__18743_18754;
var G__18760 = chunk__18744_18755;
var G__18761 = count__18745_18756;
var G__18762 = (i__18746_18757 + 1);
seq__18743_18754 = G__18759;
chunk__18744_18755 = G__18760;
count__18745_18756 = G__18761;
i__18746_18757 = G__18762;
continue;
}
} else
{var temp__4092__auto___18763 = cljs.core.seq.call(null,seq__18743_18754);if(temp__4092__auto___18763)
{var seq__18743_18764__$1 = temp__4092__auto___18763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18743_18764__$1))
{var c__3568__auto___18765 = cljs.core.chunk_first.call(null,seq__18743_18764__$1);{
var G__18766 = cljs.core.chunk_rest.call(null,seq__18743_18764__$1);
var G__18767 = c__3568__auto___18765;
var G__18768 = cljs.core.count.call(null,c__3568__auto___18765);
var G__18769 = 0;
seq__18743_18754 = G__18766;
chunk__18744_18755 = G__18767;
count__18745_18756 = G__18768;
i__18746_18757 = G__18769;
continue;
}
} else
{var component__4238__auto___18770 = cljs.core.first.call(null,seq__18743_18764__$1);specljs.components.install.call(null,component__4238__auto___18770,description__4237__auto____$1);
{
var G__18771 = cljs.core.next.call(null,seq__18743_18764__$1);
var G__18772 = null;
var G__18773 = 0;
var G__18774 = 0;
seq__18743_18754 = G__18771;
chunk__18744_18755 = G__18772;
count__18745_18756 = G__18773;
i__18746_18757 = G__18774;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_18741_18753;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__4237__auto____$1);
} else
{}
return description__4237__auto____$1;
})()));var chunk__18738_18750 = null;var count__18739_18751 = 0;var i__18740_18752 = 0;while(true){
if((i__18740_18752 < count__18739_18751))
{var component__4238__auto___18775 = cljs.core._nth.call(null,chunk__18738_18750,i__18740_18752);specljs.components.install.call(null,component__4238__auto___18775,description__4237__auto___18747);
{
var G__18776 = seq__18737_18749;
var G__18777 = chunk__18738_18750;
var G__18778 = count__18739_18751;
var G__18779 = (i__18740_18752 + 1);
seq__18737_18749 = G__18776;
chunk__18738_18750 = G__18777;
count__18739_18751 = G__18778;
i__18740_18752 = G__18779;
continue;
}
} else
{var temp__4092__auto___18780 = cljs.core.seq.call(null,seq__18737_18749);if(temp__4092__auto___18780)
{var seq__18737_18781__$1 = temp__4092__auto___18780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18737_18781__$1))
{var c__3568__auto___18782 = cljs.core.chunk_first.call(null,seq__18737_18781__$1);{
var G__18783 = cljs.core.chunk_rest.call(null,seq__18737_18781__$1);
var G__18784 = c__3568__auto___18782;
var G__18785 = cljs.core.count.call(null,c__3568__auto___18782);
var G__18786 = 0;
seq__18737_18749 = G__18783;
chunk__18738_18750 = G__18784;
count__18739_18751 = G__18785;
i__18740_18752 = G__18786;
continue;
}
} else
{var component__4238__auto___18787 = cljs.core.first.call(null,seq__18737_18781__$1);specljs.components.install.call(null,component__4238__auto___18787,description__4237__auto___18747);
{
var G__18788 = cljs.core.next.call(null,seq__18737_18781__$1);
var G__18789 = null;
var G__18790 = 0;
var G__18791 = 0;
seq__18737_18749 = G__18788;
chunk__18738_18750 = G__18789;
count__18739_18751 = G__18790;
i__18740_18752 = G__18791;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_18735_18748;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__4237__auto___18747);
} else
{}
