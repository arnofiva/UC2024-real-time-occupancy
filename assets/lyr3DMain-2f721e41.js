import{bs as Ue}from"./index-ab96db07.js";var qr,hr,Jr,Xr={exports:{}};qr=Xr,hr=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,Jr=function(mr={}){var pr,J,i=mr;i.ready=new Promise((r,t)=>{pr=r,J=t});var vr=Object.assign({},i),gr="./this.program",Zr=!0,$="";function Kr(r){return i.locateFile?i.locateFile(r,$):$+r}typeof document<"u"&&document.currentScript&&($=document.currentScript.src),hr&&($=hr),$=$.indexOf("blob:")!==0?$.substr(0,$.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i.print||console.log.bind(console);var V,X,z=i.printErr||console.error.bind(console);Object.assign(i,vr),vr=null,i.arguments&&i.arguments,i.thisProgram&&(gr=i.thisProgram),i.quit&&i.quit,i.wasmBinary&&(V=i.wasmBinary),typeof WebAssembly!="object"&&K("no native wasm support detected");var x,T,B,Z,y,v,yr,wr,_r=!1;function Qr(r,t){r||K(t)}function br(){var r=X.buffer;i.HEAP8=x=new Int8Array(r),i.HEAP16=B=new Int16Array(r),i.HEAPU8=T=new Uint8Array(r),i.HEAPU16=Z=new Uint16Array(r),i.HEAP32=y=new Int32Array(r),i.HEAPU32=v=new Uint32Array(r),i.HEAPF32=yr=new Float32Array(r),i.HEAPF64=wr=new Float64Array(r)}var Ar=[],Tr=[],Cr=[];function rt(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)nt(i.preRun.shift());ur(Ar)}function tt(){ur(Tr)}function et(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)ot(i.postRun.shift());ur(Cr)}function nt(r){Ar.unshift(r)}function at(r){Tr.unshift(r)}function ot(r){Cr.unshift(r)}var k=0,L=null;function it(r){k++,i.monitorRunDependencies&&i.monitorRunDependencies(k)}function ut(r){if(k--,i.monitorRunDependencies&&i.monitorRunDependencies(k),k==0&&L){var t=L;L=null,t()}}function K(r){i.onAbort&&i.onAbort(r),z(r="Aborted("+r+")"),_r=!0,r+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(r);throw J(t),t}var N,st="data:application/octet-stream;base64,",Fr=r=>r.startsWith(st);function Wr(r){if(r==N&&V)return new Uint8Array(V);throw"both async and sync fetching of the wasm failed"}function lt(r){return!V&&Zr&&typeof fetch=="function"?fetch(r,{credentials:"same-origin"}).then(t=>{if(!t.ok)throw"failed to load wasm binary file at '"+r+"'";return t.arrayBuffer()}).catch(()=>Wr(r)):Promise.resolve().then(()=>Wr(r))}function Er(r,t,e){return lt(r).then(n=>WebAssembly.instantiate(n,t)).then(n=>n).then(e,n=>{z(`failed to asynchronously prepare wasm: ${n}`),K(n)})}function ct(r,t,e,n){return r||typeof WebAssembly.instantiateStreaming!="function"||Fr(t)||typeof fetch!="function"?Er(t,e,n):fetch(t,{credentials:"same-origin"}).then(a=>WebAssembly.instantiateStreaming(a,e).then(n,function(o){return z(`wasm streaming compile failed: ${o}`),z("falling back to ArrayBuffer instantiation"),Er(t,e,n)}))}function ft(){var r={a:Ie};function t(n,a){return w=n.exports,X=w.E,br(),H=w.G,at(w.F),ut(),w}function e(n){t(n.instance)}if(it(),i.instantiateWasm)try{return i.instantiateWasm(r,t)}catch(n){z(`Module.instantiateWasm callback failed with error: ${n}`),J(n)}return ct(V,N,r,e).catch(J),{}}Fr(N="lyr3DMain.wasm")||(N=Kr(N));var ur=r=>{for(;r.length>0;)r.shift()(i)};function dt(r){this.excPtr=r,this.ptr=r-24,this.set_type=function(t){v[this.ptr+4>>2]=t},this.get_type=function(){return v[this.ptr+4>>2]},this.set_destructor=function(t){v[this.ptr+8>>2]=t},this.get_destructor=function(){return v[this.ptr+8>>2]},this.set_caught=function(t){t=t?1:0,x[this.ptr+12|0]=t},this.get_caught=function(){return x[this.ptr+12|0]!=0},this.set_rethrown=function(t){t=t?1:0,x[this.ptr+13|0]=t},this.get_rethrown=function(){return x[this.ptr+13|0]!=0},this.init=function(t,e){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(e)},this.set_adjusted_ptr=function(t){v[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return v[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Nr(this.get_type()))return v[this.excPtr>>2];var t=this.get_adjusted_ptr();return t!==0?t:this.excPtr}}i.noExitRuntime;var ht=(r,t,e)=>{throw new dt(r).init(t,e),r},Q={},sr=r=>{for(;r.length;){var t=r.pop();r.pop()(t)}};function rr(r){return this.fromWireType(y[r>>2])}var Pr,Sr,xr,U={},I={},tr={},Or=r=>{throw new Pr(r)},lr=(r,t,e)=>{function n(s){var c=e(s);c.length!==r.length&&Or("Mismatched type converter count");for(var f=0;f<r.length;++f)O(r[f],c[f])}r.forEach(function(s){tr[s]=t});var a=new Array(t.length),o=[],l=0;t.forEach((s,c)=>{I.hasOwnProperty(s)?a[c]=I[s]:(o.push(s),U.hasOwnProperty(s)||(U[s]=[]),U[s].push(()=>{a[c]=I[s],++l===o.length&&n(a)}))}),o.length===0&&n(a)},mt=r=>{var t=Q[r];delete Q[r];var e=t.elements,n=e.length,a=e.map(s=>s.getterReturnType).concat(e.map(s=>s.setterArgumentType)),o=t.rawConstructor,l=t.rawDestructor;lr([r],a,function(s){return e.forEach((c,f)=>{var h=s[f],m=c.getter,p=c.getterContext,g=s[f+n],b=c.setter,E=c.setterContext;c.read=A=>h.fromWireType(m(p,A)),c.write=(A,S)=>{var u=[];b(E,A,g.toWireType(u,S)),sr(u)}}),[{name:t.name,fromWireType:c=>{for(var f=new Array(n),h=0;h<n;++h)f[h]=e[h].read(c);return l(c),f},toWireType:(c,f)=>{if(n!==f.length)throw new TypeError(`Incorrect number of tuple elements for ${t.name}: expected=${n}, actual=${f.length}`);for(var h=o(),m=0;m<n;++m)e[m].write(h,f[m]);return c!==null&&c.push(l,h),h},argPackAdvance:j,readValueFromPointer:rr,destructorFunction:l}]})},er={},pt=r=>{var t=er[r];delete er[r];var e=t.rawConstructor,n=t.rawDestructor,a=t.fields,o=a.map(l=>l.getterReturnType).concat(a.map(l=>l.setterArgumentType));lr([r],o,l=>{var s={};return a.forEach((c,f)=>{var h=c.fieldName,m=l[f],p=c.getter,g=c.getterContext,b=l[f+a.length],E=c.setter,A=c.setterContext;s[h]={read:S=>m.fromWireType(p(g,S)),write:(S,u)=>{var d=[];E(A,S,b.toWireType(d,u)),sr(d)}}}),[{name:t.name,fromWireType:c=>{var f={};for(var h in s)f[h]=s[h].read(c);return n(c),f},toWireType:(c,f)=>{for(var h in s)if(!(h in f))throw new TypeError(`Missing field: "${h}"`);var m=e();for(h in s)s[h].write(m,f[h]);return c!==null&&c.push(n,m),m},argPackAdvance:j,readValueFromPointer:rr,destructorFunction:n}]})},vt=(r,t,e,n,a)=>{},gt=()=>{for(var r=new Array(256),t=0;t<256;++t)r[t]=String.fromCharCode(t);Sr=r},_=r=>{for(var t="",e=r;T[e];)t+=Sr[T[e++]];return t},W=r=>{throw new xr(r)};function yt(r,t,e={}){var n=t.name;if(r||W(`type "${n}" must have a positive integer typeid pointer`),I.hasOwnProperty(r)){if(e.ignoreDuplicateRegistrations)return;W(`Cannot register type '${n}' twice`)}if(I[r]=t,delete tr[r],U.hasOwnProperty(r)){var a=U[r];delete U[r],a.forEach(o=>o())}}function O(r,t,e={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");return yt(r,t,e)}var j=8,wt=(r,t,e,n)=>{O(r,{name:t=_(t),fromWireType:function(a){return!!a},toWireType:function(a,o){return o?e:n},argPackAdvance:j,readValueFromPointer:function(a){return this.fromWireType(T[a])},destructorFunction:null})};function _t(){Object.assign(jr.prototype,{get(r){return this.allocated[r]},has(r){return this.allocated[r]!==void 0},allocate(r){var t=this.freelist.pop()||this.allocated.length;return this.allocated[t]=r,t},free(r){this.allocated[r]=void 0,this.freelist.push(r)}})}function jr(){this.allocated=[void 0],this.freelist=[]}var P=new jr,Dr=r=>{r>=P.reserved&&--P.get(r).refcount==0&&P.free(r)},bt=()=>{for(var r=0,t=P.reserved;t<P.allocated.length;++t)P.allocated[t]!==void 0&&++r;return r},At=()=>{P.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),P.reserved=P.allocated.length,i.count_emval_handles=bt},D={toValue:r=>(r||W("Cannot use deleted val. handle = "+r),P.get(r).value),toHandle:r=>{switch(r){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return P.allocate({refcount:1,value:r})}}},Tt=(r,t)=>{O(r,{name:t=_(t),fromWireType:e=>{var n=D.toValue(e);return Dr(e),n},toWireType:(e,n)=>D.toHandle(n),argPackAdvance:j,readValueFromPointer:rr,destructorFunction:null})},Ct=(r,t)=>{switch(t){case 4:return function(e){return this.fromWireType(yr[e>>2])};case 8:return function(e){return this.fromWireType(wr[e>>3])};default:throw new TypeError(`invalid float width (${t}): ${r}`)}},Ft=(r,t,e)=>{O(r,{name:t=_(t),fromWireType:n=>n,toWireType:(n,a)=>a,argPackAdvance:j,readValueFromPointer:Ct(t,e),destructorFunction:null})},Wt=48,Et=57,Pt=r=>{if(r===void 0)return"_unknown";var t=(r=r.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=Wt&&t<=Et?`_${r}`:r};function St(r,t,e,n,a,o){var l=t.length;l<2&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=t[1]!==null&&e!==null,c=!1,f=1;f<t.length;++f)if(t[f]!==null&&t[f].destructorFunction===void 0){c=!0;break}var h=t[0].name!=="void",m=l-2,p=new Array(m),g=[],b=[];return function(){var E;arguments.length!==m&&W(`function ${r} called with ${arguments.length} arguments, expected ${m}`),b.length=0,g.length=s?2:1,g[0]=a,s&&(E=t[1].toWireType(b,this),g[1]=E);for(var A=0;A<m;++A)p[A]=t[A+2].toWireType(b,arguments[A]),g.push(p[A]);function S(u){if(c)sr(b);else for(var d=s?1:2;d<t.length;d++){var C=d===1?E:p[d-2];t[d].destructorFunction!==null&&t[d].destructorFunction(C)}if(h)return t[0].fromWireType(u)}return S(n.apply(null,g))}}var H,xt=(r,t,e)=>{if(r[t].overloadTable===void 0){var n=r[t];r[t]=function(){return r[t].overloadTable.hasOwnProperty(arguments.length)||W(`Function '${e}' called with an invalid number of arguments (${arguments.length}) - expects one of (${r[t].overloadTable})!`),r[t].overloadTable[arguments.length].apply(this,arguments)},r[t].overloadTable=[],r[t].overloadTable[n.argCount]=n}},Ot=(r,t,e)=>{i.hasOwnProperty(r)?((e===void 0||i[r].overloadTable!==void 0&&i[r].overloadTable[e]!==void 0)&&W(`Cannot register public name '${r}' twice`),xt(i,r,r),i.hasOwnProperty(e)&&W(`Cannot register multiple overloads of a function with the same number of arguments (${e})!`),i[r].overloadTable[e]=t):(i[r]=t,e!==void 0&&(i[r].numArguments=e))},jt=(r,t)=>{for(var e=[],n=0;n<r;n++)e.push(v[t+4*n>>2]);return e},Dt=(r,t,e)=>{i.hasOwnProperty(r)||Or("Replacing nonexistant public symbol"),i[r].overloadTable!==void 0&&e!==void 0?i[r].overloadTable[e]=t:(i[r]=t,i[r].argCount=e)},Mt=(r,t,e)=>{var n=i["dynCall_"+r];return e&&e.length?n.apply(null,[t].concat(e)):n.call(null,t)},G=[],cr=r=>{var t=G[r];return t||(r>=G.length&&(G.length=r+1),G[r]=t=H.get(r)),t},Rt=(r,t,e)=>r.includes("j")?Mt(r,t,e):cr(t).apply(null,e),$t=(r,t)=>{var e=[];return function(){return e.length=0,Object.assign(e,arguments),Rt(r,t,e)}},M=(r,t)=>{function e(){return r.includes("j")?$t(r,t):cr(t)}r=_(r);var n=e();return typeof n!="function"&&W(`unknown function pointer with signature ${r}: ${t}`),n};function kt(r,t){return r=Pt(r),{[r]:function(){return t.apply(this,arguments)}}[r]}var Mr,It=(r,t)=>{var e=kt(t,function(n){this.name=t,this.message=n;var a=new Error(n).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},e},Rr=r=>{var t=Lr(r),e=_(t);return R(t),e},Ht=(r,t)=>{var e=[],n={};function a(o){n[o]||I[o]||(tr[o]?tr[o].forEach(a):(e.push(o),n[o]=!0))}throw t.forEach(a),new Mr(`${r}: `+e.map(Rr).join([", "]))},Ut=r=>{const t=(r=r.trim()).indexOf("(");return t!==-1?(Qr(r[r.length-1]==")","Parentheses for argument names should match."),r.substr(0,t)):r},Yt=(r,t,e,n,a,o,l)=>{var s=jt(t,e);r=_(r),r=Ut(r),a=M(n,a),Ot(r,function(){Ht(`Cannot call ${r} due to unbound types`,s)},t-1),lr([],s,function(c){var f=[c[0],null].concat(c.slice(1));return Dt(r,St(r,f,null,a,o),t-1),[]})},Vt=(r,t,e)=>{switch(t){case 1:return e?n=>x[0|n]:n=>T[0|n];case 2:return e?n=>B[n>>1]:n=>Z[n>>1];case 4:return e?n=>y[n>>2]:n=>v[n>>2];default:throw new TypeError(`invalid integer width (${t}): ${r}`)}},zt=(r,t,e,n,a)=>{t=_(t);var o=f=>f;if(n===0){var l=32-8*e;o=f=>f<<l>>>l}var s=t.includes("unsigned"),c=(f,h)=>{};O(r,{name:t,fromWireType:o,toWireType:s?function(f,h){return c(h,this.name),h>>>0}:function(f,h){return c(h,this.name),h},argPackAdvance:j,readValueFromPointer:Vt(t,e,n!==0),destructorFunction:null})},Bt=(r,t,e)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function a(o){var l=v[o>>2],s=v[o+4>>2];return new n(x.buffer,s,l)}O(r,{name:e=_(e),fromWireType:a,argPackAdvance:j,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})};function Lt(r){return this.fromWireType(v[r>>2])}var $r=(r,t,e,n)=>{if(!(n>0))return 0;for(var a=e,o=e+n-1,l=0;l<r.length;++l){var s=r.charCodeAt(l);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&r.charCodeAt(++l)),s<=127){if(e>=o)break;t[e++]=s}else if(s<=2047){if(e+1>=o)break;t[e++]=192|s>>6,t[e++]=128|63&s}else if(s<=65535){if(e+2>=o)break;t[e++]=224|s>>12,t[e++]=128|s>>6&63,t[e++]=128|63&s}else{if(e+3>=o)break;t[e++]=240|s>>18,t[e++]=128|s>>12&63,t[e++]=128|s>>6&63,t[e++]=128|63&s}}return t[e]=0,e-a},Nt=(r,t,e)=>$r(r,T,t,e),kr=r=>{for(var t=0,e=0;e<r.length;++e){var n=r.charCodeAt(e);n<=127?t++:n<=2047?t+=2:n>=55296&&n<=57343?(t+=4,++e):t+=3}return t},Ir=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Gt=(r,t,e)=>{for(var n=t+e,a=t;r[a]&&!(a>=n);)++a;if(a-t>16&&r.buffer&&Ir)return Ir.decode(r.subarray(t,a));for(var o="";t<a;){var l=r[t++];if(128&l){var s=63&r[t++];if((224&l)!=192){var c=63&r[t++];if((l=(240&l)==224?(15&l)<<12|s<<6|c:(7&l)<<18|s<<12|c<<6|63&r[t++])<65536)o+=String.fromCharCode(l);else{var f=l-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&l)<<6|s)}else o+=String.fromCharCode(l)}return o},nr=(r,t)=>r?Gt(T,r,t):"",qt=(r,t)=>{var e=(t=_(t))==="std::string";O(r,{name:t,fromWireType(n){var a,o=v[n>>2],l=n+4;if(e)for(var s=l,c=0;c<=o;++c){var f=l+c;if(c==o||T[f]==0){var h=nr(s,f-s);a===void 0?a=h:(a+=String.fromCharCode(0),a+=h),s=f+1}}else{var m=new Array(o);for(c=0;c<o;++c)m[c]=String.fromCharCode(T[l+c]);a=m.join("")}return R(n),a},toWireType(n,a){var o;a instanceof ArrayBuffer&&(a=new Uint8Array(a));var l=typeof a=="string";l||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||W("Cannot pass non-string to std::string"),o=e&&l?kr(a):a.length;var s=dr(4+o+1),c=s+4;if(v[s>>2]=o,e&&l)Nt(a,c,o+1);else if(l)for(var f=0;f<o;++f){var h=a.charCodeAt(f);h>255&&(R(c),W("String has UTF-16 code units that do not fit in 8 bits")),T[c+f]=h}else for(f=0;f<o;++f)T[c+f]=a[f];return n!==null&&n.push(R,s),s},argPackAdvance:j,readValueFromPointer:Lt,destructorFunction(n){R(n)}})},Hr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Jt=(r,t)=>{for(var e=r,n=e>>1,a=n+t/2;!(n>=a)&&Z[n];)++n;if((e=n<<1)-r>32&&Hr)return Hr.decode(T.subarray(r,e));for(var o="",l=0;!(l>=t/2);++l){var s=B[r+2*l>>1];if(s==0)break;o+=String.fromCharCode(s)}return o},Xt=(r,t,e)=>{if(e===void 0&&(e=2147483647),e<2)return 0;for(var n=t,a=(e-=2)<2*r.length?e/2:r.length,o=0;o<a;++o){var l=r.charCodeAt(o);B[t>>1]=l,t+=2}return B[t>>1]=0,t-n},Zt=r=>2*r.length,Kt=(r,t)=>{for(var e=0,n="";!(e>=t/4);){var a=y[r+4*e>>2];if(a==0)break;if(++e,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Qt=(r,t,e)=>{if(e===void 0&&(e=2147483647),e<4)return 0;for(var n=t,a=n+e-4,o=0;o<r.length;++o){var l=r.charCodeAt(o);if(l>=55296&&l<=57343&&(l=65536+((1023&l)<<10)|1023&r.charCodeAt(++o)),y[t>>2]=l,(t+=4)+4>a)break}return y[t>>2]=0,t-n},re=r=>{for(var t=0,e=0;e<r.length;++e){var n=r.charCodeAt(e);n>=55296&&n<=57343&&++e,t+=4}return t},te=(r,t,e)=>{var n,a,o,l,s;e=_(e),t===2?(n=Jt,a=Xt,l=Zt,o=()=>Z,s=1):t===4&&(n=Kt,a=Qt,l=re,o=()=>v,s=2),O(r,{name:e,fromWireType:c=>{for(var f,h=v[c>>2],m=o(),p=c+4,g=0;g<=h;++g){var b=c+4+g*t;if(g==h||m[b>>s]==0){var E=n(p,b-p);f===void 0?f=E:(f+=String.fromCharCode(0),f+=E),p=b+t}}return R(c),f},toWireType:(c,f)=>{typeof f!="string"&&W(`Cannot pass non-string to C++ string type ${e}`);var h=l(f),m=dr(4+h+t);return v[m>>2]=h>>s,a(f,m+4,h+t),c!==null&&c.push(R,m),m},argPackAdvance:j,readValueFromPointer:rr,destructorFunction(c){R(c)}})},ee=(r,t,e,n,a,o)=>{Q[r]={name:_(t),rawConstructor:M(e,n),rawDestructor:M(a,o),elements:[]}},ne=(r,t,e,n,a,o,l,s,c)=>{Q[r].elements.push({getterReturnType:t,getter:M(e,n),getterContext:a,setterArgumentType:o,setter:M(l,s),setterContext:c})},ae=(r,t,e,n,a,o)=>{er[r]={name:_(t),rawConstructor:M(e,n),rawDestructor:M(a,o),fields:[]}},oe=(r,t,e,n,a,o,l,s,c,f)=>{er[r].fields.push({fieldName:_(t),getterReturnType:e,getter:M(n,a),getterContext:o,setterArgumentType:l,setter:M(s,c),setterContext:f})},ie=(r,t)=>{O(r,{isVoid:!0,name:t=_(t),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,n)=>{}})},ue=r=>{r>4&&(P.get(r).refcount+=1)},se=()=>D.toHandle([]),le={},ce=r=>{var t=le[r];return t===void 0?_(r):t},fe=r=>D.toHandle(ce(r)),de=()=>D.toHandle({}),he=(r,t,e)=>{r=D.toValue(r),t=D.toValue(t),e=D.toValue(e),r[t]=e},me=(r,t)=>{var e=I[r];return e===void 0&&W(t+" has unknown type "+Rr(r)),e},pe=(r,t)=>{var e=(r=me(r,"_emval_take_value")).readValueFromPointer(t);return D.toHandle(e)},ve=()=>{K("")},ge=(r,t,e)=>T.copyWithin(r,t,t+e),ye=()=>2147483648,we=r=>{var t=(r-X.buffer.byteLength+65535)/65536;try{return X.grow(t),br(),1}catch{}},_e=r=>{var t=T.length;r>>>=0;var e=ye();if(r>e)return!1;for(var n=(s,c)=>s+(c-s%c)%c,a=1;a<=4;a*=2){var o=t*(1+.2/a);o=Math.min(o,r+100663296);var l=Math.min(e,n(Math.max(r,o),65536));if(we(l))return!0}return!1},fr={},be=()=>gr||"./this.program",q=()=>{if(!q.strings){var r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:be()};for(var t in fr)fr[t]===void 0?delete r[t]:r[t]=fr[t];var e=[];for(var t in r)e.push(`${t}=${r[t]}`);q.strings=e}return q.strings},Ae=(r,t)=>{for(var e=0;e<r.length;++e)x[0|t++]=r.charCodeAt(e);x[0|t]=0},Te=(r,t)=>{var e=0;return q().forEach((n,a)=>{var o=t+e;v[r+4*a>>2]=o,Ae(n,o),e+=n.length+1}),0},Ce=(r,t)=>{var e=q();v[r>>2]=e.length;var n=0;return e.forEach(a=>n+=a.length+1),v[t>>2]=n,0},ar=r=>r%4==0&&(r%100!=0||r%400==0),Fe=(r,t)=>{for(var e=0,n=0;n<=t;e+=r[n++]);return e},Ur=[31,29,31,30,31,30,31,31,30,31,30,31],Yr=[31,28,31,30,31,30,31,31,30,31,30,31],We=(r,t)=>{for(var e=new Date(r.getTime());t>0;){var n=ar(e.getFullYear()),a=e.getMonth(),o=(n?Ur:Yr)[a];if(!(t>o-e.getDate()))return e.setDate(e.getDate()+t),e;t-=o-e.getDate()+1,e.setDate(1),a<11?e.setMonth(a+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return e};function Ee(r,t,e){var n=kr(r)+1,a=new Array(n);return $r(r,a,0,a.length),a}var Y,Pe=(r,t)=>{x.set(r,t)},Se=(r,t,e,n)=>{var a=v[n+40>>2],o={tm_sec:y[n>>2],tm_min:y[n+4>>2],tm_hour:y[n+8>>2],tm_mday:y[n+12>>2],tm_mon:y[n+16>>2],tm_year:y[n+20>>2],tm_wday:y[n+24>>2],tm_yday:y[n+28>>2],tm_isdst:y[n+32>>2],tm_gmtoff:y[n+36>>2],tm_zone:a?nr(a):""},l=nr(e),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in s)l=l.replace(new RegExp(c,"g"),s[c]);var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h=["January","February","March","April","May","June","July","August","September","October","November","December"];function m(u,d,C){for(var F=typeof u=="number"?u.toString():u||"";F.length<d;)F=C[0]+F;return F}function p(u,d){return m(u,d,"0")}function g(u,d){function C(ir){return ir<0?-1:ir>0?1:0}var F;return(F=C(u.getFullYear()-d.getFullYear()))===0&&(F=C(u.getMonth()-d.getMonth()))===0&&(F=C(u.getDate()-d.getDate())),F}function b(u){switch(u.getDay()){case 0:return new Date(u.getFullYear()-1,11,29);case 1:return u;case 2:return new Date(u.getFullYear(),0,3);case 3:return new Date(u.getFullYear(),0,2);case 4:return new Date(u.getFullYear(),0,1);case 5:return new Date(u.getFullYear()-1,11,31);case 6:return new Date(u.getFullYear()-1,11,30)}}function E(u){var d=We(new Date(u.tm_year+1900,0,1),u.tm_yday),C=new Date(d.getFullYear(),0,4),F=new Date(d.getFullYear()+1,0,4),ir=b(C),He=b(F);return g(ir,d)<=0?g(He,d)<=0?d.getFullYear()+1:d.getFullYear():d.getFullYear()-1}var A={"%a":u=>f[u.tm_wday].substring(0,3),"%A":u=>f[u.tm_wday],"%b":u=>h[u.tm_mon].substring(0,3),"%B":u=>h[u.tm_mon],"%C":u=>p((u.tm_year+1900)/100|0,2),"%d":u=>p(u.tm_mday,2),"%e":u=>m(u.tm_mday,2," "),"%g":u=>E(u).toString().substring(2),"%G":u=>E(u),"%H":u=>p(u.tm_hour,2),"%I":u=>{var d=u.tm_hour;return d==0?d=12:d>12&&(d-=12),p(d,2)},"%j":u=>p(u.tm_mday+Fe(ar(u.tm_year+1900)?Ur:Yr,u.tm_mon-1),3),"%m":u=>p(u.tm_mon+1,2),"%M":u=>p(u.tm_min,2),"%n":()=>`
`,"%p":u=>u.tm_hour>=0&&u.tm_hour<12?"AM":"PM","%S":u=>p(u.tm_sec,2),"%t":()=>"	","%u":u=>u.tm_wday||7,"%U":u=>{var d=u.tm_yday+7-u.tm_wday;return p(Math.floor(d/7),2)},"%V":u=>{var d=Math.floor((u.tm_yday+7-(u.tm_wday+6)%7)/7);if((u.tm_wday+371-u.tm_yday-2)%7<=2&&d++,d){if(d==53){var C=(u.tm_wday+371-u.tm_yday)%7;C==4||C==3&&ar(u.tm_year)||(d=1)}}else{d=52;var F=(u.tm_wday+7-u.tm_yday-1)%7;(F==4||F==5&&ar(u.tm_year%400-1))&&d++}return p(d,2)},"%w":u=>u.tm_wday,"%W":u=>{var d=u.tm_yday+7-(u.tm_wday+6)%7;return p(Math.floor(d/7),2)},"%y":u=>(u.tm_year+1900).toString().substring(2),"%Y":u=>u.tm_year+1900,"%z":u=>{var d=u.tm_gmtoff,C=d>=0;return d=(d=Math.abs(d)/60)/60*100+d%60,(C?"+":"-")+("0000"+d).slice(-4)},"%Z":u=>u.tm_zone,"%%":()=>"%"};for(var c in l=l.replace(/%%/g,"\0\0"),A)l.includes(c)&&(l=l.replace(new RegExp(c,"g"),A[c](o)));var S=Ee(l=l.replace(/\0\0/g,"%"));return S.length>t?0:(Pe(S,r),S.length-1)},xe=(r,t,e,n,a)=>Se(r,t,e,n),Vr=(r,t)=>{r<128?t.push(r):t.push(r%128|128,r>>7)},Oe=r=>{for(var t={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},e={parameters:[],results:r[0]=="v"?[]:[t[r[0]]]},n=1;n<r.length;++n)e.parameters.push(t[r[n]]);return e},je=(r,t)=>{var e=r.slice(0,1),n=r.slice(1),a={i:127,p:127,j:126,f:125,d:124,e:111};t.push(96),Vr(n.length,t);for(var o=0;o<n.length;++o)t.push(a[n[o]]);e=="v"?t.push(0):t.push(1,a[e])},De=(r,t)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(Oe(t),r);var e=[1];je(t,e);var n=[0,97,115,109,1,0,0,0,1];Vr(e.length,n),n.push.apply(n,e),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var a=new WebAssembly.Module(new Uint8Array(n));return new WebAssembly.Instance(a,{e:{f:r}}).exports.f},Me=(r,t)=>{if(Y)for(var e=r;e<r+t;e++){var n=cr(e);n&&Y.set(n,e)}},Re=r=>(Y||(Y=new WeakMap,Me(0,H.length)),Y.get(r)||0),zr=[],$e=()=>{if(zr.length)return zr.pop();try{H.grow(1)}catch(r){throw r instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":r}return H.length-1},Br=(r,t)=>{H.set(r,t),G[r]=H.get(r)},ke=(r,t)=>{var e=Re(r);if(e)return e;var n=$e();try{Br(n,r)}catch(o){if(!(o instanceof TypeError))throw o;var a=De(r,t);Br(n,a)}return Y.set(r,n),n};Pr=i.InternalError=class extends Error{constructor(r){super(r),this.name="InternalError"}},gt(),xr=i.BindingError=class extends Error{constructor(r){super(r),this.name="BindingError"}},_t(),At(),Mr=i.UnboundTypeError=It(Error,"UnboundTypeError");var Ie={k:ht,l:mt,s:pt,u:vt,B:wt,A:Tt,r:Ft,c:Yt,f:zt,b:Bt,q:qt,o:te,m:ee,d:ne,t:ae,i:oe,C:ie,a:Dr,n:ue,D:se,h:fe,j:de,e:he,g:pe,p:ve,z:ge,y:_e,w:Te,x:Ce,v:xe},w=ft(),R=i._free=r=>(R=i._free=w.H)(r),dr=i._malloc=r=>(dr=i._malloc=w.I)(r),Lr=r=>(Lr=w.J)(r);i.__embind_initialize_bindings=()=>(i.__embind_initialize_bindings=w.K)();var or,Nr=r=>(Nr=w.L)(r);function Gr(){function r(){or||(or=!0,i.calledRun=!0,_r||(tt(),pr(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),et()))}k>0||(rt(),k>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),r()},1)):r()))}if(i.dynCall_viji=(r,t,e,n,a)=>(i.dynCall_viji=w.M)(r,t,e,n,a),i.dynCall_ji=(r,t)=>(i.dynCall_ji=w.N)(r,t),i.dynCall_viijii=(r,t,e,n,a,o,l)=>(i.dynCall_viijii=w.O)(r,t,e,n,a,o,l),i.dynCall_iiiiij=(r,t,e,n,a,o,l)=>(i.dynCall_iiiiij=w.P)(r,t,e,n,a,o,l),i.dynCall_iiiiijj=(r,t,e,n,a,o,l,s,c)=>(i.dynCall_iiiiijj=w.Q)(r,t,e,n,a,o,l,s,c),i.dynCall_iiiiiijj=(r,t,e,n,a,o,l,s,c,f)=>(i.dynCall_iiiiiijj=w.R)(r,t,e,n,a,o,l,s,c,f),i.addFunction=ke,i.UTF8ToString=nr,L=function r(){or||Gr(),or||(L=r)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Gr(),mr.ready},qr.exports=Jr;const Ye=Ue(Xr.exports),ze=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"}));export{ze as l};
