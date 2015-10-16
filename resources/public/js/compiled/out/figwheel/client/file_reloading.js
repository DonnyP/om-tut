// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16318__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16318__auto__){
return or__16318__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16318__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30232_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30232_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30237 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30238 = null;
var count__30239 = (0);
var i__30240 = (0);
while(true){
if((i__30240 < count__30239)){
var n = cljs.core._nth.call(null,chunk__30238,i__30240);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30241 = seq__30237;
var G__30242 = chunk__30238;
var G__30243 = count__30239;
var G__30244 = (i__30240 + (1));
seq__30237 = G__30241;
chunk__30238 = G__30242;
count__30239 = G__30243;
i__30240 = G__30244;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30237);
if(temp__4425__auto__){
var seq__30237__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30237__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__30237__$1);
var G__30245 = cljs.core.chunk_rest.call(null,seq__30237__$1);
var G__30246 = c__17121__auto__;
var G__30247 = cljs.core.count.call(null,c__17121__auto__);
var G__30248 = (0);
seq__30237 = G__30245;
chunk__30238 = G__30246;
count__30239 = G__30247;
i__30240 = G__30248;
continue;
} else {
var n = cljs.core.first.call(null,seq__30237__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30249 = cljs.core.next.call(null,seq__30237__$1);
var G__30250 = null;
var G__30251 = (0);
var G__30252 = (0);
seq__30237 = G__30249;
chunk__30238 = G__30250;
count__30239 = G__30251;
i__30240 = G__30252;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30291_30298 = cljs.core.seq.call(null,deps);
var chunk__30292_30299 = null;
var count__30293_30300 = (0);
var i__30294_30301 = (0);
while(true){
if((i__30294_30301 < count__30293_30300)){
var dep_30302 = cljs.core._nth.call(null,chunk__30292_30299,i__30294_30301);
topo_sort_helper_STAR_.call(null,dep_30302,(depth + (1)),state);

var G__30303 = seq__30291_30298;
var G__30304 = chunk__30292_30299;
var G__30305 = count__30293_30300;
var G__30306 = (i__30294_30301 + (1));
seq__30291_30298 = G__30303;
chunk__30292_30299 = G__30304;
count__30293_30300 = G__30305;
i__30294_30301 = G__30306;
continue;
} else {
var temp__4425__auto___30307 = cljs.core.seq.call(null,seq__30291_30298);
if(temp__4425__auto___30307){
var seq__30291_30308__$1 = temp__4425__auto___30307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30291_30308__$1)){
var c__17121__auto___30309 = cljs.core.chunk_first.call(null,seq__30291_30308__$1);
var G__30310 = cljs.core.chunk_rest.call(null,seq__30291_30308__$1);
var G__30311 = c__17121__auto___30309;
var G__30312 = cljs.core.count.call(null,c__17121__auto___30309);
var G__30313 = (0);
seq__30291_30298 = G__30310;
chunk__30292_30299 = G__30311;
count__30293_30300 = G__30312;
i__30294_30301 = G__30313;
continue;
} else {
var dep_30314 = cljs.core.first.call(null,seq__30291_30308__$1);
topo_sort_helper_STAR_.call(null,dep_30314,(depth + (1)),state);

var G__30315 = cljs.core.next.call(null,seq__30291_30308__$1);
var G__30316 = null;
var G__30317 = (0);
var G__30318 = (0);
seq__30291_30298 = G__30315;
chunk__30292_30299 = G__30316;
count__30293_30300 = G__30317;
i__30294_30301 = G__30318;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30295){
var vec__30297 = p__30295;
var x = cljs.core.nth.call(null,vec__30297,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30297,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30297,x,xs,get_deps__$1){
return (function (p1__30253_SHARP_){
return clojure.set.difference.call(null,p1__30253_SHARP_,x);
});})(vec__30297,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30331 = cljs.core.seq.call(null,provides);
var chunk__30332 = null;
var count__30333 = (0);
var i__30334 = (0);
while(true){
if((i__30334 < count__30333)){
var prov = cljs.core._nth.call(null,chunk__30332,i__30334);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30335_30343 = cljs.core.seq.call(null,requires);
var chunk__30336_30344 = null;
var count__30337_30345 = (0);
var i__30338_30346 = (0);
while(true){
if((i__30338_30346 < count__30337_30345)){
var req_30347 = cljs.core._nth.call(null,chunk__30336_30344,i__30338_30346);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30347,prov);

var G__30348 = seq__30335_30343;
var G__30349 = chunk__30336_30344;
var G__30350 = count__30337_30345;
var G__30351 = (i__30338_30346 + (1));
seq__30335_30343 = G__30348;
chunk__30336_30344 = G__30349;
count__30337_30345 = G__30350;
i__30338_30346 = G__30351;
continue;
} else {
var temp__4425__auto___30352 = cljs.core.seq.call(null,seq__30335_30343);
if(temp__4425__auto___30352){
var seq__30335_30353__$1 = temp__4425__auto___30352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30335_30353__$1)){
var c__17121__auto___30354 = cljs.core.chunk_first.call(null,seq__30335_30353__$1);
var G__30355 = cljs.core.chunk_rest.call(null,seq__30335_30353__$1);
var G__30356 = c__17121__auto___30354;
var G__30357 = cljs.core.count.call(null,c__17121__auto___30354);
var G__30358 = (0);
seq__30335_30343 = G__30355;
chunk__30336_30344 = G__30356;
count__30337_30345 = G__30357;
i__30338_30346 = G__30358;
continue;
} else {
var req_30359 = cljs.core.first.call(null,seq__30335_30353__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30359,prov);

var G__30360 = cljs.core.next.call(null,seq__30335_30353__$1);
var G__30361 = null;
var G__30362 = (0);
var G__30363 = (0);
seq__30335_30343 = G__30360;
chunk__30336_30344 = G__30361;
count__30337_30345 = G__30362;
i__30338_30346 = G__30363;
continue;
}
} else {
}
}
break;
}

var G__30364 = seq__30331;
var G__30365 = chunk__30332;
var G__30366 = count__30333;
var G__30367 = (i__30334 + (1));
seq__30331 = G__30364;
chunk__30332 = G__30365;
count__30333 = G__30366;
i__30334 = G__30367;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30331);
if(temp__4425__auto__){
var seq__30331__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30331__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__30331__$1);
var G__30368 = cljs.core.chunk_rest.call(null,seq__30331__$1);
var G__30369 = c__17121__auto__;
var G__30370 = cljs.core.count.call(null,c__17121__auto__);
var G__30371 = (0);
seq__30331 = G__30368;
chunk__30332 = G__30369;
count__30333 = G__30370;
i__30334 = G__30371;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30331__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30339_30372 = cljs.core.seq.call(null,requires);
var chunk__30340_30373 = null;
var count__30341_30374 = (0);
var i__30342_30375 = (0);
while(true){
if((i__30342_30375 < count__30341_30374)){
var req_30376 = cljs.core._nth.call(null,chunk__30340_30373,i__30342_30375);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30376,prov);

var G__30377 = seq__30339_30372;
var G__30378 = chunk__30340_30373;
var G__30379 = count__30341_30374;
var G__30380 = (i__30342_30375 + (1));
seq__30339_30372 = G__30377;
chunk__30340_30373 = G__30378;
count__30341_30374 = G__30379;
i__30342_30375 = G__30380;
continue;
} else {
var temp__4425__auto___30381__$1 = cljs.core.seq.call(null,seq__30339_30372);
if(temp__4425__auto___30381__$1){
var seq__30339_30382__$1 = temp__4425__auto___30381__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30339_30382__$1)){
var c__17121__auto___30383 = cljs.core.chunk_first.call(null,seq__30339_30382__$1);
var G__30384 = cljs.core.chunk_rest.call(null,seq__30339_30382__$1);
var G__30385 = c__17121__auto___30383;
var G__30386 = cljs.core.count.call(null,c__17121__auto___30383);
var G__30387 = (0);
seq__30339_30372 = G__30384;
chunk__30340_30373 = G__30385;
count__30341_30374 = G__30386;
i__30342_30375 = G__30387;
continue;
} else {
var req_30388 = cljs.core.first.call(null,seq__30339_30382__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30388,prov);

var G__30389 = cljs.core.next.call(null,seq__30339_30382__$1);
var G__30390 = null;
var G__30391 = (0);
var G__30392 = (0);
seq__30339_30372 = G__30389;
chunk__30340_30373 = G__30390;
count__30341_30374 = G__30391;
i__30342_30375 = G__30392;
continue;
}
} else {
}
}
break;
}

