"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17148],{40441:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>u});var t=a(5533),s=a(62540),r=a(43023);a(65457),a(97265);const o={title:"Unlock WebAssembly on macOS & Windows",description:"Spinning a OCI container image containing a WebAssembly/Wasm workload on macOS or Windows should be as simple as running any other OCI image.",slug:"wasm-workloads-on-macos-and-windows-with-podman",authors:["benoitf"],tags:["podman-desktop","wasm","wasi","WebAssembly"],hide_table_of_contents:!1,image:"/img/blog/run-webassembly-wasm-workloads-windows-and-macos/webassembly-podman.webp"},l=void 0,i={authorsImageUrls:[void 0]},u=[];function c(e){const n={img:"img",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Seamlessly run WebAssembly/Wasm binaries on macOS and Windows"}),"\n",(0,s.jsx)(n.p,{children:"You might have heard excitement recently about Wasm and WASI. Imagine a world where you can effortlessly run Wasm binaries and distribute them using Open Container Initiative (OCI) container images \u2013 a singular image deployable across multiple architectures."}),"\n",(0,s.jsx)(n.p,{children:"Though the concept seemed straightforward, accomplishing this task proved to be quite challenging, particularly on macOS and Windows. The complexity comes from the additional virtual machine running Linux. This machine needs all of the dependencies and prerequisites correctly setup."}),"\n",(0,s.jsx)(n.p,{children:"The wait is over. Our blog post unveils the solution, guiding you through the process of enabling Wasm workloads on both macOS and Windows."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"hero",src:a(957).A+"",width:"960",height:"480"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},97265:(e,n,a)=>{a.d(n,{A:()=>o});a(63696);var t=a(11750);const s={tabItem:"tabItem_wHwb"};var r=a(62540);function o(e){let{children:n,hidden:a,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:a,children:n})}},65457:(e,n,a)=>{a.d(n,{A:()=>I});var t=a(63696),s=a(11750),r=a(93707),o=a(49519),l=a(83604),i=a(95196),u=a(76229),c=a(88030);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function b(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=m(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[u,d]=p({queryString:a,groupId:s}),[h,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),w=(()=>{const e=u??h;return b({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{w&&i(w)}),[w]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=a(95200);const w={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=a(62540);function v(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,a=i.indexOf(n),s=l[a].value;s!==t&&(u(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...r,className:(0,s.A)("tabs__item",w.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=h(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",w.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function I(e){const n=(0,g.A)();return(0,f.jsx)(k,{...e,children:d(e.children)},String(n))}},957:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/webassembly-podman-e40f6760fbeda109aa109b4a4d926f40.webp"},43023:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var t=a(63696);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},5533:e=>{e.exports=JSON.parse('{"permalink":"/blog/wasm-workloads-on-macos-and-windows-with-podman","source":"@site/blog/2024-01-29-run-webassembly-wasm-workloads-windows-and-macos.md","title":"Unlock WebAssembly on macOS & Windows","description":"Spinning a OCI container image containing a WebAssembly/Wasm workload on macOS or Windows should be as simple as running any other OCI image.","date":"2024-01-29T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"wasm","permalink":"/blog/tags/wasm"},{"inline":true,"label":"wasi","permalink":"/blog/tags/wasi"},{"inline":true,"label":"WebAssembly","permalink":"/blog/tags/web-assembly"}],"readingTime":10.695,"hasTruncateMarker":true,"authors":[{"name":"Florent Benoit","title":"Principal Software Engineer","url":"https://github.com/benoitf","imageURL":"https://github.com/benoitf.png","key":"benoitf","page":null}],"frontMatter":{"title":"Unlock WebAssembly on macOS & Windows","description":"Spinning a OCI container image containing a WebAssembly/Wasm workload on macOS or Windows should be as simple as running any other OCI image.","slug":"wasm-workloads-on-macos-and-windows-with-podman","authors":["benoitf"],"tags":["podman-desktop","wasm","wasi","WebAssembly"],"hide_table_of_contents":false,"image":"/img/blog/run-webassembly-wasm-workloads-windows-and-macos/webassembly-podman.webp"},"unlisted":false,"prevItem":{"title":"Podman Desktop Wins 2024 DEVIES Award","permalink":"/blog/podman-desktop-wins-devies-award"},"nextItem":{"title":"Podman Desktop 1.7 Release","permalink":"/blog/podman-desktop-release-1.7"}}')}}]);