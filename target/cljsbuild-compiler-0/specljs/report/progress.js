goog.provide('specljs.report.progress');
goog.require('cljs.core');
goog.require('specljs.config');
goog.require('specljs.reporting');
goog.require('specljs.results');
goog.require('clojure.string');
goog.require('specljs.results');
goog.require('specljs.reporting');
goog.require('specljs.platform');
goog.require('specljs.config');
specljs.report.progress.full_name = (function full_name(characteristic){var context = cljs.core.deref.call(null,characteristic.parent);var name = characteristic.name;while(true){
if(cljs.core.truth_(context))
{{
var G__18196 = cljs.core.deref.call(null,context.parent);
var G__18197 = [cljs.core.str(context.name),cljs.core.str(" "),cljs.core.str(name)].join('');
context = G__18196;
name = G__18197;
continue;
}
} else
{return name;
}
break;
}
});
specljs.report.progress.print_failure = (function print_failure(id,result){var characteristic = result.characteristic;var failure = result.failure;cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.indent.call(null,1,id,") ",specljs.report.progress.full_name.call(null,characteristic)));
cljs.core.println.call(null,specljs.reporting.red.call(null,specljs.reporting.indent.call(null,2.5,specljs.platform.error_message.call(null,failure))));
if(cljs.core.truth_(specljs.platform.failure_QMARK_.call(null,failure)))
{return cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.platform.failure_source.call(null,failure))));
} else
{return cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.reporting.stack_trace_str.call(null,failure))));
}
});
specljs.report.progress.print_failures = (function print_failures(failures){if(cljs.core.seq.call(null,failures))
{cljs.core.println.call(null);
cljs.core.println.call(null,"Failures:");
} else
{}
var n__3615__auto__ = cljs.core.count.call(null,failures);var i = 0;while(true){
if((i < n__3615__auto__))
{specljs.report.progress.print_failure.call(null,(i + 1),cljs.core.nth.call(null,failures,i));
{
var G__18198 = (i + 1);
i = G__18198;
continue;
}
} else
{return null;
}
break;
}
});
specljs.report.progress.print_pendings = (function print_pendings(pending_results){if(cljs.core.seq.call(null,pending_results))
{cljs.core.println.call(null);
cljs.core.println.call(null,"Pending:");
} else
{}
var seq__18203 = cljs.core.seq.call(null,pending_results);var chunk__18204 = null;var count__18205 = 0;var i__18206 = 0;while(true){
if((i__18206 < count__18205))
{var result = cljs.core._nth.call(null,chunk__18204,i__18206);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.yellow.call(null,[cljs.core.str("  "),cljs.core.str(specljs.report.progress.full_name.call(null,result.characteristic))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.error_message.call(null,result.exception))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.failure_source.call(null,result.exception))].join('')));
{
var G__18207 = seq__18203;
var G__18208 = chunk__18204;
var G__18209 = count__18205;
var G__18210 = (i__18206 + 1);
seq__18203 = G__18207;
chunk__18204 = G__18208;
count__18205 = G__18209;
i__18206 = G__18210;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18203);if(temp__4092__auto__)
{var seq__18203__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18203__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18203__$1);{
var G__18211 = cljs.core.chunk_rest.call(null,seq__18203__$1);
var G__18212 = c__3568__auto__;
var G__18213 = cljs.core.count.call(null,c__3568__auto__);
var G__18214 = 0;
seq__18203 = G__18211;
chunk__18204 = G__18212;
count__18205 = G__18213;
i__18206 = G__18214;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__18203__$1);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.yellow.call(null,[cljs.core.str("  "),cljs.core.str(specljs.report.progress.full_name.call(null,result.characteristic))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.error_message.call(null,result.exception))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.failure_source.call(null,result.exception))].join('')));
{
var G__18215 = cljs.core.next.call(null,seq__18203__$1);
var G__18216 = null;
var G__18217 = 0;
var G__18218 = 0;
seq__18203 = G__18215;
chunk__18204 = G__18216;
count__18205 = G__18217;
i__18206 = G__18218;
continue;
}
}
} else
{return null;
}
}
break;
}
});
specljs.report.progress.print_errors = (function print_errors(error_results){if(cljs.core.seq.call(null,error_results))
{cljs.core.println.call(null);
cljs.core.println.call(null,"Errors:");
} else
{}
var seq__18225_18231 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,cljs.core.iterate.call(null,cljs.core.inc,1),error_results)));var chunk__18226_18232 = null;var count__18227_18233 = 0;var i__18228_18234 = 0;while(true){
if((i__18228_18234 < count__18227_18233))
{var vec__18229_18235 = cljs.core._nth.call(null,chunk__18226_18232,i__18228_18234);var number_18236 = cljs.core.nth.call(null,vec__18229_18235,0,null);var result_18237 = cljs.core.nth.call(null,vec__18229_18235,1,null);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.indent.call(null,1,number_18236,") ",specljs.reporting.red.call(null,[cljs.core.str(result_18237.exception)].join(''))));
cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.reporting.stack_trace_str.call(null,result_18237.exception))));
{
var G__18238 = seq__18225_18231;
var G__18239 = chunk__18226_18232;
var G__18240 = count__18227_18233;
var G__18241 = (i__18228_18234 + 1);
seq__18225_18231 = G__18238;
chunk__18226_18232 = G__18239;
count__18227_18233 = G__18240;
i__18228_18234 = G__18241;
continue;
}
} else
{var temp__4092__auto___18242 = cljs.core.seq.call(null,seq__18225_18231);if(temp__4092__auto___18242)
{var seq__18225_18243__$1 = temp__4092__auto___18242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18225_18243__$1))
{var c__3568__auto___18244 = cljs.core.chunk_first.call(null,seq__18225_18243__$1);{
var G__18245 = cljs.core.chunk_rest.call(null,seq__18225_18243__$1);
var G__18246 = c__3568__auto___18244;
var G__18247 = cljs.core.count.call(null,c__3568__auto___18244);
var G__18248 = 0;
seq__18225_18231 = G__18245;
chunk__18226_18232 = G__18246;
count__18227_18233 = G__18247;
i__18228_18234 = G__18248;
continue;
}
} else
{var vec__18230_18249 = cljs.core.first.call(null,seq__18225_18243__$1);var number_18250 = cljs.core.nth.call(null,vec__18230_18249,0,null);var result_18251 = cljs.core.nth.call(null,vec__18230_18249,1,null);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.indent.call(null,1,number_18250,") ",specljs.reporting.red.call(null,[cljs.core.str(result_18251.exception)].join(''))));
cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.reporting.stack_trace_str.call(null,result_18251.exception))));
{
var G__18252 = cljs.core.next.call(null,seq__18225_18243__$1);
var G__18253 = null;
var G__18254 = 0;
var G__18255 = 0;
seq__18225_18231 = G__18252;
chunk__18226_18232 = G__18253;
count__18227_18233 = G__18254;
i__18228_18234 = G__18255;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.flush.call(null);
});
specljs.report.progress.print_duration = (function print_duration(results){cljs.core.println.call(null);
return cljs.core.println.call(null,"Finished in",specljs.platform.format_seconds.call(null,specljs.reporting.tally_time.call(null,results)),"seconds");
});
specljs.report.progress.color_fn_for = (function color_fn_for(result_map){if(cljs.core.not_EQ_.call(null,0,cljs.core.count.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"fail","fail",1017039504).call(null,result_map),new cljs.core.Keyword(null,"error","error",1110689146).call(null,result_map)))))
{return specljs.reporting.red;
} else
{if(cljs.core.not_EQ_.call(null,0,cljs.core.count.call(null,new cljs.core.Keyword(null,"pending","pending",4626283785).call(null,result_map))))
{return specljs.reporting.yellow;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return specljs.reporting.green;
} else
{return null;
}
}
}
});
specljs.report.progress.apply_pending_tally = (function apply_pending_tally(report,tally){if((new cljs.core.Keyword(null,"pending","pending",4626283785).call(null,tally) > 0))
{return cljs.core.conj.call(null,report,[cljs.core.str(new cljs.core.Keyword(null,"pending","pending",4626283785).call(null,tally)),cljs.core.str(" pending")].join(''));
} else
{return report;
}
});
specljs.report.progress.apply_error_tally = (function apply_error_tally(report,tally){if((new cljs.core.Keyword(null,"error","error",1110689146).call(null,tally) > 0))
{return cljs.core.conj.call(null,report,[cljs.core.str(new cljs.core.Keyword(null,"error","error",1110689146).call(null,tally)),cljs.core.str(" errors")].join(''));
} else
{return report;
}
});
specljs.report.progress.describe_counts_for = (function describe_counts_for(result_map){var tally = cljs.core.zipmap.call(null,cljs.core.keys.call(null,result_map),cljs.core.map.call(null,cljs.core.count,cljs.core.vals.call(null,result_map)));var always_on_counts = cljs.core.PersistentVector.fromArray([[cljs.core.str(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,tally))),cljs.core.str(" examples")].join(''),[cljs.core.str(new cljs.core.Keyword(null,"fail","fail",1017039504).call(null,tally)),cljs.core.str(" failures")].join('')], true);return clojure.string.join.call(null,", ",specljs.report.progress.apply_error_tally.call(null,specljs.report.progress.apply_pending_tally.call(null,always_on_counts,tally),tally));
});
specljs.report.progress.print_tally = (function print_tally(result_map){var color_fn = specljs.report.progress.color_fn_for.call(null,result_map);return cljs.core.println.call(null,color_fn.call(null,specljs.report.progress.describe_counts_for.call(null,result_map)));
});
specljs.report.progress.print_summary = (function print_summary(results){var result_map = specljs.results.categorize.call(null,results);specljs.report.progress.print_failures.call(null,new cljs.core.Keyword(null,"fail","fail",1017039504).call(null,result_map));
specljs.report.progress.print_pendings.call(null,new cljs.core.Keyword(null,"pending","pending",4626283785).call(null,result_map));
specljs.report.progress.print_errors.call(null,new cljs.core.Keyword(null,"error","error",1110689146).call(null,result_map));
specljs.report.progress.print_duration.call(null,results);
return specljs.report.progress.print_tally.call(null,result_map);
});
goog.provide('specljs.report.progress.ProgressReporter');

