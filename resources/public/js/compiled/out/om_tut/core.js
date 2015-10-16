// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof om_tut.core.app_state !== 'undefined'){
} else {
om_tut.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Ben",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"ben@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.eduit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Resoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"D",new cljs.core.Keyword(null,"last","last",1105735132),"Effect",new cljs.core.Keyword(null,"email","email",1415816706),"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"E",new cljs.core.Keyword(null,"last","last",1105735132),"Tweakit",new cljs.core.Keyword(null,"email","email",1415816706),"morebugs@mit.edu"], null)], null)], null));
}
om_tut.core.contacts_view = (function om_tut$core$contacts_view(data,owner){
if(typeof om_tut.core.t_om_tut$core22093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
om_tut.core.t_om_tut$core22093 = (function (contacts_view,data,owner,meta22094){
this.contacts_view = contacts_view;
this.data = data;
this.owner = owner;
this.meta22094 = meta22094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_tut.core.t_om_tut$core22093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22095,meta22094__$1){
var self__ = this;
var _22095__$1 = this;
return (new om_tut.core.t_om_tut$core22093(self__.contacts_view,self__.data,self__.owner,meta22094__$1));
});

om_tut.core.t_om_tut$core22093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22095){
var self__ = this;
var _22095__$1 = this;
return self__.meta22094;
});

om_tut.core.t_om_tut$core22093.prototype.om$core$IInitState$ = true;

om_tut.core.t_om_tut$core22093.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null)], null);
});

om_tut.core.t_om_tut$core22093.prototype.om$core$IWillMount$ = true;

om_tut.core.t_om_tut$core22093.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var c__19977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19977__auto__,delete$,___$1){
return (function (){
var f__19978__auto__ = (function (){var switch__19956__auto__ = ((function (c__19977__auto__,delete$,___$1){
return (function (state_22105){
var state_val_22106 = (state_22105[(1)]);
if((state_val_22106 === (1))){
var state_22105__$1 = state_22105;
var statearr_22107_22117 = state_22105__$1;
(statearr_22107_22117[(2)] = null);

(statearr_22107_22117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (2))){
var state_22105__$1 = state_22105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22105__$1,(4),delete$);
} else {
if((state_val_22106 === (3))){
var inst_22103 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22105__$1,inst_22103);
} else {
if((state_val_22106 === (4))){
var inst_22098 = (state_22105[(2)]);
var inst_22099 = (function (){var contact = inst_22098;
return ((function (contact,inst_22098,state_val_22106,c__19977__auto__,delete$,___$1){
return (function (xs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_22098,state_val_22106,c__19977__auto__,delete$,___$1){
return (function (p1__22068_SHARP_){
return cljs.core._EQ_.call(null,contact,p1__22068_SHARP_);
});})(contact,inst_22098,state_val_22106,c__19977__auto__,delete$,___$1))
,xs));
});
;})(contact,inst_22098,state_val_22106,c__19977__auto__,delete$,___$1))
})();
var inst_22100 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"contacts","contacts",333503174),inst_22099);
var state_22105__$1 = (function (){var statearr_22108 = state_22105;
(statearr_22108[(7)] = inst_22100);

return statearr_22108;
})();
var statearr_22109_22118 = state_22105__$1;
(statearr_22109_22118[(2)] = null);

(statearr_22109_22118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19977__auto__,delete$,___$1))
;
return ((function (switch__19956__auto__,c__19977__auto__,delete$,___$1){
return (function() {
var om_tut$core$contacts_view_$_state_machine__19957__auto__ = null;
var om_tut$core$contacts_view_$_state_machine__19957__auto____0 = (function (){
var statearr_22113 = [null,null,null,null,null,null,null,null];
(statearr_22113[(0)] = om_tut$core$contacts_view_$_state_machine__19957__auto__);

(statearr_22113[(1)] = (1));

return statearr_22113;
});
var om_tut$core$contacts_view_$_state_machine__19957__auto____1 = (function (state_22105){
while(true){
var ret_value__19958__auto__ = (function (){try{while(true){
var result__19959__auto__ = switch__19956__auto__.call(null,state_22105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19959__auto__;
}
break;
}
}catch (e22114){if((e22114 instanceof Object)){
var ex__19960__auto__ = e22114;
var statearr_22115_22119 = state_22105;
(statearr_22115_22119[(5)] = ex__19960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22120 = state_22105;
state_22105 = G__22120;
continue;
} else {
return ret_value__19958__auto__;
}
break;
}
});
om_tut$core$contacts_view_$_state_machine__19957__auto__ = function(state_22105){
switch(arguments.length){
case 0:
return om_tut$core$contacts_view_$_state_machine__19957__auto____0.call(this);
case 1:
return om_tut$core$contacts_view_$_state_machine__19957__auto____1.call(this,state_22105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tut$core$contacts_view_$_state_machine__19957__auto__.cljs$core$IFn$_invoke$arity$0 = om_tut$core$contacts_view_$_state_machine__19957__auto____0;
om_tut$core$contacts_view_$_state_machine__19957__auto__.cljs$core$IFn$_invoke$arity$1 = om_tut$core$contacts_view_$_state_machine__19957__auto____1;
return om_tut$core$contacts_view_$_state_machine__19957__auto__;
})()
;})(switch__19956__auto__,c__19977__auto__,delete$,___$1))
})();
var state__19979__auto__ = (function (){var statearr_22116 = f__19978__auto__.call(null);
(statearr_22116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19977__auto__);

return statearr_22116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19979__auto__);
});})(c__19977__auto__,delete$,___$1))
);

return c__19977__auto__;
});

om_tut.core.t_om_tut$core22093.prototype.om$core$IRenderState$ = true;

om_tut.core.t_om_tut$core22093.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h2(null,"Contact list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,om_tut.core.contact_view,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null))),React.DOM.div(null,om.dom.input.call(null,{"type": "text", "ref": "new-contact"}),React.DOM.button({"onClick": ((function (this$__$1){
return (function (){
return om_tut.core.add_contact.call(null,self__.data,self__.owner);
});})(this$__$1))
},"Add contact")));
});

