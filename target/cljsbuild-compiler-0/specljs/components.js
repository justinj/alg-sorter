goog.provide('specljs.components');
goog.require('cljs.core');
specljs.components.SpecComponent = {};
specljs.components.install = (function install(this$,description){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.specljs$components$SpecComponent$install$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.specljs$components$SpecComponent$install$arity$2(this$,description);
} else
{var x__3437__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (specljs.components.install[goog.typeOf(x__3437__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (specljs.components.install["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SpecComponent.install",this$);
}
}
})().call(null,this$,description);
}
});
(specljs.components.SpecComponent["object"] = true);
(specljs.components.install["object"] = (function (this$,description){return null;
}));
cljs.core.PersistentVector.prototype.specljs$components$SpecComponent$ = true;
cljs.core.PersistentVector.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var seq__18294 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$));var chunk__18295 = null;var count__18296 = 0;var i__18297 = 0;while(true){
if((i__18297 < count__18296))
{var component = cljs.core._nth.call(null,chunk__18295,i__18297);specljs.components.install.call(null,component,description);
{
var G__18310 = seq__18294;
var G__18311 = chunk__18295;
var G__18312 = count__18296;
var G__18313 = (i__18297 + 1);
seq__18294 = G__18310;
chunk__18295 = G__18311;
count__18296 = G__18312;
i__18297 = G__18313;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18294);if(temp__4092__auto__)
{var seq__18294__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18294__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18294__$1);{
var G__18314 = cljs.core.chunk_rest.call(null,seq__18294__$1);
var G__18315 = c__3568__auto__;
var G__18316 = cljs.core.count.call(null,c__3568__auto__);
var G__18317 = 0;
seq__18294 = G__18314;
chunk__18295 = G__18315;
count__18296 = G__18316;
i__18297 = G__18317;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__18294__$1);specljs.components.install.call(null,component,description);
{
var G__18318 = cljs.core.next.call(null,seq__18294__$1);
var G__18319 = null;
var G__18320 = 0;
var G__18321 = 0;
seq__18294 = G__18318;
chunk__18295 = G__18319;
count__18296 = G__18320;
i__18297 = G__18321;
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
cljs.core.EmptyList.prototype.specljs$components$SpecComponent$ = true;
cljs.core.EmptyList.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var seq__18298 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$));var chunk__18299 = null;var count__18300 = 0;var i__18301 = 0;while(true){
if((i__18301 < count__18300))
{var component = cljs.core._nth.call(null,chunk__18299,i__18301);specljs.components.install.call(null,component,description);
{
var G__18322 = seq__18298;
var G__18323 = chunk__18299;
var G__18324 = count__18300;
var G__18325 = (i__18301 + 1);
seq__18298 = G__18322;
chunk__18299 = G__18323;
count__18300 = G__18324;
i__18301 = G__18325;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18298);if(temp__4092__auto__)
{var seq__18298__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18298__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18298__$1);{
var G__18326 = cljs.core.chunk_rest.call(null,seq__18298__$1);
var G__18327 = c__3568__auto__;
var G__18328 = cljs.core.count.call(null,c__3568__auto__);
var G__18329 = 0;
seq__18298 = G__18326;
chunk__18299 = G__18327;
count__18300 = G__18328;
i__18301 = G__18329;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__18298__$1);specljs.components.install.call(null,component,description);
{
var G__18330 = cljs.core.next.call(null,seq__18298__$1);
var G__18331 = null;
var G__18332 = 0;
var G__18333 = 0;
seq__18298 = G__18330;
chunk__18299 = G__18331;
count__18300 = G__18332;
i__18301 = G__18333;
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
cljs.core.List.prototype.specljs$components$SpecComponent$ = true;
cljs.core.List.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var seq__18302 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$));var chunk__18303 = null;var count__18304 = 0;var i__18305 = 0;while(true){
if((i__18305 < count__18304))
{var component = cljs.core._nth.call(null,chunk__18303,i__18305);specljs.components.install.call(null,component,description);
{
var G__18334 = seq__18302;
var G__18335 = chunk__18303;
var G__18336 = count__18304;
var G__18337 = (i__18305 + 1);
seq__18302 = G__18334;
chunk__18303 = G__18335;
count__18304 = G__18336;
i__18305 = G__18337;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18302);if(temp__4092__auto__)
{var seq__18302__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18302__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18302__$1);{
var G__18338 = cljs.core.chunk_rest.call(null,seq__18302__$1);
var G__18339 = c__3568__auto__;
var G__18340 = cljs.core.count.call(null,c__3568__auto__);
var G__18341 = 0;
seq__18302 = G__18338;
chunk__18303 = G__18339;
count__18304 = G__18340;
i__18305 = G__18341;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__18302__$1);specljs.components.install.call(null,component,description);
{
var G__18342 = cljs.core.next.call(null,seq__18302__$1);
var G__18343 = null;
var G__18344 = 0;
var G__18345 = 0;
seq__18302 = G__18342;
chunk__18303 = G__18343;
count__18304 = G__18344;
i__18305 = G__18345;
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
cljs.core.LazySeq.prototype.specljs$components$SpecComponent$ = true;
cljs.core.LazySeq.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var seq__18306 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$));var chunk__18307 = null;var count__18308 = 0;var i__18309 = 0;while(true){
if((i__18309 < count__18308))
{var component = cljs.core._nth.call(null,chunk__18307,i__18309);specljs.components.install.call(null,component,description);
{
var G__18346 = seq__18306;
var G__18347 = chunk__18307;
var G__18348 = count__18308;
var G__18349 = (i__18309 + 1);
seq__18306 = G__18346;
chunk__18307 = G__18347;
count__18308 = G__18348;
i__18309 = G__18349;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18306);if(temp__4092__auto__)
{var seq__18306__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18306__$1))
{var c__3568__auto__ = cljs.core.chunk_first.call(null,seq__18306__$1);{
var G__18350 = cljs.core.chunk_rest.call(null,seq__18306__$1);
var G__18351 = c__3568__auto__;
var G__18352 = cljs.core.count.call(null,c__3568__auto__);
var G__18353 = 0;
seq__18306 = G__18350;
chunk__18307 = G__18351;
count__18308 = G__18352;
i__18309 = G__18353;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__18306__$1);specljs.components.install.call(null,component,description);
{
var G__18354 = cljs.core.next.call(null,seq__18306__$1);
var G__18355 = null;
var G__18356 = 0;
var G__18357 = 0;
seq__18306 = G__18354;
chunk__18307 = G__18355;
count__18308 = G__18356;
i__18309 = G__18357;
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
goog.provide('specljs.components.Description');

/**
* @constructor
*/
specljs.components.Description = (function (name,ns,parent,children,charcteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds){
this.name = name;
this.ns = ns;
this.parent = parent;
this.children = children;
this.charcteristics = charcteristics;
this.tags = tags;
this.befores = befores;
this.before_alls = before_alls;
this.afters = afters;
this.after_alls = after_alls;
this.withs = withs;
this.with_alls = with_alls;
this.arounds = arounds;
})
specljs.components.Description.cljs$lang$type = true;
specljs.components.Description.cljs$lang$ctorStr = "specljs.components/Description";
specljs.components.Description.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/Description");
});
specljs.components.Description.prototype.toString = (function (){var self__ = this;
var this$ = this;return [cljs.core.str("Description: "),cljs.core.str("\""),cljs.core.str(self__.name),cljs.core.str("\"")].join('');
});
specljs.components.Description.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Description.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
cljs.core.reset_BANG_.call(null,this$.parent,description);
return cljs.core.swap_BANG_.call(null,description.children,cljs.core.conj,this$);
});
specljs.components.__GT_Description = (function __GT_Description(name,ns,parent,children,charcteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds){return (new specljs.components.Description(name,ns,parent,children,charcteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds));
});
specljs.components.new_description = (function new_description(name,ns){return (new specljs.components.Description(name,ns,cljs.core.atom.call(null,null),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
goog.provide('specljs.components.Characteristic');

/**
* @constructor
*/
specljs.components.Characteristic = (function (name,parent,body){
this.name = name;
this.parent = parent;
this.body = body;
})
specljs.components.Characteristic.cljs$lang$type = true;
specljs.components.Characteristic.cljs$lang$ctorStr = "specljs.components/Characteristic";
specljs.components.Characteristic.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/Characteristic");
});
specljs.components.Characteristic.prototype.toString = (function (){var self__ = this;
var this$ = this;return [cljs.core.str("\""),cljs.core.str(self__.name),cljs.core.str("\"")].join('');
});
specljs.components.Characteristic.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Characteristic.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
cljs.core.reset_BANG_.call(null,this$.parent,description);
return cljs.core.swap_BANG_.call(null,description.charcteristics,cljs.core.conj,this$);
});
specljs.components.__GT_Characteristic = (function __GT_Characteristic(name,parent,body){return (new specljs.components.Characteristic(name,parent,body));
});
specljs.components.new_characteristic = (function() {
var new_characteristic = null;
var new_characteristic__2 = (function (name,body){return (new specljs.components.Characteristic(name,cljs.core.atom.call(null,null),body));
});
var new_characteristic__3 = (function (name,description,body){return (new specljs.components.Characteristic(name,cljs.core.atom.call(null,description),body));
});
new_characteristic = function(name,description,body){
switch(arguments.length){
case 2:
return new_characteristic__2.call(this,name,description);
case 3:
return new_characteristic__3.call(this,name,description,body);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_characteristic.cljs$core$IFn$_invoke$arity$2 = new_characteristic__2;
new_characteristic.cljs$core$IFn$_invoke$arity$3 = new_characteristic__3;
return new_characteristic;
})()
;
goog.provide('specljs.components.Before');

/**
* @constructor
*/
specljs.components.Before = (function (body){
this.body = body;
})
specljs.components.Before.cljs$lang$type = true;
specljs.components.Before.cljs$lang$ctorStr = "specljs.components/Before";
specljs.components.Before.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/Before");
});
specljs.components.Before.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Before.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
return cljs.core.swap_BANG_.call(null,description.befores,cljs.core.conj,this$);
});
specljs.components.__GT_Before = (function __GT_Before(body){return (new specljs.components.Before(body));
});
specljs.components.new_before = (function new_before(body){return (new specljs.components.Before(body));
});
goog.provide('specljs.components.After');