/**
* @constructor
*/
specljs.report.progress.ProgressReporter = (function (){
})
specljs.report.progress.ProgressReporter.cljs$lang$type = true;
specljs.report.progress.ProgressReporter.cljs$lang$ctorStr = "specljs.report.progress/ProgressReporter";
specljs.report.progress.ProgressReporter.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.report.progress/ProgressReporter");
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$ = true;
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_message$arity$2 = (function (this$,message){var self__ = this;
cljs.core.println.call(null,message);
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_description$arity$2 = (function (this$,description){var self__ = this;
return null;
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_pass$arity$2 = (function (this$,result){var self__ = this;
cljs.core.print.call(null,specljs.reporting.green.call(null,"."));
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_pending$arity$2 = (function (this$,result){var self__ = this;
cljs.core.print.call(null,specljs.reporting.yellow.call(null,"*"));
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_fail$arity$2 = (function (this$,result){var self__ = this;
cljs.core.print.call(null,specljs.reporting.red.call(null,"F"));
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_error$arity$2 = (function (this$,result){var self__ = this;
cljs.core.print.call(null,specljs.reporting.red.call(null,"E"));
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_runs$arity$2 = (function (this$,results){var self__ = this;
cljs.core.println.call(null);
return specljs.report.progress.print_summary.call(null,results);
});
specljs.report.progress.__GT_ProgressReporter = (function __GT_ProgressReporter(){return (new specljs.report.progress.ProgressReporter());
});
specljs.report.progress.new_progress_reporter = (function new_progress_reporter(){return (new specljs.report.progress.ProgressReporter());
});
cljs.core.reset_BANG_.call(null,specljs.config.default_reporters,cljs.core.PersistentVector.fromArray([specljs.report.progress.new_progress_reporter.call(null)], true));
