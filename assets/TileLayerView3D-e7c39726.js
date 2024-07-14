import{aG as l,aw as o,aj as r,ak as s,am as p}from"./index-a7c18ff0.js";import{l as n}from"./LayerView3D-c5762523.js";import{p as h}from"./TiledLayerView3D-2638e825.js";import{i as m}from"./fetchTile-829637a6.js";import{y as u}from"./LayerView-08f99099.js";import{i as f}from"./RefreshableLayerView-7dc01a73.js";import{U as y,_ as c}from"./MapServiceLayerViewHelper-b452a360.js";import{r as d}from"./drapedUtils-3156aea5.js";import"./floorFilterUtils-73949d2d.js";import"./normalizeUtils-611fbb09.js";import"./normalizeUtilsCommon-5dfeef52.js";import"./sublayerUtils-d1436ed8.js";import"./popupUtils-3f768e23.js";let i=class extends f(h(n(u))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get tileInfo(){return this.layer.tileInfo}initialize(){if(this.layer.type==="web-tile"){const e=this.layer.fullExtent?.spatialReference,t=this.layer.tileInfo?.spatialReference;if(e==null||t==null||!l(e,t)){const a=this.layer.originOf("fullExtent")==="defaults"||this.layer.fullExtent==null?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new o("layerview:incompatible-fullextent",a)))}}y(this,this.layer)&&(this._popupHighlightHelper=new c({createFetchPopupFeaturesQueryGeometry:(e,t)=>d(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){this._popupHighlightHelper?.destroy()}async fetchTile(e,t){return m(this,e,t)}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?.fetchPopupFeaturesAtLocation(e,t)??[]}async doRefresh(){this.suspended||this.emit("data-changed")}};r([s()],i.prototype,"imageFormatIsOpaque",null),r([s()],i.prototype,"hasMixedImageFormats",null),r([s()],i.prototype,"layer",void 0),r([s()],i.prototype,"tileInfo",null),i=r([p("esri.views.3d.layers.TileLayerView3D")],i);const q=i;export{q as default};