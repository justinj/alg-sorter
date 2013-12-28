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
specljs.running.eval_components = (function eval_components(components){var seq__19821 = cljs.core.seq.call(null,components);var chunk__19822 = null;var count__19823 = 0;var i__19824 = 0;while(true){
if((i__19824 < count__19823))
{var component = cljs.core._nth.call(null,chunk__19822,i__19824);component.body.call(null);
{
var G__19825 = seq__19821;
var G__19826 = chunk__19822;
var G__19827 = count__19823;
var G__19828 = (i__19824 + 1);
seq__19821 = G__19825;
chunk__19822 = G__19826;
count__19823 = G__19827;
i__19824 = G__19828;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19821);if(temp__4092__auto__)
{var seq__19821__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19821__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__19821__$1);{
var G__19829 = cljs.core.chunk_rest.call(null,seq__19821__$1);
var G__19830 = c__3568__auto__;
var G__19831 = cljs.core.count.call(null,c__3568__auto__);
var G__19832 = 0;
seq__19821 = G__19829;
chunk__19822 = G__19830;
count__19823 = G__19831;
i__19824 = G__19832;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__19821__$1);component.body.call(null);
{
var G__19833 = cljs.core.next.call(null,seq__19821__$1);
var G__19834 = null;
var G__19835 = 0;
var G__19836 = 0;
seq__19821 = G__19833;
chunk__19822 = G__19834;
count__19823 = G__19835;
i__19824 = G__19836;
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
specljs.running.reset_withs = (function reset_withs(withs){var seq__19843 = cljs.core.seq.call(null,withs);var chunk__19844 = null;var count__19845 = 0;var i__19846 = 0;while(true){
if((i__19846 < count__19845))
{var with$ = cljs.core._nth.call(null,chunk__19844,i__19846);specljs.components.reset_with.call(null,with$);
{
var G__19847 = seq__19843;
var G__19848 = chunk__19844;
var G__19849 = count__19845;
var G__19850 = (i__19846 + 1);
seq__19843 = G__19847;
chunk__19844 = G__19848;
count__19845 = G__19849;
i__19846 = G__19850;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19843);if(temp__4092__auto__)
{var seq__19843__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19843__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__19843__$1);{
var G__19851 = cljs.core.chunk_rest.call(null,seq__19843__$1);
var G__19852 = c__3568__auto__;
var G__19853 = cljs.core.count.call(null,c__3568__auto__);
var G__19854 = 0;
seq__19843 = G__19851;
chunk__19844 = G__19852;
count__19845 = G__19853;
i__19846 = G__19854;
continue;
}
} else
{var with$ = cljs.core.first.call(null,seq__19843__$1);specljs.components.reset_with.call(null,with$);
{
var G__19855 = cljs.core.next.call(null,seq__19843__$1);
var G__19856 = null;
var G__19857 = 0;
var G__19858 = 0;
seq__19843 = G__19855;
chunk__19844 = G__19856;
count__19845 = G__19857;
i__19846 = G__19858;
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
var G__19859 = cljs.core.deref.call(null,description__$1.parent);
var G__19860 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__19859;
components = G__19860;
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
return (function (p1__19861_SHARP_){return cljs.core.deref.call(null,p1__19861_SHARP_.befores);
});})(description))
,description);var afters = specljs.running.collect_components.call(null,((function (description,befores){
return (function (p1__19862_SHARP_){return cljs.core.deref.call(null,p1__19862_SHARP_.afters);
});})(description,befores))
,description);var core_body = characteristic.body;var before_and_after_body = ((function (description,befores,afters,core_body){
return (function (){return specljs.running.eval_characteristic.call(null,befores,core_body,afters);
});})(description,befores,afters,core_body))
;var arounds = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body){
return (function (p1__19863_SHARP_){return cljs.core.deref.call(null,p1__19863_SHARP_.arounds);
});})(description,befores,afters,core_body,before_and_after_body))
,description);var full_body = specljs.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds){
return (function (p1__19864_SHARP_){return p1__19864_SHARP_.body;
});})(description,befores,afters,core_body,before_and_after_body,arounds))
,arounds));var withs = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds,full_body){
return (function (p1__19865_SHARP_){return cljs.core.deref.call(null,p1__19865_SHARP_.withs);
});})(description,befores,afters,core_body,before_and_after_body,arounds,full_body))
,description);var start_time = specljs.platform.current_time.call(null);try{full_body.call(null);
return specljs.running.report_result.call(null,specljs.results.pass_result,characteristic,start_time,reporters,null);
}catch (e19867){if((e19867 instanceof Object))
{var e = e19867;if(cljs.core.truth_(specljs.platform.pending_QMARK_.call(null,e)))
{return specljs.running.report_result.call(null,specljs.results.pending_result,characteristic,start_time,reporters,e);
} else
{return specljs.running.report_result.call(null,specljs.results.fail_result,characteristic,start_time,reporters,e);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19867;
} else
{return null;
}
}
}finally {specljs.running.reset_withs.call(null,withs);
}});
specljs.running.do_characteristics = (function do_characteristics(characteristics,reporters){return cljs.core.doall.call(null,(function (){var iter__3537__auto__ = (function iter__19872(s__19873){return (new cljs.core.LazySeq(null,false,(function (){var s__19873__$1 = s__19873;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19873__$1);if(temp__4092__auto__)
{var s__19873__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19873__$2))
{var c__3535__auto__ = cljs.core.chunk_first.call(null,s__19873__$2);var size__3536__auto__ = cljs.core.count.call(null,c__3535__auto__);var b__19875 = cljs.core.chunk_buffer.call(null,size__3536__auto__);if((function (){var i__19874 = 0;while(true){
if((i__19874 < size__3536__auto__))
{var characteristic = cljs.core._nth.call(null,c__3535__auto__,i__19874);cljs.core.chunk_append.call(null,b__19875,specljs.running.do_characteristic.call(null,characteristic,reporters));
{
var G__19876 = (i__19874 + 1);
i__19874 = G__19876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19875),iter__19872.call(null,cljs.core.chunk_rest.call(null,s__19873__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19875),null);
}
} else
{var characteristic = cljs.core.first.call(null,s__19873__$2);return cljs.core.cons.call(null,specljs.running.do_characteristic.call(null,characteristic,reporters),iter__19872.call(null,cljs.core.rest.call(null,s__19873__$2)));
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
var G__19877 = cljs.core.concat.call(null,results__$1,specljs.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__19878 = cljs.core.rest.call(null,contexts);
results__$1 = G__19877;
contexts = G__19878;
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
return (function (p1__19879_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__19879_SHARP_.name))].join('');
});})(withs,ns))
,withs);var unique_names = cljs.core.map.call(null,((function (withs,ns,var_names){
return (function (p1__19880_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__19880_SHARP_.unique_name))].join('');
});})(withs,ns,var_names))
,withs);var seq__19894_19907 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,var_names,unique_names)));var chunk__19895_19908 = null;var count__19896_19909 = 0;var i__19897_19910 = 0;while(true){
if((i__19897_19910 < count__19896_19909))
{var vec__19898_19911 = cljs.core._nth.call(null,chunk__19895_19908,i__19897_19910);var n_19912 = cljs.core.nth.call(null,vec__19898_19911,0,null);var un_19913 = cljs.core.nth.call(null,vec__19898_19911,1,null);var code_19914 = [cljs.core.str(n_19912),cljs.core.str(" = "),cljs.core.str(un_19913),cljs.core.str(";")].join('');eval(code_19914);
{
var G__19915 = seq__19894_19907;
var G__19916 = chunk__19895_19908;
var G__19917 = count__19896_19909;
var G__19918 = (i__19897_19910 + 1);
seq__19894_19907 = G__19915;
chunk__19895_19908 = G__19916;
count__19896_19909 = G__19917;
i__19897_19910 = G__19918;
continue;
}
} else
{var temp__4092__auto___19919 = cljs.core.seq.call(null,seq__19894_19907);if(temp__4092__auto___19919)
{var seq__19894_19920__$1 = temp__4092__auto___19919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19894_19920__$1))
{var c__3568__auto___19921 = cljs.core.chunk_first.call(null,seq__19894_19920__$1);{
var G__19922 = cljs.core.chunk_rest.call(null,seq__19894_19920__$1);
var G__19923 = c__3568__auto___19921;
var G__19924 = cljs.core.count.call(null,c__3568__auto___19921);
var G__19925 = 0;
seq__19894_19907 = G__19922;
chunk__19895_19908 = G__19923;
count__19896_19909 = G__19924;
i__19897_19910 = G__19925;
continue;
}
} else
{var vec__19899_19926 = cljs.core.first.call(null,seq__19894_19920__$1);var n_19927 = cljs.core.nth.call(null,vec__19899_19926,0,null);var un_19928 = cljs.core.nth.call(null,vec__19899_19926,1,null);var code_19929 = [cljs.core.str(n_19927),cljs.core.str(" = "),cljs.core.str(un_19928),cljs.core.str(";")].join('');eval(code_19929);
{
var G__19930 = cljs.core.next.call(null,seq__19894_19920__$1);
var G__19931 = null;
var G__19932 = 0;
var G__19933 = 0;
seq__19894_19907 = G__19930;
chunk__19895_19908 = G__19931;
count__19896_19909 = G__19932;
i__19897_19910 = G__19933;
continue;
}
}
} else
{}
}
break;
}
try{return body.call(null);
}finally {var seq__19901_19934 = cljs.core.seq.call(null,var_names);var chunk__19902_19935 = null;var count__19903_19936 = 0;var i__19904_19937 = 0;while(true){
if((i__19904_19937 < count__19903_19936))
{var vec__19905_19938 = cljs.core._nth.call(null,chunk__19902_19935,i__19904_19937);var n_19939 = cljs.core.nth.call(null,vec__19905_19938,0,null);var code_19940 = [cljs.core.str(n_19939),cljs.core.str(" = null;")].join('');eval(code_19940);
{
var G__19941 = seq__19901_19934;
var G__19942 = chunk__19902_19935;
var G__19943 = count__19903_19936;
var G__19944 = (i__19904_19937 + 1);
seq__19901_19934 = G__19941;
chunk__19902_19935 = G__19942;
count__19903_19936 = G__19943;
i__19904_19937 = G__19944;
continue;
}
} else
{var temp__4092__auto___19945 = cljs.core.seq.call(null,seq__19901_19934);if(temp__4092__auto___19945)
{var seq__19901_19946__$1 = temp__4092__auto___19945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19901_19946__$1))
{var c__3568__auto___19947 = cljs.core.chunk_first.call(null,seq__19901_19946__$1);{
var G__19948 = cljs.core.chunk_rest.call(null,seq__19901_19946__$1);
var G__19949 = c__3568__auto___19947;
var G__19950 = cljs.core.count.call(null,c__3568__auto___19947);
var G__19951 = 0;
seq__19901_19934 = G__19948;
chunk__19902_19935 = G__19949;
count__19903_19936 = G__19950;
i__19904_19937 = G__19951;
continue;
}
} else
{var vec__19906_19952 = cljs.core.first.call(null,seq__19901_19946__$1);var n_19953 = cljs.core.nth.call(null,vec__19906_19952,0,null);var code_19954 = [cljs.core.str(n_19953),cljs.core.str(" = null;")].join('');eval(code_19954);
{
var G__19955 = cljs.core.next.call(null,seq__19901_19946__$1);
var G__19956 = null;
var G__19957 = 0;
var G__19958 = 0;
seq__19901_19934 = G__19955;
chunk__19902_19935 = G__19956;
count__19903_19936 = G__19957;
i__19904_19937 = G__19958;
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
