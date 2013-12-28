goog.provide('specljs.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('specljs.results');
goog.require('specljs.config');
goog.require('specljs.platform');
goog.require('specljs.results');
goog.require('specljs.platform');
goog.require('specljs.config');
goog.require('goog.string');
goog.require('clojure.string');
specljs.reporting.tally_time = (function tally_time(results){return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__18502_SHARP_){return p1__18502_SHARP_.seconds;
}),results));
});
specljs.reporting.Reporter = {};
specljs.reporting.report_message = (function report_message(reporter,message){if((function (){var and__3941__auto__ = reporter;if(and__3941__auto__)
{return reporter.specljs$reporting$Reporter$report_message$arity$2;
} else
{return and__3941__auto__;
}
})())
{return reporter.specljs$reporting$Reporter$report_message$arity$2(reporter,message);
} else
{var x__3437__auto__ = (((reporter == null))?null:reporter);return (function (){var or__3943__auto__ = (specljs.reporting.report_message[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.reporting.report_message["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
})().call(null,reporter,message);
}
});
specljs.reporting.report_description = (function report_description(this$,description){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$reporting$Reporter$report_description$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_description$arity$2(this$,description);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.reporting.report_description[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.reporting.report_description["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
})().call(null,this$,description);
}
});
specljs.reporting.report_pass = (function report_pass(this$,result){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$reporting$Reporter$report_pass$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_pass$arity$2(this$,result);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.reporting.report_pass[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.reporting.report_pass["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
})().call(null,this$,result);
}
});
specljs.reporting.report_pending = (function report_pending(this$,result){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$reporting$Reporter$report_pending$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_pending$arity$2(this$,result);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.reporting.report_pending[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.reporting.report_pending["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
})().call(null,this$,result);
}
});
specljs.reporting.report_fail = (function report_fail(this$,result){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$reporting$Reporter$report_fail$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_fail$arity$2(this$,result);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.reporting.report_fail[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.reporting.report_fail["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
})().call(null,this$,result);
}
});
specljs.reporting.report_runs = (function report_runs(this$,results){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$reporting$Reporter$report_runs$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_runs$arity$2(this$,results);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.reporting.report_runs[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.reporting.report_runs["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
})().call(null,this$,results);
}
});
specljs.reporting.report_error = (function report_error(this$,exception){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$reporting$Reporter$report_error$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_error$arity$2(this$,exception);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.reporting.report_error[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.reporting.report_error["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
})().call(null,this$,exception);
}
});
specljs.reporting.report_run = (function (){var method_table__3625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3626__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3627__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3628__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3629__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("report-run",(function (result,reporters){return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__3629__auto__,method_table__3625__auto__,prefer_table__3626__auto__,method_cache__3627__auto__,cached_hierarchy__3628__auto__));
})();
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PassResult,(function (result,reporters){var seq__18503 = cljs.core.seq.call(null,reporters);var chunk__18504 = null;var count__18505 = 0;var i__18506 = 0;while(true){
if((i__18506 < count__18505))
{var reporter = cljs.core._nth.call(null,chunk__18504,i__18506);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__18507 = seq__18503;
var G__18508 = chunk__18504;
var G__18509 = count__18505;
var G__18510 = (i__18506 + 1);
seq__18503 = G__18507;
chunk__18504 = G__18508;
count__18505 = G__18509;
i__18506 = G__18510;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18503);if(temp__4092__auto__)
{var seq__18503__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18503__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18503__$1);{
var G__18511 = cljs.core.chunk_rest.call(null,seq__18503__$1);
var G__18512 = c__3568__auto__;
var G__18513 = cljs.core.count.call(null,c__3568__auto__);
var G__18514 = 0;
seq__18503 = G__18511;
chunk__18504 = G__18512;
count__18505 = G__18513;
i__18506 = G__18514;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18503__$1);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__18515 = cljs.core.next.call(null,seq__18503__$1);
var G__18516 = null;
var G__18517 = 0;
var G__18518 = 0;
seq__18503 = G__18515;
chunk__18504 = G__18516;
count__18505 = G__18517;
i__18506 = G__18518;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.FailResult,(function (result,reporters){var seq__18519 = cljs.core.seq.call(null,reporters);var chunk__18520 = null;var count__18521 = 0;var i__18522 = 0;while(true){
if((i__18522 < count__18521))
{var reporter = cljs.core._nth.call(null,chunk__18520,i__18522);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__18523 = seq__18519;
var G__18524 = chunk__18520;
var G__18525 = count__18521;
var G__18526 = (i__18522 + 1);
seq__18519 = G__18523;
chunk__18520 = G__18524;
count__18521 = G__18525;
i__18522 = G__18526;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18519);if(temp__4092__auto__)
{var seq__18519__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18519__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18519__$1);{
var G__18527 = cljs.core.chunk_rest.call(null,seq__18519__$1);
var G__18528 = c__3568__auto__;
var G__18529 = cljs.core.count.call(null,c__3568__auto__);
var G__18530 = 0;
seq__18519 = G__18527;
chunk__18520 = G__18528;
count__18521 = G__18529;
i__18522 = G__18530;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18519__$1);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__18531 = cljs.core.next.call(null,seq__18519__$1);
var G__18532 = null;
var G__18533 = 0;
var G__18534 = 0;
seq__18519 = G__18531;
chunk__18520 = G__18532;
count__18521 = G__18533;
i__18522 = G__18534;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PendingResult,(function (result,reporters){var seq__18535 = cljs.core.seq.call(null,reporters);var chunk__18536 = null;var count__18537 = 0;var i__18538 = 0;while(true){
if((i__18538 < count__18537))
{var reporter = cljs.core._nth.call(null,chunk__18536,i__18538);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__18539 = seq__18535;
var G__18540 = chunk__18536;
var G__18541 = count__18537;
var G__18542 = (i__18538 + 1);
seq__18535 = G__18539;
chunk__18536 = G__18540;
count__18537 = G__18541;
i__18538 = G__18542;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18535);if(temp__4092__auto__)
{var seq__18535__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18535__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18535__$1);{
var G__18543 = cljs.core.chunk_rest.call(null,seq__18535__$1);
var G__18544 = c__3568__auto__;
var G__18545 = cljs.core.count.call(null,c__3568__auto__);
var G__18546 = 0;
seq__18535 = G__18543;
chunk__18536 = G__18544;
count__18537 = G__18545;
i__18538 = G__18546;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18535__$1);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__18547 = cljs.core.next.call(null,seq__18535__$1);
var G__18548 = null;
var G__18549 = 0;
var G__18550 = 0;
seq__18535 = G__18547;
chunk__18536 = G__18548;
count__18537 = G__18549;
i__18538 = G__18550;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.ErrorResult,(function (result,reporters){var seq__18551 = cljs.core.seq.call(null,reporters);var chunk__18552 = null;var count__18553 = 0;var i__18554 = 0;while(true){
if((i__18554 < count__18553))
{var reporter = cljs.core._nth.call(null,chunk__18552,i__18554);specljs.reporting.report_error.call(null,reporter,result);
{
var G__18555 = seq__18551;
var G__18556 = chunk__18552;
var G__18557 = count__18553;
var G__18558 = (i__18554 + 1);
seq__18551 = G__18555;
chunk__18552 = G__18556;
count__18553 = G__18557;
i__18554 = G__18558;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18551);if(temp__4092__auto__)
{var seq__18551__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18551__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18551__$1);{
var G__18559 = cljs.core.chunk_rest.call(null,seq__18551__$1);
var G__18560 = c__3568__auto__;
var G__18561 = cljs.core.count.call(null,c__3568__auto__);
var G__18562 = 0;
seq__18551 = G__18559;
chunk__18552 = G__18560;
count__18553 = G__18561;
i__18554 = G__18562;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18551__$1);specljs.reporting.report_error.call(null,reporter,result);
{
var G__18563 = cljs.core.next.call(null,seq__18551__$1);
var G__18564 = null;
var G__18565 = 0;
var G__18566 = 0;
seq__18551 = G__18563;
chunk__18552 = G__18564;
count__18553 = G__18565;
i__18554 = G__18566;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
specljs.reporting.stylizer = (function stylizer(code){return (function (text){if(cljs.core.truth_(specljs.config._STAR_color_QMARK__STAR_))
{return [cljs.core.str("\u001B["),cljs.core.str(code),cljs.core.str("m"),cljs.core.str(text),cljs.core.str("\u001B[0m")].join('');
} else
{return text;
}
});
});
specljs.reporting.red = specljs.reporting.stylizer.call(null,"31");
specljs.reporting.green = specljs.reporting.stylizer.call(null,"32");
specljs.reporting.yellow = specljs.reporting.stylizer.call(null,"33");
specljs.reporting.grey = specljs.reporting.stylizer.call(null,"90");
specljs.reporting.print_elides = (function print_elides(n){if((n > 0))
{return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else
{return null;
}
});
specljs.reporting.print_stack_levels = (function print_stack_levels(exception){var levels_18567 = specljs.platform.stack_trace.call(null,exception);var elides_18568 = 0;while(true){
if(cljs.core.seq.call(null,levels_18567))
{var level_18569 = cljs.core.first.call(null,levels_18567);if(cljs.core.truth_(specljs.platform.elide_level_QMARK_.call(null,level_18569)))
{{
var G__18570 = cljs.core.rest.call(null,levels_18567);
var G__18571 = (elides_18568 + 1);
levels_18567 = G__18570;
elides_18568 = G__18571;
continue;
}
} else
{specljs.reporting.print_elides.call(null,elides_18568);
cljs.core.println.call(null,[cljs.core.str(level_18569)].join(''));
{
var G__18572 = cljs.core.rest.call(null,levels_18567);
var G__18573 = 0;
levels_18567 = G__18572;
elides_18568 = G__18573;
continue;
}
}
} else
{specljs.reporting.print_elides.call(null,elides_18568);
}
break;
}
var temp__4090__auto__ = specljs.platform.cause.call(null,exception);if(cljs.core.truth_(temp__4090__auto__))
{var cause = temp__4090__auto__;return specljs.reporting.print_exception.call(null,"Caused by:",cause);
} else
{return null;
}
});
specljs.reporting.print_exception = (function print_exception(prefix,exception){if(cljs.core.truth_(prefix))
{cljs.core.println.call(null,prefix,[cljs.core.str(exception)].join(''));
} else
{cljs.core.println.call(null,[cljs.core.str(exception)].join(''));
}
return specljs.reporting.print_stack_levels.call(null,exception);
});
specljs.reporting.stack_trace_str = (function stack_trace_str(exception){var sb__3665__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_18576_18578 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__3666__auto__){return sb__3665__auto__.append(x__3666__auto__);
});
if(cljs.core.truth_(specljs.config._STAR_full_stack_trace_QMARK__STAR_))
{specljs.platform.print_stack_trace.call(null,exception);
} else
{specljs.reporting.print_exception.call(null,null,exception);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18576_18578;
}return [cljs.core.str(sb__3665__auto__)].join('');
});
/**
* @param {...*} var_args
*/
specljs.reporting.prefix = (function() { 
var prefix__delegate = function (pre,args){var value = cljs.core.apply.call(null,cljs.core.str,args);var lines = clojure.string.split.call(null,value,/[\r\n]+/);var prefixed_lines = cljs.core.map.call(null,((function (value,lines){
return (function (p1__18579_SHARP_){return [cljs.core.str(pre),cljs.core.str(p1__18579_SHARP_)].join('');
});})(value,lines))
,lines);return clojure.string.join.call(null,specljs.platform.endl,prefixed_lines);
};
var prefix = function (pre,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return prefix__delegate.call(this,pre,args);};
prefix.cljs$lang$maxFixedArity = 1;
prefix.cljs$lang$applyTo = (function (arglist__18580){
var pre = cljs.core.first(arglist__18580);
var args = cljs.core.rest(arglist__18580);
return prefix__delegate(pre,args);
});
prefix.cljs$core$IFn$_invoke$arity$variadic = prefix__delegate;
return prefix;
})()
;
/**
* @param {...*} var_args
*/
specljs.reporting.indent = (function() { 
var indent__delegate = function (n,args){var spaces = ((n * 2.0) | 0);var indention = cljs.core.reduce.call(null,((function (spaces){
return (function (p,_){return [cljs.core.str(" "),cljs.core.str(p)].join('');
});})(spaces))
,"",cljs.core.range.call(null,spaces));return cljs.core.apply.call(null,specljs.reporting.prefix,indention,args);
};
var indent = function (n,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return indent__delegate.call(this,n,args);};
indent.cljs$lang$maxFixedArity = 1;
indent.cljs$lang$applyTo = (function (arglist__18581){
var n = cljs.core.first(arglist__18581);
var args = cljs.core.rest(arglist__18581);
return indent__delegate(n,args);
});
indent.cljs$core$IFn$_invoke$arity$variadic = indent__delegate;
return indent;
})()
;
specljs.reporting.report_description_STAR_ = (function report_description_STAR_(reporters,description){var seq__18586 = cljs.core.seq.call(null,reporters);var chunk__18587 = null;var count__18588 = 0;var i__18589 = 0;while(true){
if((i__18589 < count__18588))
{var reporter = cljs.core._nth.call(null,chunk__18587,i__18589);specljs.reporting.report_description.call(null,reporter,description);
{
var G__18590 = seq__18586;
var G__18591 = chunk__18587;
var G__18592 = count__18588;
var G__18593 = (i__18589 + 1);
seq__18586 = G__18590;
chunk__18587 = G__18591;
count__18588 = G__18592;
i__18589 = G__18593;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18586);if(temp__4092__auto__)
{var seq__18586__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18586__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18586__$1);{
var G__18594 = cljs.core.chunk_rest.call(null,seq__18586__$1);
var G__18595 = c__3568__auto__;
var G__18596 = cljs.core.count.call(null,c__3568__auto__);
var G__18597 = 0;
seq__18586 = G__18594;
chunk__18587 = G__18595;
count__18588 = G__18596;
i__18589 = G__18597;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18586__$1);specljs.reporting.report_description.call(null,reporter,description);
{
var G__18598 = cljs.core.next.call(null,seq__18586__$1);
var G__18599 = null;
var G__18600 = 0;
var G__18601 = 0;
seq__18586 = G__18598;
chunk__18587 = G__18599;
count__18588 = G__18600;
i__18589 = G__18601;
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
specljs.reporting.report_runs_STAR_ = (function report_runs_STAR_(reporters,results){var seq__18606 = cljs.core.seq.call(null,reporters);var chunk__18607 = null;var count__18608 = 0;var i__18609 = 0;while(true){
if((i__18609 < count__18608))
{var reporter = cljs.core._nth.call(null,chunk__18607,i__18609);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__18610 = seq__18606;
var G__18611 = chunk__18607;
var G__18612 = count__18608;
var G__18613 = (i__18609 + 1);
seq__18606 = G__18610;
chunk__18607 = G__18611;
count__18608 = G__18612;
i__18609 = G__18613;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18606);if(temp__4092__auto__)
{var seq__18606__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18606__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18606__$1);{
var G__18614 = cljs.core.chunk_rest.call(null,seq__18606__$1);
var G__18615 = c__3568__auto__;
var G__18616 = cljs.core.count.call(null,c__3568__auto__);
var G__18617 = 0;
seq__18606 = G__18614;
chunk__18607 = G__18615;
count__18608 = G__18616;
i__18609 = G__18617;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18606__$1);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__18618 = cljs.core.next.call(null,seq__18606__$1);
var G__18619 = null;
var G__18620 = 0;
var G__18621 = 0;
seq__18606 = G__18618;
chunk__18607 = G__18619;
count__18608 = G__18620;
i__18609 = G__18621;
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
specljs.reporting.report_message_STAR_ = (function report_message_STAR_(reporters,message){var seq__18626 = cljs.core.seq.call(null,reporters);var chunk__18627 = null;var count__18628 = 0;var i__18629 = 0;while(true){
if((i__18629 < count__18628))
{var reporter = cljs.core._nth.call(null,chunk__18627,i__18629);specljs.reporting.report_message.call(null,reporter,message);
{
var G__18630 = seq__18626;
var G__18631 = chunk__18627;
var G__18632 = count__18628;
var G__18633 = (i__18629 + 1);
seq__18626 = G__18630;
chunk__18627 = G__18631;
count__18628 = G__18632;
i__18629 = G__18633;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18626);if(temp__4092__auto__)
{var seq__18626__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18626__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18626__$1);{
var G__18634 = cljs.core.chunk_rest.call(null,seq__18626__$1);
var G__18635 = c__3568__auto__;
var G__18636 = cljs.core.count.call(null,c__3568__auto__);
var G__18637 = 0;
seq__18626 = G__18634;
chunk__18627 = G__18635;
count__18628 = G__18636;
i__18629 = G__18637;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18626__$1);specljs.reporting.report_message.call(null,reporter,message);
{
var G__18638 = cljs.core.next.call(null,seq__18626__$1);
var G__18639 = null;
var G__18640 = 0;
var G__18641 = 0;
seq__18626 = G__18638;
chunk__18627 = G__18639;
count__18628 = G__18640;
i__18629 = G__18641;
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
specljs.reporting.report_error_STAR_ = (function report_error_STAR_(reporters,exception){var seq__18646 = cljs.core.seq.call(null,reporters);var chunk__18647 = null;var count__18648 = 0;var i__18649 = 0;while(true){
if((i__18649 < count__18648))
{var reporter = cljs.core._nth.call(null,chunk__18647,i__18649);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__18650 = seq__18646;
var G__18651 = chunk__18647;
var G__18652 = count__18648;
var G__18653 = (i__18649 + 1);
seq__18646 = G__18650;
chunk__18647 = G__18651;
count__18648 = G__18652;
i__18649 = G__18653;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18646);if(temp__4092__auto__)
{var seq__18646__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18646__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18646__$1);{
var G__18654 = cljs.core.chunk_rest.call(null,seq__18646__$1);
var G__18655 = c__3568__auto__;
var G__18656 = cljs.core.count.call(null,c__3568__auto__);
var G__18657 = 0;
seq__18646 = G__18654;
chunk__18647 = G__18655;
count__18648 = G__18656;
i__18649 = G__18657;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18646__$1);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__18658 = cljs.core.next.call(null,seq__18646__$1);
var G__18659 = null;
var G__18660 = 0;
var G__18661 = 0;
seq__18646 = G__18658;
chunk__18647 = G__18659;
count__18648 = G__18660;
i__18649 = G__18661;
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
