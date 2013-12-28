goog.provide('specljs.results');
goog.require('cljs.core');
goog.provide('specljs.results.PassResult');

/**
* @constructor
*/
specljs.results.PassResult = (function (characteristic,seconds){
this.characteristic = characteristic;
this.seconds = seconds;
})
specljs.results.PassResult.cljs$lang$type = true;
specljs.results.PassResult.cljs$lang$ctorStr = "specljs.results/PassResult";
specljs.results.PassResult.cljs$lang$ctorPrWriter = (function (this__3381__auto__,writer__3382__auto__,opts__3383__auto__){return cljs.core._write.call(null,writer__3382__auto__,"specljs.results/PassResult");
});
specljs.results.__GT_PassResult = (function __GT_PassResult(characteristic,seconds){return (new specljs.results.PassResult(characteristic,seconds));
});
goog.provide('specljs.results.FailResult');

/**
* @constructor
*/
specljs.results.FailResult = (function (characteristic,seconds,failure){
this.characteristic = characteristic;
this.seconds = seconds;
this.failure = failure;
})
specljs.results.FailResult.cljs$lang$type = true;
specljs.results.FailResult.cljs$lang$ctorStr = "specljs.results/FailResult";
specljs.results.FailResult.cljs$lang$ctorPrWriter = (function (this__3381__auto__,writer__3382__auto__,opts__3383__auto__){return cljs.core._write.call(null,writer__3382__auto__,"specljs.results/FailResult");
});
specljs.results.__GT_FailResult = (function __GT_FailResult(characteristic,seconds,failure){return (new specljs.results.FailResult(characteristic,seconds,failure));
});
goog.provide('specljs.results.PendingResult');

/**
* @constructor
*/
specljs.results.PendingResult = (function (characteristic,seconds,exception){
this.characteristic = characteristic;
this.seconds = seconds;
this.exception = exception;
})
specljs.results.PendingResult.cljs$lang$type = true;
specljs.results.PendingResult.cljs$lang$ctorStr = "specljs.results/PendingResult";
specljs.results.PendingResult.cljs$lang$ctorPrWriter = (function (this__3381__auto__,writer__3382__auto__,opts__3383__auto__){return cljs.core._write.call(null,writer__3382__auto__,"specljs.results/PendingResult");
});
specljs.results.__GT_PendingResult = (function __GT_PendingResult(characteristic,seconds,exception){return (new specljs.results.PendingResult(characteristic,seconds,exception));
});
goog.provide('specljs.results.ErrorResult');

/**
* @constructor
*/
specljs.results.ErrorResult = (function (characteristic,seconds,exception){
this.characteristic = characteristic;
this.seconds = seconds;
this.exception = exception;
})
specljs.results.ErrorResult.cljs$lang$type = true;
specljs.results.ErrorResult.cljs$lang$ctorStr = "specljs.results/ErrorResult";
specljs.results.ErrorResult.cljs$lang$ctorPrWriter = (function (this__3381__auto__,writer__3382__auto__,opts__3383__auto__){return cljs.core._write.call(null,writer__3382__auto__,"specljs.results/ErrorResult");
});
specljs.results.__GT_ErrorResult = (function __GT_ErrorResult(characteristic,seconds,exception){return (new specljs.results.ErrorResult(characteristic,seconds,exception));
});
specljs.results.pass_result = (function pass_result(characteristic,seconds){return (new specljs.results.PassResult(characteristic,seconds));
});
specljs.results.fail_result = (function fail_result(characteristic,seconds,failure){return (new specljs.results.FailResult(characteristic,seconds,failure));
});
specljs.results.pending_result = (function pending_result(characteristic,seconds,exception){return (new specljs.results.PendingResult(characteristic,seconds,exception));
});
specljs.results.error_result = (function error_result(exception){return (new specljs.results.ErrorResult(null,0,exception));
});
specljs.results.pass_QMARK_ = (function pass_QMARK_(result){return cljs.core._EQ_.call(null,cljs.core.type.call(null,result),specljs.results.PassResult);
});
specljs.results.fail_QMARK_ = (function fail_QMARK_(result){return cljs.core._EQ_.call(null,cljs.core.type.call(null,result),specljs.results.FailResult);
});
specljs.results.pending_QMARK_ = (function pending_QMARK_(result){return cljs.core._EQ_.call(null,cljs.core.type.call(null,result),specljs.results.PendingResult);
});
specljs.results.error_QMARK_ = (function error_QMARK_(result){return cljs.core._EQ_.call(null,cljs.core.type.call(null,result),specljs.results.ErrorResult);
});
specljs.results.fail_count = (function fail_count(results){return cljs.core.reduce.call(null,(function (p1__18713_SHARP_,p2__18712_SHARP_){if(cljs.core.truth_((function (){var or__3943__auto__ = specljs.results.fail_QMARK_.call(null,p2__18712_SHARP_);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return specljs.results.error_QMARK_.call(null,p2__18712_SHARP_);
}
})()))
{return (p1__18713_SHARP_ + 1);
} else
{return p1__18713_SHARP_;
}
}),0,results);
});
specljs.results.categorize = (function categorize(results){return cljs.core.reduce.call(null,(function (tally,result){if(cljs.core.truth_(specljs.results.pending_QMARK_.call(null,result)))
{return cljs.core.update_in.call(null,tally,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pending","pending",4626283785)], true),cljs.core.conj,result);
} else
{if(cljs.core.truth_(specljs.results.error_QMARK_.call(null,result)))
{return cljs.core.update_in.call(null,tally,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"error","error",1110689146)], true),cljs.core.conj,result);
} else
{if(cljs.core.truth_(specljs.results.fail_QMARK_.call(null,result)))
{return cljs.core.update_in.call(null,tally,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"fail","fail",1017039504)], true),cljs.core.conj,result);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.update_in.call(null,tally,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pass","pass",1017337731)], true),cljs.core.conj,result);
} else
{return null;
}
}
}
}
}),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pending","pending",4626283785),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"fail","fail",1017039504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pass","pass",1017337731),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.PersistentVector.EMPTY], true),results);
});
