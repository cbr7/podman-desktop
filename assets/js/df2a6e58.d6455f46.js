"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37683],{95823:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=s(24246),o=s(71670);const t={},r="Function: listInfos()",c={id:"namespaces/containerEngine/functions/listInfos",title:"Function: listInfos()",description:"listInfos(options?): Promise \\",source:"@site/api/namespaces/containerEngine/functions/listInfos.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/listInfos",permalink:"/api/namespaces/containerEngine/functions/listInfos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"listImages",permalink:"/api/namespaces/containerEngine/functions/listImages"},next:{title:"listNetworks",permalink:"/api/namespaces/containerEngine/functions/listNetworks"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Source",id:"source",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"function-listinfos",children:"Function: listInfos()"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"listInfos"}),"(",(0,i.jsx)(e.code,{children:"options"}),"?): ",(0,i.jsx)(e.code,{children:"Promise"})," <",(0,i.jsx)(e.a,{href:"/api/interfaces/ContainerEngineInfo",children:(0,i.jsx)(e.code,{children:"ContainerEngineInfo"})}),"[]>"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"List the engines information."}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(e.p,{children:["\u2022 ",(0,i.jsx)(e.strong,{children:"options?"}),": ",(0,i.jsx)(e.a,{href:"/api/interfaces/ListInfosOptions",children:(0,i.jsx)(e.code,{children:"ListInfosOptions"})})]}),"\n",(0,i.jsx)(e.p,{children:"optional options for listing information"}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Promise"})," <",(0,i.jsx)(e.a,{href:"/api/interfaces/ContainerEngineInfo",children:(0,i.jsx)(e.code,{children:"ContainerEngineInfo"})}),"[]>"]}),"\n",(0,i.jsx)(e.p,{children:"A promise resolving to an array of engine information."}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"// Example 1: List all engine information when no specific provider is provided.\nconst infos = await listInfos();\nconsole.log(infos);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"// Example 2: List information for a specific provider.\nconst provider = provider.getContainerConnections().find(connection => connection.connection.status() === 'started');\nconst info = await listInfos({ provider: provider.connection });\nconsole.log(info);\n"})}),"\n",(0,i.jsx)(e.h2,{id:"source",children:"Source"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/cbr7/podman-desktop/blob/a9622d7a86166c2331737eb747e61341a20ea0a7/packages/extension-api/src/extension-api.d.ts#L3381",children:"packages/extension-api/src/extension-api.d.ts:3381"})})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},71670:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>r});var i=s(27378);const o={},t=i.createContext(o);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);