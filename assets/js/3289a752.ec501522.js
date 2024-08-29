"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93744],{79393:(e,r,n)=>{n.d(r,{A:()=>s});n(63696);var t=n(11750);const a={tabItem:"tabItem_wHwb"};var o=n(62540);function s(e){let{children:r,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:r})}},9942:(e,r,n)=>{n.d(r,{A:()=>j});var t=n(63696),a=n(11750),o=n(95162),s=n(49940),i=n(35367),l=n(60271),c=n(55476),u=n(95095);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function g(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,o=m(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[c,d]=p({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,u.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=c??g;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(11173);const v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=n(62540);function x(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),a=i[n].value;a!==t&&(c(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function k(e){let{lazy:r,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function y(e){const r=g(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...r,...e}),(0,b.jsx)(k,{...r,...e})]})}function j(e){const r=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(r))}},71111:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(62540),a=n(43023),o=n(9942),s=n(79393);const i={sidebar_position:5,title:"Verifying your tools are using Podman",description:"Verify that your tools are using Podman rather than Docker.",keywords:["podman desktop","podman","containers","migrating","docker"],tags:["migrating-from-docker"]},l="Verifying that your tools are using Podman",c={id:"migrating-from-docker/verifying-your-tools-are-using-podman",title:"Verifying your tools are using Podman",description:"Verify that your tools are using Podman rather than Docker.",source:"@site/docs/migrating-from-docker/verifying-your-tools-are-using-podman.md",sourceDirName:"migrating-from-docker",slug:"/migrating-from-docker/verifying-your-tools-are-using-podman",permalink:"/docs/migrating-from-docker/verifying-your-tools-are-using-podman",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/migrating-from-docker/verifying-your-tools-are-using-podman.md",tags:[{inline:!0,label:"migrating-from-docker",permalink:"/docs/tags/migrating-from-docker"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Verifying your tools are using Podman",description:"Verify that your tools are using Podman rather than Docker.",keywords:["podman desktop","podman","containers","migrating","docker"],tags:["migrating-from-docker"]},sidebar:"mySidebar",previous:{title:"Emulating Docker CLI with Podman",permalink:"/docs/migrating-from-docker/emulating-docker-cli-with-podman"},next:{title:"Containers",permalink:"/docs/containers/"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4}];function m(e){const r={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"verifying-that-your-tools-are-using-podman",children:"Verifying that your tools are using Podman"})}),"\n",(0,t.jsx)(r.p,{children:"When you have configured your host to use Podman rather then Docker, consider verifying your setup works as intended."}),"\n",(0,t.jsx)(r.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Docker service is stopped, or not installed."}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/migrating-from-docker/importing-saved-containers",children:"Saved containers are imported to Podman"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/docs/migrating-from-docker/using-the-docker_host-environment-variable",children:["The ",(0,t.jsx)(r.code,{children:"DOCKER_HOST"})," environment variable is set"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/docs/migrating-from-docker/using-podman-mac-helper",children:["On macOS, the ",(0,t.jsx)(r.code,{children:"podman-mac-helper"})," service is running"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/migrating-from-docker/emulating-docker-cli-with-podman",children:"Podman is emulating Docker CLI"})}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"The Docker socket replies successfully for listing all containers:"}),"\n",(0,t.jsxs)(o.A,{groupId:"operating-systems",children:[(0,t.jsx)(s.A,{value:"win",label:"Windows",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell-session",children:'$ curl --unix-socket npipe:////./pipe/docker_engine "http:/v1.41/containers/json?all=true"\n'})})}),(0,t.jsx)(s.A,{value:"mac",label:"macOS",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell-session",children:'$ curl --unix-socket /var/run/docker.sock "http:/v1.41/containers/json?all=true"\n'})})}),(0,t.jsx)(s.A,{value:"linux",label:"Linux",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell-session",children:'$ curl --unix-socket /var/run/docker.sock "http:/v1.41/containers/json?all=true"\n'})})})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Podman commands run successfully when redirected to the Docker socket:"}),"\n",(0,t.jsxs)(o.A,{groupId:"operating-systems",children:[(0,t.jsx)(s.A,{value:"win",label:"Windows",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell-session",children:"$ CONTAINER_HOST=npipe:////./pipe/docker_engine podman ps\n"})})}),(0,t.jsx)(s.A,{value:"mac",label:"macOS",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell-session",children:"$ CONTAINER_HOST=unix:///var/run/docker.sock podman ps\n"})})}),(0,t.jsx)(s.A,{value:"linux",label:"Linux",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell-session",children:"$ CONTAINER_HOST=unix:///var/run/docker.sock podman ps\n"})})})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},43023:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(63696);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);