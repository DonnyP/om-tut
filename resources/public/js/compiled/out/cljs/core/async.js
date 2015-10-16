// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26158 = (function (fn_handler,f,meta26159){
this.fn_handler = fn_handler;
this.f = f;
this.meta26159 = meta26159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26160,meta26159__$1){
var self__ = this;
var _26160__$1 = this;
return (new cljs.core.async.t_cljs$core$async26158(self__.fn_handler,self__.f,meta26159__$1));
});

cljs.core.async.t_cljs$core$async26158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26160){
var self__ = this;
var _26160__$1 = this;
return self__.meta26159;
});

cljs.core.async.t_cljs$core$async26158.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26159","meta26159",1217557593,null)], null);
});

cljs.core.async.t_cljs$core$async26158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26158";

cljs.core.async.t_cljs$core$async26158.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26158");
});

cljs.core.async.__GT_t_cljs$core$async26158 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26158(fn_handler__$1,f__$1,meta26159){
return (new cljs.core.async.t_cljs$core$async26158(fn_handler__$1,f__$1,meta26159));
});

}

return (new cljs.core.async.t_cljs$core$async26158(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26163 = [];
var len__17376__auto___26166 = arguments.length;
var i__17377__auto___26167 = (0);
while(true){
if((i__17377__auto___26167 < len__17376__auto___26166)){
args26163.push((arguments[i__17377__auto___26167]));

var G__26168 = (i__17377__auto___26167 + (1));
i__17377__auto___26167 = G__26168;
continue;
} else {
}
break;
}

var G__26165 = args26163.length;
switch (G__26165) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26163.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26170 = [];
var len__17376__auto___26173 = arguments.length;
var i__17377__auto___26174 = (0);
while(true){
if((i__17377__auto___26174 < len__17376__auto___26173)){
args26170.push((arguments[i__17377__auto___26174]));

var G__26175 = (i__17377__auto___26174 + (1));
i__17377__auto___26174 = G__26175;
continue;
} else {
}
break;
}

var G__26172 = args26170.length;
switch (G__26172) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26170.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26177 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26177);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26177,ret){
return (function (){
return fn1.call(null,val_26177);
});})(val_26177,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26178 = [];
var len__17376__auto___26181 = arguments.length;
var i__17377__auto___26182 = (0);
while(true){
if((i__17377__auto___26182 < len__17376__auto___26181)){
args26178.push((arguments[i__17377__auto___26182]));

var G__26183 = (i__17377__auto___26182 + (1));
i__17377__auto___26182 = G__26183;
continue;
} else {
}
break;
}

var G__26180 = args26178.length;
switch (G__26180) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26178.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17221__auto___26185 = n;
var x_26186 = (0);
while(true){
if((x_26186 < n__17221__auto___26185)){
(a[x_26186] = (0));

var G__26187 = (x_26186 + (1));
x_26186 = G__26187;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26188 = (i + (1));
i = G__26188;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26192 = (function (alt_flag,flag,meta26193){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26193 = meta26193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26194,meta26193__$1){
var self__ = this;
var _26194__$1 = this;
return (new cljs.core.async.t_cljs$core$async26192(self__.alt_flag,self__.flag,meta26193__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26194){
var self__ = this;
var _26194__$1 = this;
return self__.meta26193;
});})(flag))
;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26192.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26193","meta26193",747310214,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26192";

cljs.core.async.t_cljs$core$async26192.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26192");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26192 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26192(alt_flag__$1,flag__$1,meta26193){
return (new cljs.core.async.t_cljs$core$async26192(alt_flag__$1,flag__$1,meta26193));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26192(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26198 = (function (alt_handler,flag,cb,meta26199){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26199 = meta26199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26200,meta26199__$1){
var self__ = this;
var _26200__$1 = this;
return (new cljs.core.async.t_cljs$core$async26198(self__.alt_handler,self__.flag,self__.cb,meta26199__$1));
});

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26200){
var self__ = this;
var _26200__$1 = this;
return self__.meta26199;
});

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26199","meta26199",-1178753688,null)], null);
});

cljs.core.async.t_cljs$core$async26198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26198";

cljs.core.async.t_cljs$core$async26198.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26198");
});

cljs.core.async.__GT_t_cljs$core$async26198 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26198(alt_handler__$1,flag__$1,cb__$1,meta26199){
return (new cljs.core.async.t_cljs$core$async26198(alt_handler__$1,flag__$1,cb__$1,meta26199));
});

}

