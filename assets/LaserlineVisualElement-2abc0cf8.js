import{qq as be,qr as ve,lb as d,qs as P,la as I,l7 as r,l4 as te,qt as B,n4 as we,qu as y,j5 as ie,f7 as p,e1 as ne,cY as De,lg as se,aA as ae,ll as re,lm as le,ln as oe,lh as ce,li as R,lu as he,pk as xe,cM as c,ik as Ve,ef as z,mW as Ee,qv as Le,qw as ye,qx as Ce,qy as Se,dz as de,aj as g,lj as x,qz as Ae,eK as Me,fr as N,qA as Re,pi as S,ee as $,eG as F,fj as pe,dA as m,eH as b,qB as ue,iI as $e,f9 as qe,ed as Te,eQ as fe,eM as Oe,pn as Ie,jQ as ze,qC as je,qD as We,cP as G,eV as W,ak as A,am as Ne,eU as He,qE as Ue,lB as k,qF as Be,qG as q,qH as Fe,av as X,nN as Ge,mp as ke,f3 as Xe,qI as Qe,f4 as Je,f5 as Ke,f6 as Ye,qJ as Ze,cR as Q}from"./index-2e5346e2.js";import{t as et}from"./LineVisualElement-09a1c941.js";function ge(e,t){const n=e.fragment;n.include(be),e.include(ve),n.uniforms.add(new d("globalAlpha",i=>i.globalAlpha),new P("glowColor",i=>i.glowColor),new d("glowWidth",(i,s)=>i.glowWidth*s.camera.pixelRatio),new d("glowFalloff",i=>i.glowFalloff),new P("innerColor",i=>i.innerColor),new d("innerWidth",(i,s)=>i.innerWidth*s.camera.pixelRatio),new I("depthMap",(i,s)=>s.depth?.attachment),new I("normalMap",i=>i.normals),new I("frameColor",(i,s)=>s.mainColor)),n.code.add(r`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),n.code.add(r`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),n.code.add(r`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),n.code.add(r`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),t.contrastControlEnabled?(n.uniforms.add(new d("globalAlphaContrastBoost",i=>i.globalAlphaContrastBoost!=null?i.globalAlphaContrastBoost:1)),n.code.add(r`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):n.code.add(r`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}function tt(e){const t=new te;t.include(ge,e);const{vertex:n,fragment:i}=t;return n.uniforms.add(new B("modelView",(s,{camera:a})=>we(nt,a.viewMatrix,s.origin)),new B("proj",(s,{camera:a})=>a.projectionMatrix),new d("glowWidth",(s,{camera:a})=>s.glowWidth*a.pixelRatio),new y("pixelToNDC",(s,{camera:a})=>ie(it,2/a.fullViewport[2],2/a.fullViewport[3]))),t.attributes.add(p.START,"vec3"),t.attributes.add(p.END,"vec3"),t.attributes.add(p.UP,"vec3"),t.attributes.add(p.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),n.code.add(r`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),i.uniforms.add(new d("perScreenPixelRatio",(s,a)=>a.camera.perScreenPixelRatio)),i.code.add(r`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewPlane.xyz))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),t}const it=ne(),nt=De(),st=Object.freeze(Object.defineProperty({__proto__:null,build:tt},Symbol.toStringTag,{value:"Module"}));class T extends re{initializeProgram(t){return new le(t.rctx,T.shader.get().build(this.configuration),_e)}initializePipeline(){return oe({blending:ce(R.ONE,R.ONE_MINUS_SRC_ALPHA),colorWrite:he})}}T.shader=new se(st,()=>ae(()=>import("./LaserlinePath.glsl-ac35c247.js"),["./LaserlinePath.glsl-ac35c247.js","./index-2e5346e2.js","./index-74ab7f40.css","./LineVisualElement-09a1c941.js"],import.meta.url));const _e=new Map([[p.START,0],[p.END,1],[p.UP,2],[p.EXTRUDE,3]]);class J{constructor(t){this._renderCoordsHelper=t,this._buffers=null,this._origin=c(),this._dirty=!1,this._count=0,this._vao=null}set vertices(t){const n=Ve(3*t.length);let i=0;for(const s of t)n[i++]=s[0],n[i++]=s[1],n[i++]=s[2];this.buffers=[n]}set buffers(t){if(this._buffers=t,this._buffers.length>0){const n=this._buffers[0],i=3*Math.floor(n.length/3/2);z(this._origin,n[i],n[i+1],n[i+2])}else z(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(t){const n=this._ensureVAO(t);n!=null&&(t.bindVAO(n),t.drawArrays(Ee.TRIANGLES,0,this._count))}dispose(){this._vao!=null&&this._vao.dispose()}_ensureVAO(t){return this._buffers==null?null:(this._vao==null&&(this._vao=this._createVAO(t,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(t,n){const i=this._createDataBuffer(n);return this._dirty=!1,new Le(t,_e,{data:ye(Z)},{data:Ce.createVertex(t,Se.STATIC_DRAW,i)})}_ensureVertexData(t,n){if(!this._dirty)return;const i=this._createDataBuffer(n);t.vertexBuffers.data?.setData(i),this._dirty=!1}_createDataBuffer(t){const n=t.reduce((_,u)=>_+K(u),0);this._count=n;const i=Z.createBuffer(n),s=this._origin;let a=0,l=0;for(const _ of t){for(let u=0;u<_.length;u+=3){const C=z(Y,_[u],_[u+1],_[u+2]);u===0?l=this._renderCoordsHelper.getAltitude(C):this._renderCoordsHelper.setAltitude(C,l);const D=this._renderCoordsHelper.worldUpAtPosition(C,at),o=a+2*u,U=de(Y,C,s);if(u<_.length-3){i.up.setVec(o,D),i.up.setVec(o+3,D),i.up.setVec(o+5,D);for(let v=0;v<6;v++)i.start.setVec(o+v,U);i.extrude.setValues(o,0,-1),i.extrude.setValues(o+1,1,-1),i.extrude.setValues(o+2,1,1),i.extrude.setValues(o+3,0,-1),i.extrude.setValues(o+4,1,1),i.extrude.setValues(o+5,0,1)}if(u>0){i.up.setVec(o-2,D),i.up.setVec(o-4,D),i.up.setVec(o-5,D);for(let v=-6;v<0;v++)i.end.setVec(o+v,U)}}a+=K(_)}return i.buffer}}function K(e){return 3*(2*(e.length/3-1))}const at=c(),Y=c(),Z=xe().vec3f(p.START).vec3f(p.END).vec3f(p.UP).vec2f(p.EXTRUDE);class H extends Ae{constructor(){super(...arguments),this.contrastControlEnabled=!1}}g([x()],H.prototype,"contrastControlEnabled",void 0);const Pe=N(6);function rt(e){const t=new te;t.include(Re),t.include(ge,e);const n=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(n.uniforms.add(new d("maxPixelDistance",(i,s)=>e.heightManifoldEnabled?2*s.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*s.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin))),n.code.add(r`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const i=(a,l,_)=>m(a,l.heightManifoldTarget,_.camera.viewMatrix),s=(a,l)=>m(a,[0,0,0],l.camera.viewMatrix);n.uniforms.add(new S("heightManifoldOrigin",(a,l)=>(i(f,a,l),s(V,l),de(V,V,f),$(h,V),h[3]=F(V),h)),new P("globalOrigin",(a,l)=>s(f,l)),new d("cosSphericalAngleThreshold",(a,l)=>1-Math.max(2,pe(l.camera.eye,a.heightManifoldTarget)*l.camera.perRenderPixelRatio)/F(a.heightManifoldTarget))),n.code.add(r`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else n.code.add(r`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(n.uniforms.add(new d("maxPixelDistance",(i,s)=>2*s.camera.computeScreenPixelSizeAt(i.pointDistanceTarget))),n.code.add(r`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new d("perScreenPixelRatio",(i,s)=>s.camera.perScreenPixelRatio)),n.code.add(r`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&n.code.add(r`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.code.add(r`void main() {
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){n.uniforms.add(new y("angleCutoff",s=>M(s)),new S("heightPlane",(s,a)=>me(s.heightManifoldTarget,s.renderCoordsHelper.worldUpAtPosition(s.heightManifoldTarget,f),a.camera.viewMatrix)));const i=e.spherical?r`normalize(globalOrigin - pos)`:r`heightPlane.xyz`;n.code.add(r`
    {
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;

      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${i})));

      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(n.uniforms.add(new y("angleCutoff",i=>M(i)),new S("pointDistanceSphere",(i,s)=>lt(i,s))),n.code.add(r`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new y("angleCutoff",i=>M(i)),new S("lineVerticalPlane",(i,s)=>ot(i,s)),new P("lineVerticalStart",(i,s)=>ct(i,s)),new P("lineVerticalEnd",(i,s)=>ht(i,s))),n.code.add(r`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new y("angleCutoff",i=>M(i)),new P("intersectsLineStart",(i,s)=>m(f,i.lineStartWorld,s.camera.viewMatrix)),new P("intersectsLineEnd",(i,s)=>m(f,i.lineEndWorld,s.camera.viewMatrix)),new P("intersectsLineDirection",(i,s)=>(b(h,i.intersectsLineSegment.vector),h[3]=0,$(f,ue(h,h,s.camera.viewMatrix)))),new d("intersectsLineRadius",i=>i.intersectsLineRadius)),n.code.add(r`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),n.code.add(r`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),t}function M(e){return ie(dt,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-N(2))))}function lt(e,t){return m($e(j),e.pointDistanceOrigin,t.camera.viewMatrix),j[3]=pe(e.pointDistanceOrigin,e.pointDistanceTarget),j}function ot(e,t){const n=qe(e.lineVerticalPlaneSegment,.5,f),i=e.renderCoordsHelper.worldUpAtPosition(n,pt),s=$(V,e.lineVerticalPlaneSegment.vector),a=Te(f,i,s);return $(a,a),me(e.lineVerticalPlaneSegment.origin,a,t.camera.viewMatrix)}function ct(e,t){const n=b(f,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(n,0),m(n,n,t.camera.viewMatrix)}function ht(e,t){const n=fe(f,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(n,0),m(n,n,t.camera.viewMatrix)}function me(e,t,n){return m(ee,e,n),b(h,t),h[3]=0,ue(h,h,n),Oe(ee,h,ut)}const dt=ne(),f=c(),h=Ie(),pt=c(),V=c(),ee=c(),ut=Me(),j=ze(),ft=Object.freeze(Object.defineProperty({__proto__:null,build:rt,defaultAngleCutoff:Pe},Symbol.toStringTag,{value:"Module"}));class gt extends We{constructor(){super(...arguments),this.innerColor=G(1,1,1),this.innerWidth=1,this.glowColor=G(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=N(6),this.pointDistanceOrigin=c(),this.pointDistanceTarget=c(),this.lineVerticalPlaneSegment=W(),this.intersectsLineSegment=W(),this.intersectsLineRadius=3,this.heightManifoldTarget=c(),this.lineStartWorld=c(),this.lineEndWorld=c()}}class O extends re{initializeProgram(t){return new le(t.rctx,O.shader.get().build(this.configuration),je)}initializePipeline(){return oe({blending:ce(R.ONE,R.ONE_MINUS_SRC_ALPHA),colorWrite:he})}}O.shader=new se(ft,()=>ae(()=>import("./Laserlines.glsl-c2c3e4d0.js"),["./Laserlines.glsl-c2c3e4d0.js","./index-2e5346e2.js","./index-74ab7f40.css","./LineVisualElement-09a1c941.js"],import.meta.url));class E extends H{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}g([x()],E.prototype,"heightManifoldEnabled",void 0),g([x()],E.prototype,"pointDistanceEnabled",void 0),g([x()],E.prototype,"lineVerticalPlaneEnabled",void 0),g([x()],E.prototype,"intersectsLineEnabled",void 0),g([x()],E.prototype,"spherical",void 0);let w=class extends Ue{constructor(e){super(e),this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this._passParameters=new gt,this.produces=new Map([[k.LASERLINES,()=>!this.contrastControlEnabled],[k.LASERLINES_CONTRAST_CONTROL,()=>this.contrastControlEnabled]])}initialize(){this._passParameters.renderCoordsHelper=this.renderCoordsHelper}consumes(){return Be}get isDecoration(){return this._isDecoration}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){b(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){b(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){b(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){q(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){q(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,this._pathVerticalPlaneData!=null&&this._requestRender())}set pathVerticalPlaneVertices(e){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new J(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new J(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){Fe(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e,this._techniques=e.techniques,this._techniqueConfig=new E;const t=new H;t.contrastControlEnabled=this.contrastControlEnabled,this._pathTechnique=this._techniques.acquire(T,t)}uninitializeRenderContext(){this._technique=X(this._technique),this._pathVerticalPlaneData=Ge(this._pathVerticalPlaneData),this._pathTechnique=X(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this.contrastControlEnabled,this._techniqueConfig.spherical=this.viewingMode===ke.Global,this._technique=this._techniques.releaseAndAcquire(O,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}renderNode(e,t,n){const i=n?.get("normals")?.getTexture();i&&(this._passParameters.normals=i,(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e))}_renderUnified(e,t){const n=e.rctx;this._updatePassParameters(e),n.bindTechnique(t,e.bindParameters,this._passParameters),n.screen.draw()}_renderPath(e){if(this._pathVerticalPlaneData==null||this._pathTechnique==null)return;const t=e.rctx,n=this._pathTechnique;t.bindTechnique(n,e.bindParameters,{...this._passParameters,origin:this._pathVerticalPlaneData.origin}),this._pathVerticalPlaneData.draw(e.rctx)}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if(Xe(Qe(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),L),L.c0=-Number.MAX_VALUE,!Je(t.frustum,L))return;Ke(L,this._passParameters.lineStartWorld),Ye(L,this._passParameters.lineEndWorld)}else b(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),fe(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}get test(){}};g([A({constructOnly:!0})],w.prototype,"viewingMode",void 0),g([A({constructOnly:!0})],w.prototype,"contrastControlEnabled",void 0),g([A({constructOnly:!0})],w.prototype,"_isDecoration",void 0),g([A({constructOnly:!0})],w.prototype,"renderCoordsHelper",void 0),w=g([Ne("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],w);const L=He();class bt extends et{constructor(t){super(t),this._angleCutoff=Pe,this._style={},this._heightManifoldTarget=c(),this._heightManifoldEnabled=!1,this._intersectsLine=W(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(t)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(t){this._angleCutoff!==t&&(this._angleCutoff=t,this._syncAngleCutoff())}get style(){return this._style}set style(t){this._style=t,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(t){t!=null?(b(this._heightManifoldTarget,t),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(t){if(t==null)return void(this.intersectsLine=null);const n=this.view.renderCoordsHelper.worldUpAtPosition(t,_t);this.intersectsLine=Ze(t,n),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(t){t!=null?(q(t,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){this._intersectsLineInfinite=t,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){this._lineVerticalPlaneSegment=t!=null?q(t):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(t){this._pathVerticalPlaneBuffers=t,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(t){this._pointDistanceLine=t!=null?{origin:Q(t.origin),target:t.target?Q(t.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||this._pointDistanceLine!=null||this._pathVerticalPlaneBuffers!=null)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){this._renderer==null&&(this._renderer=new w({renderCoordsHelper:this.view.renderCoordsHelper,contrastControlEnabled:!0,_isDecoration:this.isDecoration,viewingMode:this.view.state.viewingMode}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer))}_syncStyle(){this._renderer!=null&&(this._renderer.setParameters(this._style),this._style.intersectsLineRadius!=null&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){this._renderer!=null&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){this._renderer!=null&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){this._renderer!=null&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){this._renderer!=null&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){this._renderer!=null&&(this._renderer.pathVerticalPlaneEnabled=this._pathVerticalPlaneBuffers!=null&&this.visible,this._pathVerticalPlaneBuffers!=null&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){this._renderer!=null&&(this._renderer.lineVerticalPlaneEnabled=this._lineVerticalPlaneSegment!=null&&this.visible,this._lineVerticalPlaneSegment!=null&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(this._renderer==null)return;const t=this._pointDistanceLine,n=t!=null;this._renderer.pointDistanceEnabled=n&&t.target!=null&&this.visible,n&&(this._renderer.pointDistanceOrigin=t.origin,t.target!=null&&(this._renderer.pointDistanceTarget=t.target))}_disposeRenderer(){this._renderer!=null&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const _t=c();export{Pe as A,bt as c,rt as j,tt as v};