/**
* @constructor
*/
specljs.components.After = (function (body){
this.body = body;
})
specljs.components.After.cljs$lang$type = true;
specljs.components.After.cljs$lang$ctorStr = "specljs.components/After";
specljs.components.After.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/After");
});
specljs.components.After.prototype.specljs$components$SpecComponent$ = true;
specljs.components.After.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
return cljs.core.swap_BANG_.call(null,description.afters,cljs.core.conj,this$);
});
specljs.components.__GT_After = (function __GT_After(body){return (new specljs.components.After(body));
});
specljs.components.new_after = (function new_after(body){return (new specljs.components.After(body));
});
goog.provide('specljs.components.Around');

/**
* @constructor
*/
specljs.components.Around = (function (body){
this.body = body;
})
specljs.components.Around.cljs$lang$type = true;
specljs.components.Around.cljs$lang$ctorStr = "specljs.components/Around";
specljs.components.Around.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/Around");
});
specljs.components.Around.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Around.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
return cljs.core.swap_BANG_.call(null,description.arounds,cljs.core.conj,this$);
});
specljs.components.__GT_Around = (function __GT_Around(body){return (new specljs.components.Around(body));
});
specljs.components.new_around = (function new_around(body){return (new specljs.components.Around(body));
});
goog.provide('specljs.components.BeforeAll');

