import{o as Z,p as $,q as l,v as b,i as ee,r as v,k as q,f as A,l as p,w as te,a as r,e as k,g as f,b as ae,t as m,x as g,j as i,s as n}from"./props-vtZMus9y.js";import{s as se,F as B,a as I}from"./fa-layers-text.svelte_svelte_type_style_lang-CmCHh63G.js";import{b as ie,s as N,t as le}from"./class-3Dx1Kipy.js";import{c as ne,o as de,b as re}from"./index-client-CSoksRl8.js";import{g as oe}from"./index-D45Brjt-.js";import{i as ce,B as ve}from"./Button-BvvnsJCv.js";var ye=m('<span class="text-[var(--pd-details-empty-sub-header)]"> </span>'),pe=m('<div class="flex flex-row bg-[var(--pd-details-empty-cmdline-bg)] items-center justify-between rounded-sm p-3 mt-4"><div class="font-mono text-[var(--pd-details-empty-cmdline-text)]" data-testid="copyTextDivElement"> </div> <!></div>'),fe=m('<div class="py-2"><!></div>'),me=m('<div><div class="flex flex-col h-full justify-center text-center space-y-3"><div class="flex justify-center text-[var(--pd-details-empty-icon)] py-2"><!></div> <h1 class="text-xl text-[var(--pd-details-empty-header)]"> </h1> <!> <span class="text-[var(--pd-details-empty-sub-header)] max-w-[800px] text-pretty mx-2"> </span> <!> <!> <!></div></div>');function ue(P,t){const S=se(t),u=Z(t,["children","$$slots","$$events","$$legacy"]);$(t,!1);let x=l(t,"icon",8),G=l(t,"title",8,"No title"),H=l(t,"message",8,"Message"),h=l(t,"detail",8,""),w=l(t,"commandline",8,""),J=l(t,"hidden",8,!1),C=g(!1),E=g(!1);const K=ne();let L=l(t,"onClick",8,a=>{K("click",a)});de(()=>{ce(x())&&b(C,!0),b(E,!0)});function O(){var e;const a=(e=p(_))==null?void 0:e.textContent;a&&L()(a)}let _=g();ee();var d=me(),Q=i(d),V=i(Q),R=i(V);v(R,()=>p(E),a=>{var e=q(),s=A(e);v(s,()=>p(C),o=>{B(o,{get icon(){return x()},size:"4x"})},o=>{var y=q(),c=A(y);te(c,x,(T,Y)=>{Y(T,{size:"55"})}),r(o,y)}),r(a,e)});var j=n(V,2),U=i(j),z=n(j,2);I(z,t,"upperContent",{});var D=n(z,2),W=i(D),F=n(D,2);v(F,h,a=>{var e=ye(),s=i(e);k(()=>f(s,h())),r(a,e)});var M=n(F,2);v(M,w,a=>{var e=pe(),s=i(e),o=i(s);re(s,c=>b(_,c),()=>p(_));var y=n(s,2);ve(y,{title:"Copy To Clipboard",class:"ml-5",type:"link",$$events:{click:O},children:(c,T)=>{B(c,{class:"h-5 w-5 cursor-pointer text-xl text-[var(--pd-button-primary-bg)]",icon:oe})},$$slots:{default:!0}}),k(()=>f(o,w())),r(a,e)});var X=n(M,2);v(X,()=>S,a=>{var e=fe(),s=i(e);I(s,t,"default",{}),r(a,e)}),k(()=>{ie(d,`flex flex-row w-full h-full justify-center ${(u.class||"")??""}`),N(d,"style",u.style),N(d,"aria-label",u["aria-label"]),le(d,"hidden",J()),f(U,G()),f(W,H())}),r(P,d),ae()}ue.__docgen={keywords:[],data:[{name:"icon",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"No title"'},{name:"message",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Message"'},{name:"detail",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"commandline",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"hidden",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"onClick",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(text: string) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"EmptyScreen.svelte"};export{ue as E};
