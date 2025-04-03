import{V as re,W as ne,X as se,n as oe,Y as ae,Z as O,_ as E,$ as F,a0 as P,P as w,l as _,v as T,p as I,a1 as ie,a2 as ce,F as k,k as v,f as b,r as N,a as g,b as M,x as Y,c as ue,t as le,a3 as fe,a4 as ye}from"./props-DH5iaWS8.js";import{y as ge,g as B}from"./index-CfOrKyLd.js";function me(t,e,...r){var s=t,n=oe,a;re(()=>{n!==(n=e())&&(a&&(ae(a),a=null),a=se(()=>n(s,...r)))},ne)}var de=Object.create,X=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertyNames,ve=Object.getPrototypeOf,be=Object.prototype.hasOwnProperty,_e=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ce=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of xe(e))!be.call(t,n)&&n!==r&&X(t,n,{get:()=>e[n],enumerable:!(s=pe(e,n))||s.enumerable});return t},Ee=(t,e,r)=>(r=t!=null?de(ve(t)):{},Ce(!t||!t.__esModule?X(r,"default",{value:t,enumerable:!0}):r,t)),Oe=_e(t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isEqual=function(){var e=Object.prototype.toString,r=Object.getPrototypeOf,s=Object.getOwnPropertySymbols?function(n){return Object.keys(n).concat(Object.getOwnPropertySymbols(n))}:Object.keys;return function(n,a){return function c(o,i,l){var f,m,u,y=e.call(o),R=e.call(i);if(o===i)return!0;if(o==null||i==null)return!1;if(l.indexOf(o)>-1&&l.indexOf(i)>-1)return!0;if(l.push(o,i),y!=R||(f=s(o),m=s(i),f.length!=m.length||f.some(function(S){return!c(o[S],i[S],l)})))return!1;switch(y.slice(8,-1)){case"Symbol":return o.valueOf()==i.valueOf();case"Date":case"Number":return+o==+i||+o!=+o&&+i!=+i;case"RegExp":case"Function":case"String":case"Boolean":return""+o==""+i;case"Set":case"Map":f=o.entries(),m=i.entries();do if(!c((u=f.next()).value,m.next().value,l))return!1;while(!u.done);return!0;case"ArrayBuffer":o=new Uint8Array(o),i=new Uint8Array(i);case"DataView":o=new Uint8Array(o.buffer),i=new Uint8Array(i.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(o.length!=i.length)return!1;for(u=0;u<o.length;u++)if((u in o||u in i)&&(u in o!=u in i||!c(o[u],i[u],l)))return!1;return!0;case"Object":return c(r(o),r(i),l);default:return!1}}(n,a,[])}}()});Ee(Oe());var Se=t=>t.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");const Ae=t=>t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),he=t=>Se(t.replace(/([A-Z])/g," $1").trim()),K=t=>Ae(he(t)),j="storybook-stories-extractor-context";function W(t){let e=E(t.isExtracting),r=E(t.register);return{get isExtracting(){return e},get register(){return r}}}function Ne(t){const{stories:e}=t,r=W({isExtracting:!0,register:s=>{e.set(s.exportName??K(s.name),s)}});O(j,r)}function we(){return F(j)||O(j,W({isExtracting:!1,register:()=>{}})),P(j)}const D="storybook-story-renderer-context";function Te(t){let e=w(E(t.currentStoryExportName)),r=w(E(t.args)),s=w(E(t.storyContext));function n(a){T(e,a.currentStoryExportName,!0),T(r,a.args,!0),T(s,a.storyContext,!0)}return{get args(){return _(r)},get storyContext(){return _(s)},get currentStoryExportName(){return _(e)},set:n}}function je(){const t=Te({currentStoryExportName:void 0,args:{},storyContext:{}});O(D,t)}function q(){return F(D)||je(),P(D)}const C="storybook-stories-template-snippet-context";function L(){let t=w(void 0);function e(r){T(t,r,!0)}return{get template(){return _(t)},set:e}}function Fe(){return F(C)||O(C,L()),P(C).template}function He(t){F(C)||O(C,L()),P(C).set(t)}var Pe=le('<p>No story rendered. See <a href="https://github.com/storybookjs/addon-svelte-csf#defining-stories" target="_blank">the docs</a> on how to define stories.</p>');function Re(t,e){I(e,!0);const r=ce(e,["$$slots","$$events","$$legacy","children","name","exportName","play"]),s=e.exportName??K(e.name),n=we(),a=q(),c=Fe(),o=ie(()=>!n.isExtracting&&a.currentStoryExportName===s);n.isExtracting&&n.register({children:e.children,name:e.name,exportName:s,play:e.play,...r});function i(u,y){y&&u.playFunction&&(u.playFunction.__play=y)}k(()=>{_(o)&&i(a.storyContext,e.play)});var l=v(),f=b(l);{var m=u=>{var y=v(),R=b(y);{var S=d=>{var A=v(),U=b(A);me(U,()=>e.children,()=>a.args,()=>a.storyContext),g(d,A)},z=(d,A)=>{{var U=p=>{c(p,()=>a.args,()=>a.storyContext)},G=(p,H)=>{{var Q=x=>{var h=v(),$=b(h);Y($,()=>a.storyContext.component,(ee,te)=>{te(ee,ue(()=>a.args))}),g(x,h)},V=x=>{var h=Pe();g(x,h)};N(p,x=>{a.storyContext.component?x(Q):x(V,!1)},H)}};N(d,p=>{c?p(U):p(G,!1)},A)}};N(R,d=>{e.children?d(S):d(z,!1)})}g(u,y)};N(f,u=>{_(o)&&u(m)})}g(t,l),M()}function Qe(t){return{Story:Re}}function Ue(t,e){I(e,!0),Ne(e.repository());var r=v(),s=b(r);Y(s,()=>e.Stories,(n,a)=>{a(n,{})}),g(t,r),M()}function ke(t){switch(typeof t){case"number":case"symbol":return!1;case"string":return t.includes(".")||t.includes("[")||t.includes("]")}}function De(t){return Object.is(t,-0)?"-0":t.toString()}function Ie(t){const e=[],r=t.length;if(r===0)return e;let s=0,n="",a="",c=!1;for(t.charCodeAt(0)===46&&(e.push(""),s++);s<r;){const o=t[s];a?o==="\\"&&s+1<r?(s++,n+=t[s]):o===a?a="":n+=o:c?o==='"'||o==="'"?a=o:o==="]"?(c=!1,e.push(n),n=""):n+=o:o==="["?(c=!0,n&&(e.push(n),n="")):o==="."?n&&(e.push(n),n=""):n+=o,s++}return n&&e.push(n),e}function Z(t,e,r){if(t==null)return r;switch(typeof e){case"string":{const s=t[e];return s===void 0?ke(e)?Z(t,Ie(e),r):r:s}case"number":case"symbol":{typeof e=="number"&&(e=De(e));const s=t[e];return s===void 0?r:s}default:{if(Array.isArray(e))return Me(t,e,r);Object.is(e==null?void 0:e.valueOf(),-0)?e="-0":e=String(e);const s=t[e];return s===void 0?r:s}}}function Me(t,e,r){if(e.length===0)return r;let s=t;for(let n=0;n<e.length;n++){if(s==null)return r;s=s[e[n]]}return s===void 0?r:s}const{addons:Ye}=__STORYBOOK_MODULE_PREVIEW_API__,Be=Ye.getChannel(),Xe=t=>{const{storyContext:e}=t;if(Ke(e))return;const r=We({code:e.parameters.__svelteCsf.rawCode,args:t.args});setTimeout(()=>{Be.emit(ge,{id:e.id,args:e.unmappedArgs,source:r})})},Ke=t=>{var n;const e=(n=t==null?void 0:t.parameters.docs)==null?void 0:n.source,r=t==null?void 0:t.parameters.__isArgsStory;return(t==null?void 0:t.parameters.__svelteCsf.rawCode)?(e==null?void 0:e.type)===B.DYNAMIC?!1:!r||(e==null?void 0:e.code)||(e==null?void 0:e.type)===B.CODE:!0},We=({code:t,args:e})=>{const r=Object.entries(e??{}).map(([a,c])=>Le(a,c)).filter(a=>a);let s=r.join(" ");return s.length>50&&(s=`
  ${r.join(`
  `)}
