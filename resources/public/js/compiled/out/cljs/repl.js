// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30180_30194 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30181_30195 = null;
var count__30182_30196 = (0);
var i__30183_30197 = (0);
while(true){
if((i__30183_30197 < count__30182_30196)){
var f_30198 = cljs.core._nth.call(null,chunk__30181_30195,i__30183_30197);
cljs.core.println.call(null,"  ",f_30198);

var G__30199 = seq__30180_30194;
var G__30200 = chunk__30181_30195;
var G__30201 = count__30182_30196;
var G__30202 = (i__30183_30197 + (1));
seq__30180_30194 = G__30199;
chunk__30181_30195 = G__30200;
count__30182_30196 = G__30201;
i__30183_30197 = G__30202;
continue;
} else {
var temp__4425__auto___30203 = cljs.core.seq.call(null,seq__30180_30194);
if(temp__4425__auto___30203){
var seq__30180_30204__$1 = temp__4425__auto___30203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30180_30204__$1)){
var c__17121__auto___30205 = cljs.core.chunk_first.call(null,seq__30180_30204__$1);
var G__30206 = cljs.core.chunk_rest.call(null,seq__30180_30204__$1);
var G__30207 = c__17121__auto___30205;
var G__30208 = cljs.core.count.call(null,c__17121__auto___30205);
var G__30209 = (0);
seq__30180_30194 = G__30206;
chunk__30181_30195 = G__30207;
count__30182_30196 = G__30208;
i__30183_30197 = G__30209;
continue;
} else {
var f_30210 = cljs.core.first.call(null,seq__30180_30204__$1);
cljs.core.println.call(null,"  ",f_30210);

var G__30211 = cljs.core.next.call(null,seq__30180_30204__$1);
var G__30212 = null;
var G__30213 = (0);
var G__30214 = (0);
seq__30180_30194 = G__30211;
chunk__30181_30195 = G__30212;
count__30182_30196 = G__30213;
i__30183_30197 = G__30214;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30215 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16318__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30215);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30215)))?cljs.core.second.call(null,arglists_30215):arglists_30215));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30184 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30185 = null;
var count__30186 = (0);
var i__30187 = (0);
while(true){
if((i__30187 < count__30186)){
var vec__30188 = cljs.core._nth.call(null,chunk__30185,i__30187);
var name = cljs.core.nth.call(null,vec__30188,(0),null);
var map__30189 = cljs.core.nth.call(null,vec__30188,(1),null);
var map__30189__$1 = ((((!((map__30189 == null)))?((((map__30189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30189):map__30189);
var doc = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30216 = seq__30184;
var G__30217 = chunk__30185;
var G__30218 = count__30186;
var G__30219 = (i__30187 + (1));
seq__30184 = G__30216;
chunk__30185 = G__30217;
count__30186 = G__30218;
i__30187 = G__30219;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30184);
if(temp__4425__auto__){
var seq__30184__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30184__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__30184__$1);
var G__30220 = cljs.core.chunk_rest.call(null,seq__30184__$1);
var G__30221 = c__17121__auto__;
var G__30222 = cljs.core.count.call(null,c__17121__auto__);
var G__30223 = (0);
seq__30184 = G__30220;
chunk__30185 = G__30221;
count__30186 = G__30222;
i__30187 = G__30223;
continue;
} else {
var vec__30191 = cljs.core.first.call(null,seq__30184__$1);
var name = cljs.core.nth.call(null,vec__30191,(0),null);
var map__30192 = cljs.core.nth.call(null,vec__30191,(1),null);
var map__30192__$1 = ((((!((map__30192 == null)))?((((map__30192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30192):map__30192);
var doc = cljs.core.get.call(null,map__30192__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30192__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30224 = cljs.core.next.call(null,seq__30184__$1);
var G__30225 = null;
var G__30226 = (0);
var G__30227 = (0);
seq__30184 = G__30224;
chunk__30185 = G__30225;
count__30186 = G__30226;
i__30187 = G__30227;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1444761116902