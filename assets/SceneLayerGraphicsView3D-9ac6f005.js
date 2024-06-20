import{jn as V,cg as R,jo as H,am as y,ag as N,aL as q,aA as Q,gA as C,aI as U,hG as T,bt as z,bm as E,ew as D,jp as k,gT as B,bg as W,gw as F,jq as Z,bl as K,jr as Y,js as X,aP as G,hl as J,jt as ee,ju as te,jv as re,gN as ie,bv as A,bz as se,ah as p,ai as g,bA as oe,aQ as ae,ak as ne,bn as de,h0 as le}from"./index-6a39f5fd.js";import{S,e as he}from"./I3SOverrides-9641be25.js";import{n as ue}from"./LayerView3D-8e9aaca2.js";import{P as ce,l as pe}from"./FeatureLikeLayerView3D-a4148c82.js";import{c as ge,i as me,u as _e,f as fe,a as ye,j as be}from"./SceneLayerView-9ea41f56.js";import{h as ve,y as xe,$ as Ee,t as Ie,c as $}from"./I3SUtil-e9718971.js";import{t as we}from"./DefinitionExpressionSceneLayerView-f4d1c2d8.js";import{i as Ne}from"./PopupSceneLayerView-6ab0df5b.js";import{u as Ce}from"./popupUtils-8edf03a3.js";import"./I3SNode-eb9d3b3a.js";import"./I3SBinaryReader-57cb919e.js";import"./ReactiveSet-b6fa0baa.js";import"./meshFeatureSet-dcdd8d15.js";import"./External-f8876c85.js";import"./FeatureLayerView3D-b61873a3.js";import"./FeatureLayerViewBase3D-9f38d608.js";import"./query-549555fc.js";import"./pbfQueryUtils-da01cf7e.js";import"./pbf-b8e7c3b5.js";import"./EventedSet-6d0b2b87.js";import"./floorFilterUtils-73949d2d.js";import"./LayerView-3e7f79a7.js";import"./RefreshableLayerView-a35d9882.js";import"./dehydratedFeatureComparison-f2fc91ed.js";import"./queryForSymbologySnapping-cb53b2c7.js";import"./elevationInfoUtils-d136536c.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-fd2c2770.js";import"./optimizedFeatureQueryEngineAdapter-076ccf9b.js";import"./PooledRBush-9433f3c7.js";import"./quickselect-cab99df7.js";import"./QueryEngine-c6786e0f.js";import"./WhereClause-802159fe.js";import"./TimeOnly-6cba65ec.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-2f43b23e.js";import"./utils-03a91e6b.js";import"./generateRendererUtils-d32e46bc.js";import"./FeatureStore-acc744e6.js";import"./BoundsStore-a82611a0.js";import"./projectExtentUtils-6a2bc118.js";class P extends V{constructor(e){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:r=>[r.geometryBuffer]},e,{hasInitialize:!0})}}class Oe extends R{constructor(e,r){super(),this._updateAndCompare=e,this._notifyUpdated=r,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const e=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:e})}this._nodes.clear()}get length(){return this._graphics.size}get(e){return this._graphics.get(e)}getNode(e){return this._nodes.get(e)}hasNode(e){return this._nodes.has(e)}nodes(){return this._nodes.values()}addNode(e,r){this._nodes.set(e,r);const i=r.graphics;if(i.length===0)return;const s=new Set;for(let a=0;a<i.length;a++){const n=i[a],d=n.objectId,u=this._graphics.get(d);if(u){s.add(d),n!==u&&(i[a]=u);const h=this._duplicates.get(d);h?h.push(e):this._duplicates.set(d,[u.nodeIndex,e])}else n.nodeIndex=e,this._graphics.set(d,n)}s.size&&this._updateForeignGraphics(r);const o=s.size>0?i.filter(a=>!s.has(a.objectId)):i;o.length>0&&this.emit("change",{added:o,removed:[]})}removeNode(e){const r=this._nodes.get(e);if(!r)return void console.error("Removing unknown node");this._nodes.delete(e);const i=new Set,s=[];for(const o of r.graphics){const a=o.objectId,n=this._graphics.get(a);if(!n)continue;const d=this._duplicates.get(a);if(d){const u=d.indexOf(e);if(u===-1){console.error("error: removing graphic from node that should not reference it.");continue}if(d.splice(u,1),n.nodeIndex===e){let h=this.getNode(d[0]);for(let l=1;l<d.length;l++){const f=this.getNode(d[l]);(h==null||f!=null&&f.node.level>h.node.level)&&(h=f)}h!=null&&i.add(h)}d.length===1&&this._duplicates.delete(a)}else this._graphics.delete(a),s.push(o)}s.length>0&&this.emit("change",{added:[],removed:s}),i.forEach(o=>this._updateForeignGraphics(o))}_updateForeignGraphics(e){const r=[],i=e.node.index,s=e.node.level;let o=0;for(;o<e.graphics.length;){const a=e.graphics[o].nodeIndex;if(a===i){o++;continue}let n=1;for(;o+n<e.graphics.length&&e.graphics[o+n].nodeIndex===a;)n++;const d=this.getNode(a);if(d!=null&&d.node.level>s)o+=n;else{for(let u=o;u<o+n;u++){const h=e.graphics[u];h.nodeIndex=i,this._updateAndCompare(h,e,u)&&r.push(h)}o+=n}}this._notifyUpdated(r)}toArray(){return Array.from(this._graphics.values())}find(e){let r;return H(this._graphics,i=>!!e(i)&&(r=i,!0)),r}forEach(e){this._graphics.forEach(r=>e(r))}forEachNode(e){this._nodes.forEach((r,i)=>e(r,i))}get nodeCount(){return this._nodes.size}_checkInvariants(){const e=new Map;this._nodes.forEach((i,s)=>{s!==i.node.index&&console.error("Mismatched node index"),i.graphics.forEach(o=>{e.set(o.objectId,1+(e.get(o.objectId)??0));const a=this._duplicates.get(o.objectId);a&&!a.includes(s)&&console.error("Node not listed in duplicate list"),a||o.nodeIndex===s||console.error("Unique graphic does not reference owning node index")})}),this._graphics.size!==e.size&&console.error("Mismatch between actual and expected number of graphics");let r=0;e.forEach((i,s)=>{r+=i>1?1:0;const o=this._graphics.get(s);if(!o)return void console.error("Missing graphic entry");const a=this._nodes.get(o.nodeIndex);if(!a)return void console.error("Graphic references unkown node");const n=this._duplicates.get(s);n?(n.length!==i&&console.error("Wrong number of entries in duplicate list"),n.forEach(d=>{const u=this._nodes.get(d);u?u.node.level>a.node.level&&console.error("Duplicated graphic does not reference highest level node"):console.error("Unknown node in duplicate list")})):i>1&&console.error("Missing duplicates entry")}),this._duplicates.size!==r&&console.error("Mismatch between expected and actual number of duplicate entries")}}const j=ye();class De{constructor(e,r,i,s){this.graphics=e,this.featureIds=r,this.attributeInfo=i,this.node=s}}let c=class extends we(Ne(ue(be))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this._pendingEditsQueue=Promise.resolve(),this.loadedGraphics=new Oe((t,e,r)=>Ge(t,e,r),t=>this.processor.graphicsCore.recreateGraphics(t)),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(t,e){return t.url===this.layer.url&&this._i3sOverrides.isEmpty?t.load(e).then(()=>{ve(this.layer,t,this._i3sOverrides),this.layer=t,this._i3sOverrides.destroy();const r=this.view.resourceController?.memoryController;this._i3sOverrides=new S({view:this.view,layer:t,memoryController:r}),y(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()}):null}initialize(){this.addResolvingPromise(this.layer.indexInfo);const t=this.view.resourceController?.memoryController;this._i3sOverrides=new S({view:this.view,layer:this.layer,memoryController:t}),xe(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new ge({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,e=>this._rangeInfosChanged(e),N),this._updatingHandles.add(()=>this.layer.renderer,(e,r)=>this._rendererChange(e,r)),this._updatingHandles.add(()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted],()=>this._filterChange()),this.addHandles(q(()=>C.I3S_TREE_SHOW_TILES,e=>{if(e&&!this._treeDebugger){const r=this._controller.crsIndex;Q(()=>import("./I3STreeDebugger-6ebd3436.js"),["./I3STreeDebugger-6ebd3436.js","./index-6a39f5fd.js","./index-c3d91843.css","./TileTreeDebugger-cc512c34.js"],import.meta.url).then(({I3STreeDebugger:i})=>{!this._treeDebugger&&C.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new i({lv:this,view:this.view,nodeSR:r}))})}else e||!this._treeDebugger||C.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},N)),this._set("processor",new ce({owner:this,preferredUpdatePolicy:U.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:e=>this._updateClippingExtent(e)})),this.processor.elevationAlignment?.events.on("invalidate-elevation",e=>this._controller.updateElevationChanged(e.extent,e.spatialReference)),this.supportsHeightUnitConversion&&(this._verticalScale=T("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache(`psl-${this.uid}`),this._controller=new he({layerView:this,scaleVisibilityEnabled:!1}),Ee(this.layer.geometryDefinitions)&&(this._worker=new P(e=>this.view.resourceController.immediate.schedule(e))),this.addHandles(this.layer.on("apply-edits",e=>this._updatingHandles.addPromise(e.result))),this.addHandles(this.layer.on("edits",e=>{const r=this._pendingEditsQueue.then(()=>this._handleEdits(e)).then();this._pendingEditsQueue=r,this._updatingHandles.addPromise(r)})),this.when(()=>{this._setupQueryEngine(),this._updatingHandles.add(()=>this.maximumNumberOfFeatures,e=>this._controller.featureTarget=e,N),this._updatingHandles.add(()=>this.suspended,e=>{e&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._i3sOverrides=y(this._i3sOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=y(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){return this._controller?.updatingProgress??1}get requiredFields(){return this._fieldsHelper?.requiredFields??[]}get maximumNumberOfFeatures(){return this.processor?.graphicsCore?.displayFeatureLimit?.maximumNumberOfFeatures??0}set maximumNumberOfFeatures(t){t!=null?(this._override("maximumNumberOfFeatures",t),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){return!this.suspended&&!!this._controller?.useMaximumNumberOfFeatures&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const t=this.layer.excludeObjectIds;return t.length?t.toArray().sort((e,r)=>e-r):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}get contentVisible(){return!this.suspended&&!!this._controller?.rootNodeVisible}get legendEnabled(){return this.contentVisible&&this.i3slayer?.legendEnabled===!0}async whenGraphicAttributes(t,e){return Ie(this.layer,t,this._getObjectIdField(),e,()=>[...this.loadedGraphics.nodes()])}getHit(t){if(!this.loadedGraphics)return null;const e=z(this.loadedGraphics.find(i=>i.uid===t),this.layer),r=this._getObjectIdField();return e?.attributes?.[r]?(e.layer=this.layer,e.sourceLayer=this.layer,{type:"graphic",graphic:e,layer:e.layer}):null}whenGraphicBounds(t,e){return this.processor.whenGraphicBounds(t,e)}computeAttachmentOrigin(t,e){return this.processor.computeAttachmentOrigin(t,e)}isUpdating(){return!!(this._controller?.updating||this.processor?.updating||this._fieldsHelper?.updating||this.layerFilterUpdating)}highlight(t){return this.processor.highlight(t,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(t){return me(this._attributeEditingContext,t)}async _decompressBinaryPointData(t,e){const r={geometryBuffer:t.geometryBuffer};this._worker==null&&(this._worker=new P(s=>this.view.resourceController.immediate.schedule(s)));const i=await this._worker.invoke(r,e);if(i==null)throw new Error("Failed to decompress Draco point data");return{positionData:i.positions,featureIds:i.featureIds}}async addNode(t,e,r){if(!O(e)&&!Fe(e))throw new Error;if(this.loadedGraphics.hasNode(t.index))return void E.getLogger(this).error("I3S node "+t.id+" already added");const i=this.layer.fullExtent!=null?Ae(this.layer.fullExtent.clone(),.5):null,s=[],{featureIds:o,pointPositions:a}=O(e)?await this._extractBinaryPointPositions(t,e,r):this._extractLegacyPointPositions(e);this._validatePositions(t,o,a,i,s);const n=this._controller.crsVertex,d=this.view.spatialReference;D(a,n,0,a,d,0,o.length);const u=O(e)?t.level:0,h=this._createGraphics(o,a,t.index,u),l=new De(h,o,e.attributeDataInfo,t);if(await this._i3sOverrides.applyAttributeOverrides(l.featureIds,e.attributeDataInfo,r),t.numFeatures=l.graphics.length,this._updateNodeMemory(t),M(l),s.length>0&&(this._computeObb(t,s,n),this._controller.updateVisibility(t.index)),!this._controller.isGeometryVisible(t))return void this._cacheNodeData(l);if(this._verticalScale!=null)for(const v of l.graphics)this._verticalScale(v.geometry);const f=this.view._stage.renderView.objectAndLayerIdRenderHelper;if(f!=null){const v=k(this.view.map,this.layer.uid);for(let m=0;m<l.featureIds.length;m++){const I=l.featureIds[m];f.setUidToObjectAndLayerId(I,l.graphics[m].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled&&!v&&Ce(this.layer,this.view.popup?.defaultPopupTemplateEnabled),l.node.resources.attributes,m)}}this.loadedGraphics.addNode(t.index,l),this._controller.updateLoadStatus(t.index,!0),this._filterNode(l),this._treeDebugger&&this._treeDebugger.update()}_computeObb(t,e,r){const i=this._controller.crsIndex,s=i.isGeographic?this.view.renderSpatialReference:i;D(e,r,0,e,s,0,e.length/3),t.serviceObb=B(new le(e,3)),i.isGeographic&&W(t.serviceObb.center,s,t.serviceObb.center,i)}isNodeLoaded(t){return this.loadedGraphics.hasNode(t)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(t,e,r){const i=await this._decompressBinaryPointData(e,r),s=i.positionData,o=3,a=s.length/o,n=F(3*a),d=t.serviceObb!=null?t.serviceObb.center:[0,0,0],u=Math.abs(d[2])*2**-20;for(let h=0;h<a;h++){const l=h*o;n[l]=s[l]+d[0],n[l+1]=s[l+1]+d[1],n[l+2]=s[l+2]+d[2],Math.abs(n[l+2])<u&&(n[l+2]=0)}return{featureIds:i.featureIds?Z(i.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(t){const e=t.pointData.length,r=F(3*e),i=new Array;for(let s=0;s<e;s++){const o=t.pointData[s],a=o.featureDataPosition,n=a.length,d=o.geometries?.[0]??Se[n],u=o.featureIds[0];if(d.type!=="Embedded"||d.params.type!=="points"||n<2||n>3)continue;const h=d.params.vertexAttributes?.position??[0,0,0],l=3*i.length;r[l]=a[0]+h[0],r[l+1]=a[1]+h[1],r[l+2]=n===3?a[2]+h[2]:NaN,i.push(u)}return{featureIds:i,pointPositions:r}}_validatePositions(t,e,r,i,s){if(i==null&&t.serviceObb)return;const o=e.length,a=3;for(let n=0;n<o;n++){const d=n*a;K(x,r[d],r[d+1],r[d+2]);const u=!Number.isNaN(r[2]);i==null||(u?Y(i,x):X(i,x))||(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&E.getLogger(this).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&E.getLogger(this).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),t.serviceObb||s.push(x[0],x[1],x[2])}}_createGraphics(t,e,r,i){const s=t.length,o=3,a=this._getObjectIdField(),n=this.processor.graphicsCore,d=new Array,u=this.view.spatialReference;for(let h=0;h<s;h++){const l=t[h],f={};l!=null&&(f[a]=l);const v=l??G.generateUID(),m=h*o,I=isNaN(e[m+2])?void 0:e[m+2],w=J(e[m],e[m+1],I,u),b=this.loadedGraphics.get(v);if(b!=null)(b.level==null||b.level<i)&&(_.property="geometry",_.graphic=b,_.oldValue=b.geometry,_.newValue=w,b.geometry=w,b.level=i,n.graphicUpdateHandler(_)),d.push(b);else{const L=G.generateUID();d.push({objectId:v,uid:L,geometry:w,attributes:f,visible:!0,nodeIndex:r,level:i})}}return d}_updateNodeMemory(t){t.memory=4096+(t.numFeatures!=null?t.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(t){const e=t.graphics.reduce((r,i)=>ee(i)+r,te(t.featureIds)+1024);this._memCache.put(this._getMemCacheKey(t.node),t,e)}_getMemCacheKey(t){return`${t.index}`}_removeAllNodeData(){this.loadedGraphics.forEachNode((t,e)=>{if(t){const r=t.node;this._updateNodeMemory(r),this._cacheNodeData(t)}this._controller.updateLoadStatus(e,!1)}),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(t){const e=this._removeNodeStageData(t);e&&(this._updateNodeMemory(e.node),this._cacheNodeData(e))}_removeNodeStageData(t){const e=this.loadedGraphics.getNode(t);return e==null?null:(this._controller.updateLoadStatus(t,!1),this.loadedGraphics.removeNode(t),this._treeDebugger&&this._treeDebugger.update(),e)}async loadCachedNodeData(t){return this._memCache?.pop(this._getMemCacheKey(t))}async addCachedNodeData(t,e,r,i){this.loadedGraphics.hasNode(t.index)?E.getLogger(this).error("I3S node "+t.id+" already added"):(await this._i3sOverrides.applyAttributeOverrides(e.featureIds,r,i),this.loadedGraphics.addNode(t.index,e),this._controller.updateLoadStatus(t.index,!0),this._updateNodeMemory(t),e.attributeInfo=r,this._attributeValuesChanged(e),this._filterNode(e),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const t=[];return this.loadedGraphics.forEachNode(e=>t.push(e.node.id)),t.sort()}getVisibleNodes(){const t=new Array;return this.loadedGraphics.forEachNode(e=>t.push(e.node)),t}getLoadedNodeIndices(t){this.loadedGraphics.forEachNode((e,r)=>t.push(r))}getLoadedAttributes(t){const e=this.loadedGraphics.getNode(t);if(e?.attributeInfo!=null)return e.attributeInfo.loadedAttributes}getAttributeData(t){const e=this.loadedGraphics.getNode(t);if(e?.attributeInfo!=null)return e.attributeInfo.attributeData}_setAttributeData(t,e){const r=this.loadedGraphics.getNode(t);r?.attributeInfo!=null&&(r.attributeInfo.attributeData=e,this._attributeValuesChanged(r))}async updateAttributes(t,e,r){const i=this.loadedGraphics.getNode(t);i!=null&&(await this._i3sOverrides.applyAttributeOverrides(i.featureIds,e,r),i.attributeInfo=e,this._attributeValuesChanged(i))}_attributeValuesChanged(t){if(M(t),this._filterNode(t),this.processor.graphicsCore.labelsEnabled){const e=t.graphics.map(r=>r.uid);this.processor.graphicsCore.updateLabelingInfo(e)}}_updateClippingExtent(t){return this._controller&&this._controller.updateClippingArea(t),!1}_getObjectIdField(){return this.layer.objectIdField||re}_getGlobalIdField(){return this.layer.associatedLayer?.globalIdField}async _rendererChange(t,e){const{layer:{fieldsIndex:r}}=this,i=new Set;let s,o;t?(await t.collectRequiredFields(i,r),s=Array.from(i).sort()):s=[],i.clear(),e?(await e.collectRequiredFields(i,r),o=Array.from(i).sort()):o=[],s.length===o.length&&s.every((a,n)=>s[n]===o[n])||this._reloadAllNodes()}_rangeInfosChanged(t){t!=null&&t.length>0&&E.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode(t=>this._filterNode(t))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(t){const e=this.parsedDefinitionExpression,r=this._excludeObjectIdsSorted,i=this._getObjectIdField();for(const s of t.graphics){const o=s.visible,a=!e||this._evaluateClause(e,s),n=r==null||ie(r,s.attributes[i])<0;s.visible=a&&n,o!==s.visible&&(_.graphic=s,_.property="visible",_.oldValue=o,_.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(_))}}createQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(t):new A(t)}queryFeatures(t,e){return this._queryEngine.executeQuery(this._ensureQuery(t),e?.signal)}queryObjectIds(t,e){return this._queryEngine.executeQueryForIds(this._ensureQuery(t),e?.signal)}queryFeatureCount(t,e){return this._queryEngine.executeQueryForCount(this._ensureQuery(t),e?.signal)}queryExtent(t,e){return this._queryEngine.executeQueryForExtent(this._ensureQuery(t),e?.signal)}_ensureQuery(t){return this._addDefinitionExpressionToQuery(t==null?this.createQuery():A.from(t))}_setupQueryEngine(){const t=()=>this.processor.featureStore;this._queryEngine=new pe({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return t()},hasZ:this.hasZ,hasM:this.hasM},priority:se.FEATURE_QUERY_ENGINE})}get usedMemory(){return this.processor?.graphicsCore?.usedMemory??0}get unloadedMemory(){return .8*((this._controller?.unloadedMemoryEstimate??0)+(this.processor?.graphicsCore?.unprocessedMemoryEstimate??0))}get ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}async _handleEdits(t){const e=this._attributeEditingContext,r=await _e(e,t);fe(e,r)}get _attributeEditingContext(){const t=this._getObjectIdField(),e=this._getGlobalIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:t,globalIdField:e,forEachNode:r=>this.loadedGraphics.forEachNode(i=>r(i.node,i.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this._i3sOverrides,getAttributeData:r=>this.getAttributeData(r),setAttributeData:(r,i,s)=>{this._setAttributeData(r,i);const o=this.loadedGraphics.getNode(r);if(s!=null){const a=this.loadedGraphics.get(s.attributes[t]);a!=null&&this.processor.graphicsCore.recreateGraphics([a])}else o!=null&&this.processor.graphicsCore.recreateGraphics(o.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const t={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this.loadedGraphics.nodeCount,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(t),t}get test(){return{controller:this._controller,numNodes:this.loadedGraphics.nodeCount,loadedGraphics:this.loadedGraphics}}};p([g()],c.prototype,"processor",void 0),p([g({type:oe})],c.prototype,"filter",void 0),p([g()],c.prototype,"loadedGraphics",void 0),p([g()],c.prototype,"i3slayer",null),p([g()],c.prototype,"_controller",void 0),p([g()],c.prototype,"updating",void 0),p([g()],c.prototype,"suspended",void 0),p([g()],c.prototype,"holeFilling",void 0),p([g(ae)],c.prototype,"updatingProgress",void 0),p([g()],c.prototype,"updatingProgressValue",null),p([g(j.requiredFields)],c.prototype,"requiredFields",null),p([g(j.availableFields)],c.prototype,"availableFields",void 0),p([g()],c.prototype,"_fieldsHelper",void 0),p([g({type:Number})],c.prototype,"maximumNumberOfFeatures",null),p([g({readOnly:!0})],c.prototype,"maximumNumberOfFeaturesExceeded",null),p([g()],c.prototype,"_excludeObjectIdsSorted",null),p([g({readOnly:!0})],c.prototype,"lodFactor",null),p([g({readOnly:!0})],c.prototype,"hasM",null),p([g({readOnly:!0})],c.prototype,"hasZ",null),p([g()],c.prototype,"contentVisible",null),p([g({readOnly:!0})],c.prototype,"legendEnabled",null),c=p([ne("esri.views.3d.layers.SceneLayerGraphicsView3D")],c);const xt=c;function Fe(t){return"pointData"in t}function O(t){return"geometryBuffer"in t&&t.geometryBuffer!==null}function Ge(t,e,r){const i=e.attributeInfo;if(i?.loadedAttributes==null||i.attributeData==null)return!1;let s=!1;for(const{name:o}of i.loadedAttributes)if(i.attributeData[o]){const a=$(i.attributeData[o],r);a!==t.attributes[o]&&(t.attributes[o]=a,s=!0)}return s}function M(t){const e=t.attributeInfo,r=t.node.index;if(e?.loadedAttributes!=null&&e.attributeData!=null)for(let i=0;i<t.graphics.length;i++){const s=t.graphics[i];if(s.nodeIndex===r){s.attributes||(s.attributes={});for(const{name:o}of e.loadedAttributes)e.attributeData[o]&&(s.attributes[o]=$(e.attributeData[o],i))}}}function Ae(t,e){return t.xmin-=e,t.ymin-=e,t.xmax+=e,t.ymax+=e,t.zmin!=null&&t.zmax!=null&&(t.zmin-=e,t.zmax+=e),t.mmin!=null&&t.mmax!=null&&(t.mmin-=e,t.mmax+=e),t}const Se={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},x=de(),_={graphic:null,property:null,oldValue:null,newValue:null};export{xt as default};
