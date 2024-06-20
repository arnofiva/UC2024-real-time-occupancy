import{aK as u,ah as t,ai as s,aJ as L,ak as c,aL as v,aR as f,aN as m,iy as R,hz as z,bi as E,iz as j,aq as _,as as q,aF as A}from"./index-6a39f5fd.js";import{c as P}from"./Analysis-6ca7f24a.js";import{f as x,u as b}from"./LineOfSightAnalysisTarget-8126a2b9.js";import{r as S}from"./elevationInfoUtils-d136536c.js";import"./persistable-214e7c30.js";import"./resourceExtension-478f4a5c.js";const y=u.ofType(x);let r=class extends P{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(v(()=>this._computeExtent(),e=>{e?.pending==null&&this._set("extent",e!=null?e.extent:null)},f))}get targets(){return this._get("targets")||new y}set targets(e){this._set("targets",m(e,this.targets,y))}get spatialReference(){return this.observer?.position!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(this.observer?.position==null||e==null)return null;const h=o=>S(o.position,o.elevationInfo)==="absolute-height",a=this.observer.position,d=R(a.x,a.y,a.z,a.x,a.y,a.z);for(const o of this.targets)if(o.position!=null){const l=z(o.position,e);if(l.pending!=null)return{pending:l.pending,extent:null};if(l.geometry!=null){const{x:w,y:O,z:$}=l.geometry;E(d,[w,O,$])}}const p=j(d,e);return h(this.observer)&&this.targets.every(h)||(p.zmin=void 0,p.zmax=void 0),{pending:null,extent:p}}clear(){this.observer=null,this.targets.removeAll()}};t([s({type:["line-of-sight"]})],r.prototype,"type",void 0),t([s({type:b,json:{read:!0,write:!0}})],r.prototype,"observer",void 0),t([s({cast:L,type:y,nonNullable:!0,json:{read:!0,write:!0}})],r.prototype,"targets",null),t([s({value:null,readOnly:!0})],r.prototype,"extent",void 0),t([s({readOnly:!0})],r.prototype,"spatialReference",null),t([s({readOnly:!0})],r.prototype,"requiredPropertiesForEditing",null),r=t([c("esri.analysis.LineOfSightAnalysis")],r);const g=r,T=u.ofType(x);let i=class extends _(q(A)){constructor(n){super(n),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new g,this.opacity=1}initialize(){this.addHandles(v(()=>this.analysis,(n,e)=>{e!=null&&e.parent===this&&(e.parent=null),n!=null&&(n.parent=this)},f))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(n){const{analysis:e}=this;e&&(e.observer=n)}get targets(){return this.analysis!=null?this.analysis.targets:new u}set targets(n){m(n,this.analysis?.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(n){this.analysis===n&&(this.analysis=new g)}};t([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([s({type:["LineOfSightLayer"]})],i.prototype,"operationalLayerType",void 0),t([s({type:b,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],i.prototype,"observer",null),t([s({type:T,json:{read:!0,write:{ignoreOrigin:!0}}})],i.prototype,"targets",null),t([s({nonNullable:!0,json:{read:!1,write:!1}})],i.prototype,"analysis",void 0),t([s({readOnly:!0})],i.prototype,"fullExtent",null),t([s({readOnly:!0})],i.prototype,"spatialReference",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),t([s({type:["show","hide"]})],i.prototype,"listMode",void 0),i=t([c("esri.layers.LineOfSightLayer")],i);const K=i;export{K as default};
