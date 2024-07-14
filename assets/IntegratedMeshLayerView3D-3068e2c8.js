import{aT as a,aU as s,aV as p,ai as o,aW as m,aj as r,ak as i,aX as n,am as l}from"./index-a7c18ff0.js";import{A as d}from"./I3SMeshView3D-d2ec8c48.js";import{l as u}from"./LayerView3D-c5762523.js";import{y as c}from"./LayerView-08f99099.js";import"./Transform-8ffe3adc.js";import"./RenderTexture-194986c0.js";import"./I3SOverrides-a9e0fbcb.js";import"./I3SNode-2066c887.js";import"./I3SUtil-e4866cc5.js";import"./I3SBinaryReader-97cc1d96.js";import"./ReactiveSet-caa9d619.js";import"./meshFeatureSet-eeb53ca1.js";import"./Mesh-e9a1b2e3.js";import"./MeshTransform-0e0c59ab.js";import"./vertexSpaceConversion-23b1184d.js";import"./External-f38772dc.js";import"./infoFor3D-a657d595.js";import"./FeatureLayerView3D-0ead1528.js";import"./FeatureLayerViewBase3D-ecc8e291.js";import"./Graphics3DGraphicsPipeline-be3f69ee.js";import"./timeSupport-59a40e3f.js";import"./projectExtentUtils-27676289.js";import"./dehydratedFeatureComparison-c46d4223.js";import"./queryForSymbologySnapping-40847708.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-0f15cd24.js";import"./optimizedFeatureQueryEngineAdapter-56b24511.js";import"./PooledRBush-9f748ba3.js";import"./quickselect-ba05d402.js";import"./popupUtils-3f768e23.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-5fa22427.js";import"./normalizeUtils-611fbb09.js";import"./normalizeUtilsCommon-5dfeef52.js";import"./WhereClause-2fb375e8.js";import"./TimeOnly-53f05750.js";import"./json-48e3ea08.js";import"./utils-16d5bcee.js";import"./utils-16334e7c.js";import"./utils-dad2ba1e.js";import"./ClassBreaksDefinition-0203bf12.js";import"./FeatureStore-7bf9e7aa.js";import"./BoundsStore-3627d398.js";import"./query-7c37c69d.js";import"./pbfQueryUtils-60aef041.js";import"./pbf-c1643914.js";import"./WorkerHandle-5dab1b29.js";import"./EventedSet-3a4a7df4.js";import"./RefreshableLayerView-7dc01a73.js";import"./SceneModification-52a57333.js";import"./persistable-43d96274.js";import"./resourceExtension-1abd8e46.js";import"./SceneLayerWorker-b9ce4e07.js";import"./makeScheduleFunction-e2d1207a.js";const h=.2;let t=class extends d(u(c)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=!a("disable-feature:im-shading"),this.drapeTargetType=s.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){return this._controller?.updatingProgress??0}get lodFactor(){return this.view?.qualitySettings?.sceneService?.integratedMesh?.lodFactor??1}get progressiveLoadFactor(){return this.lodFactor>=1?h:1}get visibleAtCurrentScale(){return p(this.i3slayer.effectiveScaleRange,this.view.terrainScale)}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),o),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){return new m({layer:this.layer,sourceLayer:this.layer})}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const e=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>e,()=>this._modifications=e.toArray(),o),"modifications")}};r([i()],t.prototype,"layer",void 0),r([i()],t.prototype,"i3slayer",null),r([i(n)],t.prototype,"updatingProgress",void 0),r([i()],t.prototype,"updatingProgressValue",null),r([i()],t.prototype,"lodFactor",null),r([i({readOnly:!0})],t.prototype,"progressiveLoadFactor",null),r([i({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=r([l("esri.views.3d.layers.IntegratedMeshLayerView3D")],t);const gt=t;export{gt as default};