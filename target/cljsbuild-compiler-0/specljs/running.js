goog.provide('specljs.running');
goog.require('cljs.core');
goog.require('specljs.components');
goog.require('specljs.config');
goog.require('specljs.results');
goog.require('specljs.reporting');
goog.require('specljs.tags');
goog.require('specljs.platform');
goog.require('specljs.tags');
goog.require('specljs.results');
goog.require('specljs.reporting');
goog.require('specljs.platform');
goog.require('specljs.config');
goog.require('specljs.components');
goog.require('clojure.string');
specljs.running.eval_components = (function eval_components(components){var seq__18362 = cljs.core.seq.call(null,components);var chunk__18363 = null;var count__18364 = 0;var i__18365 = 0;while(true){
if((i__18365 < count__18364))
{var component = cljs.core._nth.call(null,chunk__18363,i__18365);component.body.call(null);
{
var G__18366 = seq__18362;
var G__18367 = chunk__18363;
var G__18368 = count__18364;
var G__18369 = (i__18365 + 1);
seq__18362 = G__18366;
chunk__18363 = G__18367;
count__18364 = G__18368;
i__18365 = G__18369;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18362);if(temp__4092__auto__)
{var seq__18362__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18362__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18362__$1);{
var G__18370 = cljs.core.chunk_rest.call(null,seq__18362__$1);
var G__18371 = c__3568__auto__;
var G__18372 = cljs.core.count.call(null,c__3568__auto__);
var G__18373 = 0;
seq__18362 = G__18370;
chunk__18363 = G__18371;
count__18364 = G__18372;
i__18365 = G__18373;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__18362__$1);component.body.call(null);
{
var G__18374 = cljs.core.next.call(null,seq__18362__$1);
var G__18375 = null;
var G__18376 = 0;
var G__18377 = 0;
seq__18362 = G__18374;
chunk__18363 = G__18375;
count__18364 = G__18376;
i__18365 = G__18377;
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
specljs.running.nested_fns = (function nested_fns(base,fns){if(cljs.core.seq.call(null,fns))
{return cljs.core.partial.call(null,cljs.core.first.call(null,fns),nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else
{return base;
}
});
specljs.running.eval_characteristic = (function eval_characteristic(befores,body,afters){specljs.running.eval_components.call(null,befores);
try{return body.call(null);
}finally {specljs.running.eval_components.call(null,afters);
}});
specljs.running.reset_withs = (function reset_withs(withs){var seq__18384 = cljs.core.seq.call(null,withs);var chunk__18385 = null;var count__18386 = 0;var i__18387 = 0;while(true){
if((i__18387 < count__18386))
{var with$ = cljs.core._nth.call(null,chunk__18385,i__18387);specljs.components.reset_with.call(null,with$);
{
var G__18388 = seq__18384;
var G__18389 = chunk__18385;
var G__18390 = count__18386;
var G__18391 = (i__18387 + 1);
seq__18384 = G__18388;
chunk__18385 = G__18389;
count__18386 = G__18390;
i__18387 = G__18391;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18384);if(temp__4092__auto__)
{var seq__18384__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18384__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18384__$1);{
var G__18392 = cljs.core.chunk_rest.call(null,seq__18384__$1);
var G__18393 = c__3568__auto__;
var G__18394 = cljs.core.count.call(null,c__3568__auto__);
var G__18395 = 0;
seq__18384 = G__18392;
chunk__18385 = G__18393;
count__18386 = G__18394;
i__18387 = G__18395;
continue;
}
} else
{var with$ = cljs.core.first.call(null,seq__18384__$1);specljs.components.reset_with.call(null,with$);
{
var G__18396 = cljs.core.next.call(null,seq__18384__$1);
var G__18397 = null;
var G__18398 = 0;
var G__18399 = 0;
seq__18384 = G__18396;
chunk__18385 = G__18397;
count__18386 = G__18398;
i__18387 = G__18399;
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
specljs.running.collect_components = (function collect_components(getter,description){var description__$1 = description;var components = cljs.core.PersistentVector.EMPTY;while(true){
if(cljs.core.truth_(description__$1))
{{
var G__18400 = cljs.core.deref.call(null,description__$1.parent);
var G__18401 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__18400;
components = G__18401;
continue;
}
} else
{return components;
}
break;
}
});
specljs.running.report_result = (function report_result(result_constructor,characteristic,start_time,reporters,failure){var present_args = cljs.core.filter.call(null,cljs.core.identity,cljs.core.PersistentVector.fromArray([characteristic,specljs.platform.secs_since.call(null,start_time),failure], true));var result = cljs.core.apply.call(null,result_constructor,present_args);specljs.reporting.report_run.call(null,result,reporters);
return result;
});
specljs.running.do_characteristic = (function do_characteristic(characteristic,reporters){var description = cljs.core.deref.call(null,characteristic.parent);var befores = specljs.running.collect_components.call(null,((function (description){
return (function (p1__18402_SHARP_){return cljs.core.deref.call(null,p1__18402_SHARP_.befores);
});})(description))
,description);var afters = specljs.running.collect_components.call(null,((function (description,befores){
return (function (p1__18403_SHARP_){return cljs.core.deref.call(null,p1__18403_SHARP_.afters);
});})(description,befores))
,description);var core_body = characteristic.body;var before_and_after_body = ((function (description,befores,afters,core_body){
return (function (){return specljs.running.eval_characteristic.call(null,befores,core_body,afters);
});})(description,befores,afters,core_body))
;var arounds = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body){
return (function (p1__18404_SHARP_){return cljs.core.deref.call(null,p1__18404_SHARP_.arounds);
});})(description,befores,afters,core_body,before_and_after_body))
,description);var full_body = specljs.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds){
return (function (p1__18405_SHARP_){return p1__18405_SHARP_.body;
});})(description,befores,afters,core_body,before_and_after_body,arounds))
,arounds));var withs = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds,full_body){
return (function (p1__18406_SHARP_){return cljs.core.deref.call(null,p1__18406_SHARP_.withs);
});})(description,befores,afters,core_body,before_and_after_body,arounds,full_body))
,description);var start_time = specljs.platform.current_time.call(null);try{full_body.call(null);
return specljs.running.report_result.call(null,specljs.results.pass_result,characteristic,start_time,reporters,null);
}catch (e18408){if((e18408 instanceof Object))
{var e = e18408;if(cljs.core.truth_(specljs.platform.pending_QMARK_.call(null,e)))
{return specljs.running.report_result.call(null,specljs.results.pending_result,characteristic,start_time,reporters,e);
} else
{return specljs.running.report_result.call(null,specljs.results.fail_result,characteristic,start_time,reporters,e);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18408;
} else
{return null;
}
}
}finally {specljs.running.reset_withs.call(null,withs);
}});
specljs.running.do_characteristics = (function do_characteristics(characteristics,reporters){return cljs.core.doall.call(null,(function (){var iter__3537__auto__ = (function iter__18413(s__18414){return (new cljs.core.LazySeq(null,false,(function (){var s__18414__$1 = s__18414;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18414__$1);if(temp__4092__auto__)
{var s__18414__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18414__$2))
{var c__3535__auto__ = cljs.core.chunk_first.call(null,s__18414__$2);var size__3536__auto__ = cljs.core.count.call(null,c__3535__auto__);var b__18416 = cljs.core.chunk_buffer.call(null,size__3536__auto__);if((function (){var i__18415 = 0;while(true){
if((i__18415 < size__3536__auto__))
{var characteristic = cljs.core._nth.call(null,c__3535__auto__,i__18415);cljs.core.chunk_append.call(null,b__18416,specljs.running.do_characteristic.call(null,characteristic,reporters));
{
var G__18417 = (i__18415 + 1);
i__18415 = G__18417;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18416),iter__18413.call(null,cljs.core.chunk_rest.call(null,s__18414__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18416),null);
}
} else
{var characteristic = cljs.core.first.call(null,s__18414__$2);return cljs.core.cons.call(null,specljs.running.do_characteristic.call(null,characteristic,reporters),iter__18413.call(null,cljs.core.rest.call(null,s__18414__$2)));
}
} else
{return null;
}
break;
}
}),null));
});return iter__3537__auto__.call(null,characteristics);
})());
});
specljs.running.do_child_contexts = (function do_child_contexts(context,results,reporters){var results__$1 = results;var contexts = cljs.core.deref.call(null,context.children);while(true){
if(cljs.core.seq.call(null,contexts))
{{
var G__18418 = cljs.core.concat.call(null,results__$1,specljs.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__18419 = cljs.core.rest.call(null,contexts);
results__$1 = G__18418;
contexts = G__18419;
continue;
}
} else
{specljs.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));
return results__$1;
}
break;
}
});
specljs.running.results_for_context = (function results_for_context(context,reporters){if(cljs.core.truth_(specljs.tags.pass_tag_filter_QMARK_.call(null,specljs.tags.tags_for.call(null,context))))
{return specljs.running.do_characteristics.call(null,cljs.core.deref.call(null,context.charcteristics),reporters);
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
specljs.running.with_withs_bound = (function with_withs_bound(description,body){var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));var ns = clojure.string.replace.call(null,description.ns,"-","_");var var_names = cljs.core.map.call(null,((function (withs,ns){
return (function (p1__18420_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__18420_SHARP_.name))].join('');
});})(withs,ns))
,withs);var unique_names = cljs.core.map.call(null,((function (withs,ns,var_names){
return (function (p1__18421_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__18421_SHARP_.unique_name))].join('');
});})(withs,ns,var_names))
,withs);var seq__18435_18448 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,var_names,unique_names)));var chunk__18436_18449 = null;var count__18437_18450 = 0;var i__18438_18451 = 0;while(true){
if((i__18438_18451 < count__18437_18450))
{var vec__18439_18452 = cljs.core._nth.call(null,chunk__18436_18449,i__18438_18451);var n_18453 = cljs.core.nth.call(null,vec__18439_18452,0,null);var un_18454 = cljs.core.nth.call(null,vec__18439_18452,1,null);var code_18455 = [cljs.core.str(n_18453),cljs.core.str(" = "),cljs.core.str(un_18454),cljs.core.str(";")].join('');eval(code_18455);
{
var G__18456 = seq__18435_18448;
var G__18457 = chunk__18436_18449;
var G__18458 = count__18437_18450;
var G__18459 = (i__18438_18451 + 1);
seq__18435_18448 = G__18456;
chunk__18436_18449 = G__18457;
count__18437_18450 = G__18458;
i__18438_18451 = G__18459;
continue;
}
} else
{var temp__4092__auto___18460 = cljs.core.seq.call(null,seq__18435_18448);if(temp__4092__auto___18460)
{var seq__18435_18461__$1 = temp__4092__auto___18460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18435_18461__$1))
{var c__3568__auto___18462 = cljs.core.chunk_first.call(null,seq__18435_18461__$1);{
var G__18463 = cljs.core.chunk_rest.call(null,seq__18435_18461__$1);
var G__18464 = c__3568__auto___18462;
var G__18465 = cljs.core.count.call(null,c__3568__auto___18462);
var G__18466 = 0;
seq__18435_18448 = G__18463;
chunk__18436_18449 = G__18464;
count__18437_18450 = G__18465;
i__18438_18451 = G__18466;
continue;
}
} else
{var vec__18440_18467 = cljs.core.first.call(null,seq__18435_18461__$1);var n_18468 = cljs.core.nth.call(null,vec__18440_18467,0,null);var un_18469 = cljs.core.nth.call(null,vec__18440_18467,1,null);var code_18470 = [cljs.core.str(n_18468),cljs.core.str(" = "),cljs.core.str(un_18469),cljs.core.str(";")].join('');eval(code_18470);
{
var G__18471 = cljs.core.next.call(null,seq__18435_18461__$1);
var G__18472 = null;
var G__18473 = 0;
var G__18474 = 0;
seq__18435_18448 = G__18471;
chunk__18436_18449 = G__18472;
count__18437_18450 = G__18473;
i__18438_18451 = G__18474;
continue;
}
}
} else
{}
}
break;
}
try{return body.call(null);
}finally {var seq__18442_18475 = cljs.core.seq.call(null,var_names);var chunk__18443_18476 = null;var count__18444_18477 = 0;var i__18445_18478 = 0;while(true){
if((i__18445_18478 < count__18444_18477))
{var vec__18446_18479 = cljs.core._nth.call(null,chunk__18443_18476,i__18445_18478);var n_18480 = cljs.core.nth.call(null,vec__18446_18479,0,null);var code_18481 = [cljs.core.str(n_18480),cljs.core.str(" = null;")].join('');eval(code_18481);
{
var G__18482 = seq__18442_18475;
var G__18483 = chunk__18443_18476;
var G__18484 = count__18444_18477;
var G__18485 = (i__18445_18478 + 1);
seq__18442_18475 = G__18482;
chunk__18443_18476 = G__18483;
count__18444_18477 = G__18484;
i__18445_18478 = G__18485;
continue;
}
} else
{var temp__4092__auto___18486 = cljs.core.seq.call(null,seq__18442_18475);if(temp__4092__auto___18486)
{var seq__18442_18487__$1 = temp__4092__auto___18486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18442_18487__$1))
{var c__3568__auto___18488 = cljs.core.chunk_first.call(null,seq__18442_18487__$1);{
var G__18489 = cljs.core.chunk_rest.call(null,seq__18442_18487__$1);
var G__18490 = c__3568__auto___18488;
var G__18491 = cljs.core.count.call(null,c__3568__auto___18488);
var G__18492 = 0;
seq__18442_18475 = G__18489;
chunk__18443_18476 = G__18490;
count__18444_18477 = G__18491;
i__18445_18478 = G__18492;
continue;
}
} else
{var vec__18447_18493 = cljs.core.first.call(null,seq__18442_18487__$1);var n_18494 = cljs.core.nth.call(null,vec__18447_18493,0,null);var code_18495 = [cljs.core.str(n_18494),cljs.core.str(" = null;")].join('');eval(code_18495);
{
var G__18496 = cljs.core.next.call(null,seq__18442_18487__$1);
var G__18497 = null;
var G__18498 = 0;
var G__18499 = 0;
seq__18442_18475 = G__18496;
chunk__18443_18476 = G__18497;
count__18444_18477 = G__18498;
i__18445_18478 = G__18499;
continue;
}
}
} else
{}
}
break;
}
}});
specljs.running.do_description = (function do_description(description,reporters){var tag_sets = specljs.tags.tag_sets_for.call(null,description);if(cljs.core.truth_(cljs.core.some.call(null,specljs.tags.pass_tag_filter_QMARK_,tag_sets)))
{specljs.reporting.report_description_STAR_.call(null,reporters,description);
return specljs.running.with_withs_bound.call(null,description,(function (){specljs.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));
try{var results = specljs.running.results_for_context.call(null,description,reporters);return specljs.running.do_child_contexts.call(null,description,results,reporters);
}finally {specljs.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else
{return null;
}
});
specljs.running.process_compile_error = (function process_compile_error(runner,e){var error_result = specljs.results.error_result.call(null,e);cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);
return specljs.reporting.report_run.call(null,error_result,specljs.config.active_reporters.call(null));
});
specljs.running.Runner = {};
specljs.running.run_directories = (function run_directories(this$,directories,reporters){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$running$Runner$run_directories$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.running.run_directories[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.running.run_directories["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
})().call(null,this$,directories,reporters);
}
});
specljs.running.submit_description = (function submit_description(this$,description){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$running$Runner$submit_description$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$running$Runner$submit_description$arity$2(this$,description);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.running.submit_description[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.running.submit_description["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
})().call(null,this$,description);
}
});
specljs.running.run_description = (function run_description(this$,description,reporters){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$running$Runner$run_description$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$running$Runner$run_description$arity$3(this$,description,reporters);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.running.run_description[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.running.run_description["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
})().call(null,this$,description,reporters);
}
});
specljs.running.run_and_report = (function run_and_report(this$,reporters){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$running$Runner$run_and_report$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$running$Runner$run_and_report$arity$2(this$,reporters);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.running.run_and_report[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.running.run_and_report["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
})().call(null,this$,reporters);
}
});
