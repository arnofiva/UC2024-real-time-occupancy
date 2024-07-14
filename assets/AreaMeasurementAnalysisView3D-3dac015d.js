import{eH as b,eQ as F,eb as Q,dz as j,ee as K,cM as p,ef as De,eP as N,rk as ze,sj as Fe,eO as x,ed as Re,iI as je,pn as We,jQ as Ue,jc as qe,sk as Oe,jd as ke,df as de,aG as He,nF as te,e1 as ce,fj as Be,nQ as ne,sl as ae,qV as Ne,sm as ue,de as Qe,j5 as pe,sn as Ke,ix as Ze,so as Je,sp as ge,sq as me,jj as Ye,ja as _e,fr as Xe,ph as et,dy as q,ew as tt,aj as l,ak as d,am as X,aq as he,aQ as I,aR as fe,cd as st,dL as ye,iG as it,aY as oe,ev as rt,aK as nt,bt as at,l4 as ot,l5 as lt,f7 as Z,l7 as se,l9 as ht,qu as dt,pi as ve,ld as ct,lc as T,lg as ut,aA as pt,qK as gt,li as k,ll as mt,lm as _t,qC as ft,ln as yt,lo as vt,lq as wt,lr as Lt,ls as St,lt as $t,lu as Mt,lj as D,lz as Pt,lA as Ct,lB as ie,lD as re,lH as bt,lF as At,pm as Vt,lM as xt,pD as Ee,cr as J,eW as R,sr as Gt,eZ as we,e_ as Le,n5 as Dt,fn as Rt,fo as Se,ps as Ot,pt as $e,pu as Me,pv as Et,pw as Pe,cY as It,oD as Tt,px as zt,ai as Ft,ao as C,bI as Ce,fm as jt,pz as Wt,bQ as Ut,bP as qt,bK as kt,bH as Ht,py as Bt}from"./index-ea8d34f0.js";import{e as le,a as Nt}from"./interfaces-c8044671.js";import{s as Qt}from"./AnalysisView3D-9b608bd7.js";import{o as Kt,k as be}from"./euclideanAreaMeasurementUtils-9f9982d6.js";import{r as Zt,u as Jt,f as Yt}from"./geodesicLengthMeasurementUtils-268aa2d2.js";import{t as Xt}from"./projectionUtils-b34ac9b4.js";import{E as Ae,p as es,P as ts,a as ss}from"./EditGeometryOperations-155877ab.js";import{g as Ie}from"./TextOverlayItem-f8f0ac25.js";import{f as Ve,_ as is,m as rs}from"./Segment-3dc96027.js";import{a as ns,f as z}from"./LineVisualElement-6ef288a1.js";function xe(t,e,s,i,r){b(H,t),F(B,t,e),Q(H,s,H,r),Q(B,s,B,r),j(i,B,H),K(i,i)}const H=p(),B=p();function as(t,e){const s=je(e);De(s,0,0,0);for(let r=0;r<t.length;++r)F(s,s,t[r]);N(s,s,1/t.length);let i=0;for(let r=0;r<t.length;++r)i=Math.max(i,ze(s,t[r]));e[3]=Math.sqrt(i)}function os(t,e){if(t.length<3)throw new Error("need at least 3 points to fit a plane");Fe(t[0],t[1],t[2],e)}function ls(t,e){return x(t,e)+t[3]}function hs(t,e,s,i){const r=cs;return b(r.rings[0][0],t),b(r.rings[0][1],e),b(r.rings[0][2],s),b(r.rings[0][3],t),r.spatialReference=i,Kt(r)}function ds(t,e=null,s=!0){const r=(n,a)=>{if(a[0]===0&&a[1]===0&&a[2]===0)return!1;for(let o=0;o<n.length;++o)if(x(a,n[o])<-1e-6)return!1;return!0};if(t.length===0)return!1;if(t.length===1)return e&&b(e,t[0]),!0;De($,0,0,0);for(let n=0;n<t.length;++n)F($,$,t[n]);if(K($,$),r(t,$))return e&&b(e,$),!0;if(!s)return!1;for(let n=0;n<t.length;++n)for(let a=0;a<t.length;++a)if(n!==a&&(Re($,t[n],t[a]),K($,$),r(t,$)))return e&&b(e,$),!0;return!1}const cs={hasM:!1,hasZ:!0,rings:[[p(),p(),p(),p()]],spatialReference:null,type:"polygon"},$=p();class us{get numVertices(){return this._length}get hasStagedVertex(){return this._hasCursorPoint}constructor(e){this.validMeasurement=!1,this.positionsWorld=[],this.positionsRender=[],this.positionsFittedWorld=[],this.positionsFittedRender=[],this.positionsGeodesic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.areaCentroidWorldCoords=p(),this.areaCentroidRenderCoords=p(),this.geodesicAreaCentroidRenderCoords=p(),this.fittingMode=null,this.area=null,this.geodesicArea=null,this.pathLength=null,this.geodesicPathLength=null,this.perimeterLength=null,this._length=0,this._centroidRenderCoords=p(),this._planeWorldCoords=We(),this._worldUp=p(),this._worldTangent=p(),this._frame=[p(),p(),p()],this._pathVersion=-1,this._hasCursorPoint=!1,this._mode=null,this._tempU=p(),this._tempV=p(),this._tempVec3=p(),this._tempSphere=Ue(),this._sceneView=e;const s=qe(e.spatialReference);this._measurementSR=s,this._lengthMeasurementUnit=Oe(s)??"meters",this._areaMeasurementUnit=ke(s)??"square-meters"}update(e,s,i,r,n,a){const o=s!=null,h=this._pathVersion===e.version,c=this._hasCursorPoint===o,u=this._mode===n;return!(h&&!a&&c&&u&&e.isValidPolygon)&&(this._pathVersion=e.version,this._hasCursorPoint=o,this._updateCursorSegmentLength(e,s),this._update(e,s,i,r,n),!0)}_update(e,s,i,r,n){const a=this._sceneView.renderSpatialReference,o=this._measurementSR,h=i.spatialReference;let c=e.numVertices;const u=!(s==null||s.equals(e.lastPoint)||c>2&&s.equals(e.firstPoint));u&&(c+=1);const g=!e.polygonIsClosed&&c>2,v=e.polygonIsClosed||g;this._resize(c);const f=de(h),_=h!=null&&Zt(h)?h:null,P=_!=null&&He(h,f),{positionsGeodesic:w,positionsWorld:W,positionsRender:U,positionsSpherical:S}=this,G=(L,A)=>{ps(i.elevationProvider,L),q(L,W[A],o),q(L,U[A],a),P&&(q(L,w[A],_),q(L,S[A],f),K(S[A],S[A]))};e.forEachVertexPosition((L,A)=>G(L,A)),u&&G(s,c-1);const O=this._updatePathLengths(v);if(this.pathLength=this._length>1?te(O,this._lengthMeasurementUnit):null,P){const L=this._updateGeodesicPathLengths(v,_);this.geodesicPathLength=L!=null&&this._length>1?L:null}else this.geodesicPathLength=null;if(this._updateMode(n),!v)return this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),void(this.validMeasurement=!1);this._updateAreaAndPerimeterLength(i,a,o,r),P&&this._updateGeodesicArea(i,_),this.validMeasurement=!0}getData(){return{validMeasurement:this.validMeasurement,numVertices:this.numVertices,hasStagedVertex:this.hasStagedVertex,positionsRender:this.positionsRender,positionsFittedWorld:this.positionsFittedWorld,positionsFittedRender:this.positionsFittedRender,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,actualMeasurementMode:this.actualMeasurementMode}}_resize(e){for(e<this._length&&(this.positionsWorld.length=e,this.positionsRender.length=e,this.positionsFittedWorld.length=e,this.positionsFittedRender.length=e,this.positionsGeodesic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorld.push(p()),this.positionsRender.push(p()),this.positionsFittedWorld.push(ce()),this.positionsFittedRender.push(p()),this.positionsGeodesic.push(p()),this.positionsSpherical.push(p()),this.positionsStereographic.push(ce()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length}_updatePathLengths(e){const s=this.positionsWorld,i=this.pathSegmentLengths;let r=0;const n=this._length;for(let a=0;a<n;++a){const o=i[a]=Be(s[a],s[(a+1)%n]);(a<n-1||e)&&(r+=o)}return r}_updateGeodesicPathLengths(e,s){const i=this.positionsGeodesic,r=this.geodesicPathSegmentLengths;let n=0;const a=this._length;for(let o=0;o<a;++o){const h=Jt(i[o],i[(o+1)%a],s);if(h==null)return null;const c=ne(h,"meters").value,u=r[o]=c;(o<a-1||e)&&(n+=u)}return te(n,"meters")}_updateAreaAndPerimeterLength(e,s,i,r){const n=e.renderCoordsHelper,a=this.positionsWorld,o=this.positionsRender,h=this.positionsFittedWorld,c=this.positionsFittedRender,u=this._planeWorldCoords,g=this._centroidRenderCoords;ae(o,g),n.worldUpAtPosition(g,this._worldUp),n.worldBasisAtPosition(g,Ne.X,this._worldTangent),xe(g,this._worldUp,s,this._worldUp,i),xe(g,this._worldTangent,s,this._worldTangent,i),a.length>2&&os(a,u),this.fittingMode=this._selectFittingMode(u,a,this._worldUp,r);let v=0;if(this.fittingMode==="horizontal"){let S=-1/0;o.forEach((G,O)=>{const L=n.getAltitude(o[O]);L>S&&(S=L,v=O)})}const f=a[v];let _=u,P=this._worldTangent;this.fittingMode==="horizontal"?_=this._worldUp:this.fittingMode==="vertical"&&(_=this._tempVec3,P=this._worldUp,ue(u,this._worldUp,_)),b(this._frame[2],_),ue(P,_,this._frame[0]),Re(this._frame[1],this._frame[0],this._frame[2]),Qe(this._frame[1],this._frame[1]);const w=this._tempVec3,W=this._tempU,U=this._tempV;for(let S=0;S<this._length;++S){const G=h[S],O=c[S];j(w,a[S],f),pe(G,x(this._frame[0],w),x(this._frame[1],w)),N(W,this._frame[0],G[0]),N(U,this._frame[1],G[1]),F(w,W,U),F(w,w,f),Q(w,i,O,s)}this.perimeterLength=this._length>0?this._updatePerimeterLengths():null,ae(c,this.areaCentroidRenderCoords),Q(this.areaCentroidRenderCoords,s,this.areaCentroidWorldCoords,i),this._updateIntersectingSegments(),this.area=this.intersectingSegments.size===0?this._computeArea():null}_updateGeodesicArea(e,s){const{renderCoordsHelper:i,spatialReference:r}=e,{positionsSpherical:n,positionsStereographic:a}=this,o=this._tempVec3,h=ds(n,o);if(!h)return void(this.geodesicArea=null);const c=this._tempU,u=this._tempV;Ke(o,c,u);for(let g=0;g<this._length;++g){const v=x(n[g],c),f=x(n[g],u),_=x(n[g],o);pe(a[g],v/_,f/_)}N(o,o,Ze(r).radius),i.toRenderCoords(o,de(r),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=h&&this.geodesicIntersectingSegments.size===0?this._computeGeodesicArea(s):null}_updatePerimeterLengths(){const e=this.positionsFittedWorld,s=this.perimeterSegmentLengths;let i=0;for(let r=0;r<this._length;++r)i+=s[r]=Je(e[r],e[(r+1)%this._length]);return te(i,this._lengthMeasurementUnit)}_updateIntersectingSegments(){const e=this.positionsFittedWorld,s=this.intersectingSegments;s.clear();for(let i=0;i<this._length;++i)for(let r=i+2;r<this._length;++r){if((r+1)%this._length===i)continue;const n=e[i],a=e[(i+1)%this._length],o=e[r],h=e[(r+1)%this._length];ge(n,a,o,h)&&(s.add(i),s.add(r))}}_computeArea(){const e=this.positionsFittedWorld,s=this.triangleIndices=me(be(e));let i=0;for(let r=0;r<s.length;r+=3)i+=Ye(e[s[r]],e[s[r+1]],e[s[r+2]]);return _e(i,this._areaMeasurementUnit)}_updateGeodesicIntersectingSegments(){const e=this.positionsStereographic,s=this.geodesicIntersectingSegments;s.clear();for(let i=0;i<this._length;++i)for(let r=i+2;r<this._length;++r){if((r+1)%this._length===i)continue;const n=e[i],a=e[(i+1)%this._length],o=e[r],h=e[(r+1)%this._length];ge(n,a,o,h)&&(s.add(i),s.add(r))}}_computeGeodesicArea(e){const s=this.positionsGeodesic,i=this.positionsStereographic,r=this.geodesicTriangleIndices=me(be(i));let n=0;for(let a=0;a<r.length;a+=3){const o=hs(s[r[a]],s[r[a+1]],s[r[a+2]],e);if(o==null)return null;n+=ne(o,"square-meters").value}return _e(n,"square-meters")}_selectFittingMode(e,s,i,r){const n=s.map(u=>Math.abs(ls(e,u))).reduce((u,g)=>Math.max(u,g),0);as(s,this._tempSphere);const a=n/(2*this._tempSphere[3]),o=a<r.maxRelativeErrorCoplanar,h=a<r.maxRelativeErrorAlmostCoplanar;let c="horizontal";return o?c="oblique":h&&(c=Math.abs(x(i,e))>Math.cos(Xe(r.verticalAngleThreshold))?"horizontal":"vertical"),c}_updateCursorSegmentLength(e,s){const i=e.lastPoint;e.isValidPolygon||i==null||s==null?(this.geodesicStagedSegmentLength=null,this.stagedSegmentLength=null):(this.geodesicStagedSegmentLength=Yt(i,s),this.stagedSegmentLength=et(i,s)?.direct)}_updateMode(e){if(e===le.Auto){this.actualMeasurementMode="euclidean";let s=0;this.geodesicPathLength!=null&&(s+=this.geodesicPathLength.value),s>gs&&(this.actualMeasurementMode="geodesic")}else this.actualMeasurementMode=e===le.Euclidean?"euclidean":"geodesic";this.geodesicPathLength==null&&(this.actualMeasurementMode="euclidean"),this._mode=e}}function ps(t,e){e.hasZ||(e.z=tt(t,e,"ground")??0)}const gs=1e5;let E=class extends he{constructor(e){super(e)}initialize(){this._measurementDataManager=new us(this.view),this.addHandles([this.analysisViewData.path.on("change",()=>this._update()),I(()=>this.analysisViewData.stagedPoint,()=>this._update(),fe),I(()=>this.analysisViewData.mode,()=>this._update(),fe)]),this._update()}_update(e=!1){const{analysisViewData:s,view:i}=this,r={maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80};this._measurementDataManager.update(s.path,s.stagedPoint,i,r,s.mode,e)&&(s.measurementData=this._measurementDataManager.getData())}};l([d({constructOnly:!0})],E.prototype,"view",void 0),l([d({constructOnly:!0})],E.prototype,"analysis",void 0),l([d({constructOnly:!0})],E.prototype,"analysisViewData",void 0),E=l([X("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],E);let M=class extends st.EventedAccessor{constructor(e={}){super(e),this._version=0,this._internalGeometryChange=!1,this._extent=ye()}set areaMeasurement(e){this._set("areaMeasurement",e),e!=null&&this.view!=null&&this._initialize(e,this.view)}set view(e){this._set("view",e),e!=null&&this.areaMeasurement!=null&&this._initialize(this.areaMeasurement,e)}get constructed(){return this.areaMeasurement!=null&&this.view!=null}get version(){return this._version}get isEmptyPolygon(){return!this.constructed||this._editGeometry.components.length===0}get isValidPolygon(){return this.constructed&&this.polygonIsClosed}get extent(){if(this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].vertices.length>0){const e=ye(this._extent);return this.forEachVertex(s=>{it(e,s.pos)}),e}return null}get spatialReference(){return this.constructed?this._editGeometry.coordinateHelper.spatialReference:null}_initialize(e,s){this.removeAllHandles(),this.addHandles(I(()=>e.geometry,()=>{this._updateEditGeometryFromModelGeometry(e,s)},oe)),this._makeDirty(!0)}_makeDirty(e=!1){this.notifyChange("polygonIsClosed"),this.notifyChange("isValidPolygon"),this.notifyChange("initialized"),this.notifyChange("extent"),e&&this.notifyChange("numVertices")}_updateEditGeometryFromModelGeometry(e,s){if(this._version++,this._internalGeometryChange)return;this.removeHandles("EditGeometry");let i=e.geometry;if(i!=null){const r=rt(i,s.spatialReference);r==null&&Xt(e,i.spatialReference,nt.getLogger(this)),i=r}this._editGeometryOperations=i!=null?Ae.fromGeometry(i,s.state.viewingMode):new Ae(new es("polygon",ts(!0,!1,s.spatialReference)),s.state.viewingMode),this._makeDirty(!0),this.emit("change"),this.addHandles(this._editGeometry.on("change",r=>{this._makeDirty(r.addedVertices!=null||r.removedVertices!=null),this._internalGeometryChange=!0,e.geometry=this.numVertices>0?this._editGeometry.geometry:null,this._internalGeometryChange=!1}),"EditGeometry")}get _editGeometry(){return this._editGeometryOperations.data}get vertices(){const e=[];return this.forEachVertex(s=>{e.push(s)}),e}get numVertices(){return this.constructed&&this._editGeometry.components.length>0?this._editGeometry.components[0].vertices.length:0}get polygonIsClosed(){return this._editGeometry.components.length>0&&this._editGeometry.components[0].isClosed()}get firstPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getFirstVertex();if(e!=null)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}get lastPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getLastVertex();if(e!=null)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}getVertex(e){if(!this.constructed||this._editGeometry.components.length===0||this._editGeometry.components[0].vertices.length===0)return null;const s=this._editGeometry.components[0].vertices[0];let i=s;do{if(i.index===e)return i;i=i.rightEdge.rightVertex}while(i!==s&&i!=null);return null}getVertexPositionAsPoint(e){return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}getVertexPositionAsPointFromIndex(e){return this._editGeometry.coordinateHelper.vectorToPoint(this.getVertex(e).pos)}forEachVertex(e){this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].iterateVertices(e)}forEachVertexPosition(e){const s=this._editGeometry.coordinateHelper;this.forEachVertex((i,r)=>{s.vectorToPoint(i.pos,Ge),e(Ge,r)})}clear(){this.areaMeasurement!=null&&(this.areaMeasurement.geometry=null)}add(e){if(!this.constructed)return null;if(this._editGeometry.components.length===0){const i=this.view;this._editGeometry.components.push(new ss(i.spatialReference,i.state.viewingMode))}const s=this._editGeometryOperations.appendVertex(this._editGeometry.coordinateHelper.pointToVector(e));return this.emit("change"),s}close(){if(!this.constructed||this._editGeometry.components.length===0)return null;const e=this._editGeometryOperations.closeComponent(this._editGeometry.components[0]);return this.emit("change"),e}ensureContains(e,s=""){let i=!1;if(this._editGeometry.components.forEach(r=>{r.iterateVertices(n=>{n===e&&(i=!0)})}),!i)throw new Error(`vertex doesnt exist ${s}`);return i}setVertexPosition(e,s){if(!this.constructed)return null;const i=this._editGeometryOperations.setVertexPosition(e,this._editGeometry.coordinateHelper.pointToVector(s));return this.emit("change"),i}equals(e){if(this.numVertices!==e.numVertices)return!1;let s=!0;return this.forEachVertexPosition((i,r)=>{const n=e.getVertexPositionAsPointFromIndex(r);i.equals(n)||(s=!1)}),!!s}};l([d({value:null})],M.prototype,"areaMeasurement",null),l([d({value:null})],M.prototype,"view",null),l([d()],M.prototype,"isEmptyPolygon",null),l([d()],M.prototype,"isValidPolygon",null),l([d()],M.prototype,"extent",null),l([d()],M.prototype,"spatialReference",null),l([d()],M.prototype,"numVertices",null),l([d()],M.prototype,"polygonIsClosed",null),M=l([X("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementPathHelper")],M);const Ge=new at;function ms(t){const e=new ot,{vertex:s,fragment:i}=e;return lt(s,t),e.attributes.add(Z.POSITION,"vec3"),e.attributes.add(Z.UV0,"vec2"),e.varyings.add("vUV","vec2"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(se`
    void main(void) {
      vUV = uv0;
      ${t.multipassEnabled?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),e.include(ht,t),i.uniforms.add(new dt("size",r=>r.size)),i.uniforms.add(new ve("color1",r=>r.color1)),i.uniforms.add(new ve("color2",r=>r.color2)),i.include(ct),t.transparencyPassType===T.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),i.code.add(se`
    void main() {
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${t.transparencyPassType===T.ColorAlpha?se`
              fragColor = premultiplyAlpha(fragColor);
              fragAlpha = fragColor.a;`:""}
    }
  `),e}const _s=Object.freeze(Object.defineProperty({__proto__:null,build:ms},Symbol.toStringTag,{value:"Module"}));class ee extends mt{initializeProgram(e){return new _t(e.rctx,ee.shader.get().build(this.configuration),ft)}_setPipelineState(e){const s=this.configuration,i=e===T.NONE,r=e===T.FrontFace;return yt({blending:s.transparent?i?ys:vt(e):null,depthTest:{func:wt(e)},depthWrite:i?s.writeDepth?Lt:null:St(e),drawBuffers:$t(e),colorWrite:Mt,polygonOffset:i||r?s.polygonOffset?fs:null:{factor:-1,units:-25}})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}ee.shader=new ut(_s,()=>pt(()=>import("./CheckerBoard.glsl-951437b3.js"),["./CheckerBoard.glsl-951437b3.js","./index-ea8d34f0.js","./index-a86c5357.css","./interfaces-c8044671.js","./TextOverlayItem-f8f0ac25.js","./unitFormatUtils-e6e59490.js","./AnalysisView3D-9b608bd7.js","./euclideanAreaMeasurementUtils-9f9982d6.js","./geometryEngine-e8aa5010.js","./geometryEngineBase-1a57a489.js","./hydrated-820d2a77.js","./geodesicLengthMeasurementUtils-268aa2d2.js","./projectionUtils-b34ac9b4.js","./EditGeometryOperations-155877ab.js","./geometry2dUtils-a663b6df.js","./Segment-3dc96027.js","./LineVisualElement-6ef288a1.js"],import.meta.url));const fs={factor:0,units:-25},ys=gt(k.SRC_ALPHA,k.ONE,k.ONE_MINUS_SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA);class V extends Pt{constructor(){super(...arguments),this.transparencyPassType=T.NONE,this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}}l([D({count:T.COUNT})],V.prototype,"transparencyPassType",void 0),l([D()],V.prototype,"transparent",void 0),l([D()],V.prototype,"writeDepth",void 0),l([D()],V.prototype,"polygonOffset",void 0),l([D()],V.prototype,"multipassEnabled",void 0),l([D()],V.prototype,"cullAboveGround",void 0),l([D({constValue:!1})],V.prototype,"occlusionPass",void 0);class vs extends Ct{constructor(e){super(e,new Ls),this.produces=new Map([[ie.OPAQUE_MATERIAL,s=>re(s)&&!this.parameters.transparent],[ie.TRANSPARENT_MATERIAL,s=>re(s)&&this.parameters.transparent&&this.parameters.writeDepth],[ie.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,s=>re(s)&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new V}getConfiguration(e,s){return this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration}createGLMaterial(e){return new ws(e)}createBufferWriter(){return new bt(At)}}class ws extends Vt{beginSlot(e){return this.ensureTechnique(ee,e)}}let Ls=class extends xt{constructor(){super(...arguments),this.size=Ee(1,1),this.color1=J(.75,.75,.75,1),this.color2=J(.5,.5,.5,1),this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1}};class Ss extends ns{constructor(e){super(e),this._checkerBoardMaterial=null,this._renderOccluded=R.OccludeAndTransparent,this._geometry=null,this._size=Ee(1,1),this._color1=J(1,.5,0,.5),this._color2=J(1,1,1,.5),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){Gt(this._size,e),this._updateMaterial()}get color1(){return this._color1}set color1(e){we(e,this._color1)||(Le(this._color1,e),this._updateMaterial())}get color2(){return this._color2}set color2(e){we(e,this._color2)||(Le(this._color2,e),this._updateMaterial())}_updateMaterial(){this._checkerBoardMaterial!=null&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})}createExternalResources(){this._checkerBoardMaterial=new vs({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:this.isDecoration})}destroyExternalResources(){this._checkerBoardMaterial=null}forEachExternalMaterial(e){this._checkerBoardMaterial!=null&&e(this._checkerBoardMaterial)}createGeometries(e){if(this._geometry==null||this._checkerBoardMaterial==null)return;const s=$s;Dt(s,this.transform);const i=this._geometry,r=[],n=p();i.position.forEach(h=>{j(n,h,s),r.push(n[0],n[1],n[2])});const a=[];i.uv.forEach(h=>{a.push(h[0],h[1])});const o=new Rt(this._checkerBoardMaterial,[[Z.POSITION,new Se(r,i.triangleIndices,3,!0)],[Z.UV0,new Se(a,i.triangleIndices,2,!0)]]);e.addGeometry(o)}}const $s=p();let y=class extends he{get _parameters(){const{accentColor:t,textColor:e}=this.view.effectiveTheme,s=Ot(t),i=$e(t,.5),r=$e(Me(t),.5),n=Me(e,Et.Low);return{accentColor:s,transparentAccentColor:i,transparentContrastColor:r,intersectingLineColor:[1,.2,0,1],textColor:e,textBackgroundColor:Pe(n,.6),textCalloutColor:Pe(n,.5),pathLineWidth:3,perimeterLineWidth:2,projectionLineWidth:2,projectionLineStippleSize:5,labelDistance:25}}get visible(){return this.analysisViewData.visible}get _renderUnits(){const t=this.view.renderCoordsHelper.spatialReference;return Oe(t)??"meters"}get testData(){}constructor(t){super(t),this._path=null,this._intersectedPath=null,this._perimeter=null,this._intersectedPerimeter=null,this._projectionLines=null,this._measurementArea=null,this._areaLabel=null,this._perimeterLengthLabel=null,this._pathSegments=[],this._perimeterSegments=[],this._origin=p(),this._originTransform=It(),this.messages=null,this.viewData=Vs,this.areaLabel=null,this.perimeterLengthLabel=null,this.loadingMessages=!0}initialize(){const{analysisViewData:t,_parameters:e,view:s}=this;this._path=new z({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._intersectedPath=new z({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._perimeter=new z({view:s,attached:!0,width:e.perimeterLineWidth,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._intersectedPerimeter=new z({view:s,attached:!0,width:e.perimeterLineWidth,color:e.intersectingLineColor,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._projectionLines=new z({view:s,attached:!0,width:e.projectionLineWidth,stipplePattern:Tt(e.projectionLineStippleSize),polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._measurementArea=new Ss({view:s,attached:!0,isDecoration:!0});const i={attached:!0,view:s,isDecoration:!0};this._areaLabel=new Ve({...i,fontSize:Y.Large}),this._perimeterLengthLabel=new Ve({...i,fontSize:Y.Small}),this.addHandles([I(()=>[t.mode,this.visible,t.unit,t.measurementData,t.stagedPoint],()=>this._update(),oe),I(()=>s.state?.camera,()=>this._updateLabels(),oe),zt(()=>this._updateMessageBundle()),I(()=>this._parameters,({accentColor:r,transparentAccentColor:n,transparentContrastColor:a,textColor:o,textBackgroundColor:h,textCalloutColor:c})=>{const{_path:u,_intersectedPath:g,_perimeter:v,_projectionLines:f,_measurementArea:_,_areaLabel:P,_perimeterLengthLabel:w}=this;u.color=r,g.color=r,v.color=r,f.color=r,_.color1=n,_.color2=a,P.textColor=o,P.backgroundColor=h,P.calloutColor=c,w.textColor=o,w.backgroundColor=h,w.calloutColor=c},Ft)]),this._updateMessageBundle()}destroy(){this._measurementArea=C(this._measurementArea),this._path=C(this._path),this._intersectedPath=C(this._intersectedPath),this._perimeter=C(this._perimeter),this._intersectedPerimeter=C(this._intersectedPerimeter),this._areaLabel=C(this._areaLabel),this._perimeterLengthLabel=C(this._perimeterLengthLabel),this._projectionLines=C(this._projectionLines),this.set("view",null)}_update(){if(this.destroyed||!this.view.ready||!this.view.renderCoordsHelper)return;const{analysisViewData:{measurementData:t},analysisViewData:e}=this;t!=null&&(this._updateViewData(t,e.path),this._updateOrigin(),this._updatePathSegments(),this._updatePerimeterSegments(),this._updateArea(),this._updateProjectionLines(),this._updateLabels())}_updateViewData(t,e){const s=t.validMeasurement,i=t.actualMeasurementMode==="geodesic",r=i?t.geodesicArea:t.area;let n=1;if(r){const o=Ps(r,this.analysisViewData.unit);n=Bt(Math.sqrt(o.value)/Math.sqrt(300)),n*=Math.sqrt(Ce(1,o.unit,"square-meters")),n=Ce(n,"meters",this._renderUnits)}const a={validMeasurement:s,numVertices:t.numVertices,hasStagedVertex:t.hasStagedVertex,path:e,mode:t.actualMeasurementMode,positionsRender:t.positionsRender,positionsFittedWorld:t.positionsFittedWorld,positionsFittedRender:t.positionsFittedRender,intersectingSegments:i?t.geodesicIntersectingSegments:t.intersectingSegments,triangleIndices:i?t.geodesicTriangleIndices:t.triangleIndices,areaCentroid:i?t.geodesicAreaCentroidRenderCoords:t.areaCentroidRenderCoords,perimeterLengthLabelSegmentIndex:0,area:i?t.geodesicArea:t.area,pathLength:i?t.geodesicPathLength:t.pathLength,perimeterLength:t.perimeterLength,checkerSize:n};this._set("viewData",a)}_updateOrigin(){const t=this.viewData;ae(t.positionsRender,this._origin),jt(this._originTransform,this._origin),this._measurementArea.transform=this._originTransform,this._projectionLines.transform=this._originTransform}_createSegments(t){const e=this.viewData,s=this.view.renderCoordsHelper.spatialReference,i=e.mode,r=[],n=[],a=[],o=e.numVertices,h=e.validMeasurement?o:o-1;for(let u=0;u<h;++u){const g=e[t][u],v=e[t][(u+1)%o];let f=null;switch(i){case"euclidean":f=new rs(g,v);break;case"geodesic":f=new is(g,v,s)}e.intersectingSegments.has(u)?a.push(f):n.push(f),r.push(f)}let c=null;return e.validMeasurement&&e.hasStagedVertex&&h>=2?c=r[r.length-2]:e.hasStagedVertex&&h>=1&&(c=r[r.length-1]),{all:r,nonIntersecting:n,intersecting:a,stagedSegment:c}}_updatePathSegments(){const{visible:t}=this,e=this._createSegments("positionsRender");this._path.setGeometryFromSegments(e.nonIntersecting,this._origin),this._path.visible=t,this._intersectedPath.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPath.visible=t,this._pathSegments=e.all}_updatePerimeterSegments(){const t=this.visible&&this.viewData.mode==="euclidean",e=this._createSegments("positionsFittedRender");this._perimeter.setGeometryFromSegments(e.nonIntersecting,this._origin),this._perimeter.visible=t,this._intersectedPerimeter.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPerimeter.visible=t,this._perimeterSegments=e.all}_updateArea(){const t=this.viewData;switch(t.mode){case"euclidean":this._updateAreaEuclidean(t);break;case"geodesic":this._updateAreaGeodesic()}}_updateAreaEuclidean(t){const e=this.visible;t.validMeasurement&&t.intersectingSegments.size===0&&t.triangleIndices?(this._measurementArea.geometry={uv:t.positionsFittedWorld,position:t.positionsFittedRender,triangleIndices:t.triangleIndices},this._measurementArea.size=[t.checkerSize,t.checkerSize],this._measurementArea.visible=e):this._measurementArea.visible=!1}_updateAreaGeodesic(){this._measurementArea.visible=!1}_updateProjectionLines(){const t=this.viewData,e=this.visible,s=t.mode,i=t.numVertices;if(i>0&&t.validMeasurement&&s==="euclidean"){const r=[];for(let n=0;n<i;++n){const a=p();j(a,t.positionsRender[n],this._origin);const o=p();j(o,t.positionsFittedRender[n],this._origin),r.push([a,o])}this._projectionLines.geometry=r,this._projectionLines.visible=e}else this._projectionLines.geometry=null,this._projectionLines.visible=!1}_updateLabels(){if(this.destroyed)return;const{viewData:t}=this,{area:e,path:s}=t;if(!s)return;const i=this.visible,r=Ms(this.messages,e,this.analysisViewData.unit);if(r!=null?(this._areaLabel.geometry={type:"point",point:t.areaCentroid},this._areaLabel.text=r,this._areaLabel.visible=t.validMeasurement&&t.intersectingSegments.size===0&&i):this._areaLabel.visible=!1,this._set("areaLabel",r),t.validMeasurement&&t.intersectingSegments.size===0){const n=t.mode==="geodesic"||!t.validMeasurement,a=n?t.pathLength:t.perimeterLength,o=Cs(this.messages,a,this.analysisViewData.unit);this._set("perimeterLengthLabel",o),this._perimeterLengthLabel.distance=this._parameters.labelDistance,this._perimeterLengthLabel.anchor="top",this._perimeterLengthLabel.text=o,this._perimeterLengthLabel.visible=!0;let h=!0;for(let c=0;c<t.numVertices;++c){const u=(t.perimeterLengthLabelSegmentIndex+c)%t.numVertices,g=n?this._pathSegments[u]:this._perimeterSegments[u];if(h=!0,this._perimeterLengthLabel.geometry={type:"segment",segment:g,sampleLocation:"center"},!this._perimeterLengthLabel.overlaps(this._areaLabel))break;h=!1}this._perimeterLengthLabel.visible=h&&i}else this._perimeterLengthLabel.visible=!1}_updateMessageBundle(){this.loadingMessages=!0,Wt("esri/core/t9n/Units").then(t=>{this.messages=t,this.view&&this._update()}).finally(()=>{this.loadingMessages=!1})}};function Ms(t,e,s){return t&&e&&Ie(t,e,Te(e,s))}function Ps(t,e){return ne(t,Te(t,e))}function Te(t,e){switch(e){case"metric":return qt(t.value,t.unit);case"imperial":return Ut(t.value,t.unit);default:return e}}function Cs(t,e,s){return t&&e&&Ie(t,e,bs(e,s))}function bs(t,e){const s=As(e);switch(s){case"metric":return Ht(t.value,t.unit);case"imperial":return kt(t.value,t.unit);default:return s}}function As(t){switch(t){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";case"square-meters":return"meters";case"square-kilometers":return"kilometers"}throw new Error("unhandled area unit")}var Y;l([d()],y.prototype,"_parameters",null),l([d()],y.prototype,"view",void 0),l([d()],y.prototype,"messages",void 0),l([d()],y.prototype,"analysis",void 0),l([d()],y.prototype,"viewData",void 0),l([d()],y.prototype,"analysisViewData",void 0),l([d({readOnly:!0})],y.prototype,"areaLabel",void 0),l([d({readOnly:!0})],y.prototype,"perimeterLengthLabel",void 0),l([d()],y.prototype,"loadingMessages",void 0),l([d()],y.prototype,"visible",null),l([d()],y.prototype,"_renderUnits",null),y=l([X("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")],y),function(t){t[t.Small=12]="Small",t[t.Large=16]="Large"}(Y||(Y={}));const Vs={validMeasurement:!1,numVertices:0,hasStagedVertex:!1,path:null,mode:null,positionsRender:null,positionsFittedWorld:null,positionsFittedRender:null,intersectingSegments:null,triangleIndices:null,areaCentroid:null,perimeterLengthLabelSegmentIndex:null,checkerSize:null,area:null,pathLength:null,perimeterLength:null};let m=class extends Qt(he){constructor(t){super(t),this.type="area-measurement-view-3d",this.analysis=null,this.measurementData=null,this.lastDraggedVertex=null,this.stagedPoint=null,this.mode=le.Auto}initialize(){const{analysis:t,view:e}=this;this.path=new M({view:e,areaMeasurement:t}),this.analysisVisualization=new y({view:e,analysis:t,analysisViewData:this}),this.analysisController=new E({view:e,analysis:t,analysisViewData:this})}destroy(){this.analysisController=C(this.analysisController),this.analysisVisualization=C(this.analysisVisualization),this.path.destroy()}get updating(){return!!this.analysisVisualization?.loadingMessages}get result(){const{measurementData:t}=this;return t==null?{area:null,mode:null,perimeter:null}:t.actualMeasurementMode==="euclidean"?{area:t.area,perimeter:t.perimeterLength,mode:"euclidean"}:{area:t.geodesicArea,perimeter:t.pathLength,mode:"geodesic"}}get viewData(){return this.analysisVisualization.viewData}get validMeasurement(){return this.path.isValidPolygon}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){}};l([d({readOnly:!0})],m.prototype,"type",void 0),l([d({constructOnly:!0,nonNullable:!0})],m.prototype,"analysis",void 0),l([d()],m.prototype,"updating",null),l([d()],m.prototype,"analysisVisualization",void 0),l([d()],m.prototype,"analysisController",void 0),l([d()],m.prototype,"result",null),l([d()],m.prototype,"measurementData",void 0),l([d()],m.prototype,"viewData",null),l([d()],m.prototype,"validMeasurement",null),l([d()],m.prototype,"path",void 0),l([d()],m.prototype,"lastDraggedVertex",void 0),l([d()],m.prototype,"stagedPoint",void 0),l([d()],m.prototype,"mode",void 0),l([d()],m.prototype,"unit",null),l([d(Nt)],m.prototype,"_defaultUnit",void 0),m=l([X("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],m);const xs=m,ks=Object.freeze(Object.defineProperty({__proto__:null,default:xs},Symbol.toStringTag,{value:"Module"}));export{ks as A,ms as n};