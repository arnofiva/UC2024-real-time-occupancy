import{jd as T,fH as r,fu as H,fv as O,fw as D,fL as B,ft as v,je as A,fx as E,fy as G,fG as k,fA as M,fB as $,fE as P,fF as q,fC as I,fD as R,fz as W,jf as F,fP as j,fI as _,dt as U,fs as J}from"./index-c0f955a7.js";import{c as K,d as Q}from"./conditionalSlot-aa7f2974.js";import{S as g,d as V}from"./action-group-72ea61ec.js";import{S as X,d as Y,a as Z}from"./action-menu-47a8607f.js";import{d as N}from"./debounce-a16039dc.js";import"./openCloseComponent-60fc8694.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const ee=150,te=2,C=e=>e.reduce((t,o)=>t+o,0)/e.length,oe=e=>{const t=e.filter(s=>s.slot!==g.menuActions),o=t?.length;return{actionWidth:o?C(t.map(s=>s.clientWidth||0)):0,actionHeight:o?C(t.map(s=>s.clientHeight||0)):0}},se=({width:e,actionWidth:t,layout:o,height:s,actionHeight:c,groupCount:i})=>{const a=o==="horizontal"?e:s,n=o==="horizontal"?t:c;return Math.floor((a-i*te)/n)},ne=({layout:e,actionCount:t,actionWidth:o,width:s,actionHeight:c,height:i,groupCount:a})=>Math.max(t-se({width:s,actionWidth:o,layout:e,height:i,actionHeight:c,groupCount:a}),0),x=e=>Array.from(e.querySelectorAll("calcite-action")).filter(t=>t.closest("calcite-action-menu")?t.slot===X.trigger:!0),ie=({actionGroups:e,expanded:t,overflowCount:o})=>{let s=o;e.reverse().forEach(c=>{let i=0;const a=x(c).reverse();a.forEach(n=>{n.slot===g.menuActions&&(n.removeAttribute("slot"),n.textEnabled=t)}),s>0&&a.some(n=>(a.filter(l=>!l.slot).length>1&&a.length>2&&!n.closest("calcite-action-menu")&&(n.textEnabled=!0,n.setAttribute("slot",g.menuActions),i++,i>1&&s--),s<1)),H(c)})},y={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function ae(e,t){return e||t.closest("calcite-shell-panel")?.position||"start"}function p({el:e,expanded:t}){x(e).filter(o=>o.slot!==g.menuActions).forEach(o=>o.textEnabled=t),e.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(o=>o.expanded=t)}const ce=({tooltip:e,referenceElement:t,expanded:o,ref:s})=>(e&&(e.referenceElement=!o&&t?t:null),s&&s(t),t),le=({expanded:e,expandText:t,collapseText:o,toggle:s,el:c,position:i,tooltip:a,ref:n,scale:h})=>{const l=T(c)==="rtl",u=e?o:t,d=[y.chevronsLeft,y.chevronsRight];l&&d.reverse();const f=ae(i,c)==="end",m=f?d[1]:d[0],z=f?d[0]:d[1];return r("calcite-action",{icon:e?m:z,onClick:s,scale:h,text:u,textEnabled:e,title:!e&&!a?u:null,ref:L=>ce({tooltip:a,referenceElement:L,expanded:e,ref:n})})};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const re={actionGroupEnd:"action-group--end"},b={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},de=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-ui-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-ui-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}",w=O(class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=B(this,"calciteActionBarToggle",6),this.mutationObserver=v("mutation",()=>{const{el:e,expanded:t}=this;p({el:e,expanded:t}),this.overflowActions()}),this.resizeObserver=v("resize",e=>this.resizeHandlerEntries(e)),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(o=>{t.includes(o)||(o.menuOpen=!1)})}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:o}=e.contentRect;this.resize({width:t,height:o})},this.resize=N(({width:e,height:t})=>{const{el:o,expanded:s,expandDisabled:c,layout:i,overflowActionsDisabled:a}=this;if(a||i==="vertical"&&!t||i==="horizontal"&&!e)return;const n=x(o),h=c?n.length:n.length+1,l=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(l);const u=this.hasActionsEnd||this.hasBottomActions||!c?l.length+1:l.length,{actionHeight:d,actionWidth:f}=oe(n),m=ne({layout:i,actionCount:h,actionHeight:d,actionWidth:f,height:t,width:e,groupCount:u});ie({actionGroups:l,expanded:s,overflowCount:m})},ee),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=A(e).filter(o=>o.matches("calcite-action-group"));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=E(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=E(e)},this.handleTooltipSlotChange=e=>{const t=A(e).filter(o=>o?.matches("calcite-tooltip"));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:e,expanded:t}=this;p({el:e,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(e){if(e){this.resizeObserver?.disconnect();return}this.resizeObserver?.observe(this.el),this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){G(this,this.effectiveLocale)}componentDidLoad(){const{el:e,expanded:t}=this;k(this),p({el:e,expanded:t}),this.overflowActions()}connectedCallback(){const{el:e,expanded:t}=this;M(this),$(this),p({el:e,expanded:t}),this.mutationObserver?.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||this.resizeObserver?.observe(e),this.overflowActions(),K(this)}async componentWillLoad(){P(this),await q(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),Q(this),I(this),R(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await W(this),F(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(t=>t.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,el:o,position:s,toggleExpand:c,scale:i,layout:a,messages:n,actionsEndGroupLabel:h}=this,l=t?null:r(le,{collapseText:n.collapse,el:o,expandText:n.expand,expanded:e,position:s,scale:i,toggle:c,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return r("calcite-action-group",{class:re.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:h,layout:a,scale:i},r("slot",{name:b.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),r("slot",{name:b.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),r("slot",{name:b.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),l)}render(){return r(j,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},r("slot",{onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return de}},[1,"calcite-action-bar",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hasActionsEnd:[32],hasBottomActions:[32],expandTooltip:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]}]);function S(){if(typeof customElements>"u")return;["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(t=>{switch(t){case"calcite-action-bar":customElements.get(t)||customElements.define(t,w);break;case"calcite-action":customElements.get(t)||J();break;case"calcite-action-group":customElements.get(t)||V();break;case"calcite-action-menu":customElements.get(t)||Z();break;case"calcite-icon":customElements.get(t)||U();break;case"calcite-loader":customElements.get(t)||_();break;case"calcite-popover":customElements.get(t)||Y();break}})}S();const xe=w,ve=S;export{xe as CalciteActionBar,ve as defineCustomElement};