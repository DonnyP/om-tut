// Compiled by ClojureScript 1.7.122 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.display_name[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core.display_name["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.init_state[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core.init_state["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.should_update[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,next_props,next_state);
} else {
var m__16974__auto____$1 = (om.core.should_update["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.will_mount[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core.will_mount["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.did_mount[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core.did_mount["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.will_unmount[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.will_update[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,next_props,next_state);
} else {
var m__16974__auto____$1 = (om.core.will_update["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.did_update[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__16974__auto____$1 = (om.core.did_update["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.will_receive_props[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,next_props);
} else {
var m__16974__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.render[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core.render["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.render_props[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,props,state);
} else {
var m__16974__auto____$1 = (om.core.render_props["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core.render_state[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,state);
} else {
var m__16974__auto____$1 = (om.core.render_state["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__16974__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args25490 = [];
var len__17376__auto___25493 = arguments.length;
var i__17377__auto___25494 = (0);
while(true){
if((i__17377__auto___25494 < len__17376__auto___25493)){
args25490.push((arguments[i__17377__auto___25494]));

var G__25495 = (i__17377__auto___25494 + (1));
i__17377__auto___25494 = G__25495;
continue;
} else {
}
break;
}

var G__25492 = args25490.length;
switch (G__25492) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25490.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._get_state[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core._get_state["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._get_state[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,ks);
} else {
var m__16974__auto____$1 = (om.core._get_state["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args25497 = [];
var len__17376__auto___25500 = arguments.length;
var i__17377__auto___25501 = (0);
while(true){
if((i__17377__auto___25501 < len__17376__auto___25500)){
args25497.push((arguments[i__17377__auto___25501]));

var G__25502 = (i__17377__auto___25501 + (1));
i__17377__auto___25501 = G__25502;
continue;
} else {
}
break;
}

var G__25499 = args25497.length;
switch (G__25499) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25497.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._get_render_state[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._get_render_state[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,ks);
} else {
var m__16974__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args25504 = [];
var len__17376__auto___25507 = arguments.length;
var i__17377__auto___25508 = (0);
while(true){
if((i__17377__auto___25508 < len__17376__auto___25507)){
args25504.push((arguments[i__17377__auto___25508]));

var G__25509 = (i__17377__auto___25508 + (1));
i__17377__auto___25508 = G__25509;
continue;
} else {
}
break;
}

var G__25506 = args25504.length;
switch (G__25506) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25504.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,val,render);
} else {
var m__16974__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,ks,val,render);
} else {
var m__16974__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._get_queue[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core._get_queue["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,c);
} else {
var m__16974__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__16973__auto__ = (((x == null))?null:x);
var m__16974__auto__ = (om.core._value[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,x);
} else {
var m__16974__auto____$1 = (om.core._value["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__16973__auto__ = (((cursor == null))?null:cursor);
var m__16974__auto__ = (om.core._path[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,cursor);
} else {
var m__16974__auto____$1 = (om.core._path["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__16973__auto__ = (((cursor == null))?null:cursor);
var m__16974__auto__ = (om.core._state[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,cursor);
} else {
var m__16974__auto____$1 = (om.core._state["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args25511 = [];
var len__17376__auto___25514 = arguments.length;
var i__17377__auto___25515 = (0);
while(true){
if((i__17377__auto___25515 < len__17376__auto___25514)){
args25511.push((arguments[i__17377__auto___25515]));

var G__25516 = (i__17377__auto___25515 + (1));
i__17377__auto___25515 = G__25516;
continue;
} else {
}
break;
}

var G__25513 = args25511.length;
switch (G__25513) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25511.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__16973__auto__ = (((value == null))?null:value);
var m__16974__auto__ = (om.core._to_cursor[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,value,state);
} else {
var m__16974__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__16973__auto__ = (((value == null))?null:value);
var m__16974__auto__ = (om.core._to_cursor[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,value,state,path);
} else {
var m__16974__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__16973__auto__ = (((cursor == null))?null:cursor);
var m__16974__auto__ = (om.core._derive[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,cursor,derived,state,path);
} else {
var m__16974__auto____$1 = (om.core._derive["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__16973__auto__ = (((cursor == null))?null:cursor);
var m__16974__auto__ = (om.core._transact_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,cursor,korks,f,tag);
} else {
var m__16974__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__16973__auto__ = (((x == null))?null:x);
var m__16974__auto__ = (om.core._listen_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,x,key,tx_listen);
} else {
var m__16974__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__16973__auto__ = (((x == null))?null:x);
var m__16974__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,x,key);
} else {
var m__16974__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__16973__auto__ = (((x == null))?null:x);
var m__16974__auto__ = (om.core._notify_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__16974__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,id,p,val);
} else {
var m__16974__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,id,p);
} else {
var m__16974__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,id);
} else {
var m__16974__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._get_property[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,id,p);
} else {
var m__16974__auto____$1 = (om.core._get_property["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__16973__auto__ = (((cursor == null))?null:cursor);
var m__16974__auto__ = (om.core._root_key[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,cursor);
} else {
var m__16974__auto____$1 = (om.core._root_key["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._adapt[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,other);
} else {
var m__16974__auto____$1 = (om.core._adapt["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,c);
} else {
var m__16974__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$,c);
} else {
var m__16974__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__16973__auto__ = (((this$ == null))?null:this$);
var m__16974__auto__ = (om.core._get_deps[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,this$);
} else {
var m__16974__auto____$1 = (om.core._get_deps["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args25522 = [];
var len__17376__auto___25526 = arguments.length;
var i__17377__auto___25527 = (0);
while(true){
if((i__17377__auto___25527 < len__17376__auto___25526)){
args25522.push((arguments[i__17377__auto___25527]));

var G__25528 = (i__17377__auto___25527 + (1));
i__17377__auto___25527 = G__25528;
continue;
} else {
}
break;
}

var G__25524 = args25522.length;
switch (G__25524) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25522.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__25525 = (x.props["__om_cursor"]);
var G__25525__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__25525,korks__$1):G__25525);
return G__25525__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args25530 = [];
var len__17376__auto___25533 = arguments.length;
var i__17377__auto___25534 = (0);
while(true){
if((i__17377__auto___25534 < len__17376__auto___25533)){
args25530.push((arguments[i__17377__auto___25534]));

var G__25535 = (i__17377__auto___25534 + (1));
i__17377__auto___25534 = G__25535;
continue;
} else {
}
break;
}

var G__25532 = args25530.length;
switch (G__25532) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25530.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args25537 = [];
var len__17376__auto___25540 = arguments.length;
var i__17377__auto___25541 = (0);
while(true){
if((i__17377__auto___25541 < len__17376__auto___25540)){
args25537.push((arguments[i__17377__auto___25541]));

var G__25542 = (i__17377__auto___25541 + (1));
i__17377__auto___25541 = G__25542;
continue;
} else {
}
break;
}

var G__25539 = args25537.length;
switch (G__25539) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25537.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__25545 = state;
(G__25545["__om_prev_state"] = (state["__om_state"]));

(G__25545["__om_state"] = pending_state);

(G__25545["__om_pending_state"] = null);

return G__25545;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args25546 = [];
var len__17376__auto___25549 = arguments.length;
var i__17377__auto___25550 = (0);
while(true){
if((i__17377__auto___25550 < len__17376__auto___25549)){
args25546.push((arguments[i__17377__auto___25550]));

var G__25551 = (i__17377__auto___25550 + (1));
i__17377__auto___25550 = G__25551;
continue;
} else {
}
break;
}

var G__25548 = args25546.length;
switch (G__25548) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25546.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__16318__auto__ = props;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__16318__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_25575 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__16318__auto__ = (state_25575["__om_prev_state"]);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return (state_25575["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__25556 = cljs.core.seq.call(null,refs);
var chunk__25557 = null;
var count__25558 = (0);
var i__25559 = (0);
while(true){
if((i__25559 < count__25558)){
var ref = cljs.core._nth.call(null,chunk__25557,i__25559);
om.core.unobserve.call(null,this$,ref);

var G__25576 = seq__25556;
var G__25577 = chunk__25557;
var G__25578 = count__25558;
var G__25579 = (i__25559 + (1));
seq__25556 = G__25576;
chunk__25557 = G__25577;
count__25558 = G__25578;
i__25559 = G__25579;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__25556);
if(temp__4425__auto____$1){
var seq__25556__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25556__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__25556__$1);
var G__25580 = cljs.core.chunk_rest.call(null,seq__25556__$1);
var G__25581 = c__17121__auto__;
var G__25582 = cljs.core.count.call(null,c__17121__auto__);
var G__25583 = (0);
seq__25556 = G__25580;
chunk__25557 = G__25581;
count__25558 = G__25582;
i__25559 = G__25583;
continue;
} else {
var ref = cljs.core.first.call(null,seq__25556__$1);
om.core.unobserve.call(null,this$,ref);

var G__25584 = cljs.core.next.call(null,seq__25556__$1);
var G__25585 = null;
var G__25586 = (0);
var G__25587 = (0);
seq__25556 = G__25584;
chunk__25557 = G__25585;
count__25558 = G__25586;
i__25559 = G__25587;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__16306__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__16306__auto__)){
var and__16306__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__16306__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__16306__auto____$1;
}
} else {
return and__16306__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__16306__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__16306__auto__){
return cljs.core.some.call(null,((function (and__16306__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__25553_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__25553_SHARP_);
});})(and__16306__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__16306__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_25562 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_25563 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_25564 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_25565 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_25566 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_25566;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_25565;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_25564;

om.core._STAR_state_STAR_ = _STAR_state_STAR_25563;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_25562;
}}),(function (next_props,next_state){
var this$ = this;
var c_25588 = om.core.children.call(null,this$);
if(((!((c_25588 == null)))?(((false) || (c_25588.om$core$IWillUpdate$))?true:(((!c_25588.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_25588):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_25588))){
var state_25589 = this$.state;
om.core.will_update.call(null,c_25588,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__16318__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__16318__auto__ = id;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_25590 = om.core.children.call(null,this$);
if(((!((c_25590 == null)))?(((false) || (c_25590.om$core$IWillMount$))?true:(((!c_25590.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_25590):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_25590))){
om.core.will_mount.call(null,c_25590);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x25592 = obj;
x25592.om$core$ISetState$ = true;

x25592.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x25592){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__16306__auto__ = !((app_state == null));
if(and__16306__auto__){
return render;
} else {
return and__16306__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x25592))
;

x25592.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x25592){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__16306__auto__ = !((app_state == null));
if(and__16306__auto__){
return render;
} else {
return and__16306__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x25592))
;

x25592.om$core$IGetRenderState$ = true;

x25592.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x25592){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x25592))
;

x25592.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x25592){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x25592))
;

x25592.om$core$IGetState$ = true;

x25592.om$core$IGetState$_get_state$arity$1 = ((function (x25592){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__16318__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return (state["__om_state"]);
}
});})(x25592))
;

x25592.om$core$IGetState$_get_state$arity$2 = ((function (x25592){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x25592))
;

return x25592;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.get_node;
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.mounted_QMARK_;
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__16318__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__16318__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_25603 = om.core.children.call(null,this$);
if(((!((c_25603 == null)))?(((false) || (c_25603.om$core$IWillMount$))?true:(((!c_25603.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_25603):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_25603))){
om.core.will_mount.call(null,c_25603);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__25597 = cljs.core.seq.call(null,refs);
var chunk__25598 = null;
var count__25599 = (0);
var i__25600 = (0);
while(true){
if((i__25600 < count__25599)){
var ref = cljs.core._nth.call(null,chunk__25598,i__25600);
om.core.unobserve.call(null,this$,ref);

var G__25604 = seq__25597;
var G__25605 = chunk__25598;
var G__25606 = count__25599;
var G__25607 = (i__25600 + (1));
seq__25597 = G__25604;
chunk__25598 = G__25605;
count__25599 = G__25606;
i__25600 = G__25607;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__25597);
if(temp__4425__auto____$1){
var seq__25597__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25597__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__25597__$1);
var G__25608 = cljs.core.chunk_rest.call(null,seq__25597__$1);
var G__25609 = c__17121__auto__;
var G__25610 = cljs.core.count.call(null,c__17121__auto__);
var G__25611 = (0);
seq__25597 = G__25608;
chunk__25598 = G__25609;
count__25599 = G__25610;
i__25600 = G__25611;
continue;
} else {
var ref = cljs.core.first.call(null,seq__25597__$1);
om.core.unobserve.call(null,this$,ref);

var G__25612 = cljs.core.next.call(null,seq__25597__$1);
var G__25613 = null;
var G__25614 = (0);
var G__25615 = (0);
seq__25597 = G__25612;
chunk__25598 = G__25613;
count__25599 = G__25614;
i__25600 = G__25615;
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
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_25616 = this$.props;
var c_25617 = om.core.children.call(null,this$);
if(((!((c_25617 == null)))?(((false) || (c_25617.om$core$IWillUpdate$))?true:(((!c_25617.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_25617):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_25617))){
var state_25618 = this$.state;
om.core.will_update.call(null,c_25617,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_25619 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__16318__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x25621 = cljs.core.clj__GT_js.call(null,methods$);
x25621.om$core$ISetState$ = true;

x25621.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x25621){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__16306__auto__ = !((gstate == null));
if(and__16306__auto__){
return render;
} else {
return and__16306__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x25621))
;

x25621.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x25621){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x25621))
;

x25621.om$core$IGetRenderState$ = true;

x25621.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x25621){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x25621))
;

x25621.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x25621){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x25621))
;

x25621.om$core$IGetState$ = true;

x25621.om$core$IGetState$_get_state$arity$1 = ((function (x25621){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__16318__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x25621))
;

x25621.om$core$IGetState$_get_state$arity$2 = ((function (x25621){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x25621))
;

return x25621;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__25625){
var vec__25626 = p__25625;
var k = cljs.core.nth.call(null,vec__25626,(0),null);
var v = cljs.core.nth.call(null,vec__25626,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__25627 = null;
var G__25627__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__25627__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__25627 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25627__2.call(this,self__,k);
case 3:
return G__25627__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25627.cljs$core$IFn$_invoke$arity$2 = G__25627__2;
G__25627.cljs$core$IFn$_invoke$arity$3 = G__25627__3;
return G__25627;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args25624){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25624)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__25629 = null;
var G__25629__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__25629__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__25629 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25629__2.call(this,self__,k);
case 3:
return G__25629__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25629.cljs$core$IFn$_invoke$arity$2 = G__25629__2;
G__25629.cljs$core$IFn$_invoke$arity$3 = G__25629__3;
return G__25629;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args25628){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25628)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x25631 = cljs.core.clone.call(null,val);
x25631.cljs$core$IDeref$ = true;

x25631.cljs$core$IDeref$_deref$arity$1 = ((function (x25631){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x25631))
;

x25631.om$core$ICursor$ = true;

x25631.om$core$ICursor$_path$arity$1 = ((function (x25631){
return (function (_){
var ___$1 = this;
return path;
});})(x25631))
;

x25631.om$core$ICursor$_state$arity$1 = ((function (x25631){
return (function (_){
var ___$1 = this;
return state;
});})(x25631))
;

x25631.om$core$ITransact$ = true;

x25631.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x25631){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x25631))
;

x25631.cljs$core$IEquiv$ = true;

x25631.cljs$core$IEquiv$_equiv$arity$2 = ((function (x25631){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x25631))
;

return x25631;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args25632 = [];
var len__17376__auto___25637 = arguments.length;
var i__17377__auto___25638 = (0);
while(true){
if((i__17377__auto___25638 < len__17376__auto___25637)){
args25632.push((arguments[i__17377__auto___25638]));

var G__25639 = (i__17377__auto___25638 + (1));
i__17377__auto___25638 = G__25639;
continue;
} else {
}
break;
}

var G__25634 = args25632.length;
switch (G__25634) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25632.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x25644 = cljs.core.clone.call(null,x);
x25644.cljs$core$ICloneable$ = true;

x25644.cljs$core$ICloneable$_clone$arity$1 = ((function (x25644){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x25644))
;

x25644.om$core$IAdapt$ = true;

x25644.om$core$IAdapt$_adapt$arity$2 = ((function (x25644){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x25644))
;

x25644.om$core$ICursorDerive$ = true;

x25644.om$core$ICursorDerive$_derive$arity$4 = ((function (x25644){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x25644))
;

x25644.om$core$ITransact$ = true;

x25644.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x25644){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x25644))
;

return x25644;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x25652 = cljs.core.clone.call(null,cursor);
x25652.om$core$ICursorDerive$ = true;

x25652.om$core$ICursorDerive$_derive$arity$4 = ((function (x25652,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x25652,path,storage))
;

x25652.om$core$IOmRef$ = true;

x25652.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x25652,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x25652,path,storage))
;

x25652.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x25652,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x25652,path,storage))
;

x25652.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x25652,path,storage){
return (function (_){
var ___$1 = this;
var seq__25653 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__25654 = null;
var count__25655 = (0);
var i__25656 = (0);
while(true){
if((i__25656 < count__25655)){
var c = cljs.core._nth.call(null,chunk__25654,i__25656);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__25657 = seq__25653;
var G__25658 = chunk__25654;
var G__25659 = count__25655;
var G__25660 = (i__25656 + (1));
seq__25653 = G__25657;
chunk__25654 = G__25658;
count__25655 = G__25659;
i__25656 = G__25660;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25653);
if(temp__4425__auto__){
var seq__25653__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25653__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__25653__$1);
var G__25661 = cljs.core.chunk_rest.call(null,seq__25653__$1);
var G__25662 = c__17121__auto__;
var G__25663 = cljs.core.count.call(null,c__17121__auto__);
var G__25664 = (0);
seq__25653 = G__25661;
chunk__25654 = G__25662;
count__25655 = G__25663;
i__25656 = G__25664;
continue;
} else {
var c = cljs.core.first.call(null,seq__25653__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__25665 = cljs.core.next.call(null,seq__25653__$1);
var G__25666 = null;
var G__25667 = (0);
var G__25668 = (0);
seq__25653 = G__25665;
chunk__25654 = G__25666;
count__25655 = G__25667;
i__25656 = G__25668;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25652,path,storage))
;

x25652.om$core$IOmRef$_get_deps$arity$1 = ((function (x25652,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x25652,path,storage))
;

x25652.om$core$ITransact$ = true;

x25652.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x25652,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x25652,path,storage))
;

return x25652;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__16318__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ref-cursor?","ref-cursor?",1026875459,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__16318__auto__ = state.om$render$T;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args25669 = [];
var len__17376__auto___25676 = arguments.length;
var i__17377__auto___25677 = (0);
while(true){
if((i__17377__auto___25677 < len__17376__auto___25676)){
args25669.push((arguments[i__17377__auto___25677]));

var G__25678 = (i__17377__auto___25677 + (1));
i__17377__auto___25677 = G__25678;
continue;
} else {
}
break;
}

var G__25671 = args25669.length;
switch (G__25671) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25669.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__25672_25680 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__25673_25681 = null;
var count__25674_25682 = (0);
var i__25675_25683 = (0);
while(true){
if((i__25675_25683 < count__25674_25682)){
var f_25684 = cljs.core._nth.call(null,chunk__25673_25681,i__25675_25683);
f_25684.call(null);

var G__25685 = seq__25672_25680;
var G__25686 = chunk__25673_25681;
var G__25687 = count__25674_25682;
var G__25688 = (i__25675_25683 + (1));
seq__25672_25680 = G__25685;
chunk__25673_25681 = G__25686;
count__25674_25682 = G__25687;
i__25675_25683 = G__25688;
continue;
} else {
var temp__4425__auto___25689 = cljs.core.seq.call(null,seq__25672_25680);
if(temp__4425__auto___25689){
var seq__25672_25690__$1 = temp__4425__auto___25689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25672_25690__$1)){
var c__17121__auto___25691 = cljs.core.chunk_first.call(null,seq__25672_25690__$1);
var G__25692 = cljs.core.chunk_rest.call(null,seq__25672_25690__$1);
var G__25693 = c__17121__auto___25691;
var G__25694 = cljs.core.count.call(null,c__17121__auto___25691);
var G__25695 = (0);
seq__25672_25680 = G__25692;
chunk__25673_25681 = G__25693;
count__25674_25682 = G__25694;
i__25675_25683 = G__25695;
continue;
} else {
var f_25696 = cljs.core.first.call(null,seq__25672_25690__$1);
f_25696.call(null);

var G__25697 = cljs.core.next.call(null,seq__25672_25690__$1);
var G__25698 = null;
var G__25699 = (0);
var G__25700 = (0);
seq__25672_25680 = G__25697;
chunk__25673_25681 = G__25698;
count__25674_25682 = G__25699;
i__25675_25683 = G__25700;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__16318__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__16318__auto__){
return or__16318__auto__;
} else {
var or__16318__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__16318__auto____$1){
return or__16318__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args25711 = [];
var len__17376__auto___25714 = arguments.length;
var i__17377__auto___25715 = (0);
while(true){
if((i__17377__auto___25715 < len__17376__auto___25714)){
args25711.push((arguments[i__17377__auto___25715]));

var G__25716 = (i__17377__auto___25715 + (1));
i__17377__auto___25715 = G__25716;
continue;
} else {
}
break;
}

var G__25713 = args25711.length;
switch (G__25713) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25711.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_25718 = (function (){var or__16318__auto__ = descriptor;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
var or__16318__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__16318__auto____$1)){
return or__16318__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_25718 === goog.object.get(f,"om$tag"))))){
var factory_25719 = React.createFactory(React.createClass(rdesc_25718));
goog.object.set(f,"om$descriptor",factory_25719);

goog.object.set(f,"om$tag",rdesc_25718);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args25720 = [];
var len__17376__auto___25723 = arguments.length;
var i__17377__auto___25724 = (0);
while(true){
if((i__17377__auto___25724 < len__17376__auto___25723)){
args25720.push((arguments[i__17377__auto___25724]));

var G__25725 = (i__17377__auto___25724 + (1));
i__17377__auto___25724 = G__25725;
continue;
} else {
}
break;
}

var G__25722 = args25720.length;
switch (G__25722) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25720.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args25727 = [];
var len__17376__auto___25732 = arguments.length;
var i__17377__auto___25733 = (0);
while(true){
if((i__17377__auto___25733 < len__17376__auto___25732)){
args25727.push((arguments[i__17377__auto___25733]));

var G__25734 = (i__17377__auto___25733 + (1));
i__17377__auto___25733 = G__25734;
continue;
} else {
}
break;
}

var G__25729 = args25727.length;
switch (G__25729) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25727.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__25730 = m;
var map__25730__$1 = ((((!((map__25730 == null)))?((((map__25730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25730):map__25730);
var key = cljs.core.get.call(null,map__25730__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__25730__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__25730__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__25730__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__25730__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__16318__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__25730,map__25730__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__25730,map__25730__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__25730,map__25730__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__25730,map__25730__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__16318__auto__ = rkey;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args25736 = [];
var len__17376__auto___25739 = arguments.length;
var i__17377__auto___25740 = (0);
while(true){
if((i__17377__auto___25740 < len__17376__auto___25739)){
args25736.push((arguments[i__17377__auto___25740]));

var G__25741 = (i__17377__auto___25740 + (1));
i__17377__auto___25740 = G__25741;
continue;
} else {
}
break;
}

var G__25738 = args25736.length;
switch (G__25738) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25736.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args25743 = [];
var len__17376__auto___25746 = arguments.length;
var i__17377__auto___25747 = (0);
while(true){
if((i__17377__auto___25747 < len__17376__auto___25746)){
args25743.push((arguments[i__17377__auto___25747]));

var G__25748 = (i__17377__auto___25747 + (1));
i__17377__auto___25747 = G__25748;
continue;
} else {
}
break;
}

var G__25745 = args25743.length;
switch (G__25745) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25743.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_25766 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_25767 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_25768 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x25759_25769 = state;
x25759_25769.om$core$IRootProperties$ = true;

x25759_25769.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_25766,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

x25759_25769.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_25766,cljs.core.dissoc,id,k);
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

x25759_25769.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_25766,cljs.core.dissoc,id);
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

x25759_25769.om$core$IRootProperties$_get_property$arity$3 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_25766),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

x25759_25769.om$core$INotify$ = true;

x25759_25769.om$core$INotify$_listen_BANG_$arity$3 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_25767,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

x25759_25769.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_25767,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

x25759_25769.om$core$INotify$_notify_BANG_$arity$3 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__25760_25770 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_25767));
var chunk__25761_25771 = null;
var count__25762_25772 = (0);
var i__25763_25773 = (0);
while(true){
if((i__25763_25773 < count__25762_25772)){
var vec__25764_25774 = cljs.core._nth.call(null,chunk__25761_25771,i__25763_25773);
var __25775 = cljs.core.nth.call(null,vec__25764_25774,(0),null);
var f_25776 = cljs.core.nth.call(null,vec__25764_25774,(1),null);
f_25776.call(null,tx_data,root_cursor);

var G__25777 = seq__25760_25770;
var G__25778 = chunk__25761_25771;
var G__25779 = count__25762_25772;
var G__25780 = (i__25763_25773 + (1));
seq__25760_25770 = G__25777;
chunk__25761_25771 = G__25778;
count__25762_25772 = G__25779;
i__25763_25773 = G__25780;
continue;
} else {
var temp__4425__auto___25781 = cljs.core.seq.call(null,seq__25760_25770);
if(temp__4425__auto___25781){
var seq__25760_25782__$1 = temp__4425__auto___25781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25760_25782__$1)){
var c__17121__auto___25783 = cljs.core.chunk_first.call(null,seq__25760_25782__$1);
var G__25784 = cljs.core.chunk_rest.call(null,seq__25760_25782__$1);
var G__25785 = c__17121__auto___25783;
var G__25786 = cljs.core.count.call(null,c__17121__auto___25783);
var G__25787 = (0);
seq__25760_25770 = G__25784;
chunk__25761_25771 = G__25785;
count__25762_25772 = G__25786;
i__25763_25773 = G__25787;
continue;
} else {
var vec__25765_25788 = cljs.core.first.call(null,seq__25760_25782__$1);
var __25789 = cljs.core.nth.call(null,vec__25765_25788,(0),null);
var f_25790 = cljs.core.nth.call(null,vec__25765_25788,(1),null);
f_25790.call(null,tx_data,root_cursor);

var G__25791 = cljs.core.next.call(null,seq__25760_25782__$1);
var G__25792 = null;
var G__25793 = (0);
var G__25794 = (0);
seq__25760_25770 = G__25791;
chunk__25761_25771 = G__25792;
count__25762_25772 = G__25793;
i__25763_25773 = G__25794;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

x25759_25769.om$core$IRenderQueue$ = true;

x25759_25769.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_25768);
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

x25759_25769.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_25768),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_25768,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

x25759_25769.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x25759_25769,properties_25766,listeners_25767,render_queue_25768){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_25768,cljs.core.empty);
});})(x25759_25769,properties_25766,listeners_25767,render_queue_25768))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x25796 = cljs.core.clone.call(null,cursor);
x25796.cljs$core$ICloneable$ = true;

x25796.cljs$core$ICloneable$_clone$arity$1 = ((function (x25796){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x25796))
;

x25796.om$core$IAdapt$ = true;

x25796.om$core$IAdapt$_adapt$arity$2 = ((function (x25796){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x25796))
;

x25796.om$core$IRootKey$ = true;

x25796.om$core$IRootKey$_root_key$arity$1 = ((function (x25796){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x25796))
;

return x25796;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__25797){
var map__25861 = p__25797;
var map__25861__$1 = ((((!((map__25861 == null)))?((((map__25861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25861):map__25861);
var options = map__25861__$1;
var target = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__25924 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__25924,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__25924,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__16318__auto__ = adapt;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_25925 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_25894 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_25895 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_25896 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_25897 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_25897;

om.core._STAR_state_STAR_ = _STAR_state_STAR_25896;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_25895;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_25894;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_25925);
} else {
}
}

var queue_25926 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_25926)){
} else {
var seq__25898_25927 = cljs.core.seq.call(null,queue_25926);
var chunk__25899_25928 = null;
var count__25900_25929 = (0);
var i__25901_25930 = (0);
while(true){
if((i__25901_25930 < count__25900_25929)){
var c_25931 = cljs.core._nth.call(null,chunk__25899_25928,i__25901_25930);
if(cljs.core.truth_(c_25931.isMounted())){
var temp__4425__auto___25932 = (c_25931.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___25932)){
var next_props_25933 = temp__4425__auto___25932;
(c_25931.props["__om_cursor"] = next_props_25933);

(c_25931.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__16318__auto__ = !((function (){var G__25903 = om.core.children.call(null,c_25931);
if(!((G__25903 == null))){
if((false) || (G__25903.om$core$ICheckState$)){
return true;
} else {
if((!G__25903.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__25903);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__25903);
}
})());
if(or__16318__auto__){
return or__16318__auto__;
} else {
return c_25931.shouldComponentUpdate(c_25931.props,c_25931.state);
}
})())){
c_25931.forceUpdate();
} else {
}
} else {
}

var G__25934 = seq__25898_25927;
var G__25935 = chunk__25899_25928;
var G__25936 = count__25900_25929;
var G__25937 = (i__25901_25930 + (1));
seq__25898_25927 = G__25934;
chunk__25899_25928 = G__25935;
count__25900_25929 = G__25936;
i__25901_25930 = G__25937;
continue;
} else {
var temp__4425__auto___25938 = cljs.core.seq.call(null,seq__25898_25927);
if(temp__4425__auto___25938){
var seq__25898_25939__$1 = temp__4425__auto___25938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25898_25939__$1)){
var c__17121__auto___25940 = cljs.core.chunk_first.call(null,seq__25898_25939__$1);
var G__25941 = cljs.core.chunk_rest.call(null,seq__25898_25939__$1);
var G__25942 = c__17121__auto___25940;
var G__25943 = cljs.core.count.call(null,c__17121__auto___25940);
var G__25944 = (0);
seq__25898_25927 = G__25941;
chunk__25899_25928 = G__25942;
count__25900_25929 = G__25943;
i__25901_25930 = G__25944;
continue;
} else {
var c_25945 = cljs.core.first.call(null,seq__25898_25939__$1);
if(cljs.core.truth_(c_25945.isMounted())){
var temp__4425__auto___25946__$1 = (c_25945.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___25946__$1)){
var next_props_25947 = temp__4425__auto___25946__$1;
(c_25945.props["__om_cursor"] = next_props_25947);

(c_25945.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__16318__auto__ = !((function (){var G__25905 = om.core.children.call(null,c_25945);
if(!((G__25905 == null))){
if((false) || (G__25905.om$core$ICheckState$)){
return true;
} else {
if((!G__25905.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__25905);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__25905);
}
})());
if(or__16318__auto__){
return or__16318__auto__;
} else {
return c_25945.shouldComponentUpdate(c_25945.props,c_25945.state);
}
})())){
c_25945.forceUpdate();
} else {
}
} else {
}

var G__25948 = cljs.core.next.call(null,seq__25898_25939__$1);
var G__25949 = null;
var G__25950 = (0);
var G__25951 = (0);
seq__25898_25927 = G__25948;
chunk__25899_25928 = G__25949;
count__25900_25929 = G__25950;
i__25901_25930 = G__25951;
continue;
}
} else {
}
}
break;
}
}

var _refs_25952 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_25952)){
} else {
var seq__25906_25953 = cljs.core.seq.call(null,_refs_25952);
var chunk__25907_25954 = null;
var count__25908_25955 = (0);
var i__25909_25956 = (0);
while(true){
if((i__25909_25956 < count__25908_25955)){
var vec__25910_25957 = cljs.core._nth.call(null,chunk__25907_25954,i__25909_25956);
var path_25958__$1 = cljs.core.nth.call(null,vec__25910_25957,(0),null);
var cs_25959 = cljs.core.nth.call(null,vec__25910_25957,(1),null);
var cs_25960__$1 = cljs.core.deref.call(null,cs_25959);
var seq__25911_25961 = cljs.core.seq.call(null,cs_25960__$1);
var chunk__25912_25962 = null;
var count__25913_25963 = (0);
var i__25914_25964 = (0);
while(true){
if((i__25914_25964 < count__25913_25963)){
var vec__25915_25965 = cljs.core._nth.call(null,chunk__25912_25962,i__25914_25964);
var id_25966 = cljs.core.nth.call(null,vec__25915_25965,(0),null);
var c_25967 = cljs.core.nth.call(null,vec__25915_25965,(1),null);
if(cljs.core.truth_(c_25967.shouldComponentUpdate(c_25967.props,c_25967.state))){
c_25967.forceUpdate();
} else {
}

var G__25968 = seq__25911_25961;
var G__25969 = chunk__25912_25962;
var G__25970 = count__25913_25963;
var G__25971 = (i__25914_25964 + (1));
seq__25911_25961 = G__25968;
chunk__25912_25962 = G__25969;
count__25913_25963 = G__25970;
i__25914_25964 = G__25971;
continue;
} else {
var temp__4425__auto___25972 = cljs.core.seq.call(null,seq__25911_25961);
if(temp__4425__auto___25972){
var seq__25911_25973__$1 = temp__4425__auto___25972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25911_25973__$1)){
var c__17121__auto___25974 = cljs.core.chunk_first.call(null,seq__25911_25973__$1);
var G__25975 = cljs.core.chunk_rest.call(null,seq__25911_25973__$1);
var G__25976 = c__17121__auto___25974;
var G__25977 = cljs.core.count.call(null,c__17121__auto___25974);
var G__25978 = (0);
seq__25911_25961 = G__25975;
chunk__25912_25962 = G__25976;
count__25913_25963 = G__25977;
i__25914_25964 = G__25978;
continue;
} else {
var vec__25916_25979 = cljs.core.first.call(null,seq__25911_25973__$1);
var id_25980 = cljs.core.nth.call(null,vec__25916_25979,(0),null);
var c_25981 = cljs.core.nth.call(null,vec__25916_25979,(1),null);
if(cljs.core.truth_(c_25981.shouldComponentUpdate(c_25981.props,c_25981.state))){
c_25981.forceUpdate();
} else {
}

var G__25982 = cljs.core.next.call(null,seq__25911_25973__$1);
var G__25983 = null;
var G__25984 = (0);
var G__25985 = (0);
seq__25911_25961 = G__25982;
chunk__25912_25962 = G__25983;
count__25913_25963 = G__25984;
i__25914_25964 = G__25985;
continue;
}
} else {
}
}
break;
}

var G__25986 = seq__25906_25953;
var G__25987 = chunk__25907_25954;
var G__25988 = count__25908_25955;
var G__25989 = (i__25909_25956 + (1));
seq__25906_25953 = G__25986;
chunk__25907_25954 = G__25987;
count__25908_25955 = G__25988;
i__25909_25956 = G__25989;
continue;
} else {
var temp__4425__auto___25990 = cljs.core.seq.call(null,seq__25906_25953);
if(temp__4425__auto___25990){
var seq__25906_25991__$1 = temp__4425__auto___25990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25906_25991__$1)){
var c__17121__auto___25992 = cljs.core.chunk_first.call(null,seq__25906_25991__$1);
var G__25993 = cljs.core.chunk_rest.call(null,seq__25906_25991__$1);
var G__25994 = c__17121__auto___25992;
var G__25995 = cljs.core.count.call(null,c__17121__auto___25992);
var G__25996 = (0);
seq__25906_25953 = G__25993;
chunk__25907_25954 = G__25994;
count__25908_25955 = G__25995;
i__25909_25956 = G__25996;
continue;
} else {
var vec__25917_25997 = cljs.core.first.call(null,seq__25906_25991__$1);
var path_25998__$1 = cljs.core.nth.call(null,vec__25917_25997,(0),null);
var cs_25999 = cljs.core.nth.call(null,vec__25917_25997,(1),null);
var cs_26000__$1 = cljs.core.deref.call(null,cs_25999);
var seq__25918_26001 = cljs.core.seq.call(null,cs_26000__$1);
var chunk__25919_26002 = null;
var count__25920_26003 = (0);
var i__25921_26004 = (0);
while(true){
if((i__25921_26004 < count__25920_26003)){
var vec__25922_26005 = cljs.core._nth.call(null,chunk__25919_26002,i__25921_26004);
var id_26006 = cljs.core.nth.call(null,vec__25922_26005,(0),null);
var c_26007 = cljs.core.nth.call(null,vec__25922_26005,(1),null);
if(cljs.core.truth_(c_26007.shouldComponentUpdate(c_26007.props,c_26007.state))){
c_26007.forceUpdate();
} else {
}

var G__26008 = seq__25918_26001;
var G__26009 = chunk__25919_26002;
var G__26010 = count__25920_26003;
var G__26011 = (i__25921_26004 + (1));
seq__25918_26001 = G__26008;
chunk__25919_26002 = G__26009;
count__25920_26003 = G__26010;
i__25921_26004 = G__26011;
continue;
} else {
var temp__4425__auto___26012__$1 = cljs.core.seq.call(null,seq__25918_26001);
if(temp__4425__auto___26012__$1){
var seq__25918_26013__$1 = temp__4425__auto___26012__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25918_26013__$1)){
var c__17121__auto___26014 = cljs.core.chunk_first.call(null,seq__25918_26013__$1);
var G__26015 = cljs.core.chunk_rest.call(null,seq__25918_26013__$1);
var G__26016 = c__17121__auto___26014;
var G__26017 = cljs.core.count.call(null,c__17121__auto___26014);
var G__26018 = (0);
seq__25918_26001 = G__26015;
chunk__25919_26002 = G__26016;
count__25920_26003 = G__26017;
i__25921_26004 = G__26018;
continue;
} else {
var vec__25923_26019 = cljs.core.first.call(null,seq__25918_26013__$1);
var id_26020 = cljs.core.nth.call(null,vec__25923_26019,(0),null);
var c_26021 = cljs.core.nth.call(null,vec__25923_26019,(1),null);
if(cljs.core.truth_(c_26021.shouldComponentUpdate(c_26021.props,c_26021.state))){
c_26021.forceUpdate();
} else {
}

var G__26022 = cljs.core.next.call(null,seq__25918_26013__$1);
var G__26023 = null;
var G__26024 = (0);
var G__26025 = (0);
seq__25918_26001 = G__26022;
chunk__25919_26002 = G__26023;
count__25920_26003 = G__26024;
i__25921_26004 = G__26025;
continue;
}
} else {
}
}
break;
}

var G__26026 = cljs.core.next.call(null,seq__25906_25991__$1);
var G__26027 = null;
var G__26028 = (0);
var G__26029 = (0);
seq__25906_25953 = G__26026;
chunk__25907_25954 = G__26027;
count__25908_25955 = G__26028;
i__25909_25956 = G__26029;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25861,map__25861__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args26032 = [];
var len__17376__auto___26035 = arguments.length;
var i__17377__auto___26036 = (0);
while(true){
if((i__17377__auto___26036 < len__17376__auto___26035)){
args26032.push((arguments[i__17377__auto___26036]));

var G__26037 = (i__17377__auto___26036 + (1));
i__17377__auto___26036 = G__26037;
continue;
} else {
}
break;
}

var G__26034 = args26032.length;
switch (G__26034) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26032.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args26039 = [];
var len__17376__auto___26042 = arguments.length;
var i__17377__auto___26043 = (0);
while(true){
if((i__17377__auto___26043 < len__17376__auto___26042)){
args26039.push((arguments[i__17377__auto___26043]));

var G__26044 = (i__17377__auto___26043 + (1));
i__17377__auto___26043 = G__26044;
continue;
} else {
}
break;
}

var G__26041 = args26039.length;
switch (G__26041) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26039.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args26048 = [];
var len__17376__auto___26052 = arguments.length;
var i__17377__auto___26053 = (0);
while(true){
if((i__17377__auto___26053 < len__17376__auto___26052)){
args26048.push((arguments[i__17377__auto___26053]));

var G__26054 = (i__17377__auto___26053 + (1));
i__17377__auto___26053 = G__26054;
continue;
} else {
}
break;
}

var G__26050 = args26048.length;
switch (G__26050) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26048.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__26051 = owner.refs;
var G__26051__$1 = (((G__26051 == null))?null:(G__26051[name]));
var G__26051__$2 = (((G__26051__$1 == null))?null:G__26051__$1.getDOMNode());
return G__26051__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__26057 = owner.refs;
var G__26057__$1 = (((G__26057 == null))?null:goog.object.get(G__26057,name));
return G__26057__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args26058 = [];
var len__17376__auto___26061 = arguments.length;
var i__17377__auto___26062 = (0);
while(true){
if((i__17377__auto___26062 < len__17376__auto___26061)){
args26058.push((arguments[i__17377__auto___26062]));

var G__26063 = (i__17377__auto___26062 + (1));
i__17377__auto___26062 = G__26063;
continue;
} else {
}
break;
}

var G__26060 = args26058.length;
switch (G__26060) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26058.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args26065 = [];
var len__17376__auto___26068 = arguments.length;
var i__17377__auto___26069 = (0);
while(true){
if((i__17377__auto___26069 < len__17376__auto___26068)){
args26065.push((arguments[i__17377__auto___26069]));

var G__26070 = (i__17377__auto___26069 + (1));
i__17377__auto___26069 = G__26070;
continue;
} else {
}
break;
}

var G__26067 = args26065.length;
switch (G__26067) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26065.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args26072 = [];
var len__17376__auto___26075 = arguments.length;
var i__17377__auto___26076 = (0);
while(true){
if((i__17377__auto___26076 < len__17376__auto___26075)){
args26072.push((arguments[i__17377__auto___26076]));

var G__26077 = (i__17377__auto___26076 + (1));
i__17377__auto___26076 = G__26077;
continue;
} else {
}
break;
}

var G__26074 = args26072.length;
switch (G__26074) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26072.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args26079 = [];
var len__17376__auto___26082 = arguments.length;
var i__17377__auto___26083 = (0);
while(true){
if((i__17377__auto___26083 < len__17376__auto___26082)){
args26079.push((arguments[i__17377__auto___26083]));

var G__26084 = (i__17377__auto___26083 + (1));
i__17377__auto___26083 = G__26084;
continue;
} else {
}
break;
}

var G__26081 = args26079.length;
switch (G__26081) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26079.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args26086 = [];
var len__17376__auto___26089 = arguments.length;
var i__17377__auto___26090 = (0);
while(true){
if((i__17377__auto___26090 < len__17376__auto___26089)){
args26086.push((arguments[i__17377__auto___26090]));

var G__26091 = (i__17377__auto___26090 + (1));
i__17377__auto___26090 = G__26091;
continue;
} else {
}
break;
}

var G__26088 = args26086.length;
switch (G__26088) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26086.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map?rel=1444761111205