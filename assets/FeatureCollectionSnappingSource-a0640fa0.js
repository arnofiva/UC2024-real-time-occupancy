import{aq as b,hY as F,aQ as c,ai as h,ce as E,aB as s,aj as o,ak as r,am as V,hZ as $}from"./index-ab96db07.js";import{t as C}from"./memoize-3e55df82.js";import{j as D,y as A}from"./SnappingManagerPool-45ad664b.js";import{o as I,i as q}from"./queryEngineUtils-e30c312a.js";import{i as d,r as G,n as m}from"./symbologySnappingCandidates-d4c20b1f.js";import"./geodesicLengthMeasurementUtils-b0b02496.js";import"./geometryEngine-ebfb00c5.js";import"./geometryEngineBase-2eacdee6.js";import"./hydrated-33355f53.js";import"./geometry2dUtils-bc57a82d.js";import"./floorFilterUtils-73949d2d.js";import"./keybindings-65d19bf6.js";import"./VertexSnappingCandidate-9321ff67.js";import"./PointSnappingHint-6e3082e3.js";let a=class extends b{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return d();const n=async(p,l)=>(await $(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(p,l);return d(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return G(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?m(this._symbologySnappingSupported,async(i,n)=>{const p=await e.whenLayerView(t);return s(n),p.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):m()}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(i=>this._layerView3D=i),this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:n}=t;F(i,n)&&this._snappingElevationAligner.notifyElevationSourceChange()}),c(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),h),c(()=>this._layerView3D!=null?this._layerView3D.layer?.renderer:null,()=>this._symbologySnappingFetcher.notifySymbologyChange(),h),E(()=>this._layerView3D?.layer,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null,this._memoizedMakeGetGroundElevation=C(q)}refresh(){}async fetchCandidates(e,t){const{layer:i}=this.layerSource,n=i.source;if(!n?.querySnapping)return[];const p=D(i),l=A(e,this.view?.type??"2d",p),v=await n.querySnapping(l,{signal:t});s(t);const u=e.coordinateHelper.spatialReference,y=await this._snappingElevationAligner.alignCandidates(v.candidates,u,t);s(t);const g=await this._symbologySnappingFetcher.fetch(y,t);s(t);const S=g.length===0?y:[...y,...g],w=this._snappingElevationFilter.filter(l,S),_=this._memoizedMakeGetGroundElevation(this.view,u);return w.map(f=>I(f,_))}};o([r({constructOnly:!0})],a.prototype,"layerSource",void 0),o([r({constructOnly:!0})],a.prototype,"view",void 0),o([r()],a.prototype,"_snappingElevationAligner",null),o([r()],a.prototype,"_snappingElevationFilter",null),o([r()],a.prototype,"_symbologySnappingFetcher",null),o([r()],a.prototype,"_layerView3D",void 0),o([r()],a.prototype,"_symbologySnappingSupported",null),a=o([V("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],a);export{a as FeatureCollectionSnappingSource};
