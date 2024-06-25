import{gs as v,gt as S,gu as W,gv as q,gw as F,gx as j,b2 as k,b3 as A,b4 as M,aV as B,aI as X,aW as Y,bq as C,bm as y,aX as Z,gy as J,cW as L,ch as H,gz as K,gA as Q,aT as N,gB as ee,aU as te,gg as ae,gC as D,aB as $,a_ as G,b8 as ie,b9 as z,gD as se,gE as x,b5 as re,gF as ne,gG as oe,cb as le,ah as w,ai as R,ak as he}from"./index-c0f955a7.js";import{n as de}from"./LayerView3D-cadfe2a7.js";import{l as ce}from"./projectExtentUtils-5c353335.js";import{g as ge}from"./ImageMaterial-31d914f8.js";import{u as ue}from"./LayerView-56ae8a75.js";import{a as me}from"./RefreshableLayerView-ac92d1c6.js";function fe(a,e,t){const s=v(a)/S(a),i={width:t,height:t};return s>1.0001?i.height=t/s:s<.9999&&(i.width=t*s),i.width=Math.round(i.width/(v(a)/v(e))),i.height=Math.round(i.height/(S(a)/S(e))),i}function V(a,e){return W(a,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function pe(a,e,t){if(!q(e,t))return V(a,t);const s=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],i=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],o=t[2]-t[0],l=t[3]-t[1],r=i[0]>0&&i[2]>0?3:2,h=s[0]>0&&s[2]>0?3:2,n=(h+1)*(r+1),c=F(3*n),g=j(2*n),d=new Array(6*(h*r-1));let E=0,b=0,O=0,u=0,f=0;for(let p=0;p<4;p++){const P=s[p];if(P<=0)continue;let I=0;for(let _=0;_<4;_++){const T=i[_];T<=0||(c[b++]=t[0]+I,c[b++]=t[1]+E,c[b++]=-1,g[O++]=I/o,g[O++]=E/l,_<3&&p<3&&(_!==1||p!==1)&&(d[f++]=u,d[f++]=u+1,d[f++]=u+r+1,d[f++]=u+1,d[f++]=u+r+2,d[f++]=u+r+1),u++,I+=T)}E+=P}const U=new Array(d.length);return new k(a,[[A.POSITION,new M(c,d,3,!0)],[A.NORMAL,new M(_e,U,3,!0)],[A.UV0,new M(g,d,2,!0)]])}const _e=[0,0,1];let m=class extends me(de(ue)){constructor(){super(...arguments),this.drapeSourceType=B.RasterImage,this.updatePolicy=X.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=Y(async a=>{this.destroyed||await this._doRefresh(a).catch(e=>{C(e)||y.getLogger(this).error(e)})},2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(Z(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ce(this).then(a=>this._set("fullExtentInLocalViewSpatialReference",a))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler()),this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this._updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(a,e){this._spatialReference=e,a.forEach((t,s)=>{this._overlays[s]=t,this._updateImageExtent(t,s)})}_updateImageExtent(a,e){const t=this._clippedExtent(a.extent,we);if(t==null)return;const s=fe(a.extent,t,a.resolution);let i=a.pixelRatio*this.view.state.pixelRatio;const{layer:o}=this;if("imageMaxWidth"in o&&o.imageMaxWidth!=null||"imageMaxHeight"in o&&o.imageMaxHeight!=null){const r=o.imageMaxWidth,h=o.imageMaxHeight;if(s.width>r){const n=r/s.width;s.height=Math.floor(s.height*n),s.width=r,i*=n}if(s.height>h){const n=h/s.height;s.width=Math.floor(s.width*n),s.height=h,i*=n}}const l=this._extents[e];l&&J(l.extent,t)&&this._imageSizeEquals(t,l.imageSize,s)||(this._extents[e]={extent:L(t),imageSize:s,pixelRatio:i},this.suspended||this._fetch(e).catch(r=>{C(r)||y.getLogger(this).error(r)}))}clear(){for(let a=0;a<this._images.length;a++)this._clearImage(a)}async doRefresh(){return this._doRefresh()}async _doRefresh(a){if(this.suspended)return;const e=[];for(let t=0;t<this._extents.length;t++)this._extents[t]&&e.push(this._fetch(t,a));await Promise.allSettled(e)}canResume(){if(!super.canResume())return!1;const a=this.layer;if(this._isScaleRangeActive()){const{minScale:e,maxScale:t}=a.effectiveScaleRange,s=this.view.scale;if(s<t||e>0&&s>e)return!1}return!0}async processResult(a,e,t){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(a.image=e)}findExtentInfoAt(a){for(const e of this._extents){const t=e.extent;if(new H(t[0],t[1],t[2],t[3],this._spatialReference).contains(a))return e}return null}getFetchOptions(){}async redraw(a,e){await K(this._images,async(t,s)=>{t&&(await a(t,e),await this._createStageObjects(s,t.image,e))})}_imageSizeEquals(a,e,t){if(!this.maximumDataResolution)return!1;const s=v(a)/this.maximumDataResolution.x,i=S(a)/this.maximumDataResolution.y,o=s/e.width,l=i/e.height,r=s/t.width,h=i/t.height,n=Math.abs(o-r),c=Math.abs(l-h),g=Q.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return n<=g&&c<=g}async _fetch(a,e){if(this.suspended)return;const t=this._extents[a],s=t.extent;this._images[a]||(this._images[a]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:L(s)});const i=this._images[a];i.loadingAbortController=N(i.loadingAbortController);const o=new H(s[0],s[1],s[2],s[3],this._spatialReference);if(o.width===0||o.height===0)return void this._clearImage(a);const l=new AbortController;i.loadingAbortController=l,ee(e,()=>l.abort());const r=l.signal,h=this._waitFetchReady(r).then(async()=>{const n={requestAsImageElement:!0,pixelRatio:this._overlays[a].pixelRatio,...this.getFetchOptions(),signal:r},{height:c,width:g}=t.imageSize;return this.layer.fetchImage(o,g,c,n)}).then(n=>{if(te(r))throw y.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),ae();return this.processResult(i,n)}).then(()=>{D(i.renderExtent,s)});i.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{$(r),await this._createStageObjects(a,i.image,r)}).catch(n=>{throw n&&!C(n)&&y.getLogger(this).error(n),n}).finally(()=>{h===i.loadingPromise&&(i.loadingPromise=null,i.loadingAbortController=null)}))}_clearImage(a){const e=this._images[a];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],G.UPDATE),e.renderGeometry=null);const t=this.view._stage,s=e.texture;s?.unload(),t.remove(s),e.texture=null,t.remove(e.material),e.material=null,e.loadingAbortController=N(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(a,e,t){const s=this.view._stage,i=this._images[a],o=()=>{i.texture?.unload(),s.remove(i.texture),i.texture=null,i.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([i.renderGeometry],G.UPDATE),i.renderGeometry=null)};if(e){const l=new ie(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:z.CLAMP_TO_EDGE,t:z.CLAMP_TO_EDGE}});let r;if(await se(this._images[a===x.INNER?x.OUTER:x.INNER].loadingPromise),$(t),o(),await s.schedule(()=>l.load(s.renderView.renderingContext),t),s.add(l),i.texture=l,i.material==null?(i.material=new ge({transparent:!0,textureId:l.id}),s.add(i.material)):i.material.setParameters({textureId:l.id}),a===x.INNER)r=V(i.material,i.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void o();r=pe(i.material,h,i.renderExtent)}i.renderGeometry=new re(r),i.renderGeometry.localOrigin=this._overlays[a].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([i.renderGeometry],G.UPDATE)}else o(),s.remove(i.material),i.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const a=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:e,maxScale:t}=a.effectiveScaleRange;return ne(e,t)}_clippedExtent(a,e){if(this.view.viewingMode!=="local")return D(e,a);const t=this.view.basemapTerrain;return t.ready?oe(a,t.extent,e):D(e,a)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(a){await le(()=>this.view.stationary,a),$(a)}};w([R()],m.prototype,"layer",void 0),w([R()],m.prototype,"suspended",void 0),w([R({readOnly:!0})],m.prototype,"fullExtentInLocalViewSpatialReference",void 0),w([R()],m.prototype,"updating",void 0),m=w([he("esri.views.3d.layers.DynamicLayerView3D")],m);const be=m,we=L();export{be as N};