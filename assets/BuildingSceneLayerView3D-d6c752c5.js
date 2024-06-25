import{cf as Q,al as A,cg as P,ah as n,ai as a,ak as _,g$ as O,g_ as G,mJ as B,ao as L,ag as F,bm as y,bR as m,bF as E,aP as b,bG as N,av as v,bv as x,bz as U,bA as T,aK as V,aT as W,aL as S,aR as $,bq as k,m$ as H,fX as j,dK as z,a$ as D,aQ as X}from"./index-c0f955a7.js";import"./BuildingGroupSublayer-f82ef256.js";import{I as K}from"./WhereClause-9d21e01b.js";import"./BuildingComponentSublayer-568a4c8f.js";import{E as Y,c as J,a as Z}from"./I3SMeshView3D-a9ab2fc0.js";import{L as I,d as ee,l as te,o as re}from"./I3SQueryFeatureStore-d440d03b.js";import{e as ie,u as se,m as le}from"./I3SUtil-00117a32.js";import{t as ne}from"./DefinitionExpressionSceneLayerView-f3adf5a8.js";import{u as ae,n as oe,p as R}from"./popupUtils-424614c6.js";import{n as ue}from"./LayerView3D-cadfe2a7.js";import{u as de}from"./LayerView-56ae8a75.js";import"./TimeOnly-05b40277.js";import"./capabilities-c607cf72.js";import"./I3SIndexInfo-5ce9237d.js";import"./I3SLayerDefinitions-3194b507.js";import"./I3SOverrides-11b82592.js";import"./I3SNode-ab03940e.js";import"./I3SBinaryReader-ce9ec7ac.js";import"./ReactiveSet-a030607c.js";import"./meshFeatureSet-ac68b3f7.js";import"./External-27723e17.js";import"./FeatureLayerView3D-ee444e8d.js";import"./FeatureLayerViewBase3D-f1aec35e.js";import"./FeatureLikeLayerView3D-af701d9a.js";import"./dehydratedFeatureComparison-806f289d.js";import"./queryForSymbologySnapping-e89956a6.js";import"./elevationInfoUtils-fe734b95.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-c0ae2c22.js";import"./optimizedFeatureQueryEngineAdapter-66ec8a44.js";import"./PooledRBush-46c240a2.js";import"./quickselect-4a5a9977.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-44ece2b8.js";import"./json-48e3ea08.js";import"./utils-097bae63.js";import"./utils-af61b1ad.js";import"./generateRendererUtils-f5995837.js";import"./FeatureStore-312d326c.js";import"./BoundsStore-be95aa6d.js";import"./projectExtentUtils-5c353335.js";import"./query-51127c95.js";import"./pbfQueryUtils-51148051.js";import"./pbf-334ee1bd.js";import"./EventedSet-1c1c6fea.js";import"./RefreshableLayerView-ac92d1c6.js";import"./SceneModification-c9819a6f.js";import"./persistable-585a2b37.js";import"./resourceExtension-6591026e.js";import"./SceneLayerWorker-615b3bae.js";const M=(e,t)=>{let r=class extends Q(A(P.EventedMixin(e))){constructor(i){super(i),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){return!!this.sublayer?.visible}set visible(i){this._overrideIfSome("visible",i)}get fullOpacity(){const i=s=>s??1;return i(this.sublayer?.opacity)*i(this.parent?.fullOpacity)}canResume(){return!this.parent?.suspended&&this.view?.ready&&this.visible||!1}isUpdating(){return!1}};return n([a()],r.prototype,"sublayer",void 0),n([a()],r.prototype,"parent",void 0),n([a({readOnly:!0})],r.prototype,"suspended",null),n([a({type:Boolean,readOnly:!0})],r.prototype,"updating",null),n([a()],r.prototype,"view",void 0),n([a()],r.prototype,"visible",null),n([a()],r.prototype,"fullOpacity",null),r=n([_("esri.views.3d.layers.BuildingSublayerView3D")],r),r};var d;(function(e){e[e.Solid=0]="Solid",e[e.WireFrame=1]="WireFrame",e[e.XRay=2]="XRay"})(d||(d={}));const q=.15,pe=.5*q;function he(e){switch(e.filterMode.type){case"solid":return{mode:d.Solid};case"wire-frame":return{mode:d.WireFrame,edgeMaterial:O(e.filterMode.edges,{})};case"x-ray":return{mode:d.XRay}}}function C(e,t){if(t==null)return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(t.mode){case d.Solid:return;case d.WireFrame:return e.color[3]=0,e.edgeMaterial=t.edgeMaterial,void(e.pickable=!1);case d.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=q,e.colorMixMode=G.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=ye(e.edgeMaterial))}}function ye(e){return e==null?null:(g.lastMaterial!==e&&(g.cachedMaterial=ce(e),g.lastMaterial=e),g.cachedMaterial)}function ce(e){const t=B(e.color);return t[3]*=pe,{...e,color:t}}const g={cachedMaterial:null,lastMaterial:null};class f extends L{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(t){throw new Error("Not implemented")}queryFeatures(t,r){throw new Error("Not implemented")}queryObjectIds(t,r){throw new Error("Not implemented")}queryFeatureCount(t,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(t,r){throw new Error("Not implemented")}highlight(t){throw new Error("Not implemented")}}n([a()],f.prototype,"sublayer",void 0),n([a()],f.prototype,"availableFields",null),n([a()],f.prototype,"filter",null);let o=class extends ne(Y(M(f))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.requiredFields=[],this.progressiveLoadFactor=1,this._queryEngine=null}get i3slayer(){return this.sublayer}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}get layerId(){return this.sublayer.layer.id}get sublayerId(){return this.sublayer.id}get layerPopupEnabledAndHasTemplate(){return this.sublayer.popupEnabled&&ae(this.sublayer,this.layerView?.view.popup?.defaultPopupTemplateEnabled)}initialize(){this._updatingHandles.add(()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields],()=>this._updateRequiredFields()),this._updatingHandles.add(()=>this.sublayer.renderer,t=>this._rendererChange(t),F);const e=()=>this._filterChange();this._updatingHandles.add(()=>this.parsedDefinitionExpression,e),this._updatingHandles.add(()=>this._filter!=null?this._filter.sortedObjectIds:null,e),this._updatingHandles.add(()=>this._filter!=null?this._filter.parsedWhereClause:null,e),this._updatingHandles.add(()=>[this._filter!=null?this._filter.parsedGeometry:null,this.filter!=null?this.filter.spatialRelationship:null],()=>this._geometryFilterChange()),this._updatingHandles.add(()=>this.parsedFilterExpressions,()=>this._updateSymbologyOverride(),F),this.addResolvingPromise(this._updateRequiredFields())}get lodFactor(){return this.view.qualitySettings.sceneService.object.lodFactor}get parsedFilterExpressions(){return this.sublayer.modelName!=="Overview"&&this.layerView?this.layerView.filterExpressions.map(([e,t])=>{let r;try{r=K.create(e,this.sublayer.fieldsIndex)}catch(l){return y.getLogger(this).error("Failed to parse filterExpression: "+l),null}if(!r.isStandardized)return y.getLogger(this).error("filterExpression is using non standard function"),null;const i=[],s=r.fieldNames;return ie(s,this.sublayer.fields,{missingFields:i}),i.length>0?(y.getLogger(this).error(`filterExpression references unknown fields: ${i.join(", ")}`),null):[r,t]}).filter(e=>e!=null):[]}get filter(){return this._filter!=null?this._filter.viewFilter:null}set filter(e){e!=null&&I.checkSupport(e)?this._filter!=null?this._filter.viewFilter=e:this._filter=new I({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:t=>this._loadAsyncModule(t),addSqlFilter:(t,r)=>this.addSqlFilter(t,r,this.logError)}):this._filter=null}isUpdating(){return super.isUpdating()||this._filter!=null&&this._filter.updating}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride((t,r)=>{for(const[i,s]of e)try{if(i.testFeature(t))return C(r,s)}catch(l){this.logError(l)}return C(r,null)},this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return m(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce((e,[t])=>e.concat(t.fieldNames),new Array))}get availableFields(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const i=[...e.outFields||[],...e.layer.outFields||[]];r=[...E(t,i),...r]}return m(t,r)}_createLayerGraphic(e){const t=new b(null,null,e);return t.layer=this.sublayer.layer,t.sourceLayer=this.sublayer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeatures(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;if(!t?.clientGraphics||t.clientGraphics.length===0)return[];const i=[],s=[],l=this.sublayer.associatedLayer!=null?await this.sublayer.associatedLayer.load():this.sublayer,p=E(this.sublayer.fieldsIndex,await oe(l,R(this.sublayer,t))),c=new Set;for(const h of t.clientGraphics)N(p,h,c)?s.push(h):i.push(h);return s.length===0?i:(this.sublayer.associatedLayer!=null&&await this.sublayer.associatedLayer.load().catch(()=>y.getLogger(this).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes.")),this.whenGraphicAttributes(s,Array.from(c)).catch(()=>s).then(h=>i.concat(h)))}async _updateRequiredFields(){const e=m(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields||[],...this.filterExpressionFields||[]]);this._set("requiredFields",e)}_validateFetchPopupFeatures(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?R(t,e)?void 0:new v("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new v("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this._filter!=null&&this._filter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(e):new x(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t?.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t?.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t?.signal).then(r=>{if(!r?.features)return r;const i=this.sublayer,s=i.layer;for(const l of r.features)l.layer=s,l.sourceLayer=i;return r})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t?.signal)}_ensureQueryEngine(){return this._queryEngine==null&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=J(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new ee({layerView:this,priority:U.FEATURE_QUERY_ENGINE,spatialIndex:new te({featureAdapter:new re({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(t,r)=>this._forAllFeatures((i,s,l)=>t({id:i,index:s,meta:l}),r,Z.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:se(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():x.from(e))}};n([a()],o.prototype,"i3slayer",null),n([a()],o.prototype,"layerView",void 0),n([a()],o.prototype,"lodFactor",null),n([a({readOnly:!0})],o.prototype,"parsedFilterExpressions",null),n([a({type:T})],o.prototype,"filter",null),n([a()],o.prototype,"_filter",void 0),n([a({type:[String],readOnly:!0})],o.prototype,"filterExpressionFields",null),n([a({type:[String],readOnly:!0})],o.prototype,"requiredFields",void 0),n([a({type:[String],readOnly:!0})],o.prototype,"availableFields",null),o=n([_("esri.views.3d.layers.BuildingComponentSublayerView3D")],o);const ge=o;class w extends de{constructor(t){super(t),this.layer=null,this.sublayerViews=null}highlight(t){throw new Error("Not implemented")}}n([a()],w.prototype,"layer",void 0),n([a()],w.prototype,"sublayerViews",void 0);const fe=M(L);let u=class extends ue(w){constructor(e){super(e),this.type="building-scene-3d",this.sublayerViews=new V,this._abortController=new AbortController,this._loadingComponents=0,this._pendingWhenSublayerViews=new Map,this.ignoresMemoryFactor=!1}get filterExpression(){const e=this.layer.activeFilterId,t=e!=null?this.layer.filters.find(i=>i.id===e):null,r=t!=null?t.filterBlocks?.find(i=>i.filterMode.type==="solid"):null;return r?r.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,t=e!=null?this.layer.filters.find(r=>r.id===e):null;return t?.filterBlocks?t.filterBlocks.toArray().map(r=>[r.filterExpression??"",he(r)]):[]}get updatingProgressValue(){const e=this.sublayerViews,t=this._loadingComponents+(e?e.length:0);return e.reduce((r,i)=>r+i.updatingProgress,0)/t}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some(e=>e.updating)}initialize(){le(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach(e=>e.destroy()),this.sublayerViews=null),this._abortController=W(this._abortController)}_initializeSubLayerViews(e,t){const r=this,i=this.view;e.forEach(s=>{if(!s.isEmpty)if(s.type==="building-group"){const l=new fe({sublayer:s,view:i,parent:t});this._initializeSubLayerViews(s.sublayers,l)}else s.geometryType==="mesh"&&(this._loadingComponents++,s.load({signal:this._abortController.signal}).then(()=>{const l=new ge({sublayer:s,layerView:r,view:i,parent:t});this.sublayerViews.push(l);const p=this._pendingWhenSublayerViews.get(s);if(p){for(const c of p)c.resolve(l);this._pendingWhenSublayerViews.delete(s)}this.addHandles([S(()=>l.updating,()=>this.notifyChange("updating"),$),S(()=>l.updatingProgress,()=>this.notifyChange("updatingProgressValue"),$)])}).catch(l=>{k(l)||y.getLogger(this).error(`Error while creating view for sublayer ${s.id}
Layer: ${this.layer.url}
`,l)}).then(()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")}))})}getGraphicFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getGraphicFromIntersectorTarget(e);return null}async fetchPopupFeatures(e,t){if(!t?.clientGraphics||t.clientGraphics.length===0)return[];const r=H(t.clientGraphics,s=>s.sourceLayer),i=[];for(const[s,l]of r){const p=this._findComponent(s);p!=null&&i.push(p.fetchPopupFeatures(e,{...t,clientGraphics:l}))}return(await j(i)).flat()}whenGraphicBounds(e){const t=this._findComponent(e.sourceLayer);return t==null?Promise.reject():t.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getAABBFromIntersectorTarget(e);return null}async whenSublayerView(e){const t=this._findComponent(e);if(t!=null)return t;const r=this._pendingWhenSublayerViews.get(e),i=z();return r?r.push(i):this._pendingWhenSublayerViews.set(e,[i]),i.promise}_findComponent(e){return this.sublayerViews.find(t=>e===t.sublayer)}highlight(e){e instanceof b?e=[e]:e instanceof V&&(e=e.toArray());const t=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof b){const r=e,i=new Map;for(const s of r){let l=i.get(s.sourceLayer);l==null&&(l=[],i.set(s.sourceLayer,l)),l.push(s)}this.sublayerViews.forEach(s=>{const l=i.get(s.sublayer);l&&t.push(s.highlight(l))})}return D(t)}get usedMemory(){return this.sublayerViews.reduce((e,t)=>e+t.usedMemory,0)}get unloadedMemory(){return this.sublayerViews.reduce((e,t)=>e+t.unloadedMemory,0)}};n([a()],u.prototype,"sublayerViews",void 0),n([a({readOnly:!0})],u.prototype,"filterExpression",null),n([a({readOnly:!0})],u.prototype,"filterExpressions",null),n([a(X)],u.prototype,"updatingProgress",void 0),n([a({readOnly:!0,dependsOn:[]})],u.prototype,"updatingProgressValue",null),u=n([_("esri.views.3d.layers.BuildingSceneLayerView3D")],u);const yt=u;export{yt as default};