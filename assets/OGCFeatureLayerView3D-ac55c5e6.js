import{aj as r,ak as i,am as o,aw as s}from"./index-755e30b3.js";import{g as m}from"./FeatureLayerViewBase3D-5d9429e3.js";import"./Graphics3DGraphicsPipeline-41ecbf3b.js";import"./timeSupport-1d3138bc.js";import"./projectExtentUtils-f18fe5c9.js";import"./dehydratedFeatureComparison-b2974532.js";import"./queryForSymbologySnapping-f36abb0e.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-3144f8da.js";import"./optimizedFeatureQueryEngineAdapter-1990669b.js";import"./PooledRBush-4d0f695e.js";import"./quickselect-ec9600b4.js";import"./popupUtils-39bc551c.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-d076173c.js";import"./normalizeUtils-9040309c.js";import"./normalizeUtilsCommon-666f5b60.js";import"./WhereClause-46b3a227.js";import"./TimeOnly-2e6e7531.js";import"./json-48e3ea08.js";import"./utils-5f23e483.js";import"./utils-9aa3b443.js";import"./utils-35cc9879.js";import"./ClassBreaksDefinition-65083246.js";import"./FeatureStore-8cb4fc3d.js";import"./BoundsStore-a18349ce.js";import"./LayerView3D-56b2bacc.js";import"./query-0bb6b836.js";import"./pbfQueryUtils-ef987d7e.js";import"./pbf-b5a5a0fb.js";import"./WorkerHandle-97566cf2.js";import"./EventedSet-ee1e55fd.js";import"./LayerView-ff8d6d41.js";import"./RefreshableLayerView-6028842b.js";const l=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const K=t;export{K as default};
