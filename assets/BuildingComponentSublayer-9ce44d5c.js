import{al as g,ah as t,ai as r,aC as p,fl as m,h3 as y,ak as u,h4 as v,bm as b,h5 as L,cf as w,e8 as F,ds as h,h6 as I,ax as S,bv as O,bF as x,av as l,aP as j,ch as T,bh as q,h7 as $,h8 as E,h9 as Q,ha as P,co as A,hb as D,hc as N}from"./index-6a39f5fd.js";import{s as R}from"./capabilities-c607cf72.js";import{r as U}from"./I3SIndexInfo-69ba1964.js";import{s as _,l as C,u as B,m as M}from"./I3SLayerDefinitions-264d8d41.js";import{i as K}from"./I3SUtil-e9718971.js";import{n as Z,p as k}from"./popupUtils-8edf03a3.js";let o=class extends g(v){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],o.prototype,"title",void 0),t([p("service","title",["alias","name"])],o.prototype,"readTitle",null),t([r()],o.prototype,"layer",void 0),t([r({type:m,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),t([p("service","id")],o.prototype,"readIdOnlyOnce",null),t([r(y(String))],o.prototype,"modelName",void 0),t([r(y(Boolean))],o.prototype,"isEmpty",void 0),t([r({type:Boolean,nonNullable:!0})],o.prototype,"legendEnabled",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],o.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],o.prototype,"opacity",void 0),o=t([u("esri.layers.buildingSublayers.BuildingSublayer")],o);const V=o,c="esri.layers.buildingSublayers.BuildingComponentSublayer",G=b.getLogger(c),d=N();let i=class extends L.LoadableMixin(w(V)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new F(this.fields)}readAssociatedLayer(e,s){const a=this.layer.associatedFeatureServiceItem,n=s.associatedLayerID;return a!=null&&typeof n=="number"?new h({portalItem:a,layerId:n}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=e!=null?e.signal:null,a=this._fetchService(s).then(()=>{this.indexInfo=U(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,G,s)});return this.addResolvingPromise(a),Promise.resolve(this)}createPopupTemplate(e){return I(this,e)}async _fetchService(e){const s=(await S(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){const a=this.getFeatureType(s?.feature)?.domains?.[e];return a&&a.type!=="inherited"?a:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:R,{query:s,data:{supportsZ:a,supportsM:n,isVersioned:f}}=e;return{query:s,data:{supportsZ:a,supportsM:n,isVersioned:f}}}createQuery(){const e=new O;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryFeatures(e||this.createQuery(),s)).then(a=>{if(a?.features)for(const n of a.features)n.layer=this.layer,n.sourceLayer=this;return a})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryObjectIds(e||this.createQuery(),s))}async queryCachedAttributes(e,s){const a=x(this.fieldsIndex,await Z(this,k(this)));return K(this.parsedUrl.path,this.attributeStorageInfo,e,s,a)}async queryCachedFeature(e,s){const a=await this.queryCachedAttributes(e,[s]);if(!a||a.length===0)throw new l("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const n=new j;return n.attributes=a[0],n.layer=this,n.sourceLayer=this,n}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new l("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new l("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],i.prototype,"parsedUrl",null),t([r({type:_,readOnly:!0})],i.prototype,"nodePages",void 0),t([r({type:[C],readOnly:!0})],i.prototype,"materialDefinitions",void 0),t([r({type:[B],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),t([r({type:[M],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],i.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],i.prototype,"rootNode",void 0),t([r({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),t([r(d.fields)],i.prototype,"fields",void 0),t([r({readOnly:!0})],i.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:h})],i.prototype,"associatedLayer",void 0),t([p("service","associatedLayer",["associatedLayerID"])],i.prototype,"readAssociatedLayer",null),t([r(d.outFields)],i.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],i.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),t([r({readOnly:!0,type:String})],i.prototype,"apiKey",null),t([r({readOnly:!0,type:T})],i.prototype,"fullExtent",null),t([r({readOnly:!0,type:q})],i.prototype,"spatialReference",null),t([r({readOnly:!0})],i.prototype,"version",null),t([r({readOnly:!0,type:$})],i.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],i.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],i.prototype,"listMode",void 0),t([r({types:E,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r(Q)],i.prototype,"popupEnabled",void 0),t([r({type:P,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),t([r()],i.prototype,"types",null),t([r()],i.prototype,"typeIdField",null),t([r({json:{write:!1}}),A(new D({"3DObject":"3d-object",Point:"point"}))],i.prototype,"layerType",void 0),t([r()],i.prototype,"geometryType",null),t([r()],i.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),i=t([u(c)],i);const ee=i;export{ee as C,V as n};
