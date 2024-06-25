import{cb as d,dp as f,aK as m,bm as n,ah as s,ai as a,ak as u}from"./index-c0f955a7.js";import{n as p}from"./LayerView3D-cadfe2a7.js";import{o as c}from"./TiledLayerView3D-db629e29.js";import{u as g}from"./LayerView-56ae8a75.js";import{a as y}from"./RefreshableLayerView-ac92d1c6.js";let r=class extends y(c(p(g))){constructor(){super(...arguments),this.type="wmts-3d"}initialize(){this._getCompatibleTileInfoMatrixSet(e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent));const t=d(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent));e!=null&&(e.id!==null&&this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),e.tileInfo&&(this.tileInfo=e.tileInfo),this.layer.fullExtent=e.fullExtent)});this.addResolvingPromise(t),this.when(()=>this._postInitialize())}get hasMixedImageFormats(){return!0}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return t!=null&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this._updatingHandles.add(()=>this.layer?.activeLayer?.styleId,()=>this.refresh()),this._updatingHandles.add(()=>this.layer?.activeLayer,t=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent),!0);e&&e.id!=null&&t.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getCompatibleTileInfoMatrixSet(t,e=!1){const i=f(this.layer);if(i!=null){if(m.isCollection(i))return i.find(h=>{const l=t(h);return l!=null&&(e?n.getLogger(this).error("The selected tile matrix set is not compatible with the view",l):this.addResolvingPromise(Promise.reject(l))),l==null});const o=t(i);return o!=null&&(e?n.getLogger(this).error("The selected tile matrix set is not compatible with the view",o):this.addResolvingPromise(Promise.reject(o))),i}return null}_getTileInfoError(t,e){return this._getTileInfoSupportError(t,e)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};s([a({readOnly:!0})],r.prototype,"hasMixedImageFormats",null),s([a()],r.prototype,"layer",void 0),s([a()],r.prototype,"suspended",void 0),s([a()],r.prototype,"tileInfo",void 0),r=s([u("esri.views.3d.layers.WMTSLayerView3d")],r);const S=r;export{S as default};