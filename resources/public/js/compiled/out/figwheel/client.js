// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29070 = cljs.core._EQ_;
var expr__29071 = (function (){var or__16318__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29070.call(null,"true",expr__29071))){
return true;
} else {
if(cljs.core.truth_(pred__29070.call(null,"false",expr__29071))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29071)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29073__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29074__i = 0, G__29074__a = new Array(arguments.length -  0);
while (G__29074__i < G__29074__a.length) {G__29074__a[G__29074__i] = arguments[G__29074__i + 0]; ++G__29074__i;}
  args = new cljs.core.IndexedSeq(G__29074__a,0);
} 
return G__29073__delegate.call(this,args);};
G__29073.cljs$lang$maxFixedArity = 0;
G__29073.cljs$lang$applyTo = (function (arglist__29075){
var args = cljs.core.seq(arglist__29075);
return G__29073__delegate(args);
});
G__29073.cljs$core$IFn$_invoke$arity$variadic = G__29073__delegate;
return G__29073;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29076){
var map__29079 = p__29076;
var map__29079__$1 = ((((!((map__29079 == null)))?((((map__29079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29079):map__29079);
var message = cljs.core.get.call(null,map__29079__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29079__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16318__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16306__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16306__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16306__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20278__auto___29241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___29241,ch){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___29241,ch){
return (function (state_29210){
var state_val_29211 = (state_29210[(1)]);
if((state_val_29211 === (7))){
var inst_29206 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29212_29242 = state_29210__$1;
(statearr_29212_29242[(2)] = inst_29206);

(statearr_29212_29242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (1))){
var state_29210__$1 = state_29210;
var statearr_29213_29243 = state_29210__$1;
(statearr_29213_29243[(2)] = null);

(statearr_29213_29243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (4))){
var inst_29163 = (state_29210[(7)]);
var inst_29163__$1 = (state_29210[(2)]);
var state_29210__$1 = (function (){var statearr_29214 = state_29210;
(statearr_29214[(7)] = inst_29163__$1);

return statearr_29214;
})();
if(cljs.core.truth_(inst_29163__$1)){
var statearr_29215_29244 = state_29210__$1;
(statearr_29215_29244[(1)] = (5));

} else {
var statearr_29216_29245 = state_29210__$1;
(statearr_29216_29245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (15))){
var inst_29170 = (state_29210[(8)]);
var inst_29185 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29170);
var inst_29186 = cljs.core.first.call(null,inst_29185);
var inst_29187 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29186);
var inst_29188 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29187)].join('');
var inst_29189 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29188);
var state_29210__$1 = state_29210;
var statearr_29217_29246 = state_29210__$1;
(statearr_29217_29246[(2)] = inst_29189);

(statearr_29217_29246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (13))){
var inst_29194 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29218_29247 = state_29210__$1;
(statearr_29218_29247[(2)] = inst_29194);

(statearr_29218_29247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (6))){
var state_29210__$1 = state_29210;
var statearr_29219_29248 = state_29210__$1;
(statearr_29219_29248[(2)] = null);

(statearr_29219_29248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (17))){
var inst_29192 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29220_29249 = state_29210__$1;
(statearr_29220_29249[(2)] = inst_29192);

(statearr_29220_29249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (3))){
var inst_29208 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29210__$1,inst_29208);
} else {
if((state_val_29211 === (12))){
var inst_29169 = (state_29210[(9)]);
var inst_29183 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29169,opts);
var state_29210__$1 = state_29210;
if(cljs.core.truth_(inst_29183)){
var statearr_29221_29250 = state_29210__$1;
(statearr_29221_29250[(1)] = (15));

} else {
var statearr_29222_29251 = state_29210__$1;
(statearr_29222_29251[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (2))){
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29210__$1,(4),ch);
} else {
if((state_val_29211 === (11))){
var inst_29170 = (state_29210[(8)]);
var inst_29175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29176 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29170);
var inst_29177 = cljs.core.async.timeout.call(null,(1000));
var inst_29178 = [inst_29176,inst_29177];
var inst_29179 = (new cljs.core.PersistentVector(null,2,(5),inst_29175,inst_29178,null));
var state_29210__$1 = state_29210;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29210__$1,(14),inst_29179);
} else {
if((state_val_29211 === (9))){
var inst_29170 = (state_29210[(8)]);
var inst_29196 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29197 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29170);
var inst_29198 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29197);
var inst_29199 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29198)].join('');
var inst_29200 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29199);
var state_29210__$1 = (function (){var statearr_29223 = state_29210;
(statearr_29223[(10)] = inst_29196);

return statearr_29223;
})();
var statearr_29224_29252 = state_29210__$1;
(statearr_29224_29252[(2)] = inst_29200);

(statearr_29224_29252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (5))){
var inst_29163 = (state_29210[(7)]);
var inst_29165 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29166 = (new cljs.core.PersistentArrayMap(null,2,inst_29165,null));
var inst_29167 = (new cljs.core.PersistentHashSet(null,inst_29166,null));
var inst_29168 = figwheel.client.focus_msgs.call(null,inst_29167,inst_29163);
var inst_29169 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29168);
var inst_29170 = cljs.core.first.call(null,inst_29168);
var inst_29171 = figwheel.client.autoload_QMARK_.call(null);
var state_29210__$1 = (function (){var statearr_29225 = state_29210;
(statearr_29225[(8)] = inst_29170);

(statearr_29225[(9)] = inst_29169);

return statearr_29225;
})();
if(cljs.core.truth_(inst_29171)){
var statearr_29226_29253 = state_29210__$1;
(statearr_29226_29253[(1)] = (8));

} else {
var statearr_29227_29254 = state_29210__$1;
(statearr_29227_29254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (14))){
var inst_29181 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29228_29255 = state_29210__$1;
(statearr_29228_29255[(2)] = inst_29181);

(statearr_29228_29255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (16))){
var state_29210__$1 = state_29210;
var statearr_29229_29256 = state_29210__$1;
(statearr_29229_29256[(2)] = null);

(statearr_29229_29256[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (10))){
var inst_29202 = (state_29210[(2)]);
var state_29210__$1 = (function (){var statearr_29230 = state_29210;
(statearr_29230[(11)] = inst_29202);

return statearr_29230;
})();
var statearr_29231_29257 = state_29210__$1;
(statearr_29231_29257[(2)] = null);

(statearr_29231_29257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (8))){
var inst_29169 = (state_29210[(9)]);
var inst_29173 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29169,opts);
var state_29210__$1 = state_29210;
if(cljs.core.truth_(inst_29173)){
var statearr_29232_29258 = state_29210__$1;
(statearr_29232_29258[(1)] = (11));

} else {
var statearr_29233_29259 = state_29210__$1;
(statearr_29233_29259[(1)] = (12));

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
});})(c__20278__auto___29241,ch))
;
return ((function (switch__20213__auto__,c__20278__auto___29241,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20214__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20214__auto____0 = (function (){
var statearr_29237 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29237[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20214__auto__);

(statearr_29237[(1)] = (1));

return statearr_29237;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20214__auto____1 = (function (state_29210){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_29210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e29238){if((e29238 instanceof Object)){
var ex__20217__auto__ = e29238;
var statearr_29239_29260 = state_29210;
(statearr_29239_29260[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29261 = state_29210;
state_29210 = G__29261;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20214__auto__ = function(state_29210){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20214__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20214__auto____1.call(this,state_29210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20214__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20214__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___29241,ch))
})();
var state__20280__auto__ = (function (){var statearr_29240 = f__20279__auto__.call(null);
(statearr_29240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___29241);

return statearr_29240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___29241,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29262_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29262_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29269 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29269){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29267 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29268 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29267,_STAR_print_newline_STAR_29268,base_path_29269){
return (function() { 
var G__29270__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29271__i = 0, G__29271__a = new Array(arguments.length -  0);
while (G__29271__i < G__29271__a.length) {G__29271__a[G__29271__i] = arguments[G__29271__i + 0]; ++G__29271__i;}
  args = new cljs.core.IndexedSeq(G__29271__a,0);
} 
return G__29270__delegate.call(this,args);};
G__29270.cljs$lang$maxFixedArity = 0;
G__29270.cljs$lang$applyTo = (function (arglist__29272){
var args = cljs.core.seq(arglist__29272);
return G__29270__delegate(args);
});
G__29270.cljs$core$IFn$_invoke$arity$variadic = G__29270__delegate;
return G__29270;
})()
;})(_STAR_print_fn_STAR_29267,_STAR_print_newline_STAR_29268,base_path_29269))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29268;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29267;
}}catch (e29266){if((e29266 instanceof Error)){
var e = e29266;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29269], null));
} else {
var e = e29266;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29269))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29273){
var map__29280 = p__29273;
var map__29280__$1 = ((((!((map__29280 == null)))?((((map__29280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29280):map__29280);
var opts = map__29280__$1;
var build_id = cljs.core.get.call(null,map__29280__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29280,map__29280__$1,opts,build_id){
return (function (p__29282){
var vec__29283 = p__29282;
var map__29284 = cljs.core.nth.call(null,vec__29283,(0),null);
var map__29284__$1 = ((((!((map__29284 == null)))?((((map__29284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29284):map__29284);
var msg = map__29284__$1;
var msg_name = cljs.core.get.call(null,map__29284__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29283,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29283,map__29284,map__29284__$1,msg,msg_name,_,map__29280,map__29280__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29283,map__29284,map__29284__$1,msg,msg_name,_,map__29280,map__29280__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29280,map__29280__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29290){
var vec__29291 = p__29290;
var map__29292 = cljs.core.nth.call(null,vec__29291,(0),null);
var map__29292__$1 = ((((!((map__29292 == null)))?((((map__29292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29292):map__29292);
var msg = map__29292__$1;
var msg_name = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29291,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29294){
var map__29304 = p__29294;
var map__29304__$1 = ((((!((map__29304 == null)))?((((map__29304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29304):map__29304);
var on_compile_warning = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29304,map__29304__$1,on_compile_warning,on_compile_fail){
return (function (p__29306){
var vec__29307 = p__29306;
var map__29308 = cljs.core.nth.call(null,vec__29307,(0),null);
var map__29308__$1 = ((((!((map__29308 == null)))?((((map__29308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29308):map__29308);
var msg = map__29308__$1;
var msg_name = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29307,(1));
var pred__29310 = cljs.core._EQ_;
var expr__29311 = msg_name;
if(cljs.core.truth_(pred__29310.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29311))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29310.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29311))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29304,map__29304__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto__,msg_hist,msg_names,msg){
return (function (state_29527){
var state_val_29528 = (state_29527[(1)]);
if((state_val_29528 === (7))){
var inst_29451 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29451)){
var statearr_29529_29575 = state_29527__$1;
(statearr_29529_29575[(1)] = (8));

} else {
var statearr_29530_29576 = state_29527__$1;
(statearr_29530_29576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (20))){
var inst_29521 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29531_29577 = state_29527__$1;
(statearr_29531_29577[(2)] = inst_29521);

(statearr_29531_29577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (27))){
var inst_29517 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29532_29578 = state_29527__$1;
(statearr_29532_29578[(2)] = inst_29517);

(statearr_29532_29578[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (1))){
var inst_29444 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29444)){
var statearr_29533_29579 = state_29527__$1;
(statearr_29533_29579[(1)] = (2));

} else {
var statearr_29534_29580 = state_29527__$1;
(statearr_29534_29580[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (24))){
var inst_29519 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29535_29581 = state_29527__$1;
(statearr_29535_29581[(2)] = inst_29519);

(statearr_29535_29581[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (4))){
var inst_29525 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29527__$1,inst_29525);
} else {
if((state_val_29528 === (15))){
var inst_29523 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29536_29582 = state_29527__$1;
(statearr_29536_29582[(2)] = inst_29523);

(statearr_29536_29582[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (21))){
var inst_29482 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29537_29583 = state_29527__$1;
(statearr_29537_29583[(2)] = inst_29482);

(statearr_29537_29583[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (31))){
var inst_29506 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29506)){
var statearr_29538_29584 = state_29527__$1;
(statearr_29538_29584[(1)] = (34));

} else {
var statearr_29539_29585 = state_29527__$1;
(statearr_29539_29585[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (32))){
var inst_29515 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29540_29586 = state_29527__$1;
(statearr_29540_29586[(2)] = inst_29515);

(statearr_29540_29586[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (33))){
var inst_29504 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29541_29587 = state_29527__$1;
(statearr_29541_29587[(2)] = inst_29504);

(statearr_29541_29587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (13))){
var inst_29465 = figwheel.client.heads_up.clear.call(null);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(16),inst_29465);
} else {
if((state_val_29528 === (22))){
var inst_29486 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29487 = figwheel.client.heads_up.append_message.call(null,inst_29486);
var state_29527__$1 = state_29527;
var statearr_29542_29588 = state_29527__$1;
(statearr_29542_29588[(2)] = inst_29487);

(statearr_29542_29588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (36))){
var inst_29513 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29543_29589 = state_29527__$1;
(statearr_29543_29589[(2)] = inst_29513);

(statearr_29543_29589[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (29))){
var inst_29497 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29544_29590 = state_29527__$1;
(statearr_29544_29590[(2)] = inst_29497);

(statearr_29544_29590[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (6))){
var inst_29446 = (state_29527[(7)]);
var state_29527__$1 = state_29527;
var statearr_29545_29591 = state_29527__$1;
(statearr_29545_29591[(2)] = inst_29446);

(statearr_29545_29591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (28))){
var inst_29493 = (state_29527[(2)]);
var inst_29494 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29495 = figwheel.client.heads_up.display_warning.call(null,inst_29494);
var state_29527__$1 = (function (){var statearr_29546 = state_29527;
(statearr_29546[(8)] = inst_29493);

return statearr_29546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(29),inst_29495);
} else {
if((state_val_29528 === (25))){
var inst_29491 = figwheel.client.heads_up.clear.call(null);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(28),inst_29491);
} else {
if((state_val_29528 === (34))){
var inst_29508 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(37),inst_29508);
} else {
if((state_val_29528 === (17))){
var inst_29473 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29547_29592 = state_29527__$1;
(statearr_29547_29592[(2)] = inst_29473);

(statearr_29547_29592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (3))){
var inst_29463 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29463)){
var statearr_29548_29593 = state_29527__$1;
(statearr_29548_29593[(1)] = (13));

} else {
var statearr_29549_29594 = state_29527__$1;
(statearr_29549_29594[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (12))){
var inst_29459 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29550_29595 = state_29527__$1;
(statearr_29550_29595[(2)] = inst_29459);

(statearr_29550_29595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (2))){
var inst_29446 = (state_29527[(7)]);
var inst_29446__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29527__$1 = (function (){var statearr_29551 = state_29527;
(statearr_29551[(7)] = inst_29446__$1);

return statearr_29551;
})();
if(cljs.core.truth_(inst_29446__$1)){
var statearr_29552_29596 = state_29527__$1;
(statearr_29552_29596[(1)] = (5));

} else {
var statearr_29553_29597 = state_29527__$1;
(statearr_29553_29597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (23))){
var inst_29489 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29489)){
var statearr_29554_29598 = state_29527__$1;
(statearr_29554_29598[(1)] = (25));

} else {
var statearr_29555_29599 = state_29527__$1;
(statearr_29555_29599[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (35))){
var state_29527__$1 = state_29527;
var statearr_29556_29600 = state_29527__$1;
(statearr_29556_29600[(2)] = null);

(statearr_29556_29600[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (19))){
var inst_29484 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29484)){
var statearr_29557_29601 = state_29527__$1;
(statearr_29557_29601[(1)] = (22));

} else {
var statearr_29558_29602 = state_29527__$1;
(statearr_29558_29602[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (11))){
var inst_29455 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29559_29603 = state_29527__$1;
(statearr_29559_29603[(2)] = inst_29455);

(statearr_29559_29603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (9))){
var inst_29457 = figwheel.client.heads_up.clear.call(null);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(12),inst_29457);
} else {
if((state_val_29528 === (5))){
var inst_29448 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29527__$1 = state_29527;
var statearr_29560_29604 = state_29527__$1;
(statearr_29560_29604[(2)] = inst_29448);

(statearr_29560_29604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (14))){
var inst_29475 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29475)){
var statearr_29561_29605 = state_29527__$1;
(statearr_29561_29605[(1)] = (18));

} else {
var statearr_29562_29606 = state_29527__$1;
(statearr_29562_29606[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (26))){
var inst_29499 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29499)){
var statearr_29563_29607 = state_29527__$1;
(statearr_29563_29607[(1)] = (30));

} else {
var statearr_29564_29608 = state_29527__$1;
(statearr_29564_29608[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (16))){
var inst_29467 = (state_29527[(2)]);
var inst_29468 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29469 = figwheel.client.format_messages.call(null,inst_29468);
var inst_29470 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29471 = figwheel.client.heads_up.display_error.call(null,inst_29469,inst_29470);
var state_29527__$1 = (function (){var statearr_29565 = state_29527;
(statearr_29565[(9)] = inst_29467);

return statearr_29565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(17),inst_29471);
} else {
if((state_val_29528 === (30))){
var inst_29501 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29502 = figwheel.client.heads_up.display_warning.call(null,inst_29501);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(33),inst_29502);
} else {
if((state_val_29528 === (10))){
var inst_29461 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29566_29609 = state_29527__$1;
(statearr_29566_29609[(2)] = inst_29461);

(statearr_29566_29609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (18))){
var inst_29477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29478 = figwheel.client.format_messages.call(null,inst_29477);
var inst_29479 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29480 = figwheel.client.heads_up.display_error.call(null,inst_29478,inst_29479);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(21),inst_29480);
} else {
if((state_val_29528 === (37))){
var inst_29510 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29567_29610 = state_29527__$1;
(statearr_29567_29610[(2)] = inst_29510);

(statearr_29567_29610[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (8))){
var inst_29453 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(11),inst_29453);
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
});})(c__20278__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20213__auto__,c__20278__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto____0 = (function (){
var statearr_29571 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29571[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto__);

(statearr_29571[(1)] = (1));

return statearr_29571;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto____1 = (function (state_29527){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_29527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e29572){if((e29572 instanceof Object)){
var ex__20217__auto__ = e29572;
var statearr_29573_29611 = state_29527;
(statearr_29573_29611[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29612 = state_29527;
state_29527 = G__29612;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto__ = function(state_29527){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto____1.call(this,state_29527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto__,msg_hist,msg_names,msg))
})();
var state__20280__auto__ = (function (){var statearr_29574 = f__20279__auto__.call(null);
(statearr_29574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto__);

return statearr_29574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto__,msg_hist,msg_names,msg))
);

return c__20278__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20278__auto___29675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto___29675,ch){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto___29675,ch){
return (function (state_29658){
var state_val_29659 = (state_29658[(1)]);
if((state_val_29659 === (1))){
var state_29658__$1 = state_29658;
var statearr_29660_29676 = state_29658__$1;
(statearr_29660_29676[(2)] = null);

(statearr_29660_29676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (2))){
var state_29658__$1 = state_29658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29658__$1,(4),ch);
} else {
if((state_val_29659 === (3))){
var inst_29656 = (state_29658[(2)]);
var state_29658__$1 = state_29658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29658__$1,inst_29656);
} else {
if((state_val_29659 === (4))){
var inst_29646 = (state_29658[(7)]);
var inst_29646__$1 = (state_29658[(2)]);
var state_29658__$1 = (function (){var statearr_29661 = state_29658;
(statearr_29661[(7)] = inst_29646__$1);

return statearr_29661;
})();
if(cljs.core.truth_(inst_29646__$1)){
var statearr_29662_29677 = state_29658__$1;
(statearr_29662_29677[(1)] = (5));

} else {
var statearr_29663_29678 = state_29658__$1;
(statearr_29663_29678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (5))){
var inst_29646 = (state_29658[(7)]);
var inst_29648 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29646);
var state_29658__$1 = state_29658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29658__$1,(8),inst_29648);
} else {
if((state_val_29659 === (6))){
var state_29658__$1 = state_29658;
var statearr_29664_29679 = state_29658__$1;
(statearr_29664_29679[(2)] = null);

(statearr_29664_29679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (7))){
var inst_29654 = (state_29658[(2)]);
var state_29658__$1 = state_29658;
var statearr_29665_29680 = state_29658__$1;
(statearr_29665_29680[(2)] = inst_29654);

(statearr_29665_29680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (8))){
var inst_29650 = (state_29658[(2)]);
var state_29658__$1 = (function (){var statearr_29666 = state_29658;
(statearr_29666[(8)] = inst_29650);

return statearr_29666;
})();
var statearr_29667_29681 = state_29658__$1;
(statearr_29667_29681[(2)] = null);

(statearr_29667_29681[(1)] = (2));


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
});})(c__20278__auto___29675,ch))
;
return ((function (switch__20213__auto__,c__20278__auto___29675,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20214__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20214__auto____0 = (function (){
var statearr_29671 = [null,null,null,null,null,null,null,null,null];
(statearr_29671[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20214__auto__);

(statearr_29671[(1)] = (1));

return statearr_29671;
});
var figwheel$client$heads_up_plugin_$_state_machine__20214__auto____1 = (function (state_29658){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_29658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e29672){if((e29672 instanceof Object)){
var ex__20217__auto__ = e29672;
var statearr_29673_29682 = state_29658;
(statearr_29673_29682[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29683 = state_29658;
state_29658 = G__29683;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20214__auto__ = function(state_29658){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20214__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20214__auto____1.call(this,state_29658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20214__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20214__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto___29675,ch))
})();
var state__20280__auto__ = (function (){var statearr_29674 = f__20279__auto__.call(null);
(statearr_29674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto___29675);

return statearr_29674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto___29675,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20278__auto__){
return (function (){
var f__20279__auto__ = (function (){var switch__20213__auto__ = ((function (c__20278__auto__){
return (function (state_29704){
var state_val_29705 = (state_29704[(1)]);
if((state_val_29705 === (1))){
var inst_29699 = cljs.core.async.timeout.call(null,(3000));
var state_29704__$1 = state_29704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29704__$1,(2),inst_29699);
} else {
if((state_val_29705 === (2))){
var inst_29701 = (state_29704[(2)]);
var inst_29702 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29704__$1 = (function (){var statearr_29706 = state_29704;
(statearr_29706[(7)] = inst_29701);

return statearr_29706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29704__$1,inst_29702);
} else {
return null;
}
}
});})(c__20278__auto__))
;
return ((function (switch__20213__auto__,c__20278__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20214__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20214__auto____0 = (function (){
var statearr_29710 = [null,null,null,null,null,null,null,null];
(statearr_29710[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20214__auto__);

(statearr_29710[(1)] = (1));

return statearr_29710;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20214__auto____1 = (function (state_29704){
while(true){
var ret_value__20215__auto__ = (function (){try{while(true){
var result__20216__auto__ = switch__20213__auto__.call(null,state_29704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20216__auto__;
}
break;
}
}catch (e29711){if((e29711 instanceof Object)){
var ex__20217__auto__ = e29711;
var statearr_29712_29714 = state_29704;
(statearr_29712_29714[(5)] = ex__20217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29715 = state_29704;
state_29704 = G__29715;
continue;
} else {
return ret_value__20215__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20214__auto__ = function(state_29704){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20214__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20214__auto____1.call(this,state_29704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20214__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20214__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20214__auto__;
})()
;})(switch__20213__auto__,c__20278__auto__))
})();
var state__20280__auto__ = (function (){var statearr_29713 = f__20279__auto__.call(null);
(statearr_29713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20278__auto__);

return statearr_29713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20280__auto__);
});})(c__20278__auto__))
);

return c__20278__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29716){
var map__29723 = p__29716;
var map__29723__$1 = ((((!((map__29723 == null)))?((((map__29723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29723):map__29723);
var ed = map__29723__$1;
var formatted_exception = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29725_29729 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29726_29730 = null;
var count__29727_29731 = (0);
var i__29728_29732 = (0);
while(true){
if((i__29728_29732 < count__29727_29731)){
var msg_29733 = cljs.core._nth.call(null,chunk__29726_29730,i__29728_29732);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29733);

var G__29734 = seq__29725_29729;
var G__29735 = chunk__29726_29730;
var G__29736 = count__29727_29731;
var G__29737 = (i__29728_29732 + (1));
seq__29725_29729 = G__29734;
chunk__29726_29730 = G__29735;
count__29727_29731 = G__29736;
i__29728_29732 = G__29737;
continue;
} else {
var temp__4425__auto___29738 = cljs.core.seq.call(null,seq__29725_29729);
if(temp__4425__auto___29738){
var seq__29725_29739__$1 = temp__4425__auto___29738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29725_29739__$1)){
var c__17121__auto___29740 = cljs.core.chunk_first.call(null,seq__29725_29739__$1);
var G__29741 = cljs.core.chunk_rest.call(null,seq__29725_29739__$1);
var G__29742 = c__17121__auto___29740;
var G__29743 = cljs.core.count.call(null,c__17121__auto___29740);
var G__29744 = (0);
seq__29725_29729 = G__29741;
chunk__29726_29730 = G__29742;
count__29727_29731 = G__29743;
i__29728_29732 = G__29744;
continue;
} else {
var msg_29745 = cljs.core.first.call(null,seq__29725_29739__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29745);

var G__29746 = cljs.core.next.call(null,seq__29725_29739__$1);
var G__29747 = null;
var G__29748 = (0);
var G__29749 = (0);
seq__29725_29729 = G__29746;
chunk__29726_29730 = G__29747;
count__29727_29731 = G__29748;
i__29728_29732 = G__29749;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29750){
var map__29753 = p__29750;
var map__29753__$1 = ((((!((map__29753 == null)))?((((map__29753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29753):map__29753);
var w = map__29753__$1;
var message = cljs.core.get.call(null,map__29753__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16306__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16306__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16306__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29761 = cljs.core.seq.call(null,plugins);
var chunk__29762 = null;
var count__29763 = (0);
var i__29764 = (0);
while(true){
if((i__29764 < count__29763)){
var vec__29765 = cljs.core._nth.call(null,chunk__29762,i__29764);
var k = cljs.core.nth.call(null,vec__29765,(0),null);
var plugin = cljs.core.nth.call(null,vec__29765,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29767 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29761,chunk__29762,count__29763,i__29764,pl_29767,vec__29765,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29767.call(null,msg_hist);
});})(seq__29761,chunk__29762,count__29763,i__29764,pl_29767,vec__29765,k,plugin))
);
} else {
}

var G__29768 = seq__29761;
var G__29769 = chunk__29762;
var G__29770 = count__29763;
var G__29771 = (i__29764 + (1));
seq__29761 = G__29768;
chunk__29762 = G__29769;
count__29763 = G__29770;
i__29764 = G__29771;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29761);
if(temp__4425__auto__){
var seq__29761__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29761__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__29761__$1);
var G__29772 = cljs.core.chunk_rest.call(null,seq__29761__$1);
var G__29773 = c__17121__auto__;
var G__29774 = cljs.core.count.call(null,c__17121__auto__);
var G__29775 = (0);
seq__29761 = G__29772;
chunk__29762 = G__29773;
count__29763 = G__29774;
i__29764 = G__29775;
continue;
} else {
var vec__29766 = cljs.core.first.call(null,seq__29761__$1);
var k = cljs.core.nth.call(null,vec__29766,(0),null);
var plugin = cljs.core.nth.call(null,vec__29766,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29776 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29761,chunk__29762,count__29763,i__29764,pl_29776,vec__29766,k,plugin,seq__29761__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29776.call(null,msg_hist);
});})(seq__29761,chunk__29762,count__29763,i__29764,pl_29776,vec__29766,k,plugin,seq__29761__$1,temp__4425__auto__))
);
} else {
}

var G__29777 = cljs.core.next.call(null,seq__29761__$1);
var G__29778 = null;
var G__29779 = (0);
var G__29780 = (0);
seq__29761 = G__29777;
chunk__29762 = G__29778;
count__29763 = G__29779;
i__29764 = G__29780;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29781 = [];
var len__17376__auto___29784 = arguments.length;
var i__17377__auto___29785 = (0);
while(true){
if((i__17377__auto___29785 < len__17376__auto___29784)){
args29781.push((arguments[i__17377__auto___29785]));

var G__29786 = (i__17377__auto___29785 + (1));
i__17377__auto___29785 = G__29786;
continue;
} else {
}
break;
}

var G__29783 = args29781.length;
switch (G__29783) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29781.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17383__auto__ = [];
var len__17376__auto___29792 = arguments.length;
var i__17377__auto___29793 = (0);
while(true){
if((i__17377__auto___29793 < len__17376__auto___29792)){
args__17383__auto__.push((arguments[i__17377__auto___29793]));

var G__29794 = (i__17377__auto___29793 + (1));
i__17377__auto___29793 = G__29794;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((0) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17384__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29789){
var map__29790 = p__29789;
var map__29790__$1 = ((((!((map__29790 == null)))?((((map__29790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29790):map__29790);
var opts = map__29790__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29788){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29788));
});

//# sourceMappingURL=client.js.map?rel=1444761115976