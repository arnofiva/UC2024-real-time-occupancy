import{aj as r,ak as p,am as e}from"./index-ab96db07.js";import{g as s}from"./FeatureLayerViewBase3D-220c8345.js";import"./Graphics3DGraphicsPipeline-2a2c31c1.js";import"./timeSupport-f551a50b.js";import"./projectExtentUtils-8de2a3e3.js";import"./dehydratedFeatureComparison-a1edeb0b.js";import"./queryForSymbologySnapping-66104d6b.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-867041f5.js";import"./optimizedFeatureQueryEngineAdapter-6cdbde2c.js";import"./PooledRBush-81406012.js";import"./quickselect-6bdb87cc.js";import"./popupUtils-5d416a17.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-e4c55ed5.js";import"./normalizeUtils-050de560.js";import"./normalizeUtilsCommon-6ab3a73c.js";import"./WhereClause-11cd8876.js";import"./TimeOnly-0ea1f14a.js";import"./json-48e3ea08.js";import"./utils-b5d3e760.js";import"./utils-6fba2c13.js";import"./utils-3bd43217.js";import"./ClassBreaksDefinition-78fccd7d.js";import"./FeatureStore-536287ab.js";import"./BoundsStore-e64d6a6f.js";import"./LayerView3D-2ec8e4f7.js";import"./query-f1663770.js";import"./pbfQueryUtils-ffe030d9.js";import"./pbf-b4a86cc9.js";import"./WorkerHandle-ce022e20.js";import"./EventedSet-40d1e127.js";import"./LayerView-ba0f2b5f.js";import"./RefreshableLayerView-5122c702.js";const a=m=>{let t=class extends m{constructor(...o){super(...o)}get updateSuspended(){const o=this.parent?.dynamicGroupLayerView;return this.suspended&&(!o||o.suspended===!0)}};return r([p()],t.prototype,"layer",void 0),r([p()],t.prototype,"parent",void 0),r([p()],t.prototype,"updateSuspended",null),t=r([e("esri.views.layers.CatalogFootprintLayerView")],t),t};let i=class extends a(s){constructor(){super(...arguments),this.type="catalog-footprint-3d"}};r([p()],i.prototype,"parent",void 0),i=r([e("esri.views.3d.layers.CatalogFootprintLayerView3D")],i);const O=i;export{O as default};