var i=Object.defineProperty;var m=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>m(e,typeof t!="symbol"?t+"":t,o);import{p,i as c,b as l,n as d,c as u,h as f}from"./props-k-DKAmas.js";import"./ErrorMessage-FgbKl_KM.js";import"./Button-DxUvuStd.js";import{c as n,d as _,f as T}from"./Table-DNWeeKMg.js";import"./fa-layers-text.svelte_svelte_type_style_lang-BANmQInF.js";import"./LinearProgress-Djxph4po.js";import"./Spinner-BEXYDje-.js";import"./EmptyScreen-BuvfP6VJ.js";import{d as b,c as w,s as h}from"./create-runtime-stories-BsI3dLsw.js";import"./attributes-BtJFUb5b.js";import"./index-client-DAAOfKMj.js";import"./index-B5O8svG2.js";import"./StarIcon-CHZdPfdV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtmeDzJ6.js";import"./index-CfOrKyLd.js";class s{constructor(t,o){a(this,"title");a(this,"info");this.title=t,this.info=o}}class g{constructor(t){a(this,"info");this.info=t}}const C=(e,t,o=d)=>{n(e,u(()=>f(t==null?void 0:t(),["_children"])))},{Story:D,meta:x}=b({component:n,title:"Table",tags:["autodocs"],args:{},parameters:{docs:{description:{component:"These are the stories for the `Table` component.\nAllow to display a table."}}}}),y=[{name:"John",duration:new Date().getTime()-6e5},{name:"Henry",duration:new Date().getTime()},{name:"Charlie",duration:new Date().getTime()-36e5}],B=new s("Name",{renderMapping:e=>e.name,renderer:_}),M=new s("Duration",{renderMapping:e=>e.duration?new Date(e.duration):void 0,renderer:T}),S=[B,M],v=e=>!0,R=new g({selectable:v,disabledText:"cannot be selected"});function r(e,t){p(t,!1),h(C),c(),D(e,{name:"Basic",args:{data:y,columns:S,row:R},parameters:{__svelteCsf:{rawCode:"<Table {...args}></Table>"}}}),l()}r.__docgen={keywords:[],data:[],name:"Table.stories.svelte"};const k=w(r,x),W=["Basic"],X=k.Basic;export{X as Basic,W as __namedExportsOrder,x as default};