/**
* @constructor
*/
specljs.components.BeforeAll = (function (body){
this.body = body;
})
specljs.components.BeforeAll.cljs$lang$type = true;
specljs.components.BeforeAll.cljs$lang$ctorStr = "specljs.components/BeforeAll";
specljs.components.BeforeAll.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/BeforeAll");
});
specljs.components.BeforeAll.prototype.specljs$components$SpecComponent$ = true;
specljs.components.BeforeAll.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
return cljs.core.swap_BANG_.call(null,description.before_alls,cljs.core.conj,this$);
});
specljs.components.__GT_BeforeAll = (function __GT_BeforeAll(body){return (new specljs.components.BeforeAll(body));
});
specljs.components.new_before_all = (function new_before_all(body){return (new specljs.components.BeforeAll(body));
});
goog.provide('specljs.components.AfterAll');

/**
* @constructor
*/
specljs.components.AfterAll = (function (body){
this.body = body;
})
specljs.components.AfterAll.cljs$lang$type = true;
specljs.components.AfterAll.cljs$lang$ctorStr = "specljs.components/AfterAll";
specljs.components.AfterAll.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/AfterAll");
});
specljs.components.AfterAll.prototype.specljs$components$SpecComponent$ = true;
specljs.components.AfterAll.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
return cljs.core.swap_BANG_.call(null,description.after_alls,cljs.core.conj,this$);
});
specljs.components.__GT_AfterAll = (function __GT_AfterAll(body){return (new specljs.components.AfterAll(body));
});
specljs.components.new_after_all = (function new_after_all(body){return (new specljs.components.AfterAll(body));
});
goog.provide('specljs.components.With');

