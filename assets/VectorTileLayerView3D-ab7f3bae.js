import{nH as Pe,nJ as Ae,it as be,nL as Te,ay as ze,uL as Oe,a_ as Re,gv as ne,bA as ke,oq as Ne,ax as $e,q0 as Y,be as Ve,kV as re,wj as Fe,by as We,aB as He,dI as Be,wk as Ge,tf as qe,wl as Ke,uJ as Ye,nK as G,wm as A,mi as N,mW as $,qx as je,qy as Xe,wn as Qe,wo as Ie,wp as se,wq as j,s5 as F,wr as Ze,ub as O,uo as oe,ws as le,wt as Je,wu as ce,u4 as L,nN as De,u9 as B,wv as te,li as J,aT as ue,aw as et,ww as tt,wx as it,c4 as at,aQ as nt,aY as rt,aJ as st,ao as he,aj as V,ak as W,am as ot}from"./index-ea8d34f0.js";import{t as k}from"./Rect-98da58d6.js";import{n as lt}from"./pbf-bdc6ef1b.js";import{o as ct}from"./constants-991354c8.js";import{r as ut}from"./vec4f32-0d1b2306.js";import{l as de}from"./StyleRepository-277ec4a9.js";import{l as ht}from"./LayerView3D-ea0439ea.js";import{p as dt}from"./TiledLayerView3D-bb69e077.js";import{y as _t}from"./LayerView-3fca8138.js";let ft=class{constructor(e,i,t){this._scale=e,this._shift=i,this._levelShift=t}getLevelRowColumn(e){const i=this.getLevelShift(e[0]),t=this._shift+i;return t?[e[0]-i,e[1]>>t,e[2]>>t]:e}getLevelShift(e){return Math.min(e,this._levelShift)}getOffset(e,i){let t=0,a=0;const n=this._shift+this.getLevelShift(e[0]);if(n){const r=(1<<n)-1,s=i/(this._scale*(1<<n-1));t=(e[2]&r)*s,a=(e[1]&r)*s}return[t,a]}getScale(e){return this._scale*(1<<this._shift+this.getLevelShift(e))}},X=class{constructor(e,i){this._width=0,this._height=0,this._free=[],this._width=e,this._height=i,this._free.push(new k(0,0,e,i))}get width(){return this._width}get height(){return this._height}allocate(e,i){if(e>this._width||i>this._height)return new k;let t=null,a=-1;for(let n=0;n<this._free.length;++n){const r=this._free[n];e<=r.width&&i<=r.height&&(t===null||r.y<=t.y&&r.x<=t.x)&&(t=r,a=n)}return t===null?new k:(this._free.splice(a,1),t.width<t.height?(t.width>e&&this._free.push(new k(t.x+e,t.y,t.width-e,i)),t.height>i&&this._free.push(new k(t.x,t.y+i,t.width,t.height-i))):(t.width>e&&this._free.push(new k(t.x+e,t.y,t.width-e,t.height)),t.height>i&&this._free.push(new k(t.x,t.y+i,e,t.height-i))),new k(t.x,t.y,e,i))}release(e){for(let i=0;i<this._free.length;++i){const t=this._free[i];if(t.y===e.y&&t.height===e.height&&t.x+t.width===e.x)t.width+=e.width;else if(t.x===e.x&&t.width===e.width&&t.y+t.height===e.y)t.height+=e.height;else if(e.y===t.y&&e.height===t.height&&e.x+e.width===t.x)t.x=e.x,t.width+=e.width;else{if(e.x!==t.x||e.width!==t.width||e.y+e.height!==t.y)continue;t.y=e.y,t.height+=e.height}this._free.splice(i,1),this.release(e)}this._free.push(e)}},_e=class{constructor(e,i,t){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=i,this._glyphSource=t,this._binPack=new X(e-4,i-4),this._glyphData.push(new Uint8Array(e*i)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,i){const t=[],a=this._glyphSource,n=new Set,r=1/256;for(const o of i){const l=Math.floor(o*r);n.add(l)}const s=[];return n.forEach(o=>{const l=e+o;if(this._rangePromises.has(l))s.push(this._rangePromises.get(l));else{const u=a.getRange(e,o).then(()=>{this._rangePromises.delete(l)},()=>{this._rangePromises.delete(l)});this._rangePromises.set(l,u),s.push(u)}}),Promise.all(s).then(()=>{let o=this._glyphIndex[e];o||(o={},this._glyphIndex[e]=o);for(const l of i){const u=o[l];if(u){t[l]={sdf:!0,rect:u.rect,metrics:u.metrics,page:u.page,code:l};continue}const M=a.getGlyph(e,l);if(!M?.metrics)continue;const h=M.metrics;let _;if(h.width===0)_=new k(0,0,0,0);else{const d=h.width+6,x=h.height+2*3;let P=d%4?4-d%4:4,v=x%4?4-x%4:4;P===1&&(P=5),v===1&&(v=5),_=this._binPack.allocate(d+P,x+v),_.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new X(this.width-4,this.height-4),_=this._binPack.allocate(d+P,x+v));const y=this._glyphData[this._currentPage],m=M.bitmap;let p,f;if(m)for(let w=0;w<x;w++){p=d*w,f=this.width*(_.y+w+1)+_.x;for(let b=0;b<d;b++)y[f+b+1]=m.at(p+b)}}o[l]={rect:_,metrics:h,tileIDs:null,page:this._currentPage},t[l]={sdf:!0,rect:_,metrics:h,page:this._currentPage,code:l},this._dirties[this._currentPage]=!0}return t})}removeGlyphs(e){for(const i in this._glyphIndex){const t=this._glyphIndex[i];if(!t)continue;let a;for(const n in t)if(a=t[n],a.tileIDs.delete(e),a.tileIDs.size===0){const r=this._glyphData[a.page],s=a.rect;let o,l;for(let u=0;u<s.height;u++)for(o=this.width*(s.y+u)+s.x,l=0;l<s.width;l++)r[o+l]=0;delete t[n],this._dirties[a.page]=!0}}}bind(e,i,t,a=0){if(!this._textures[t]){const r=new Pe;r.pixelFormat=Ae.ALPHA,r.wrapMode=be.CLAMP_TO_EDGE,r.width=this.width,r.height=this.height,this._textures[t]=new Te(e,r,new Uint8Array(this.width*this.height))}const n=this._textures[t];n.setSamplingMode(i),this._dirties[t]&&n.setData(this._glyphData[t]),e.bindTexture(n,a),this._dirties[t]=!1}destroy(){this.dispose()}dispose(){this._glyphData.length=0,this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}},ie=class{constructor(e){if(this._metrics=[],!e)return void(this._allBitmaps=null);const i=new Map;let t=0;for(;e.next();)switch(e.tag()){case 1:{const r=e.getMessage();for(;r.next();)switch(r.tag()){case 3:{const s=r.getMessage();let o,l,u,M,h,_,g;for(;s.next();)switch(s.tag()){case 1:o=s.getUInt32();break;case 2:l=s.getBytes();break;case 3:u=s.getUInt32();break;case 4:M=s.getUInt32();break;case 5:h=s.getSInt32();break;case 6:_=s.getSInt32();break;case 7:g=s.getUInt32();break;default:s.skip()}if(s.release(),o){const d=l?.length??0;this._metrics[o]={width:u,height:M,left:h,top:_,advance:g,startOffset:t,length:d},i.set(o,l),t+=d}break}default:r.skip()}r.release();break}default:e.skip()}const a=new Uint8Array(t),n=this._metrics;for(const[r,s]of i){const{startOffset:o,length:l}=n[r];if(s)for(let u=0;u<l;++u)a[o+u]=s[u]}this._allBitmaps=a}getMetrics(e){return this._metrics[e]}getBitmap(e){if(!this._allBitmaps)return;const i=this._metrics[e];if(i===void 0)return;const{startOffset:t,length:a}=i;return a!==0?new mt(this._allBitmaps,t,a):void 0}},pt=class{constructor(){this._ranges=[]}get ranges(){return this._ranges}getRange(e){return this._ranges[e]}addRange(e,i){this._ranges[e]=i}},fe=class{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,i){const t=this._getFontStack(e);if(t.getRange(i))return Promise.resolve();const a=256*i,n=a+255;if(this._baseURL){const r=this._baseURL.replace("{fontstack}",e).replace("{range}",a+"-"+n);return ze(r,{responseType:"array-buffer"}).then(s=>{t.addRange(i,new ie(new lt(new Uint8Array(s.data),new DataView(s.data))))}).catch(()=>{t.addRange(i,new ie)})}return t.addRange(i,new ie),Promise.resolve()}getGlyph(e,i){const t=this._getFontStack(e);if(!t)return;const a=Math.floor(i/256),n=t.getRange(a);return n?{metrics:n.getMetrics(i),bitmap:n.getBitmap(i)}:void 0}_getFontStack(e){let i=this._glyphInfo[e];return i||(i=this._glyphInfo[e]=new pt),i}},mt=class{constructor(e,i,t){this._array=e,this._start=i,this.length=t}at(e){return 0<=e&&e<this.length?this._array[this._start+e]:void 0}};function gt(c,e){c==null&&(c=[]);const i=e==="Butt",t=e==="Square",a=!i&&!t;c.length%2==1&&(c=[...c,...c]);const n=ct,r=2*n;let s=0;for(const P of c)s+=P;const o=Math.round(s*n),l=new Float32Array(o*r),u=.5*n;let M=0,h=0,_=.5,g=!0;for(const P of c){for(M=h,h+=P*n;_<=h;){let v=.5;for(;v<r;){const y=(v-.5)*o+_-.5,m=a?(v-n)*(v-n):Math.abs(v-n);l[y]=g?i?Math.max(Math.max(M+u-_,m),Math.max(_-h+u,m)):m:a?Math.min((_-M)*(_-M)+m,(_-h)*(_-h)+m):t?Math.min(Math.max(_-M,m),Math.max(h-_,m)):Math.min(Math.max(_-M+u,m),Math.max(h+u-_,m)),v++}_++}g=!g}const d=l.length,x=new Uint8Array(4*d);for(let P=0;P<d;++P){const v=(a?Math.sqrt(l[P]):l[P])/n;Oe(v,x,4*P)}return[x,o,r]}const vt="dasharray-";let pe=class Ee{constructor(e,i,t=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,i<=0&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,t>0&&(this._maxItemSize=t),this._binPack=new X(e-4,i-4)}destroy(){this.dispose()}dispose(){this._binPack=null,this._mosaicsData.length=0,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,this._mosaicsData.length===0){this._binPack=new X(this._pageWidth-4,this._pageHeight-4);const i=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),a=new Uint32Array(i*t);this._mosaicsData[0]=a,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,i=!1){let t,a,n=this._mosaicRects[e];if(n)return n;if(!this._sprites||this._sprites.loadStatus!=="loaded"||(e&&e.startsWith(vt)?([t,a]=this._rasterizeDash(e),i=!0):t=this._sprites.getSpriteInfo(e),!t?.width||!t.height||t.width<0||t.height<0))return null;const r=t.width,s=t.height,[o,l,u]=this._allocateImage(r,s);return o.width<=0?null:(this._copy(o,t,l,u,i,a),n={type:"sprite",rect:o,width:r,height:s,sdf:t.sdf,simplePattern:!1,rasterizationScale:t.pixelRatio,page:l},this._mosaicRects[e]=n,n)}getSpriteItems(e){const i={};for(const t of e)i[t.name]=this.getSpriteItem(t.name,t.repeat);return i}getMosaicItemPosition(e,i){const t=this.getSpriteItem(e,i),a=t?.rect;if(!a)return null;a.width=t.width,a.height=t.height;const n=t.width,r=t.height,s=2;return{tl:[a.x+s,a.y+s],br:[a.x+s+n,a.y+s+r],page:t.page}}bind(e,i,t=0,a=0){if(t>=this._size.length||t>=this._mosaicsData.length)return;if(!this._textures[t]){const r=new Pe;r.wrapMode=be.CLAMP_TO_EDGE,r.width=this._size[t][0],r.height=this._size[t][1],this._textures[t]=new Te(e,r,new Uint8Array(this._mosaicsData[t].buffer))}const n=this._textures[t];n.setSamplingMode(i),this._dirties[t]&&n.setData(new Uint8Array(this._mosaicsData[t].buffer)),e.bindTexture(n,a),this._dirties[t]=!1}static _copyBits(e,i,t,a,n,r,s,o,l,u,M){let h=a*i+t,_=o*r+s;if(M){_-=r;for(let g=-1;g<=u;g++,h=((g+u)%u+a)*i+t,_+=r)for(let d=-1;d<=l;d++)n[_+d]=e[h+(d+l)%l]}else for(let g=0;g<u;g++){for(let d=0;d<l;d++)n[_+d]=e[h+d];h+=i,_+=r}}_copy(e,i,t,a,n,r){if(!this._sprites||this._sprites.loadStatus!=="loaded"||t>=this._mosaicsData.length)return;const s=new Uint32Array(r?r.buffer:this._sprites.image.buffer),o=this._mosaicsData[t],l=2,u=r?i.width:this._sprites.width;Ee._copyBits(s,u,i.x,i.y,o,a[0],e.x+l,e.y+l,i.width,i.height,n),this._dirties[t]=!0}_allocateImage(e,i){e+=2,i+=2;const t=Math.max(e,i);if(this._maxItemSize&&this._maxItemSize<t){const s=new k(0,0,e,i);return this._mosaicsData.push(new Uint32Array(e*i)),this._dirties.push(!0),this._size.push([e,i]),this._textures.push(void 0),[s,this._mosaicsData.length-1,[e,i]]}let a=e%4?4-e%4:4,n=i%4?4-i%4:4;a===1&&(a=5),n===1&&(n=5);const r=this._binPack.allocate(e+a,i+n);return r.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new X(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,i)):[r,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const i=/\[(.*?)\]/,t=e.match(i);if(!t)return null;const a=t[1].split(",").map(Number),n=e.slice(e.lastIndexOf("-")+1),[r,s,o]=gt(a,n);return[{x:0,y:0,width:s,height:o,sdf:!0,pixelRatio:1},new Uint8Array(r.buffer)]}},yt=class{constructor(e,i,t,a){this._layer=e,this._styleRepository=i,this.devicePixelRatio=t,this._sourceDataMaxLOD=a,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._spriteSourceAbortController=null,this._startOptionsInputSignal=null,this._inputSignalEventListener=null}destroy(){this._connection?.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic?.destroy(),this._spriteMosaic=null,this._glyphMosaic=null,this._spriteSourceAbortController=Re(this._spriteSourceAbortController),this._spriteSourcePromise=null,this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener),this._startOptionsInputSignal=null,this._inputSignalEventListener=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(e){this._requestSprite(e);const i=this._layer.currentStyleInfo.glyphsUrl,t=new fe(i?ne(i,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new _e(1024,1024,t),this._broadcastPromise=ke("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then(a=>{if(this._layer&&(this._connection?.close(),this._connection=a,this._layer&&!this._connection.closed)){const n=a.broadcast("setStyle",{style:this._layer.currentStyleInfo.style,sourceDataMaxLOD:this._sourceDataMaxLOD},e);Promise.all(n).catch(r=>Ne(r))}})}_requestSprite(e){this._spriteSourceAbortController?.abort();const i=new AbortController;this._spriteSourceAbortController=i;const t=e?.signal;this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener),this._startOptionsInputSignal=null,t&&(this._inputSignalEventListener=xt(i),t.addEventListener("abort",this._inputSignalEventListener,{once:!0}));const{signal:a}=i,n={...e,signal:a};this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,n),this._spriteSourcePromise.then(r=>{$e(a),this._spriteMosaic=new pe(1024,1024,250),this._spriteMosaic.setSpriteSource(r)})}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}setSpriteSource(e){const i=new pe(1024,1024,250);return i.setSpriteSource(e),this._spriteMosaic=i,this._spriteSourcePromise=Promise.resolve(e),this._spriteSourceAbortController=null,i}async setStyle(e,i,t){await this._broadcastPromise,this._styleRepository=e,this._sourceDataMaxLOD=t,this._requestSprite();const a=new fe(this._layer.currentStyleInfo.glyphsUrl?ne(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new _e(1024,1024,a),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",{style:i,sourceDataMaxLOD:this._sourceDataMaxLOD})),this._broadcastPromise}async fetchTileData(e,i){const t=await this._getRefKeys(e,i);return this._getSourcesData(Object.keys(this._layer.sourceNameToSource),t,i)}async fetchTilePBFs(e){const i=Object.keys(this._layer.sourceNameToSource),t={},a=await this._getRefKeys(e,t),n=[],r=[];for(let s=0;s<a.length;s++)if(a[s].value==null||i[s]==null)r.push(null);else{const o=a[s].value,l=this._getTilePayload(o,i[s],t);l.then(u=>{n.push({...u,key:o})}),r.push(l)}return Promise.all(r).then(()=>n)}async parseTileData(e,i){const t=e&&e.data;if(!t)return null;const{sourceName2DataAndRefKey:a,transferList:n}=t;return Object.keys(a).length===0?null:this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:a,styleLayerUIDs:e.styleLayerUIDs},{...i,transferList:n}))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}async _getTilePayload(e,i,t){const a=Y.pool.acquire(e.id),n=this._layer.sourceNameToSource[i],{level:r,row:s,col:o}=a;Y.pool.release(a);try{return{protobuff:await n.requestTile(r,s,o,t),sourceName:i}}catch(l){if(Ve(l))throw l;return{protobuff:null,sourceName:i}}}async _getRefKeys(e,i){const t=this._layer.sourceNameToSource,a=new Array;for(const n in t){const r=t[n].getRefKey(e,i);a.push(r)}return re(a)}_getSourcesData(e,i,t){const a=[];for(let n=0;n<i.length;n++)if(i[n].value==null||e[n]==null)a.push(null);else{const r=i[n].value,s=this._getTilePayload(r,e[n],t);a.push(s)}return re(a).then(n=>{const r={},s=[];for(let o=0;o<n.length;o++){const l=n[o].value;if(l&&l.protobuff&&l.protobuff.byteLength>0){const u=i[o].value.id;r[l.sourceName]={refKey:u,protobuff:l.protobuff},s.push(l.protobuff)}}return{sourceName2DataAndRefKey:r,transferList:s}})}};function xt(c){return()=>c.abort()}let wt=class extends Fe{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const i=Y.pool.acquire(e),t=i.level===0?null:Y.getId(i.level-1,i.row>>1,i.col>>1,i.world);return Y.pool.release(i),t}getTileCoverage(e,i,t=!0,a){const n=super.getTileCoverage(e,i,t,a);if(!n)return n;const r=1<<n.lodInfo.level;return n.spans=n.spans.filter(s=>s.row>=0&&s.row<r),n}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const i=this._fullCacheLodInfos;if(e>i[0].scale)return i[0].level;let t,a;for(let n=0;n<i.length-1;n++)if(a=i[n+1],e>a.scale)return t=i[n],t.level+(t.scale-e)/(t.scale-a.scale);return i[i.length-1].level}}_initializeFullCacheLODs(e){let i;if(e[0].level===0)i=e.map(t=>({level:t.level,resolution:t.resolution,scale:t.scale}));else{const t=this.tileInfo.size[0],a=this.tileInfo.spatialReference;i=We.create({size:t,spatialReference:a}).lods.map(n=>({level:n.level,resolution:n.resolution,scale:n.scale}))}for(let t=0;t<i.length;t++)this._levelByScale[i[t].scale]=i[t].level;this._fullCacheLodInfos=i}},me=class extends yt{constructor(e,i,t,a){super(e,i,t,e.tileInfo.lods.length-1),this._memCache=a,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new wt(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,i){const t=new Y(e[0],e[1],e[2],0);let a=this._memCache.get(t.id);if(a!=null)return a.retain(),a;const n=await this._getVectorTileData(t);if(He(i),!this._layer)return null;if(a=this._memCache.get(t.id),a!=null)return a.retain(),a;const r=this._layer.tileInfo.getTileBounds(Be(),t),s=this._tileInfoView.getTileResolution(e[0]);return a=new Ge(t,s,r[0],r[3],512,512,this._styleRepository,this._memCache),a.setData(n),n&&(a.retain(),this._memCache.put(t.id,a,a.usedMemory,qe)),a.neededForCoverage=!0,a.transforms.tileUnitsToPixels=Ke(1/8,0,0,0,1/8,0,0,0,1),a}_getVectorTileData(e){const i=e.id;if(this._ongoingTileRequests.has(i))return this._ongoingTileRequests.get(i);const t=new AbortController,a={signal:t.signal},n=this._getParsedVectorTileData(e,a).then(r=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),r)).catch(()=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),null));return this._ongoingTileRequests.set(i,n),this._ongoingRequestToController.set(i,t),n}_getParsedVectorTileData(e,i){return this.fetchTileData(e,i).then(t=>this.parseTileData({key:e,data:t},i))}},Q=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,i){}draw(e,i,t){}drawMany(e,i,t){for(const a of i)a.visible&&this.draw(e,a,t)}},St=class extends Q{constructor(){super(...arguments),this._color=ut(1,0,0,1),this._patternMatrix=Ye(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,i){const{context:t,painter:a,requestRender:n,allowDelayedRender:r}=e;this._loadWGLResources(e);const s=e.displayLevel,o=e.styleLayer,l=o.backgroundMaterial,u=a.vectorTilesMaterialManager,M=o.getPaintValue("background-color",s),h=o.getPaintValue("background-opacity",s),_=o.getPaintValue("background-pattern",s),g=_!==void 0,d=1|window.devicePixelRatio,x=e.spriteMosaic;let P,v;const y=d>Ie?2:1,m=this._programOptions;m.pattern=g;const p=u.getMaterialProgram(t,l,m);if(!r||n==null||p.compiled){if(t.bindVAO(this._vao),t.useProgram(p),g){const f=x.getMosaicItemPosition(_,!0);if(f!=null){const{tl:w,br:b,page:S}=f;P=b[0]-w[0],v=b[1]-w[1];const I=x.getPageSize(S);I!=null&&(x.bind(t,G.LINEAR,S,A),p.setUniform4f("u_tlbr",w[0],w[1],b[0],b[1]),p.setUniform2fv("u_mosaicSize",I),p.setUniform1i("u_texture",A))}p.setUniform1f("u_opacity",h)}else{const f=M[3]*h;this._color[0]=f*M[0],this._color[1]=f*M[1],this._color[2]=f*M[2],this._color[3]=f,p.setUniform4fv("u_color",this._color)}p.setUniform1f("u_depth",o.z||0);for(const f of i){if(p.setUniform1f("u_coord_range",f.rangeX),p.setUniformMatrix3fv("u_dvsMat3",f.transforms.displayViewScreenMat3),g){const w=Math.max(2**(Math.round(s)-f.key.level),1),b=y*f.width*w,S=b/se(P),I=b/se(v);this._patternMatrix[0]=S,this._patternMatrix[4]=I,p.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(N.EQUAL,0,255),t.drawArrays($.TRIANGLE_STRIP,0,4)}}else n()}_loadWGLResources(e){if(this._vao)return;const{context:i,styleLayer:t}=e,a=t.backgroundMaterial,n=new Int8Array([0,0,1,0,0,1,1,1]),r=je.createVertex(i,Xe.STATIC_DRAW,n),s=new Qe(i,a.getAttributeLocations(),a.getLayoutInfo(),{geometry:r});this._vao=s}},Mt=class extends Q{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:a,requiredLevel:n,state:r,painter:s,spriteMosaic:o,styleLayerUID:l,requestRender:u,allowDelayedRender:M}=e;if(!i.some(p=>p.layerData.get(l)?.circleIndexCount??!1))return;const h=e.styleLayer,_=h.circleMaterial,g=s.vectorTilesMaterialManager,d=1.2,x=h.getPaintValue("circle-translate",a),P=h.getPaintValue("circle-translate-anchor",a),v=this._programOptions,y=g.getMaterialProgram(t,_,v);if(M&&u!=null&&!y.compiled)return void u();t.useProgram(y),y.setUniformMatrix3fv("u_displayMat3",P===j.VIEWPORT?r.displayMat3:r.displayViewMat3),y.setUniform2fv("u_circleTranslation",x),y.setUniform1f("u_depth",h.z),y.setUniform1f("u_antialiasingWidth",d);let m=-1;for(const p of i){if(!p.layerData.has(l))continue;p.key.level!==m&&(m=p.key.level,_.setDataUniforms(y,a,h,m,o));const f=p.layerData.get(l);if(!f.circleIndexCount)continue;f.prepareForRendering(t);const w=f.vao;w!=null&&(t.bindVAO(w),y.setUniformMatrix3fv("u_dvsMat3",p.transforms.displayViewScreenMat3),n!==p.key.level?t.setStencilFunction(N.EQUAL,p.stencilRef,255):t.setStencilFunction(N.GREATER,255,255),t.drawElements($.TRIANGLES,f.circleIndexCount,F.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*f.circleIndexStart),p.triangleCount+=f.circleIndexCount/3)}}};const ge=1/65536;let Pt=class extends Q{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,i){const{displayLevel:t,renderPass:a,spriteMosaic:n,styleLayerUID:r}=e;let s=!1;for(const y of i)if(y.layerData.has(r)){const m=y.layerData.get(r);if(m.fillIndexCount>0||m.outlineIndexCount>0){s=!0;break}}if(!s)return;const o=e.styleLayer,l=o.getPaintProperty("fill-pattern"),u=l!==void 0,M=u&&l.isDataDriven;let h;if(u&&!M){const y=l.getValue(t);h=n.getMosaicItemPosition(y,!0)}const _=!u&&o.getPaintValue("fill-antialias",t);let g=!0,d=1;if(!u){const y=o.getPaintProperty("fill-color"),m=o.getPaintProperty("fill-opacity");if(!y?.isDataDriven&&!m?.isDataDriven){const p=o.getPaintValue("fill-color",t);d=o.getPaintValue("fill-opacity",t)*p[3],d>=1&&(g=!1)}}if(g&&a==="opaque")return;const x=o.getPaintValue("fill-translate",t),P=o.getPaintValue("fill-translate-anchor",t);(g||a!=="translucent")&&this._drawFill(e,r,o,i,x,P,u,h,M);const v=!o.hasDataDrivenOutlineColor&&o.outlineUsesFillColor&&d<1;_&&a!=="opaque"&&!v&&this._drawOutline(e,r,o,i,x,P)}_drawFill(e,i,t,a,n,r,s,o,l){if(s&&!l&&o==null)return;const{context:u,displayLevel:M,state:h,painter:_,pixelRatio:g,spriteMosaic:d,requestRender:x,allowDelayedRender:P}=e,v=t.fillMaterial,y=_.vectorTilesMaterialManager,m=g>Ie?2:1,p=this._fillProgramOptions;p.pattern=s;const f=y.getMaterialProgram(u,v,p);if(P&&x!=null&&!f.compiled)return void x();if(u.useProgram(f),o!=null){const{page:b}=o,S=d.getPageSize(b);S!=null&&(d.bind(u,G.LINEAR,b,A),f.setUniform2fv("u_mosaicSize",S),f.setUniform1i("u_texture",A))}f.setUniformMatrix3fv("u_displayMat3",r===j.VIEWPORT?h.displayMat3:h.displayViewMat3),f.setUniform2fv("u_fillTranslation",n),f.setUniform1f("u_depth",t.z+ge);let w=-1;for(const b of a){if(!b.layerData.has(i))continue;b.key.level!==w&&(w=b.key.level,v.setDataUniforms(f,M,t,w,d));const S=b.layerData.get(i);if(!S.fillIndexCount)continue;S.prepareForRendering(u);const I=S.fillVAO;if(I!=null){if(u.bindVAO(I),f.setUniformMatrix3fv("u_dvsMat3",b.transforms.displayViewScreenMat3),u.setStencilFunction(N.EQUAL,b.stencilRef,255),s){const T=Math.max(2**(Math.round(M)-b.key.level),1),D=b.rangeX/(m*b.width*T);f.setUniform1f("u_patternFactor",D)}if(l){const T=S.patternMap;if(!T)continue;for(const[D,E]of T){const H=d.getPageSize(D);H!=null&&(d.bind(u,G.LINEAR,D,A),f.setUniform2fv("u_mosaicSize",H),f.setUniform1i("u_texture",A),u.drawElements($.TRIANGLES,E[1],F.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*E[0]))}}else u.drawElements($.TRIANGLES,S.fillIndexCount,F.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*S.fillIndexStart);b.triangleCount+=S.fillIndexCount/3}}}_drawOutline(e,i,t,a,n,r){const{context:s,displayLevel:o,state:l,painter:u,pixelRatio:M,spriteMosaic:h,requestRender:_,allowDelayedRender:g}=e,d=t.outlineMaterial,x=u.vectorTilesMaterialManager,P=.75/M,v=this._outlineProgramOptions,y=x.getMaterialProgram(s,d,v);if(g&&_!=null&&!y.compiled)return void _();s.useProgram(y),y.setUniformMatrix3fv("u_displayMat3",r===j.VIEWPORT?l.displayMat3:l.displayViewMat3),y.setUniform2fv("u_fillTranslation",n),y.setUniform1f("u_depth",t.z+ge),y.setUniform1f("u_outline_width",P);let m=-1;for(const p of a){if(!p.layerData.has(i))continue;p.key.level!==m&&(m=p.key.level,d.setDataUniforms(y,o,t,m,h));const f=p.layerData.get(i);if(f.prepareForRendering(s),!f.outlineIndexCount)continue;const w=f.outlineVAO;w!=null&&(s.bindVAO(w),y.setUniformMatrix3fv("u_dvsMat3",p.transforms.displayViewScreenMat3),s.setStencilFunction(N.EQUAL,p.stencilRef,255),s.drawElements($.TRIANGLES,f.outlineIndexCount,F.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*f.outlineIndexStart),p.triangleCount+=f.outlineIndexCount/3)}}},bt=class extends Q{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:a,state:n,painter:r,pixelRatio:s,spriteMosaic:o,styleLayerUID:l,requestRender:u,allowDelayedRender:M}=e;if(!i.some(T=>T.layerData.get(l)?.lineIndexCount??!1))return;const h=e.styleLayer,_=h.lineMaterial,g=r.vectorTilesMaterialManager,d=h.getPaintValue("line-translate",a),x=h.getPaintValue("line-translate-anchor",a),P=h.getPaintProperty("line-pattern"),v=P!==void 0,y=v&&P.isDataDriven;let m,p;if(v&&!y){const T=P.getValue(a);m=o.getMosaicItemPosition(T)}let f=!1;if(!v){const T=h.getPaintProperty("line-dasharray");if(p=T!==void 0,f=p&&T.isDataDriven,p&&!f){const D=T.getValue(a),E=h.getDashKey(D,h.getLayoutValue("line-cap",a));m=o.getMosaicItemPosition(E)}}const w=1/s,b=this._programOptions;b.pattern=v,b.sdf=p;const S=g.getMaterialProgram(t,_,b);if(M&&u!=null&&!S.compiled)return void u();if(t.useProgram(S),S.setUniformMatrix3fv("u_displayViewMat3",n.displayViewMat3),S.setUniformMatrix3fv("u_displayMat3",x===j.VIEWPORT?n.displayMat3:n.displayViewMat3),S.setUniform2fv("u_lineTranslation",d),S.setUniform1f("u_depth",h.z),S.setUniform1f("u_antialiasing",w),m&&m!=null){const{page:T}=m,D=o.getPageSize(T);D!=null&&(o.bind(t,G.LINEAR,T,A),S.setUniform2fv("u_mosaicSize",D),S.setUniform1i("u_texture",A))}let I=-1;for(const T of i){if(!T.layerData.has(l))continue;T.key.level!==I&&(I=T.key.level,_.setDataUniforms(S,a,h,I,o));const D=2**(a-I)/s;S.setUniform1f("u_zoomFactor",D);const E=T.layerData.get(l);if(!E.lineIndexCount)continue;E.prepareForRendering(t);const H=E.vao;if(H!=null){if(t.bindVAO(H),S.setUniformMatrix3fv("u_dvsMat3",T.transforms.displayViewScreenMat3),t.setStencilFunction(N.EQUAL,T.stencilRef,255),y||f){const Z=E.patternMap;if(!Z)continue;for(const[R,q]of Z){const U=o.getPageSize(R);U!=null&&(o.bind(t,G.LINEAR,R,A),S.setUniform2fv("u_mosaicSize",U),S.setUniform1i("u_texture",A),t.drawElements($.TRIANGLES,q[1],F.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*q[0]))}}else t.drawElements($.TRIANGLES,E.lineIndexCount,F.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*E.lineIndexStart);T.triangleCount+=E.lineIndexCount/3}}}};const Tt=256/360;function Rt(c,e){return(c%=e)>=0?c:c+e}function ve(c){return Rt(c*Tt,256)}const It=1/65536;let Dt=class extends Q{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=Ze()}dispose(){}drawMany(e,i){const t=e.styleLayer;this._drawIcons(e,t,i),this._drawText(e,t,i)}_drawIcons(e,i,t){const{context:a,displayLevel:n,painter:r,spriteMosaic:s,state:o,styleLayerUID:l,requestRender:u,allowDelayedRender:M}=e,h=i.iconMaterial,_=r.vectorTilesMaterialManager;let g,d=!1;for(const S of t)if(S.layerData.has(l)&&(g=S.layerData.get(l),g.iconPerPageElementsMap.size>0)){d=!0;break}if(!d)return;const x=i.getPaintValue("icon-translate",n),P=i.getPaintValue("icon-translate-anchor",n);let v=i.getLayoutValue("icon-rotation-alignment",n);v===O.AUTO&&(v=i.getLayoutValue("symbol-placement",n)===oe.POINT?O.VIEWPORT:O.MAP);const y=v===O.MAP,m=i.getLayoutValue("icon-keep-upright",n)&&y,p=g.isIconSDF,f=this._iconProgramOptions;f.sdf=p;const w=_.getMaterialProgram(a,h,f);if(M&&u!=null&&!w.compiled)return void u();a.useProgram(w),w.setUniformMatrix3fv("u_displayViewMat3",v===O.MAP?o.displayViewMat3:o.displayMat3),w.setUniformMatrix3fv("u_displayMat3",P===j.VIEWPORT?o.displayMat3:o.displayViewMat3),w.setUniform2fv("u_iconTranslation",x),w.setUniform1f("u_depth",i.z),w.setUniform1f("u_mapRotation",ve(o.rotation)),w.setUniform1f("u_keepUpright",m?1:0),w.setUniform1f("u_level",10*n),w.setUniform1i("u_texture",A),w.setUniform1f("u_fadeDuration",le/1e3);let b=-1;for(const S of t){if(!S.layerData.has(l)||(S.key.level!==b&&(b=S.key.level,h.setDataUniforms(w,n,i,b,s)),g=S.layerData.get(l),g.iconPerPageElementsMap.size===0))continue;g.prepareForRendering(a),g.updateOpacityInfo();const I=g.iconVAO;if(I!=null){a.bindVAO(I),w.setUniformMatrix3fv("u_dvsMat3",S.transforms.displayViewScreenMat3),w.setUniform1f("u_time",(performance.now()-g.lastOpacityUpdate)/1e3);for(const[T,D]of g.iconPerPageElementsMap)this._renderIconRange(e,w,D,T,S)}}}_renderIconRange(e,i,t,a,n){const{context:r,spriteMosaic:s}=e;this._spritesTextureSize[0]=s.getWidth(a)/4,this._spritesTextureSize[1]=s.getHeight(a)/4,i.setUniform2fv("u_mosaicSize",this._spritesTextureSize),s.bind(r,G.LINEAR,a,A),this._setStencilState(e,n),r.drawElements($.TRIANGLES,t[1],F.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),n.triangleCount+=t[1]/3}_drawText(e,i,t){const{context:a,displayLevel:n,glyphMosaic:r,painter:s,pixelRatio:o,spriteMosaic:l,state:u,styleLayerUID:M,requestRender:h,allowDelayedRender:_}=e,g=i.textMaterial,d=s.vectorTilesMaterialManager;let x,P=!1;for(const U of t)if(U.layerData.has(M)&&(x=U.layerData.get(M),x.glyphPerPageElementsMap.size>0)){P=!0;break}if(!P)return;const v=i.getPaintProperty("text-opacity");if(v&&!v.isDataDriven&&v.getValue(n)===0)return;const y=i.getPaintProperty("text-color"),m=!y||y.isDataDriven||y.getValue(n)[3]>0,p=i.getPaintProperty("text-halo-width"),f=i.getPaintProperty("text-halo-color"),w=(!p||p.isDataDriven||p.getValue(n)>0)&&(!f||f.isDataDriven||f.getValue(n)[3]>0);if(!m&&!w)return;const b=24/8;let S=i.getLayoutValue("text-rotation-alignment",n);S===O.AUTO&&(S=i.getLayoutValue("symbol-placement",n)===oe.POINT?O.VIEWPORT:O.MAP);const I=S===O.MAP,T=i.getLayoutValue("text-keep-upright",n)&&I,D=.8*b/o;this._glyphTextureSize||(this._glyphTextureSize=Je(r.width/4,r.height/4));const E=i.getPaintValue("text-translate",n),H=i.getPaintValue("text-translate-anchor",n),Z=this._sdfProgramOptions,R=d.getMaterialProgram(a,g,Z);if(_&&h!=null&&!R.compiled)return void h();a.useProgram(R),R.setUniformMatrix3fv("u_displayViewMat3",S===O.MAP?u.displayViewMat3:u.displayMat3),R.setUniformMatrix3fv("u_displayMat3",H===j.VIEWPORT?u.displayMat3:u.displayViewMat3),R.setUniform2fv("u_textTranslation",E),R.setUniform1f("u_depth",i.z+It),R.setUniform2fv("u_mosaicSize",this._glyphTextureSize),R.setUniform1f("u_mapRotation",ve(u.rotation)),R.setUniform1f("u_keepUpright",T?1:0),R.setUniform1f("u_level",10*n),R.setUniform1i("u_texture",ce),R.setUniform1f("u_antialiasingWidth",D),R.setUniform1f("u_fadeDuration",le/1e3);let q=-1;for(const U of t){if(!U.layerData.has(M)||(U.key.level!==q&&(q=U.key.level,g.setDataUniforms(R,n,i,q,l)),x=U.layerData.get(M),x.glyphPerPageElementsMap.size===0))continue;x.prepareForRendering(a),x.updateOpacityInfo();const ae=x.textVAO;if(ae==null)continue;a.bindVAO(ae),R.setUniformMatrix3fv("u_dvsMat3",U.transforms.displayViewScreenMat3),this._setStencilState(e,U);const Le=(performance.now()-x.lastOpacityUpdate)/1e3;R.setUniform1f("u_time",Le),x.glyphPerPageElementsMap.forEach((Ce,Ue)=>{this._renderGlyphRange(a,Ce,Ue,r,R,w,m,U)})}}_renderGlyphRange(e,i,t,a,n,r,s,o){a.bind(e,G.LINEAR,t,ce),r&&(n.setUniform1f("u_halo",1),e.drawElements($.TRIANGLES,i[1],F.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),o.triangleCount+=i[1]/3),s&&(n.setUniform1f("u_halo",0),e.drawElements($.TRIANGLES,i[1],F.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),o.triangleCount+=i[1]/3)}_setStencilState(e,i){const{context:t,is3D:a,stencilSymbols:n}=e;if(t.setStencilTestEnabled(!0),n)return t.setStencilWriteMask(255),void t.setStencilFunction(N.ALWAYS,i.stencilRef,255);t.setStencilWriteMask(0),a?t.setStencilFunction(N.EQUAL,i.stencilRef,255):t.setStencilFunction(N.GREATER,255,255)}};const Et={vtlBackground:St,vtlFill:Pt,vtlLine:bt,vtlCircle:Mt,vtlSymbol:Dt},Lt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};let Ct=class{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,i=new Map){if(i.has(e))return i.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const a=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=a.exec(t);const r=[];for(;n!=null;)r.push({path:n[1],start:n.index,length:n[0].length}),n=a.exec(t);let s=0,o="";return r.forEach(l=>{o+=t.slice(s,l.start),o+=i.has(l.path)?"":this._resolve(l.path,i),s=l.start+l.length}),o+=t.slice(s),i.set(e,o),o}_read(e){return this._readFile(e)}};function Ut(c){let e=Lt;return c.split("/").forEach(i=>{e&&(e=e[i])}),e}const At=new Ct(Ut);function C(c){return At.resolveIncludes(c)}function zt(c){const{options:e,value:i}=c;return typeof e[i]=="number"}function ee(c){let e="";for(const i in c){const t=c[i];if(typeof t=="boolean")t&&(e+=`#define ${i}
`);else if(typeof t=="number")e+=`#define ${i} ${t.toFixed()}
`;else if(typeof t=="object")if(zt(t)){const{value:a,options:n,namespace:r}=t,s=r?`${r}_`:"";for(const o in n)e+=`#define ${s}${o} ${n[o].toFixed()}
`;e+=`#define ${i} ${s}${a}
`}else{const a=t.options;let n=0;for(const r in a)e+=`#define ${a[r]} ${(n++).toFixed()}
`;e+=`#define ${i} ${a[t.value]}
`}}return e}const ye=c=>ee({PATTERN:c.pattern}),Ot={shaders:c=>({vertexShader:ye(c)+C("background/background.vert"),fragmentShader:ye(c)+C("background/background.frag")})},kt={shaders:c=>({vertexShader:C("circle/circle.vert"),fragmentShader:C("circle/circle.frag")})},xe=c=>ee({PATTERN:c.pattern}),Nt={shaders:c=>({vertexShader:xe(c)+C("fill/fill.vert"),fragmentShader:xe(c)+C("fill/fill.frag")})},$t={shaders:c=>({vertexShader:C("outline/outline.vert"),fragmentShader:C("outline/outline.frag")})},we=c=>ee({SDF:c.sdf}),Vt={shaders:c=>({vertexShader:we(c)+C("icon/icon.vert"),fragmentShader:we(c)+C("icon/icon.frag")})},Se=c=>ee({PATTERN:c.pattern,SDF:c.sdf}),Ft={shaders:c=>({vertexShader:Se(c)+C("line/line.vert"),fragmentShader:Se(c)+C("line/line.frag")})},Wt={shaders:c=>({vertexShader:C("text/text.vert"),fragmentShader:C("text/text.frag")})};class Ht{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,i,t){const a=i.key<<3|this._getMaterialOptionsValue(i.type,t);if(this._programByKey.has(a))return this._programByKey.get(a);const n=this._getProgramTemplate(i.type),{shaders:r}=n,{vertexShader:s,fragmentShader:o}=r(t),l=i.getShaderHeader(),u=i.getShaderMain(),M=s.replace("#pragma header",l).replace("#pragma main",u),h=e.programCache.acquire(M,o,i.getAttributeLocations());return this._programByKey.set(a,h),h}_getMaterialOptionsValue(e,i){switch(e){case L.BACKGROUND:return(i.pattern?1:0)<<1;case L.FILL:return(i.pattern?1:0)<<1;case L.OUTLINE:return 0;case L.LINE:{const t=i;return(t.sdf?1:0)<<2|(t.pattern?1:0)<<1}case L.ICON:return(i.sdf?1:0)<<1;case L.CIRCLE:case L.TEXT:default:return 0}}_getProgramTemplate(e){switch(e){case L.BACKGROUND:return Ot;case L.CIRCLE:return kt;case L.FILL:return Nt;case L.ICON:return Vt;case L.LINE:return Ft;case L.OUTLINE:return $t;case L.TEXT:return Wt;default:return null}}}const K=1e-6;class Me{constructor(e,i){this.spriteMosaic=e,this.glyphMosaic=i,this._brushCache=new Map,this._vtlMaterialManager=new Ht}dispose(){this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache=null),this._vtlMaterialManager=De(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawSymbols(e,i,t){const a=t.layers;e.renderPass="translucent";for(let n=0;n<a.length;n++){const r=a[n];if(r.type!==B.SYMBOL)continue;const s=r.getLayoutProperty("visibility");if(s&&s.getValue()===te.NONE)continue;const o=e.displayLevel;r.minzoom!==void 0&&r.minzoom>o+K||r.maxzoom!==void 0&&r.maxzoom<=o-K||(e.styleLayerUID=r.uid,e.styleLayer=r,this._drawWithBrush(e,i,"vtlSymbol"))}}drawBackground(e,i,t){if(t.backgroundBucketIds.length===0)return;const{context:a,displayLevel:n,requiredLevel:r}=e;i.key.level=r,a.setBlendingEnabled(!0),a.setDepthTestEnabled(!1),a.setStencilTestEnabled(!1),e.renderPass="background",t.backgroundBucketIds.forEach(s=>{const o=t.getLayerById(s);if(o.type!==B.BACKGROUND)return;const l=o.getLayoutProperty("visibility");l&&l.getValue()===te.NONE||o.minzoom!==void 0&&o.minzoom>n+K||o.maxzoom!==void 0&&o.maxzoom<=n-K||(e.styleLayerUID=o.uid,e.styleLayer=o,this._drawWithBrush(e,i,"vtlBackground"))})}drawTile(e,i,t,a){const{context:n}=e,r=t.layers;n.setBlendingEnabled(!1),n.setDepthTestEnabled(!0),n.setDepthWriteEnabled(!0),n.setDepthFunction(N.LEQUAL),e.renderPass="opaque";for(let s=r.length-1;s>=0;s--){const o=r[s];a!=null&&a!==o.type||this._renderStyleLayer(o,e,i,!1)}n.setDepthWriteEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunctionSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let s=0;s<r.length;s++){const o=r[s];a!=null&&a!==o.type||this._renderStyleLayer(o,e,i,!1)}n.setDepthTestEnabled(!1),n.bindVAO()}_renderStyleLayer(e,i,t,a){if(!(a||e&&t.layerData.has(e.uid)))return;const n=e.getLayoutProperty("visibility");if(n&&n.getValue()===te.NONE)return;const{renderPass:r}=i;let s;switch(e.type){case B.BACKGROUND:if(r!=="background")return;s="vtlBackground";break;case B.FILL:if(r!=="opaque"&&i.renderPass!=="translucent")return;s="vtlFill";break;case B.LINE:if(r!=="translucent")return;s="vtlLine";break;case B.CIRCLE:if(r!=="translucent")return;s="vtlCircle";break;case B.SYMBOL:if(r!=="translucent")return;s="vtlSymbol"}const o=i.displayLevel;if(e.minzoom!==void 0&&e.minzoom>o+K||e.maxzoom!==void 0&&e.maxzoom<=o-K)return;const{context:l}=i;l.setStencilTestEnabled(!1),l.setStencilWriteMask(0),i.styleLayerUID=e.uid,i.styleLayer=e,this._drawWithBrush(i,t,s)}_drawWithBrush(e,i,t){if(!this._brushCache.has(t)){const a=Et[t];this._brushCache.set(t,new a)}this._brushCache.get(t).drawMany(e,[i])}}let z=class extends dt(ht(_t)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d",this.levelShift=ue("disable-feature:vtl-level-shift")?0:1}initialize(){if(this.layer.fullExtent==null)return void this.addResolvingPromise(Promise.reject(new et("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:c,spatialReference:e,state:i,viewingMode:t}=this.view,a=t==="local"&&!tt(e)||it.force512VTL?this.layer.tileInfo:this.layer.tileInfo.getCompatibleForVTL(256),n=this._getTileInfoSupportError(a,this.layer.fullExtent);if(n!=null)return this.addResolvingPromise(Promise.reject(n));const r=at(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const d=c.tilingScheme,x=d.pixelSize,P=x===256?1:2,v=c.spatialReference?.isGeographic&&x===256?1:0,y=c.spatialReference?.isGeographic||x!==256?0:1;let m;this.schemaHelper=new ft(P,v,this.levelShift+y),m=x===256||x===512?this.layer.tileInfo.getCompatibleForVTL(x):this.layer.tileInfo;const p=this._getTileInfoCompatibilityError(m,d);if(p)throw p;this.tileInfo=m});this._tileHandlerController=new AbortController;const s=this.view.resourceController;this._memCache=s.memoryController.newCache(`vtl-${this.layer.uid}`,d=>{d.release()}),this.addHandles(nt(()=>this.view.qualitySettings.memoryLimit,d=>this._memCache.maxSize=Math.ceil(d/10*1048576),rt));const o=new de(this.layer.currentStyleInfo.style);this._tileHandler=new me(this.layer,o,i.contentPixelRatio,this._memCache);const l=this._tileHandlerController.signal,u=Bt(s),M=this._tileHandler.start({signal:l,schedule:u}),h=this._tileHandler.spriteMosaic;h.then(d=>{!st(l)&&this._tileHandler&&(this.painter=new Me(d,this._tileHandler.glyphMosaic))}),M.then(()=>this._tileHandlerController=null);const _=()=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const d=this.layer.currentStyleInfo.style,x=this.view.state?.contentPixelRatio??1,P=new de(d),v=new me(this.layer,P,x,this._memCache),y=v.start({signal:this._tileHandlerController.signal,schedule:u}),m=v.spriteMosaic;y.then(()=>this._tileHandlerController=null),this._updatingHandles.addPromise(Promise.all([y,m]).then(([,p])=>{const f=this._tileHandler,w=this.painter;this.painter=new Me(p,v.glyphMosaic),this._tileHandler=v,this.emit("data-changed"),f.destroy(),w&&w.dispose()}))};this._updatingHandles.add(()=>({style:this.layer.currentStyleInfo.style,pixelRatio:this.view.state?.contentPixelRatio}),_),this.addHandles([this.layer.on("paint-change",()=>this.emit("data-changed")),this.layer.on("style-layer-change",_),this.layer.on("delete-style-layer",_),this.layer.on("spriteSource-change",()=>this.emit("data-changed")),this.layer.on("layout-change",()=>this.emit("data-changed")),this.layer.on("style-layer-visibility-change",()=>this.emit("data-changed"))]);const g=Promise.all([r,M,h]);this.addResolvingPromise(g)}destroy(){this.painter=De(this.painter),this._tileHandlerController=Re(this._tileHandlerController),this._tileHandler=he(this._tileHandler),this._memCache=he(this._memCache)}get contentZoom(){return ue("disable-feature:vtl-level-shift")?1:this.view.qualitySettings.tiledSurface.vtlContentZoom}get displayLevelRange(){const c=this.tileInfo.lods,e=this.layer.minScale||c[0].scale,i=this.layer.maxScale||c[c.length-1].scale,t=this.levelRangeFromScaleRange(e,i);return this.layer.maxScale?t.maxLevel++:t.maxLevel+=this.levelShift,t}get dataScaleRange(){const c=this.tileInfo.lods;return{minScale:c[0].scale,maxScale:c[c.length-1].scale}}get dataLevelRange(){const{minScale:c,maxScale:e}=this.dataScaleRange,i=this.levelRangeFromScaleRange(c,e);return i.minLevel===1&&this.tileInfo.size[0]===256&&(i.minLevel=0),i.maxLevel+=this.levelShift,i}async fetchTile(c,e){const i=this.schemaHelper.getLevelRowColumn(c);return this._tileHandler.getVectorTile(i,e)}};V([W()],z.prototype,"layer",void 0),V([W()],z.prototype,"levelShift",void 0),V([W()],z.prototype,"contentZoom",null),V([W()],z.prototype,"displayLevelRange",null),V([W()],z.prototype,"tileInfo",void 0),V([W()],z.prototype,"dataScaleRange",null),V([W()],z.prototype,"dataLevelRange",null),V([W()],z.prototype,"updatingProgressValue",void 0),z=V([ot("esri.views.3d.layers.VectorTileLayerView3D")],z);const gi=z;function Bt(c){return e=>c.immediate.schedule(e)}export{gi as default};
