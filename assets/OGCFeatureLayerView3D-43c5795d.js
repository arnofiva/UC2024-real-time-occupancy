import{ah as r,ai as i,ak as o,av as s}from"./index-6a39f5fd.js";import{_ as m}from"./FeatureLayerViewBase3D-9f38d608.js";import"./FeatureLikeLayerView3D-a4148c82.js";import"./dehydratedFeatureComparison-f2fc91ed.js";import"./queryForSymbologySnapping-cb53b2c7.js";import"./elevationInfoUtils-d136536c.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-fd2c2770.js";import"./optimizedFeatureQueryEngineAdapter-076ccf9b.js";import"./PooledRBush-9433f3c7.js";import"./quickselect-cab99df7.js";import"./popupUtils-8edf03a3.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-c6786e0f.js";import"./WhereClause-802159fe.js";import"./TimeOnly-6cba65ec.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-2f43b23e.js";import"./utils-03a91e6b.js";import"./generateRendererUtils-d32e46bc.js";import"./FeatureStore-acc744e6.js";import"./BoundsStore-a82611a0.js";import"./projectExtentUtils-6a2bc118.js";import"./LayerView3D-8e9aaca2.js";import"./query-549555fc.js";import"./pbfQueryUtils-da01cf7e.js";import"./pbf-b8e7c3b5.js";import"./EventedSet-6d0b2b87.js";import"./LayerView-3e7f79a7.js";import"./RefreshableLayerView-a35d9882.js";const l=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const B=t;export{B as default};
