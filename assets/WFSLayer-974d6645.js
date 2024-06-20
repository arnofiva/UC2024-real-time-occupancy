import{ah as t,ai as r,ak as S,h5 as q,aW as R,c6 as $,ch as I,av as P,eK as m,jb as C,g5 as E,c8 as N,c4 as U,ij as J,ff as _,ik as k,il as W,eW as X,fd as Y,eX as D,eY as L,aq as Q,ar as V,as as G,bh as x,im as F,io as Z,eJ as j,iE as M,dD as z,h6 as A,bv as y,fk as B,ip as K,cq as H,iq as ee,ir as te,is as ie,e$ as re,fl as b,jc as se,h9 as oe,ha as ae,iu as ne,h8 as le,iv as pe,aE as de,hc as ue,aF as ye}from"./index-6a39f5fd.js";import{l as ce,o as me}from"./clientSideDefaults-54e3531a.js";import{v as he,W as fe,q as ge,V as we,S as ve}from"./wfsUtils-d6930983.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./geojson-c74452f6.js";import"./date-430969b3.js";import"./xmlUtils-444cb4c0.js";let d=class extends q{constructor(){super(...arguments),this._connection=null,this.capabilities=ce(!1,!1),this.type="wfs",this.refresh=R(async e=>{await this.load();const{extent:i}=await this._connection.invoke("refresh",e);return i&&(this.sourceJSON.extent=i),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const i=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:i})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,i={}){await this.load(i);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,i);return $.fromJSON(o)}async queryFeaturesJSON(e,i={}){return await this.load(i),this._connection.invoke("queryFeatures",e?e.toJSON():null,i)}async queryFeatureCount(e,i={}){return await this.load(i),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,i)}async queryObjectIds(e,i={}){return await this.load(i),this._connection.invoke("queryObjectIds",e?e.toJSON():null,i)}async queryExtent(e,i={}){await this.load(i);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,i);return{count:o.count,extent:I.fromJSON(o.extent)}}async querySnapping(e,i={}){return await this.load(i),this._connection.invoke("querySnapping",e,i)}async _createLoadOptions(e){const{url:i,customParameters:o,name:n,namespaceUri:l,fields:a,geometryType:u,swapXY:h}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!i)throw new P("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await he(i,{customParameters:o,...e}));const f=["fields","geometryType","name","namespaceUri","swapXY"].some(w=>this.layer[w]==null),p=f?await fe(this.wfsCapabilities,n,l,{spatialReference:c,customParameters:o,signal:e?.signal}):{...ge(a??[]),geometryType:u,name:n,namespaceUri:l,spatialReference:c,swapXY:h},g=we(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri),T=m.toJSON(p.geometryType);return{customParameters:o,featureType:g,fields:p.fields?.map(w=>w.toJSON())??[],geometryField:p.geometryField,geometryType:T,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:p.objectIdField,spatialReference:p.spatialReference?.toJSON(),swapXY:!!p.swapXY}}async _startWorker(e){const[i,o]=await C([this._createLoadOptions(e),E("WFSSourceWorker",{...e,strategy:N("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=i.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=i.value;this._connection=o.value;const u=(await this._connection.invoke("load",a,e)).extent;this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:U},extent:u,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:me(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([r()],d.prototype,"capabilities",void 0),t([r({constructOnly:!0})],d.prototype,"layer",void 0),t([r()],d.prototype,"sourceJSON",void 0),t([r()],d.prototype,"type",void 0),t([r()],d.prototype,"wfsCapabilities",void 0),d=t([S("esri.layers.graphics.sources.WFSSource")],d);var v;const O=ue();let s=v=class extends J(_(k(W(X(Y(D(L(Q(V(G(ye))))))))))){static fromWFSLayerInfo(e){const{customParameters:i,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:h,spatialReference:c,swapXY:f,url:p,wfsCapabilities:g}=e;return new v({customParameters:i,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:h,spatialReference:c,swapXY:f,url:p,wfsCapabilities:g})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=x.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),F(this.renderer,this.fieldsIndex),Z(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,i,o){const n=e.filter(l=>l.name!==ve);this.geometryField&&n.unshift(new j({name:this.geometryField,alias:this.geometryField,type:"geometry"})),M(o,n.map(l=>l.toJSON()),i)}get parsedUrl(){return z(this.url)}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return A(this,e)}createQuery(){const e=new y;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:o}=this;return e.timeExtent=i!=null&&o!=null?o.offset(-i.value,i.unit):o||null,e}getFieldDomain(e,i){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,i){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),i)).then(o=>{if(o?.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,i){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),i))}queryFeatureCount(e,i){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),i))}queryExtent(e,i){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),i))}async hasDataChanged(){try{const{dataChanged:e,updates:i}=await this.source.refresh(this.customParameters);return i!=null&&this.read(i,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([r({readOnly:!0})],s.prototype,"capabilities",null),t([r({type:String})],s.prototype,"copyright",void 0),t([r({readOnly:!0})],s.prototype,"createQueryVersion",null),t([r({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],s.prototype,"customParameters",void 0),t([r(B("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),t([r({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([r({type:String})],s.prototype,"displayField",void 0),t([r(K)],s.prototype,"elevationInfo",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),t([r({type:[j],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),t([H("fields")],s.prototype,"writeFields",null),t([r(O.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([r({type:I,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),t([r()],s.prototype,"geometryField",void 0),t([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:m.read},write:{target:"layerDefinition.geometryType",writer:m.write,ignoreOrigin:!0},origins:{service:{read:m.read}}}})],s.prototype,"geometryType",void 0),t([r({type:String})],s.prototype,"id",void 0),t([r(ee)],s.prototype,"labelsVisible",void 0),t([r({type:[te],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ie},write:!0}})],s.prototype,"labelingInfo",void 0),t([r(re)],s.prototype,"legendEnabled",void 0),t([r({type:["show","hide"]})],s.prototype,"listMode",void 0),t([r({type:String})],s.prototype,"objectIdField",void 0),t([r({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),t([r({type:b,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxFeatures",void 0),t([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),t([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),t([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),t([r(se)],s.prototype,"opacity",void 0),t([r(O.outFields)],s.prototype,"outFields",void 0),t([r({readOnly:!0})],s.prototype,"parsedUrl",null),t([r(oe)],s.prototype,"popupEnabled",void 0),t([r({type:ae,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),t([r({types:ne,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:le,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),t([r(pe)],s.prototype,"screenSizePerspectiveEnabled",void 0),t([r({readOnly:!0})],s.prototype,"source",void 0),t([r({type:x,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),t([r({readOnly:!0,type:[b],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),t([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),t([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),t([r({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([r(de)],s.prototype,"url",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),t([r()],s.prototype,"wfsCapabilities",null),s=v=t([S("esri.layers.WFSLayer")],s);const Te=s;export{Te as default};
