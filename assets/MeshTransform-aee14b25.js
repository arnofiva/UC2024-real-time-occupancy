import{aj as a,ak as s,cl as c,cM as p,cN as h,cO as u,cP as x,cQ as y,cR as r,cS as i,cT as A,cU as g,cV as N,cW as m,cX as M,cY as e,cZ as $,am as b,c_ as v}from"./index-ab96db07.js";var n;let o=n=class extends c{constructor(t){super(t),this.translation=p(),this.rotationAxis=h(u),this.rotationAngle=0,this.scale=x(1,1,1)}get rotation(){return y(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=r(i(t)),this.rotationAngle=A(t)}get localMatrix(){const t=e();return g(l,i(this.rotation),N(this.rotation)),m(t,l,this.translation,this.scale),t}get localMatrixInverse(){return M(e(),this.localMatrix)}equals(t){return this===t||t!=null&&$(this.localMatrix,t.localMatrix)}clone(){const t={translation:r(this.translation),rotationAxis:r(this.rotationAxis),rotationAngle:this.rotationAngle,scale:r(this.scale)};return new n(t)}};a([s({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"translation",void 0),a([s({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAxis",void 0),a([s({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAngle",void 0),a([s({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"scale",void 0),a([s()],o.prototype,"rotation",null),a([s()],o.prototype,"localMatrix",null),a([s()],o.prototype,"localMatrixInverse",null),o=n=a([b("esri.geometry.support.MeshTransform")],o);const l=v(),j=o;export{j as N};