var G__30393 = cljs.core.next.call(null,seq__30331__$1);
var G__30394 = null;
var G__30395 = (0);
var G__30396 = (0);
seq__30331 = G__30393;
chunk__30332 = G__30394;
count__30333 = G__30395;
i__30334 = G__30396;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30401_30405 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30402_30406 = null;
var count__30403_30407 = (0);
var i__30404_30408 = (0);
while(true){
if((i__30404_30408 < count__30403_30407)){
var ns_30409 = cljs.core._nth.call(null,chunk__30402_30406,i__30404_30408);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30409);

var G__30410 = seq__30401_30405;
var G__30411 = chunk__30402_30406;
var G__30412 = count__30403_30407;
var G__30413 = (i__30404_30408 + (1));
seq__30401_30405 = G__30410;
chunk__30402_30406 = G__30411;
count__30403_30407 = G__30412;
i__30404_30408 = G__30413;
continue;
} else {
var temp__4425__auto___30414 = cljs.core.seq.call(null,seq__30401_30405);
if(temp__4425__auto___30414){
var seq__30401_30415__$1 = temp__4425__auto___30414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30401_30415__$1)){
var c__17121__auto___30416 = cljs.core.chunk_first.call(null,seq__30401_30415__$1);
var G__30417 = cljs.core.chunk_rest.call(null,seq__30401_30415__$1);
var G__30418 = c__17121__auto___30416;
var G__30419 = cljs.core.count.call(null,c__17121__auto___30416);
var G__30420 = (0);
seq__30401_30405 = G__30417;
chunk__30402_30406 = G__30418;
count__30403_30407 = G__30419;
i__30404_30408 = G__30420;
continue;
} else {
var ns_30421 = cljs.core.first.call(null,seq__30401_30415__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30421);

var G__30422 = cljs.core.next.call(null,seq__30401_30415__$1);
var G__30423 = null;
var G__30424 = (0);
var G__30425 = (0);
seq__30401_30405 = G__30422;
chunk__30402_30406 = G__30423;
count__30403_30407 = G__30424;
i__30404_30408 = G__30425;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16318__auto__ = goog.require__;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30426__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30427__i = 0, G__30427__a = new Array(arguments.length -  0);
while (G__30427__i < G__30427__a.length) {G__30427__a[G__30427__i] = arguments[G__30427__i + 0]; ++G__30427__i;}
  args = new cljs.core.IndexedSeq(G__30427__a,0);
} 
return G__30426__delegate.call(this,args);};
G__30426.cljs$lang$maxFixedArity = 0;
G__30426.cljs$lang$applyTo = (function (arglist__30428){
var args = cljs.core.seq(arglist__30428);
return G__30426__delegate(args);
});
G__30426.cljs$core$IFn$_invoke$arity$variadic = G__30426__delegate;
return G__30426;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30430 = cljs.core._EQ_;
var expr__30431 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30430.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30431))){
var path_parts = ((function (pred__30430,expr__30431){
return (function (p1__30429_SHARP_){
return clojure.string.split.call(null,p1__30429_SHARP_,/[\/\\]/);
});})(pred__30430,expr__30431))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30430,expr__30431){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e30433){if((e30433 instanceof Error)){
var e = e30433;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30433;

}
}})());
});
;})(path_parts,sep,root,pred__30430,expr__30431))
} else {
if(cljs.core.truth_(pred__30430.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30431))){
return ((function (pred__30430,expr__30431){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30430,expr__30431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30430,expr__30431))
);

return deferred.addErrback(((function (deferred,pred__30430,expr__30431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30430,expr__30431))
);
});
;})(pred__30430,expr__30431))
} else {
return ((function (pred__30430,expr__30431){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30430,expr__30431))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30434,callback){
var map__30437 = p__30434;
var map__30437__$1 = ((((!((map__30437 == null)))?((((map__30437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30437):map__30437);
var file_msg = map__30437__$1;
var request_url = cljs.core.get.call(null,map__30437__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30437,map__30437__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30437,map__30437__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto__){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto__){
return (function (state_30461){
var state_val_30462 = (state_30461[(1)]);
if((state_val_30462 === (7))){
var inst_30457 = (state_30461[(2)]);
var state_30461__$1 = state_30461;
var statearr_30463_30483 = state_30461__$1;
(statearr_30463_30483[(2)] = inst_30457);

(statearr_30463_30483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (1))){
var state_30461__$1 = state_30461;
var statearr_30464_30484 = state_30461__$1;
(statearr_30464_30484[(2)] = null);

(statearr_30464_30484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (4))){
var inst_30441 = (state_30461[(7)]);
var inst_30441__$1 = (state_30461[(2)]);
var state_30461__$1 = (function (){var statearr_30465 = state_30461;
(statearr_30465[(7)] = inst_30441__$1);

return statearr_30465;
})();
if(cljs.core.truth_(inst_30441__$1)){
var statearr_30466_30485 = state_30461__$1;
(statearr_30466_30485[(1)] = (5));

} else {
var statearr_30467_30486 = state_30461__$1;
(statearr_30467_30486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (6))){
var state_30461__$1 = state_30461;
var statearr_30468_30487 = state_30461__$1;
(statearr_30468_30487[(2)] = null);

(statearr_30468_30487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (3))){
var inst_30459 = (state_30461[(2)]);
var state_30461__$1 = state_30461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30461__$1,inst_30459);
} else {
if((state_val_30462 === (2))){
var state_30461__$1 = state_30461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30461__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30462 === (11))){
var inst_30453 = (state_30461[(2)]);
var state_30461__$1 = (function (){var statearr_30469 = state_30461;
(statearr_30469[(8)] = inst_30453);

return statearr_30469;
})();
var statearr_30470_30488 = state_30461__$1;
(statearr_30470_30488[(2)] = null);

(statearr_30470_30488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (9))){
var inst_30447 = (state_30461[(9)]);
var inst_30445 = (state_30461[(10)]);
var inst_30449 = inst_30447.call(null,inst_30445);
var state_30461__$1 = state_30461;
var statearr_30471_30489 = state_30461__$1;
(statearr_30471_30489[(2)] = inst_30449);

(statearr_30471_30489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (5))){
var inst_30441 = (state_30461[(7)]);
var inst_30443 = figwheel.client.file_reloading.blocking_load.call(null,inst_30441);
var state_30461__$1 = state_30461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30461__$1,(8),inst_30443);
} else {
if((state_val_30462 === (10))){
var inst_30445 = (state_30461[(10)]);
var inst_30451 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30445);
var state_30461__$1 = state_30461;
var statearr_30472_30490 = state_30461__$1;
(statearr_30472_30490[(2)] = inst_30451);

(statearr_30472_30490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30462 === (8))){
var inst_30447 = (state_30461[(9)]);
var inst_30441 = (state_30461[(7)]);
var inst_30445 = (state_30461[(2)]);
var inst_30446 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30447__$1 = cljs.core.get.call(null,inst_30446,inst_30441);
var state_30461__$1 = (function (){var statearr_30473 = state_30461;
(statearr_30473[(9)] = inst_30447__$1);

(statearr_30473[(10)] = inst_30445);

return statearr_30473;
})();
if(cljs.core.truth_(inst_30447__$1)){
var statearr_30474_30491 = state_30461__$1;
(statearr_30474_30491[(1)] = (9));

} else {
var statearr_30475_30492 = state_30461__$1;
(statearr_30475_30492[(1)] = (10));

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
});})(c__20278__auto__))
;
return ((function (switch__20213__auto__,c__20278__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20214__auto__ = null;
var figwheel$client$file_reloading$state_machine__20214__auto____0 = (function (){
var statearr_30479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30479[(0)] = figwheel$client$file_reloading$state_machine__20214__auto__);

(statearr_30479[(1)] = (1));

return statearr_30479;
});
var figwheel$client$file_reloading$state_machine__20214__auto____1 = (function (state_30461){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_30461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e30480){if((e30480 instanceof Object)){
var ex__20217__auto__ = e30480;
var statearr_30481_30493 = state_30461;
(statearr_30481_30493[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30494 = state_30461;
state_30461 = G__30494;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20214__auto__ = function(state_30461){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20214__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20214__auto____1.call(this,state_30461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20214__auto____0;
figwheel$client$file_reloading$state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20214__auto____1;
return figwheel$client$file_reloading$state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto__))
})();
var state__20280__auto__ = (function (){var statearr_30482 = f__20279__auto__.call(null);
(statearr_30482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto__);

return statearr_30482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto__))
);

return c__20278__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30495,callback){
var map__30498 = p__30495;
var map__30498__$1 = ((((!((map__30498 == null)))?((((map__30498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30498):map__30498);
var file_msg = map__30498__$1;
var namespace = cljs.core.get.call(null,map__30498__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30498,map__30498__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30498,map__30498__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30500){
var map__30503 = p__30500;
var map__30503__$1 = ((((!((map__30503 == null)))?((((map__30503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30503):map__30503);
var file_msg = map__30503__$1;
var namespace = cljs.core.get.call(null,map__30503__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16306__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16306__auto__){
var or__16318__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
var or__16318__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16318__auto____$1)){
return or__16318__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16306__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30505,callback){
var map__30508 = p__30505;
var map__30508__$1 = ((((!((map__30508 == null)))?((((map__30508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30508):map__30508);
var file_msg = map__30508__$1;
var request_url = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20278__auto___30596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___30596,out){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___30596,out){
return (function (state_30578){
var state_val_30579 = (state_30578[(1)]);
if((state_val_30579 === (1))){
var inst_30556 = cljs.core.nth.call(null,files,(0),null);
var inst_30557 = cljs.core.nthnext.call(null,files,(1));
var inst_30558 = files;
var state_30578__$1 = (function (){var statearr_30580 = state_30578;
(statearr_30580[(7)] = inst_30557);

(statearr_30580[(8)] = inst_30556);

(statearr_30580[(9)] = inst_30558);

return statearr_30580;
})();
var statearr_30581_30597 = state_30578__$1;
(statearr_30581_30597[(2)] = null);

(statearr_30581_30597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30579 === (2))){
var inst_30561 = (state_30578[(10)]);
var inst_30558 = (state_30578[(9)]);
var inst_30561__$1 = cljs.core.nth.call(null,inst_30558,(0),null);
var inst_30562 = cljs.core.nthnext.call(null,inst_30558,(1));
var inst_30563 = (inst_30561__$1 == null);
var inst_30564 = cljs.core.not.call(null,inst_30563);
var state_30578__$1 = (function (){var statearr_30582 = state_30578;
(statearr_30582[(11)] = inst_30562);

(statearr_30582[(10)] = inst_30561__$1);

return statearr_30582;
})();
if(inst_30564){
var statearr_30583_30598 = state_30578__$1;
(statearr_30583_30598[(1)] = (4));

} else {
var statearr_30584_30599 = state_30578__$1;
(statearr_30584_30599[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30579 === (3))){
var inst_30576 = (state_30578[(2)]);
var state_30578__$1 = state_30578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30578__$1,inst_30576);
} else {
if((state_val_30579 === (4))){
var inst_30561 = (state_30578[(10)]);
var inst_30566 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30561);
var state_30578__$1 = state_30578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30578__$1,(7),inst_30566);
} else {
if((state_val_30579 === (5))){
var inst_30572 = cljs.core.async.close_BANG_.call(null,out);
var state_30578__$1 = state_30578;
var statearr_30585_30600 = state_30578__$1;
(statearr_30585_30600[(2)] = inst_30572);

(statearr_30585_30600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30579 === (6))){
var inst_30574 = (state_30578[(2)]);
var state_30578__$1 = state_30578;
var statearr_30586_30601 = state_30578__$1;
(statearr_30586_30601[(2)] = inst_30574);

(statearr_30586_30601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30579 === (7))){
var inst_30562 = (state_30578[(11)]);
var inst_30568 = (state_30578[(2)]);
var inst_30569 = cljs.core.async.put_BANG_.call(null,out,inst_30568);
var inst_30558 = inst_30562;
var state_30578__$1 = (function (){var statearr_30587 = state_30578;
(statearr_30587[(12)] = inst_30569);

(statearr_30587[(9)] = inst_30558);

return statearr_30587;
})();
var statearr_30588_30602 = state_30578__$1;
(statearr_30588_30602[(2)] = null);

(statearr_30588_30602[(1)] = (2));


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
});})(c__20278__auto___30596,out))
;
return ((function (switch__20213__auto__,c__20278__auto___30596,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto____0 = (function (){
var statearr_30592 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30592[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto__);

(statearr_30592[(1)] = (1));

return statearr_30592;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto____1 = (function (state_30578){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_30578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e30593){if((e30593 instanceof Object)){
var ex__20217__auto__ = e30593;
var statearr_30594_30603 = state_30578;
(statearr_30594_30603[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30604 = state_30578;
state_30578 = G__30604;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto__ = function(state_30578){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto____1.call(this,state_30578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___30596,out))
})();
var state__20280__auto__ = (function (){var statearr_30595 = f__20279__auto__.call(null);
(statearr_30595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___30596);

return statearr_30595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___30596,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30605,opts){
var map__30609 = p__30605;
var map__30609__$1 = ((((!((map__30609 == null)))?((((map__30609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30609):map__30609);
var eval_body__$1 = cljs.core.get.call(null,map__30609__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16306__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16306__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16306__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30611){var e = e30611;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30612_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30612_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30617){
var vec__30618 = p__30617;
var k = cljs.core.nth.call(null,vec__30618,(0),null);
var v = cljs.core.nth.call(null,vec__30618,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30619){
var vec__30620 = p__30619;
var k = cljs.core.nth.call(null,vec__30620,(0),null);
var v = cljs.core.nth.call(null,vec__30620,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30624,p__30625){
var map__30872 = p__30624;
var map__30872__$1 = ((((!((map__30872 == null)))?((((map__30872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30872):map__30872);
var opts = map__30872__$1;
var before_jsload = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30872__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30873 = p__30625;
var map__30873__$1 = ((((!((map__30873 == null)))?((((map__30873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30873):map__30873);
var msg = map__30873__$1;
var files = cljs.core.get.call(null,map__30873__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30873__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30873__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31026){
var state_val_31027 = (state_31026[(1)]);
if((state_val_31027 === (7))){
var inst_30889 = (state_31026[(7)]);
var inst_30888 = (state_31026[(8)]);
var inst_30887 = (state_31026[(9)]);
var inst_30890 = (state_31026[(10)]);
var inst_30895 = cljs.core._nth.call(null,inst_30888,inst_30890);
var inst_30896 = figwheel.client.file_reloading.eval_body.call(null,inst_30895,opts);
var inst_30897 = (inst_30890 + (1));
var tmp31028 = inst_30889;
var tmp31029 = inst_30888;
var tmp31030 = inst_30887;
var inst_30887__$1 = tmp31030;
var inst_30888__$1 = tmp31029;
var inst_30889__$1 = tmp31028;
var inst_30890__$1 = inst_30897;
var state_31026__$1 = (function (){var statearr_31031 = state_31026;
(statearr_31031[(7)] = inst_30889__$1);

(statearr_31031[(8)] = inst_30888__$1);

(statearr_31031[(9)] = inst_30887__$1);

(statearr_31031[(10)] = inst_30890__$1);

(statearr_31031[(11)] = inst_30896);

return statearr_31031;
})();
var statearr_31032_31118 = state_31026__$1;
(statearr_31032_31118[(2)] = null);

(statearr_31032_31118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (20))){
var inst_30930 = (state_31026[(12)]);
var inst_30938 = figwheel.client.file_reloading.sort_files.call(null,inst_30930);
var state_31026__$1 = state_31026;
var statearr_31033_31119 = state_31026__$1;
(statearr_31033_31119[(2)] = inst_30938);

(statearr_31033_31119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (27))){
var state_31026__$1 = state_31026;
var statearr_31034_31120 = state_31026__$1;
(statearr_31034_31120[(2)] = null);

(statearr_31034_31120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (1))){
var inst_30879 = (state_31026[(13)]);
var inst_30876 = before_jsload.call(null,files);
var inst_30877 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30878 = (function (){return ((function (inst_30879,inst_30876,inst_30877,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30621_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30621_SHARP_);
});
;})(inst_30879,inst_30876,inst_30877,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30879__$1 = cljs.core.filter.call(null,inst_30878,files);
var inst_30880 = cljs.core.not_empty.call(null,inst_30879__$1);
var state_31026__$1 = (function (){var statearr_31035 = state_31026;
(statearr_31035[(13)] = inst_30879__$1);

(statearr_31035[(14)] = inst_30876);

(statearr_31035[(15)] = inst_30877);

return statearr_31035;
})();
if(cljs.core.truth_(inst_30880)){
var statearr_31036_31121 = state_31026__$1;
(statearr_31036_31121[(1)] = (2));

} else {
var statearr_31037_31122 = state_31026__$1;
(statearr_31037_31122[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (24))){
var state_31026__$1 = state_31026;
var statearr_31038_31123 = state_31026__$1;
(statearr_31038_31123[(2)] = null);

(statearr_31038_31123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (39))){
var inst_30980 = (state_31026[(16)]);
var state_31026__$1 = state_31026;
var statearr_31039_31124 = state_31026__$1;
(statearr_31039_31124[(2)] = inst_30980);

(statearr_31039_31124[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (46))){
var inst_31021 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31040_31125 = state_31026__$1;
(statearr_31040_31125[(2)] = inst_31021);

(statearr_31040_31125[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (4))){
var inst_30924 = (state_31026[(2)]);
var inst_30925 = cljs.core.List.EMPTY;
var inst_30926 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30925);
var inst_30927 = (function (){return ((function (inst_30924,inst_30925,inst_30926,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30622_SHARP_){
var and__16306__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30622_SHARP_);
if(cljs.core.truth_(and__16306__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30622_SHARP_));
} else {
return and__16306__auto__;
}
});
;})(inst_30924,inst_30925,inst_30926,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30928 = cljs.core.filter.call(null,inst_30927,files);
var inst_30929 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30930 = cljs.core.concat.call(null,inst_30928,inst_30929);
var state_31026__$1 = (function (){var statearr_31041 = state_31026;
(statearr_31041[(12)] = inst_30930);

(statearr_31041[(17)] = inst_30924);

(statearr_31041[(18)] = inst_30926);

return statearr_31041;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31042_31126 = state_31026__$1;
(statearr_31042_31126[(1)] = (16));

} else {
var statearr_31043_31127 = state_31026__$1;
(statearr_31043_31127[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (15))){
var inst_30914 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31044_31128 = state_31026__$1;
(statearr_31044_31128[(2)] = inst_30914);

(statearr_31044_31128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (21))){
var inst_30940 = (state_31026[(19)]);
var inst_30940__$1 = (state_31026[(2)]);
var inst_30941 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30940__$1);
var state_31026__$1 = (function (){var statearr_31045 = state_31026;
(statearr_31045[(19)] = inst_30940__$1);

return statearr_31045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31026__$1,(22),inst_30941);
} else {
if((state_val_31027 === (31))){
var inst_31024 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31026__$1,inst_31024);
} else {
if((state_val_31027 === (32))){
var inst_30980 = (state_31026[(16)]);
var inst_30985 = inst_30980.cljs$lang$protocol_mask$partition0$;
var inst_30986 = (inst_30985 & (64));
var inst_30987 = inst_30980.cljs$core$ISeq$;
var inst_30988 = (inst_30986) || (inst_30987);
var state_31026__$1 = state_31026;
if(cljs.core.truth_(inst_30988)){
var statearr_31046_31129 = state_31026__$1;
(statearr_31046_31129[(1)] = (35));

} else {
var statearr_31047_31130 = state_31026__$1;
(statearr_31047_31130[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (40))){
var inst_31001 = (state_31026[(20)]);
var inst_31000 = (state_31026[(2)]);
var inst_31001__$1 = cljs.core.get.call(null,inst_31000,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31002 = cljs.core.get.call(null,inst_31000,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31003 = cljs.core.not_empty.call(null,inst_31001__$1);
var state_31026__$1 = (function (){var statearr_31048 = state_31026;
(statearr_31048[(21)] = inst_31002);

(statearr_31048[(20)] = inst_31001__$1);

return statearr_31048;
})();
if(cljs.core.truth_(inst_31003)){
var statearr_31049_31131 = state_31026__$1;
(statearr_31049_31131[(1)] = (41));

} else {
var statearr_31050_31132 = state_31026__$1;
(statearr_31050_31132[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (33))){
var state_31026__$1 = state_31026;
var statearr_31051_31133 = state_31026__$1;
(statearr_31051_31133[(2)] = false);

(statearr_31051_31133[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (13))){
var inst_30900 = (state_31026[(22)]);
var inst_30904 = cljs.core.chunk_first.call(null,inst_30900);
var inst_30905 = cljs.core.chunk_rest.call(null,inst_30900);
var inst_30906 = cljs.core.count.call(null,inst_30904);
var inst_30887 = inst_30905;
var inst_30888 = inst_30904;
var inst_30889 = inst_30906;
var inst_30890 = (0);
var state_31026__$1 = (function (){var statearr_31052 = state_31026;
(statearr_31052[(7)] = inst_30889);

(statearr_31052[(8)] = inst_30888);

(statearr_31052[(9)] = inst_30887);

(statearr_31052[(10)] = inst_30890);

return statearr_31052;
})();
var statearr_31053_31134 = state_31026__$1;
(statearr_31053_31134[(2)] = null);

(statearr_31053_31134[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (22))){
var inst_30943 = (state_31026[(23)]);
var inst_30944 = (state_31026[(24)]);
var inst_30948 = (state_31026[(25)]);
var inst_30940 = (state_31026[(19)]);
var inst_30943__$1 = (state_31026[(2)]);
var inst_30944__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30943__$1);
var inst_30945 = (function (){var all_files = inst_30940;
var res_SINGLEQUOTE_ = inst_30943__$1;
var res = inst_30944__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30943,inst_30944,inst_30948,inst_30940,inst_30943__$1,inst_30944__$1,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30623_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30623_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30943,inst_30944,inst_30948,inst_30940,inst_30943__$1,inst_30944__$1,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30946 = cljs.core.filter.call(null,inst_30945,inst_30943__$1);
var inst_30947 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30948__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30947);
var inst_30949 = cljs.core.not_empty.call(null,inst_30948__$1);
var state_31026__$1 = (function (){var statearr_31054 = state_31026;
(statearr_31054[(23)] = inst_30943__$1);

(statearr_31054[(24)] = inst_30944__$1);

(statearr_31054[(25)] = inst_30948__$1);

(statearr_31054[(26)] = inst_30946);

return statearr_31054;
})();
if(cljs.core.truth_(inst_30949)){
var statearr_31055_31135 = state_31026__$1;
(statearr_31055_31135[(1)] = (23));

} else {
var statearr_31056_31136 = state_31026__$1;
(statearr_31056_31136[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (36))){
var state_31026__$1 = state_31026;
var statearr_31057_31137 = state_31026__$1;
(statearr_31057_31137[(2)] = false);

(statearr_31057_31137[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (41))){
var inst_31001 = (state_31026[(20)]);
var inst_31005 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31006 = cljs.core.map.call(null,inst_31005,inst_31001);
var inst_31007 = cljs.core.pr_str.call(null,inst_31006);
var inst_31008 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31007)].join('');
var inst_31009 = figwheel.client.utils.log.call(null,inst_31008);
var state_31026__$1 = state_31026;
var statearr_31058_31138 = state_31026__$1;
(statearr_31058_31138[(2)] = inst_31009);

(statearr_31058_31138[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (43))){
var inst_31002 = (state_31026[(21)]);
var inst_31012 = (state_31026[(2)]);
var inst_31013 = cljs.core.not_empty.call(null,inst_31002);
var state_31026__$1 = (function (){var statearr_31059 = state_31026;
(statearr_31059[(27)] = inst_31012);

return statearr_31059;
})();
if(cljs.core.truth_(inst_31013)){
var statearr_31060_31139 = state_31026__$1;
(statearr_31060_31139[(1)] = (44));

} else {
var statearr_31061_31140 = state_31026__$1;
(statearr_31061_31140[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (29))){
var inst_30943 = (state_31026[(23)]);
var inst_30980 = (state_31026[(16)]);
var inst_30944 = (state_31026[(24)]);
var inst_30948 = (state_31026[(25)]);
var inst_30940 = (state_31026[(19)]);
var inst_30946 = (state_31026[(26)]);
var inst_30976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30979 = (function (){var all_files = inst_30940;
var res_SINGLEQUOTE_ = inst_30943;
var res = inst_30944;
var files_not_loaded = inst_30946;
var dependencies_that_loaded = inst_30948;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30943,inst_30980,inst_30944,inst_30948,inst_30940,inst_30946,inst_30976,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30978){
var map__31062 = p__30978;
var map__31062__$1 = ((((!((map__31062 == null)))?((((map__31062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31062):map__31062);
var namespace = cljs.core.get.call(null,map__31062__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30943,inst_30980,inst_30944,inst_30948,inst_30940,inst_30946,inst_30976,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30980__$1 = cljs.core.group_by.call(null,inst_30979,inst_30946);
var inst_30982 = (inst_30980__$1 == null);
var inst_30983 = cljs.core.not.call(null,inst_30982);
var state_31026__$1 = (function (){var statearr_31064 = state_31026;
(statearr_31064[(28)] = inst_30976);

(statearr_31064[(16)] = inst_30980__$1);

return statearr_31064;
})();
if(inst_30983){
var statearr_31065_31141 = state_31026__$1;
(statearr_31065_31141[(1)] = (32));

} else {
var statearr_31066_31142 = state_31026__$1;
(statearr_31066_31142[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (44))){
var inst_31002 = (state_31026[(21)]);
var inst_31015 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31002);
var inst_31016 = cljs.core.pr_str.call(null,inst_31015);
var inst_31017 = [cljs.core.str("not required: "),cljs.core.str(inst_31016)].join('');
var inst_31018 = figwheel.client.utils.log.call(null,inst_31017);
var state_31026__$1 = state_31026;
var statearr_31067_31143 = state_31026__$1;
(statearr_31067_31143[(2)] = inst_31018);

(statearr_31067_31143[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (6))){
var inst_30921 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31068_31144 = state_31026__$1;
(statearr_31068_31144[(2)] = inst_30921);

(statearr_31068_31144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (28))){
var inst_30946 = (state_31026[(26)]);
var inst_30973 = (state_31026[(2)]);
var inst_30974 = cljs.core.not_empty.call(null,inst_30946);
var state_31026__$1 = (function (){var statearr_31069 = state_31026;
(statearr_31069[(29)] = inst_30973);

return statearr_31069;
})();
if(cljs.core.truth_(inst_30974)){
var statearr_31070_31145 = state_31026__$1;
(statearr_31070_31145[(1)] = (29));

} else {
var statearr_31071_31146 = state_31026__$1;
(statearr_31071_31146[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (25))){
var inst_30944 = (state_31026[(24)]);
var inst_30960 = (state_31026[(2)]);
var inst_30961 = cljs.core.not_empty.call(null,inst_30944);
var state_31026__$1 = (function (){var statearr_31072 = state_31026;
(statearr_31072[(30)] = inst_30960);

return statearr_31072;
})();
if(cljs.core.truth_(inst_30961)){
var statearr_31073_31147 = state_31026__$1;
(statearr_31073_31147[(1)] = (26));

} else {
var statearr_31074_31148 = state_31026__$1;
(statearr_31074_31148[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (34))){
var inst_30995 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
if(cljs.core.truth_(inst_30995)){
var statearr_31075_31149 = state_31026__$1;
(statearr_31075_31149[(1)] = (38));

} else {
var statearr_31076_31150 = state_31026__$1;
(statearr_31076_31150[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (17))){
var state_31026__$1 = state_31026;
var statearr_31077_31151 = state_31026__$1;
(statearr_31077_31151[(2)] = recompile_dependents);

(statearr_31077_31151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (3))){
var state_31026__$1 = state_31026;
var statearr_31078_31152 = state_31026__$1;
(statearr_31078_31152[(2)] = null);

(statearr_31078_31152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (12))){
var inst_30917 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31079_31153 = state_31026__$1;
(statearr_31079_31153[(2)] = inst_30917);

(statearr_31079_31153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (2))){
var inst_30879 = (state_31026[(13)]);
var inst_30886 = cljs.core.seq.call(null,inst_30879);
var inst_30887 = inst_30886;
var inst_30888 = null;
var inst_30889 = (0);
var inst_30890 = (0);
var state_31026__$1 = (function (){var statearr_31080 = state_31026;
(statearr_31080[(7)] = inst_30889);

(statearr_31080[(8)] = inst_30888);

(statearr_31080[(9)] = inst_30887);

(statearr_31080[(10)] = inst_30890);

return statearr_31080;
})();
var statearr_31081_31154 = state_31026__$1;
(statearr_31081_31154[(2)] = null);

(statearr_31081_31154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (23))){
var inst_30943 = (state_31026[(23)]);
var inst_30944 = (state_31026[(24)]);
var inst_30948 = (state_31026[(25)]);
var inst_30940 = (state_31026[(19)]);
var inst_30946 = (state_31026[(26)]);
var inst_30951 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30953 = (function (){var all_files = inst_30940;
var res_SINGLEQUOTE_ = inst_30943;
var res = inst_30944;
var files_not_loaded = inst_30946;
var dependencies_that_loaded = inst_30948;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30943,inst_30944,inst_30948,inst_30940,inst_30946,inst_30951,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30952){
var map__31082 = p__30952;
var map__31082__$1 = ((((!((map__31082 == null)))?((((map__31082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31082):map__31082);
var request_url = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30943,inst_30944,inst_30948,inst_30940,inst_30946,inst_30951,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30954 = cljs.core.reverse.call(null,inst_30948);
var inst_30955 = cljs.core.map.call(null,inst_30953,inst_30954);
var inst_30956 = cljs.core.pr_str.call(null,inst_30955);
var inst_30957 = figwheel.client.utils.log.call(null,inst_30956);
var state_31026__$1 = (function (){var statearr_31084 = state_31026;
(statearr_31084[(31)] = inst_30951);

return statearr_31084;
})();
var statearr_31085_31155 = state_31026__$1;
(statearr_31085_31155[(2)] = inst_30957);

(statearr_31085_31155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (35))){
var state_31026__$1 = state_31026;
var statearr_31086_31156 = state_31026__$1;
(statearr_31086_31156[(2)] = true);

(statearr_31086_31156[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (19))){
var inst_30930 = (state_31026[(12)]);
var inst_30936 = figwheel.client.file_reloading.expand_files.call(null,inst_30930);
var state_31026__$1 = state_31026;
var statearr_31087_31157 = state_31026__$1;
(statearr_31087_31157[(2)] = inst_30936);

(statearr_31087_31157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (11))){
var state_31026__$1 = state_31026;
var statearr_31088_31158 = state_31026__$1;
(statearr_31088_31158[(2)] = null);

(statearr_31088_31158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (9))){
var inst_30919 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31089_31159 = state_31026__$1;
(statearr_31089_31159[(2)] = inst_30919);

(statearr_31089_31159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (5))){
var inst_30889 = (state_31026[(7)]);
var inst_30890 = (state_31026[(10)]);
var inst_30892 = (inst_30890 < inst_30889);
var inst_30893 = inst_30892;
var state_31026__$1 = state_31026;
if(cljs.core.truth_(inst_30893)){
var statearr_31090_31160 = state_31026__$1;
(statearr_31090_31160[(1)] = (7));

} else {
var statearr_31091_31161 = state_31026__$1;
(statearr_31091_31161[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (14))){
var inst_30900 = (state_31026[(22)]);
var inst_30909 = cljs.core.first.call(null,inst_30900);
var inst_30910 = figwheel.client.file_reloading.eval_body.call(null,inst_30909,opts);
var inst_30911 = cljs.core.next.call(null,inst_30900);
var inst_30887 = inst_30911;
var inst_30888 = null;
var inst_30889 = (0);
var inst_30890 = (0);
var state_31026__$1 = (function (){var statearr_31092 = state_31026;
(statearr_31092[(7)] = inst_30889);

(statearr_31092[(8)] = inst_30888);

(statearr_31092[(32)] = inst_30910);

(statearr_31092[(9)] = inst_30887);

(statearr_31092[(10)] = inst_30890);

return statearr_31092;
})();
var statearr_31093_31162 = state_31026__$1;
(statearr_31093_31162[(2)] = null);

(statearr_31093_31162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (45))){
var state_31026__$1 = state_31026;
var statearr_31094_31163 = state_31026__$1;
(statearr_31094_31163[(2)] = null);

(statearr_31094_31163[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (26))){
var inst_30943 = (state_31026[(23)]);
var inst_30944 = (state_31026[(24)]);
var inst_30948 = (state_31026[(25)]);
var inst_30940 = (state_31026[(19)]);
var inst_30946 = (state_31026[(26)]);
var inst_30963 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30965 = (function (){var all_files = inst_30940;
var res_SINGLEQUOTE_ = inst_30943;
var res = inst_30944;
var files_not_loaded = inst_30946;
var dependencies_that_loaded = inst_30948;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30943,inst_30944,inst_30948,inst_30940,inst_30946,inst_30963,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30964){
var map__31095 = p__30964;
var map__31095__$1 = ((((!((map__31095 == null)))?((((map__31095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31095):map__31095);
var namespace = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30943,inst_30944,inst_30948,inst_30940,inst_30946,inst_30963,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30966 = cljs.core.map.call(null,inst_30965,inst_30944);
var inst_30967 = cljs.core.pr_str.call(null,inst_30966);
var inst_30968 = figwheel.client.utils.log.call(null,inst_30967);
var inst_30969 = (function (){var all_files = inst_30940;
var res_SINGLEQUOTE_ = inst_30943;
var res = inst_30944;
var files_not_loaded = inst_30946;
var dependencies_that_loaded = inst_30948;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30943,inst_30944,inst_30948,inst_30940,inst_30946,inst_30963,inst_30965,inst_30966,inst_30967,inst_30968,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30943,inst_30944,inst_30948,inst_30940,inst_30946,inst_30963,inst_30965,inst_30966,inst_30967,inst_30968,state_val_31027,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30970 = setTimeout(inst_30969,(10));
var state_31026__$1 = (function (){var statearr_31097 = state_31026;
(statearr_31097[(33)] = inst_30968);

(statearr_31097[(34)] = inst_30963);

return statearr_31097;
})();
var statearr_31098_31164 = state_31026__$1;
(statearr_31098_31164[(2)] = inst_30970);

(statearr_31098_31164[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (16))){
var state_31026__$1 = state_31026;
var statearr_31099_31165 = state_31026__$1;
(statearr_31099_31165[(2)] = reload_dependents);

(statearr_31099_31165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (38))){
var inst_30980 = (state_31026[(16)]);
var inst_30997 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30980);
var state_31026__$1 = state_31026;
var statearr_31100_31166 = state_31026__$1;
(statearr_31100_31166[(2)] = inst_30997);

(statearr_31100_31166[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (30))){
var state_31026__$1 = state_31026;
var statearr_31101_31167 = state_31026__$1;
(statearr_31101_31167[(2)] = null);

(statearr_31101_31167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (10))){
var inst_30900 = (state_31026[(22)]);
var inst_30902 = cljs.core.chunked_seq_QMARK_.call(null,inst_30900);
var state_31026__$1 = state_31026;
if(inst_30902){
var statearr_31102_31168 = state_31026__$1;
(statearr_31102_31168[(1)] = (13));

} else {
var statearr_31103_31169 = state_31026__$1;
(statearr_31103_31169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (18))){
var inst_30934 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
if(cljs.core.truth_(inst_30934)){
var statearr_31104_31170 = state_31026__$1;
(statearr_31104_31170[(1)] = (19));

} else {
var statearr_31105_31171 = state_31026__$1;
(statearr_31105_31171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (42))){
var state_31026__$1 = state_31026;
var statearr_31106_31172 = state_31026__$1;
(statearr_31106_31172[(2)] = null);

(statearr_31106_31172[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (37))){
var inst_30992 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31107_31173 = state_31026__$1;
(statearr_31107_31173[(2)] = inst_30992);

(statearr_31107_31173[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (8))){
var inst_30900 = (state_31026[(22)]);
var inst_30887 = (state_31026[(9)]);
var inst_30900__$1 = cljs.core.seq.call(null,inst_30887);
var state_31026__$1 = (function (){var statearr_31108 = state_31026;
(statearr_31108[(22)] = inst_30900__$1);

return statearr_31108;
})();
if(inst_30900__$1){
var statearr_31109_31174 = state_31026__$1;
(statearr_31109_31174[(1)] = (10));

} else {
var statearr_31110_31175 = state_31026__$1;
(statearr_31110_31175[(1)] = (11));

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
}
});})(c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20213__auto__,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto____0 = (function (){
var statearr_31114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31114[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto__);

(statearr_31114[(1)] = (1));

return statearr_31114;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto____1 = (function (state_31026){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_31026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e31115){if((e31115 instanceof Object)){
var ex__20217__auto__ = e31115;
var statearr_31116_31176 = state_31026;
(statearr_31116_31176[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31177 = state_31026;
state_31026 = G__31177;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto__ = function(state_31026){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto____1.call(this,state_31026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20280__auto__ = (function (){var statearr_31117 = f__20279__auto__.call(null);
(statearr_31117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto__);

return statearr_31117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto__,map__30872,map__30872__$1,opts,before_jsload,on_jsload,reload_dependents,map__30873,map__30873__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20278__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31180,link){
var map__31183 = p__31180;
var map__31183__$1 = ((((!((map__31183 == null)))?((((map__31183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31183):map__31183);
var file = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31183,map__31183__$1,file){
return (function (p1__31178_SHARP_,p2__31179_SHARP_){
if(cljs.core._EQ_.call(null,p1__31178_SHARP_,p2__31179_SHARP_)){
return p1__31178_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31183,map__31183__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31189){
var map__31190 = p__31189;
var map__31190__$1 = ((((!((map__31190 == null)))?((((map__31190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31190):map__31190);
var match_length = cljs.core.get.call(null,map__31190__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31190__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31185_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31185_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31192 = [];
var len__17376__auto___31195 = arguments.length;
var i__17377__auto___31196 = (0);
while(true){
if((i__17377__auto___31196 < len__17376__auto___31195)){
args31192.push((arguments[i__17377__auto___31196]));

var G__31197 = (i__17377__auto___31196 + (1));
i__17377__auto___31196 = G__31197;
continue;
} else {
}
break;
}

var G__31194 = args31192.length;
switch (G__31194) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31192.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31199_SHARP_,p2__31200_SHARP_){
return cljs.core.assoc.call(null,p1__31199_SHARP_,cljs.core.get.call(null,p2__31200_SHARP_,key),p2__31200_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31201){
var map__31204 = p__31201;
var map__31204__$1 = ((((!((map__31204 == null)))?((((map__31204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31204):map__31204);
var f_data = map__31204__$1;
var file = cljs.core.get.call(null,map__31204__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31206,files_msg){
var map__31213 = p__31206;
var map__31213__$1 = ((((!((map__31213 == null)))?((((map__31213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31213):map__31213);
var opts = map__31213__$1;
var on_cssload = cljs.core.get.call(null,map__31213__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31215_31219 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31216_31220 = null;
var count__31217_31221 = (0);
var i__31218_31222 = (0);
while(true){
if((i__31218_31222 < count__31217_31221)){
var f_31223 = cljs.core._nth.call(null,chunk__31216_31220,i__31218_31222);
figwheel.client.file_reloading.reload_css_file.call(null,f_31223);

var G__31224 = seq__31215_31219;
var G__31225 = chunk__31216_31220;
var G__31226 = count__31217_31221;
var G__31227 = (i__31218_31222 + (1));
seq__31215_31219 = G__31224;
chunk__31216_31220 = G__31225;
count__31217_31221 = G__31226;
i__31218_31222 = G__31227;
continue;
} else {
var temp__4425__auto___31228 = cljs.core.seq.call(null,seq__31215_31219);
if(temp__4425__auto___31228){
var seq__31215_31229__$1 = temp__4425__auto___31228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31215_31229__$1)){
var c__17121__auto___31230 = cljs.core.chunk_first.call(null,seq__31215_31229__$1);
var G__31231 = cljs.core.chunk_rest.call(null,seq__31215_31229__$1);
var G__31232 = c__17121__auto___31230;
var G__31233 = cljs.core.count.call(null,c__17121__auto___31230);
var G__31234 = (0);
seq__31215_31219 = G__31231;
chunk__31216_31220 = G__31232;
count__31217_31221 = G__31233;
i__31218_31222 = G__31234;
continue;
} else {
var f_31235 = cljs.core.first.call(null,seq__31215_31229__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31235);

var G__31236 = cljs.core.next.call(null,seq__31215_31229__$1);
var G__31237 = null;
var G__31238 = (0);
var G__31239 = (0);
seq__31215_31219 = G__31236;
chunk__31216_31220 = G__31237;
count__31217_31221 = G__31238;
i__31218_31222 = G__31239;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31213,map__31213__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31213,map__31213__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1444761117784