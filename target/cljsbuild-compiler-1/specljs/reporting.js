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
specljs.reporting.tally_time = (function tally_time(results){return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__19961_SHARP_){return p1__19961_SHARP_.seconds;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PassResult,(function (result,reporters){var seq__19962 = cljs.core.seq.call(null,reporters);var chunk__19963 = null;var count__19964 = 0;var i__19965 = 0;while(true){
if((i__19965 < count__19964))
{var reporter = cljs.core._nth.call(null,chunk__19963,i__19965);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__19966 = seq__19962;
var G__19967 = chunk__19963;
var G__19968 = count__19964;
var G__19969 = (i__19965 + 1);
seq__19962 = G__19966;
chunk__19963 = G__19967;
count__19964 = G__19968;
i__19965 = G__19969;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19962);if(temp__4092__auto__)
{var seq__19962__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19962__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__19962__$1);{
var G__19970 = cljs.core.chunk_rest.call(null,seq__19962__$1);
var G__19971 = c__3568__auto__;
var G__19972 = cljs.core.count.call(null,c__3568__auto__);
var G__19973 = 0;
seq__19962 = G__19970;
chunk__19963 = G__19971;
count__19964 = G__19972;
i__19965 = G__19973;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__19962__$1);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__19974 = cljs.core.next.call(null,seq__19962__$1);
var G__19975 = null;
var G__19976 = 0;
var G__19977 = 0;
seq__19962 = G__19974;
chunk__19963 = G__19975;
count__19964 = G__19976;
i__19965 = G__19977;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.FailResult,(function (result,reporters){var seq__19978 = cljs.core.seq.call(null,reporters);var chunk__19979 = null;var count__19980 = 0;var i__19981 = 0;while(true){
if((i__19981 < count__19980))
{var reporter = cljs.core._nth.call(null,chunk__19979,i__19981);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__19982 = seq__19978;
var G__19983 = chunk__19979;
var G__19984 = count__19980;
var G__19985 = (i__19981 + 1);
seq__19978 = G__19982;
chunk__19979 = G__19983;
count__19980 = G__19984;
i__19981 = G__19985;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19978);if(temp__4092__auto__)
{var seq__19978__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19978__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__19978__$1);{
var G__19986 = cljs.core.chunk_rest.call(null,seq__19978__$1);
var G__19987 = c__3568__auto__;
var G__19988 = cljs.core.count.call(null,c__3568__auto__);
var G__19989 = 0;
seq__19978 = G__19986;
chunk__19979 = G__19987;
count__19980 = G__19988;
i__19981 = G__19989;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__19978__$1);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__19990 = cljs.core.next.call(null,seq__19978__$1);
var G__19991 = null;
var G__19992 = 0;
var G__19993 = 0;
seq__19978 = G__19990;
chunk__19979 = G__19991;
count__19980 = G__19992;
i__19981 = G__19993;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PendingResult,(function (result,reporters){var seq__19994 = cljs.core.seq.call(null,reporters);var chunk__19995 = null;var count__19996 = 0;var i__19997 = 0;while(true){
if((i__19997 < count__19996))
{var reporter = cljs.core._nth.call(null,chunk__19995,i__19997);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__19998 = seq__19994;
var G__19999 = chunk__19995;
var G__20000 = count__19996;
var G__20001 = (i__19997 + 1);
seq__19994 = G__19998;
chunk__19995 = G__19999;
count__19996 = G__20000;
i__19997 = G__20001;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19994);if(temp__4092__auto__)
{var seq__19994__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19994__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__19994__$1);{
var G__20002 = cljs.core.chunk_rest.call(null,seq__19994__$1);
var G__20003 = c__3568__auto__;
var G__20004 = cljs.core.count.call(null,c__3568__auto__);
var G__20005 = 0;
seq__19994 = G__20002;
chunk__19995 = G__20003;
count__19996 = G__20004;
i__19997 = G__20005;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__19994__$1);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__20006 = cljs.core.next.call(null,seq__19994__$1);
var G__20007 = null;
var G__20008 = 0;
var G__20009 = 0;
seq__19994 = G__20006;
chunk__19995 = G__20007;
count__19996 = G__20008;
i__19997 = G__20009;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.ErrorResult,(function (result,reporters){var seq__20010 = cljs.core.seq.call(null,reporters);var chunk__20011 = null;var count__20012 = 0;var i__20013 = 0;while(true){
if((i__20013 < count__20012))
{var reporter = cljs.core._nth.call(null,chunk__20011,i__20013);specljs.reporting.report_error.call(null,reporter,result);
{
var G__20014 = seq__20010;
var G__20015 = chunk__20011;
var G__20016 = count__20012;
var G__20017 = (i__20013 + 1);
seq__20010 = G__20014;
chunk__20011 = G__20015;
count__20012 = G__20016;
i__20013 = G__20017;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20010);if(temp__4092__auto__)
{var seq__20010__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20010__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__20010__$1);{
var G__20018 = cljs.core.chunk_rest.call(null,seq__20010__$1);
var G__20019 = c__3568__auto__;
var G__20020 = cljs.core.count.call(null,c__3568__auto__);
var G__20021 = 0;
seq__20010 = G__20018;
chunk__20011 = G__20019;
count__20012 = G__20020;
i__20013 = G__20021;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__20010__$1);specljs.reporting.report_error.call(null,reporter,result);
{
var G__20022 = cljs.core.next.call(null,seq__20010__$1);
var G__20023 = null;
var G__20024 = 0;
var G__20025 = 0;
seq__20010 = G__20022;
chunk__20011 = G__20023;
count__20012 = G__20024;
i__20013 = G__20025;
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
specljs.reporting.print_stack_levels = (function print_stack_levels(exception){var levels_20026 = specljs.platform.stack_trace.call(null,exception);var elides_20027 = 0;while(true){
if(cljs.core.seq.call(null,levels_20026))
{var level_20028 = cljs.core.first.call(null,levels_20026);if(cljs.core.truth_(specljs.platform.elide_level_QMARK_.call(null,level_20028)))
{{
var G__20029 = cljs.core.rest.call(null,levels_20026);
var G__20030 = (elides_20027 + 1);
levels_20026 = G__20029;
elides_20027 = G__20030;
continue;
}
} else
{specljs.reporting.print_elides.call(null,elides_20027);
cljs.core.println.call(null,[cljs.core.str(level_20028)].join(''));
{
var G__20031 = cljs.core.rest.call(null,levels_20026);
var G__20032 = 0;
levels_20026 = G__20031;
elides_20027 = G__20032;
continue;
}
}
} else
{specljs.reporting.print_elides.call(null,elides_20027);
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
specljs.reporting.stack_trace_str = (function stack_trace_str(exception){var sb__3665__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_20035_20037 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__3666__auto__){return sb__3665__auto__.append(x__3666__auto__);
});
if(cljs.core.truth_(specljs.config._STAR_full_stack_trace_QMARK__STAR_))
{specljs.platform.print_stack_trace.call(null,exception);
} else
{specljs.reporting.print_exception.call(null,null,exception);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20035_20037;
}return [cljs.core.str(sb__3665__auto__)].join('');
});
/**
* @param {...*} var_args
*/
specljs.reporting.prefix = (function() { 
var prefix__delegate = function (pre,args){var value = cljs.core.apply.call(null,cljs.core.str,args);var lines = clojure.string.split.call(null,value,/[\r\n]+/);var prefixed_lines = cljs.core.map.call(null,((function (value,lines){
return (function (p1__20038_SHARP_){return [cljs.core.str(pre),cljs.core.str(p1__20038_SHARP_)].join('');
});})(value,lines))
,lines);return clojure.string.join.call(null,specljs.platform.endl,prefixed_lines);
};
var prefix = function (pre,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return prefix__delegate.call(this,pre,args);};
prefix.cljs$lang$maxFixedArity = 1;
prefix.cljs$lang$applyTo = (function (arglist__20039){
var pre = cljs.core.first(arglist__20039);
var args = cljs.core.rest(arglist__20039);
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
indent.cljs$lang$applyTo = (function (arglist__20040){
var n = cljs.core.first(arglist__20040);
var args = cljs.core.rest(arglist__20040);
return indent__delegate(n,args);
});
indent.cljs$core$IFn$_invoke$arity$variadic = indent__delegate;
return indent;
})()
;
specljs.reporting.report_description_STAR_ = (function report_description_STAR_(reporters,description){var seq__20045 = cljs.core.seq.call(null,reporters);var chunk__20046 = null;var count__20047 = 0;var i__20048 = 0;while(true){
if((i__20048 < count__20047))
{var reporter = cljs.core._nth.call(null,chunk__20046,i__20048);specljs.reporting.report_description.call(null,reporter,description);
{
var G__20049 = seq__20045;
var G__20050 = chunk__20046;
var G__20051 = count__20047;
var G__20052 = (i__20048 + 1);
seq__20045 = G__20049;
chunk__20046 = G__20050;
count__20047 = G__20051;
i__20048 = G__20052;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20045);if(temp__4092__auto__)
{var seq__20045__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20045__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__20045__$1);{
var G__20053 = cljs.core.chunk_rest.call(null,seq__20045__$1);
var G__20054 = c__3568__auto__;
var G__20055 = cljs.core.count.call(null,c__3568__auto__);
var G__20056 = 0;
seq__20045 = G__20053;
chunk__20046 = G__20054;
count__20047 = G__20055;
i__20048 = G__20056;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__20045__$1);specljs.reporting.report_description.call(null,reporter,description);
{
var G__20057 = cljs.core.next.call(null,seq__20045__$1);
var G__20058 = null;
var G__20059 = 0;
var G__20060 = 0;
seq__20045 = G__20057;
chunk__20046 = G__20058;
count__20047 = G__20059;
i__20048 = G__20060;
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
specljs.reporting.report_runs_STAR_ = (function report_runs_STAR_(reporters,results){var seq__20065 = cljs.core.seq.call(null,reporters);var chunk__20066 = null;var count__20067 = 0;var i__20068 = 0;while(true){
if((i__20068 < count__20067))
{var reporter = cljs.core._nth.call(null,chunk__20066,i__20068);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__20069 = seq__20065;
var G__20070 = chunk__20066;
var G__20071 = count__20067;
var G__20072 = (i__20068 + 1);
seq__20065 = G__20069;
chunk__20066 = G__20070;
count__20067 = G__20071;
i__20068 = G__20072;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20065);if(temp__4092__auto__)
{var seq__20065__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20065__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__20065__$1);{
var G__20073 = cljs.core.chunk_rest.call(null,seq__20065__$1);
var G__20074 = c__3568__auto__;
var G__20075 = cljs.core.count.call(null,c__3568__auto__);
var G__20076 = 0;
seq__20065 = G__20073;
chunk__20066 = G__20074;
count__20067 = G__20075;
i__20068 = G__20076;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__20065__$1);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__20077 = cljs.core.next.call(null,seq__20065__$1);
var G__20078 = null;
var G__20079 = 0;
var G__20080 = 0;
seq__20065 = G__20077;
chunk__20066 = G__20078;
count__20067 = G__20079;
i__20068 = G__20080;
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
specljs.reporting.report_message_STAR_ = (function report_message_STAR_(reporters,message){var seq__20085 = cljs.core.seq.call(null,reporters);var chunk__20086 = null;var count__20087 = 0;var i__20088 = 0;while(true){
if((i__20088 < count__20087))
{var reporter = cljs.core._nth.call(null,chunk__20086,i__20088);specljs.reporting.report_message.call(null,reporter,message);
{
var G__20089 = seq__20085;
var G__20090 = chunk__20086;
var G__20091 = count__20087;
var G__20092 = (i__20088 + 1);
seq__20085 = G__20089;
chunk__20086 = G__20090;
count__20087 = G__20091;
i__20088 = G__20092;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20085);if(temp__4092__auto__)
{var seq__20085__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20085__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__20085__$1);{
var G__20093 = cljs.core.chunk_rest.call(null,seq__20085__$1);
var G__20094 = c__3568__auto__;
var G__20095 = cljs.core.count.call(null,c__3568__auto__);
var G__20096 = 0;
seq__20085 = G__20093;
chunk__20086 = G__20094;
count__20087 = G__20095;
i__20088 = G__20096;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__20085__$1);specljs.reporting.report_message.call(null,reporter,message);
{
var G__20097 = cljs.core.next.call(null,seq__20085__$1);
var G__20098 = null;
var G__20099 = 0;
var G__20100 = 0;
seq__20085 = G__20097;
chunk__20086 = G__20098;
count__20087 = G__20099;
i__20088 = G__20100;
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
specljs.reporting.report_error_STAR_ = (function report_error_STAR_(reporters,exception){var seq__20105 = cljs.core.seq.call(null,reporters);var chunk__20106 = null;var count__20107 = 0;var i__20108 = 0;while(true){
if((i__20108 < count__20107))
{var reporter = cljs.core._nth.call(null,chunk__20106,i__20108);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__20109 = seq__20105;
var G__20110 = chunk__20106;
var G__20111 = count__20107;
var G__20112 = (i__20108 + 1);
seq__20105 = G__20109;
chunk__20106 = G__20110;
count__20107 = G__20111;
i__20108 = G__20112;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20105);if(temp__4092__auto__)
{var seq__20105__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20105__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__20105__$1);{
var G__20113 = cljs.core.chunk_rest.call(null,seq__20105__$1);
var G__20114 = c__3568__auto__;
var G__20115 = cljs.core.count.call(null,c__3568__auto__);
var G__20116 = 0;
seq__20105 = G__20113;
chunk__20106 = G__20114;
count__20107 = G__20115;
i__20108 = G__20116;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__20105__$1);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__20117 = cljs.core.next.call(null,seq__20105__$1);
var G__20118 = null;
var G__20119 = 0;
var G__20120 = 0;
seq__20105 = G__20117;
chunk__20106 = G__20118;
count__20107 = G__20119;
i__20108 = G__20120;
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