om_tut.core.t_om_tut$core22093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"contacts-view","contacts-view",-1128678803,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta22094","meta22094",-442200303,null)], null);
});

om_tut.core.t_om_tut$core22093.cljs$lang$type = true;

om_tut.core.t_om_tut$core22093.cljs$lang$ctorStr = "om-tut.core/t_om_tut$core22093";

om_tut.core.t_om_tut$core22093.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"om-tut.core/t_om_tut$core22093");
});

om_tut.core.__GT_t_om_tut$core22093 = (function om_tut$core$contacts_view_$___GT_t_om_tut$core22093(contacts_view__$1,data__$1,owner__$1,meta22094){
return (new om_tut.core.t_om_tut$core22093(contacts_view__$1,data__$1,owner__$1,meta22094));
});

}

return (new om_tut.core.t_om_tut$core22093(om_tut$core$contacts_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.middle_name = (function om_tut$core$middle_name(p__22121){
var map__22124 = p__22121;
var map__22124__$1 = ((((!((map__22124 == null)))?((((map__22124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22124):map__22124);
var middle = cljs.core.get.call(null,map__22124__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var middle_initial = cljs.core.get.call(null,map__22124__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));
if(cljs.core.truth_(middle)){
return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else {
if(cljs.core.truth_(middle_initial)){
return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else {
return null;
}
}
});
om_tut.core.display_name = (function om_tut$core$display_name(p__22126){
var map__22129 = p__22126;
var map__22129__$1 = ((((!((map__22129 == null)))?((((map__22129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22129):map__22129);
var contact = map__22129__$1;
var first = cljs.core.get.call(null,map__22129__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__22129__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(om_tut.core.middle_name.call(null,contact))].join('');
});
om_tut.core.contact_view = (function om_tut$core$contact_view(contact,owner){
if(typeof om_tut.core.t_om_tut$core22137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_tut.core.t_om_tut$core22137 = (function (contact_view,contact,owner,meta22138){
this.contact_view = contact_view;
this.contact = contact;
this.owner = owner;
this.meta22138 = meta22138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_tut.core.t_om_tut$core22137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22139,meta22138__$1){
var self__ = this;
var _22139__$1 = this;
return (new om_tut.core.t_om_tut$core22137(self__.contact_view,self__.contact,self__.owner,meta22138__$1));
});

om_tut.core.t_om_tut$core22137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22139){
var self__ = this;
var _22139__$1 = this;
return self__.meta22138;
});

om_tut.core.t_om_tut$core22137.prototype.om$core$IRenderState$ = true;

om_tut.core.t_om_tut$core22137.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22140){
var self__ = this;
var map__22141 = p__22140;
var map__22141__$1 = ((((!((map__22141 == null)))?((((map__22141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22141):map__22141);
var delete$ = cljs.core.get.call(null,map__22141__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var this$__$1 = this;
return React.DOM.li(null,React.DOM.span(null,om_tut.core.display_name.call(null,self__.contact)),React.DOM.button({"onClick": ((function (this$__$1,map__22141,map__22141__$1,delete$){
return (function (e){
return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
});})(this$__$1,map__22141,map__22141__$1,delete$))
},"Delete"));
});

om_tut.core.t_om_tut$core22137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"contact-view","contact-view",1690125007,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"contact","contact",-2045342397,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"contact","contact",-2045342397,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta22138","meta22138",602360856,null)], null);
});

om_tut.core.t_om_tut$core22137.cljs$lang$type = true;

om_tut.core.t_om_tut$core22137.cljs$lang$ctorStr = "om-tut.core/t_om_tut$core22137";

om_tut.core.t_om_tut$core22137.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"om-tut.core/t_om_tut$core22137");
});

om_tut.core.__GT_t_om_tut$core22137 = (function om_tut$core$contact_view_$___GT_t_om_tut$core22137(contact_view__$1,contact__$1,owner__$1,meta22138){
return (new om_tut.core.t_om_tut$core22137(contact_view__$1,contact__$1,owner__$1,meta22138));
});

}

return (new om_tut.core.t_om_tut$core22137(om_tut$core$contact_view,contact,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.parse_contact = (function om_tut$core$parse_contact(contact_str){
var vec__22146 = clojure.string.split.call(null,contact_str,/\s+/);
var first = cljs.core.nth.call(null,vec__22146,(0),null);
var middle = cljs.core.nth.call(null,vec__22146,(1),null);
var last = cljs.core.nth.call(null,vec__22146,(2),null);
var parts = vec__22146;
var vec__22147 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));
var first__$1 = cljs.core.nth.call(null,vec__22147,(0),null);
var last__$1 = cljs.core.nth.call(null,vec__22147,(1),null);
var middle__$1 = cljs.core.nth.call(null,vec__22147,(2),null);
var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);
var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):(0));
if((cljs.core.count.call(null,parts) >= (2))){
var G__22148 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),first__$1,new cljs.core.Keyword(null,"last","last",1105735132),last__$1], null);
var G__22148__$1 = (((c === (1)))?cljs.core.assoc.call(null,G__22148,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),middle__$2):G__22148);
var G__22148__$2 = (((c >= (2)))?cljs.core.assoc.call(null,G__22148__$1,new cljs.core.Keyword(null,"middle","middle",-701029031),middle__$2):G__22148__$1);
return G__22148__$2;
} else {
return null;
}
});
om_tut.core.add_contact = (function om_tut$core$add_contact(data,owner){
var new_contact = om_tut.core.parse_contact.call(null,om.core.get_node.call(null,owner,"new-contact").value);
if(cljs.core.truth_(new_contact)){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"contacts","contacts",333503174),((function (new_contact){
return (function (p1__22149_SHARP_){
return cljs.core.conj.call(null,p1__22149_SHARP_,new_contact);
});})(new_contact))
);
} else {
return null;
}
});
om.core.root.call(null,om_tut.core.contacts_view,om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("contacts")], null));
om_tut.core.on_js_reload = (function om_tut$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1444761981125