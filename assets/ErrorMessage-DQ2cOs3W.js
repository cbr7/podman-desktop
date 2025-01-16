import{P as Y,o as G,p as I,q as t,i as J,r as x,e as T,a as b,b as K,t as w,Q as Z,R as $,j as d,s as q,g as N,v as z,k as Q,f as W,w as C,l as H}from"./props-Bhco7X2I.js";import{b as F,t as s}from"./class-CNFtAqei.js";import{o as ee}from"./index-client-D4oa2Bs8.js";import{h as A}from"./index-A764_bBz.js";import{s as te,a as B,F as D}from"./fa-layers-text.svelte_svelte_type_style_lang-C3dHod3N.js";const P=ae();function ae(){const v=Y(!1);return window.addEventListener("tooltip-show",()=>{P.set(!1)}),window.addEventListener("tooltip-hide",()=>{P.set(!0)}),v}var le=w('<div aria-label="tooltip"> </div>'),ie=w('<div class="inline-block rounded-md bg-[var(--pd-tooltip-bg)] text-[var(--pd-tooltip-text)] border-[1px] border-[var(--pd-tooltip-border)]" aria-label="tooltip"><!></div>'),oe=w('<div class="relative inline-block"><span><!></span> <div class="whitespace-nowrap absolute tooltip opacity-0 inline-block transition-opacity duration-150 ease-in-out pointer-events-none text-sm z-[60] svelte-1ln5cwi"><!> <!></div></div>');function O(v,e){const m=te(e),l=G(e,["children","$$slots","$$events","$$legacy"]);I(e,!1);const[_,h]=Z(),u=()=>$(P,"$tooltipHidden",_);let p=t(e,"tip",8,void 0),g=t(e,"top",8,!1),k=t(e,"topLeft",8,!1),V=t(e,"topRight",8,!1),L=t(e,"right",8,!1),E=t(e,"bottom",8,!1),r=t(e,"bottomLeft",8,!1),i=t(e,"bottomRight",8,!1),f=t(e,"left",8,!1);J();var c=oe(),o=d(c),M=d(o);B(M,e,"default",{});var a=q(o,2),j=d(a);{var S=n=>{var y=le(),R=d(y);T(()=>{F(y,`inline-block py-2 px-4 rounded-md bg-[var(--pd-tooltip-bg)] text-[var(--pd-tooltip-text)] border-[1px] border-[var(--pd-tooltip-border)] ${l.class??""} svelte-1ln5cwi`),N(R,p())}),b(n,y)};x(j,n=>{p()&&!u()&&n(S)})}var U=q(j,2);{var X=n=>{var y=ie(),R=d(y);B(R,e,"tip",{}),b(n,y)};x(U,n=>{m.tip&&!p()&&!u()&&n(X)})}T(()=>{F(o,`group tooltip-slot ${l.class??""} svelte-1ln5cwi`),s(a,"left",f()),s(a,"right",L()),s(a,"bottom",E()),s(a,"top",g()),s(a,"top-left",k()),s(a,"top-right",V()),s(a,"bottom-left",r()),s(a,"bottom-right",i())}),b(v,c),K(),h()}O.__docgen={keywords:[],data:[{name:"tip",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"top",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"topLeft",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"topRight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"right",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"bottom",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"bottomLeft",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"bottomRight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"left",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"Tooltip.svelte"};var se=w('<div><!> <div role="alert" aria-label="Error Message Content" class="ml-2"> </div></div>');function re(v,e){const m=G(e,["children","$$slots","$$events","$$legacy"]);I(e,!1);let l=t(e,"error",8),_=t(e,"icon",8,!1),h=t(e,"wrapMessage",8,!1),u=C(""),p=C(!1),g=C(!1);ee(()=>{h()?(z(u,"w-max max-w-[650px] overflow-hidden text-ellipsis text-wrap"),z(p,!0)):z(g,!0)}),J();var k=Q(),V=W(k);{var L=r=>{var i=Q(),f=W(i);{var c=o=>{O(o,{get left(){return H(p)},get top(){return H(g)},get tip(){return l()},get class(){return H(u)},children:(M,a)=>{D(M,{size:"1.1x",get class(){return`cursor-pointer text-[var(--pd-state-error)] ${m.class??""}`},icon:A})},$$slots:{default:!0}})};x(f,o=>{l()!==void 0&&l()!==""&&o(c)})}b(r,i)},E=r=>{var i=se(),f=d(i);D(f,{size:"1.1x",class:"cursor-pointer text-[var(--pd-state-error)]",icon:A});var c=q(f,2),o=d(c);T(()=>{F(i,`text-[var(--pd-state-error)] p-1 flex flex-row items-center ${m.class??""}`),s(i,"opacity-0",l()===void 0||l()===""),N(o,l())}),b(r,i)};x(V,r=>{_()?r(L):r(E,!1)})}b(v,k),K()}re.__docgen={keywords:[],data:[{name:"error",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"wrapMessage",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ErrorMessage.svelte"};export{re as E,O as T};