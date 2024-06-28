import{aj as l,ak as u,am as b,aq as x,dI as L,aZ as w,om as P,j9 as R,ij as H,oL as D,oM as Z,oN as I,ah as O,c$ as W,aR as J,aL as K,hS as X,bk as T,bw as Y,ax as tt,aK as et,bi as it,oO as st,oP as rt,oQ as nt,fs as at,bE as ot,oR as N,dH as lt,by as S,oS as ut,oT as $,oU as V,jq as ht,cd as dt,fM as U,aB as f,bx as F,hP as ct,aQ as M,c4 as pt,hV as _t}from"./index-ab96db07.js";import{m as ft}from"./FeatureStore-536287ab.js";import{$ as gt}from"./QueryEngine-e4c55ed5.js";import{i as j,r as z,n as q}from"./symbologySnappingCandidates-d4c20b1f.js";import{a as yt}from"./pbfQueryUtils-ffe030d9.js";import{x as mt,f as Et,c as Ft,S as Tt}from"./query-f1663770.js";import{o as Ct}from"./BoundsStore-e64d6a6f.js";import"./optimizedFeatureQueryEngineAdapter-6cdbde2c.js";import"./normalizeUtils-050de560.js";import"./normalizeUtilsCommon-6ab3a73c.js";import"./WhereClause-11cd8876.js";import"./TimeOnly-0ea1f14a.js";import"./json-48e3ea08.js";import"./utils-b5d3e760.js";import"./utils-6fba2c13.js";import"./utils-3bd43217.js";import"./ClassBreaksDefinition-78fccd7d.js";import"./pbf-b4a86cc9.js";import"./PooledRBush-81406012.js";import"./quickselect-6bdb87cc.js";let C=class extends x{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(t,i){this._pending.push({promise:t,callback:i}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const t=this._pending[0];t.promise.then(i=>t.callback(i)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};l([u()],C.prototype,"updating",void 0),C=l([b("esri.core.AsyncSequence")],C);class St{constructor(t,i){this.data=t,this.resolution=i,this.state={type:a.CREATED},this.alive=!0}process(t){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case a.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(t,i){return{type:a.FETCH_COUNT,previous:t,task:w(async s=>{const r=await P(i.fetchCount(this,s));this.state.type===a.FETCH_COUNT&&(this.state=bt(this.state,r.ok?r.value:1/0))})}}_gotoFetchFeatures(t,i){return{type:a.FETCH_FEATURES,previous:t,task:w(async s=>{const r=await P(i.fetchFeatures(this,t.featureCount,s));this.state.type===a.FETCH_FEATURES&&(this.state=vt(this.state,r.ok?r.value:[]))})}}_goToDone(t,i){return i.finish(this,t.features),{type:a.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:a.CREATED},t.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:t.task.abort()}}intersects(t){return t==null||!this.data.extent||(R(t,B),H(this.data.extent,B))}}function bt(e,t){return{type:a.FETCHED_COUNT,featureCount:t,previous:e}}function vt(e,t){return{type:a.FETCHED_FEATURES,previous:e,features:t}}var a;(function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"})(a||(a={}));const B=L();let d=class extends x{get _minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const t=new Set;return this.objectIdField&&t.add(this.objectIdField),this.globalIdField&&t.add(this.globalIdField),t}set outFields(t){const i=this._get("outFields"),s=D(t,this._mandatoryOutFields);Z(s,i)||(this._set("outFields",s),I(s,i)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(t){const i=this._get("filter"),s=this._filterProperties(t);JSON.stringify(i)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(t){const i=this._get("customParameters");JSON.stringify(i)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const i=this._get("tileInfo");i!==t&&(t!=null&&i!=null&&JSON.stringify(t)===JSON.stringify(i)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.suspended=!0,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new O,this._pendingEdits=new C,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,(t,i)=>{W(t,i,({id:s},{id:r})=>s===r)||this._process()},J),this.addHandles(K(()=>!this.suspended,()=>this._process()))}destroy(){this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._process()}applyEdits(t){this._pendingEdits.push(t,async i=>{if(i.addedFeatures.length===0&&i.updatedFeatures.length===0&&i.deletedFeatures.length===0)return;for(const[,r]of this._pendingTiles)r.reset();const s={...i,deletedFeatures:i.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))};await this._updatingHandles.addPromise(this.store.processEdits(s,(r,n)=>this._queryFeaturesById(r,n),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!X(this.url))return;const t=w(async i=>{try{const s=await mt(this.url,new T({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:i});this.store.extent=Y.fromJSON(s.data?.extent)}catch(s){tt(s),et.getLogger(this).warn("Failed to fetch data extent",s)}});this._updatingHandles.addPromise(t.promise.then(()=>this._process())),this.addHandles(it(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(t=>t.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,t]of this._pendingTiles)t.alive=!1}_createPendingTiles(){if(this.suspended)return;const t=this._collectMissingTilesInfo();if(this._setAvailability(t==null?1:t.coveredArea/t.fullArea),t!=null)for(const{data:i,resolution:s}of t.missingTiles){const r=this._pendingTiles.get(i.id);r?(r.resolution=s,r.alive=!0):this._createPendingTile(i,s)}}_collectMissingTilesInfo(){let t=null;for(let i=this.tilesOfInterest.length-1;i>=0;i--){const s=this.tilesOfInterest[i],r=this.store.process(s,(n,o)=>this._verifyTileComplexity(n,o),this.outFields);t==null?t=r:t.prepend(r)}return t}_deletePendingTiles(){for(const[,t]of this._pendingTiles)t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(i,s)=>this._fetchCount(i,s),fetchFeatures:(i,s,r)=>this._fetchFeatures(i,s,r),finish:(i,s)=>this._finishPendingTile(i,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const[,i]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(i.data),i.resolution)&&this._updatingHandles.addPromise(i.process(t))}_verifyTileComplexity(t,i){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,i)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<It}_verifyFeatureDensity(t,i){if(this.tileInfo==null)return!1;const s=this.tileSize*i;return t*(Ot/(s*s))<At}_ensureFetchAllCounts(t){let i=!0;for(const[,s]of this._pendingTiles)s.state.type<a.FETCHED_COUNT&&this._updatingHandles.addPromise(s.process(t)),s.state.type<=a.FETCH_COUNT&&(i=!1);return i}_finishPendingTile(t,i){this.store.add(t.data,i),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(t==null?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,i){const s=new St(t,i);return this._pendingTiles.set(t.id,s),s}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,i){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:v,signal:i})}async _fetchFeatures(t,i,s){let r=0;const n=[];let o=0,h=i;for(;;){const c=this._createFeaturesQuery(t),p=this._setPagingParameters(c,r,h),{features:_,exceededTransferLimit:G}=await this._queryFeatures(c,s);p&&(r+=c.num),o+=_.length;for(const Q of _)n.push(Q);if(h=i-o,!p||!G||h<=0)return n}}_filterProperties(t){return t==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const i=this.globalIdField,s=this.objectIdField;if(i==null)throw new Error("Expected globalIdField to be defined");let r=null;if(this.store.featureStore.forEach(n=>{t===n.attributes[i]&&(r=n.objectId??n.attributes[s])}),r==null)throw new Error(`Expected to find a feature with globalId ${t}`);return r}_queryFeaturesById(t,i){const s=this._createFeaturesQuery();return s.objectIds=t,this._queryFeatures(s,i)}_queryFeatures(t,i){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,i):this._queryFeaturesJSON(t,i)}async _queryFeaturesPBF(t,i){const{sourceSpatialReference:s}=this,{data:r}=await Et(this.url,t,new yt({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:v,signal:i});return st(r)}async _queryFeaturesJSON(t,i){const{sourceSpatialReference:s}=this,{data:r}=await Ft(this.url,t,s,{query:this._configuration.customParameters,timeout:v,signal:i});return rt(r,this.objectIdField)}_createCountQuery(t){const i=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0),i}_createFeaturesQuery(t=null){const i=this._createBaseQuery(t),s=t?.data!=null?this.store.getAttributesForTile(t?.data?.id):null,r=D(nt(this.outFields,s??new Set),this._mandatoryOutFields);return i.outFields=Array.from(r),i.returnGeometry=!0,t!=null&&(this.capabilities.query.supportsResultType?i.resultType="tile":this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0)),i}_createBaseQuery(t){const i=new T({returnZ:this.hasZ,returnM:!1,geometry:this.tileInfo!=null&&t!=null?at(t.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return s!=null&&(i.where=s.where,i.gdbVersion=s.gdbVersion,i.timeExtent=s.timeExtent),i.outSpatialReference=this.spatialReference,i}_setPagingParameters(t,i,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:o,maxRecordCount:h,supportsResultType:c}=this.capabilities.query,p=r?T.MAX_MAX_RECORD_COUNT_FACTOR:1,_=p*((c||n)&&o?o:h||wt);return t.start=i,r?(t.maxRecordCountFactor=Math.min(p,Math.ceil(s/_)),t.num=Math.min(s,t.maxRecordCountFactor*_)):t.num=Math.min(s,_),!0}};l([u({constructOnly:!0})],d.prototype,"url",void 0),l([u({constructOnly:!0})],d.prototype,"objectIdField",void 0),l([u({constructOnly:!0})],d.prototype,"globalIdField",void 0),l([u({constructOnly:!0})],d.prototype,"capabilities",void 0),l([u({constructOnly:!0})],d.prototype,"sourceSpatialReference",void 0),l([u({constructOnly:!0})],d.prototype,"spatialReference",void 0),l([u({constructOnly:!0})],d.prototype,"store",void 0),l([u({readOnly:!0})],d.prototype,"_minimumVerticesPerFeature",null),l([u()],d.prototype,"_mandatoryOutFields",null),l([u()],d.prototype,"outFields",null),l([u()],d.prototype,"suspended",void 0),l([u()],d.prototype,"filter",null),l([u()],d.prototype,"customParameters",null),l([u({readOnly:!0})],d.prototype,"_configuration",null),l([u()],d.prototype,"tileInfo",null),l([u()],d.prototype,"tileSize",null),l([u()],d.prototype,"tilesOfInterest",void 0),l([u({readOnly:!0})],d.prototype,"updating",null),l([u({readOnly:!0})],d.prototype,"updatingExcludingEdits",null),l([u({readOnly:!0})],d.prototype,"availability",void 0),l([u()],d.prototype,"hasZ",null),d=l([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],d);const wt=2e3,v=6e5,It=1e6,Ot=25,At=1;class xt{constructor(){this._store=new Map,this._byteSize=0}set(t,i){this.delete(t),this._store.set(t,i),this._byteSize+=i.byteSize}delete(t){const i=this._store.get(t);return!!this._store.delete(t)&&(i!=null&&(this._byteSize-=i.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,i){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),i(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const i=this._store.get(t);i&&(this._store.delete(t),this._store.set(t,i))}}let y=class extends x{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*ot.MEGABYTES,this._tileBounds=new Ct,this._tiles=new xt,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=L()}add(e,t){for(const r of t)this._referenceFeature(r.objectId);const i=this.featureStore.upsertMany(t),s=i.map(r=>new Set(Object.keys(r.attributes))).reduce((r,n)=>N(r,n),new Set(Object.keys(i[0]?.attributes??[])));this._addTileStorage(e,new Set(i.map(r=>r.objectId)),Ht(i),s),this._tiles.applyByteSizeLimit(this.maximumByteSize,r=>this._removeTileStorage(r))}getAttributesForTile(e){return e?this._tiles.get(e)?.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,i){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,i)}_addTileStorage(e,t,i,s){const r=e.id;this._tiles.set(r,new Nt(e,t,i,s)),this._tileBounds.set(r,e.extent),this._tileFeatureCounts.set(r,t.size)}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const s of e.objectIds)this._unreferenceFeature(s)===m.REMOVED&&t.push(s);this.featureStore.removeManyById(t);const i=e.data.id;this._tiles.delete(i),this._tileBounds.delete(i)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this._tiles){for(const i of e)t.objectIds.delete(i);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}async _processEditsRefetch(e,t,i){const s=(await t(e,i)).features,{hasZ:r,hasM:n}=this.featureStore;for(const o of s){const h=lt(this._tmpBoundingRect,o.geometry,r,n);h!=null&&this._tileBounds.forEachInBounds(h,c=>{const p=this._tiles.get(c);this.featureStore.add(o);const _=o.objectId;p.objectIds.has(_)||(p.objectIds.add(_),this._referenceFeature(_),this._tileFeatureCounts.set(p.data.id,p.objectIds.size))})}}process(e,t=()=>!0,i){if(this.tileInfo==null||!e.extent||this.extent!=null&&!H(R(this.extent,this._tmpBoundingRect),e.extent))return new A(e);const s=this.getAttributesForTile(e.id);if(I(i,s))return new A(e);const r=this._createTileTree(e,this.tileInfo);return this._simplify(r,t,null,0,1),this._collectMissingTiles(e,r,this.tileInfo,i)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){return this._tileFeatureCounts.get(e.id)??0}async fetchCount(e,t,i,s){const r=this._tileFeatureCounts.get(e.id);if(r!=null)return r;const n=await Tt(t,i,s);return this._tileFeatureCounts.set(e.id,n.data.count),n.data.count}_createTileTree(e,t){const i=new k(e.level,e.row,e.col);return t.updateTileInfo(i,S.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,s=>{const r=this._tiles.get(s)?.data;r&&Rt(e,r)&&this._populateChildren(i,r,t,this._tileFeatureCounts.get(r.id)||0)}),i}_populateChildren(e,t,i,s){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,o=t.col>>r,h=e.row<<1,c=o-(e.col<<1)+(n-h<<1),p=e.children[c];if(p!=null)this._populateChildren(p,t,i,s);else{const _=new k(e.level+1,n,o);i.updateTileInfo(_,S.ExtrapolateOptions.POWER_OF_TWO),e.children[c]=_,this._populateChildren(_,t,i,s)}}_simplify(e,t,i,s,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),i!=null&&(i.children[s]=null),n);const o=r/2,h=o*o;let c=0;for(let p=0;p<e.children.length;p++){const _=e.children[p];c+=_!=null?this._simplify(_,t,e,p,o):h}return c===0?this._mergeChildren(e):1-c/n<Ut&&(this._purge(e),i!=null&&(i.children[s]=null),c=n),c}_mergeChildren(e){const t=new Set;let i,s=0;this._forEachLeaf(e,r=>{const n=this._tiles.get(r.id);if(n){i=i?N(i,n.attributeKeys):new Set(n.attributeKeys),s+=n.byteSize;for(const o of n.objectIds)t.has(o)||(t.add(o),this._referenceFeature(o));this._remove(r)}}),this._addTileStorage(e,t,s,i??new Set),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const i of e.children)i!=null&&(i.isLeaf?t(i):this._forEachLeaf(i,t))}_purge(e){if(e!=null)if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const i=e.children[t];this._purge(i),e.children[t]=null}}_collectMissingTiles(e,t,i,s){const r=new $t(i,e,this.extent);return this._collectMissingTilesRecurse(t,r,1,s),r.info}_collectMissingTilesRecurse(e,t,i,s){const r=this.getAttributesForTile(e.id),n=r&&!I(s,r);if(n&&t.addMissing(e.level,e.row,e.col,i),e.isLeaf)return;if(!e.hasChildren)return void(n||t.addMissing(e.level,e.row,e.col,i));const o=i/2;for(let h=0;h<e.children.length;h++){const c=e.children[h];c==null?t.addMissing(e.level+1,(e.row<<1)+((2&h)>>1),(e.col<<1)+(1&h),o):this._collectMissingTilesRecurse(c,t,o,s)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),t===1?m.ADDED:m.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return t===0?(this._refCounts.delete(e),m.REMOVED):(t>0&&this._refCounts.set(e,t),m.UNCHANGED)}get test(){}};function Rt(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const i=e.level<t.level,s=i?e:t,r=i?t:e,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}function Ht(e){return e.reduce((t,i)=>t+Pt(i),0)}function Pt(e){return 32+Dt(e.geometry)+ut(e.attributes)}function Dt(e){if(e==null)return 0;const t=$(e.lengths,4);return 32+$(e.coords,8)+t}l([u({constructOnly:!0})],y.prototype,"featureStore",void 0),l([u()],y.prototype,"tileInfo",void 0),l([u()],y.prototype,"extent",void 0),l([u()],y.prototype,"maximumByteSize",void 0),y=l([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],y);let Nt=class{constructor(t,i,s,r){this.data=t,this.objectIds=i,this.byteSize=s,this.attributeKeys=r}};class k{constructor(t,i,s){this.level=t,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}}let A=class{constructor(t,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=V(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}},$t=class{constructor(t,i,s){this._tileInfo=t,this._extent=null,this.info=new A(i),s!=null&&(this._extent=R(s))}addMissing(t,i,s,r){const n=new ht(null,t,i,s);this._tileInfo.updateTileInfo(n,S.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!H(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=V(n.extent))}};const Ut=.18751;var m;(function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"})(m||(m={}));let E=class extends dt.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=U(),this._elevationAligner=j(),this._elevationFilter=z(),this._symbologyCandidatesFetcher=q(),this._updatingHandles=new O,this._editsUpdatingHandles=new O,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(e,t)=>{const i={query:e},s=await this.remoteClient.invoke("alignElevation",i,{signal:t});return f(t),s},this._getSymbologyCandidates=async(e,t)=>{const i={candidates:e,spatialReference:this._spatialReference.toJSON()},s=await this.remoteClient.invoke("getSymbologyCandidates",i,{signal:t});return f(t),s}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){this._featureFetcher?.destroy(),this._queryEngine?.destroy(),this._featureStore?.clear()}async setup(e){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:i,timeInfo:s,fieldsIndex:r}=e.serviceInfo,{hasZ:n}=e,o=F.fromJSON(e.spatialReference);this._spatialReference=o,this._featureStore=new ft({...e.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new gt({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fieldsIndex:r,hasZ:n,hasM:!1,objectIdField:i,timeInfo:s}),this._featureFetcher=new d({store:new y({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:o,sourceSpatialReference:F.fromJSON(e.serviceInfo.spatialReference),customParameters:e.configuration.customParameters});const h=e.configuration.viewType==="3d";return this._elevationAligner=j(h,{elevationInfo:e.elevationInfo!=null?ct.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=z(h),this.addHandles([M(()=>this._featureFetcher.availability,c=>this.emit("notify-availability",{availability:c}),J),M(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),g}async setSuspended(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),f(t),this._featureFetcher.suspended=e,g}async updateOutFields(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),f(t),this._featureFetcher.outFields=new Set(e??[]),g}async fetchCandidates(e,t){await this._whenSetup.promise,f(t);const i=Mt(e),s=t?.signal,r=await this._queryEngine.executeQueryForSnapping(i,s);f(s);const n=await this._elevationAligner.alignCandidates(r.candidates,F.fromJSON(e.point.spatialReference)??F.WGS84,s);f(s);const o=await this._symbologyCandidatesFetcher.fetch(n,s);f(s);const h=o.length===0?n:n.concat(o);return{result:{candidates:this._elevationFilter.filter(i,h)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),f(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=e.tileInfo!=null?S.fromJSON(e.tileInfo):null,g}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),f(t),this._featureFetcher.refresh(),g}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),f(t),await pt(()=>!this.updatingExcludingEdits,t),f(t),g}async getDebugInfo(e,t){return f(t),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(e,t){this._updatingHandles.addPromise(this._whenSetup.promise),f(t);const i=U();return this._pendingApplyEdits.set(e.id,i),this._featureFetcher.applyEdits(i.promise),this._editsUpdatingHandles.addPromise(i.promise),g}async endApplyEdits(e,t){const i=this._pendingApplyEdits.get(e.id);return i&&i.resolve(e.edits),f(t),g}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),g}async notifySymbologyChange(e,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),g}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=q(e,this._getSymbologyCandidates),g}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=e.filter!=null?T.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};l([u({readOnly:!0})],E.prototype,"updating",null),l([u({readOnly:!0})],E.prototype,"updatingExcludingEdits",null),l([u()],E.prototype,"_isInitializing",void 0),E=l([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],E);const he=E;function Mt(e){if(!e.filter)return{...e,query:{where:"1=1"}};const{distance:t,units:i,spatialRel:s,where:r,timeExtent:n,objectIds:o}=e.filter,h={geometry:e.filter.geometry?_t(e.filter.geometry):void 0,distance:t,units:i,spatialRel:s,timeExtent:n,objectIds:o,where:r??"1=1"};return{...e,query:h}}const g={result:{}};export{he as default};
