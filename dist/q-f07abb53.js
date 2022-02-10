/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 *//**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */const h=[],nn={};Object.freeze(h),Object.freeze(nn);function V(t){return t instanceof D}class en{constructor(n,e,r,i,s,o,c,u){this.chunk=n,this.symbol=e,this.symbolRef=r,this.symbolFn=i,this.capture=s,this.captureRef=o,this.guard=c,this.guardRef=u,this.canonicalChunk=n.replace(rn,"")}}const D=en,rn=/\.[\w?=&]+$/;/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function a(t,n){{if(t!=null)return;throw C(n||"Expected defined value.")}}function w(t,n,e){{if(t!==n)return;throw C(e||`Expected '${t}' !== '${n}'.`)}}function R(t,n,e){{if(t===n)return;throw C(e||`Expected '${t}' === '${n}'.`)}}function _t(t,n,e){{if(t>=n)return;throw C(e||`Expected '${t}' >= '${n}'.`)}}function sn(t,n,e){{if(t>n)return;throw C(e||`Expected '${t}' > '${n}'.`)}}function C(t){debugger;const n=new Error(t);return console.error(n),n}/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */let on=0;const X="/runtimeQRL",cn=/\(\s*(['"])([^\1]+)\1\s*\)/,un=/Promise\s*\.\s*resolve/,fn=/[\\/(]([\w\d.\-_]+\.(js|ts)x?):/;function mt(t){return R(V(t),!0),t}function ln(t,n,e=h){let r,i=null;if(typeof t=="string")r=t;else if(typeof t=="function"){i=t;let s;const o=String(t);if((s=o.match(cn))&&s[2])r=s[2];else if(s=o.match(un)){const c="QWIK-SELF",u=new Error(c).stack.split(`
`),f=u.findIndex(l=>l.includes(c));s=u[f+2].match(fn),s?r=s[1]:r="main"}else throw new Error("Q-ERROR: Dynamic import not found: "+o)}else throw new Error("Q-ERROR: Unknown type argument: "+t);return new D(r,n,null,i,null,e,null,null)}function Et(t,n=h){return new D(X,"s"+on++,t,null,null,n,null,null)}function bt(t,n){const e=mt(t),r=[e.chunk],i=e.symbol;i&&i!=="default"&&r.push("#",i);const s=e.guard;s==null||s.forEach((u,f)=>r.push("|",f,u&&u.length?"."+u.join("."):""));const o=e.capture;o&&o.length&&r.push(JSON.stringify(o));const c=r.join("");return e.chunk===X&&n&&(n.__qrls__||(n.__qrls__=new Set)).add(t),c}function L(t,n){if(n){const pt=n.__qrls__;if(pt){for(const gt of pt)if(bt(gt)==t)return gt}}const e=t.length,r=H(t,0,"#"),i=H(t,r,"|"),s=H(t,i,"["),o=Math.min(r,i,s),c=t.substring(0,o),u=r==e?r:r+1,f=Math.min(i,s),d=u==f?"default":t.substring(u,f),l=i,E=s,jt=l<E?dn(t.substring(l,E)):null,ht=s,yt=e,tn=ht===yt?h:an(t.substring(ht,yt));return c===X&&console.error(`Q-ERROR: '${t}' is runtime but no instance found on element.`),new D(c,d,null,null,tn,null,jt,null)}function an(t){try{return JSON.parse(t)}catch(n){throw console.error("JSON:",t),n}}function dn(t){let n=null;return t&&t.split("|").forEach(e=>{if(e){const r=e.split("."),i=r.shift();n||(n=new Map),n.set(i,r)}}),n}function H(t,n,e){const r=t.length,i=t.indexOf(e,n==r?0:n);return i==-1?r:i}function z(t){if(!V(t))if(typeof t=="function"||typeof t=="string")t=Et(t);else throw new Error("Q-ERROR Only 'function's and 'string's are supported.");return t}function N(t,n){return S(t)&&t.tagName.toUpperCase()==n.toUpperCase()}function hn(t){return N(t,"template")}function yn(t){return hn(t)&&t.hasAttribute("q:slot")}function Rt(t){return S(t)&&t.hasAttribute("on:q-render")}function S(t){return t?t.nodeType===1:!1}/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function wt(t){return t&&typeof t.nodeType=="number"}function Ct(t){return t&&t.nodeType==9}function pn(t){return wt(t)&&t.nodeType==1}function St(t){return wt(t)&&t.nodeType==8}const gn=t=>{let n,e;const r=new Map;return{importSymbol(i,s,o){const c=B(i.ownerDocument,i,s).toString(),u=new URL(c);u.hash="",u.search="";const f=u.href,d=r.get(f);return d?d[o]:import(f).then(l=>(r.set(f,l),l[o]))},queueRender:i=>(n||(n=new Promise((s,o)=>t.defaultView.requestAnimationFrame(()=>{n=null,i(t).then(s,o)}))),n),queueStoreFlush:i=>(e||(e=new Promise((s,o)=>t.defaultView.requestAnimationFrame(()=>{e=null,i(t).then(s,o)}))),e)}};function B(t,n,e){let r,i;if(e===void 0)n?(r=n.getAttribute("q:base"),i=B(t,n.parentNode&&n.parentNode.closest("[q\\:base]"))):r=t.baseURI;else if(e)r=e,i=B(t,n.closest("[q\\:base]"));else throw new Error("INTERNAL ERROR");return new URL(String(r),i)}const At=t=>{const n=Ct(t)?t:t.ownerDocument;return n[Ot]||(n[Ot]=gn(n))},Ot=Symbol();async function G(t,n){const e=mt(n);if(e.symbolRef)return e.symbolRef;const r=t.ownerDocument;return e.symbolFn?e.symbolRef=e.symbolFn().then(i=>i[e.symbol]):e.symbolRef=await At(r).importSymbol(t,e.chunk,e.symbol)}function _n(t){return Et(t)}const Ue=ln;/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function mn(t){return t==null?String(t):typeof t=="function"?t.name:S(t)?Pt(t):t instanceof URL?String(t):typeof t=="object"?JSON.stringify(t,function(n,e){return S(e)?Pt(e):e}):String(t)}function Pt(t){let n="<"+t.tagName.toLowerCase();const e=t.attributes,r=[];for(let i=0;i<e.length;i++)r.push(e[i].name);r.sort();for(let i=0;i<r.length;i++){const s=r[i];let o=t.getAttribute(s);(o==null?void 0:o.startsWith("file:/"))&&(o=o.replace(/(file:\/\/).*(\/.*)$/,(c,u,f)=>u+"..."+f)),n+=" "+s+(o==null||o==""?"":"='"+o.replace("'","&apos;")+"'")}return n+">"}/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function qt(t,...n){{const r=En(t).split("{}"),i=r.map((s,o)=>s+(o===r.length-1?"":mn(n[o]))).join("");debugger;return new Error(i)}}function En(t){const n={0:"ERROR",1:"QRL-ERROR",2:"INJECTOR-ERROR",3:"SERVICE-ERROR",4:"COMPONENT-ERROR",5:"PROVIDER-ERROR",6:"RENDER-ERROR",7:"EVENT-ERROR"}[Math.floor(t/100)],e={[1]:"QConfig not found in path '{}'.",[2]:"Unrecognized stack format '{}'",[3]:"Could not find entity state '{}' at '{}' or any of it's parents.",[4]:"Could not find entity state '{}' ( or entity provider '{}') at '{}' or any of it's parents.",[5]:"Missing property '{}' in props '{}'.",[6]:"Missing export '{}' from '{}'. Exported symbols are: {}",[100]:"QRL '${}' should point to function, was '{}'.",[200]:"Can't find host element above '{}'.",[201]:"Provider is expecting '{}' but got '{}'.",[202]:"Expected 'Element' was '{}'.",[203]:"Expected injection 'this' to be of type '{}', but was of type '{}'.",[204]:"Entity key '{}' is found on '{}' but does not contain state. Was 'serializeState()' not run during dehydration?",[206]:"No injector can be found starting at '{}'.",[207]:"EventInjector does not support serialization.",[300]:`Data key '{}' is not a valid key.
  - Data key can only contain characters (preferably lowercase) or number
  - Data key is prefixed with entity name
  - Data key is made up from parts that are separated with ':'.`,[301]:"A entity with key '{}' already exists.",[303]:"'{}' is not a valid attribute. Attributes can only contain 'a-z' (lowercase), '0-9', '-' and '_'.",[304]:"Found '{}' but expando did not have entity and attribute did not have state.",[305]:"Element '{}' is missing entity attribute definition '{}'.",[306]:"Unable to create state for entity '{}' with props '{}' because no state found and '$newState()' method was not defined on entity.",[307]:"'{}' is not an instance of 'Entity'.",[308]:"'{}' overrides 'constructor' property preventing 'EntityType' retrieval.",[311]:"Entity '{}' does not define '$keyProps'.",[310]:"Entity '{}' must have static '$type' property defining the name of the entity.",[312]:"Entity '{}' must have static '$qrl' property defining the import location of the entity.",[313]:"Name collision. Already have entity named '{}' with QRL '{}' but expected QRL '{}'.",[309]:"Entity key '{}' is missing values. Expecting '{}:someValue'.",[314]:"Entity '{}' defines '$keyProps' as  '{}'. Actual key '{}' has more parts than entity defines.",[315]:"Key '{}' belongs to entity named '{}', but expected entity '{}' with name '{}'.",[316]:"Entity state is missing '$key'. Are you sure you passed in state? Got '{}'.",[400]:`'bind:' must have an key. (Example: 'bind:key="propertyName"').`,[401]:`'bind:id' must have a property name. (Example: 'bind:key="propertyName"').`,[402]:"Can't find state on host element.",[403]:"Components must be instantiated inside an injection context. Use '{}.new(...)' for creation.",[404]:"Property '{}' not found in '{}' on component '{}'.",[405]:"Unable to find '{}' component.",[406]:"Requesting component type '{}' does not match existing component instance '{}'.",[408]:"Unable to create state for component '{}' with props '{}' because no state found and '$newState()' method was not defined on component.",[500]:"Unrecognized expression format '{}'.",[600]:"Unexpected JSXNode<{}> type.",[601]:"Value '{}' can't be written into '{}' attribute.",[602]:"Expecting entity object, got '{}'.",[603]:"Expecting array of entities, got '{}'.",[604]:"Expecting Entity or Component got '{}'.",[699]:"Render state machine did not advance.",[700]:"Missing '$type' attribute in the '{}' url.",[701]:"Re-emitting event '{}' but no listener found at '{}' or any of its parents."}[t];let r="000"+t;return r=r.substr(r.length-3),`${n}(Q-${r}): ${e}`}function bn(t,n,e,r){let i=t.length;if(i==n)t.push(e,r);else if(i===1)t.push(r,t[0]),t[0]=e;else{for(i--,t.push(t[i-1],t[i]);i>n;){const s=i-2;t[i]=t[s],i--}t[n]=e,t[n+1]=r}}function A(t,n,e){const r=Rn(t,n);if(r>=0)return t[r|1];if(e){const i=e();return bn(t,~r,n,i),i}}function Rn(t,n){return wn(t,n,1)}function wn(t,n,e){let r=0,i=t.length>>e;for(;i!==r;){const s=r+(i-r>>1),o=t[s<<e];if(n===o)return s<<e;o>n?i=s:r=s+1}return~(i<<e)}function $(t){return Array.isArray(t)}function It(t){const n=[],e=t.hostElement,r=e.firstElementChild;Cn(r)&&Qt(n,r.content,null);const i=[];return e.querySelectorAll("Q\\:SLOT").forEach(s=>{for(const c of i)if(c.contains(s))return;i.push(s);const o=s.getAttribute("name")||"";Qt(n,s,o)}),n}function Cn(t){return N(t,"template")&&t.hasAttribute("q:slot")}function Qt(t,n,e){K=n;let r=n.firstChild;for(e!==null&&A(t,e,Tt);r;){const i=e!==null?e:S(r)&&r.getAttribute("q:slot")||"";A(t,i,Tt).push(r),r=r.nextSibling}K=void 0}let K;function Tt(){return[-1,K]}function Sn(t){let n=t.firstChild;return n&&n.nodeType===10&&(n=n.nextSibling),O(t,n,null)}function O(t,n,e){return{parent:t,node:n,end:e}}function P(t){const n=t.node;return t.end==n?null:n}function q(t,n){t.node=t.end==n?null:n}function An(t){return O(t.parent,t.node,t.end)}function On(t){R(Rt(t),!0);let n=t.firstChild;return yn(n)&&(n=n.nextSibling),O(t,n,null)}function xt(t,n,e,r,i){let s=P(t);return w(s,void 0,"Cursor already closed"),$(s)?(a(t.parent),Pn(t.parent,s,t.end,n,e,r,i)):(w(s,void 0,"Cursor already closed"),s=Y(t.parent,s,t.end,n,e,r,i),a(s),q(t,s.nextSibling),Mt(s,!!i))}function Pn(t,n,e,r,i,s,o){const c=s["q:slot"]||"",u=A(n,c);let f;if(u){_t(u.length,2);const d=u[1];let l=u[0];l==-1&&(l=2),f=u.length>l?u[l]:null;const E=Y(d,f,e,r,i,s,o);f!==E&&(u[l]=E,f=E),u[0]=l+1}else{const d=Dt(t);f=Y(d.content,null,e,r,i,s,!0),a(f)}return Mt(f,!!o)}function Y(t,n,e,r,i,s,o){let c,u;if(N(n,i)){const f=p(n);Object.assign(f,s),c=Yt(f)&&!!o,u=n}else u=j(t,n,(Ct(t)?t:t.ownerDocument).createElement(i),e),c=!!o,Object.assign(p(u),s);if(r&&r.styleClass&&u.classList.add(r.styleClass),c){const f=W(u);f.styleHostClass&&u.classList.add(f.styleHostClass),Array.isArray(o)?o.push(f.render()):u.getAttribute("on:q-render")&&u.setAttribute("on:q-render-notify","")}return u}function Mt(t,n){return a(t),n?O(t,It(W(t)),null):Sn(t)}function qn(t,n){let e=P(t);if(w(e,void 0,"Cursor already closed"),a(t.parent),$(e)){let r,i;const s=A(e,"");if(s){_t(s.length,2),r=s[1];let o=s[0];o==-1&&(o=2),i=s.length>o?s[o]:null,e=Z(r,i,t.end,n),i!==e&&(s[o]=e),s[0]=o+1}else{const o=Dt(t.parent);Z(o.content,null,t.end,n)}}else e=Z(t.parent,e,t.end,n),q(t,e.nextSibling)}function Z(t,n,e,r){return n&&n.nodeType==3?n.textContent!==r&&(n.textContent=r):n=j(t,n,t.ownerDocument.createTextNode(r),e),n}function b(t){let n=P(t);if($(n))for(let e=0;e<n.length;e=e+2){const r=n[e+1];if(r[0]!==-1){sn(r[0],1);for(let i=r[0];i<r.length;i++)r[1].removeChild(r[i])}}else for(;n;){const e=n.nextSibling;t.parent.removeChild(n),n=e}q(t,void 0)}function Dt(t){R(Rt(t),!0,"Must be component element");let n=t==null?void 0:t.firstElementChild;return(!N(n,"template")||!n.hasAttribute("q:slot"))&&(n=t.insertBefore(t.ownerDocument.createElement("template"),n),n.setAttribute("q:slot","")),n}const v="<node:",In="</node:";function Qn(t){var n;let e=P(t);if($(e))throw new Error("Not expecting slot map here");if(St(e)&&((n=e.textContent)===null||n===void 0?void 0:n.startsWith(v)))throw new Error("IMPLEMENT");{const r=Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),i=t.parent,s=i.ownerDocument,o=s.createComment(v+r+">"),c=s.createComment(In+r+">");return e=j(t.parent,e,c,null),t.parent.insertBefore(o,c),q(t,c.nextSibling),O(i,o,c)}}function Lt(t){const n=P(t);R(St(n)&&n.textContent.startsWith(v),!0),q(t,n&&n.nextSibling)}function j(t,n,e,r){return t.insertBefore(e,n||r),n&&t.removeChild(n),e}/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function tt(t,n){n||(n=[]);for(const e of t)Array.isArray(e)?tt(e,n):n.push(e);return n}/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function Nt(t){return Promise.all(t).then(n=>{const e=tt(n);for(let r=0;r<e.length;r++)if(I(e[r]))return Nt(e);return e})}function I(t){return t instanceof Promise}/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */const Tn={__brand__:"host"};function Ve(t,n,e){return new k(t,n,e)}class k{constructor(n,e,r){this.type=n,this.props=e,this.key=r,e&&e.children!==void 0?Array.isArray(e.children)?this.children=e.children:this.children=[e.children]:this.children=h}}const xn=t=>{{if(t instanceof k)return!0;if(t&&typeof t=="object"&&t.constructor.name===k.name)throw new Error('Duplicate implementations of "JSXNodeImpl" found');return!1}},Mn={},Dn={__brand__:"slot"};function g(t,n,e,r){if(xn(r)){const i=r.type;if(i==null)return;if(typeof i=="string")Ln(t,n,e,r);else if(i===Mn||i==null){const s=r.children||h;for(const o of s)g(t,n,e,o)}else if(r.type===Tn){const s=p(e.parent);Object.assign(s,r.props);const o=r.children||h;for(const c of o)g(t,n,e,c);Yt(s)}else if(r.type===Dn)t&&$n(t,n,e,r);else if(typeof r.type=="function")g(t,n,e,r.type(r.props));else throw qt(600,i)}else if(I(r)){const i=Qn(e),s=o=>{Lt(i),g(t,n,i,o),b(i)};if(r.then(s,s),r.whilePending){const o=An(i);Lt(o),g(t,n,o,r.whilePending),b(o)}}else if(Array.isArray(r)){const i=r;for(const s of i)g(t,n,e,s)}else(typeof r=="string"||typeof r=="number")&&qn(e,String(r))}function Ln(t,n,e,r){const i=r.type,s="on:qRender"in r.props,o=xt(e,t,i,r.props,s?n:null);if(Nn(r)){if(s)throw new Error("innerHTML/innerText bindings not supported on component content")}else{const c=r.children||h;for(const u of c)g(t,n,o,u);b(o)}}function Nn(t){return"innerHTML"in t.props||"innerText"in t.props}function $n(t,n,e,r){const i=r.props.name||"",s=xt(e,t,"Q:SLOT",Object.assign({name:i},r.props),null),o=It(t),c=A(o,i);if(c&&c.length>2){const u=s.parent;if(c[1]!==u){b(s);for(let f=2;f<c.length;f++){const d=c[f];u.appendChild(d)}b(s)}u.querySelectorAll("[on\\:q-render-notify]").forEach(f=>{n.push(W(f).render())})}else{const u=r.children;for(const f of u)g(t,n,s,f);b(s)}}function kn(t,n=0){if(t.length===0)return n;for(let e=0;e<t.length;e++){const r=t.charCodeAt(e);n=(n<<5)-n+r,n|=0}return Number(Math.abs(n)).toString(36)}function Wn(t){return t&&String(kn(t.symbol))}function Jn(t){return t&&"\u{1F4E6}"+t}function Fn(t){return t&&"\u{1F3F7}\uFE0F"+t}function Un(t){w(T(t),t,"Expecting Proxy"),_&&_.subscriptions&&t&&_.subscriptions.add(t)}let _;function Q(){if(!_){const t=typeof document!="undefined"&&document&&document.__q_context__;if(!t)throw new Error("Q-ERROR: invoking 'use*()' method outside of invocation context.");if(Array.isArray(t)){const n=t[0].closest("[on\\:q\\-render]");return a(n),document.__q_context__=et(n,t[1],t[2])}return t}return _}function nt(t,n,...e){const r=_;let i;try{_=t,i=n.apply(null,e)}finally{const s=_,o=s.subscriptions;if(o){const c=s.hostElement;c&&(p(c)[":subscriptions"]=o)}if(_=r,s.waitOn&&s.waitOn.length>0)return Promise.all(s.waitOn).then(()=>i)}return i}function et(t,n,e){return{hostElement:t,event:n,url:e||null,qrl:void 0,subscriptions:n==="qRender"?new Set:void 0}}function Vn(t){const n=Q();(n.waitOn||(n.waitOn=[])).push(t)}class Xn{constructor(n){this.styleId=void 0,this.styleClass=null,this.styleHostClass=null,this.hostElement=n}async render(){const n=this.hostElement,r=p(n)["on:qRender"];a(r),n.removeAttribute("on:q-render-notify");const i=[];try{const o=await nt(et(n,"qRender"),r);if(this.styleId===void 0){const u=this.styleId=n.getAttribute("q:sstyle");u&&(this.styleHostClass=Jn(u),this.styleClass=Fn(u))}const c=On(this.hostElement);g(this,i,c,o),b(c)}catch(s){console.log(s)}return[this.hostElement,...await Nt(i)]}}const $t="__qComponent__";function W(t){const n=t;let e=n[$t];return e||(e=n[$t]=new Xn(t)),e}function Hn(t){return a(t.getAttribute("on:q-render")),t.setAttribute("on:q-render-notify",""),zn(t.ownerDocument)}function zn(t){return At(t).queueRender(Bn)}async function Bn(t){const n=Array.from(t.querySelectorAll("[on\\:q-render-notify]"));return Promise.all(n.map(e=>{e.removeAttribute("on:q-render-notify");const r=W(e);return r&&r.render()}))}/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */function kt(t){return t!=null&&typeof t=="object"?String(t.constructor.name)+`
