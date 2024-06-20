import{ah as t,ai as r,ak as $,h5 as B,c6 as L,bh as g,iF as N,av as C,fe as k,ff as J,ik as z,il as H,eW as Z,ij as U,fd as V,eY as W,aq as K,ar as X,eX as Y,as as ee,im as b,h6 as te,bv as w,io as se,ip as re,eJ as oe,ch as ie,eK as R,ir as ne,is as pe,iq as ae,e$ as le,h9 as ue,ha as de,iu as ce,h8 as ye,iv as he,ix as fe,aE as me,hc as ge,aF as ve}from"./index-6a39f5fd.js";import{S as Se,h as F,x as I,T as xe,I as Ce,F as be,k as we,j as Re,b as Fe}from"./ogcFeatureUtils-f7b9cf68.js";import"./geojson-c74452f6.js";import"./date-430969b3.js";import"./clientSideDefaults-54e3531a.js";import"./QueryEngineCapabilities-85c4f1d0.js";let d=class extends B{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:o,spatialReference:i,supportedCrs:n},layer:{apiKey:l,customParameters:a,effectiveMaxRecordCount:p}}=this;return{type:"ogc-source",collection:e,layerDefinition:o,maxRecordCount:p,queryParameters:{apiKey:l,customParameters:a},spatialReference:i,supportedCrs:n}}queryExtent(e,o={}){return null}queryFeatureCount(e,o={}){return null}queryFeatures(e,o={}){return this.queryFeaturesJSON(e,o).then(i=>L.fromJSON(i))}queryFeaturesJSON(e,o={}){const i=this.getSource();return this.load(o).then(()=>Se(i,e,o))}queryObjectIds(e,o={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,o){const i=new RegExp(`^${o}$`,"i");return e.conformsTo.some(n=>i.test(n))??!1}_getCapabilities(e,o){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:o,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){const o=e?.components?.parameters;return o?.limit?.schema?.maximum??o?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const o=e.storageCrs??F,i=I(o);return i==null?g.WGS84:new g({wkid:i})}_getSupportedSpatialReferences(e,o){const i="#/crs",n=e.crs??[F],l=n.includes(i)?n.filter(p=>p!==i).concat(o.crs??[]):n,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(p=>!a.test(p))}async _loadOGCServices(e,o){const i=o!=null?o.signal:null,{apiKey:n,collectionId:l,customParameters:a,fields:p,geometryType:O,hasZ:T,objectIdField:D,timeInfo:j,url:E}=e,P={fields:p?.map(u=>u.toJSON()),geometryType:N.toJSON(O),hasZ:T??!1,objectIdField:D,timeInfo:j?.toJSON()},c={apiKey:n,customParameters:a,signal:i},h=await xe(E,c),[v,S]=await Promise.all([Ce(h,c),be(h,c)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new C("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=S.collections.find(u=>u.id===l);if(!y)throw new C("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await we(h,c):null,x=await Re(y,P,c),q=this._getMaxRecordCount(_),A=this._getCapabilities(x.hasZ,q),M=this._getStorageSpatialReference(y).toJSON(),G=this._getSupportedSpatialReferences(y,S),Q=new RegExp(`^${Fe}`,"i"),f={};for(const u of G){const m=I(u);m!=null&&(f[m]||(f[m]=u.replace(Q,"")))}this.featureDefinition={capabilities:A,collection:y,layerDefinition:x,spatialReference:M,supportedCrs:f}}};t([r()],d.prototype,"featureDefinition",void 0),t([r({constructOnly:!0})],d.prototype,"layer",void 0),t([r()],d.prototype,"type",void 0),d=t([$("esri.layers.graphics.sources.OGCFeatureSource")],d);const Ie=ge();let s=class extends k(J(z(H(Z(U(V(W(K(X(Y(ee(ve)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){b(e,this.fieldsIndex),this._set("renderer",e)}on(e,o){return super.on(e,o)}createPopupTemplate(e){return te(this,e)}createQuery(){return new w}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,o){let i,n=!1;const l=o?.feature?.attributes,a=this.typeIdField&&l?.[this.typeIdField];return a!=null&&this.types&&(n=this.types.some(p=>p.id==a&&(i=p.domains?.[e],i?.type==="inherited"&&(i=this._getLayerDomain(e)),!0))),n||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,o){return this.load().then(()=>this.source.queryFeatures(w.from(e)||this.createQuery(),o)).then(i=>(i?.features?.forEach(n=>{n.layer=n.sourceLayer=this}),i))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),b(this.renderer,this.fieldsIndex),se(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const o of this.fields)if(o.name===e&&o.domain)return o.domain;return null}};t([r({readOnly:!0,json:{origins:{service:{read:!0}}}})],s.prototype,"capabilities",void 0),t([r({type:String,json:{write:!0}})],s.prototype,"collectionId",void 0),t([r({type:String})],s.prototype,"copyright",void 0),t([r({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([r({type:String})],s.prototype,"definitionExpression",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],s.prototype,"description",void 0),t([r({type:String})],s.prototype,"displayField",void 0),t([r({type:Number})],s.prototype,"effectiveMaxRecordCount",null),t([r(re)],s.prototype,"elevationInfo",void 0),t([r({type:[oe],json:{origins:{service:{name:"layerDefinition.fields"}}}})],s.prototype,"fields",void 0),t([r(Ie.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([r({readOnly:!0,type:ie,json:{origins:{service:{name:"layerDefinition.extent"}}}})],s.prototype,"fullExtent",void 0),t([r({type:R.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:R.read}}}}})],s.prototype,"geometryType",void 0),t([r({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],s.prototype,"hasZ",void 0),t([r({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),t([r({type:[ne],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:pe},write:!0}}}})],s.prototype,"labelingInfo",void 0),t([r(ae)],s.prototype,"labelsVisible",void 0),t([r(le)],s.prototype,"legendEnabled",void 0),t([r({type:Number})],s.prototype,"maxRecordCount",void 0),t([r({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],s.prototype,"objectIdField",void 0),t([r({type:["OGCFeatureLayer"]})],s.prototype,"operationalLayerType",void 0),t([r(ue)],s.prototype,"popupEnabled",void 0),t([r({type:de,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),t([r({types:ce,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:ye,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],s.prototype,"renderer",null),t([r(he)],s.prototype,"screenSizePerspectiveEnabled",void 0),t([r({readOnly:!0})],s.prototype,"source",void 0),t([r({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],s.prototype,"spatialReference",void 0),t([r({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],s.prototype,"title",void 0),t([r({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),t([r({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),t([r({type:[fe]})],s.prototype,"types",void 0),t([r(me)],s.prototype,"url",void 0),s=t([$("esri.layers.OGCFeatureLayer")],s);const Pe=s;export{Pe as default};
