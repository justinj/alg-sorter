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
var G__19655 = cljs.core.deref.call(null,context.parent);
var G__19656 = [cljs.core.str(context.name),cljs.core.str(" "),cljs.core.str(name)].join('');
context = G__19655;
name = G__19656;
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
var G__19657 = (i + 1);
i = G__19657;
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
var seq__19662 = cljs.core.seq.call(null,pending_results);var chunk__19663 = null;var count__19664 = 0;var i__19665 = 0;while(true){
if((i__19665 < count__19664))
{var result = cljs.core._nth.call(null,chunk__19663,i__19665);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.yellow.call(null,[cljs.core.str("  "),cljs.core.str(specljs.report.progress.full_name.call(null,result.characteristic))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.error_message.call(null,result.exception))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.failure_source.call(null,result.exception))].join('')));
{
var G__19666 = seq__19662;
var G__19667 = chunk__19663;
var G__19668 = count__19664;
var G__19669 = (i__19665 + 1);
seq__19662 = G__19666;
chunk__19663 = G__19667;
count__19664 = G__19668;
i__19665 = G__19669;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19662);if(temp__4092__auto__)
{var seq__19662__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19662__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__19662__$1);{
var G__19670 = cljs.core.chunk_rest.call(null,seq__19662__$1);
var G__19671 = c__3568__auto__;
var G__19672 = cljs.core.count.call(null,c__3568__auto__);
var G__19673 = 0;
seq__19662 = G__19670;
chunk__19663 = G__19671;
count__19664 = G__19672;
i__19665 = G__19673;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__19662__$1);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.yellow.call(null,[cljs.core.str("  "),cljs.core.str(specljs.report.progress.full_name.call(null,result.characteristic))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.error_message.call(null,result.exception))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.failure_source.call(null,result.exception))].join('')));
{
var G__19674 = cljs.core.next.call(null,seq__19662__$1);
var G__19675 = null;
var G__19676 = 0;
var G__19677 = 0;
seq__19662 = G__19674;
chunk__19663 = G__19675;
count__19664 = G__19676;
i__19665 = G__19677;
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
var seq__19684_19690 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,cljs.core.iterate.call(null,cljs.core.inc,1),error_results)));var chunk__19685_19691 = null;var count__19686_19692 = 0;var i__19687_19693 = 0;while(true){
if((i__19687_19693 < count__19686_19692))
{var vec__19688_19694 = cljs.core._nth.call(null,chunk__19685_19691,i__19687_19693);var number_19695 = cljs.core.nth.call(null,vec__19688_19694,0,null);var result_19696 = cljs.core.nth.call(null,vec__19688_19694,1,null);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.indent.call(null,1,number_19695,") ",specljs.reporting.red.call(null,[cljs.core.str(result_19696.exception)].join(''))));
cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.reporting.stack_trace_str.call(null,result_19696.exception))));
{
var G__19697 = seq__19684_19690;
var G__19698 = chunk__19685_19691;
var G__19699 = count__19686_19692;
var G__19700 = (i__19687_19693 + 1);
seq__19684_19690 = G__19697;
chunk__19685_19691 = G__19698;
count__19686_19692 = G__19699;
i__19687_19693 = G__19700;
continue;
}
} else
{var temp__4092__auto___19701 = cljs.core.seq.call(null,seq__19684_19690);if(temp__4092__auto___19701)
{var seq__19684_19702__$1 = temp__4092__auto___19701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19684_19702__$1))
{var c__3568__auto___19703 = cljs.core.chunk_first.call(null,seq__19684_19702__$1);{
var G__19704 = cljs.core.chunk_rest.call(null,seq__19684_19702__$1);
var G__19705 = c__3568__auto___19703;
var G__19706 = cljs.core.count.call(null,c__3568__auto___19703);
var G__19707 = 0;
seq__19684_19690 = G__19704;
chunk__19685_19691 = G__19705;
count__19686_19692 = G__19706;
i__19687_19693 = G__19707;
continue;
}
} else
{var vec__19689_19708 = cljs.core.first.call(null,seq__19684_19702__$1);var number_19709 = cljs.core.nth.call(null,vec__19689_19708,0,null);var result_19710 = cljs.core.nth.call(null,vec__19689_19708,1,null);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.indent.call(null,1,number_19709,") ",specljs.reporting.red.call(null,[cljs.core.str(result_19710.exception)].join(''))));
cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.reporting.stack_trace_str.call(null,result_19710.exception))));
{
var G__19711 = cljs.core.next.call(null,seq__19684_19702__$1);
var G__19712 = null;
var G__19713 = 0;
var G__19714 = 0;
seq__19684_19690 = G__19711;
chunk__19685_19691 = G__19712;
count__19686_19692 = G__19713;
i__19687_19693 = G__19714;
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