`+Gn(t):String(t)}function Gn(t){try{return JSON.stringify(t,null,"  ")}catch(n){return String(n)}}function Kn(t){if(R(T(t),t,"Unexpected proxy at this location"),t==null||typeof t!="object")throw new Error("Q-ERROR: Only objects can be wrapped in 'QObject', got "+kt(t));if(t.constructor!==Object)throw new Error("Q-ERROR: Only objects literals can be wrapped in 'QObject', got "+kt(t));const n=rt(t,st());return Object.assign(n,t),n}function Yn(t,n){return rt(t,n)}function Zn(t,n){n&&n.querySelectorAll(te(t)).forEach(Hn)}function vn(t){const n=F.get(t);a(n),Un(n)}function jn(t,n){w(T(t),t,"Expected Proxy"),t[Wt]=n}function y(t){let n;return t&&typeof t=="object"&&(n=t[J],!n&&pn(t)&&(n=t.getAttribute("q:id"),n==null&&t.setAttribute("q:id",n=st()),n="#"+n)),n||null}function te(t){return t=t.replace(/([^\w\d])/g,(n,e)=>"\\"+e),"[q\\:obj*=\\!"+t+"]"}function rt(t,n){if(!t||typeof t!="object")return t;let e=F.get(t);return e||(e=new Proxy(t,new ee(n)),F.set(t,e),e)}const it=":target:",ne=":transients:",J=":id:",Wt=":doc:";function T(t){if(t&&typeof t=="object"){const n=t[it];if(n)return n}return t}function Jt(t){if(t&&typeof t=="object"){if(T(t)!==t)return t;const e=F.get(t);return e||rt(t,st())}else return t}class ee{constructor(n){this.doc=null,this.transients=null,this.id=n}get(n,e){if(e===it)return n;if(e===J)return this.id;if(e===ne)return this.transients||(this.transients=new WeakMap);const r=n[e];return vn(n),Jt(r)}set(n,e,r){if(e===Wt)this.doc=r;else if(e==J)this.id=r;else{const i=T(r);n[e]!==i&&(n[e]=i,Zn(this.id,this.doc))}return!0}has(n,e){return e===it?!0:Object.prototype.hasOwnProperty.call(n,e)}ownKeys(n){return Object.getOwnPropertyNames(n)}}const F=new WeakMap;function st(){return Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36)}const m="",Ft="*";function re(t,n){if(t==null||typeof t=="number"||typeof t=="boolean")return String(t);const e=y(t);if(e)return n&&n.set(e,t),Ft+e;if(typeof t=="string"){const r=t.charCodeAt(0);return Ut(r)||Xt(r)||Vt(r)||le(t)||ae(t)?"'"+t.replace(/'/g,"\\'").replace(/\//g,"\\")+"'":t}return JSON.stringify(t,function(r,i){const s=y(i);return s?(a(n),n&&n.set(s,i),m+s):i})}function ie(t,n){if(t=="")return"";if(t=="null")return null;if(t=="undefined")return;if(t=="false")return!1;if(t=="true")return!0;const e=t.charCodeAt(0);if(Xt(e)||Ut(e))return Number(t);if(ue(e)){const r=t.substr(1);if(!n)throw new Error("Map needs to be present when parsing QObjects");const i=n.get(r);return a(i),i}return ce(e)?t.substring(1,t.length-1).replace(/\\(.)/,r=>r):Vt(e)?JSON.parse(t,function(r,i){if(typeof i=="string"&&fe(i.charCodeAt(0))){if(!n)throw new Error("Map needs to be present when parsing QObjects");i=n.get(i.substr(1)),a(i)}return i}):t}function se(t,n){if(t&&typeof t=="object"){let e=y(t);return e||(t=Kn(t),e=y(t)),n.set(e,t),m+e}return t}function oe(t,n){if(typeof t=="string"&&t.charAt(0)===m){const e=t.charAt(1);if(e=="#"||e=="&"){const r=t.substring(2),i='[q\\:id="{}"]'.replace("{}",r),s=n.element,o=s.closest(i)||s.querySelector(i)||s.ownerDocument.querySelector(i);if(!o)throw new Error(`Q-ERROR: Element with '${i}' can not be located.`);return e=="&"?p(o):o}else{const r=t.substring(1),i=n.get(r);if(!i)throw new Error(`Q-ERROR: Unable to located object with id '${r}'.`);return i}}return t}function Ut(t){return t=="-".charCodeAt(0)}function Vt(t){return t=="[".charCodeAt(0)||t=="{".charCodeAt(0)}function ce(t){return t=="'".charCodeAt(0)}function Xt(t){return"0".charCodeAt(0)<=t&&t<="9".charCodeAt(0)}function ue(t){return t==Ft.charCodeAt(0)}function fe(t){return t==m.charCodeAt(0)}function le(t){return t==="null"||t==="undefined"||t=="true"||t=="false"}function ae(t){return t.indexOf("'")!=-1||t.indexOf("\\")!=-1}function de(t){const n=t.querySelector('script[type="qwik/json"]');let e=null;return t.dehydrate=()=>he(t),n&&(n.parentElement.removeChild(n),e=JSON.parse(n.textContent||"{}"),ye(e),ot(e,e)),e}function he(t){const n={};t.querySelectorAll("[q\\:obj]").forEach(r=>{const s=p(r).__qRefs__;xe(r),a(s),s.forEach((o,c)=>{n[c]=o.obj,ct(o,new Set,(u,f)=>n[u]=f)})});const e=t.createElement("script");e.setAttribute("type","qwik/json"),e.textContent=JSON.stringify(n,function(r,i){if(this===n)return i;if(r.startsWith("__"))return;const s=y(i);return s?m+s:i},"  "),t.body.appendChild(e),Te(t)}function ye(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const e=t[n];t[n]=Yn(e,n)}}function ot(t,n){if(t&&typeof t=="object"){if(Array.isArray(t))for(let e=0;e<t.length;e++){const r=t[e];typeof r=="string"&&r.startsWith(m)?t[e]=n[r.substring(m.length)]:ot(r,n)}else for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const r=t[e];typeof r=="string"&&r.startsWith(m)?t[e]=n[r.substring(m.length)]:ot(r,n)}}}function ct(t,n,e){if(t&&typeof t=="object"){if(n.has(t))return;if(n.add(t),Array.isArray(t))for(let r=0;r<t.length;r++)ct(t[r],n,e);else for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const i=t[r],s=y(i);s&&e(s,i),ct(i,n,e)}}}/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */const Ht=new Map;function x(t,n=!1){if(typeof t!="string")return t;const e=Ht.get(t);if(e!=null)return e;let r="";for(let i=0;i<t.length;i++){const s=t.charAt(i);pe(s)?r+=(i!=0||n?"-":"")+s.toLowerCase():r+=s}return Ht.set(t,r),r}function pe(t){return"A"<=t&&t<="Z"}const ut="q:obj";function ge(t,n,e){n.forEach((r,i)=>{const s=r.obj;e.has(r.obj)?r.isSub||U(n,y(s),s,t,!0,1):r.isSub&&(r.isSub=!1,Bt(r,n,i)),e.delete(s)}),e.forEach(r=>U(n,y(r),r,t,!0,1)),zt(t,n)}function zt(t,n){const e=[];n.forEach((r,i)=>{r.isSub&&(i="!"+i),r.count==1?e.push(i):e.push("#"+r.count,i)}),e.length?t.setAttribute(ut,e.join(" ")):t.removeAttribute(ut)}function _e(t,n){return{element:t,forEach(e){return n.forEach((r,i)=>{e(r.obj,i)})},get(e){const r=n.get(e);return r==null?void 0:r.obj},set(e,r){me(e)||(U(n,e,r,t,!1,1),zt(t,n))}}}function me(t){const n=t.charAt(0);return n==="#"||n==="&"}function U(t,n,e,r,i,s){a(n);let o=t.get(n);return e?(jn(e,r.ownerDocument),o?(o.count+=s,o.isSub=o.isSub||i):t.set(n,o={obj:e,count:s,isSub:i})):o&&(o=Bt(o,t,n)),o}function Bt(t,n,e){if(t.count--,t.count==0){n.delete(e);return}return t}function Ee(t,n){const e=Gt(t),r=t.getAttribute(ut);if(r){const i=r.split(" "),s=e.__qRefs__;let o=1;i.forEach(c=>{if(c.startsWith("#"))o=Number(c.substr(1));else{let u=!1;c.startsWith("!")&&(c=c.substr(1),u=!0);const f=n[c];U(s,c,f,t,u,o)}})}}const be="on:",Re="on$:",we="onDocument:",Ce="onDocument$:",Se="onWindow:",Ae="onWindow$:";function ft(t){return t.startsWith(be)||t.startsWith(we)||t.startsWith(Se)}function Oe(t){return t.startsWith(Re)||t.startsWith(Ce)||t.startsWith(Ae)}function Pe(t){return typeof t=="function"&&t.__brand__==="QRLFactory"}function qe(t,n,e){return lt(t,e).length===0?null:()=>{const i=Q(),s=lt(t,e);return Promise.all(s.map(async o=>{const c=await o;return i.qrl=c,c.symbolRef||(c.symbolRef=await G(t.__element__,c)),nt(i,c.symbolRef)}))}}function M(t,n,e,r){if(!r)return;e=e.replace("$:",":"),typeof r=="string"&&(r=L(r));const i=lt(t,e);if(Array.isArray(r))r.forEach(o=>M(t,n,e,o));else if(V(r)){if(r.capture==null){const c=r.captureRef;r.capture=c&&c.length?c.map(u=>se(u,n)):h}for(let c=0;c<i.length;c++){const u=i[c];!I(u)&&u.canonicalChunk===r.canonicalChunk&&u.symbol===r.symbol&&(i.splice(c,1),c--)}i.push(r)}else if(Pe(r))i.length===0&&M(t,n,e,r(t.__element__));else if(I(r)){const o=r.then(c=>(i.splice(i.indexOf(o),1),M(t,n,e,c),c));i.push(o)}else throw new Error(`Not QRLInternal: prop: ${e}; value: `+r);const s=x(e);t.__element__.setAttribute(s,Ie(i,n))}function lt(t,n){if(n in t)return t[n];const e=x(n),r=[],i=t.__element__;return(i.getAttribute(e)||"").split(`
`).forEach(s=>{s&&r.push(L(s,i))}),t[n]=r}function Ie(t,n){const e=n.element;return t.map(r=>I(r)?"":bt(r,e)).filter(r=>!!r).join(`
`)}Error.stackTraceLimit=9999;const at="__isHydrated__",dt="getProps";function Qe(t){const n=t.ownerDocument;if(!n[at]){n[at]=!0;const r=de(t.ownerDocument);r&&n.querySelectorAll(De).forEach(i=>{Ee(i,r)})}}function Te(t){t[at]=void 0}function xe(t){t[dt]=void 0}const Me="__qMap__",De="[q\\:obj]",Le=class{constructor(n,e,r){this.__element__=n,this.__qRefs__=e,this.__qMap__=r,this.__mutation__=!1,this.__self__=null}};function Gt(t){const n=new Map,e=_e(t,n),r=new Le(t,n,e);return t[dt]=r.__self__=new Proxy(r,{get:(i,s)=>{if(typeof s=="string"){if(s==="__mutation__"){const o=i.__mutation__;return i.__mutation__=!1,o}else{if(s==="__qMap__")return i.__qMap__;if(s=="__parent__"){const o=t.parentElement;return o&&p(o)}else{if(ft(s))return qe(r,e,s);if(s===J){const o=y(t);return R(o.charAt(0),"#"),"&"+o.substring(1)}}}return s in r?i[s]:r[s]=Kt(t,e,s)}},set:(i,s,o)=>{if(typeof s=="string"){if(s==="children")return!0;if(ft(s))M(r,e,s,o);else if(Oe(s))M(r,e,s.replace("$",""),_n(o));else if(s===":subscriptions")ge(t,n,o);else{o=Jt(o);const c=s in i?i[s]:i[s]=Kt(t,e,s);if(o!==c){const u=y(c);u&&e.set(u,null),Ne(t,e,s,i[s]=o),i.__mutation__=!0}}return!0}else throw new Error("Only string keys are supported")}})}function Kt(t,n,e){if(ft(e)){const r=x(e.split(":")[1]),i=t.getAttribute(r),s=[];return i==null||i.split(`
`).forEach(o=>{s.push(L(o))}),s}else{const r=x(e),i=t.getAttribute(r);return i===null?void 0:ie(i,n)}}function Ne(t,n,e,r){const i=x(e);if(e=="class")t.setAttribute("class",Zt(r,!0));else if(e=="style")t.setAttribute("style",Zt(r,!1));else if(e==="innerHTML"||e==="innerText")t.setAttribute(i,""),t[e]=r;else{const s=re(r,n);r===void 0?t.removeAttribute(i):t.setAttribute(i,s)}(e=="value"||e=="checked")&&t.tagName==="INPUT"&&(t[e]=r)}function Yt(t){return t.__mutation__}function Zt(t,n){if(t==null)return"";if(typeof t=="object"){let e="",r="";if(Array.isArray(t)){if(!n)throw qt(601,t,"style");for(let i=0;i<t.length;i++)e+=r+t[i],r=" "}else for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){const s=t[i];e+=n?s?r+i:"":r+i+":"+s,r=n?" ":";"}return e}return String(t)}function p(t){Qe(t);let n=t[dt];return n||(n=Gt(t)),n}function $e(t,n,...e){const r={children:arguments.length>2?tt(e):h};let i,s;for(s in n)s=="key"?i=n[s]:r[s]=n[s];return new k(t,r,i)}function vt(){const t=Q().hostElement;return a(t),t}function He(t){return z(t)}function ze(t){We(t,!1)}function Be(t,n){const e=typeof t=="string",r=e?t:"div",i=e?n:t;return function(o){const c=async u=>{const f=z(i),d=await ke(u,f),l=Object.assign(p(u),o),E=et(u);return nt(E,d,l)};return c.__brand__="QRLFactory",$e(r,Object.assign({"on:qRender":c},o))}}function ke(t,n){return n.symbolRef?Promise.resolve(n.symbolRef):Promise.resolve(null).then(()=>G(t,n))}function We(t,n){const e=z(t),r=Wn(e),i=vt();n&&i.setAttribute("q:sstyle",r),Vn(G(i,e).then(s=>{const o=i.ownerDocument,c=o.querySelector("head");if(c&&!c.querySelector(`style[q\\:style="${r}"]`)){const u=o.createElement("style");u.setAttribute("q:style",r),u.textContent=n?s.replace(/�/g,r):s,c.appendChild(u)}}))}function Je(){return Q().qrl||null}function Fe(){const t=Q().url;if(!t)throw new Error("Q-ERROR: no URL is associated with the execution context");return t}function Ge(){const t=Je()||L(decodeURIComponent(String(Fe())));if(t.captureRef==null){const e=p(vt())[Me];a(t.capture),t.captureRef=t.capture.map(r=>oe(r,e))}return t.captureRef}export{Tn as H,Be as c,Ve as j,He as o,Ue as q,Ge as u,ze as w};