/**
* @constructor
*/
specljs.components.With = (function (name,unique_name,body,value,bang){
this.name = name;
this.unique_name = unique_name;
this.body = body;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
specljs.components.With.cljs$lang$type = true;
specljs.components.With.cljs$lang$ctorStr = "specljs.components/With";
specljs.components.With.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/With");
});
specljs.components.With.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402),cljs.core.deref.call(null,self__.value)))
{cljs.core.reset_BANG_.call(null,self__.value,self__.body.call(null));
} else
{}
return cljs.core.deref.call(null,self__.value);
});
specljs.components.With.prototype.specljs$components$SpecComponent$ = true;
specljs.components.With.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
return cljs.core.swap_BANG_.call(null,description.withs,cljs.core.conj,this$);
});
specljs.components.__GT_With = (function __GT_With(name,unique_name,body,value,bang){return (new specljs.components.With(name,unique_name,body,value,bang));
});
specljs.components.reset_with = (function reset_with(with$){cljs.core.reset_BANG_.call(null,with$.value,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402));
if(cljs.core.truth_(with$.bang))
{return cljs.core.deref.call(null,with$);
} else
{return null;
}
});
specljs.components.new_with = (function new_with(name,unique_name,body,bang){var with$ = (new specljs.components.With(name,unique_name,body,cljs.core.atom.call(null,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402)),bang));if(cljs.core.truth_(bang))
{cljs.core.deref.call(null,with$);
} else
{}
return with$;
});
goog.provide('specljs.components.WithAll');

/**
* @constructor
*/
specljs.components.WithAll = (function (name,unique_name,body,value,bang){
this.name = name;
this.unique_name = unique_name;
this.body = body;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
specljs.components.WithAll.cljs$lang$type = true;
specljs.components.WithAll.cljs$lang$ctorStr = "specljs.components/WithAll";
specljs.components.WithAll.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/WithAll");
});
specljs.components.WithAll.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402),cljs.core.deref.call(null,self__.value)))
{cljs.core.reset_BANG_.call(null,self__.value,self__.body.call(null));
} else
{}
return cljs.core.deref.call(null,self__.value);
});
specljs.components.WithAll.prototype.specljs$components$SpecComponent$ = true;
specljs.components.WithAll.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
return cljs.core.swap_BANG_.call(null,description.with_alls,cljs.core.conj,this$);
});
specljs.components.__GT_WithAll = (function __GT_WithAll(name,unique_name,body,value,bang){return (new specljs.components.WithAll(name,unique_name,body,value,bang));
});
specljs.components.new_with_all = (function new_with_all(name,unique_name,body,bang){var with_all = (new specljs.components.WithAll(name,unique_name,body,cljs.core.atom.call(null,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402)),bang));if(cljs.core.truth_(bang))
{cljs.core.deref.call(null,with_all);
} else
{}
return with_all;
});
goog.provide('specljs.components.Tag');

/**
* @constructor
*/
specljs.components.Tag = (function (name){
this.name = name;
})
specljs.components.Tag.cljs$lang$type = true;
specljs.components.Tag.cljs$lang$ctorStr = "specljs.components/Tag";
specljs.components.Tag.cljs$lang$ctorPrWriter = (function (this__3378__auto__,writer__3379__auto__,opt__3380__auto__){return cljs.core._write.call(null,writer__3379__auto__,"specljs.components/Tag");
});
specljs.components.Tag.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Tag.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
return cljs.core.swap_BANG_.call(null,description.tags,cljs.core.conj,self__.name);
});
specljs.components.__GT_Tag = (function __GT_Tag(name){return (new specljs.components.Tag(name));
});
specljs.components.new_tag = (function new_tag(name){return (new specljs.components.Tag(name));
});