return (new cljs.core.async.t_cljs$core$async26198(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26201_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26201_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26202_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26202_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16318__auto__ = wport;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26203 = (i + (1));
i = G__26203;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16318__auto__ = ret;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16306__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16306__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16306__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17383__auto__ = [];
var len__17376__auto___26209 = arguments.length;
var i__17377__auto___26210 = (0);
while(true){
if((i__17377__auto___26210 < len__17376__auto___26209)){
args__17383__auto__.push((arguments[i__17377__auto___26210]));

var G__26211 = (i__17377__auto___26210 + (1));
i__17377__auto___26210 = G__26211;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26206){
var map__26207 = p__26206;
var map__26207__$1 = ((((!((map__26207 == null)))?((((map__26207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26207):map__26207);
var opts = map__26207__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26204){
var G__26205 = cljs.core.first.call(null,seq26204);
var seq26204__$1 = cljs.core.next.call(null,seq26204);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26205,seq26204__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26212 = [];
var len__17376__auto___26262 = arguments.length;
var i__17377__auto___26263 = (0);
while(true){
if((i__17377__auto___26263 < len__17376__auto___26262)){
args26212.push((arguments[i__17377__auto___26263]));

var G__26264 = (i__17377__auto___26263 + (1));
i__17377__auto___26263 = G__26264;
continue;
} else {
}
break;
}

var G__26214 = args26212.length;
switch (G__26214) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26212.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20278__auto___26266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___26266){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___26266){
return (function (state_26238){
var state_val_26239 = (state_26238[(1)]);
if((state_val_26239 === (7))){
var inst_26234 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26240_26267 = state_26238__$1;
(statearr_26240_26267[(2)] = inst_26234);

(statearr_26240_26267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (1))){
var state_26238__$1 = state_26238;
var statearr_26241_26268 = state_26238__$1;
(statearr_26241_26268[(2)] = null);

(statearr_26241_26268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (4))){
var inst_26217 = (state_26238[(7)]);
var inst_26217__$1 = (state_26238[(2)]);
var inst_26218 = (inst_26217__$1 == null);
var state_26238__$1 = (function (){var statearr_26242 = state_26238;
(statearr_26242[(7)] = inst_26217__$1);

return statearr_26242;
})();
if(cljs.core.truth_(inst_26218)){
var statearr_26243_26269 = state_26238__$1;
(statearr_26243_26269[(1)] = (5));

} else {
var statearr_26244_26270 = state_26238__$1;
(statearr_26244_26270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (13))){
var state_26238__$1 = state_26238;
var statearr_26245_26271 = state_26238__$1;
(statearr_26245_26271[(2)] = null);

(statearr_26245_26271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (6))){
var inst_26217 = (state_26238[(7)]);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26238__$1,(11),to,inst_26217);
} else {
if((state_val_26239 === (3))){
var inst_26236 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26238__$1,inst_26236);
} else {
if((state_val_26239 === (12))){
var state_26238__$1 = state_26238;
var statearr_26246_26272 = state_26238__$1;
(statearr_26246_26272[(2)] = null);

(statearr_26246_26272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (2))){
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26238__$1,(4),from);
} else {
if((state_val_26239 === (11))){
var inst_26227 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
if(cljs.core.truth_(inst_26227)){
var statearr_26247_26273 = state_26238__$1;
(statearr_26247_26273[(1)] = (12));

} else {
var statearr_26248_26274 = state_26238__$1;
(statearr_26248_26274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (9))){
var state_26238__$1 = state_26238;
var statearr_26249_26275 = state_26238__$1;
(statearr_26249_26275[(2)] = null);

(statearr_26249_26275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (5))){
var state_26238__$1 = state_26238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26250_26276 = state_26238__$1;
(statearr_26250_26276[(1)] = (8));

} else {
var statearr_26251_26277 = state_26238__$1;
(statearr_26251_26277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (14))){
var inst_26232 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26252_26278 = state_26238__$1;
(statearr_26252_26278[(2)] = inst_26232);

(statearr_26252_26278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (10))){
var inst_26224 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26253_26279 = state_26238__$1;
(statearr_26253_26279[(2)] = inst_26224);

(statearr_26253_26279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (8))){
var inst_26221 = cljs.core.async.close_BANG_.call(null,to);
var state_26238__$1 = state_26238;
var statearr_26254_26280 = state_26238__$1;
(statearr_26254_26280[(2)] = inst_26221);

(statearr_26254_26280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___26266))
;
return ((function (switch__20213__auto__,c__20278__auto___26266){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_26258 = [null,null,null,null,null,null,null,null];
(statearr_26258[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_26258[(1)] = (1));

return statearr_26258;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_26238){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_26238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e26259){if((e26259 instanceof Object)){
var ex__20217__auto__ = e26259;
var statearr_26260_26281 = state_26238;
(statearr_26260_26281[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26282 = state_26238;
state_26238 = G__26282;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_26238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_26238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___26266))
})();
var state__20280__auto__ = (function (){var statearr_26261 = f__20279__auto__.call(null);
(statearr_26261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___26266);

return statearr_26261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___26266))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26466){
var vec__26467 = p__26466;
var v = cljs.core.nth.call(null,vec__26467,(0),null);
var p = cljs.core.nth.call(null,vec__26467,(1),null);
var job = vec__26467;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20278__auto___26649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___26649,res,vec__26467,v,p,job,jobs,results){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___26649,res,vec__26467,v,p,job,jobs,results){
return (function (state_26472){
var state_val_26473 = (state_26472[(1)]);
if((state_val_26473 === (1))){
var state_26472__$1 = state_26472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26472__$1,(2),res,v);
} else {
if((state_val_26473 === (2))){
var inst_26469 = (state_26472[(2)]);
var inst_26470 = cljs.core.async.close_BANG_.call(null,res);
var state_26472__$1 = (function (){var statearr_26474 = state_26472;
(statearr_26474[(7)] = inst_26469);

return statearr_26474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26472__$1,inst_26470);
} else {
return null;
}
}
});})(c__20278__auto___26649,res,vec__26467,v,p,job,jobs,results))
;
return ((function (switch__20213__auto__,c__20278__auto___26649,res,vec__26467,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0 = (function (){
var statearr_26478 = [null,null,null,null,null,null,null,null];
(statearr_26478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__);

(statearr_26478[(1)] = (1));

return statearr_26478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1 = (function (state_26472){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_26472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e26479){if((e26479 instanceof Object)){
var ex__20217__auto__ = e26479;
var statearr_26480_26650 = state_26472;
(statearr_26480_26650[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26651 = state_26472;
state_26472 = G__26651;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = function(state_26472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1.call(this,state_26472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___26649,res,vec__26467,v,p,job,jobs,results))
})();
var state__20280__auto__ = (function (){var statearr_26481 = f__20279__auto__.call(null);
(statearr_26481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___26649);

return statearr_26481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___26649,res,vec__26467,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26482){
var vec__26483 = p__26482;
var v = cljs.core.nth.call(null,vec__26483,(0),null);
var p = cljs.core.nth.call(null,vec__26483,(1),null);
var job = vec__26483;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17221__auto___26652 = n;
var __26653 = (0);
while(true){
if((__26653 < n__17221__auto___26652)){
var G__26484_26654 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26484_26654) {
case "compute":
var c__20278__auto___26656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26653,c__20278__auto___26656,G__26484_26654,n__17221__auto___26652,jobs,results,process,async){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (__26653,c__20278__auto___26656,G__26484_26654,n__17221__auto___26652,jobs,results,process,async){
return (function (state_26497){
var state_val_26498 = (state_26497[(1)]);
if((state_val_26498 === (1))){
var state_26497__$1 = state_26497;
var statearr_26499_26657 = state_26497__$1;
(statearr_26499_26657[(2)] = null);

(statearr_26499_26657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (2))){
var state_26497__$1 = state_26497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26497__$1,(4),jobs);
} else {
if((state_val_26498 === (3))){
var inst_26495 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26497__$1,inst_26495);
} else {
if((state_val_26498 === (4))){
var inst_26487 = (state_26497[(2)]);
var inst_26488 = process.call(null,inst_26487);
var state_26497__$1 = state_26497;
if(cljs.core.truth_(inst_26488)){
var statearr_26500_26658 = state_26497__$1;
(statearr_26500_26658[(1)] = (5));

} else {
var statearr_26501_26659 = state_26497__$1;
(statearr_26501_26659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (5))){
var state_26497__$1 = state_26497;
var statearr_26502_26660 = state_26497__$1;
(statearr_26502_26660[(2)] = null);

(statearr_26502_26660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (6))){
var state_26497__$1 = state_26497;
var statearr_26503_26661 = state_26497__$1;
(statearr_26503_26661[(2)] = null);

(statearr_26503_26661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (7))){
var inst_26493 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26504_26662 = state_26497__$1;
(statearr_26504_26662[(2)] = inst_26493);

(statearr_26504_26662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26653,c__20278__auto___26656,G__26484_26654,n__17221__auto___26652,jobs,results,process,async))
;
return ((function (__26653,switch__20213__auto__,c__20278__auto___26656,G__26484_26654,n__17221__auto___26652,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0 = (function (){
var statearr_26508 = [null,null,null,null,null,null,null];
(statearr_26508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__);

(statearr_26508[(1)] = (1));

return statearr_26508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1 = (function (state_26497){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_26497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e26509){if((e26509 instanceof Object)){
var ex__20217__auto__ = e26509;
var statearr_26510_26663 = state_26497;
(statearr_26510_26663[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26664 = state_26497;
state_26497 = G__26664;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = function(state_26497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1.call(this,state_26497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__;
})()
;})(__26653,switch__20213__auto__,c__20278__auto___26656,G__26484_26654,n__17221__auto___26652,jobs,results,process,async))
})();
var state__20280__auto__ = (function (){var statearr_26511 = f__20279__auto__.call(null);
(statearr_26511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___26656);

return statearr_26511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(__26653,c__20278__auto___26656,G__26484_26654,n__17221__auto___26652,jobs,results,process,async))
);


break;
case "async":
var c__20278__auto___26665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26653,c__20278__auto___26665,G__26484_26654,n__17221__auto___26652,jobs,results,process,async){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (__26653,c__20278__auto___26665,G__26484_26654,n__17221__auto___26652,jobs,results,process,async){
return (function (state_26524){
var state_val_26525 = (state_26524[(1)]);
if((state_val_26525 === (1))){
var state_26524__$1 = state_26524;
var statearr_26526_26666 = state_26524__$1;
(statearr_26526_26666[(2)] = null);

(statearr_26526_26666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (2))){
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26524__$1,(4),jobs);
} else {
if((state_val_26525 === (3))){
var inst_26522 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26524__$1,inst_26522);
} else {
if((state_val_26525 === (4))){
var inst_26514 = (state_26524[(2)]);
var inst_26515 = async.call(null,inst_26514);
var state_26524__$1 = state_26524;
if(cljs.core.truth_(inst_26515)){
var statearr_26527_26667 = state_26524__$1;
(statearr_26527_26667[(1)] = (5));

} else {
var statearr_26528_26668 = state_26524__$1;
(statearr_26528_26668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (5))){
var state_26524__$1 = state_26524;
var statearr_26529_26669 = state_26524__$1;
(statearr_26529_26669[(2)] = null);

(statearr_26529_26669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (6))){
var state_26524__$1 = state_26524;
var statearr_26530_26670 = state_26524__$1;
(statearr_26530_26670[(2)] = null);

(statearr_26530_26670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (7))){
var inst_26520 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26531_26671 = state_26524__$1;
(statearr_26531_26671[(2)] = inst_26520);

(statearr_26531_26671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26653,c__20278__auto___26665,G__26484_26654,n__17221__auto___26652,jobs,results,process,async))
;
return ((function (__26653,switch__20213__auto__,c__20278__auto___26665,G__26484_26654,n__17221__auto___26652,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0 = (function (){
var statearr_26535 = [null,null,null,null,null,null,null];
(statearr_26535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__);

(statearr_26535[(1)] = (1));

return statearr_26535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1 = (function (state_26524){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_26524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e26536){if((e26536 instanceof Object)){
var ex__20217__auto__ = e26536;
var statearr_26537_26672 = state_26524;
(statearr_26537_26672[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26673 = state_26524;
state_26524 = G__26673;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = function(state_26524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1.call(this,state_26524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__;
})()
;})(__26653,switch__20213__auto__,c__20278__auto___26665,G__26484_26654,n__17221__auto___26652,jobs,results,process,async))
})();
var state__20280__auto__ = (function (){var statearr_26538 = f__20279__auto__.call(null);
(statearr_26538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___26665);

return statearr_26538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(__26653,c__20278__auto___26665,G__26484_26654,n__17221__auto___26652,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26674 = (__26653 + (1));
__26653 = G__26674;
continue;
} else {
}
break;
}

var c__20278__auto___26675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___26675,jobs,results,process,async){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___26675,jobs,results,process,async){
return (function (state_26560){
var state_val_26561 = (state_26560[(1)]);
if((state_val_26561 === (1))){
var state_26560__$1 = state_26560;
var statearr_26562_26676 = state_26560__$1;
(statearr_26562_26676[(2)] = null);

(statearr_26562_26676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26561 === (2))){
var state_26560__$1 = state_26560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26560__$1,(4),from);
} else {
if((state_val_26561 === (3))){
var inst_26558 = (state_26560[(2)]);
var state_26560__$1 = state_26560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26560__$1,inst_26558);
} else {
if((state_val_26561 === (4))){
var inst_26541 = (state_26560[(7)]);
var inst_26541__$1 = (state_26560[(2)]);
var inst_26542 = (inst_26541__$1 == null);
var state_26560__$1 = (function (){var statearr_26563 = state_26560;
(statearr_26563[(7)] = inst_26541__$1);

return statearr_26563;
})();
if(cljs.core.truth_(inst_26542)){
var statearr_26564_26677 = state_26560__$1;
(statearr_26564_26677[(1)] = (5));

} else {
var statearr_26565_26678 = state_26560__$1;
(statearr_26565_26678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26561 === (5))){
var inst_26544 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26560__$1 = state_26560;
var statearr_26566_26679 = state_26560__$1;
(statearr_26566_26679[(2)] = inst_26544);

(statearr_26566_26679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26561 === (6))){
var inst_26541 = (state_26560[(7)]);
var inst_26546 = (state_26560[(8)]);
var inst_26546__$1 = cljs.core.async.chan.call(null,(1));
var inst_26547 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26548 = [inst_26541,inst_26546__$1];
var inst_26549 = (new cljs.core.PersistentVector(null,2,(5),inst_26547,inst_26548,null));
var state_26560__$1 = (function (){var statearr_26567 = state_26560;
(statearr_26567[(8)] = inst_26546__$1);

return statearr_26567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26560__$1,(8),jobs,inst_26549);
} else {
if((state_val_26561 === (7))){
var inst_26556 = (state_26560[(2)]);
var state_26560__$1 = state_26560;
var statearr_26568_26680 = state_26560__$1;
(statearr_26568_26680[(2)] = inst_26556);

(statearr_26568_26680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26561 === (8))){
var inst_26546 = (state_26560[(8)]);
var inst_26551 = (state_26560[(2)]);
var state_26560__$1 = (function (){var statearr_26569 = state_26560;
(statearr_26569[(9)] = inst_26551);

return statearr_26569;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26560__$1,(9),results,inst_26546);
} else {
if((state_val_26561 === (9))){
var inst_26553 = (state_26560[(2)]);
var state_26560__$1 = (function (){var statearr_26570 = state_26560;
(statearr_26570[(10)] = inst_26553);

return statearr_26570;
})();
var statearr_26571_26681 = state_26560__$1;
(statearr_26571_26681[(2)] = null);

(statearr_26571_26681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___26675,jobs,results,process,async))
;
return ((function (switch__20213__auto__,c__20278__auto___26675,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0 = (function (){
var statearr_26575 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26575[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__);

(statearr_26575[(1)] = (1));

return statearr_26575;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1 = (function (state_26560){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_26560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e26576){if((e26576 instanceof Object)){
var ex__20217__auto__ = e26576;
var statearr_26577_26682 = state_26560;
(statearr_26577_26682[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26683 = state_26560;
state_26560 = G__26683;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = function(state_26560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1.call(this,state_26560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___26675,jobs,results,process,async))
})();
var state__20280__auto__ = (function (){var statearr_26578 = f__20279__auto__.call(null);
(statearr_26578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___26675);

return statearr_26578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___26675,jobs,results,process,async))
);


var c__20278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto__,jobs,results,process,async){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto__,jobs,results,process,async){
return (function (state_26616){
var state_val_26617 = (state_26616[(1)]);
if((state_val_26617 === (7))){
var inst_26612 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
var statearr_26618_26684 = state_26616__$1;
(statearr_26618_26684[(2)] = inst_26612);

(statearr_26618_26684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (20))){
var state_26616__$1 = state_26616;
var statearr_26619_26685 = state_26616__$1;
(statearr_26619_26685[(2)] = null);

(statearr_26619_26685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (1))){
var state_26616__$1 = state_26616;
var statearr_26620_26686 = state_26616__$1;
(statearr_26620_26686[(2)] = null);

(statearr_26620_26686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (4))){
var inst_26581 = (state_26616[(7)]);
var inst_26581__$1 = (state_26616[(2)]);
var inst_26582 = (inst_26581__$1 == null);
var state_26616__$1 = (function (){var statearr_26621 = state_26616;
(statearr_26621[(7)] = inst_26581__$1);

return statearr_26621;
})();
if(cljs.core.truth_(inst_26582)){
var statearr_26622_26687 = state_26616__$1;
(statearr_26622_26687[(1)] = (5));

} else {
var statearr_26623_26688 = state_26616__$1;
(statearr_26623_26688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (15))){
var inst_26594 = (state_26616[(8)]);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26616__$1,(18),to,inst_26594);
} else {
if((state_val_26617 === (21))){
var inst_26607 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
var statearr_26624_26689 = state_26616__$1;
(statearr_26624_26689[(2)] = inst_26607);

(statearr_26624_26689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (13))){
var inst_26609 = (state_26616[(2)]);
var state_26616__$1 = (function (){var statearr_26625 = state_26616;
(statearr_26625[(9)] = inst_26609);

return statearr_26625;
})();
var statearr_26626_26690 = state_26616__$1;
(statearr_26626_26690[(2)] = null);

(statearr_26626_26690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (6))){
var inst_26581 = (state_26616[(7)]);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26616__$1,(11),inst_26581);
} else {
if((state_val_26617 === (17))){
var inst_26602 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
if(cljs.core.truth_(inst_26602)){
var statearr_26627_26691 = state_26616__$1;
(statearr_26627_26691[(1)] = (19));

} else {
var statearr_26628_26692 = state_26616__$1;
(statearr_26628_26692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (3))){
var inst_26614 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26616__$1,inst_26614);
} else {
if((state_val_26617 === (12))){
var inst_26591 = (state_26616[(10)]);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26616__$1,(14),inst_26591);
} else {
if((state_val_26617 === (2))){
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26616__$1,(4),results);
} else {
if((state_val_26617 === (19))){
var state_26616__$1 = state_26616;
var statearr_26629_26693 = state_26616__$1;
(statearr_26629_26693[(2)] = null);

(statearr_26629_26693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (11))){
var inst_26591 = (state_26616[(2)]);
var state_26616__$1 = (function (){var statearr_26630 = state_26616;
(statearr_26630[(10)] = inst_26591);

return statearr_26630;
})();
var statearr_26631_26694 = state_26616__$1;
(statearr_26631_26694[(2)] = null);

(statearr_26631_26694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (9))){
var state_26616__$1 = state_26616;
var statearr_26632_26695 = state_26616__$1;
(statearr_26632_26695[(2)] = null);

(statearr_26632_26695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (5))){
var state_26616__$1 = state_26616;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26633_26696 = state_26616__$1;
(statearr_26633_26696[(1)] = (8));

} else {
var statearr_26634_26697 = state_26616__$1;
(statearr_26634_26697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (14))){
var inst_26596 = (state_26616[(11)]);
var inst_26594 = (state_26616[(8)]);
var inst_26594__$1 = (state_26616[(2)]);
var inst_26595 = (inst_26594__$1 == null);
var inst_26596__$1 = cljs.core.not.call(null,inst_26595);
var state_26616__$1 = (function (){var statearr_26635 = state_26616;
(statearr_26635[(11)] = inst_26596__$1);

(statearr_26635[(8)] = inst_26594__$1);

return statearr_26635;
})();
if(inst_26596__$1){
var statearr_26636_26698 = state_26616__$1;
(statearr_26636_26698[(1)] = (15));

} else {
var statearr_26637_26699 = state_26616__$1;
(statearr_26637_26699[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (16))){
var inst_26596 = (state_26616[(11)]);
var state_26616__$1 = state_26616;
var statearr_26638_26700 = state_26616__$1;
(statearr_26638_26700[(2)] = inst_26596);

(statearr_26638_26700[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (10))){
var inst_26588 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
var statearr_26639_26701 = state_26616__$1;
(statearr_26639_26701[(2)] = inst_26588);

(statearr_26639_26701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (18))){
var inst_26599 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
var statearr_26640_26702 = state_26616__$1;
(statearr_26640_26702[(2)] = inst_26599);

(statearr_26640_26702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26617 === (8))){
var inst_26585 = cljs.core.async.close_BANG_.call(null,to);
var state_26616__$1 = state_26616;
var statearr_26641_26703 = state_26616__$1;
(statearr_26641_26703[(2)] = inst_26585);

(statearr_26641_26703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto__,jobs,results,process,async))
;
return ((function (switch__20213__auto__,c__20278__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0 = (function (){
var statearr_26645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__);

(statearr_26645[(1)] = (1));

return statearr_26645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1 = (function (state_26616){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_26616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e26646){if((e26646 instanceof Object)){
var ex__20217__auto__ = e26646;
var statearr_26647_26704 = state_26616;
(statearr_26647_26704[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26705 = state_26616;
state_26616 = G__26705;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__ = function(state_26616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1.call(this,state_26616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20214__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto__,jobs,results,process,async))
})();
var state__20280__auto__ = (function (){var statearr_26648 = f__20279__auto__.call(null);
(statearr_26648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto__);

return statearr_26648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto__,jobs,results,process,async))
);

return c__20278__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26706 = [];
var len__17376__auto___26709 = arguments.length;
var i__17377__auto___26710 = (0);
while(true){
if((i__17377__auto___26710 < len__17376__auto___26709)){
args26706.push((arguments[i__17377__auto___26710]));

var G__26711 = (i__17377__auto___26710 + (1));
i__17377__auto___26710 = G__26711;
continue;
} else {
}
break;
}

var G__26708 = args26706.length;
switch (G__26708) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26706.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26713 = [];
var len__17376__auto___26716 = arguments.length;
var i__17377__auto___26717 = (0);
while(true){
if((i__17377__auto___26717 < len__17376__auto___26716)){
args26713.push((arguments[i__17377__auto___26717]));

var G__26718 = (i__17377__auto___26717 + (1));
i__17377__auto___26717 = G__26718;
continue;
} else {
}
break;
}

var G__26715 = args26713.length;
switch (G__26715) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26713.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26720 = [];
var len__17376__auto___26773 = arguments.length;
var i__17377__auto___26774 = (0);
while(true){
if((i__17377__auto___26774 < len__17376__auto___26773)){
args26720.push((arguments[i__17377__auto___26774]));

var G__26775 = (i__17377__auto___26774 + (1));
i__17377__auto___26774 = G__26775;
continue;
} else {
}
break;
}

var G__26722 = args26720.length;
switch (G__26722) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26720.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20278__auto___26777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___26777,tc,fc){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___26777,tc,fc){
return (function (state_26748){
var state_val_26749 = (state_26748[(1)]);
if((state_val_26749 === (7))){
var inst_26744 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
var statearr_26750_26778 = state_26748__$1;
(statearr_26750_26778[(2)] = inst_26744);

(statearr_26750_26778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (1))){
var state_26748__$1 = state_26748;
var statearr_26751_26779 = state_26748__$1;
(statearr_26751_26779[(2)] = null);

(statearr_26751_26779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (4))){
var inst_26725 = (state_26748[(7)]);
var inst_26725__$1 = (state_26748[(2)]);
var inst_26726 = (inst_26725__$1 == null);
var state_26748__$1 = (function (){var statearr_26752 = state_26748;
(statearr_26752[(7)] = inst_26725__$1);

return statearr_26752;
})();
if(cljs.core.truth_(inst_26726)){
var statearr_26753_26780 = state_26748__$1;
(statearr_26753_26780[(1)] = (5));

} else {
var statearr_26754_26781 = state_26748__$1;
(statearr_26754_26781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (13))){
var state_26748__$1 = state_26748;
var statearr_26755_26782 = state_26748__$1;
(statearr_26755_26782[(2)] = null);

(statearr_26755_26782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (6))){
var inst_26725 = (state_26748[(7)]);
var inst_26731 = p.call(null,inst_26725);
var state_26748__$1 = state_26748;
if(cljs.core.truth_(inst_26731)){
var statearr_26756_26783 = state_26748__$1;
(statearr_26756_26783[(1)] = (9));

} else {
var statearr_26757_26784 = state_26748__$1;
(statearr_26757_26784[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (3))){
var inst_26746 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26748__$1,inst_26746);
} else {
if((state_val_26749 === (12))){
var state_26748__$1 = state_26748;
var statearr_26758_26785 = state_26748__$1;
(statearr_26758_26785[(2)] = null);

(statearr_26758_26785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (2))){
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26748__$1,(4),ch);
} else {
if((state_val_26749 === (11))){
var inst_26725 = (state_26748[(7)]);
var inst_26735 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26748__$1,(8),inst_26735,inst_26725);
} else {
if((state_val_26749 === (9))){
var state_26748__$1 = state_26748;
var statearr_26759_26786 = state_26748__$1;
(statearr_26759_26786[(2)] = tc);

(statearr_26759_26786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (5))){
var inst_26728 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26729 = cljs.core.async.close_BANG_.call(null,fc);
var state_26748__$1 = (function (){var statearr_26760 = state_26748;
(statearr_26760[(8)] = inst_26728);

return statearr_26760;
})();
var statearr_26761_26787 = state_26748__$1;
(statearr_26761_26787[(2)] = inst_26729);

(statearr_26761_26787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (14))){
var inst_26742 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
var statearr_26762_26788 = state_26748__$1;
(statearr_26762_26788[(2)] = inst_26742);

(statearr_26762_26788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (10))){
var state_26748__$1 = state_26748;
var statearr_26763_26789 = state_26748__$1;
(statearr_26763_26789[(2)] = fc);

(statearr_26763_26789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (8))){
var inst_26737 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
if(cljs.core.truth_(inst_26737)){
var statearr_26764_26790 = state_26748__$1;
(statearr_26764_26790[(1)] = (12));

} else {
var statearr_26765_26791 = state_26748__$1;
(statearr_26765_26791[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___26777,tc,fc))
;
return ((function (switch__20213__auto__,c__20278__auto___26777,tc,fc){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_26769 = [null,null,null,null,null,null,null,null,null];
(statearr_26769[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_26769[(1)] = (1));

return statearr_26769;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_26748){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_26748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e26770){if((e26770 instanceof Object)){
var ex__20217__auto__ = e26770;
var statearr_26771_26792 = state_26748;
(statearr_26771_26792[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26793 = state_26748;
state_26748 = G__26793;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_26748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_26748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___26777,tc,fc))
})();
var state__20280__auto__ = (function (){var statearr_26772 = f__20279__auto__.call(null);
(statearr_26772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___26777);

return statearr_26772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___26777,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto__){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto__){
return (function (state_26840){
var state_val_26841 = (state_26840[(1)]);
if((state_val_26841 === (1))){
var inst_26826 = init;
var state_26840__$1 = (function (){var statearr_26842 = state_26840;
(statearr_26842[(7)] = inst_26826);

return statearr_26842;
})();
var statearr_26843_26858 = state_26840__$1;
(statearr_26843_26858[(2)] = null);

(statearr_26843_26858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26841 === (2))){
var state_26840__$1 = state_26840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26840__$1,(4),ch);
} else {
if((state_val_26841 === (3))){
var inst_26838 = (state_26840[(2)]);
var state_26840__$1 = state_26840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26840__$1,inst_26838);
} else {
if((state_val_26841 === (4))){
var inst_26829 = (state_26840[(8)]);
var inst_26829__$1 = (state_26840[(2)]);
var inst_26830 = (inst_26829__$1 == null);
var state_26840__$1 = (function (){var statearr_26844 = state_26840;
(statearr_26844[(8)] = inst_26829__$1);

return statearr_26844;
})();
if(cljs.core.truth_(inst_26830)){
var statearr_26845_26859 = state_26840__$1;
(statearr_26845_26859[(1)] = (5));

} else {
var statearr_26846_26860 = state_26840__$1;
(statearr_26846_26860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26841 === (5))){
var inst_26826 = (state_26840[(7)]);
var state_26840__$1 = state_26840;
var statearr_26847_26861 = state_26840__$1;
(statearr_26847_26861[(2)] = inst_26826);

(statearr_26847_26861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26841 === (6))){
var inst_26829 = (state_26840[(8)]);
var inst_26826 = (state_26840[(7)]);
var inst_26833 = f.call(null,inst_26826,inst_26829);
var inst_26826__$1 = inst_26833;
var state_26840__$1 = (function (){var statearr_26848 = state_26840;
(statearr_26848[(7)] = inst_26826__$1);

return statearr_26848;
})();
var statearr_26849_26862 = state_26840__$1;
(statearr_26849_26862[(2)] = null);

(statearr_26849_26862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26841 === (7))){
var inst_26836 = (state_26840[(2)]);
var state_26840__$1 = state_26840;
var statearr_26850_26863 = state_26840__$1;
(statearr_26850_26863[(2)] = inst_26836);

(statearr_26850_26863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20278__auto__))
;
return ((function (switch__20213__auto__,c__20278__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20214__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20214__auto____0 = (function (){
var statearr_26854 = [null,null,null,null,null,null,null,null,null];
(statearr_26854[(0)] = cljs$core$async$reduce_$_state_machine__20214__auto__);

(statearr_26854[(1)] = (1));

return statearr_26854;
});
var cljs$core$async$reduce_$_state_machine__20214__auto____1 = (function (state_26840){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_26840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e26855){if((e26855 instanceof Object)){
var ex__20217__auto__ = e26855;
var statearr_26856_26864 = state_26840;
(statearr_26856_26864[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26865 = state_26840;
state_26840 = G__26865;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20214__auto__ = function(state_26840){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20214__auto____1.call(this,state_26840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20214__auto____0;
cljs$core$async$reduce_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20214__auto____1;
return cljs$core$async$reduce_$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto__))
})();
var state__20280__auto__ = (function (){var statearr_26857 = f__20279__auto__.call(null);
(statearr_26857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto__);

return statearr_26857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto__))
);

return c__20278__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args26866 = [];
var len__17376__auto___26918 = arguments.length;
var i__17377__auto___26919 = (0);
while(true){
if((i__17377__auto___26919 < len__17376__auto___26918)){
args26866.push((arguments[i__17377__auto___26919]));

var G__26920 = (i__17377__auto___26919 + (1));
i__17377__auto___26919 = G__26920;
continue;
} else {
}
break;
}

var G__26868 = args26866.length;
switch (G__26868) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26866.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto__){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto__){
return (function (state_26893){
var state_val_26894 = (state_26893[(1)]);
if((state_val_26894 === (7))){
var inst_26875 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
var statearr_26895_26922 = state_26893__$1;
(statearr_26895_26922[(2)] = inst_26875);

(statearr_26895_26922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (1))){
var inst_26869 = cljs.core.seq.call(null,coll);
var inst_26870 = inst_26869;
var state_26893__$1 = (function (){var statearr_26896 = state_26893;
(statearr_26896[(7)] = inst_26870);

return statearr_26896;
})();
var statearr_26897_26923 = state_26893__$1;
(statearr_26897_26923[(2)] = null);

(statearr_26897_26923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (4))){
var inst_26870 = (state_26893[(7)]);
var inst_26873 = cljs.core.first.call(null,inst_26870);
var state_26893__$1 = state_26893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26893__$1,(7),ch,inst_26873);
} else {
if((state_val_26894 === (13))){
var inst_26887 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
var statearr_26898_26924 = state_26893__$1;
(statearr_26898_26924[(2)] = inst_26887);

(statearr_26898_26924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (6))){
var inst_26878 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
if(cljs.core.truth_(inst_26878)){
var statearr_26899_26925 = state_26893__$1;
(statearr_26899_26925[(1)] = (8));

} else {
var statearr_26900_26926 = state_26893__$1;
(statearr_26900_26926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (3))){
var inst_26891 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26893__$1,inst_26891);
} else {
if((state_val_26894 === (12))){
var state_26893__$1 = state_26893;
var statearr_26901_26927 = state_26893__$1;
(statearr_26901_26927[(2)] = null);

(statearr_26901_26927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (2))){
var inst_26870 = (state_26893[(7)]);
var state_26893__$1 = state_26893;
if(cljs.core.truth_(inst_26870)){
var statearr_26902_26928 = state_26893__$1;
(statearr_26902_26928[(1)] = (4));

} else {
var statearr_26903_26929 = state_26893__$1;
(statearr_26903_26929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (11))){
var inst_26884 = cljs.core.async.close_BANG_.call(null,ch);
var state_26893__$1 = state_26893;
var statearr_26904_26930 = state_26893__$1;
(statearr_26904_26930[(2)] = inst_26884);

(statearr_26904_26930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (9))){
var state_26893__$1 = state_26893;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26905_26931 = state_26893__$1;
(statearr_26905_26931[(1)] = (11));

} else {
var statearr_26906_26932 = state_26893__$1;
(statearr_26906_26932[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (5))){
var inst_26870 = (state_26893[(7)]);
var state_26893__$1 = state_26893;
var statearr_26907_26933 = state_26893__$1;
(statearr_26907_26933[(2)] = inst_26870);

(statearr_26907_26933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (10))){
var inst_26889 = (state_26893[(2)]);
var state_26893__$1 = state_26893;
var statearr_26908_26934 = state_26893__$1;
(statearr_26908_26934[(2)] = inst_26889);

(statearr_26908_26934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26894 === (8))){
var inst_26870 = (state_26893[(7)]);
var inst_26880 = cljs.core.next.call(null,inst_26870);
var inst_26870__$1 = inst_26880;
var state_26893__$1 = (function (){var statearr_26909 = state_26893;
(statearr_26909[(7)] = inst_26870__$1);

return statearr_26909;
})();
var statearr_26910_26935 = state_26893__$1;
(statearr_26910_26935[(2)] = null);

(statearr_26910_26935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto__))
;
return ((function (switch__20213__auto__,c__20278__auto__){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_26914 = [null,null,null,null,null,null,null,null];
(statearr_26914[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_26914[(1)] = (1));

return statearr_26914;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_26893){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_26893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e26915){if((e26915 instanceof Object)){
var ex__20217__auto__ = e26915;
var statearr_26916_26936 = state_26893;
(statearr_26916_26936[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26937 = state_26893;
state_26893 = G__26937;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_26893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_26893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto__))
})();
var state__20280__auto__ = (function (){var statearr_26917 = f__20279__auto__.call(null);
(statearr_26917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto__);

return statearr_26917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto__))
);

return c__20278__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16973__auto__ = (((_ == null))?null:_);
var m__16974__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,_);
} else {
var m__16974__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16974__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m);
} else {
var m__16974__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27159 = (function (mult,ch,cs,meta27160){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27160 = meta27160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27161,meta27160__$1){
var self__ = this;
var _27161__$1 = this;
return (new cljs.core.async.t_cljs$core$async27159(self__.mult,self__.ch,self__.cs,meta27160__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27161){
var self__ = this;
var _27161__$1 = this;
return self__.meta27160;
});})(cs))
;

cljs.core.async.t_cljs$core$async27159.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27159.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27159.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27159.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27159.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27159.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27160","meta27160",975854431,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27159";

cljs.core.async.t_cljs$core$async27159.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async27159");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27159 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27159(mult__$1,ch__$1,cs__$1,meta27160){
return (new cljs.core.async.t_cljs$core$async27159(mult__$1,ch__$1,cs__$1,meta27160));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27159(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20278__auto___27380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___27380,cs,m,dchan,dctr,done){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___27380,cs,m,dchan,dctr,done){
return (function (state_27292){
var state_val_27293 = (state_27292[(1)]);
if((state_val_27293 === (7))){
var inst_27288 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27294_27381 = state_27292__$1;
(statearr_27294_27381[(2)] = inst_27288);

(statearr_27294_27381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (20))){
var inst_27193 = (state_27292[(7)]);
var inst_27203 = cljs.core.first.call(null,inst_27193);
var inst_27204 = cljs.core.nth.call(null,inst_27203,(0),null);
var inst_27205 = cljs.core.nth.call(null,inst_27203,(1),null);
var state_27292__$1 = (function (){var statearr_27295 = state_27292;
(statearr_27295[(8)] = inst_27204);

return statearr_27295;
})();
if(cljs.core.truth_(inst_27205)){
var statearr_27296_27382 = state_27292__$1;
(statearr_27296_27382[(1)] = (22));

} else {
var statearr_27297_27383 = state_27292__$1;
(statearr_27297_27383[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (27))){
var inst_27164 = (state_27292[(9)]);
var inst_27233 = (state_27292[(10)]);
var inst_27235 = (state_27292[(11)]);
var inst_27240 = (state_27292[(12)]);
var inst_27240__$1 = cljs.core._nth.call(null,inst_27233,inst_27235);
var inst_27241 = cljs.core.async.put_BANG_.call(null,inst_27240__$1,inst_27164,done);
var state_27292__$1 = (function (){var statearr_27298 = state_27292;
(statearr_27298[(12)] = inst_27240__$1);

return statearr_27298;
})();
if(cljs.core.truth_(inst_27241)){
var statearr_27299_27384 = state_27292__$1;
(statearr_27299_27384[(1)] = (30));

} else {
var statearr_27300_27385 = state_27292__$1;
(statearr_27300_27385[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (1))){
var state_27292__$1 = state_27292;
var statearr_27301_27386 = state_27292__$1;
(statearr_27301_27386[(2)] = null);

(statearr_27301_27386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (24))){
var inst_27193 = (state_27292[(7)]);
var inst_27210 = (state_27292[(2)]);
var inst_27211 = cljs.core.next.call(null,inst_27193);
var inst_27173 = inst_27211;
var inst_27174 = null;
var inst_27175 = (0);
var inst_27176 = (0);
var state_27292__$1 = (function (){var statearr_27302 = state_27292;
(statearr_27302[(13)] = inst_27175);

(statearr_27302[(14)] = inst_27173);

(statearr_27302[(15)] = inst_27174);

(statearr_27302[(16)] = inst_27176);

(statearr_27302[(17)] = inst_27210);

return statearr_27302;
})();
var statearr_27303_27387 = state_27292__$1;
(statearr_27303_27387[(2)] = null);

(statearr_27303_27387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (39))){
var state_27292__$1 = state_27292;
var statearr_27307_27388 = state_27292__$1;
(statearr_27307_27388[(2)] = null);

(statearr_27307_27388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (4))){
var inst_27164 = (state_27292[(9)]);
var inst_27164__$1 = (state_27292[(2)]);
var inst_27165 = (inst_27164__$1 == null);
var state_27292__$1 = (function (){var statearr_27308 = state_27292;
(statearr_27308[(9)] = inst_27164__$1);

return statearr_27308;
})();
if(cljs.core.truth_(inst_27165)){
var statearr_27309_27389 = state_27292__$1;
(statearr_27309_27389[(1)] = (5));

} else {
var statearr_27310_27390 = state_27292__$1;
(statearr_27310_27390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (15))){
var inst_27175 = (state_27292[(13)]);
var inst_27173 = (state_27292[(14)]);
var inst_27174 = (state_27292[(15)]);
var inst_27176 = (state_27292[(16)]);
var inst_27189 = (state_27292[(2)]);
var inst_27190 = (inst_27176 + (1));
var tmp27304 = inst_27175;
var tmp27305 = inst_27173;
var tmp27306 = inst_27174;
var inst_27173__$1 = tmp27305;
var inst_27174__$1 = tmp27306;
var inst_27175__$1 = tmp27304;
var inst_27176__$1 = inst_27190;
var state_27292__$1 = (function (){var statearr_27311 = state_27292;
(statearr_27311[(18)] = inst_27189);

(statearr_27311[(13)] = inst_27175__$1);

(statearr_27311[(14)] = inst_27173__$1);

(statearr_27311[(15)] = inst_27174__$1);

(statearr_27311[(16)] = inst_27176__$1);

return statearr_27311;
})();
var statearr_27312_27391 = state_27292__$1;
(statearr_27312_27391[(2)] = null);

(statearr_27312_27391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (21))){
var inst_27214 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27316_27392 = state_27292__$1;
(statearr_27316_27392[(2)] = inst_27214);

(statearr_27316_27392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (31))){
var inst_27240 = (state_27292[(12)]);
var inst_27244 = done.call(null,null);
var inst_27245 = cljs.core.async.untap_STAR_.call(null,m,inst_27240);
var state_27292__$1 = (function (){var statearr_27317 = state_27292;
(statearr_27317[(19)] = inst_27244);

return statearr_27317;
})();
var statearr_27318_27393 = state_27292__$1;
(statearr_27318_27393[(2)] = inst_27245);

(statearr_27318_27393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (32))){
var inst_27233 = (state_27292[(10)]);
var inst_27232 = (state_27292[(20)]);
var inst_27234 = (state_27292[(21)]);
var inst_27235 = (state_27292[(11)]);
var inst_27247 = (state_27292[(2)]);
var inst_27248 = (inst_27235 + (1));
var tmp27313 = inst_27233;
var tmp27314 = inst_27232;
var tmp27315 = inst_27234;
var inst_27232__$1 = tmp27314;
var inst_27233__$1 = tmp27313;
var inst_27234__$1 = tmp27315;
var inst_27235__$1 = inst_27248;
var state_27292__$1 = (function (){var statearr_27319 = state_27292;
(statearr_27319[(10)] = inst_27233__$1);

(statearr_27319[(20)] = inst_27232__$1);

(statearr_27319[(21)] = inst_27234__$1);

(statearr_27319[(11)] = inst_27235__$1);

(statearr_27319[(22)] = inst_27247);

return statearr_27319;
})();
var statearr_27320_27394 = state_27292__$1;
(statearr_27320_27394[(2)] = null);

(statearr_27320_27394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (40))){
var inst_27260 = (state_27292[(23)]);
var inst_27264 = done.call(null,null);
var inst_27265 = cljs.core.async.untap_STAR_.call(null,m,inst_27260);
var state_27292__$1 = (function (){var statearr_27321 = state_27292;
(statearr_27321[(24)] = inst_27264);

return statearr_27321;
})();
var statearr_27322_27395 = state_27292__$1;
(statearr_27322_27395[(2)] = inst_27265);

(statearr_27322_27395[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (33))){
var inst_27251 = (state_27292[(25)]);
var inst_27253 = cljs.core.chunked_seq_QMARK_.call(null,inst_27251);
var state_27292__$1 = state_27292;
if(inst_27253){
var statearr_27323_27396 = state_27292__$1;
(statearr_27323_27396[(1)] = (36));

} else {
var statearr_27324_27397 = state_27292__$1;
(statearr_27324_27397[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (13))){
var inst_27183 = (state_27292[(26)]);
var inst_27186 = cljs.core.async.close_BANG_.call(null,inst_27183);
var state_27292__$1 = state_27292;
var statearr_27325_27398 = state_27292__$1;
(statearr_27325_27398[(2)] = inst_27186);

(statearr_27325_27398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (22))){
var inst_27204 = (state_27292[(8)]);
var inst_27207 = cljs.core.async.close_BANG_.call(null,inst_27204);
var state_27292__$1 = state_27292;
var statearr_27326_27399 = state_27292__$1;
(statearr_27326_27399[(2)] = inst_27207);

(statearr_27326_27399[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (36))){
var inst_27251 = (state_27292[(25)]);
var inst_27255 = cljs.core.chunk_first.call(null,inst_27251);
var inst_27256 = cljs.core.chunk_rest.call(null,inst_27251);
var inst_27257 = cljs.core.count.call(null,inst_27255);
var inst_27232 = inst_27256;
var inst_27233 = inst_27255;
var inst_27234 = inst_27257;
var inst_27235 = (0);
var state_27292__$1 = (function (){var statearr_27327 = state_27292;
(statearr_27327[(10)] = inst_27233);

(statearr_27327[(20)] = inst_27232);

(statearr_27327[(21)] = inst_27234);

(statearr_27327[(11)] = inst_27235);

return statearr_27327;
})();
var statearr_27328_27400 = state_27292__$1;
(statearr_27328_27400[(2)] = null);

(statearr_27328_27400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (41))){
var inst_27251 = (state_27292[(25)]);
var inst_27267 = (state_27292[(2)]);
var inst_27268 = cljs.core.next.call(null,inst_27251);
var inst_27232 = inst_27268;
var inst_27233 = null;
var inst_27234 = (0);
var inst_27235 = (0);
var state_27292__$1 = (function (){var statearr_27329 = state_27292;
(statearr_27329[(10)] = inst_27233);

(statearr_27329[(20)] = inst_27232);

(statearr_27329[(21)] = inst_27234);

(statearr_27329[(11)] = inst_27235);

(statearr_27329[(27)] = inst_27267);

return statearr_27329;
})();
var statearr_27330_27401 = state_27292__$1;
(statearr_27330_27401[(2)] = null);

(statearr_27330_27401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (43))){
var state_27292__$1 = state_27292;
var statearr_27331_27402 = state_27292__$1;
(statearr_27331_27402[(2)] = null);

(statearr_27331_27402[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (29))){
var inst_27276 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27332_27403 = state_27292__$1;
(statearr_27332_27403[(2)] = inst_27276);

(statearr_27332_27403[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (44))){
var inst_27285 = (state_27292[(2)]);
var state_27292__$1 = (function (){var statearr_27333 = state_27292;
(statearr_27333[(28)] = inst_27285);

return statearr_27333;
})();
var statearr_27334_27404 = state_27292__$1;
(statearr_27334_27404[(2)] = null);

(statearr_27334_27404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (6))){
var inst_27224 = (state_27292[(29)]);
var inst_27223 = cljs.core.deref.call(null,cs);
var inst_27224__$1 = cljs.core.keys.call(null,inst_27223);
var inst_27225 = cljs.core.count.call(null,inst_27224__$1);
var inst_27226 = cljs.core.reset_BANG_.call(null,dctr,inst_27225);
var inst_27231 = cljs.core.seq.call(null,inst_27224__$1);
var inst_27232 = inst_27231;
var inst_27233 = null;
var inst_27234 = (0);
var inst_27235 = (0);
var state_27292__$1 = (function (){var statearr_27335 = state_27292;
(statearr_27335[(29)] = inst_27224__$1);

(statearr_27335[(30)] = inst_27226);

(statearr_27335[(10)] = inst_27233);

(statearr_27335[(20)] = inst_27232);

(statearr_27335[(21)] = inst_27234);

(statearr_27335[(11)] = inst_27235);

return statearr_27335;
})();
var statearr_27336_27405 = state_27292__$1;
(statearr_27336_27405[(2)] = null);

(statearr_27336_27405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (28))){
var inst_27232 = (state_27292[(20)]);
var inst_27251 = (state_27292[(25)]);
var inst_27251__$1 = cljs.core.seq.call(null,inst_27232);
var state_27292__$1 = (function (){var statearr_27337 = state_27292;
(statearr_27337[(25)] = inst_27251__$1);

return statearr_27337;
})();
if(inst_27251__$1){
var statearr_27338_27406 = state_27292__$1;
(statearr_27338_27406[(1)] = (33));

} else {
var statearr_27339_27407 = state_27292__$1;
(statearr_27339_27407[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (25))){
var inst_27234 = (state_27292[(21)]);
var inst_27235 = (state_27292[(11)]);
var inst_27237 = (inst_27235 < inst_27234);
var inst_27238 = inst_27237;
var state_27292__$1 = state_27292;
if(cljs.core.truth_(inst_27238)){
var statearr_27340_27408 = state_27292__$1;
(statearr_27340_27408[(1)] = (27));

} else {
var statearr_27341_27409 = state_27292__$1;
(statearr_27341_27409[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (34))){
var state_27292__$1 = state_27292;
var statearr_27342_27410 = state_27292__$1;
(statearr_27342_27410[(2)] = null);

(statearr_27342_27410[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (17))){
var state_27292__$1 = state_27292;
var statearr_27343_27411 = state_27292__$1;
(statearr_27343_27411[(2)] = null);

(statearr_27343_27411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (3))){
var inst_27290 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27292__$1,inst_27290);
} else {
if((state_val_27293 === (12))){
var inst_27219 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27344_27412 = state_27292__$1;
(statearr_27344_27412[(2)] = inst_27219);

(statearr_27344_27412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (2))){
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27292__$1,(4),ch);
} else {
if((state_val_27293 === (23))){
var state_27292__$1 = state_27292;
var statearr_27345_27413 = state_27292__$1;
(statearr_27345_27413[(2)] = null);

(statearr_27345_27413[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (35))){
var inst_27274 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27346_27414 = state_27292__$1;
(statearr_27346_27414[(2)] = inst_27274);

(statearr_27346_27414[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (19))){
var inst_27193 = (state_27292[(7)]);
var inst_27197 = cljs.core.chunk_first.call(null,inst_27193);
var inst_27198 = cljs.core.chunk_rest.call(null,inst_27193);
var inst_27199 = cljs.core.count.call(null,inst_27197);
var inst_27173 = inst_27198;
var inst_27174 = inst_27197;
var inst_27175 = inst_27199;
var inst_27176 = (0);
var state_27292__$1 = (function (){var statearr_27347 = state_27292;
(statearr_27347[(13)] = inst_27175);

(statearr_27347[(14)] = inst_27173);

(statearr_27347[(15)] = inst_27174);

(statearr_27347[(16)] = inst_27176);

return statearr_27347;
})();
var statearr_27348_27415 = state_27292__$1;
(statearr_27348_27415[(2)] = null);

(statearr_27348_27415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (11))){
var inst_27193 = (state_27292[(7)]);
var inst_27173 = (state_27292[(14)]);
var inst_27193__$1 = cljs.core.seq.call(null,inst_27173);
var state_27292__$1 = (function (){var statearr_27349 = state_27292;
(statearr_27349[(7)] = inst_27193__$1);

return statearr_27349;
})();
if(inst_27193__$1){
var statearr_27350_27416 = state_27292__$1;
(statearr_27350_27416[(1)] = (16));

} else {
var statearr_27351_27417 = state_27292__$1;
(statearr_27351_27417[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (9))){
var inst_27221 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27352_27418 = state_27292__$1;
(statearr_27352_27418[(2)] = inst_27221);

(statearr_27352_27418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (5))){
var inst_27171 = cljs.core.deref.call(null,cs);
var inst_27172 = cljs.core.seq.call(null,inst_27171);
var inst_27173 = inst_27172;
var inst_27174 = null;
var inst_27175 = (0);
var inst_27176 = (0);
var state_27292__$1 = (function (){var statearr_27353 = state_27292;
(statearr_27353[(13)] = inst_27175);

(statearr_27353[(14)] = inst_27173);

(statearr_27353[(15)] = inst_27174);

(statearr_27353[(16)] = inst_27176);

return statearr_27353;
})();
var statearr_27354_27419 = state_27292__$1;
(statearr_27354_27419[(2)] = null);

(statearr_27354_27419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (14))){
var state_27292__$1 = state_27292;
var statearr_27355_27420 = state_27292__$1;
(statearr_27355_27420[(2)] = null);

(statearr_27355_27420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (45))){
var inst_27282 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27356_27421 = state_27292__$1;
(statearr_27356_27421[(2)] = inst_27282);

(statearr_27356_27421[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (26))){
var inst_27224 = (state_27292[(29)]);
var inst_27278 = (state_27292[(2)]);
var inst_27279 = cljs.core.seq.call(null,inst_27224);
var state_27292__$1 = (function (){var statearr_27357 = state_27292;
(statearr_27357[(31)] = inst_27278);

return statearr_27357;
})();
if(inst_27279){
var statearr_27358_27422 = state_27292__$1;
(statearr_27358_27422[(1)] = (42));

} else {
var statearr_27359_27423 = state_27292__$1;
(statearr_27359_27423[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (16))){
var inst_27193 = (state_27292[(7)]);
var inst_27195 = cljs.core.chunked_seq_QMARK_.call(null,inst_27193);
var state_27292__$1 = state_27292;
if(inst_27195){
var statearr_27360_27424 = state_27292__$1;
(statearr_27360_27424[(1)] = (19));

} else {
var statearr_27361_27425 = state_27292__$1;
(statearr_27361_27425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (38))){
var inst_27271 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27362_27426 = state_27292__$1;
(statearr_27362_27426[(2)] = inst_27271);

(statearr_27362_27426[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (30))){
var state_27292__$1 = state_27292;
var statearr_27363_27427 = state_27292__$1;
(statearr_27363_27427[(2)] = null);

(statearr_27363_27427[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (10))){
var inst_27174 = (state_27292[(15)]);
var inst_27176 = (state_27292[(16)]);
var inst_27182 = cljs.core._nth.call(null,inst_27174,inst_27176);
var inst_27183 = cljs.core.nth.call(null,inst_27182,(0),null);
var inst_27184 = cljs.core.nth.call(null,inst_27182,(1),null);
var state_27292__$1 = (function (){var statearr_27364 = state_27292;
(statearr_27364[(26)] = inst_27183);

return statearr_27364;
})();
if(cljs.core.truth_(inst_27184)){
var statearr_27365_27428 = state_27292__$1;
(statearr_27365_27428[(1)] = (13));

} else {
var statearr_27366_27429 = state_27292__$1;
(statearr_27366_27429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (18))){
var inst_27217 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27367_27430 = state_27292__$1;
(statearr_27367_27430[(2)] = inst_27217);

(statearr_27367_27430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (42))){
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27292__$1,(45),dchan);
} else {
if((state_val_27293 === (37))){
var inst_27164 = (state_27292[(9)]);
var inst_27260 = (state_27292[(23)]);
var inst_27251 = (state_27292[(25)]);
var inst_27260__$1 = cljs.core.first.call(null,inst_27251);
var inst_27261 = cljs.core.async.put_BANG_.call(null,inst_27260__$1,inst_27164,done);
var state_27292__$1 = (function (){var statearr_27368 = state_27292;
(statearr_27368[(23)] = inst_27260__$1);

return statearr_27368;
})();
if(cljs.core.truth_(inst_27261)){
var statearr_27369_27431 = state_27292__$1;
(statearr_27369_27431[(1)] = (39));

} else {
var statearr_27370_27432 = state_27292__$1;
(statearr_27370_27432[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (8))){
var inst_27175 = (state_27292[(13)]);
var inst_27176 = (state_27292[(16)]);
var inst_27178 = (inst_27176 < inst_27175);
var inst_27179 = inst_27178;
var state_27292__$1 = state_27292;
if(cljs.core.truth_(inst_27179)){
var statearr_27371_27433 = state_27292__$1;
(statearr_27371_27433[(1)] = (10));

} else {
var statearr_27372_27434 = state_27292__$1;
(statearr_27372_27434[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___27380,cs,m,dchan,dctr,done))
;
return ((function (switch__20213__auto__,c__20278__auto___27380,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20214__auto__ = null;
var cljs$core$async$mult_$_state_machine__20214__auto____0 = (function (){
var statearr_27376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27376[(0)] = cljs$core$async$mult_$_state_machine__20214__auto__);

(statearr_27376[(1)] = (1));

return statearr_27376;
});
var cljs$core$async$mult_$_state_machine__20214__auto____1 = (function (state_27292){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_27292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e27377){if((e27377 instanceof Object)){
var ex__20217__auto__ = e27377;
var statearr_27378_27435 = state_27292;
(statearr_27378_27435[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27436 = state_27292;
state_27292 = G__27436;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20214__auto__ = function(state_27292){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20214__auto____1.call(this,state_27292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20214__auto____0;
cljs$core$async$mult_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20214__auto____1;
return cljs$core$async$mult_$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___27380,cs,m,dchan,dctr,done))
})();
var state__20280__auto__ = (function (){var statearr_27379 = f__20279__auto__.call(null);
(statearr_27379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___27380);

return statearr_27379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___27380,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27437 = [];
var len__17376__auto___27440 = arguments.length;
var i__17377__auto___27441 = (0);
while(true){
if((i__17377__auto___27441 < len__17376__auto___27440)){
args27437.push((arguments[i__17377__auto___27441]));

var G__27442 = (i__17377__auto___27441 + (1));
i__17377__auto___27441 = G__27442;
continue;
} else {
}
break;
}

var G__27439 = args27437.length;
switch (G__27439) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27437.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m);
} else {
var m__16974__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,state_map);
} else {
var m__16974__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,mode);
} else {
var m__16974__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17383__auto__ = [];
var len__17376__auto___27454 = arguments.length;
var i__17377__auto___27455 = (0);
while(true){
if((i__17377__auto___27455 < len__17376__auto___27454)){
args__17383__auto__.push((arguments[i__17377__auto___27455]));

var G__27456 = (i__17377__auto___27455 + (1));
i__17377__auto___27455 = G__27456;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((3) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17384__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27448){
var map__27449 = p__27448;
var map__27449__$1 = ((((!((map__27449 == null)))?((((map__27449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27449):map__27449);
var opts = map__27449__$1;
var statearr_27451_27457 = state;
(statearr_27451_27457[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27449,map__27449__$1,opts){
return (function (val){
var statearr_27452_27458 = state;
(statearr_27452_27458[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27449,map__27449__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27453_27459 = state;
(statearr_27453_27459[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27444){
var G__27445 = cljs.core.first.call(null,seq27444);
var seq27444__$1 = cljs.core.next.call(null,seq27444);
var G__27446 = cljs.core.first.call(null,seq27444__$1);
var seq27444__$2 = cljs.core.next.call(null,seq27444__$1);
var G__27447 = cljs.core.first.call(null,seq27444__$2);
var seq27444__$3 = cljs.core.next.call(null,seq27444__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27445,G__27446,G__27447,seq27444__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27623 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27624){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27624 = meta27624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27625,meta27624__$1){
var self__ = this;
var _27625__$1 = this;
return (new cljs.core.async.t_cljs$core$async27623(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27624__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27625){
var self__ = this;
var _27625__$1 = this;
return self__.meta27624;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27623.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27624","meta27624",-1315395998,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27623";

cljs.core.async.t_cljs$core$async27623.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async27623");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27623 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27623(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27624){
return (new cljs.core.async.t_cljs$core$async27623(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27624));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27623(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20278__auto___27786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___27786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___27786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27723){
var state_val_27724 = (state_27723[(1)]);
if((state_val_27724 === (7))){
var inst_27641 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27725_27787 = state_27723__$1;
(statearr_27725_27787[(2)] = inst_27641);

(statearr_27725_27787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (20))){
var inst_27653 = (state_27723[(7)]);
var state_27723__$1 = state_27723;
var statearr_27726_27788 = state_27723__$1;
(statearr_27726_27788[(2)] = inst_27653);

(statearr_27726_27788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (27))){
var state_27723__$1 = state_27723;
var statearr_27727_27789 = state_27723__$1;
(statearr_27727_27789[(2)] = null);

(statearr_27727_27789[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (1))){
var inst_27629 = (state_27723[(8)]);
var inst_27629__$1 = calc_state.call(null);
var inst_27631 = (inst_27629__$1 == null);
var inst_27632 = cljs.core.not.call(null,inst_27631);
var state_27723__$1 = (function (){var statearr_27728 = state_27723;
(statearr_27728[(8)] = inst_27629__$1);

return statearr_27728;
})();
if(inst_27632){
var statearr_27729_27790 = state_27723__$1;
(statearr_27729_27790[(1)] = (2));

} else {
var statearr_27730_27791 = state_27723__$1;
(statearr_27730_27791[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (24))){
var inst_27683 = (state_27723[(9)]);
var inst_27676 = (state_27723[(10)]);
var inst_27697 = (state_27723[(11)]);
var inst_27697__$1 = inst_27676.call(null,inst_27683);
var state_27723__$1 = (function (){var statearr_27731 = state_27723;
(statearr_27731[(11)] = inst_27697__$1);

return statearr_27731;
})();
if(cljs.core.truth_(inst_27697__$1)){
var statearr_27732_27792 = state_27723__$1;
(statearr_27732_27792[(1)] = (29));

} else {
var statearr_27733_27793 = state_27723__$1;
(statearr_27733_27793[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (4))){
var inst_27644 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27644)){
var statearr_27734_27794 = state_27723__$1;
(statearr_27734_27794[(1)] = (8));

} else {
var statearr_27735_27795 = state_27723__$1;
(statearr_27735_27795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (15))){
var inst_27670 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27670)){
var statearr_27736_27796 = state_27723__$1;
(statearr_27736_27796[(1)] = (19));

} else {
var statearr_27737_27797 = state_27723__$1;
(statearr_27737_27797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (21))){
var inst_27675 = (state_27723[(12)]);
var inst_27675__$1 = (state_27723[(2)]);
var inst_27676 = cljs.core.get.call(null,inst_27675__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27677 = cljs.core.get.call(null,inst_27675__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27678 = cljs.core.get.call(null,inst_27675__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27723__$1 = (function (){var statearr_27738 = state_27723;
(statearr_27738[(13)] = inst_27677);

(statearr_27738[(10)] = inst_27676);

(statearr_27738[(12)] = inst_27675__$1);

return statearr_27738;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27723__$1,(22),inst_27678);
} else {
if((state_val_27724 === (31))){
var inst_27705 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27705)){
var statearr_27739_27798 = state_27723__$1;
(statearr_27739_27798[(1)] = (32));

} else {
var statearr_27740_27799 = state_27723__$1;
(statearr_27740_27799[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (32))){
var inst_27682 = (state_27723[(14)]);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27723__$1,(35),out,inst_27682);
} else {
if((state_val_27724 === (33))){
var inst_27675 = (state_27723[(12)]);
var inst_27653 = inst_27675;
var state_27723__$1 = (function (){var statearr_27741 = state_27723;
(statearr_27741[(7)] = inst_27653);

return statearr_27741;
})();
var statearr_27742_27800 = state_27723__$1;
(statearr_27742_27800[(2)] = null);

(statearr_27742_27800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (13))){
var inst_27653 = (state_27723[(7)]);
var inst_27660 = inst_27653.cljs$lang$protocol_mask$partition0$;
var inst_27661 = (inst_27660 & (64));
var inst_27662 = inst_27653.cljs$core$ISeq$;
var inst_27663 = (inst_27661) || (inst_27662);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27663)){
var statearr_27743_27801 = state_27723__$1;
(statearr_27743_27801[(1)] = (16));

} else {
var statearr_27744_27802 = state_27723__$1;
(statearr_27744_27802[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (22))){
var inst_27683 = (state_27723[(9)]);
var inst_27682 = (state_27723[(14)]);
var inst_27681 = (state_27723[(2)]);
var inst_27682__$1 = cljs.core.nth.call(null,inst_27681,(0),null);
var inst_27683__$1 = cljs.core.nth.call(null,inst_27681,(1),null);
var inst_27684 = (inst_27682__$1 == null);
var inst_27685 = cljs.core._EQ_.call(null,inst_27683__$1,change);
var inst_27686 = (inst_27684) || (inst_27685);
var state_27723__$1 = (function (){var statearr_27745 = state_27723;
(statearr_27745[(9)] = inst_27683__$1);

(statearr_27745[(14)] = inst_27682__$1);

return statearr_27745;
})();
if(cljs.core.truth_(inst_27686)){
var statearr_27746_27803 = state_27723__$1;
(statearr_27746_27803[(1)] = (23));

} else {
var statearr_27747_27804 = state_27723__$1;
(statearr_27747_27804[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (36))){
var inst_27675 = (state_27723[(12)]);
var inst_27653 = inst_27675;
var state_27723__$1 = (function (){var statearr_27748 = state_27723;
(statearr_27748[(7)] = inst_27653);

return statearr_27748;
})();
var statearr_27749_27805 = state_27723__$1;
(statearr_27749_27805[(2)] = null);

(statearr_27749_27805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (29))){
var inst_27697 = (state_27723[(11)]);
var state_27723__$1 = state_27723;
var statearr_27750_27806 = state_27723__$1;
(statearr_27750_27806[(2)] = inst_27697);

(statearr_27750_27806[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (6))){
var state_27723__$1 = state_27723;
var statearr_27751_27807 = state_27723__$1;
(statearr_27751_27807[(2)] = false);

(statearr_27751_27807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (28))){
var inst_27693 = (state_27723[(2)]);
var inst_27694 = calc_state.call(null);
var inst_27653 = inst_27694;
var state_27723__$1 = (function (){var statearr_27752 = state_27723;
(statearr_27752[(15)] = inst_27693);

(statearr_27752[(7)] = inst_27653);

return statearr_27752;
})();
var statearr_27753_27808 = state_27723__$1;
(statearr_27753_27808[(2)] = null);

(statearr_27753_27808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (25))){
var inst_27719 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27754_27809 = state_27723__$1;
(statearr_27754_27809[(2)] = inst_27719);

(statearr_27754_27809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (34))){
var inst_27717 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27755_27810 = state_27723__$1;
(statearr_27755_27810[(2)] = inst_27717);

(statearr_27755_27810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (17))){
var state_27723__$1 = state_27723;
var statearr_27756_27811 = state_27723__$1;
(statearr_27756_27811[(2)] = false);

(statearr_27756_27811[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (3))){
var state_27723__$1 = state_27723;
var statearr_27757_27812 = state_27723__$1;
(statearr_27757_27812[(2)] = false);

(statearr_27757_27812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (12))){
var inst_27721 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27723__$1,inst_27721);
} else {
if((state_val_27724 === (2))){
var inst_27629 = (state_27723[(8)]);
var inst_27634 = inst_27629.cljs$lang$protocol_mask$partition0$;
var inst_27635 = (inst_27634 & (64));
var inst_27636 = inst_27629.cljs$core$ISeq$;
var inst_27637 = (inst_27635) || (inst_27636);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27637)){
var statearr_27758_27813 = state_27723__$1;
(statearr_27758_27813[(1)] = (5));

} else {
var statearr_27759_27814 = state_27723__$1;
(statearr_27759_27814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (23))){
var inst_27682 = (state_27723[(14)]);
var inst_27688 = (inst_27682 == null);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27688)){
var statearr_27760_27815 = state_27723__$1;
(statearr_27760_27815[(1)] = (26));

} else {
var statearr_27761_27816 = state_27723__$1;
(statearr_27761_27816[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (35))){
var inst_27708 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27708)){
var statearr_27762_27817 = state_27723__$1;
(statearr_27762_27817[(1)] = (36));

} else {
var statearr_27763_27818 = state_27723__$1;
(statearr_27763_27818[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (19))){
var inst_27653 = (state_27723[(7)]);
var inst_27672 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27653);
var state_27723__$1 = state_27723;
var statearr_27764_27819 = state_27723__$1;
(statearr_27764_27819[(2)] = inst_27672);

(statearr_27764_27819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (11))){
var inst_27653 = (state_27723[(7)]);
var inst_27657 = (inst_27653 == null);
var inst_27658 = cljs.core.not.call(null,inst_27657);
var state_27723__$1 = state_27723;
if(inst_27658){
var statearr_27765_27820 = state_27723__$1;
(statearr_27765_27820[(1)] = (13));

} else {
var statearr_27766_27821 = state_27723__$1;
(statearr_27766_27821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (9))){
var inst_27629 = (state_27723[(8)]);
var state_27723__$1 = state_27723;
var statearr_27767_27822 = state_27723__$1;
(statearr_27767_27822[(2)] = inst_27629);

(statearr_27767_27822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (5))){
var state_27723__$1 = state_27723;
var statearr_27768_27823 = state_27723__$1;
(statearr_27768_27823[(2)] = true);

(statearr_27768_27823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (14))){
var state_27723__$1 = state_27723;
var statearr_27769_27824 = state_27723__$1;
(statearr_27769_27824[(2)] = false);

(statearr_27769_27824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (26))){
var inst_27683 = (state_27723[(9)]);
var inst_27690 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27683);
var state_27723__$1 = state_27723;
var statearr_27770_27825 = state_27723__$1;
(statearr_27770_27825[(2)] = inst_27690);

(statearr_27770_27825[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (16))){
var state_27723__$1 = state_27723;
var statearr_27771_27826 = state_27723__$1;
(statearr_27771_27826[(2)] = true);

(statearr_27771_27826[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (38))){
var inst_27713 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27772_27827 = state_27723__$1;
(statearr_27772_27827[(2)] = inst_27713);

(statearr_27772_27827[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (30))){
var inst_27683 = (state_27723[(9)]);
var inst_27677 = (state_27723[(13)]);
var inst_27676 = (state_27723[(10)]);
var inst_27700 = cljs.core.empty_QMARK_.call(null,inst_27676);
var inst_27701 = inst_27677.call(null,inst_27683);
var inst_27702 = cljs.core.not.call(null,inst_27701);
var inst_27703 = (inst_27700) && (inst_27702);
var state_27723__$1 = state_27723;
var statearr_27773_27828 = state_27723__$1;
(statearr_27773_27828[(2)] = inst_27703);

(statearr_27773_27828[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (10))){
var inst_27629 = (state_27723[(8)]);
var inst_27649 = (state_27723[(2)]);
var inst_27650 = cljs.core.get.call(null,inst_27649,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27651 = cljs.core.get.call(null,inst_27649,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27652 = cljs.core.get.call(null,inst_27649,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27653 = inst_27629;
var state_27723__$1 = (function (){var statearr_27774 = state_27723;
(statearr_27774[(16)] = inst_27651);

(statearr_27774[(17)] = inst_27652);

(statearr_27774[(7)] = inst_27653);

(statearr_27774[(18)] = inst_27650);

return statearr_27774;
})();
var statearr_27775_27829 = state_27723__$1;
(statearr_27775_27829[(2)] = null);

(statearr_27775_27829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (18))){
var inst_27667 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27776_27830 = state_27723__$1;
(statearr_27776_27830[(2)] = inst_27667);

(statearr_27776_27830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (37))){
var state_27723__$1 = state_27723;
var statearr_27777_27831 = state_27723__$1;
(statearr_27777_27831[(2)] = null);

(statearr_27777_27831[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (8))){
var inst_27629 = (state_27723[(8)]);
var inst_27646 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27629);
var state_27723__$1 = state_27723;
var statearr_27778_27832 = state_27723__$1;
(statearr_27778_27832[(2)] = inst_27646);

(statearr_27778_27832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___27786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20213__auto__,c__20278__auto___27786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20214__auto__ = null;
var cljs$core$async$mix_$_state_machine__20214__auto____0 = (function (){
var statearr_27782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27782[(0)] = cljs$core$async$mix_$_state_machine__20214__auto__);

(statearr_27782[(1)] = (1));

return statearr_27782;
});
var cljs$core$async$mix_$_state_machine__20214__auto____1 = (function (state_27723){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_27723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e27783){if((e27783 instanceof Object)){
var ex__20217__auto__ = e27783;
var statearr_27784_27833 = state_27723;
(statearr_27784_27833[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27834 = state_27723;
state_27723 = G__27834;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20214__auto__ = function(state_27723){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20214__auto____1.call(this,state_27723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20214__auto____0;
cljs$core$async$mix_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20214__auto____1;
return cljs$core$async$mix_$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___27786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20280__auto__ = (function (){var statearr_27785 = f__20279__auto__.call(null);
(statearr_27785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___27786);

return statearr_27785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___27786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16974__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27835 = [];
var len__17376__auto___27838 = arguments.length;
var i__17377__auto___27839 = (0);
while(true){
if((i__17377__auto___27839 < len__17376__auto___27838)){
args27835.push((arguments[i__17377__auto___27839]));

var G__27840 = (i__17377__auto___27839 + (1));
i__17377__auto___27839 = G__27840;
continue;
} else {
}
break;
}

var G__27837 = args27835.length;
switch (G__27837) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27835.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args27843 = [];
var len__17376__auto___27968 = arguments.length;
var i__17377__auto___27969 = (0);
while(true){
if((i__17377__auto___27969 < len__17376__auto___27968)){
args27843.push((arguments[i__17377__auto___27969]));

var G__27970 = (i__17377__auto___27969 + (1));
i__17377__auto___27969 = G__27970;
continue;
} else {
}
break;
}

var G__27845 = args27843.length;
switch (G__27845) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27843.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16318__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16318__auto__,mults){
return (function (p1__27842_SHARP_){
if(cljs.core.truth_(p1__27842_SHARP_.call(null,topic))){
return p1__27842_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27842_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16318__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27846 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27847){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27847 = meta27847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27848,meta27847__$1){
var self__ = this;
var _27848__$1 = this;
return (new cljs.core.async.t_cljs$core$async27846(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27847__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27848){
var self__ = this;
var _27848__$1 = this;
return self__.meta27847;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27846.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27847","meta27847",-1735684649,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27846";

cljs.core.async.t_cljs$core$async27846.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async27846");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27846 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27846(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27847){
return (new cljs.core.async.t_cljs$core$async27846(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27847));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27846(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20278__auto___27972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___27972,mults,ensure_mult,p){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___27972,mults,ensure_mult,p){
return (function (state_27920){
var state_val_27921 = (state_27920[(1)]);
if((state_val_27921 === (7))){
var inst_27916 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27922_27973 = state_27920__$1;
(statearr_27922_27973[(2)] = inst_27916);

(statearr_27922_27973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (20))){
var state_27920__$1 = state_27920;
var statearr_27923_27974 = state_27920__$1;
(statearr_27923_27974[(2)] = null);

(statearr_27923_27974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (1))){
var state_27920__$1 = state_27920;
var statearr_27924_27975 = state_27920__$1;
(statearr_27924_27975[(2)] = null);

(statearr_27924_27975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (24))){
var inst_27899 = (state_27920[(7)]);
var inst_27908 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27899);
var state_27920__$1 = state_27920;
var statearr_27925_27976 = state_27920__$1;
(statearr_27925_27976[(2)] = inst_27908);

(statearr_27925_27976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (4))){
var inst_27851 = (state_27920[(8)]);
var inst_27851__$1 = (state_27920[(2)]);
var inst_27852 = (inst_27851__$1 == null);
var state_27920__$1 = (function (){var statearr_27926 = state_27920;
(statearr_27926[(8)] = inst_27851__$1);

return statearr_27926;
})();
if(cljs.core.truth_(inst_27852)){
var statearr_27927_27977 = state_27920__$1;
(statearr_27927_27977[(1)] = (5));

} else {
var statearr_27928_27978 = state_27920__$1;
(statearr_27928_27978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (15))){
var inst_27893 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27929_27979 = state_27920__$1;
(statearr_27929_27979[(2)] = inst_27893);

(statearr_27929_27979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (21))){
var inst_27913 = (state_27920[(2)]);
var state_27920__$1 = (function (){var statearr_27930 = state_27920;
(statearr_27930[(9)] = inst_27913);

return statearr_27930;
})();
var statearr_27931_27980 = state_27920__$1;
(statearr_27931_27980[(2)] = null);

(statearr_27931_27980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (13))){
var inst_27875 = (state_27920[(10)]);
var inst_27877 = cljs.core.chunked_seq_QMARK_.call(null,inst_27875);
var state_27920__$1 = state_27920;
if(inst_27877){
var statearr_27932_27981 = state_27920__$1;
(statearr_27932_27981[(1)] = (16));

} else {
var statearr_27933_27982 = state_27920__$1;
(statearr_27933_27982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (22))){
var inst_27905 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
if(cljs.core.truth_(inst_27905)){
var statearr_27934_27983 = state_27920__$1;
(statearr_27934_27983[(1)] = (23));

} else {
var statearr_27935_27984 = state_27920__$1;
(statearr_27935_27984[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (6))){
var inst_27851 = (state_27920[(8)]);
var inst_27901 = (state_27920[(11)]);
var inst_27899 = (state_27920[(7)]);
var inst_27899__$1 = topic_fn.call(null,inst_27851);
var inst_27900 = cljs.core.deref.call(null,mults);
var inst_27901__$1 = cljs.core.get.call(null,inst_27900,inst_27899__$1);
var state_27920__$1 = (function (){var statearr_27936 = state_27920;
(statearr_27936[(11)] = inst_27901__$1);

(statearr_27936[(7)] = inst_27899__$1);

return statearr_27936;
})();
if(cljs.core.truth_(inst_27901__$1)){
var statearr_27937_27985 = state_27920__$1;
(statearr_27937_27985[(1)] = (19));

} else {
var statearr_27938_27986 = state_27920__$1;
(statearr_27938_27986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (25))){
var inst_27910 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27939_27987 = state_27920__$1;
(statearr_27939_27987[(2)] = inst_27910);

(statearr_27939_27987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (17))){
var inst_27875 = (state_27920[(10)]);
var inst_27884 = cljs.core.first.call(null,inst_27875);
var inst_27885 = cljs.core.async.muxch_STAR_.call(null,inst_27884);
var inst_27886 = cljs.core.async.close_BANG_.call(null,inst_27885);
var inst_27887 = cljs.core.next.call(null,inst_27875);
var inst_27861 = inst_27887;
var inst_27862 = null;
var inst_27863 = (0);
var inst_27864 = (0);
var state_27920__$1 = (function (){var statearr_27940 = state_27920;
(statearr_27940[(12)] = inst_27886);

(statearr_27940[(13)] = inst_27864);

(statearr_27940[(14)] = inst_27863);

(statearr_27940[(15)] = inst_27861);

(statearr_27940[(16)] = inst_27862);

return statearr_27940;
})();
var statearr_27941_27988 = state_27920__$1;
(statearr_27941_27988[(2)] = null);

(statearr_27941_27988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (3))){
var inst_27918 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27920__$1,inst_27918);
} else {
if((state_val_27921 === (12))){
var inst_27895 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27942_27989 = state_27920__$1;
(statearr_27942_27989[(2)] = inst_27895);

(statearr_27942_27989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (2))){
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27920__$1,(4),ch);
} else {
if((state_val_27921 === (23))){
var state_27920__$1 = state_27920;
var statearr_27943_27990 = state_27920__$1;
(statearr_27943_27990[(2)] = null);

(statearr_27943_27990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (19))){
var inst_27851 = (state_27920[(8)]);
var inst_27901 = (state_27920[(11)]);
var inst_27903 = cljs.core.async.muxch_STAR_.call(null,inst_27901);
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27920__$1,(22),inst_27903,inst_27851);
} else {
if((state_val_27921 === (11))){
var inst_27875 = (state_27920[(10)]);
var inst_27861 = (state_27920[(15)]);
var inst_27875__$1 = cljs.core.seq.call(null,inst_27861);
var state_27920__$1 = (function (){var statearr_27944 = state_27920;
(statearr_27944[(10)] = inst_27875__$1);

return statearr_27944;
})();
if(inst_27875__$1){
var statearr_27945_27991 = state_27920__$1;
(statearr_27945_27991[(1)] = (13));

} else {
var statearr_27946_27992 = state_27920__$1;
(statearr_27946_27992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (9))){
var inst_27897 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27947_27993 = state_27920__$1;
(statearr_27947_27993[(2)] = inst_27897);

(statearr_27947_27993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (5))){
var inst_27858 = cljs.core.deref.call(null,mults);
var inst_27859 = cljs.core.vals.call(null,inst_27858);
var inst_27860 = cljs.core.seq.call(null,inst_27859);
var inst_27861 = inst_27860;
var inst_27862 = null;
var inst_27863 = (0);
var inst_27864 = (0);
var state_27920__$1 = (function (){var statearr_27948 = state_27920;
(statearr_27948[(13)] = inst_27864);

(statearr_27948[(14)] = inst_27863);

(statearr_27948[(15)] = inst_27861);

(statearr_27948[(16)] = inst_27862);

return statearr_27948;
})();
var statearr_27949_27994 = state_27920__$1;
(statearr_27949_27994[(2)] = null);

(statearr_27949_27994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (14))){
var state_27920__$1 = state_27920;
var statearr_27953_27995 = state_27920__$1;
(statearr_27953_27995[(2)] = null);

(statearr_27953_27995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (16))){
var inst_27875 = (state_27920[(10)]);
var inst_27879 = cljs.core.chunk_first.call(null,inst_27875);
var inst_27880 = cljs.core.chunk_rest.call(null,inst_27875);
var inst_27881 = cljs.core.count.call(null,inst_27879);
var inst_27861 = inst_27880;
var inst_27862 = inst_27879;
var inst_27863 = inst_27881;
var inst_27864 = (0);
var state_27920__$1 = (function (){var statearr_27954 = state_27920;
(statearr_27954[(13)] = inst_27864);

(statearr_27954[(14)] = inst_27863);

(statearr_27954[(15)] = inst_27861);

(statearr_27954[(16)] = inst_27862);

return statearr_27954;
})();
var statearr_27955_27996 = state_27920__$1;
(statearr_27955_27996[(2)] = null);

(statearr_27955_27996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (10))){
var inst_27864 = (state_27920[(13)]);
var inst_27863 = (state_27920[(14)]);
var inst_27861 = (state_27920[(15)]);
var inst_27862 = (state_27920[(16)]);
var inst_27869 = cljs.core._nth.call(null,inst_27862,inst_27864);
var inst_27870 = cljs.core.async.muxch_STAR_.call(null,inst_27869);
var inst_27871 = cljs.core.async.close_BANG_.call(null,inst_27870);
var inst_27872 = (inst_27864 + (1));
var tmp27950 = inst_27863;
var tmp27951 = inst_27861;
var tmp27952 = inst_27862;
var inst_27861__$1 = tmp27951;
var inst_27862__$1 = tmp27952;
var inst_27863__$1 = tmp27950;
var inst_27864__$1 = inst_27872;
var state_27920__$1 = (function (){var statearr_27956 = state_27920;
(statearr_27956[(13)] = inst_27864__$1);

(statearr_27956[(14)] = inst_27863__$1);

(statearr_27956[(15)] = inst_27861__$1);

(statearr_27956[(17)] = inst_27871);

(statearr_27956[(16)] = inst_27862__$1);

return statearr_27956;
})();
var statearr_27957_27997 = state_27920__$1;
(statearr_27957_27997[(2)] = null);

(statearr_27957_27997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (18))){
var inst_27890 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27958_27998 = state_27920__$1;
(statearr_27958_27998[(2)] = inst_27890);

(statearr_27958_27998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (8))){
var inst_27864 = (state_27920[(13)]);
var inst_27863 = (state_27920[(14)]);
var inst_27866 = (inst_27864 < inst_27863);
var inst_27867 = inst_27866;
var state_27920__$1 = state_27920;
if(cljs.core.truth_(inst_27867)){
var statearr_27959_27999 = state_27920__$1;
(statearr_27959_27999[(1)] = (10));

} else {
var statearr_27960_28000 = state_27920__$1;
(statearr_27960_28000[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___27972,mults,ensure_mult,p))
;
return ((function (switch__20213__auto__,c__20278__auto___27972,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_27964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27964[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_27964[(1)] = (1));

return statearr_27964;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_27920){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_27920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e27965){if((e27965 instanceof Object)){
var ex__20217__auto__ = e27965;
var statearr_27966_28001 = state_27920;
(statearr_27966_28001[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28002 = state_27920;
state_27920 = G__28002;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_27920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_27920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___27972,mults,ensure_mult,p))
})();
var state__20280__auto__ = (function (){var statearr_27967 = f__20279__auto__.call(null);
(statearr_27967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___27972);

return statearr_27967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___27972,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28003 = [];
var len__17376__auto___28006 = arguments.length;
var i__17377__auto___28007 = (0);
while(true){
if((i__17377__auto___28007 < len__17376__auto___28006)){
args28003.push((arguments[i__17377__auto___28007]));

var G__28008 = (i__17377__auto___28007 + (1));
i__17377__auto___28007 = G__28008;
continue;
} else {
}
break;
}

var G__28005 = args28003.length;
switch (G__28005) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28003.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28010 = [];
var len__17376__auto___28013 = arguments.length;
var i__17377__auto___28014 = (0);
while(true){
if((i__17377__auto___28014 < len__17376__auto___28013)){
args28010.push((arguments[i__17377__auto___28014]));

var G__28015 = (i__17377__auto___28014 + (1));
i__17377__auto___28014 = G__28015;
continue;
} else {
}
break;
}

var G__28012 = args28010.length;
switch (G__28012) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28010.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28017 = [];
var len__17376__auto___28088 = arguments.length;
var i__17377__auto___28089 = (0);
while(true){
if((i__17377__auto___28089 < len__17376__auto___28088)){
args28017.push((arguments[i__17377__auto___28089]));

var G__28090 = (i__17377__auto___28089 + (1));
i__17377__auto___28089 = G__28090;
continue;
} else {
}
break;
}

var G__28019 = args28017.length;
switch (G__28019) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28017.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20278__auto___28092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___28092,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___28092,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28058){
var state_val_28059 = (state_28058[(1)]);
if((state_val_28059 === (7))){
var state_28058__$1 = state_28058;
var statearr_28060_28093 = state_28058__$1;
(statearr_28060_28093[(2)] = null);

(statearr_28060_28093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (1))){
var state_28058__$1 = state_28058;
var statearr_28061_28094 = state_28058__$1;
(statearr_28061_28094[(2)] = null);

(statearr_28061_28094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (4))){
var inst_28022 = (state_28058[(7)]);
var inst_28024 = (inst_28022 < cnt);
var state_28058__$1 = state_28058;
if(cljs.core.truth_(inst_28024)){
var statearr_28062_28095 = state_28058__$1;
(statearr_28062_28095[(1)] = (6));

} else {
var statearr_28063_28096 = state_28058__$1;
(statearr_28063_28096[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (15))){
var inst_28054 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
var statearr_28064_28097 = state_28058__$1;
(statearr_28064_28097[(2)] = inst_28054);

(statearr_28064_28097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (13))){
var inst_28047 = cljs.core.async.close_BANG_.call(null,out);
var state_28058__$1 = state_28058;
var statearr_28065_28098 = state_28058__$1;
(statearr_28065_28098[(2)] = inst_28047);

(statearr_28065_28098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (6))){
var state_28058__$1 = state_28058;
var statearr_28066_28099 = state_28058__$1;
(statearr_28066_28099[(2)] = null);

(statearr_28066_28099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (3))){
var inst_28056 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28058__$1,inst_28056);
} else {
if((state_val_28059 === (12))){
var inst_28044 = (state_28058[(8)]);
var inst_28044__$1 = (state_28058[(2)]);
var inst_28045 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28044__$1);
var state_28058__$1 = (function (){var statearr_28067 = state_28058;
(statearr_28067[(8)] = inst_28044__$1);

return statearr_28067;
})();
if(cljs.core.truth_(inst_28045)){
var statearr_28068_28100 = state_28058__$1;
(statearr_28068_28100[(1)] = (13));

} else {
var statearr_28069_28101 = state_28058__$1;
(statearr_28069_28101[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (2))){
var inst_28021 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28022 = (0);
var state_28058__$1 = (function (){var statearr_28070 = state_28058;
(statearr_28070[(7)] = inst_28022);

(statearr_28070[(9)] = inst_28021);

return statearr_28070;
})();
var statearr_28071_28102 = state_28058__$1;
(statearr_28071_28102[(2)] = null);

(statearr_28071_28102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (11))){
var inst_28022 = (state_28058[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28058,(10),Object,null,(9));
var inst_28031 = chs__$1.call(null,inst_28022);
var inst_28032 = done.call(null,inst_28022);
var inst_28033 = cljs.core.async.take_BANG_.call(null,inst_28031,inst_28032);
var state_28058__$1 = state_28058;
var statearr_28072_28103 = state_28058__$1;
(statearr_28072_28103[(2)] = inst_28033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (9))){
var inst_28022 = (state_28058[(7)]);
var inst_28035 = (state_28058[(2)]);
var inst_28036 = (inst_28022 + (1));
var inst_28022__$1 = inst_28036;
var state_28058__$1 = (function (){var statearr_28073 = state_28058;
(statearr_28073[(7)] = inst_28022__$1);

(statearr_28073[(10)] = inst_28035);

return statearr_28073;
})();
var statearr_28074_28104 = state_28058__$1;
(statearr_28074_28104[(2)] = null);

(statearr_28074_28104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (5))){
var inst_28042 = (state_28058[(2)]);
var state_28058__$1 = (function (){var statearr_28075 = state_28058;
(statearr_28075[(11)] = inst_28042);

return statearr_28075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28058__$1,(12),dchan);
} else {
if((state_val_28059 === (14))){
var inst_28044 = (state_28058[(8)]);
var inst_28049 = cljs.core.apply.call(null,f,inst_28044);
var state_28058__$1 = state_28058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28058__$1,(16),out,inst_28049);
} else {
if((state_val_28059 === (16))){
var inst_28051 = (state_28058[(2)]);
var state_28058__$1 = (function (){var statearr_28076 = state_28058;
(statearr_28076[(12)] = inst_28051);

return statearr_28076;
})();
var statearr_28077_28105 = state_28058__$1;
(statearr_28077_28105[(2)] = null);

(statearr_28077_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (10))){
var inst_28026 = (state_28058[(2)]);
var inst_28027 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28058__$1 = (function (){var statearr_28078 = state_28058;
(statearr_28078[(13)] = inst_28026);

return statearr_28078;
})();
var statearr_28079_28106 = state_28058__$1;
(statearr_28079_28106[(2)] = inst_28027);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (8))){
var inst_28040 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
var statearr_28080_28107 = state_28058__$1;
(statearr_28080_28107[(2)] = inst_28040);

(statearr_28080_28107[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___28092,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20213__auto__,c__20278__auto___28092,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_28084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28084[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_28084[(1)] = (1));

return statearr_28084;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_28058){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_28058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e28085){if((e28085 instanceof Object)){
var ex__20217__auto__ = e28085;
var statearr_28086_28108 = state_28058;
(statearr_28086_28108[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28109 = state_28058;
state_28058 = G__28109;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_28058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_28058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___28092,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20280__auto__ = (function (){var statearr_28087 = f__20279__auto__.call(null);
(statearr_28087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___28092);

return statearr_28087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___28092,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28111 = [];
var len__17376__auto___28167 = arguments.length;
var i__17377__auto___28168 = (0);
while(true){
if((i__17377__auto___28168 < len__17376__auto___28167)){
args28111.push((arguments[i__17377__auto___28168]));

var G__28169 = (i__17377__auto___28168 + (1));
i__17377__auto___28168 = G__28169;
continue;
} else {
}
break;
}

var G__28113 = args28111.length;
switch (G__28113) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28111.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20278__auto___28171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___28171,out){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___28171,out){
return (function (state_28143){
var state_val_28144 = (state_28143[(1)]);
if((state_val_28144 === (7))){
var inst_28123 = (state_28143[(7)]);
var inst_28122 = (state_28143[(8)]);
var inst_28122__$1 = (state_28143[(2)]);
var inst_28123__$1 = cljs.core.nth.call(null,inst_28122__$1,(0),null);
var inst_28124 = cljs.core.nth.call(null,inst_28122__$1,(1),null);
var inst_28125 = (inst_28123__$1 == null);
var state_28143__$1 = (function (){var statearr_28145 = state_28143;
(statearr_28145[(7)] = inst_28123__$1);

(statearr_28145[(9)] = inst_28124);

(statearr_28145[(8)] = inst_28122__$1);

return statearr_28145;
})();
if(cljs.core.truth_(inst_28125)){
var statearr_28146_28172 = state_28143__$1;
(statearr_28146_28172[(1)] = (8));

} else {
var statearr_28147_28173 = state_28143__$1;
(statearr_28147_28173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (1))){
var inst_28114 = cljs.core.vec.call(null,chs);
var inst_28115 = inst_28114;
var state_28143__$1 = (function (){var statearr_28148 = state_28143;
(statearr_28148[(10)] = inst_28115);

return statearr_28148;
})();
var statearr_28149_28174 = state_28143__$1;
(statearr_28149_28174[(2)] = null);

(statearr_28149_28174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (4))){
var inst_28115 = (state_28143[(10)]);
var state_28143__$1 = state_28143;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28143__$1,(7),inst_28115);
} else {
if((state_val_28144 === (6))){
var inst_28139 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28150_28175 = state_28143__$1;
(statearr_28150_28175[(2)] = inst_28139);

(statearr_28150_28175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (3))){
var inst_28141 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28143__$1,inst_28141);
} else {
if((state_val_28144 === (2))){
var inst_28115 = (state_28143[(10)]);
var inst_28117 = cljs.core.count.call(null,inst_28115);
var inst_28118 = (inst_28117 > (0));
var state_28143__$1 = state_28143;
if(cljs.core.truth_(inst_28118)){
var statearr_28152_28176 = state_28143__$1;
(statearr_28152_28176[(1)] = (4));

} else {
var statearr_28153_28177 = state_28143__$1;
(statearr_28153_28177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (11))){
var inst_28115 = (state_28143[(10)]);
var inst_28132 = (state_28143[(2)]);
var tmp28151 = inst_28115;
var inst_28115__$1 = tmp28151;
var state_28143__$1 = (function (){var statearr_28154 = state_28143;
(statearr_28154[(11)] = inst_28132);

(statearr_28154[(10)] = inst_28115__$1);

return statearr_28154;
})();
var statearr_28155_28178 = state_28143__$1;
(statearr_28155_28178[(2)] = null);

(statearr_28155_28178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (9))){
var inst_28123 = (state_28143[(7)]);
var state_28143__$1 = state_28143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28143__$1,(11),out,inst_28123);
} else {
if((state_val_28144 === (5))){
var inst_28137 = cljs.core.async.close_BANG_.call(null,out);
var state_28143__$1 = state_28143;
var statearr_28156_28179 = state_28143__$1;
(statearr_28156_28179[(2)] = inst_28137);

(statearr_28156_28179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (10))){
var inst_28135 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28157_28180 = state_28143__$1;
(statearr_28157_28180[(2)] = inst_28135);

(statearr_28157_28180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (8))){
var inst_28123 = (state_28143[(7)]);
var inst_28124 = (state_28143[(9)]);
var inst_28115 = (state_28143[(10)]);
var inst_28122 = (state_28143[(8)]);
var inst_28127 = (function (){var cs = inst_28115;
var vec__28120 = inst_28122;
var v = inst_28123;
var c = inst_28124;
return ((function (cs,vec__28120,v,c,inst_28123,inst_28124,inst_28115,inst_28122,state_val_28144,c__20278__auto___28171,out){
return (function (p1__28110_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28110_SHARP_);
});
;})(cs,vec__28120,v,c,inst_28123,inst_28124,inst_28115,inst_28122,state_val_28144,c__20278__auto___28171,out))
})();
var inst_28128 = cljs.core.filterv.call(null,inst_28127,inst_28115);
var inst_28115__$1 = inst_28128;
var state_28143__$1 = (function (){var statearr_28158 = state_28143;
(statearr_28158[(10)] = inst_28115__$1);

return statearr_28158;
})();
var statearr_28159_28181 = state_28143__$1;
(statearr_28159_28181[(2)] = null);

(statearr_28159_28181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___28171,out))
;
return ((function (switch__20213__auto__,c__20278__auto___28171,out){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_28163 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28163[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_28163[(1)] = (1));

return statearr_28163;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_28143){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_28143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e28164){if((e28164 instanceof Object)){
var ex__20217__auto__ = e28164;
var statearr_28165_28182 = state_28143;
(statearr_28165_28182[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28183 = state_28143;
state_28143 = G__28183;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_28143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_28143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___28171,out))
})();
var state__20280__auto__ = (function (){var statearr_28166 = f__20279__auto__.call(null);
(statearr_28166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___28171);

return statearr_28166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___28171,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28184 = [];
var len__17376__auto___28233 = arguments.length;
var i__17377__auto___28234 = (0);
while(true){
if((i__17377__auto___28234 < len__17376__auto___28233)){
args28184.push((arguments[i__17377__auto___28234]));

var G__28235 = (i__17377__auto___28234 + (1));
i__17377__auto___28234 = G__28235;
continue;
} else {
}
break;
}

var G__28186 = args28184.length;
switch (G__28186) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28184.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20278__auto___28237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___28237,out){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___28237,out){
return (function (state_28210){
var state_val_28211 = (state_28210[(1)]);
if((state_val_28211 === (7))){
var inst_28192 = (state_28210[(7)]);
var inst_28192__$1 = (state_28210[(2)]);
var inst_28193 = (inst_28192__$1 == null);
var inst_28194 = cljs.core.not.call(null,inst_28193);
var state_28210__$1 = (function (){var statearr_28212 = state_28210;
(statearr_28212[(7)] = inst_28192__$1);

return statearr_28212;
})();
if(inst_28194){
var statearr_28213_28238 = state_28210__$1;
(statearr_28213_28238[(1)] = (8));

} else {
var statearr_28214_28239 = state_28210__$1;
(statearr_28214_28239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (1))){
var inst_28187 = (0);
var state_28210__$1 = (function (){var statearr_28215 = state_28210;
(statearr_28215[(8)] = inst_28187);

return statearr_28215;
})();
var statearr_28216_28240 = state_28210__$1;
(statearr_28216_28240[(2)] = null);

(statearr_28216_28240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (4))){
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28210__$1,(7),ch);
} else {
if((state_val_28211 === (6))){
var inst_28205 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
var statearr_28217_28241 = state_28210__$1;
(statearr_28217_28241[(2)] = inst_28205);

(statearr_28217_28241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (3))){
var inst_28207 = (state_28210[(2)]);
var inst_28208 = cljs.core.async.close_BANG_.call(null,out);
var state_28210__$1 = (function (){var statearr_28218 = state_28210;
(statearr_28218[(9)] = inst_28207);

return statearr_28218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28210__$1,inst_28208);
} else {
if((state_val_28211 === (2))){
var inst_28187 = (state_28210[(8)]);
var inst_28189 = (inst_28187 < n);
var state_28210__$1 = state_28210;
if(cljs.core.truth_(inst_28189)){
var statearr_28219_28242 = state_28210__$1;
(statearr_28219_28242[(1)] = (4));

} else {
var statearr_28220_28243 = state_28210__$1;
(statearr_28220_28243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (11))){
var inst_28187 = (state_28210[(8)]);
var inst_28197 = (state_28210[(2)]);
var inst_28198 = (inst_28187 + (1));
var inst_28187__$1 = inst_28198;
var state_28210__$1 = (function (){var statearr_28221 = state_28210;
(statearr_28221[(10)] = inst_28197);

(statearr_28221[(8)] = inst_28187__$1);

return statearr_28221;
})();
var statearr_28222_28244 = state_28210__$1;
(statearr_28222_28244[(2)] = null);

(statearr_28222_28244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (9))){
var state_28210__$1 = state_28210;
var statearr_28223_28245 = state_28210__$1;
(statearr_28223_28245[(2)] = null);

(statearr_28223_28245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (5))){
var state_28210__$1 = state_28210;
var statearr_28224_28246 = state_28210__$1;
(statearr_28224_28246[(2)] = null);

(statearr_28224_28246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (10))){
var inst_28202 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
var statearr_28225_28247 = state_28210__$1;
(statearr_28225_28247[(2)] = inst_28202);

(statearr_28225_28247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (8))){
var inst_28192 = (state_28210[(7)]);
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28210__$1,(11),out,inst_28192);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___28237,out))
;
return ((function (switch__20213__auto__,c__20278__auto___28237,out){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_28229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28229[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_28229[(1)] = (1));

return statearr_28229;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_28210){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_28210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e28230){if((e28230 instanceof Object)){
var ex__20217__auto__ = e28230;
var statearr_28231_28248 = state_28210;
(statearr_28231_28248[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28249 = state_28210;
state_28210 = G__28249;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_28210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_28210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___28237,out))
})();
var state__20280__auto__ = (function (){var statearr_28232 = f__20279__auto__.call(null);
(statearr_28232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___28237);

return statearr_28232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___28237,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28257 = (function (map_LT_,f,ch,meta28258){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28258 = meta28258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28259,meta28258__$1){
var self__ = this;
var _28259__$1 = this;
return (new cljs.core.async.t_cljs$core$async28257(self__.map_LT_,self__.f,self__.ch,meta28258__$1));
});

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28259){
var self__ = this;
var _28259__$1 = this;
return self__.meta28258;
});

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28260 = (function (map_LT_,f,ch,meta28258,_,fn1,meta28261){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28258 = meta28258;
this._ = _;
this.fn1 = fn1;
this.meta28261 = meta28261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28262,meta28261__$1){
var self__ = this;
var _28262__$1 = this;
return (new cljs.core.async.t_cljs$core$async28260(self__.map_LT_,self__.f,self__.ch,self__.meta28258,self__._,self__.fn1,meta28261__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28262){
var self__ = this;
var _28262__$1 = this;
return self__.meta28261;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28250_SHARP_){
return f1.call(null,(((p1__28250_SHARP_ == null))?null:self__.f.call(null,p1__28250_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28260.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28258","meta28258",-946712525,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28257","cljs.core.async/t_cljs$core$async28257",-2045309095,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28261","meta28261",1157764972,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28260";

cljs.core.async.t_cljs$core$async28260.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async28260");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28260 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28260(map_LT___$1,f__$1,ch__$1,meta28258__$1,___$2,fn1__$1,meta28261){
return (new cljs.core.async.t_cljs$core$async28260(map_LT___$1,f__$1,ch__$1,meta28258__$1,___$2,fn1__$1,meta28261));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28260(self__.map_LT_,self__.f,self__.ch,self__.meta28258,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16306__auto__ = ret;
if(cljs.core.truth_(and__16306__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16306__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28258","meta28258",-946712525,null)], null);
});

cljs.core.async.t_cljs$core$async28257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28257";

cljs.core.async.t_cljs$core$async28257.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async28257");
});

cljs.core.async.__GT_t_cljs$core$async28257 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28257(map_LT___$1,f__$1,ch__$1,meta28258){
return (new cljs.core.async.t_cljs$core$async28257(map_LT___$1,f__$1,ch__$1,meta28258));
});

}

return (new cljs.core.async.t_cljs$core$async28257(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28266 = (function (map_GT_,f,ch,meta28267){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28267 = meta28267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28268,meta28267__$1){
var self__ = this;
var _28268__$1 = this;
return (new cljs.core.async.t_cljs$core$async28266(self__.map_GT_,self__.f,self__.ch,meta28267__$1));
});

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28268){
var self__ = this;
var _28268__$1 = this;
return self__.meta28267;
});

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28267","meta28267",1412715371,null)], null);
});

cljs.core.async.t_cljs$core$async28266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28266";

cljs.core.async.t_cljs$core$async28266.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async28266");
});

cljs.core.async.__GT_t_cljs$core$async28266 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28266(map_GT___$1,f__$1,ch__$1,meta28267){
return (new cljs.core.async.t_cljs$core$async28266(map_GT___$1,f__$1,ch__$1,meta28267));
});

}

return (new cljs.core.async.t_cljs$core$async28266(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28272 = (function (filter_GT_,p,ch,meta28273){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28273 = meta28273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28274,meta28273__$1){
var self__ = this;
var _28274__$1 = this;
return (new cljs.core.async.t_cljs$core$async28272(self__.filter_GT_,self__.p,self__.ch,meta28273__$1));
});

cljs.core.async.t_cljs$core$async28272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28274){
var self__ = this;
var _28274__$1 = this;
return self__.meta28273;
});

cljs.core.async.t_cljs$core$async28272.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28272.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28272.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28272.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28273","meta28273",-865773909,null)], null);
});

cljs.core.async.t_cljs$core$async28272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28272";

cljs.core.async.t_cljs$core$async28272.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async28272");
});

cljs.core.async.__GT_t_cljs$core$async28272 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28272(filter_GT___$1,p__$1,ch__$1,meta28273){
return (new cljs.core.async.t_cljs$core$async28272(filter_GT___$1,p__$1,ch__$1,meta28273));
});

}

return (new cljs.core.async.t_cljs$core$async28272(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28275 = [];
var len__17376__auto___28319 = arguments.length;
var i__17377__auto___28320 = (0);
while(true){
if((i__17377__auto___28320 < len__17376__auto___28319)){
args28275.push((arguments[i__17377__auto___28320]));

var G__28321 = (i__17377__auto___28320 + (1));
i__17377__auto___28320 = G__28321;
continue;
} else {
}
break;
}

var G__28277 = args28275.length;
switch (G__28277) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28275.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20278__auto___28323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___28323,out){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___28323,out){
return (function (state_28298){
var state_val_28299 = (state_28298[(1)]);
if((state_val_28299 === (7))){
var inst_28294 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28300_28324 = state_28298__$1;
(statearr_28300_28324[(2)] = inst_28294);

(statearr_28300_28324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (1))){
var state_28298__$1 = state_28298;
var statearr_28301_28325 = state_28298__$1;
(statearr_28301_28325[(2)] = null);

(statearr_28301_28325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (4))){
var inst_28280 = (state_28298[(7)]);
var inst_28280__$1 = (state_28298[(2)]);
var inst_28281 = (inst_28280__$1 == null);
var state_28298__$1 = (function (){var statearr_28302 = state_28298;
(statearr_28302[(7)] = inst_28280__$1);

return statearr_28302;
})();
if(cljs.core.truth_(inst_28281)){
var statearr_28303_28326 = state_28298__$1;
(statearr_28303_28326[(1)] = (5));

} else {
var statearr_28304_28327 = state_28298__$1;
(statearr_28304_28327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (6))){
var inst_28280 = (state_28298[(7)]);
var inst_28285 = p.call(null,inst_28280);
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28285)){
var statearr_28305_28328 = state_28298__$1;
(statearr_28305_28328[(1)] = (8));

} else {
var statearr_28306_28329 = state_28298__$1;
(statearr_28306_28329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (3))){
var inst_28296 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28298__$1,inst_28296);
} else {
if((state_val_28299 === (2))){
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28298__$1,(4),ch);
} else {
if((state_val_28299 === (11))){
var inst_28288 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28307_28330 = state_28298__$1;
(statearr_28307_28330[(2)] = inst_28288);

(statearr_28307_28330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (9))){
var state_28298__$1 = state_28298;
var statearr_28308_28331 = state_28298__$1;
(statearr_28308_28331[(2)] = null);

(statearr_28308_28331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (5))){
var inst_28283 = cljs.core.async.close_BANG_.call(null,out);
var state_28298__$1 = state_28298;
var statearr_28309_28332 = state_28298__$1;
(statearr_28309_28332[(2)] = inst_28283);

(statearr_28309_28332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (10))){
var inst_28291 = (state_28298[(2)]);
var state_28298__$1 = (function (){var statearr_28310 = state_28298;
(statearr_28310[(8)] = inst_28291);

return statearr_28310;
})();
var statearr_28311_28333 = state_28298__$1;
(statearr_28311_28333[(2)] = null);

(statearr_28311_28333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (8))){
var inst_28280 = (state_28298[(7)]);
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28298__$1,(11),out,inst_28280);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___28323,out))
;
return ((function (switch__20213__auto__,c__20278__auto___28323,out){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_28315 = [null,null,null,null,null,null,null,null,null];
(statearr_28315[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_28315[(1)] = (1));

return statearr_28315;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_28298){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_28298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e28316){if((e28316 instanceof Object)){
var ex__20217__auto__ = e28316;
var statearr_28317_28334 = state_28298;
(statearr_28317_28334[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28335 = state_28298;
state_28298 = G__28335;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_28298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_28298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___28323,out))
})();
var state__20280__auto__ = (function (){var statearr_28318 = f__20279__auto__.call(null);
(statearr_28318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___28323);

return statearr_28318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___28323,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28336 = [];
var len__17376__auto___28339 = arguments.length;
var i__17377__auto___28340 = (0);
while(true){
if((i__17377__auto___28340 < len__17376__auto___28339)){
args28336.push((arguments[i__17377__auto___28340]));

var G__28341 = (i__17377__auto___28340 + (1));
i__17377__auto___28340 = G__28341;
continue;
} else {
}
break;
}

var G__28338 = args28336.length;
switch (G__28338) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28336.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto__){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto__){
return (function (state_28508){
var state_val_28509 = (state_28508[(1)]);
if((state_val_28509 === (7))){
var inst_28504 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28510_28551 = state_28508__$1;
(statearr_28510_28551[(2)] = inst_28504);

(statearr_28510_28551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (20))){
var inst_28474 = (state_28508[(7)]);
var inst_28485 = (state_28508[(2)]);
var inst_28486 = cljs.core.next.call(null,inst_28474);
var inst_28460 = inst_28486;
var inst_28461 = null;
var inst_28462 = (0);
var inst_28463 = (0);
var state_28508__$1 = (function (){var statearr_28511 = state_28508;
(statearr_28511[(8)] = inst_28460);

(statearr_28511[(9)] = inst_28463);

(statearr_28511[(10)] = inst_28485);

(statearr_28511[(11)] = inst_28462);

(statearr_28511[(12)] = inst_28461);

return statearr_28511;
})();
var statearr_28512_28552 = state_28508__$1;
(statearr_28512_28552[(2)] = null);

(statearr_28512_28552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (1))){
var state_28508__$1 = state_28508;
var statearr_28513_28553 = state_28508__$1;
(statearr_28513_28553[(2)] = null);

(statearr_28513_28553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (4))){
var inst_28449 = (state_28508[(13)]);
var inst_28449__$1 = (state_28508[(2)]);
var inst_28450 = (inst_28449__$1 == null);
var state_28508__$1 = (function (){var statearr_28514 = state_28508;
(statearr_28514[(13)] = inst_28449__$1);

return statearr_28514;
})();
if(cljs.core.truth_(inst_28450)){
var statearr_28515_28554 = state_28508__$1;
(statearr_28515_28554[(1)] = (5));

} else {
var statearr_28516_28555 = state_28508__$1;
(statearr_28516_28555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (15))){
var state_28508__$1 = state_28508;
var statearr_28520_28556 = state_28508__$1;
(statearr_28520_28556[(2)] = null);

(statearr_28520_28556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (21))){
var state_28508__$1 = state_28508;
var statearr_28521_28557 = state_28508__$1;
(statearr_28521_28557[(2)] = null);

(statearr_28521_28557[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (13))){
var inst_28460 = (state_28508[(8)]);
var inst_28463 = (state_28508[(9)]);
var inst_28462 = (state_28508[(11)]);
var inst_28461 = (state_28508[(12)]);
var inst_28470 = (state_28508[(2)]);
var inst_28471 = (inst_28463 + (1));
var tmp28517 = inst_28460;
var tmp28518 = inst_28462;
var tmp28519 = inst_28461;
var inst_28460__$1 = tmp28517;
var inst_28461__$1 = tmp28519;
var inst_28462__$1 = tmp28518;
var inst_28463__$1 = inst_28471;
var state_28508__$1 = (function (){var statearr_28522 = state_28508;
(statearr_28522[(8)] = inst_28460__$1);

(statearr_28522[(9)] = inst_28463__$1);

(statearr_28522[(11)] = inst_28462__$1);

(statearr_28522[(14)] = inst_28470);

(statearr_28522[(12)] = inst_28461__$1);

return statearr_28522;
})();
var statearr_28523_28558 = state_28508__$1;
(statearr_28523_28558[(2)] = null);

(statearr_28523_28558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (22))){
var state_28508__$1 = state_28508;
var statearr_28524_28559 = state_28508__$1;
(statearr_28524_28559[(2)] = null);

(statearr_28524_28559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (6))){
var inst_28449 = (state_28508[(13)]);
var inst_28458 = f.call(null,inst_28449);
var inst_28459 = cljs.core.seq.call(null,inst_28458);
var inst_28460 = inst_28459;
var inst_28461 = null;
var inst_28462 = (0);
var inst_28463 = (0);
var state_28508__$1 = (function (){var statearr_28525 = state_28508;
(statearr_28525[(8)] = inst_28460);

(statearr_28525[(9)] = inst_28463);

(statearr_28525[(11)] = inst_28462);

(statearr_28525[(12)] = inst_28461);

return statearr_28525;
})();
var statearr_28526_28560 = state_28508__$1;
(statearr_28526_28560[(2)] = null);

(statearr_28526_28560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (17))){
var inst_28474 = (state_28508[(7)]);
var inst_28478 = cljs.core.chunk_first.call(null,inst_28474);
var inst_28479 = cljs.core.chunk_rest.call(null,inst_28474);
var inst_28480 = cljs.core.count.call(null,inst_28478);
var inst_28460 = inst_28479;
var inst_28461 = inst_28478;
var inst_28462 = inst_28480;
var inst_28463 = (0);
var state_28508__$1 = (function (){var statearr_28527 = state_28508;
(statearr_28527[(8)] = inst_28460);

(statearr_28527[(9)] = inst_28463);

(statearr_28527[(11)] = inst_28462);

(statearr_28527[(12)] = inst_28461);

return statearr_28527;
})();
var statearr_28528_28561 = state_28508__$1;
(statearr_28528_28561[(2)] = null);

(statearr_28528_28561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (3))){
var inst_28506 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28508__$1,inst_28506);
} else {
if((state_val_28509 === (12))){
var inst_28494 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28529_28562 = state_28508__$1;
(statearr_28529_28562[(2)] = inst_28494);

(statearr_28529_28562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (2))){
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28508__$1,(4),in$);
} else {
if((state_val_28509 === (23))){
var inst_28502 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28530_28563 = state_28508__$1;
(statearr_28530_28563[(2)] = inst_28502);

(statearr_28530_28563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (19))){
var inst_28489 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28531_28564 = state_28508__$1;
(statearr_28531_28564[(2)] = inst_28489);

(statearr_28531_28564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (11))){
var inst_28460 = (state_28508[(8)]);
var inst_28474 = (state_28508[(7)]);
var inst_28474__$1 = cljs.core.seq.call(null,inst_28460);
var state_28508__$1 = (function (){var statearr_28532 = state_28508;
(statearr_28532[(7)] = inst_28474__$1);

return statearr_28532;
})();
if(inst_28474__$1){
var statearr_28533_28565 = state_28508__$1;
(statearr_28533_28565[(1)] = (14));

} else {
var statearr_28534_28566 = state_28508__$1;
(statearr_28534_28566[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (9))){
var inst_28496 = (state_28508[(2)]);
var inst_28497 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28508__$1 = (function (){var statearr_28535 = state_28508;
(statearr_28535[(15)] = inst_28496);

return statearr_28535;
})();
if(cljs.core.truth_(inst_28497)){
var statearr_28536_28567 = state_28508__$1;
(statearr_28536_28567[(1)] = (21));

} else {
var statearr_28537_28568 = state_28508__$1;
(statearr_28537_28568[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (5))){
var inst_28452 = cljs.core.async.close_BANG_.call(null,out);
var state_28508__$1 = state_28508;
var statearr_28538_28569 = state_28508__$1;
(statearr_28538_28569[(2)] = inst_28452);

(statearr_28538_28569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (14))){
var inst_28474 = (state_28508[(7)]);
var inst_28476 = cljs.core.chunked_seq_QMARK_.call(null,inst_28474);
var state_28508__$1 = state_28508;
if(inst_28476){
var statearr_28539_28570 = state_28508__$1;
(statearr_28539_28570[(1)] = (17));

} else {
var statearr_28540_28571 = state_28508__$1;
(statearr_28540_28571[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (16))){
var inst_28492 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28541_28572 = state_28508__$1;
(statearr_28541_28572[(2)] = inst_28492);

(statearr_28541_28572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (10))){
var inst_28463 = (state_28508[(9)]);
var inst_28461 = (state_28508[(12)]);
var inst_28468 = cljs.core._nth.call(null,inst_28461,inst_28463);
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28508__$1,(13),out,inst_28468);
} else {
if((state_val_28509 === (18))){
var inst_28474 = (state_28508[(7)]);
var inst_28483 = cljs.core.first.call(null,inst_28474);
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28508__$1,(20),out,inst_28483);
} else {
if((state_val_28509 === (8))){
var inst_28463 = (state_28508[(9)]);
var inst_28462 = (state_28508[(11)]);
var inst_28465 = (inst_28463 < inst_28462);
var inst_28466 = inst_28465;
var state_28508__$1 = state_28508;
if(cljs.core.truth_(inst_28466)){
var statearr_28542_28573 = state_28508__$1;
(statearr_28542_28573[(1)] = (10));

} else {
var statearr_28543_28574 = state_28508__$1;
(statearr_28543_28574[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto__))
;
return ((function (switch__20213__auto__,c__20278__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20214__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20214__auto____0 = (function (){
var statearr_28547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28547[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20214__auto__);

(statearr_28547[(1)] = (1));

return statearr_28547;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20214__auto____1 = (function (state_28508){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_28508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e28548){if((e28548 instanceof Object)){
var ex__20217__auto__ = e28548;
var statearr_28549_28575 = state_28508;
(statearr_28549_28575[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28576 = state_28508;
state_28508 = G__28576;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20214__auto__ = function(state_28508){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20214__auto____1.call(this,state_28508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20214__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20214__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto__))
})();
var state__20280__auto__ = (function (){var statearr_28550 = f__20279__auto__.call(null);
(statearr_28550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto__);

return statearr_28550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto__))
);

return c__20278__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28577 = [];
var len__17376__auto___28580 = arguments.length;
var i__17377__auto___28581 = (0);
while(true){
if((i__17377__auto___28581 < len__17376__auto___28580)){
args28577.push((arguments[i__17377__auto___28581]));

var G__28582 = (i__17377__auto___28581 + (1));
i__17377__auto___28581 = G__28582;
continue;
} else {
}
break;
}

var G__28579 = args28577.length;
switch (G__28579) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28577.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28584 = [];
var len__17376__auto___28587 = arguments.length;
var i__17377__auto___28588 = (0);
while(true){
if((i__17377__auto___28588 < len__17376__auto___28587)){
args28584.push((arguments[i__17377__auto___28588]));

var G__28589 = (i__17377__auto___28588 + (1));
i__17377__auto___28588 = G__28589;
continue;
} else {
}
break;
}

var G__28586 = args28584.length;
switch (G__28586) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28584.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28591 = [];
var len__17376__auto___28642 = arguments.length;
var i__17377__auto___28643 = (0);
while(true){
if((i__17377__auto___28643 < len__17376__auto___28642)){
args28591.push((arguments[i__17377__auto___28643]));

var G__28644 = (i__17377__auto___28643 + (1));
i__17377__auto___28643 = G__28644;
continue;
} else {
}
break;
}

var G__28593 = args28591.length;
switch (G__28593) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28591.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20278__auto___28646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___28646,out){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___28646,out){
return (function (state_28617){
var state_val_28618 = (state_28617[(1)]);
if((state_val_28618 === (7))){
var inst_28612 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
var statearr_28619_28647 = state_28617__$1;
(statearr_28619_28647[(2)] = inst_28612);

(statearr_28619_28647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (1))){
var inst_28594 = null;
var state_28617__$1 = (function (){var statearr_28620 = state_28617;
(statearr_28620[(7)] = inst_28594);

return statearr_28620;
})();
var statearr_28621_28648 = state_28617__$1;
(statearr_28621_28648[(2)] = null);

(statearr_28621_28648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (4))){
var inst_28597 = (state_28617[(8)]);
var inst_28597__$1 = (state_28617[(2)]);
var inst_28598 = (inst_28597__$1 == null);
var inst_28599 = cljs.core.not.call(null,inst_28598);
var state_28617__$1 = (function (){var statearr_28622 = state_28617;
(statearr_28622[(8)] = inst_28597__$1);

return statearr_28622;
})();
if(inst_28599){
var statearr_28623_28649 = state_28617__$1;
(statearr_28623_28649[(1)] = (5));

} else {
var statearr_28624_28650 = state_28617__$1;
(statearr_28624_28650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (6))){
var state_28617__$1 = state_28617;
var statearr_28625_28651 = state_28617__$1;
(statearr_28625_28651[(2)] = null);

(statearr_28625_28651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (3))){
var inst_28614 = (state_28617[(2)]);
var inst_28615 = cljs.core.async.close_BANG_.call(null,out);
var state_28617__$1 = (function (){var statearr_28626 = state_28617;
(statearr_28626[(9)] = inst_28614);

return statearr_28626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28617__$1,inst_28615);
} else {
if((state_val_28618 === (2))){
var state_28617__$1 = state_28617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28617__$1,(4),ch);
} else {
if((state_val_28618 === (11))){
var inst_28597 = (state_28617[(8)]);
var inst_28606 = (state_28617[(2)]);
var inst_28594 = inst_28597;
var state_28617__$1 = (function (){var statearr_28627 = state_28617;
(statearr_28627[(10)] = inst_28606);

(statearr_28627[(7)] = inst_28594);

return statearr_28627;
})();
var statearr_28628_28652 = state_28617__$1;
(statearr_28628_28652[(2)] = null);

(statearr_28628_28652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (9))){
var inst_28597 = (state_28617[(8)]);
var state_28617__$1 = state_28617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28617__$1,(11),out,inst_28597);
} else {
if((state_val_28618 === (5))){
var inst_28597 = (state_28617[(8)]);
var inst_28594 = (state_28617[(7)]);
var inst_28601 = cljs.core._EQ_.call(null,inst_28597,inst_28594);
var state_28617__$1 = state_28617;
if(inst_28601){
var statearr_28630_28653 = state_28617__$1;
(statearr_28630_28653[(1)] = (8));

} else {
var statearr_28631_28654 = state_28617__$1;
(statearr_28631_28654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (10))){
var inst_28609 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
var statearr_28632_28655 = state_28617__$1;
(statearr_28632_28655[(2)] = inst_28609);

(statearr_28632_28655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (8))){
var inst_28594 = (state_28617[(7)]);
var tmp28629 = inst_28594;
var inst_28594__$1 = tmp28629;
var state_28617__$1 = (function (){var statearr_28633 = state_28617;
(statearr_28633[(7)] = inst_28594__$1);

return statearr_28633;
})();
var statearr_28634_28656 = state_28617__$1;
(statearr_28634_28656[(2)] = null);

(statearr_28634_28656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___28646,out))
;
return ((function (switch__20213__auto__,c__20278__auto___28646,out){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_28638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28638[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_28638[(1)] = (1));

return statearr_28638;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_28617){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_28617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e28639){if((e28639 instanceof Object)){
var ex__20217__auto__ = e28639;
var statearr_28640_28657 = state_28617;
(statearr_28640_28657[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28658 = state_28617;
state_28617 = G__28658;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_28617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_28617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___28646,out))
})();
var state__20280__auto__ = (function (){var statearr_28641 = f__20279__auto__.call(null);
(statearr_28641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___28646);

return statearr_28641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___28646,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28659 = [];
var len__17376__auto___28729 = arguments.length;
var i__17377__auto___28730 = (0);
while(true){
if((i__17377__auto___28730 < len__17376__auto___28729)){
args28659.push((arguments[i__17377__auto___28730]));

var G__28731 = (i__17377__auto___28730 + (1));
i__17377__auto___28730 = G__28731;
continue;
} else {
}
break;
}

var G__28661 = args28659.length;
switch (G__28661) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28659.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20278__auto___28733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___28733,out){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___28733,out){
return (function (state_28699){
var state_val_28700 = (state_28699[(1)]);
if((state_val_28700 === (7))){
var inst_28695 = (state_28699[(2)]);
var state_28699__$1 = state_28699;
var statearr_28701_28734 = state_28699__$1;
(statearr_28701_28734[(2)] = inst_28695);

(statearr_28701_28734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (1))){
var inst_28662 = (new Array(n));
var inst_28663 = inst_28662;
var inst_28664 = (0);
var state_28699__$1 = (function (){var statearr_28702 = state_28699;
(statearr_28702[(7)] = inst_28664);

(statearr_28702[(8)] = inst_28663);

return statearr_28702;
})();
var statearr_28703_28735 = state_28699__$1;
(statearr_28703_28735[(2)] = null);

(statearr_28703_28735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (4))){
var inst_28667 = (state_28699[(9)]);
var inst_28667__$1 = (state_28699[(2)]);
var inst_28668 = (inst_28667__$1 == null);
var inst_28669 = cljs.core.not.call(null,inst_28668);
var state_28699__$1 = (function (){var statearr_28704 = state_28699;
(statearr_28704[(9)] = inst_28667__$1);

return statearr_28704;
})();
if(inst_28669){
var statearr_28705_28736 = state_28699__$1;
(statearr_28705_28736[(1)] = (5));

} else {
var statearr_28706_28737 = state_28699__$1;
(statearr_28706_28737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (15))){
var inst_28689 = (state_28699[(2)]);
var state_28699__$1 = state_28699;
var statearr_28707_28738 = state_28699__$1;
(statearr_28707_28738[(2)] = inst_28689);

(statearr_28707_28738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (13))){
var state_28699__$1 = state_28699;
var statearr_28708_28739 = state_28699__$1;
(statearr_28708_28739[(2)] = null);

(statearr_28708_28739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (6))){
var inst_28664 = (state_28699[(7)]);
var inst_28685 = (inst_28664 > (0));
var state_28699__$1 = state_28699;
if(cljs.core.truth_(inst_28685)){
var statearr_28709_28740 = state_28699__$1;
(statearr_28709_28740[(1)] = (12));

} else {
var statearr_28710_28741 = state_28699__$1;
(statearr_28710_28741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (3))){
var inst_28697 = (state_28699[(2)]);
var state_28699__$1 = state_28699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28699__$1,inst_28697);
} else {
if((state_val_28700 === (12))){
var inst_28663 = (state_28699[(8)]);
var inst_28687 = cljs.core.vec.call(null,inst_28663);
var state_28699__$1 = state_28699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28699__$1,(15),out,inst_28687);
} else {
if((state_val_28700 === (2))){
var state_28699__$1 = state_28699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28699__$1,(4),ch);
} else {
if((state_val_28700 === (11))){
var inst_28679 = (state_28699[(2)]);
var inst_28680 = (new Array(n));
var inst_28663 = inst_28680;
var inst_28664 = (0);
var state_28699__$1 = (function (){var statearr_28711 = state_28699;
(statearr_28711[(7)] = inst_28664);

(statearr_28711[(10)] = inst_28679);

(statearr_28711[(8)] = inst_28663);

return statearr_28711;
})();
var statearr_28712_28742 = state_28699__$1;
(statearr_28712_28742[(2)] = null);

(statearr_28712_28742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (9))){
var inst_28663 = (state_28699[(8)]);
var inst_28677 = cljs.core.vec.call(null,inst_28663);
var state_28699__$1 = state_28699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28699__$1,(11),out,inst_28677);
} else {
if((state_val_28700 === (5))){
var inst_28667 = (state_28699[(9)]);
var inst_28664 = (state_28699[(7)]);
var inst_28663 = (state_28699[(8)]);
var inst_28672 = (state_28699[(11)]);
var inst_28671 = (inst_28663[inst_28664] = inst_28667);
var inst_28672__$1 = (inst_28664 + (1));
var inst_28673 = (inst_28672__$1 < n);
var state_28699__$1 = (function (){var statearr_28713 = state_28699;
(statearr_28713[(12)] = inst_28671);

(statearr_28713[(11)] = inst_28672__$1);

return statearr_28713;
})();
if(cljs.core.truth_(inst_28673)){
var statearr_28714_28743 = state_28699__$1;
(statearr_28714_28743[(1)] = (8));

} else {
var statearr_28715_28744 = state_28699__$1;
(statearr_28715_28744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (14))){
var inst_28692 = (state_28699[(2)]);
var inst_28693 = cljs.core.async.close_BANG_.call(null,out);
var state_28699__$1 = (function (){var statearr_28717 = state_28699;
(statearr_28717[(13)] = inst_28692);

return statearr_28717;
})();
var statearr_28718_28745 = state_28699__$1;
(statearr_28718_28745[(2)] = inst_28693);

(statearr_28718_28745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (10))){
var inst_28683 = (state_28699[(2)]);
var state_28699__$1 = state_28699;
var statearr_28719_28746 = state_28699__$1;
(statearr_28719_28746[(2)] = inst_28683);

(statearr_28719_28746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28700 === (8))){
var inst_28663 = (state_28699[(8)]);
var inst_28672 = (state_28699[(11)]);
var tmp28716 = inst_28663;
var inst_28663__$1 = tmp28716;
var inst_28664 = inst_28672;
var state_28699__$1 = (function (){var statearr_28720 = state_28699;
(statearr_28720[(7)] = inst_28664);

(statearr_28720[(8)] = inst_28663__$1);

return statearr_28720;
})();
var statearr_28721_28747 = state_28699__$1;
(statearr_28721_28747[(2)] = null);

(statearr_28721_28747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___28733,out))
;
return ((function (switch__20213__auto__,c__20278__auto___28733,out){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_28725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28725[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_28725[(1)] = (1));

return statearr_28725;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_28699){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_28699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e28726){if((e28726 instanceof Object)){
var ex__20217__auto__ = e28726;
var statearr_28727_28748 = state_28699;
(statearr_28727_28748[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28749 = state_28699;
state_28699 = G__28749;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_28699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_28699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___28733,out))
})();
var state__20280__auto__ = (function (){var statearr_28728 = f__20279__auto__.call(null);
(statearr_28728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___28733);

return statearr_28728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___28733,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28750 = [];
var len__17376__auto___28824 = arguments.length;
var i__17377__auto___28825 = (0);
while(true){
if((i__17377__auto___28825 < len__17376__auto___28824)){
args28750.push((arguments[i__17377__auto___28825]));

var G__28826 = (i__17377__auto___28825 + (1));
i__17377__auto___28825 = G__28826;
continue;
} else {
}
break;
}

var G__28752 = args28750.length;
switch (G__28752) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28750.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20278__auto___28828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___28828,out){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___28828,out){
return (function (state_28794){
var state_val_28795 = (state_28794[(1)]);
if((state_val_28795 === (7))){
var inst_28790 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
var statearr_28796_28829 = state_28794__$1;
(statearr_28796_28829[(2)] = inst_28790);

(statearr_28796_28829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (1))){
var inst_28753 = [];
var inst_28754 = inst_28753;
var inst_28755 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28794__$1 = (function (){var statearr_28797 = state_28794;
(statearr_28797[(7)] = inst_28754);

(statearr_28797[(8)] = inst_28755);

return statearr_28797;
})();
var statearr_28798_28830 = state_28794__$1;
(statearr_28798_28830[(2)] = null);

(statearr_28798_28830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (4))){
var inst_28758 = (state_28794[(9)]);
var inst_28758__$1 = (state_28794[(2)]);
var inst_28759 = (inst_28758__$1 == null);
var inst_28760 = cljs.core.not.call(null,inst_28759);
var state_28794__$1 = (function (){var statearr_28799 = state_28794;
(statearr_28799[(9)] = inst_28758__$1);

return statearr_28799;
})();
if(inst_28760){
var statearr_28800_28831 = state_28794__$1;
(statearr_28800_28831[(1)] = (5));

} else {
var statearr_28801_28832 = state_28794__$1;
(statearr_28801_28832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (15))){
var inst_28784 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
var statearr_28802_28833 = state_28794__$1;
(statearr_28802_28833[(2)] = inst_28784);

(statearr_28802_28833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (13))){
var state_28794__$1 = state_28794;
var statearr_28803_28834 = state_28794__$1;
(statearr_28803_28834[(2)] = null);

(statearr_28803_28834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (6))){
var inst_28754 = (state_28794[(7)]);
var inst_28779 = inst_28754.length;
var inst_28780 = (inst_28779 > (0));
var state_28794__$1 = state_28794;
if(cljs.core.truth_(inst_28780)){
var statearr_28804_28835 = state_28794__$1;
(statearr_28804_28835[(1)] = (12));

} else {
var statearr_28805_28836 = state_28794__$1;
(statearr_28805_28836[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (3))){
var inst_28792 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28794__$1,inst_28792);
} else {
if((state_val_28795 === (12))){
var inst_28754 = (state_28794[(7)]);
var inst_28782 = cljs.core.vec.call(null,inst_28754);
var state_28794__$1 = state_28794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28794__$1,(15),out,inst_28782);
} else {
if((state_val_28795 === (2))){
var state_28794__$1 = state_28794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28794__$1,(4),ch);
} else {
if((state_val_28795 === (11))){
var inst_28762 = (state_28794[(10)]);
var inst_28758 = (state_28794[(9)]);
var inst_28772 = (state_28794[(2)]);
var inst_28773 = [];
var inst_28774 = inst_28773.push(inst_28758);
var inst_28754 = inst_28773;
var inst_28755 = inst_28762;
var state_28794__$1 = (function (){var statearr_28806 = state_28794;
(statearr_28806[(7)] = inst_28754);

(statearr_28806[(11)] = inst_28774);

(statearr_28806[(12)] = inst_28772);

(statearr_28806[(8)] = inst_28755);

return statearr_28806;
})();
var statearr_28807_28837 = state_28794__$1;
(statearr_28807_28837[(2)] = null);

(statearr_28807_28837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (9))){
var inst_28754 = (state_28794[(7)]);
var inst_28770 = cljs.core.vec.call(null,inst_28754);
var state_28794__$1 = state_28794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28794__$1,(11),out,inst_28770);
} else {
if((state_val_28795 === (5))){
var inst_28762 = (state_28794[(10)]);
var inst_28758 = (state_28794[(9)]);
var inst_28755 = (state_28794[(8)]);
var inst_28762__$1 = f.call(null,inst_28758);
var inst_28763 = cljs.core._EQ_.call(null,inst_28762__$1,inst_28755);
var inst_28764 = cljs.core.keyword_identical_QMARK_.call(null,inst_28755,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28765 = (inst_28763) || (inst_28764);
var state_28794__$1 = (function (){var statearr_28808 = state_28794;
(statearr_28808[(10)] = inst_28762__$1);

return statearr_28808;
})();
if(cljs.core.truth_(inst_28765)){
var statearr_28809_28838 = state_28794__$1;
(statearr_28809_28838[(1)] = (8));

} else {
var statearr_28810_28839 = state_28794__$1;
(statearr_28810_28839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (14))){
var inst_28787 = (state_28794[(2)]);
var inst_28788 = cljs.core.async.close_BANG_.call(null,out);
var state_28794__$1 = (function (){var statearr_28812 = state_28794;
(statearr_28812[(13)] = inst_28787);

return statearr_28812;
})();
var statearr_28813_28840 = state_28794__$1;
(statearr_28813_28840[(2)] = inst_28788);

(statearr_28813_28840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (10))){
var inst_28777 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
var statearr_28814_28841 = state_28794__$1;
(statearr_28814_28841[(2)] = inst_28777);

(statearr_28814_28841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (8))){
var inst_28762 = (state_28794[(10)]);
var inst_28754 = (state_28794[(7)]);
var inst_28758 = (state_28794[(9)]);
var inst_28767 = inst_28754.push(inst_28758);
var tmp28811 = inst_28754;
var inst_28754__$1 = tmp28811;
var inst_28755 = inst_28762;
var state_28794__$1 = (function (){var statearr_28815 = state_28794;
(statearr_28815[(7)] = inst_28754__$1);

(statearr_28815[(14)] = inst_28767);

(statearr_28815[(8)] = inst_28755);

return statearr_28815;
})();
var statearr_28816_28842 = state_28794__$1;
(statearr_28816_28842[(2)] = null);

(statearr_28816_28842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20278__auto___28828,out))
;
return ((function (switch__20213__auto__,c__20278__auto___28828,out){
return (function() {
var cljs$core$async$state_machine__20214__auto__ = null;
var cljs$core$async$state_machine__20214__auto____0 = (function (){
var statearr_28820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28820[(0)] = cljs$core$async$state_machine__20214__auto__);

(statearr_28820[(1)] = (1));

return statearr_28820;
});
var cljs$core$async$state_machine__20214__auto____1 = (function (state_28794){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_28794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e28821){if((e28821 instanceof Object)){
var ex__20217__auto__ = e28821;
var statearr_28822_28843 = state_28794;
(statearr_28822_28843[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28844 = state_28794;
state_28794 = G__28844;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
cljs$core$async$state_machine__20214__auto__ = function(state_28794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20214__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20214__auto____1.call(this,state_28794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20214__auto____0;
cljs$core$async$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20214__auto____1;
return cljs$core$async$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___28828,out))
})();
var state__20280__auto__ = (function (){var statearr_28823 = f__20279__auto__.call(null);
(statearr_28823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___28828);

return statearr_28823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___28828,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1444761113867