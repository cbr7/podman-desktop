"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77401],{23783:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=i(24246),r=i(71670);const t={},s="Interface: TelemetryLoggerOptions",d={id:"interfaces/TelemetryLoggerOptions",title:"Interface: TelemetryLoggerOptions",description:"Options for creating a TelemetryLogger",source:"@site/api/interfaces/TelemetryLoggerOptions.md",sourceDirName:"interfaces",slug:"/interfaces/TelemetryLoggerOptions",permalink:"/api/interfaces/TelemetryLoggerOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"TelemetryLogger",permalink:"/api/interfaces/TelemetryLogger"},next:{title:"TelemetrySender",permalink:"/api/interfaces/TelemetrySender"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"additionalCommonProperties?",id:"additionalcommonproperties",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ignoreBuiltInCommonProperties?",id:"ignorebuiltincommonproperties",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ignoreUnhandledErrors?",id:"ignoreunhandlederrors",level:3},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"interface-telemetryloggeroptions",children:"Interface: TelemetryLoggerOptions"}),"\n",(0,o.jsxs)(n.p,{children:["Options for creating a ",(0,o.jsx)(n.a,{href:"/api/interfaces/TelemetryLogger",children:"TelemetryLogger"})]}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h3,{id:"additionalcommonproperties",children:"additionalCommonProperties?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"readonly"})," ",(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"additionalCommonProperties"}),": ",(0,o.jsx)(n.code,{children:"Record"}),"<",(0,o.jsx)(n.code,{children:"string"}),", ",(0,o.jsx)(n.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Any additional common properties which should be injected into the data object."}),"\n",(0,o.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/7957600bb51470e7420d57e1664c0d46377105be/packages/extension-api/src/extension-api.d.ts#L4243",children:"packages/extension-api/src/extension-api.d.ts:4243"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"ignorebuiltincommonproperties",children:"ignoreBuiltInCommonProperties?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"readonly"})," ",(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"ignoreBuiltInCommonProperties"}),": ",(0,o.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Whether or not you want to avoid having the built-in common properties such as os, extension name, etc injected into the data object.\nDefaults to ",(0,o.jsx)(n.code,{children:"false"})," if not defined."]}),"\n",(0,o.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/7957600bb51470e7420d57e1664c0d46377105be/packages/extension-api/src/extension-api.d.ts#L4231",children:"packages/extension-api/src/extension-api.d.ts:4231"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"ignoreunhandlederrors",children:"ignoreUnhandledErrors?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"readonly"})," ",(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"ignoreUnhandledErrors"}),": ",(0,o.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Whether or not unhandled errors on the extension host caused by your extension should be logged to your sender.\nDefaults to ",(0,o.jsx)(n.code,{children:"false"})," if not defined."]}),"\n",(0,o.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/7957600bb51470e7420d57e1664c0d46377105be/packages/extension-api/src/extension-api.d.ts#L4237",children:"packages/extension-api/src/extension-api.d.ts:4237"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>s});var o=i(27378);const r={},t=o.createContext(r);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);