import{cU as Q,ah as r,ai as o,ak as b,cG as j,cH as c,dm as A,cX as L,cm as $,az as S,d6 as N,g$ as h,n2 as W,gH as Y,n3 as G,bi as Z,cJ as D,as as ee,aH as te,aI as ie}from"./index-8b5e7d9b.js";import{t as E,p as M}from"./FeatureReductionSelection-4ea33fb1.js";import{b as O,j as se,l as g}from"./UniqueValueRenderer-176db886.js";import{m as B,o as I,p as ne}from"./jsonUtils-3d6448c4.js";import{m as U,y as H}from"./commonProperties-60f31277.js";import{D as J}from"./featureLayerUtils-d891b150.js";import{C as q}from"./LabelClass-06cdad9c.js";import{x as X}from"./MD5-715f37cd.js";let v=class extends Q(j){constructor(t){super(t),this.expression=null,this.title=null,this.returnType=null}};r([o({type:String,json:{write:!0}})],v.prototype,"expression",void 0),r([o({type:String,json:{write:!0}})],v.prototype,"title",void 0),r([o({type:String,json:{write:!0}})],v.prototype,"returnType",void 0),v=r([b("esri.layers.support.ExpressionInfo")],v);const V=v;var _;let f=_=class extends j{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new _({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:c(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};r([o({type:Boolean,json:{write:!0}})],f.prototype,"isAutoGenerated",void 0),r([o({type:String,json:{write:!0}})],f.prototype,"name",void 0),r([o({type:String,json:{write:!0}})],f.prototype,"alias",void 0),r([o({type:String,json:{write:!0}})],f.prototype,"onStatisticField",void 0),r([o({type:V,json:{write:!0}})],f.prototype,"onStatisticExpression",void 0),r([o({type:String,json:{write:!0}})],f.prototype,"statisticType",void 0),f=_=r([b("esri.layers.support.AggregateField")],f);const y=f;var F;const re="esri.layers.support.FeatureReductionBinning";let d=F=class extends E{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(e,t,s){const n=e.filter(l=>l.statisticType!=="avg_angle").map(l=>l.toJSON());N(s,n,t)}readRenderer(e,t,s){const n=t.drawingInfo?.renderer;return n?I(n,t,s)??void 0:J(t,s)}clone(){return new F({fields:c(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:c(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:c(this.popupTemplate),renderer:c(this.renderer)})}};r([A({binning:"binning"})],d.prototype,"type",void 0),r([A({geohash:"geohash"})],d.prototype,"binType",void 0),r([o({type:Number,range:{min:1,max:9},json:{write:!0}})],d.prototype,"fixedBinLevel",void 0),r([o({type:[q],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],d.prototype,"labelingInfo",void 0),r([o(U)],d.prototype,"labelsVisible",void 0),r([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],d.prototype,"maxScale",void 0),r([o(H)],d.prototype,"popupEnabled",void 0),r([o({type:L,json:{name:"popupInfo",write:!0}})],d.prototype,"popupTemplate",void 0),r([o({type:[y],json:{write:!0}})],d.prototype,"fields",void 0),r([$("fields")],d.prototype,"writeFields",null),r([o({types:B,json:{write:{target:"drawingInfo.renderer"}}})],d.prototype,"renderer",void 0),r([S("renderer",["drawingInfo.renderer"])],d.prototype,"readRenderer",null),d=F=r([b(re)],d);const K=d;var R;const oe="esri.layers.support.FeatureReductionCluster";function k(e){return e.type==="simple"&&!e.visualVariables?.length}let p=R=class extends j{constructor(e){super(e),this.type="cluster",this.clusterRadius=h("80px"),this.clusterMinSize=h("12px"),this.clusterMaxSize=h("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(e,t,s){const n=t.drawingInfo?.renderer;return n?.authoringInfo?.isAutoGenerated?null:n?k(n)?null:I(n,t,s)??void 0:J(t,s)}readSymbol(e,t,s){const n=t.drawingInfo?.renderer;return n?.authoringInfo?.isAutoGenerated?null:n&&k(n)?I(n,t,s)?.symbol:null}writeSymbol(e,t,s,n){const l=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||l){const i=new ne({symbol:e});t.drawingInfo={renderer:i.write({},n)}}}writeFields(e,t,s){const n=e.filter(l=>l.statisticType!=="avg_angle").map(l=>l.toJSON());N(s,n,t)}readFields(e,t,s){return e.filter(n=>!n.isAutoGenerated).map(n=>y.fromJSON(n))}clone(){return new R({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:c(this.labelingInfo),labelsVisible:this.labelsVisible,fields:c(this.fields),maxScale:this.maxScale,renderer:c(this.renderer),symbol:c(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:c(this.popupTemplate)})}};r([o({type:["cluster"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),r([o({type:Number,cast:e=>e==="auto"?e:h(e),json:{write:!0}})],p.prototype,"clusterRadius",void 0),r([o({type:Number,cast:h,json:{write:!0}})],p.prototype,"clusterMinSize",void 0),r([o({type:Number,cast:h,json:{write:!0}})],p.prototype,"clusterMaxSize",void 0),r([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],p.prototype,"maxScale",void 0),r([o(H)],p.prototype,"popupEnabled",void 0),r([o({type:L,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],p.prototype,"popupTemplate",void 0),r([o({types:B,json:{write:{target:"drawingInfo.renderer"}}})],p.prototype,"renderer",void 0),r([S("renderer",["drawingInfo.renderer"])],p.prototype,"readRenderer",null),r([o({types:W})],p.prototype,"symbol",void 0),r([S("symbol",["drawingInfo.renderer"])],p.prototype,"readSymbol",null),r([$("symbol")],p.prototype,"writeSymbol",null),r([o({type:[q],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],p.prototype,"labelingInfo",void 0),r([o(U)],p.prototype,"labelsVisible",void 0),r([o({type:[y],json:{write:!0}})],p.prototype,"fields",void 0),r([$("fields")],p.prototype,"writeFields",null),r([S("fields")],p.prototype,"readFields",null),p=R=r([b(oe)],p);const P=p,C={key:"type",base:E,typeMap:{cluster:P,binning:K}},le={types:{key:"type",base:E,typeMap:{selection:M,cluster:P,binning:K}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:C},"portal-item":{types:C},"web-scene":{types:{key:"type",base:E,typeMap:{selection:M}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:Y}}}}};var T;let w=T=class extends O{writeLevels(e,t,s){for(const n in e){const l=this.levels[n];return void(t.stops=l)}}clone(){return new T({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:G(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:G(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone(),levels:c(this.levels)})}};r([o()],w.prototype,"levels",void 0),r([$("levels")],w.prototype,"writeLevels",null),w=T=r([b("esri.views.2d.engine.LevelDependentSizeVariable")],w);const ae=Z.getLogger("esri.views.2d.layers.support.clusterUtils");D.add("esri-cluster-arcade-enabled",!0);const ue=D("esri-cluster-arcade-enabled"),pe=(e,t,s,n,l)=>{const i=t.clone();if(!me(i))return i;if(i.authoringInfo||(i.authoringInfo=new se),i.authoringInfo.isAutoGenerated=!0,"visualVariables"in i){const u=(i.visualVariables||[]).filter(a=>a.valueExpression!=="$view.scale"),z=de(u);u.forEach(a=>{a.type==="rotation"?a.field?a.field=m(e,a.field,"avg_angle","number"):a.valueExpression&&(a.field=x(e,a.valueExpression,"avg_angle","number"),a.valueExpression=null):a.normalizationField?(a.field=m(e,a.field,"avg_norm","number",a.normalizationField),a.normalizationField=null):a.field?a.field=m(e,a.field,"avg","number"):a.valueExpression&&(a.field=x(e,a.valueExpression,"avg","number"),a.valueExpression=null)}),z==null&&!ce(u)&&l&&(u.push(fe(s,n)),i.dynamicClusterSize=!0),i.visualVariables=u}switch(i.type){case"simple":break;case"pie-chart":for(const u of i.attributes)u.field?u.field=m(e,u.field,"sum","number"):u.valueExpression&&(u.field=x(e,u.valueExpression,"sum","number"),u.valueExpression=null);break;case"unique-value":i.field?i.field=m(e,i.field,"mode","string"):i.valueExpression&&(i.field=x(e,i.valueExpression,"mode","string"),i.valueExpression=null);break;case"class-breaks":i.normalizationField?(i.field=m(e,i.field,"avg_norm","number",i.normalizationField),i.normalizationField=null):i.field?i.field=m(e,i.field,"avg","number"):i.valueExpression&&(i.field=x(e,i.valueExpression,"avg","number"),i.valueExpression=null)}return i},de=e=>{for(const t of e)if(t.type==="size")return t;return null},ce=e=>{for(const t of e)if(t.field==="cluster_count")return!0;return!1},fe=(e,t)=>{const s=[new g({value:0,size:0}),new g({value:1})];if(t==null)return new O({field:"cluster_count",stops:[...s,new g({value:2,size:0})]});const n=Object.keys(t).reduce((l,i)=>({...l,[i]:[...s,new g({value:Math.max(2,t[i].minValue),size:e.clusterMinSize}),new g({value:Math.max(3,t[i].maxValue),size:e.clusterMaxSize})]}),{});return new w({field:"cluster_count",levels:n})},me=e=>{const t=s=>ae.error(new ee("Unsupported-renderer",s,{renderer:e}));if(!e)return!1;switch(e.type){case"unique-value":if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const s=e.normalizationType;if(s!=="field")return t(`FeatureReductionCluster does not support a normalizationType of ${s}`),!1}break;case"simple":case"pie-chart":break;default:return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!ue){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some(s=>!(!("valueExpression"in s)||!s.valueExpression)))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function ye(e,t,s){switch(e){case"sum":return`cluster_sum_${t}`;case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"avg_norm":{const n=s,l="field",i=t.toLowerCase()+",norm:"+l+","+n.toLowerCase();return"cluster_avg_"+X(i)}}}function x(e,t,s,n){const l=X(t),i=s==="mode"?`cluster_type_${l}`:s==="sum"?`cluster_sum_${l}`:`cluster_avg_${l}`;return e.some(u=>u.name===i)||e.push(new y({name:i,isAutoGenerated:!0,onStatisticExpression:new V({expression:t,returnType:n}),statisticType:s})),i}function m(e,t,s,n,l){if(t==="cluster_count"||e.some(u=>u.name===t))return t;const i=ye(s,t,l);return e.some(u=>u.name===i)||(s==="avg_norm"?e.push(new y({name:i,isAutoGenerated:!0,onStatisticExpression:new V({expression:`$feature.${t} / $feature.${l}`,returnType:n}),statisticType:"avg"})):e.push(new y({name:i,isAutoGenerated:!0,onStatisticField:t,statisticType:s}))),i}const ze=e=>{let t=class extends e{constructor(...s){super(...s),this.addHandles(te(()=>this.renderer,()=>{if(this.featureReduction){const n=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",n)}},ie))}set featureReduction(s){const n=this._normalizeFeatureReduction(s);this._set("featureReduction",n)}set renderer(s){}_normalizeFeatureReduction(s){if(s?.type!=="cluster")return s;const n=s.clone(),l=[new y({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],i=(n.fields??[]).filter(z=>!z.isAutoGenerated);if(s.renderer&&!s.renderer.authoringInfo?.isAutoGenerated)return n.fields=[...l,...i],n;if(s.symbol)return n.fields=[...l,...i],n.renderer=null,n;if(!this.renderer)return s;const u=pe(l,this.renderer,s,null,!1);return n.fields=[...l,...i],n.renderer=u,n}};return r([o(le)],t.prototype,"featureReduction",null),t=r([b("esri.layers.mixins.FeatureReductionLayer")],t),t};export{ze as c};
