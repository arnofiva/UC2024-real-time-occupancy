import{aV as m,ai as h,eh as o,ao as _,aK as f,bk as d,ei as F,aW as b,aj as n,ak as l,aX as v,ej as I,am as w}from"./index-ee8e5ecc.js";import{s as E}from"./ReactiveSet-82fd9e5d.js";import{O}from"./WhereClause-7b39bf18.js";import{o as H}from"./floorFilterUtils-73949d2d.js";import{A as S,u as x,n as C}from"./I3SMeshView3D-5f95aaf2.js";import{l as j}from"./LayerView3D-48ff54d8.js";import{a as Q,i as q,u as A,d as V,f as $,b as R,w as P}from"./SceneLayerView-eadb3374.js";import{P as p,d as D,h as G,o as L}from"./I3SQueryFeatureStore-eaca8cce.js";import{o as y}from"./I3SNode-67abc79c.js";import{G as U}from"./I3SOverrides-2a188dd9.js";import{Y as M,Z as T,W as u}from"./I3SUtil-fcf02bbf.js";import{u as N,t as W}from"./TemporalSceneLayerView-9a3c4cee.js";import{i as k}from"./PopupSceneLayerView-187c5448.js";import{u as z}from"./popupUtils-923d7ce0.js";import"./TimeOnly-6ac4fb3b.js";import"./Transform-f43ba6a7.js";import"./RenderTexture-4fb103ae.js";import"./SceneModification-78a31cb7.js";import"./persistable-5b1cda4a.js";import"./resourceExtension-31045c1e.js";import"./Graphics3DObjectStates-a31dae3a.js";import"./optimizedFeatureQueryEngineAdapter-5efe58be.js";import"./PooledRBush-9e9eeb23.js";import"./quickselect-8e85fa0f.js";import"./WorkerHandle-5bfc3acb.js";import"./SceneLayerWorker-af35b47e.js";import"./Graphics3DGraphicsPipeline-73d3d6de.js";import"./timeSupport-26be9832.js";import"./projectExtentUtils-de645733.js";import"./dehydratedFeatureComparison-4f423cdc.js";import"./queryForSymbologySnapping-472ce454.js";import"./hash-6f442295.js";import"./QueryEngine-5264404e.js";import"./normalizeUtils-d9b14f9e.js";import"./normalizeUtilsCommon-2270a178.js";import"./json-48e3ea08.js";import"./utils-ade942ec.js";import"./utils-11d55532.js";import"./utils-47ac37f9.js";import"./ClassBreaksDefinition-43c97c7c.js";import"./FeatureStore-2f56759a.js";import"./BoundsStore-3451b635.js";import"./makeScheduleFunction-e2d1207a.js";import"./LayerView-7c43eac9.js";import"./I3SBinaryReader-fbf58589.js";import"./meshFeatureSet-ea2f1082.js";import"./Mesh-fa2f1f66.js";import"./MeshTransform-7ca01a5e.js";import"./vertexSpaceConversion-b323788a.js";import"./External-93917e74.js";import"./infoFor3D-a657d595.js";import"./FeatureLayerView3D-87e178f6.js";import"./FeatureLayerViewBase3D-360a1172.js";import"./query-9198cd9f.js";import"./pbfQueryUtils-c7b4903b.js";import"./pbf-99c055ee.js";import"./EventedSet-04ae383a.js";import"./RefreshableLayerView-fba35a04.js";const c=R();let s=class extends S(N(W(k(j(P))))){constructor(){super(...arguments),this.type="scene-layer-3d",this._setVisibilityHiddenObjectIds=new E,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._pendingEditsQueue=Promise.resolve(),this._interactiveEditingSessions=new Map,this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(e,t){return e.url===this.layer.url&&this.i3sOverrides.isEmpty?e.load(t).then(()=>{M(this.layer,e,this.i3sOverrides),this.layer=e,this.i3sOverrides.destroy();const i=this.view.resourceController?.memoryController;this.i3sOverrides=new U({view:this.view,layer:e,memoryController:i}),this.resetHighlights()}):null}get layerPopupEnabledAndHasTemplate(){return this.layer.popupEnabled&&z(this.layer,this.view.popup?.defaultPopupTemplateEnabled)}get filter(){return this._get("filter")}set filter(e){this._set("filter",p.checkSupport(e)?e:null)}get viewFilter(){const e=this.mergedFilter,t=this.layerFilter;if(e==null&&t==null)return null;const i=this._get("viewFilter");return i==null?new p({layerFilter:t,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:r=>this._loadAsyncModule(r),addSqlFilter:(r,a)=>this.addSqlFilter(r,a,this.logError),addTimeFilter:(r,a)=>this.addTimeFilter(r,a)}):(i.viewFilter=e,i.layerFilter=t,i)}get requiredFields(){return this._fieldsHelper?.requiredFields??[]}get _floorFilterClause(){const e=H(this);return e!=null?O.create(e,this.layer.fieldsIndex):null}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds.toArray();return e.length?e.sort((t,i)=>t-i):null}get _setVisibilityHiddenObjectIdsSorted(){return this._setVisibilityHiddenObjectIds.size?Array.from(this._setVisibilityHiddenObjectIds).sort((e,t)=>e-t):null}get lodFactor(){return this.view?.qualitySettings?.sceneService?.object?.lodFactor??1}get lodCrossfadeUncoveredDuration(){return this.view?.qualitySettings?.fadeDuration??0}get updatingProgressValue(){return this._controller?.updatingProgress??0}get visibleAtCurrentScale(){return m(this.i3slayer.effectiveScaleRange,this.view.terrainScale)}initialize(){this._fieldsHelper=new Q({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,t=>this._rangeInfosChanged(t),h),this._updatingHandles.add(()=>this.layer.renderer,t=>this._updatingHandles.addPromise(this._rendererChange(t)),h);const e=()=>this._filterChange();this._updatingHandles.add(()=>this.parsedDefinitionExpression,e),this._updatingHandles.add(()=>this.mergedFilter,e),this._updatingHandles.add(()=>this._floorFilterClause,e),this._updatingHandles.add(()=>this._excludeObjectIdsSorted,e),this._updatingHandles.add(()=>this._setVisibilityHiddenObjectIdsSorted,e),this._updatingHandles.add(()=>this.viewFilter?.sortedObjectIds,e),this._updatingHandles.add(()=>this.viewFilter?.parsedWhereClause,e),this._updatingHandles.add(()=>this.getTimeFilterDependencies(),e),this._updatingHandles.add(()=>[this.viewFilter?.parsedGeometry,this.mergedFilter?.spatialRelationship,this.layer.filter?.spatialRelationship],()=>this._geometryFilterChange()),o()&&this.i3sOverrides.is3DOFL&&this._updatingHandles.add(()=>this.i3sOverrides.sortedGeometryChangedObjectIds,e),this.addHandles(this.layer.on("apply-edits",t=>this._updatingHandles.addPromise(t.result))),this.addHandles(this.layer.on("edits",t=>{const i=this._pendingEditsQueue.then(()=>this._handleEdits(t)).then();this._pendingEditsQueue=i,this._updatingHandles.addPromise(i)}))}destroy(){this._fieldsHelper=_(this._fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&f.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return this.mergedFilter?.createQuery(e)??new d(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t?.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t?.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t?.signal).then(i=>{if(!i?.features)return i;const r=this.layer;for(const a of i.features)a.layer=r,a.sourceLayer=r;return i})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t?.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=x(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new D({layerView:this,priority:F.FEATURE_QUERY_ENGINE,spatialIndex:new G({featureAdapter:new L({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo??[],getFeatureExtent:e}),forAllFeatures:(t,i)=>this._forAllFeatures((r,a,g)=>t({id:r,index:a,meta:g}),i,C.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:T(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof d){const{set:i,handle:r}=t.acquireSet();return this.queryObjectIds(e).then(a=>t.setFeatureIds(i,a)),r}return super.highlight(e)}createInteractiveEditSession(e){return q(this._attributeEditingContext,e)}_createLayerGraphic(e){return new b({attributes:e,layer:this.layer,sourceLayer:this.layer})}getFilters(){const e=super.getFilters();o()&&this.i3sOverrides.is3DOFL&&this.i3sOverrides.sortedGeometryChangedObjectIds.length>0&&e.push((r,a)=>{a.node.index>=0&&u(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,r)});const t=this._setVisibilityHiddenObjectIdsSorted;t!=null&&e.push(r=>u(t,!1,r));const i=this._excludeObjectIdsSorted;return i!=null&&e.push(r=>u(i,!1,r)),this._floorFilterClause&&this.addSqlFilter(e,this._floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this.viewFilter!=null&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}setVisibility(e,t){t?this._setVisibilityHiddenObjectIds.delete(e):this._setVisibilityHiddenObjectIds.add(e)}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||this.viewFilter!=null&&this.viewFilter.updating||this.i3sOverrides!=null&&this.i3sOverrides.updating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():d.from(e))}get _attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:e=>this._forAllNodes(t=>t!=null?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this.i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}async _handleEdits(e){const t=o(),i=this._attributeEditingContext,r=await A(i,e);t&&V(i,r),$(i,r)}get hasGeometryFilter(){return this.viewFilter?.parsedGeometry!=null}computeNodeFiltering(e){const t=this.viewFilter;return t==null||!this.view.spatialReference||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?y.Unmodified:y.Culled}};n([l()],s.prototype,"i3slayer",null),n([l(v)],s.prototype,"updatingProgress",void 0),n([l({type:I})],s.prototype,"filter",null),n([l({readOnly:!0})],s.prototype,"viewFilter",null),n([l(c.requiredFields)],s.prototype,"requiredFields",null),n([l(c.availableFields)],s.prototype,"availableFields",void 0),n([l()],s.prototype,"_fieldsHelper",void 0),n([l()],s.prototype,"_floorFilterClause",null),n([l()],s.prototype,"_excludeObjectIdsSorted",null),n([l()],s.prototype,"_setVisibilityHiddenObjectIds",void 0),n([l()],s.prototype,"_setVisibilityHiddenObjectIdsSorted",null),n([l()],s.prototype,"lodFactor",null),n([l()],s.prototype,"updatingProgressValue",null),n([l({readOnly:!0})],s.prototype,"visibleAtCurrentScale",null),s=n([w("esri.views.3d.layers.SceneLayerView3D")],s);const Ze=s;export{Ze as default};