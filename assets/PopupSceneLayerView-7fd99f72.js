import{aj as P,am as g,aw as l,e5 as m,e6 as b}from"./index-ab96db07.js";import{p as u,n as v}from"./popupUtils-5d416a17.js";const j=d=>{let r=class extends d{_validateFetchPopupFeatures(t){const{layer:a}=this,{popupEnabled:p}=a;if(!p)throw new l("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:a});if(!u(a,t))throw new l("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:a})}async prepareFetchPopupFeatures(t){}async fetchPopupFeaturesFromGraphics(t,a){if(this._validateFetchPopupFeatures(a),t.length===0)return[];const p=this.layer.type==="scene"&&this.layer.associatedLayer!=null?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=m(this.layer.fieldsIndex,await v(p,u(this.layer,a)))),await this.prepareFetchPopupFeatures(i);const c=new Set,n=[],s=[];for(const e of t)b(i,e,c)?s.push(e):n.push(e);if(s.length===0)return n;const o=new Map;for(let e=0;e<t.length;e++)o.set(t[e].getObjectId()??0,e);const h=await this.whenGraphicAttributes(s,[...c]).catch(()=>s).then(e=>n.concat(e));return h.sort((e,y)=>{const f=e.getObjectId()??0,w=o.get(f)??0,F=y.getObjectId()??0;return w-(o.get(F)??0)}),h}};return r=P([g("esri.views.3d.layers.support.PopupSceneLayerView")],r),r};export{j as i};
