import{ah as t,ai as o,ak as $,hM as Q,bd as g,iS as L,as as C,fb as N,ap as k,iK as x,iL as z,cM as H,ch as J,f4 as w,cX as Z,aB as U}from"./index-8b5e7d9b.js";import"./UniqueValueRenderer-176db886.js";import{m as V,u as K}from"./jsonUtils-3d6448c4.js";import{S as W,h as R,x as F,T as X,I as Y,F as ee,k as te,j as re,b as oe}from"./ogcFeatureUtils-e3521781.js";import{d as ie}from"./FeatureSet-05a1ff98.js";import{i as se}from"./APIKeyMixin-9d7343aa.js";import{a as pe}from"./BlendLayer-dce91235.js";import{o as ne}from"./CustomParametersMixin-45f14a7d.js";import{p as ae}from"./FeatureEffectLayer-50d5188d.js";import{c as le}from"./FeatureReductionLayer-826e078c.js";import{u as ue}from"./OperationalLayer-5c10068f.js";import{c as de}from"./OrderedLayer-b68b3bb4.js";import{j as ce}from"./PortalLayer-c3739096.js";import{t as ye}from"./ScaleRangeLayer-5b526f5a.js";import{a as me}from"./TemporalLayer-683091de.js";import{f as fe,m as he,c as ge,y as ve,p as Se,d as be}from"./commonProperties-60f31277.js";import{n as Ce}from"./FeatureType-347e5e8f.js";import{s as xe}from"./fieldProperties-49b9eb67.js";import{C as we}from"./LabelClass-06cdad9c.js";import{i as Re}from"./labelingInfo-4784a348.js";import{b as I}from"./Query-630c5d65.js";import{p as Fe}from"./popupUtils-6f3d55df.js";import"./ColorStop-ac9a118d.js";import"./diffUtils-3ed1f592.js";import"./colorRamps-cf6fa9ce.js";import"./DictionaryLoader-1a1ab2cc.js";import"./FieldsIndex-85e142d0.js";import"./heatmapUtils-3c0e0ece.js";import"./geojson-ede2d4c1.js";import"./date-430969b3.js";import"./clientSideDefaults-7259c628.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./defaultsJSON-59981e75.js";import"./jsonUtils-16d33138.js";import"./FeatureEffect-40ff6b77.js";import"./FeatureFilter-5ab88729.js";import"./FeatureReductionSelection-4ea33fb1.js";import"./featureLayerUtils-d891b150.js";import"./featureQueryAll-778379dd.js";import"./AttachmentQuery-ac66f9a7.js";import"./RelationshipQuery-249800df.js";import"./MD5-715f37cd.js";import"./ElevationInfo-36952bdf.js";import"./FeatureTemplate-0e5c0008.js";import"./defaults-4b2d7493.js";let d=class extends Q{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:i,spatialReference:s,supportedCrs:p},layer:{apiKey:l,customParameters:a,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:i,maxRecordCount:n,queryParameters:{apiKey:l,customParameters:a},spatialReference:s,supportedCrs:p}}queryExtent(e,i={}){return null}queryFeatureCount(e,i={}){return null}queryFeatures(e,i={}){return this.queryFeaturesJSON(e,i).then(s=>ie.fromJSON(s))}queryFeaturesJSON(e,i={}){const s=this.getSource();return this.load(i).then(()=>W(s,e,i))}queryObjectIds(e,i={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,i){const s=new RegExp(`^${i}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,i){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:i,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){const i=e?.components?.parameters;return i?.limit?.schema?.maximum??i?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const i=e.storageCrs??R,s=F(i);return s==null?g.WGS84:new g({wkid:s})}_getSupportedSpatialReferences(e,i){const s="#/crs",p=e.crs??[R],l=p.includes(s)?p.filter(n=>n!==s).concat(i.crs??[]):p,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(n=>!a.test(n))}async _loadOGCServices(e,i){const s=i!=null?i.signal:null,{apiKey:p,collectionId:l,customParameters:a,fields:n,geometryType:O,hasZ:T,objectIdField:D,timeInfo:j,url:E}=e,P={fields:n?.map(u=>u.toJSON()),geometryType:L.toJSON(O),hasZ:T??!1,objectIdField:D,timeInfo:j?.toJSON()},c={apiKey:p,customParameters:a,signal:s},m=await X(E,c),[v,S]=await Promise.all([Y(m,c),ee(m,c)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new C("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=S.collections.find(u=>u.id===l);if(!y)throw new C("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await te(m,c):null,b=await re(y,P,c),q=this._getMaxRecordCount(_),M=this._getCapabilities(b.hasZ,q),A=this._getStorageSpatialReference(y).toJSON(),G=this._getSupportedSpatialReferences(y,S),B=new RegExp(`^${oe}`,"i"),f={};for(const u of G){const h=F(u);h!=null&&(f[h]||(f[h]=u.replace(B,"")))}this.featureDefinition={capabilities:M,collection:y,layerDefinition:b,spatialReference:A,supportedCrs:f}}};t([o()],d.prototype,"featureDefinition",void 0),t([o({constructOnly:!0})],d.prototype,"layer",void 0),t([o()],d.prototype,"type",void 0),d=t([$("esri.layers.graphics.sources.OGCFeatureSource")],d);const Ie=xe();let r=class extends se(ne(le(ae(pe(de(me(ye(ue(ce(N(k(U)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}on(e,i){return super.on(e,i)}createPopupTemplate(e){return Fe(this,e)}createQuery(){return new I}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,i){let s,p=!1;const l=i?.feature?.attributes,a=this.typeIdField&&l?.[this.typeIdField];return a!=null&&this.types&&(p=this.types.some(n=>n.id==a&&(s=n.domains?.[e],s?.type==="inherited"&&(s=this._getLayerDomain(e)),!0))),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,i){return this.load().then(()=>this.source.queryFeatures(I.from(e)||this.createQuery(),i)).then(s=>(s?.features?.forEach(p=>{p.layer=p.sourceLayer=this}),s))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),x(this.renderer,this.fieldsIndex),z(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const i of this.fields)if(i.name===e&&i.domain)return i.domain;return null}};t([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],r.prototype,"capabilities",void 0),t([o({type:String,json:{write:!0}})],r.prototype,"collectionId",void 0),t([o({type:String})],r.prototype,"copyright",void 0),t([o({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),t([o({type:String})],r.prototype,"definitionExpression",void 0),t([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],r.prototype,"description",void 0),t([o({type:String})],r.prototype,"displayField",void 0),t([o({type:Number})],r.prototype,"effectiveMaxRecordCount",null),t([o(fe)],r.prototype,"elevationInfo",void 0),t([o({type:[H],json:{origins:{service:{name:"layerDefinition.fields"}}}})],r.prototype,"fields",void 0),t([o(Ie.fieldsIndex)],r.prototype,"fieldsIndex",void 0),t([o({readOnly:!0,type:J,json:{origins:{service:{name:"layerDefinition.extent"}}}})],r.prototype,"fullExtent",void 0),t([o({type:w.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:w.read}}}}})],r.prototype,"geometryType",void 0),t([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],r.prototype,"hasZ",void 0),t([o({type:Boolean,readOnly:!0})],r.prototype,"isTable",null),t([o({type:[we],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Re},write:!0}}}})],r.prototype,"labelingInfo",void 0),t([o(he)],r.prototype,"labelsVisible",void 0),t([o(ge)],r.prototype,"legendEnabled",void 0),t([o({type:Number})],r.prototype,"maxRecordCount",void 0),t([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],r.prototype,"objectIdField",void 0),t([o({type:["OGCFeatureLayer"]})],r.prototype,"operationalLayerType",void 0),t([o(ve)],r.prototype,"popupEnabled",void 0),t([o({type:Z,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),t([o({types:V,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:K,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],r.prototype,"renderer",null),t([o(Se)],r.prototype,"screenSizePerspectiveEnabled",void 0),t([o({readOnly:!0})],r.prototype,"source",void 0),t([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],r.prototype,"spatialReference",void 0),t([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],r.prototype,"title",void 0),t([o({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),t([o({type:String,readOnly:!0})],r.prototype,"typeIdField",void 0),t([o({type:[Ce]})],r.prototype,"types",void 0),t([o(be)],r.prototype,"url",void 0),r=t([$("esri.layers.OGCFeatureLayer")],r);const vt=r;export{vt as default};
