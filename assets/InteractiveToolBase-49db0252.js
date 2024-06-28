import{eV as Be,ez as Ve,eK as Ue,bt as N,rg as qe,cY as k,cM as w,qL as D,cd as He,eI as xe,m1 as Xe,bi as Ye,m5 as Ze,p_ as J,rh as Fe,eQ as W,eA as Ke,jK as Qe,eD as q,n1 as oe,j3 as le,eM as ce,eE as he,dA as j,ri as Je,f2 as ue,fg as E,eP as ee,rj as de,eH as pe,fl as et,rk as tt,rl as it,rm as nt,m6 as at,aM as st,aG as rt,ao as ot,eJ as lt,rn as ct,ro as ht,ew as H,qX as A,m7 as ut,ef as te,dz as Pe,rp as dt,di as _e,ix as pt,rq as _t,rr as gt,fr as ge,qY as ft,dx as mt,rs as vt,lb as fe,l7 as b,l4 as bt,lf as M,l6 as yt,l8 as St,ld as Et,l5 as wt,pi as me,f7 as g,rt as $t,l9 as Tt,qs as At,lc as x,ru as Ot,pn as Lt,lg as Rt,aA as Mt,aj as l,lj as S,lk as F,ll as zt,lm as jt,ln as xt,pj as Ft,lo as Pt,lp as Dt,mi as X,lr as Ct,ls as It,lt as Nt,lu as Wt,rv as kt,lz as Gt,pl as Bt,lB as Y,rw as Z,rx as ve,pm as Vt,lM as Ut,cr as be,ee as ie,pk as qt,ry as Ht,lI as Xt,nf as Yt,rz as Zt,rA as Kt,rB as Qt,rC as De,fk as Ce,eW as Ie,oA as Jt,ed as Ne,cX as ei,rD as ti,oW as ii,qf as ni,dF as ai,co as si,em as ne,eF as ae,bM as ye,nD as ri,aP as oi,ak as m,am as li,aq as ci,rE as O,fM as hi}from"./index-ab96db07.js";import{E as Se}from"./EditGeometryOperations-cd9be2c8.js";class Di{constructor(e){this.metadata=void 0,this._camera=new qe,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=new Array,this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=k(),this._worldFrame=null,this._renderLocation=w(),this._renderLocationDirty=!0,this._location=new N({x:0,y:0,z:0}),this._elevationAlignedLocation=new N,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.consumesClicks=!0,this.cursor=null,this.grabCursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=D.None,this._focused=!1,this.events=new He.EventEmitter,this._screenLocation={screenPointArray:xe(),renderScreenPointArray:Xe(),pixelSize:0},this._screenLocationDirty=!0,this._engineResourcesAddedToStage=!1,this._attached=!1,this._location.spatialReference=e.view.spatialReference,Object.assign(this,e);const t=this.view.state?.camera;t&&this._camera.copyFrom(t)}destroy(){this._applyObjectTransform=gi,this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this._camera=null}get _stage(){return this.view?._stage}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,this._noDisplayCount===1&&this._updateEngineObject(),Ye(()=>{this._noDisplayCount--,this._noDisplayCount===0&&this._updateEngineObject()})}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){Ee(e)&&(this._screenLocationDirty=!0),Ze(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=k()),ui(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){J(e,this._location),this._notifyLocationChanged()}_notifyLocationChanged(){this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){J(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){const e=this._elevation.override!=null?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y,this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=Fe(this.location.spatialReference),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,t){t?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:e===!0?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this._ensureScreenLocation(),this._screenLocation}_ensureScreenLocation(){if(!this._screenLocationDirty)return;this._screenLocation.pixelSize=this._camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1;let e;if(Ee(this._modelTransform)){const t=this._calculateModelTransformOffset(_i);e=W(t,t,this.renderLocation)}else e=this.renderLocation;this._camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this._camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}get attached(){return this._attached}intersectionDistance(e,t){if(!this.available)return null;const i=Ke(e,di),a=this._getCollisionRadius(t),s=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if(nt(this.screenLocation.screenPointArray,i)<a*a)return this.screenLocation.renderScreenPointArray[2]+s;break;case"line":{const r=this.collisionType.paths,o=this._getWorldToScreenObjectScale(),c=this._calculateObjectTransform(o,C),h=a*this.screenLocation.pixelSize,d=q(this._camera,i,K);if(d==null)return null;for(const p of r){if(p.length===0)continue;const u=j(P,p[0],c);for(let v=1;v<p.length;v++){const f=j(Te,p[v],c),$=it(ue(u,f,we),d);if($!=null&&$<h*h){const T=W(E.get(),u,f);ee(T,T,.5);const z=de(E.get());return this._camera.projectToRenderScreen(T,z),z[2]+s}pe(u,f)}}break}case"disc":{const r=this.collisionType.direction,o=this.collisionType.offset??et,c=this._getWorldToScreenObjectScale(),h=this._calculateObjectTransform(c,C),d=a*this.screenLocation.pixelSize,p=q(this._camera,i,K);if(p==null)return null;const u=oe($e,h),v=le(Oe,r,u),f=j(Le,o,h);ce(f,v,I);const $=Ae;if(he(I,p,$)&&tt($,f)<d*d)return this.screenLocation.renderScreenPointArray[2]+s;break}case"ribbon":{const{paths:r,direction:o}=this.collisionType,c=this._getWorldToScreenObjectScale(),h=this._calculateObjectTransform(c,C),d=a*this._camera.computeScreenPixelSizeAt(this.renderLocation),p=q(this._camera,i,K);if(p==null)return null;const u=oe($e,h),v=le(Oe,o,u),f=this._calculateModelTransformPosition(Le);ce(f,v,I);const $=Ae;if(!he(I,p,$))break;for(const T of r){if(T.length===0)continue;const z=j(P,T[0],h);for(let B=1;B<T.length;B++){const V=j(Te,T[B],h),se=Je(ue(z,V,we),$);if(se!=null&&se<d*d){const U=W(E.get(),z,V);ee(U,U,.5);const re=de(E.get());return this._camera.projectToRenderScreen(U,re),re[2]+s}pe(z,V)}}break}default:Qe(this.collisionType)}return null}attach(e={manipulator3D:{}}){const t=this._stage;if(!t)return;const i=e.manipulator3D;i.engineLayerId==null?(this._engineLayer=new at(t,{pickable:!1,updatePolicy:st.SYNC}),i.engineLayerId=this._engineLayer.id):t?.getObject&&(this._engineLayer=t.getObject(i.engineLayerId)),i.engineLayerReferences=(i.engineLayerReferences||0)+1,this._materialIdReferences=i.materialIdReferences,this._materialIdReferences==null&&(this._materialIdReferences=new Map,i.materialIdReferences=this._materialIdReferences),this._camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),rt(this._location.spatialReference,this.view.spatialReference)||(this.location=new N({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(e={manipulator3D:{}}){const t=e.manipulator3D;t.engineLayerReferences--;const i=t.engineLayerReferences===0;this._removeResourcesFromStage(),i&&(t.engineLayerId=null,ot(this._engineLayer)),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this._camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){lt(this.location,Re,e.spatialReference)&&ct(e.extent,Re)&&this._notifyLocationChanged()}_evaluateElevationAlignment(){if(this.elevationInfo==null)return;let e=null,t=0;const i=ht(this.elevationInfo,this.location.spatialReference??this.view.elevationProvider.spatialReference);switch(this.elevationInfo.mode){case"on-the-ground":e=H(this.view.elevationProvider,this.location,"ground")??0;break;case"relative-to-ground":t=(H(this.view.elevationProvider,this.location,"ground")??0)+i;break;case"relative-to-scene":t=(H(this.view.elevationProvider,this.location,"scene")??0)+i;break;case"absolute-height":t=i}return t!==this._elevation.offset||e!==this._elevation.override?(this._elevation.offset=t,void(this._elevation.override=e)):void 0}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),t=C;if(this.autoScaleRenderObjects===!0){const r=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(r,t)}else this._calculateObjectTransform(e,t);const{objectsByState:i}=this._ensureEngineResources(),a=(this.focused?A.Focused:A.Unfocused)|(this.selected?A.Selected:A.Unselected),s=this._noDisplayCount>0;for(const{stateMask:r,objects:o}of i){if(s){for(const u of o)u.visible=!1;continue}const c=(r&A.All)!==A.None,h=(r&D.All)!==D.None,d=!c||(a&r)==(r&A.All),p=!h||(this.state&r)==(r&D.All);if(d&&p)for(const u of o)u.visible=!0,u.transformation=t;else for(const u of o)u.visible=!1}}_ensureEngineResources(){if(this._engineResources==null){const e=this._engineLayer,t=[],i=new Set;this.renderObjects.forEach(({geometry:{material:r}})=>{i.has(r)||(t.push(r),i.add(r))});const a=new Map;this._renderObjects.forEach(r=>{const o=new ut({castShadow:!1,geometries:[r.geometry]}),c=a.get(r.stateMask)||[];c.push(o),a.set(r.stateMask,c)});const s=[];a.forEach((r,o)=>s.push({stateMask:o,objects:r})),this._engineResources={objectsByState:s,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){const e=this._stage;if(this._engineResourcesAddedToStage||this._engineResources==null||!e)return;const{objectsByState:t,layer:i,materials:a}=this._engineResources;a.forEach(s=>{const r=this._materialIdReferences,o=r.get(s.id)||0;o===0&&e.add(s),r.set(s.id,o+1)}),t.forEach(({objects:s})=>{i.addMany(s),e.addMany(s)}),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(){const e=this._stage;if(!this._engineResourcesAddedToStage||this._engineResources==null||!e)return;const{objectsByState:t,layer:i,materials:a}=this._engineResources;t.forEach(({objects:s})=>{i.removeMany(s),e.removeMany(s)}),a.forEach(s=>{const r=this._materialIdReferences,o=r.get(s.id);o===1?(e.remove(s),r.delete(s.id)):r.set(s.id,o-1)}),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*(e==="touch"?this.touchMultiplier:1)}_getFocusedSize(e,t){return e*(t?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const t=this._getWorldToScreenObjectScale(),i=this._calculateObjectTransform(t,pi);return te(e,i[12],i[13],i[14])}_calculateModelTransformOffset(e){const t=this._calculateModelTransformPosition(e);return Pe(e,t,this.renderLocation)}_calculateObjectTransform(e,t){return dt(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&_e(t,t,this._worldFrame),_e(t,t,this._modelTransform),t[12]+=this.renderLocation[0],t[13]+=this.renderLocation[1],t[14]+=this.renderLocation[2],t[15]=1,this._applyObjectTransform!=null&&this._applyObjectTransform(t),t}get test(){}}function Ee(n){return n[12]!==0||n[13]!==0||n[14]!==0}function ui(n,e,t){switch(n.viewingMode){case"local":return ft(t),!0;case"global":{const i=pt(n.renderCoordsHelper.spatialReference);return _t(e,0,P,0,i.radius),gt(ge(P[0]),ge(P[1]),t),!0}}}const di=xe(),we=Be(),K=Ve(),$e=mt(),pi=k(),C=k(),I=Ue(),P=w(),Te=w(),Ae=w(),Oe=w(),Le=w(),_i=w(),Re=new N({x:0,y:0,z:0,spatialReference:null}),gi=()=>{};function fi(n){return n?.operations?.data.geometry}function mi(n,e){if(!e.screenSizeEnabled)return;const t=n.vertex;vt(t,e),t.uniforms.add(new fe("perScreenPixelRatio",(i,a)=>a.camera.perScreenPixelRatio),new fe("screenSizeScale",i=>i.screenSizeScale)),t.code.add(b`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function vi(n){const e=new bt,t=n.multipassEnabled&&n.output===M.Color;e.include(yt,n),e.include(mi,n),e.include(St,n);const{vertex:i,fragment:a}=e;return a.include(Et),wt(i,n),a.uniforms.add(new me("uColor",s=>s.color)),e.attributes.add(g.POSITION,"vec3"),e.varyings.add("vWorldPosition","vec3"),t&&e.varyings.add("depth","float"),n.screenSizeEnabled&&e.attributes.add(g.OFFSET,"vec3"),n.shadingEnabled&&($t(i),e.attributes.add(g.NORMAL,"vec3"),e.varyings.add("vViewNormal","vec3")),i.code.add(b`
    void main(void) {
      vWorldPosition = ${n.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),n.shadingEnabled&&i.code.add(b`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),i.code.add(b`
    ${t?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),t&&e.include(Tt,n),a.code.add(b`
    void main() {
      discardBySlice(vWorldPosition);
      ${t?"terrainDepthTest(depth);":""}
    `),n.shadingEnabled?(a.uniforms.add(new At("shadingDirection",s=>s.shadingDirection)),a.uniforms.add(new me("shadedColor",s=>bi(s.shadingTint,s.color))),a.code.add(b`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):a.code.add(b`vec4 finalColor = uColor;`),n.transparencyPassType===x.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),a.code.add(b`
      ${n.output===M.ObjectAndLayerIdColor?b`finalColor.a = 1.0;`:""}
      if (finalColor.a < ${b.float(Ot)}) {
        discard;
      }

      ${n.output===M.Color?b`fragColor = highlightSlice(finalColor, vWorldPosition); ${n.transparencyPassType===x.ColorAlpha?b`
                    fragColor = premultiplyAlpha(fragColor);
                    fragAlpha = fragColor.a;`:""}`:""}
    }
    `),e}function bi(n,e){const t=1-n[3],i=n[3]+e[3]*t;return i===0?(L[3]=i,L):(L[0]=(n[0]*n[3]+e[0]*e[3]*t)/i,L[1]=(n[1]*n[3]+e[1]*e[3]*t)/i,L[2]=(n[2]*n[3]+e[2]*e[3]*t)/i,L[3]=e[3],L)}const L=Lt(),yi=Object.freeze(Object.defineProperty({__proto__:null,build:vi},Symbol.toStringTag,{value:"Module"}));let We=class ke extends zt{initializeProgram(e){return new jt(e.rctx,ke.shader.get().build(this.configuration),Ge)}_setPipelineState(e){const t=this.configuration,i=e===x.NONE,a=e===x.FrontFace;return xt({blending:t.output===M.Color&&t.transparent?i?Ft:Pt(e):null,culling:Dt(t.cullFace),depthTest:{func:a?X.LESS:t.shadingEnabled?X.LEQUAL:X.LESS},depthWrite:i?t.writeDepth?Ct:null:It(e),drawBuffers:Nt(e),colorWrite:Wt,polygonOffset:i||a?null:kt})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}};We.shader=new Rt(yi,()=>Mt(()=>import("./ShadedColorMaterial.glsl-af62f49a.js"),["./ShadedColorMaterial.glsl-af62f49a.js","./index-ab96db07.js","./index-74ab7f40.css","./EditGeometryOperations-cd9be2c8.js","./geometry2dUtils-bc57a82d.js"],import.meta.url));let y=class extends Gt{constructor(){super(...arguments),this.output=M.Color,this.cullFace=F.None,this.transparencyPassType=x.NONE,this.hasSlicePlane=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.multipassEnabled=!1,this.cullAboveGround=!1}};l([S({count:M.COUNT})],y.prototype,"output",void 0),l([S({count:F.COUNT})],y.prototype,"cullFace",void 0),l([S({count:x.COUNT})],y.prototype,"transparencyPassType",void 0),l([S()],y.prototype,"hasSlicePlane",void 0),l([S()],y.prototype,"transparent",void 0),l([S()],y.prototype,"writeDepth",void 0),l([S()],y.prototype,"screenSizeEnabled",void 0),l([S()],y.prototype,"shadingEnabled",void 0),l([S()],y.prototype,"multipassEnabled",void 0),l([S()],y.prototype,"cullAboveGround",void 0),l([S({constValue:!1})],y.prototype,"occlusionPass",void 0);const Ge=new Map([[g.POSITION,0],[g.NORMAL,1],[g.OFFSET,2]]);let Si=class extends Bt{constructor(e){super(e,new wi),this.supportsEdges=!0,this.produces=new Map([[Y.OPAQUE_MATERIAL,t=>t===M.Highlight||Z(t)&&!this._isTransparent],[Y.TRANSPARENT_MATERIAL,t=>Z(t)&&this._isTransparent&&this.parameters.writeDepth],[Y.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>Z(t)&&this._isTransparent&&!this.parameters.writeDepth]]),this._configuration=new y,this._vertexAttributeLocations=Ge}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.screenSizeEnabled=this.parameters.screenSizeEnabled,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,a,s,r){if(this.parameters.screenSizeEnabled){const o=e.attributes.get(g.OFFSET);ve(e,i,a,s,{applyToVertex:(h,d,p,u)=>{const v=te(Me,o.data[3*u],o.data[3*u+1],o.data[3*u+2]),f=te(Ti,h,d,p);return ee(v,v,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(v)),W(f,f,v),[f[0],f[1],f[2]]},applyToAabb:h=>{const d=Kt(h,Me);return Qt(h,this.parameters.screenSizeScale*i.camera.computeScreenPixelSizeAt(d))}},r)}else ve(e,i,a,s,void 0,r)}createGLMaterial(e){return new Ei(e)}createBufferWriter(){return new $i(this.parameters.screenSizeEnabled)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}},Ei=class extends Vt{beginSlot(e){return this.ensureTechnique(We,e)}},wi=class extends Ut{constructor(){super(...arguments),this.color=be(1,1,1,1),this.shadingTint=be(0,0,0,.25),this.shadingDirection=ie(w(),[.5,-.5,-.5]),this.screenSizeScale=14,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=F.None,this.screenSizeEnabled=!1,this.shadingEnabled=!0}},$i=class{constructor(e){this.screenSizeEnabled=e;const t=qt().vec3f(g.POSITION).vec3f(g.NORMAL);this.screenSizeEnabled&&t.vec3f(g.OFFSET),this.vertexBufferLayout=t}elementCount(e){return e.attributes.get(g.POSITION).indices.length}write(e,t,i,a,s){if(Ht(i,this.vertexBufferLayout,e,t,a,s),this.screenSizeEnabled){if(!i.attributes.has(g.OFFSET))throw new Error(`${g.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const r=i.attributes.get(g.OFFSET);Xt(r.size===3);const o=a.getField(g.OFFSET,Yt);if(!o)throw new Error("unable to acquire view for "+g.OFFSET);Zt(r,t,o,s)}}}};const Me=w(),Ti=w();function Gi(n,e=Ie.OccludeAndTransparent,t=!0){const i=De(n),a=!(n[3]<1);return t?new Si({color:i,writeDepth:a,cullFace:F.Back,renderOccluded:e,isDecoration:!0}):new Ce({color:i,writeDepth:a,cullFace:F.Back,renderOccluded:e,isDecoration:!0})}function Bi(n,e=Ie.OccludeAndTransparent){const t=De(n);return new Ce({color:t,writeDepth:!0,cullFace:F.Front,renderOccluded:e,isDecoration:!0})}const Vi=Object.freeze({calloutLength:40,calloutWidth:1,discRadius:27,focusMultiplier:1.1}),Ui=Object.freeze({autoScaleRenderObjects:!1,worldSized:!0});function qi(n,e,t,i){const a=Pe(E.get(),n,t),s=Ai(a,Ne(E.get(),i,a),t,Jt.get());ei(s,s);const r=j(E.get(),e,s);return Math.atan2(r[1],r[0])}function Ai(n,e,t,i){const a=ie(E.get(),n),s=ie(E.get(),e),r=Ne(E.get(),a,s);return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=0,i[4]=s[0],i[5]=s[1],i[6]=s[2],i[7]=0,i[8]=r[0],i[9]=r[1],i[10]=r[2],i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function Hi(n,e){const t=n.getViewForGraphic(e);return t!=null&&"computeAttachmentOrigin"in t?t.computeAttachmentOrigin(e,n.spatialReference):null}function Xi(n,e){const t=e.origin;t==null?Oi(n,fi(e)):n.elevationAlignedLocation=t}function Oi(n,e){if(e==null)return;const t=e.type==="mesh"?e.anchor:ti(e);t!=null&&(n.location=ii(t))}class Yi{constructor(e,t=A.None){this.geometry=e,this.stateMask=t}}function Li(n,e){let t=null,i=null;return a=>{if(a.action==="cancel")return void(i!=null&&(i.execute({action:"cancel"}),t=null,i=null));const s={action:a.action,screenStart:a.start,screenEnd:a.screenPoint};a.action==="start"&&t==null&&(t=new G,i=new G,e(n,t,i,a.pointerType,s)),t?.execute(s),a.action==="end"&&t!=null&&(t=null,i=null)}}function Zi(n,e){return n.events.on("drag",Li(n,e))}function Ki(n,e){const t=[n.x,n.y,n.z??0],i=e,a=[Math.cos(i),Math.sin(i)],s=Math.sqrt(a[0]*a[0]+a[1]*a[1]);if(s===0)return null;a[0]/=s,a[1]/=s;const r=o=>{const c=(o.x-t[0])*a[0]+(o.y-t[1])*a[1];o.x=t[0]+c*a[0],o.y=t[1]+c*a[1]};return o=>(r(o.mapStart),r(o.mapEnd),{...o,axis:a})}function Ri(n){let e=null;return t=>{if(t.action==="start"&&(e=Mi(n,t.mapStart.spatialReference)),e==null)return null;const i=t.mapEnd.x-t.mapStart.x,a=t.mapEnd.y-t.mapStart.y,s=(t.mapEnd.z??0)-(t.mapStart.z??0);return e.move(i,a,s,t.action),{...t,translationX:i,translationY:a,translationZ:s}}}function ze(n,e){return n==null?null:n.spatialReference.equals(e)?n.clone():ne(n,e)}function Mi(n,e){const t=n.operations;if(!t)return null;const i=t.data.geometry,a=Fe(e);if(i.spatialReference.equals(a))return Q(n,t,()=>{});if(i.type!=="mesh"){const s=ze(i,a);if(s==null)return null;const r=i.spatialReference;return Q(n,Se.fromGeometry(s,t.viewingMode),()=>{const o=ne(i,r);t.trySetGeometry(o)})}if(ni(i)){const s=ze(i.origin,a);if(!s)return null;const r=i.spatialReference,o=Se.fromGeometry(s,t.viewingMode);return Q(n,t,()=>{const c=ne(o.data.geometry,r),h=c.x-i.origin.x,d=c.y-i.origin.y,p=(c.z??0)-(i.origin.z??0);t.move(h,d,p)})}return null}function Q(n,e,t){let i=0,a=0,s=0;return{move:(r,o,c,h)=>{h==="start"&&(i=0,a=0,s=0);const d=r-i,p=o-a,u=c-s;e.move(d,p,u),i+=d,a+=p,s+=u,t(),h==="end"&&n.endInteraction?.()}}}function Qi(n){const e=n.map(t=>Ri(t)).filter(ai);return t=>{const i=t.mapEnd.x-t.mapStart.x,a=t.mapEnd.y-t.mapStart.y,s=t.mapEnd.z-t.mapStart.z;return e.forEach(r=>r(t)),{...t,translationX:i,translationY:a,translationZ:s}}}function Ji(n,e){const t=new Map;for(const i of e)t.set(i,si(n[i]));return i=>(t.forEach((a,s)=>{n[s]=a}),i)}function zi(n){const e=n.operations?.createResetState();return t=>(e?.remove(),t)}function en(n){const e=n.map(t=>zi(t)).filter(t=>t!=null);return t=>(e.forEach(i=>i(t)),t)}function tn(){let n=0,e=0,t=0;return i=>{i.action==="start"&&(n=i.mapStart.x,e=i.mapStart.y,t=i.mapStart.z);const a=i.mapEnd.x-n,s=i.mapEnd.y-e,r=i.mapEnd.z-t;return n=i.mapEnd.x,e=i.mapEnd.y,t=i.mapEnd.z,{...i,mapDeltaX:a,mapDeltaY:s,mapDeltaZ:r,mapDeltaSpatialReference:i.mapStart.spatialReference}}}function nn(){let n=0,e=0;return t=>{t.action==="start"&&(n=t.screenStart.x,e=t.screenStart.y);const i=t.screenEnd.x-n,a=t.screenEnd.y-e;return n=t.screenEnd.x,e=t.screenEnd.y,{...t,screenDeltaX:i,screenDeltaY:a}}}function an(n,e){let t=null,i=0,a=0;return s=>{if(s.action==="start"&&(t=n.toScreen?.(e),t!=null&&(t.x<0||t.x>n.width||t.y<0||t.y>n.height?t=null:(i=s.screenStart.x-t.x,a=s.screenStart.y-t.y))),t==null)return null;const r=ye(s.screenEnd.x-i,0,n.width),o=ye(s.screenEnd.y-a,0,n.height),c=ri(r,o);return s.screenStart=t,s.screenEnd=c,s}}const ji=()=>{};class G{constructor(){this.execute=ji}next(e,t=new G){return e!=null&&(this.execute=i=>{const a=e(i);a!=null&&t.execute(a)}),t}}function sn(n,e,t=[]){if(n.type==="2d")return a=>a;let i=null;return a=>{a.action==="start"&&(i=n.toMap(a.screenStart,{exclude:t}),i!=null&&(i.z=ae(i,n,e)));const s=n.toMap(a.screenEnd,{exclude:t});s!=null&&(s.z=ae(s,n,e));const r=i!=null&&s!=null?{sceneStart:i,sceneEnd:s}:null;return{...a,scenePoints:r}}}function je(n,e,t){const i=e.elevationProvider.getElevation(n.x,n.y,n.z??0,n.spatialReference,"scene")??0,a=J(n);return a.z=i,a.hasZ=!0,a.z=ae(a,e,t),a}function rn(n,e){if(n.type==="2d")return i=>i;let t=null;return i=>{i.action==="start"&&(t=je(i.mapStart,n,e));const a=je(i.mapEnd,n,e),s=t!=null&&a!=null?{sceneStart:t,sceneEnd:a}:null;return{...i,scenePoints:s}}}var R;(function(n){n[n.WhenToolEditable=0]="WhenToolEditable",n[n.WhenToolNotEditable=1]="WhenToolNotEditable",n[n.Always=2]="Always"})(R||(R={}));class xi{constructor(){this._isToolEditable=!0,this._manipulators=new oi,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(e){this._isToolEditable=e}get length(){return this._manipulators.length}add(e,t=R.WhenToolEditable){this.addMany([e],t)}addMany(e,t=R.WhenToolEditable){for(const i of e){const a={manipulator:i,visibilityPredicate:t,attached:!1};this._manipulators.add(a),this._attached&&this._updateManipulatorAttachment(a)}}remove(e){for(let t=0;t<this._manipulators.length;t++)if(this._manipulators.at(t).manipulator===e){const i=this._manipulators.splice(t,1)[0];this._detachManipulator(i);break}}removeAll(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._manipulators.removeAll()}attach(){this._manipulators.forEach(e=>{this._updateManipulatorAttachment(e)}),this._attached=!0}detach(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._attached=!1}destroy(){this.detach(),this._manipulators.forEach(({manipulator:e})=>e.destroy()),this._manipulators.destroy(),this._resourceContexts=null}on(e,t){return this._manipulators.on(e,i=>{t(i)})}forEach(e){for(const t of this._manipulators.items)e(t)}some(e){return this._manipulators.items.some(e)}toArray(){const e=[];return this.forEach(t=>e.push(t.manipulator)),e}intersect(e,t){let i=null,a=Number.MAX_VALUE;return this._manipulators.forEach(({manipulator:s,attached:r})=>{if(!r||!s.interactive)return;const o=s.intersectionDistance(e,t);o!=null&&o<a&&(a=o,i=s)}),i}_updateManipulatorAttachment(e){this._isManipulatorItemVisible(e)?this._attachManipulator(e):this._detachManipulator(e)}_attachManipulator(e){e.attached||(e.manipulator.attach&&e.manipulator.attach(this._resourceContexts),e.attached=!0)}_detachManipulator(e){if(!e.attached)return;const t=e.manipulator;t.grabbing=!1,t.dragging=!1,t.hovering=!1,t.selected=!1,t.detach&&t.detach(this._resourceContexts),e.attached=!1}_isManipulatorItemVisible(e){return e.visibilityPredicate===R.Always||(this._isToolEditable?e.visibilityPredicate===R.WhenToolEditable:e.visibilityPredicate===R.WhenToolNotEditable)}}let _=class extends ci{constructor(n){super(n),this.manipulators=new xi,this.automaticManipulatorSelection=!0,this.hasGrabbedManipulators=!1,this.hasHoveredManipulators=!1,this.firstGrabbedManipulator=null,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[O.MANAGER,!0],[O.USER,!0]]),this._creationFinishedResolver=hi()}get active(){return this.view!=null&&this.view.activeTool===this}set visible(n){this._get("visible")!==n&&(this._set("visible",n),this._syncVisible())}get editable(){return this.getEditableFlag(O.USER)}set editable(n){this.setEditableFlag(O.USER,n)}get updating(){return!1}get cursor(){return null}get hasFocusedManipulators(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){this.view!=null&&(this.view.focus(),this.onActivate())}deactivate(){this.onDeactivate()}handleInputEvent(n){this.onInputEvent(n)}handleInputEventAfter(n){this.onInputEventAfter(n)}setEditableFlag(n,e){this._editableFlags.set(n,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),n===O.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}getEditableFlag(n){return this._editableFlags.get(n)??!1}whenCreated(){return this._creationFinishedResolver.promise}onManipulatorSelectionChanged(){}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(n){}onInputEventAfter(n){}get internallyEditable(){return this.getEditableFlag(O.USER)&&this.getEditableFlag(O.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.initialized){if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};l([m({constructOnly:!0})],_.prototype,"view",void 0),l([m({readOnly:!0})],_.prototype,"active",null),l([m({value:!0})],_.prototype,"visible",null),l([m({value:!0})],_.prototype,"editable",null),l([m({readOnly:!0})],_.prototype,"manipulators",void 0),l([m({readOnly:!0})],_.prototype,"updating",null),l([m()],_.prototype,"cursor",null),l([m({readOnly:!0})],_.prototype,"automaticManipulatorSelection",void 0),l([m()],_.prototype,"hasFocusedManipulators",null),l([m()],_.prototype,"hasGrabbedManipulators",void 0),l([m()],_.prototype,"hasHoveredManipulators",void 0),l([m()],_.prototype,"firstGrabbedManipulator",void 0),l([m({readOnly:!0})],_.prototype,"created",void 0),l([m({readOnly:!0})],_.prototype,"removeIncompleteOnCancel",void 0),_=l([li("esri.views.interactive.InteractiveToolBase")],_);export{sn as D,Xi as F,an as M,Ai as O,Qi as S,rn as U,qi as a,Si as b,Ui as c,Yi as d,Di as e,Ri as f,zi as g,nn as h,Gi as i,Vi as j,Ji as k,Bi as l,Ki as m,_ as n,Hi as o,Zi as p,fi as t,vi as u,tn as v,G as w,en as z};
