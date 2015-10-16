// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('om_tut.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20074__delegate = function (x){
if(cljs.core.truth_(om_tut.core.on_js_reload)){
return cljs.core.apply.call(null,om_tut.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'om-tut.core/on-js-reload' is missing");
}
};
var G__20074 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20075__i = 0, G__20075__a = new Array(arguments.length -  0);
while (G__20075__i < G__20075__a.length) {G__20075__a[G__20075__i] = arguments[G__20075__i + 0]; ++G__20075__i;}
  x = new cljs.core.IndexedSeq(G__20075__a,0);
} 
return G__20074__delegate.call(this,x);};
G__20074.cljs$lang$maxFixedArity = 0;
G__20074.cljs$lang$applyTo = (function (arglist__20076){
var x = cljs.core.seq(arglist__20076);
return G__20074__delegate(x);
});
G__20074.cljs$core$IFn$_invoke$arity$variadic = G__20074__delegate;
return G__20074;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1444933080608