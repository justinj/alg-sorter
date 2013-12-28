goog.provide('specljs.run.standard');
goog.require('cljs.core');
goog.require('specljs.tags');
goog.require('specljs.running');
goog.require('specljs.reporting');
goog.require('specljs.config');
goog.require('specljs.results');
goog.require('specljs.tags');
goog.require('specljs.running');
goog.require('specljs.results');
goog.require('specljs.reporting');
goog.require('specljs.report.progress');
goog.require('specljs.config');
goog.require('specljs.components');
specljs.run.standard.counter = cljs.core.atom.call(null,0);
goog.provide('specljs.run.standard.StandardRunner');

/**
* @constructor
*/
specljs.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
})
specljs.run.standard.StandardRunner.cljs$lang$type = true;
specljs.run.standard.StandardRunner.cljs$lang$ctorStr = "specljs.run.standard/StandardRunner";
specljs.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.run.standard/StandardRunner");
});
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$ = true;
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$run_directories$arity$3 = (function (this$,directories,reporters){var self__ = this;
return alert("StandardRunner.run-directories:  I don't know how to do this.");
});
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$submit_description$arity$2 = (function (this$,description){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.descriptions,cljs.core.conj,description);
});
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$run_description$arity$3 = (function (this$,description,reporters){var self__ = this;
var run_results = specljs.running.do_description.call(null,description,reporters);return cljs.core.swap_BANG_.call(null,self__.results,cljs.core.into,run_results);
});
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$run_and_report$arity$2 = (function (this$,reporters){var self__ = this;
var seq__18662_18666 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.descriptions));var chunk__18663_18667 = null;var count__18664_18668 = 0;var i__18665_18669 = 0;while(true){
if((i__18665_18669 < count__18664_18668))
{var description_18670 = cljs.core._nth.call(null,chunk__18663_18667,i__18665_18669);this$.specljs$running$Runner$run_description$arity$3(this$,description_18670,reporters);
{
var G__18671 = seq__18662_18666;
var G__18672 = chunk__18663_18667;
var G__18673 = count__18664_18668;
var G__18674 = (i__18665_18669 + 1);
seq__18662_18666 = G__18671;
chunk__18663_18667 = G__18672;
count__18664_18668 = G__18673;
i__18665_18669 = G__18674;
continue;
}
} else
{var temp__4092__auto___18675 = cljs.core.seq.call(null,seq__18662_18666);if(temp__4092__auto___18675)
{var seq__18662_18676__$1 = temp__4092__auto___18675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18662_18676__$1))
{var c__3568__auto___18677 = cljs.core.chunk_first.call(null,seq__18662_18676__$1);{
var G__18678 = cljs.core.chunk_rest.call(null,seq__18662_18676__$1);
var G__18679 = c__3568__auto___18677;
var G__18680 = cljs.core.count.call(null,c__3568__auto___18677);
var G__18681 = 0;
seq__18662_18666 = G__18678;
chunk__18663_18667 = G__18679;
count__18664_18668 = G__18680;
i__18665_18669 = G__18681;
continue;
}
} else
{var description_18682 = cljs.core.first.call(null,seq__18662_18676__$1);this$.specljs$running$Runner$run_description$arity$3(this$,description_18682,reporters);
{
var G__18683 = cljs.core.next.call(null,seq__18662_18676__$1);
var G__18684 = null;
var G__18685 = 0;
var G__18686 = 0;
seq__18662_18666 = G__18683;
chunk__18663_18667 = G__18684;
count__18664_18668 = G__18685;
i__18665_18669 = G__18686;
continue;
}
}
} else
{}
}
break;
}
return specljs.reporting.report_runs_STAR_.call(null,reporters,cljs.core.deref.call(null,self__.results));
});
specljs.run.standard.__GT_StandardRunner = (function __GT_StandardRunner(num,descriptions,results){return (new specljs.run.standard.StandardRunner(num,descriptions,results));
});
specljs.components.Description.prototype.cljs$core$IPrintWithWriter$ = true;
specljs.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){return cljs.core._write.call(null,writer,[cljs.core.str("#<specljs.component.Description(name: "),cljs.core.str(x.name),cljs.core.str(")>")].join(''));
});
specljs.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = true;
specljs.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){cljs.core._write.call(null,writer,[cljs.core.str("#<specljs.run.standard.StandardRunner(num: "),cljs.core.str(x.num),cljs.core.str(", descriptions: ")].join(''));
cljs.core._pr_writer.call(null,cljs.core.deref.call(null,x.descriptions),writer,opts);
return cljs.core._write.call(null,writer,")>");
});
specljs.run.standard.new_standard_runner = (function new_standard_runner(){return (new specljs.run.standard.StandardRunner(cljs.core.swap_BANG_.call(null,specljs.run.standard.counter,cljs.core.inc),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
cljs.core.reset_BANG_.call(null,specljs.config.default_runner_fn,specljs.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,specljs.config.default_runner,specljs.run.standard.new_standard_runner.call(null));
specljs.run.standard.armed = false;
/**
* @param {...*} var_args
*/
specljs.run.standard.run_specs = (function() { 
var run_specs__delegate = function (configurations){if(cljs.core.truth_(specljs.run.standard.armed))
{var config = cljs.core.apply.call(null,cljs.core.hash_map,configurations);var config__$1 = cljs.core.merge.call(null,cljs.core.dissoc.call(null,specljs.config.default_config,new cljs.core.Keyword(null,"runner","runner",4389065378)),config);return specljs.config.with_config.call(null,config__$1,(function (){var temp__4090__auto___18687 = specljs.tags.describe_filter.call(null);if(cljs.core.truth_(temp__4090__auto___18687))
{var filter_msg_18688 = temp__4090__auto___18687;specljs.reporting.report_message_STAR_.call(null,specljs.config.active_reporters.call(null),filter_msg_18688);
} else
{}
specljs.running.run_and_report.call(null,specljs.config.active_runner.call(null),specljs.config.active_reporters.call(null));
return specljs.results.fail_count.call(null,cljs.core.deref.call(null,specljs.config.active_runner.call(null).results));
}));
} else
{return null;
}
};
var run_specs = function (var_args){
var configurations = null;if (arguments.length > 0) {
  configurations = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_specs__delegate.call(this,configurations);};
run_specs.cljs$lang$maxFixedArity = 0;
run_specs.cljs$lang$applyTo = (function (arglist__18689){
var configurations = cljs.core.seq(arglist__18689);
return run_specs__delegate(configurations);
});
run_specs.cljs$core$IFn$_invoke$arity$variadic = run_specs__delegate;
return run_specs;
})()
;