`),t.replaceAll("{...args}",s).replace(/args(?:[\w\d_$\.\?\[\]"'])+/g,a=>{const c=a.replaceAll("?",""),o=Z({args:e},c);return J(o)})},qe=t=>{var r;const e=((r=t.getMockName)==null?void 0:r.call(t))??t.name;return e&&e!=="spy"?e:"() => {}"},J=t=>{var e;return typeof t=="object"&&t[Symbol.for("svelte.snippet")]?"snippet":typeof t=="function"?qe(t):(e=JSON.stringify(t,null,1))==null?void 0:e.replace(/\n/g,"").replace(new RegExp("(?<!\\s)([}\\]])$")," $1")},Le=(t,e)=>{if(e==null)return null;if(e===!0)return t;const r=J(e);return typeof e=="string"?`${t}=${r}`:`${t}={${r}}`};function Ze(t,e){I(e,!0);const r=q();k(()=>{r.set({currentStoryExportName:e.exportName,args:e.args,storyContext:e.storyContext})}),k(()=>{Xe({args:e.args,storyContext:e.storyContext})});var s=v(),n=b(s);Y(n,()=>e.Stories,(a,c)=>{c(a,{})}),g(t,s),M()}const Je=document.createDocumentFragment?()=>document.createDocumentFragment():()=>document.createElement("div"),Ve=(t,e)=>{const r={stories:new Map};try{const n=fe(Ue,{target:Je(),props:{Stories:t,repository:()=>r}});ye(n)}catch(n){console.error(`Error in mounting stories ${n.toString()}`,n)}const s={};for(const[n,a]of r.stories){const c={...a,render:(i,l)=>({Component:Ze,props:{exportName:n,Stories:t,storyContext:l,args:i}})},o=e.play??a.play;o&&(c.play=i=>{var f;const l=(f=i.playFunction)==null?void 0:f.__play;return l?l(i):o(i)}),s[n]=c}return s};export{me as a,Ve as c,Qe as d,He as s};
