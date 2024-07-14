import{aj as s,ak as i,am as b,kU as q,hE as C,pL as re,cl as D,kb as k,h2 as se,aP as U,al as j,aG as ie,ci as G,cn as ae,aC as v,ce as oe,aR as ne,hA as le,ay as B,co as de,aw as p,cF as pe,aA as X,kG as ue,ar as ce,as as ye,at as he,h6 as fe,au as me,ho as ge,hp as ve,h3 as we,g7 as be,kH as Ie,ka as V,eh as Q,aK as m,ax as Le,gS as Fe,bk as Se,e5 as _e,aW as $e,iM as Te,hS as J,pM as Oe,bt as xe,hm as K,cf as A,be as Ee,c4 as je,hv as z,pN as Ae,hx as Pe,pO as Re,pP as De,mP as Ue,hy as Ne,kc as qe,kd as Ce,ke as M,h9 as ke,pQ as Ge,iN as Ve,iO as Qe,iP as Je,kh as Ke,pa as ze,iQ as Me,aF as He}from"./index-ea8d34f0.js";import{$ as We}from"./Mesh-d5405ccd.js";import{i as Ze,m as Be}from"./uploadAssetErrors-0e7d3fd2.js";import{L as Xe,C as H}from"./SceneService-64b94087.js";import{s as Ye}from"./associatedFeatureServiceUtils-53a042db.js";import{s as et}from"./capabilities-c607cf72.js";import{p as Y,a as tt,y as rt,m as st}from"./I3SLayerDefinitions-538e2844.js";import{r as it,t as at}from"./infoFor3D-a657d595.js";import{a as ot}from"./fetchService-fe2be4ba.js";import{j as nt}from"./persistable-6a82c6f7.js";import{$ as lt}from"./I3SUtil-eb78623d.js";import{n as dt,p as pt}from"./popupUtils-715b5c29.js";import"./MeshTransform-b669ea0a.js";import"./vertexSpaceConversion-75d16974.js";import"./External-e022f745.js";import"./I3SIndexInfo-c6fefab0.js";import"./resourceExtension-e0cca867.js";import"./I3SBinaryReader-500a0002.js";function ee({associatedLayer:e,serviceUpdateTimeStamp:t}){const r=e?.editingInfo?.lastEditDate,o=e?.serverGens,n=r!=null,l=t!=null,d=n&&l&&t.lastUpdate!==r.getTime();return n&&(d||!l&&o?.minServerGen!==o?.serverGen)}const ut=e=>{let t=class extends e{constructor(){super(...arguments),this.serviceTimeInfo=null}get timeInfo(){const r=this.associatedLayer?.timeInfo;if(r==null)return null;const o=r.clone();return k(o,this.fieldsIndex),o}set timeInfo(r){k(r,this.fieldsIndex),this._override("timeInfo",r)}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(r){this._override("timeExtent",r)}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(r){this._override("timeOffset",r)}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(r){this._override("datesInUnknownTimezone",r)}async loadTimeInfoFromService(r){const{serviceTimeInfo:o}=this;if(o==null)return;const{startTimeField:n,endTimeField:l}=o;if(n==null&&l==null||ee({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp}))return;const d=async y=>{let f=null;try{f=(await this.fetchStatistics?.(y,r))?.stats}catch{}if(f==null)return null;const{minTimeStr:I,min:T,maxTimeStr:O,max:x}=f,F=y===n?I??T:O??x;return F!=null?new Date(F):null},[u,c]=await Promise.all([d(n),d(l)]);if(n!=null&&u==null||l!=null&&c==null)return;const h=new C({start:u,end:c});this.setAtOrigin("timeInfo",new q({endField:l,startField:n,fullTimeExtent:h}),"service")}};return s([i({type:q,json:{read:!1,write:!1}})],t.prototype,"timeInfo",null),s([i({type:C,json:{read:!1,write:!1}})],t.prototype,"timeExtent",null),s([i({type:re,json:{read:!1,write:!1}})],t.prototype,"timeOffset",null),s([i({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"datesInUnknownTimezone",null),s([i({type:L,readOnly:!0,json:{read:{source:"timeInfo"}}})],t.prototype,"serviceTimeInfo",void 0),t=s([b("esri.layers.mixins.TemporalSceneLayer")],t),t};let L=class extends D{constructor(){super(...arguments),this.endTimeField=null,this.startTimeField=null}};s([i({type:String})],L.prototype,"endTimeField",void 0),s([i({type:String})],L.prototype,"startTimeField",void 0),L=s([b("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],L);let g=class extends D{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};s([i({type:String,json:{read:!0,write:!0}})],g.prototype,"name",void 0),s([i({type:String,json:{read:!0,write:!0}})],g.prototype,"field",void 0),s([i({type:[Number],json:{read:!0,write:!0}})],g.prototype,"currentRangeExtent",void 0),s([i({type:[Number],json:{read:!0,write:!0}})],g.prototype,"fullRangeExtent",void 0),s([i({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],g.prototype,"type",void 0),g=s([b("esri.layers.support.RangeInfo")],g);var _;let P=_=class extends se(U.ofType(j)){constructor(e){super(e)}clone(){return new _(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map(r=>{if(!t.equals(r.spatialReference)){if(!ie(r.spatialReference,t))return e?.messages&&e.messages.push(new G("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const n=new j;ae(r,n,t),r=n}const o=r.toJSON(e);return delete o.spatialReference,o}).filter(r=>r!=null):(e?.messages&&e.messages.push(new G("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(r=>r.toJSON(e)))}static fromJSON(e,t){const r=new _;return e.forEach(o=>r.add(j.fromJSON(o,t))),r}};P=_=s([b("esri.layers.support.PolygonCollection")],P);const $=P;var R;let w=R=class extends D{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new $,this._geometriesSource=null}initialize(){this.addHandles(oe(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,ne))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=$.fromJSON(e,r):this._geometriesSource={url:le(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:o}=this._geometriesSource,n=await B(r,{responseType:"json",signal:t?.signal}),l=e.toJSON(),d=n.data.map(u=>({...u,spatialReference:l}));this.geometries=$.fromJSON(d,o),this._geometriesSource=null}clone(){const e=new R({geometries:de(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};s([i({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],w.prototype,"spatialRelationship",void 0),s([i({type:$,nonNullable:!0,json:{write:!0}}),nt({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],w.prototype,"geometries",void 0),s([v(["web-scene","portal-item"],"geometries")],w.prototype,"readGeometries",null),w=R=s([b("esri.layers.support.SceneFilter")],w);const ct=w;async function yt({fieldName:e,statisticsInfo:t,errorContext:r,fieldsIndex:o,path:n,customParameters:l,apiKey:d,signal:u}){if(t==null)throw new p(`${r}:no-cached-statistics`,"Cached statistics are not available for this layer");const c=o.get(e);if(c==null)throw new p(`${r}:field-unexisting`,`Field '${e}' does not exist on the layer`);const h=t.find(I=>I.name===c.name);if(h==null)throw new p(`${r}:no-cached-statistics`,"Cached statistics for this attribute are not available");const y=pe(n,h.href),{data:f}=await B(y,{query:{f:"json",...l,token:d},responseType:"json",signal:u});return f}async function ht(e){const t=[];for(const r of e)r.name.toLowerCase().endsWith(".zip")?t.push(ft(r)):t.push(Promise.resolve(r));return(await Promise.all(t)).flat()}async function ft(e){const{BlobReader:t,ZipReader:r,BlobWriter:o}=await X(()=>import("./zipjs-wrapper-14b925a8.js"),[],import.meta.url),n=[];return(await new r(new t(e)).getEntries()).forEach(d=>{if(d.directory||/^__MACOS/i.test(d.filename))return;const u=new o,c=d.getData?.(u).then(h=>new File([h],d.filename));c&&n.push(c)}),Promise.all(n)}const mt=new Set(["3DObject","Point"]),W=Me();let a=class extends ut(ue(Xe(ce(ye(he(fe(me(ge(ve(we(He))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new U,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&r.type!=="inherited"?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new be(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:Y.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return this.associatedLayer!=null&&Ie(this.associatedLayer)}get geometryType(){return gt[this.profile]||"mesh"}set renderer(e){V(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=e??et;const{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:n,supportsUploadWithItemId:l,supportsGeometryUpdate:d,supportsReturnServiceEditsInSourceSpatialReference:u},data:{supportsZ:c,supportsM:h,isVersioned:y,supportsAttachment:f},operations:{supportsEditing:I,supportsAdd:T,supportsUpdate:O,supportsDelete:x,supportsQuery:F,supportsQueryAttachments:N,supportsAsyncConvert3D:te}}=e,S=e.operations.supportsChangeTracking,E=!!this.associatedLayer?.infoFor3D&&Q();return{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:u,supportsRollbackOnFailure:n,supportsGeometryUpdate:E&&d,supportsUploadWithItemId:l},data:{supportsAttachment:f,supportsZ:c,supportsM:h,isVersioned:y},operations:{supportsQuery:F,supportsQueryAttachments:N,supportsEditing:I&&S,supportsAdd:E&&T&&S,supportsDelete:E&&x&&S,supportsUpdate:O&&S,supportsAsyncConvert3D:te}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const r=t.store.profile;return r!=null&&Z[r]?Z[r]:(m.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}get useViewTime(){return this.associatedLayer?.useViewTime??!0}set useViewTime(e){this._override("useViewTime",e)}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=e!=null?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Le),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await this.loadTimeInfoFromService(e),await Fe(this,{origin:"service"},t),V(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){m.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new Se;return this.geometryType==="mesh"?this.associatedLayer?.infoFor3D&&(e.returnGeometry=!0):(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r?.features)for(const o of r.features)o.layer=this,o.sourceLayer=this;return r})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=_e(this.fieldsIndex,await dt(this,pt(this)));return lt(this.parsedUrl?.path??"",this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new p("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new $e;return o.attributes=r[0],o.layer=this,o.sourceLayer=this,o}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(m.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return Te(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){return await this.load(t),await this.fetchStatistics(e,t)}async saveAs(e,t){return this._debouncedSaveOperations(H.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(H.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await X(()=>import("./editingSupport-339cf55c.js"),["./editingSupport-339cf55c.js","./index-ea8d34f0.js","./index-a86c5357.css","./normalizeUtils-612d4dde.js","./normalizeUtilsCommon-fc88b37a.js","./infoFor3D-a657d595.js"],import.meta.url);let o=t;await this.load();const n=this.associatedLayer;if(!n)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");await n.load();const{globalIdField:l}=n,d=!!n.infoFor3D,u=o?.globalIdUsed??!0;if(d&&l==null)throw new p(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(d&&!u)throw new p(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return J(n.url)&&d&&e.deleteFeatures!=null&&l!=null&&(o={...o,globalIdToObjectId:await Oe(n,e.deleteFeatures,l)}),r(this,n.source,e,o)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){const r=y=>{throw m.getLogger(this).error(".convertMesh()",y.message),y};await this.load(),this.infoFor3D||r(new p("invalid:layer","SceneLayer has no capability for mesh conversion"));const o=await this.extractAndFilterFiles(e),n=o.reduce((y,f)=>it(this.infoFor3D,f)?y+1:y,0);n===0&&r(new Ze),n>1&&r(new Be);const l=this.spatialReference,d=t?.location??new xe({x:0,y:0,z:0,spatialReference:l}),u=d.spatialReference.isGeographic?"local":"georeferenced",c=We.createWithExternalSource(d,o,{vertexSpace:u}),[h]=await this.uploadAssets([c],t);return h}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await ht(e)).filter(r=>at(t,r)):e}validateLayer(e){if(e.layerType&&!mt.has(e.layerType))throw new p("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,o){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const d=o&&o.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=d;break;case"vertex-reference-frame":n=!0,l=!d;break;default:n=!1}}if(!n)throw new p("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new p("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new p("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!!this.attributeStorageInfo?.some(n=>n.name===e.name),r=!!this.associatedLayer?.fields?.some(n=>n&&e.name===n.name),o={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=o}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=K(this);for(let r=0;r<e.length;r++){const o=e[r],n=this.originIdOf(o),l=this.associatedLayer.originIdOf(o);n<l&&(l===A.SERVICE||l===A.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],l)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.getAtOrigin("fullExtent","service");Q()&&this.associatedLayer?.infoFor3D!=null&&e&&J(this.associatedLayer?.url)&&ee(this)&&K(this).setAtOrigin("fullExtent",e.clone(),A.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:o}=await Ye(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),n=await ot.FeatureLayer();this.associatedLayer=new n({url:t,customParameters:this.customParameters,layerId:r,portalItem:o}),await this.associatedLayer.load()}catch(t){Ee(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await je(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?m.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):m.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&z(m.getLogger(this),Ae("Mesh scene layers","relative-to-scene",e)),z(m.getLogger(this),Pe("Scene layers",e))}async fetchStatistics(e,t){return await yt({fieldName:e,statisticsInfo:this.statisticsInfo,errorContext:"scenelayer",fieldsIndex:this.fieldsIndex,path:this.parsedUrl?.path??"",customParameters:this.customParameters,apiKey:this.apiKey,signal:t?.signal})}};s([i({types:{key:"type",base:Re,typeMap:{selection:De}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],a.prototype,"featureReduction",void 0),s([i({type:[g],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],a.prototype,"rangeInfos",void 0),s([i({json:{read:!1}})],a.prototype,"associatedLayer",void 0),s([i({type:["show","hide"]})],a.prototype,"listMode",void 0),s([i({type:["ArcGISSceneServiceLayer"]})],a.prototype,"operationalLayerType",void 0),s([i({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),s([i({...W.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"fields",void 0),s([i()],a.prototype,"types",null),s([i()],a.prototype,"typeIdField",null),s([i()],a.prototype,"templates",null),s([i()],a.prototype,"formTemplate",null),s([i({readOnly:!0,clonable:!1})],a.prototype,"fieldsIndex",null),s([i({type:Ue,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],a.prototype,"floorInfo",void 0),s([i(W.outFields)],a.prototype,"outFields",void 0),s([i({type:Y,readOnly:!0,json:{read:!1}})],a.prototype,"nodePages",void 0),s([v("service","nodePages",["nodePages","pointNodePages"])],a.prototype,"readNodePages",null),s([i({type:[tt],readOnly:!0})],a.prototype,"materialDefinitions",void 0),s([i({type:[rt],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),s([i({type:[st],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),s([i({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),s([i({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),s([i({readOnly:!0})],a.prototype,"statisticsInfo",void 0),s([i({type:U.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],a.prototype,"excludeObjectIds",void 0),s([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),s([i({type:ct,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],a.prototype,"filter",void 0),s([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([i(Ne)],a.prototype,"elevationInfo",null),s([i({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),s([i({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),s([i({type:String})],a.prototype,"geometryType",null),s([i(qe)],a.prototype,"labelsVisible",void 0),s([i({type:[Ce],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:M},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:M},write:!0}})],a.prototype,"labelingInfo",void 0),s([i(ke)],a.prototype,"legendEnabled",void 0),s([i({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if(typeof e=="number"&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return r!==void 0?Ge(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],a.prototype,"opacity",void 0),s([i({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"priority",void 0),s([i({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"semantic",void 0),s([i({types:Ve,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",null),s([i({json:{read:!1}})],a.prototype,"cachedDrawingInfo",void 0),s([v("service","cachedDrawingInfo")],a.prototype,"readCachedDrawingInfo",null),s([i({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),s([i({type:Boolean,json:{read:!1}})],a.prototype,"editingEnabled",null),s([i({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"infoFor3D",null),s([i({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"relationships",null),s([i(Qe)],a.prototype,"popupEnabled",void 0),s([i({type:Je,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),s([i({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),s([i({type:String,json:{read:!1}})],a.prototype,"objectIdField",void 0),s([v("service","objectIdField",["objectIdField","fields"])],a.prototype,"readObjectIdField",null),s([i({type:String,json:{read:!1}})],a.prototype,"globalIdField",void 0),s([v("service","globalIdField",["globalIdField","fields"])],a.prototype,"readGlobalIdField",null),s([i({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),s([i({type:String,json:{read:!1}})],a.prototype,"profile",void 0),s([v("service","profile",["store.profile"])],a.prototype,"readProfile",null),s([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),s([i(Ke)],a.prototype,"screenSizePerspectiveEnabled",void 0),s([i({json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"serviceItemId",void 0),s([i(ze)],a.prototype,"useViewTime",null),a=s([b("esri.layers.SceneLayer")],a);const Z={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},gt={"mesh-pyramids":"mesh",points:"point"},Nt=a;export{Nt as default};