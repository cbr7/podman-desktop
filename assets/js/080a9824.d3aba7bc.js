"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51023],{75569:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"interfaces/ImageFilesystemLayer","title":"Interface: ImageFilesystemLayer","description":"a filesystem layer of an image as defined by spec","source":"@site/api/interfaces/ImageFilesystemLayer.md","sourceDirName":"interfaces","slug":"/interfaces/ImageFilesystemLayer","permalink":"/api/interfaces/ImageFilesystemLayer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ImageFileSymlink","permalink":"/api/interfaces/ImageFileSymlink"},"next":{"title":"ImageFilesystemLayers","permalink":"/api/interfaces/ImageFilesystemLayers"}}');var t=n(62540),d=n(43023);const c={},a="Interface: ImageFilesystemLayer",r={},o=[{value:"Properties",id:"properties",level:2},{value:"createdBy?",id:"createdby",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"files?",id:"files",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"opaqueWhiteouts?",id:"opaquewhiteouts",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"whiteouts?",id:"whiteouts",level:3},{value:"Defined in",id:"defined-in-4",level:4}];function l(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"interface-imagefilesystemlayer",children:"Interface: ImageFilesystemLayer"})}),"\n",(0,t.jsxs)(i.p,{children:["a filesystem layer of an image as defined by ",(0,t.jsx)(i.a,{href:"https://github.com/opencontainers/image-spec/blob/main/spec.md",children:"spec"})]}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(i.h3,{id:"createdby",children:"createdBy?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"createdBy"}),": ",(0,t.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"the command which created the layer"}),"\n",(0,t.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/cbr7/podman-desktop/blob/cc0331acdd073941c99795a2cab592590b5b3b4f/packages/extension-api/src/extension-api.d.ts#L897",children:"packages/extension-api/src/extension-api.d.ts:897"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"files",children:"files?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"files"}),": ",(0,t.jsx)(i.a,{href:"/api/interfaces/ImageFile",children:(0,t.jsx)(i.code,{children:"ImageFile"})}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"files indicate the paths of the files added or modified in the layer"}),"\n",(0,t.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/cbr7/podman-desktop/blob/cc0331acdd073941c99795a2cab592590b5b3b4f/packages/extension-api/src/extension-api.d.ts#L901",children:"packages/extension-api/src/extension-api.d.ts:901"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"id",children:"id"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"id"}),": ",(0,t.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"unique id of the layer"}),"\n",(0,t.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/cbr7/podman-desktop/blob/cc0331acdd073941c99795a2cab592590b5b3b4f/packages/extension-api/src/extension-api.d.ts#L893",children:"packages/extension-api/src/extension-api.d.ts:893"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"opaquewhiteouts",children:"opaqueWhiteouts?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"opaqueWhiteouts"}),": ",(0,t.jsx)(i.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"opaque whiteouts indicate the directories in which the content has to be completely deleted from previous layers."}),"\n",(0,t.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/cbr7/podman-desktop/blob/cc0331acdd073941c99795a2cab592590b5b3b4f/packages/extension-api/src/extension-api.d.ts#L909",children:"packages/extension-api/src/extension-api.d.ts:909"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"whiteouts",children:"whiteouts?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"whiteouts"}),": ",(0,t.jsx)(i.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"whiteouts indicate the paths of the files to be deleted from previous layers."}),"\n",(0,t.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/cbr7/podman-desktop/blob/cc0331acdd073941c99795a2cab592590b5b3b4f/packages/extension-api/src/extension-api.d.ts#L905",children:"packages/extension-api/src/extension-api.d.ts:905"})})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>a});var s=n(63696);const t={},d=s.createContext(t);function c(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);