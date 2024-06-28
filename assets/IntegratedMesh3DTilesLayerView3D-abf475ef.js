import{aN as Te,mW as ne,mX as N,lk as U,it as T,eT as Ce,ey as Me,mY as Pe,mt as Ee,aW as Oe,mZ as Ue,aU as Ae,aw as Y,m_ as Ie,aQ as oe,ai as Se,m$ as j,n0 as le,ao as ce,hU as Re,jV as de,aV as Fe,mp as He,cp as Ve,cN as je,dg as Le,n1 as De,dx as he,n2 as Be,n3 as Q,n4 as ke,n5 as Ge,cM as K,gz as Ne,n6 as $e,aT as ze,n7 as ue,n8 as We,iH as qe,eQ as Je,j3 as Xe,f7 as L,lL as Ye,eb as Qe,cr as Ke,n9 as Ze,na as et,nb as me,is as tt,nc as st,nd as it,ne as rt,nf as Z,ng as at,nh as nt,fo as D,ni as ot,nj as lt,nk as ct,nl as pe,nm as ge,aK as fe,aj as I,ak as B,am as dt,cY as be,nn as ht}from"./index-ab96db07.js";import{x as ut,f as mt,t as pt,i as gt}from"./Transform-bd0956fc.js";import{r as P,a as ee,S as k,N as O,e as g,m as ft,d as bt,g as ye,t as M,n as te,i as S}from"./ILyr3DWasmPerSceneView-b1ab6e1f.js";import{l as yt}from"./LayerView3D-2ec8e4f7.js";import{s as _t}from"./RenderTexture-9dec843b.js";import{y as wt}from"./LayerView-ba0f2b5f.js";class vt extends Te{constructor(e,u,a,r,o,m,c){super(e,0,0,0,u),this.nodesCached=a,this.vboMB=r,this.textureMB=o,this.vboMBCached=m,this.textureMBCached=c}}const xt={[P.Points]:null,[P.Lines]:null,[P.LineStrip]:null,[P.Triangles]:ne.TRIANGLES,[P.TriangleStrip]:ne.TRIANGLE_STRIP,[P.NotSet]:null},_e={[ee.Opaque]:N.Opaque,[ee.Mask]:N.Mask,[ee.Blend]:N.Blend},Tt={[k.Back]:U.Back,[k.Front]:U.Front,[k.None]:U.None,[k.NotSet]:U.Back},Ct={[O.WrapYBit]:{s:T.CLAMP_TO_EDGE,t:T.REPEAT},[O.WrapXBit]:{s:T.REPEAT,t:T.CLAMP_TO_EDGE},[O.WrapXy]:{s:T.REPEAT,t:T.REPEAT},[O.None]:{s:T.CLAMP_TO_EDGE,t:T.CLAMP_TO_EDGE},[O.NotSet]:{s:T.CLAMP_TO_EDGE,t:T.CLAMP_TO_EDGE}},Mt={[g.U8]:1,[g.I8]:1,[g.U16]:2,[g.I16]:2,[g.U32]:4,[g.I32]:4,[g.F32]:4,[g.F64]:8,[g.Utf8String]:1,[g.NotSet]:1};class Pt{constructor(e){this.layerUid=[],this.type=Ce.TILES3D,this.slicePlaneEnabled=!1,this.isGround=!0,this.layerView=e,this.layerUid.push(e.layer.uid)}intersect(e,u,a,r,o,m){const c=e.results,b=e.options.store===Me.ALL;if(e.options.filteredLayerUids.includes(this.layerView.layer.uid))return;const _=this.layerView.view._stage.renderView.componentObjectCollection,p=new Pe(m??!1,e.options.normalRequired);this.layerView.objects.forEach(l=>{l.visible&&l.intersectionGeometry&&_.intersect(l,a,r,e.tolerance,null,p,(d,n,i,h)=>{if(n>=0){if(u!=null&&!u(a,r,n))return;const y=C=>{const w=new Ue(this.layerView.layer.uid,()=>this._createTiles3DGraphic(this.layerView.layer,{}));C.set(this.type,w,n,i)};if(this.isGround&&(c.ground.dist==null||n<c.ground.dist)&&y(c.ground),e.options.isFiltered)return;if((c.min.dist==null||n<c.min.dist)&&y(c.min),(c.max.dist==null||n>c.max.dist)&&y(c.max),b){const C=Ee(e.ray);y(C),e.results.all.push(C)}}})})}_createTiles3DGraphic(e,u){return new Oe({layer:e,sourceLayer:e,attributes:u})}}var f;(function(t){t[t.API=1]="API",t[t.VerboseAPI=2]="VerboseAPI",t[t.Error=3]="Error"})(f||(f={}));class Et{constructor(){this.handle=0,this.isVisible=!1,this.components=[],this.texMemoryUsage=0,this.vboMemoryUsage=0,this.cpuMemoryUsage=0,this.textures=[]}totalMemory(){return this.texMemoryUsage+this.vboMemoryUsage+this.cpuMemoryUsage}}function G(t){return Math.round(t/1048.576)/1e3}let E=class extends yt(wt){constructor(){super(...arguments),this.type="integrated-mesh-3dtiles",this._visibleGeometryChangedSchedulerHandle=null,this._wasmLayerId=-1,this.ignoresMemoryFactor=!1,this.drapeTargetType=Ae.WithoutRasterImage,this._lyrHandleToObjects=new Map,this._initialCullFace=new Map,this._suspendedHandle=null,this._dbgFlags=new Set}initialize(){if(this._dbgFlags.add(f.Error),this._dbg(f.VerboseAPI,"Tiles3DLayerView3D initialize() called"),!this._canProjectWithoutEngine())throw new Y("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const t=Ie(this).then(e=>{this._intersectionHandler=new Pt(this),this.view.sceneIntersectionHelper.addIntersectionHandler(this._intersectionHandler),this._updatingHandles.add(()=>this.slicePlaneEnabled,a=>this._slicePlaneEnabledChange(a)),this._elevationProvider=new ut({view:this.view,layerElevationSource:this,intersectionHandler:this._intersectionHandler}),this.view.elevationProvider.register("im",this._elevationProvider),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this),this._wasmLayerId=e;const u=this.view.resourceController.memoryController.newCache(`t3d-${this.uid}`,a=>this._onRemoveFromCache(a));this._memCache=u,this.addHandles([oe(()=>this.layer.elevationInfo,a=>this._elevationInfoChanged(a))]),this._suspendedHandle=oe(()=>this.suspended,a=>{const r=j(this.view);r&&r.setEnabled(this,!a)},Se)}).catch(e=>{if(le(this),this._wasmLayerId=-1,e===ft)throw new Y("tiles3d:addLayer-failure","The 3d tiles layer description was invalid.",{});if(e===bt)throw new Y("tiles3d:addLayer-failure","The 3d tiles layer web assembly module failed to download.",{})});this.addResolvingPromise(t)}destroy(){this._dbg(f.VerboseAPI,"Tiles3DLayerView3D destroy() called"),le(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._intersectionHandler&&(this.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler),this._intersectionHandler=null),this._elevationProvider&&(this._elevationProvider.objectsChanged(this._obbs),this.view.elevationProvider.unregister(this._elevationProvider),this._elevationProvider=null),this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this),this._lyrHandleToObjects.forEach(t=>this.freeObject(t)),this._lyrHandleToObjects.clear(),this._initialCullFace.clear(),this._memCache=ce(this._memCache),this._updatingHandles=ce(this._updatingHandles),this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle.remove(),this._visibleGeometryChangedSchedulerHandle=null)}_visibleGeometryChanged(){this._visibleGeometryChangedSchedulerHandle==null&&(this._visibleGeometryChangedSchedulerHandle=Re(()=>{this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle=null}))}_slicePlaneEnabledChange(t){this._intersectionHandler&&(this._intersectionHandler.slicePlaneEnabled=t),this.objects.forEach(e=>{const u=this._collection.getMaterial(e);u.commonMaterialParameters.hasSlicePlane=t,u.commonMaterialParameters.cullFace=t?U.None:this._initialCullFace.get(e)})}_elevationInfoChanged(t){const e=j(this.view);e&&e.setLayerOffset(this,de(t))}get _obbs(){return this.objects.map(t=>this._collection.getComponentObb(t))}get wasmLayerId(){return this._wasmLayerId}get usedMemory(){let t=0;return this._lyrHandleToObjects.forEach(e=>{e.isVisible&&(t+=e.totalMemory())}),t}get unloadedMemory(){let t=0;return this._lyrHandleToObjects.forEach(e=>{e.isVisible||(t+=e.totalMemory())}),t}get visibleAtCurrentScale(){return Fe(this.layer.effectiveScaleRange,this.view.terrainScale)}get performanceInfo(){let t=0,e=0,u=0,a=0,r=0,o=0;return this._lyrHandleToObjects.forEach(m=>{m.isVisible?(t+=m.texMemoryUsage,e+=m.vboMemoryUsage,r++):(u+=m.texMemoryUsage,a+=m.vboMemoryUsage,o++)}),new vt(this.usedMemory,r,o,G(e),G(t),G(a),G(u))}_canProjectWithoutEngine(){if(this.view.state.viewingMode===He.Local){const t=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1;if(t!==3857&&t!==32662)return!1}return!0}get _stage(){return this.view._stage}get _collection(){return this._stage.renderView.componentObjectCollection}get elevationOffset(){return de(this.layer.elevationInfo)}get elevationRange(){const t=this.fullExtent;return t?.zmin&&t?.zmax?new Ve(t.zmin,t.zmax):null}getElevationRange(t){return null}get fullExtent(){return this.layer.fullExtent}get objects(){return Array.from(this._lyrHandleToObjects.values()).reduce((t,e)=>t.concat(e.components),new Array)}isUpdating(){const t=j(this.view);return!(this._wasmLayerId<0||t==null)&&t.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}async createRenderable(t){const e=t.meshData;if(e.data==null)throw new Error("meshData.data undefined");if(e.desc=JSON.parse(e.desc),e.desc==null)throw new Error("meshData.desc undefined");const u=je(e.desc.origin),a=new Array,r=new Map,o=new Et;o.handle=t.handle,this._lyrHandleToObjects.set(t.handle,o);const m=this.view.basemapTerrain.spatialReference;let c,b;if(this.view.viewingMode==="global"){const n=be();Le(ht,u,n,m),c=De(he(),n),b=Be(he(),c)}else c=Q,b=Q;const _=be();ke(_,_,u);const p=Ge(K(),_);let l=null;const d=K();if(e.desc.obb){const n=e.desc.obb.quaternion;l=new Ne(e.desc.obb.center,e.desc.obb.halfSize,$e(n[0],n[1],n[2],n[3]))}for(let n=0;n<e.desc.prims.length;n++){const i=e.desc.prims[n];if(this._dbg(f.VerboseAPI,JSON.stringify(i)),i.ptype===P.Lines)continue;if(xt[i.ptype]==null||e.data==null){this._dbg(f.VerboseAPI,"[Unsupported Feature] Unsupported primitive mode ("+i.ptype+"). Skipping primitive.");continue}const h=e.desc?.materials&&i.materialId!=null?e.desc.materials[i.materialId]:null,y=h!=null?h.lightingModel:ye.Unlit,C=!ze("disable-feature:im-shading"),{positionView:w,positionAttr:v,normalsView:$,normalsAttr:z,colorAttr:R,texCoord0Attr:F,indicesView:A}=this.getBufferViews(i,e.data.buffer,c,C);if(v==null||w==null||A==null)continue;const se={colors:R!=null,textureCoordinates:F!=null?ue.Default:ue.None,hasNormals:$!=null,needsNormals:C},we=v.data.length/v.size,W=(s,x)=>!s||s.data.length/s.size===we||(this._dbg(f.Error,`${x} !== numPos. Skipping primitive.`),!1);if(!W(F,"numTexcoord")||!W(R,"numColors")||!W(z,"normals"))continue;const ie=We(se);if(l!=null?l=l.clone():(l=qe(v),Je(d,l.center,u),l.center=d),c!==Q)for(let s=0;s<w.count;s++)w.getVec(s,d),Xe(d,d,c),w.setVec(s,d);const q=ie.createBuffer(v.data.length),H=new Map([[L.POSITION,v]]);F!=null&&H.set(L.UV0,F),R!=null&&H.set(L.COLOR,R),z!=null&&H.set(L.NORMALCOMPRESSED,z),H.forEach((s,x)=>{s!=null&&Ye(x,s,null,null,q,0)});const ve=new Uint32Array([0,A.typedBuffer.length]),xe={vertices:{data:q.buffer,count:q.byteLength/ie.stride,layoutParameters:se},positionData:{positions:w.typedBuffer,indices:A.typedBuffer},indices:A.typedBuffer,componentOffsets:ve};o.cpuMemoryUsage+=w.count,o.cpuMemoryUsage+=A.count;const re=this.view.renderSpatialReference,J=K(),X=[1,1,1];mt(p,re,X,m)||this._dbg(f.Error,"Unsupported coordinate system for IM overlay"),Qe(p,re,J,m);const V=this._collection.createObject(new pt(Ke(J[0],J[1],X[0],X[1]),new gt(p,b),l,xe));h&&this._collection.updateMaterial(V,s=>{s.baseColor=h.baseColorFactor,s.usePBR=y===ye.Pbr,s.hasParametersFromSource=!1,s.baseColorTexture=this._getTexture(h.baseColorTex,e,r),s.usePBR&&(s.mrrFactors=[h.metallicFactor,h.roughnessFactor,0],s.emissiveFactor=h.emissiveFactor??[0,0,0],s.metallicRoughnessTexture=this._getTexture(h.metalTex,e,r),s.emissionTexture=this._getTexture(h.emissiveTex,e,r),s.occlusionTexture=this._getTexture(h.occlusionTex,e,r),s.normalTexture=this._getTexture(h.normalTex,e,r)),s.objectOpacity=0,s.alphaDiscardMode=N.Mask;const x=[];s.baseColorTexture&&x.push(s.baseColorTexture.loadPromise),s.usePBR&&s.metallicRoughnessTexture&&x.push(s.metallicRoughnessTexture.loadPromise),s.usePBR&&s.emissionTexture&&x.push(s.emissionTexture.loadPromise),s.usePBR&&s.occlusionTexture&&x.push(s.occlusionTexture.loadPromise),s.usePBR&&s.normalTexture&&x.push(s.normalTexture.loadPromise);const ae=Promise.all(x);a.push(ae),ae.then(()=>{s.alphaDiscardMode=_e[h.alphaMode],s.objectOpacity=1,o.texMemoryUsage+=s.baseColorTexture?.glTexture?.usedMemory||0,s.usePBR&&(o.texMemoryUsage+=s.metallicRoughnessTexture?.glTexture?.usedMemory||0,o.texMemoryUsage+=s.emissionTexture?.glTexture?.usedMemory||0,o.texMemoryUsage+=s.occlusionTexture?.glTexture?.usedMemory||0,o.texMemoryUsage+=s.normalTexture?.glTexture?.usedMemory||0)}),s.commonMaterialParameters.doubleSided=h.isDoubleSided,s.commonMaterialParameters.cullFace=h.faceCulling?Tt[h.faceCulling]:U.Back,this._initialCullFace.set(V,s.commonMaterialParameters.cullFace),s.commonMaterialParameters.hasSlicePlane=this.slicePlaneEnabled,s.componentParameters.castShadows=Ze.All,s.textureAlphaCutoff=h.alphaCutoff??.1,s.alphaDiscardMode=_e[h.alphaMode],s.isIntegratedMesh=!0,s.polygonOffsetEnabled=!1,s.hasOccludees=!1,s.ellipsoidMode=et(this.view.spatialReference)}),o.components.push(V),o.vboMemoryUsage+=this._collection.getObjectGPUMemoryUsage(V)}if(await Promise.all(a),r.forEach(n=>{o.textures.push(n)}),!this._memCache)throw new Error("no memCache");return this._memCache.put(`${o.handle}`,o,o.totalMemory()),{memUsageBytes:o.totalMemory()}}freeRenderable(t){const e=this._lyrHandleToObjects.get(t);e&&(this.freeObject(e),this._lyrHandleToObjects.delete(t))}freeObject(t){this._memCache&&this._memCache.pop(`${t.handle}`),t.components.forEach(e=>{t.textures.forEach(u=>{this._stage.remove(u)}),this._collection.destroyObject(e),this._initialCullFace.delete(e)})}setRenderableVisibility(t,e,u){if(this._memCache){for(let a=0;a<u;++a){const r=t[a],o=e[a];if(!o)continue;const m=this._lyrHandleToObjects.get(r);m&&(this._visibleGeometryChanged(),m.isVisible=o,m.components.forEach(c=>{this._collection.setObjectVisibility(c,o),this._elevationProvider.objectChanged(this._collection.getComponentObb(c))}),this._memCache.pop(`${r}`))}for(let a=0;a<u;++a){const r=t[a],o=e[a];if(o)continue;const m=this._lyrHandleToObjects.get(r);m&&(this._visibleGeometryChanged(),m.isVisible=o,m.components.forEach(c=>{this._collection.setObjectVisibility(c,o),this._elevationProvider.objectChanged(this._collection.getComponentObb(c))}),this._memCache.put(`${r}`,m,m.totalMemory()))}}}_getTexture(t,e,u){let a=null;if(t&&e.desc?.images&&e.data?.buffer){const r=e.desc.images[t?.imageId];if(a=u.get(r),!a&&r){const o=this._stage.renderView.renderingContext.parameters.maxMaxAnisotropy,m=o>1,c=Ct[t.wrapMode??O.None];let b=r.alpha?4:3;const _=new Uint8Array(e.data.buffer,r.data.byteOffset,r.data.byteCount);let p=null,l=null,d=null;switch(r.format){case M.Raw:r.pixelFormat===te.R8?(p=_.buffer,b=1,l=""):r.pixelFormat===te.Rgb8?(p=_.buffer,b=3,l=""):r.pixelFormat===te.Rgba8&&(p=_.buffer,b=4,l="");break;case M.Dxt1:p=_.buffer,b=3,l=me.DDS_ENCODING;break;case M.Dxt5:p=_.buffer,b=4,l=me.DDS_ENCODING;break;case M.Png:l="image/png",d=document.createElement("img");break;case M.Jpeg:l="image/jpeg",d=document.createElement("img");break;case M.Etc2:l="image/ktx",d=document.createElement("img");break;case M.Astc:this._dbg(f.Error,"Astc texture not supported");break;case M.Pvrtc:this._dbg(f.Error,"Pvrtc texture not supported")}if(d&&l){const n=new Blob([_],{type:l});d.src=URL.createObjectURL(n),p=d}p&&l!=null&&(a=new tt(p,{mipmap:m,maxAnisotropy:o,encoding:l,wrap:c,components:b,noUnpackFlip:!0,width:r.mip0Width,height:r.mip0Height}),this._stage.add(a),u.set(r,a))}}return a?new _t(this.view._stage.renderView.textures,a.id):null}getBufferViews(t,e,u,a){let r,o,m,c,b,_,p,l=null;for(let d=0;d<t.atrbs.length;d++){const n=t.atrbs[d],i=n.view,h=void 0,y=i.byteOffset+i.byteCount,C=i.byteCount/Mt[i.type],w=[...Array(C).keys()].map(v=>v);try{switch(n.sem){case S.Position:i.ncomp!==3||i.type!==g.F32?this._dbg(f.Error,"[Unsupported Feature] Unsupported view for Position ("+i+")"):(r=new Z(e,i.byteOffset,h,y),o=new D(r.typedBuffer,w,3));break;case S.Normal:if(i.ncomp!==3||i.type!==g.F32)this._dbg(f.Error,"[Unsupported Feature] Unsupported view for Normal ("+i+")");else if(a){const v=new Z(e,i.byteOffset,h,y),$=lt(v.typedBuffer,u);b=new ct($),_=new D(b.typedBuffer,w,2)}break;case S.TexCoord:i.ncomp!==2||i.type!==g.F32?this._dbg(f.Error,"[Unsupported Feature] Unsupported view for Texcoord ("+i+")"):c===void 0&&(c=new D(new ot(e,i.byteOffset,h,y).typedBuffer,w,2));break;case S.Color:i.ncomp===4?(i.type===g.F32&&(l=new st(e,i.byteOffset,h,y)),i.type===g.U8&&(l=new it(e,i.byteOffset,h,y)),i.type===g.U16&&(l=new rt(e,i.byteOffset,h,y))):i.ncomp===3&&(i.type===g.F32&&(l=new Z(e,i.byteOffset,h,y)),i.type===g.U8&&(l=new at(e,i.byteOffset,h,y)),i.type===g.U16&&(l=new nt(e,i.byteOffset,h,y))),l==null?this._dbg(f.VerboseAPI,"[Unsupported Feature] Unsupported view for Color ("+i+")"):m=new D(l.typedBuffer,w,i.ncomp);break;case S.FeatureIndex:break;default:this._dbg(f.VerboseAPI,"[Unsupported Feature] Unsupported semantic ("+n.sem+"). Skipping vertex attribute.")}}catch(v){this._dbg(f.VerboseAPI,"Error Creating buffer ("+v+"). Skipping vertex attribute.")}}if(t.index){const d=t.index.view,n=void 0,i=d.byteOffset+d.byteCount;switch(t.index.view.type){case g.U16:p=new ge(e,d.byteOffset,n,i);break;case g.U32:p=new pe(e,d.byteOffset,n,i);break;case g.U8:default:this._dbg(f.Error,"[Unsupported Feature] index type not supported ("+d.type+").")}}if(p==null&&r!=null){const d=r.count;if(d<65535){const n=new Uint16Array(d);p=new ge(n)}else{const n=new Uint32Array(d);p=new pe(n)}for(let n=0;n<d;n++)p.set(n,n)}return{positionView:r,positionAttr:o,colorAttr:m,texCoord0Attr:c,indicesView:p,normalsView:b,normalsAttr:_}}_onRemoveFromCache(t){const e=j(this.view);e&&e.onRenderableEvicted(this,t.handle,t.totalMemory()),this.freeRenderable(t.handle)}_dbg(t,e){this._dbgFlags.has(t)&&(t===f.Error?fe.getLogger(this).error(e):fe.getLogger(this).warn(e))}};I([B()],E.prototype,"_visibleGeometryChangedSchedulerHandle",void 0),I([B()],E.prototype,"layer",void 0),I([B({readOnly:!0})],E.prototype,"visibleAtCurrentScale",null),I([B()],E.prototype,"elevationOffset",null),E=I([dt("esri.views.3d.layers.IntegratedMesh3DTilesLayerView3D")],E);const Ft=E;export{Ft as default};
