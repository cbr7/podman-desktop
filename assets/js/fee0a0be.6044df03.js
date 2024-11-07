"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75315],{44124:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=i(62540),d=i(43023);const r={},c="Interface: ContainerEngineInfo",o={id:"interfaces/ContainerEngineInfo",title:"Interface: ContainerEngineInfo",description:"Resources information about a container engine",source:"@site/api/interfaces/ContainerEngineInfo.md",sourceDirName:"interfaces",slug:"/interfaces/ContainerEngineInfo",permalink:"/api/interfaces/ContainerEngineInfo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"ContainerCreateResult",permalink:"/api/interfaces/ContainerCreateResult"},next:{title:"ContainerInfo",permalink:"/api/interfaces/ContainerInfo"}},t={},a=[{value:"Properties",id:"properties",level:2},{value:"cpuIdle?",id:"cpuidle",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"cpus?",id:"cpus",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"diskSize?",id:"disksize",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"diskUsed?",id:"diskused",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"engineId",id:"engineid",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"engineName",id:"enginename",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"engineType",id:"enginetype",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"memory?",id:"memory",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"memoryUsed?",id:"memoryused",level:3},{value:"Defined in",id:"defined-in-8",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-containerengineinfo",children:"Interface: ContainerEngineInfo"})}),"\n",(0,s.jsx)(n.p,{children:"Resources information about a container engine"}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"cpuidle",children:"cpuIdle?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cpuIdle"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Percentage of idle CPUs (for Podman engines only)"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/40c3807845576a8e31bb649e208d10fd1e60bc9f/packages/extension-api/src/extension-api.d.ts#L3631",children:"packages/extension-api/src/extension-api.d.ts:3631"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"cpus",children:"cpus?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cpus"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"number of CPUs available for the container engine"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/40c3807845576a8e31bb649e208d10fd1e60bc9f/packages/extension-api/src/extension-api.d.ts#L3627",children:"packages/extension-api/src/extension-api.d.ts:3627"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"disksize",children:"diskSize?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"diskSize"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Quantity of disk space available for the container engine (for Podman engines only)"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/40c3807845576a8e31bb649e208d10fd1e60bc9f/packages/extension-api/src/extension-api.d.ts#L3643",children:"packages/extension-api/src/extension-api.d.ts:3643"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"diskused",children:"diskUsed?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"diskUsed"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Quantity of disk space used by the container engine (for Podman engines only)"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/40c3807845576a8e31bb649e208d10fd1e60bc9f/packages/extension-api/src/extension-api.d.ts#L3647",children:"packages/extension-api/src/extension-api.d.ts:3647"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"engineid",children:"engineId"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"engineId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"unique id identifying the container engine"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/40c3807845576a8e31bb649e208d10fd1e60bc9f/packages/extension-api/src/extension-api.d.ts#L3615",children:"packages/extension-api/src/extension-api.d.ts:3615"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"enginename",children:"engineName"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"engineName"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"name of the container engine"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/40c3807845576a8e31bb649e208d10fd1e60bc9f/packages/extension-api/src/extension-api.d.ts#L3619",children:"packages/extension-api/src/extension-api.d.ts:3619"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"enginetype",children:"engineType"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"engineType"}),": ",(0,s.jsx)(n.code,{children:'"docker"'})," | ",(0,s.jsx)(n.code,{children:'"podman"'})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"engine type, either 'podman' or 'docker'"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/40c3807845576a8e31bb649e208d10fd1e60bc9f/packages/extension-api/src/extension-api.d.ts#L3623",children:"packages/extension-api/src/extension-api.d.ts:3623"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"memory",children:"memory?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"memory"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Quantity of memory available for the container engine"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/40c3807845576a8e31bb649e208d10fd1e60bc9f/packages/extension-api/src/extension-api.d.ts#L3635",children:"packages/extension-api/src/extension-api.d.ts:3635"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"memoryused",children:"memoryUsed?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"memoryUsed"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Quantity of memory used by the container engine (for Podman engines only)"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/40c3807845576a8e31bb649e208d10fd1e60bc9f/packages/extension-api/src/extension-api.d.ts#L3639",children:"packages/extension-api/src/extension-api.d.ts:3639"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var s=i(63696);const d={},r=s.createContext(d);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);