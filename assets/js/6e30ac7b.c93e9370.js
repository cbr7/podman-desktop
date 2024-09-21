"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94054],{40445:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var c=i(62540),t=i(43023);const s={},o="Interface: QuickPickOptions",d={id:"interfaces/QuickPickOptions",title:"Interface: QuickPickOptions",description:"Options to configure the behavior of the quick pick UI.",source:"@site/api/interfaces/QuickPickOptions.md",sourceDirName:"interfaces",slug:"/interfaces/QuickPickOptions",permalink:"/api/interfaces/QuickPickOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"QuickPickItem",permalink:"/api/interfaces/QuickPickItem"},next:{title:"RegisterContainerConnectionEvent",permalink:"/api/interfaces/RegisterContainerConnectionEvent"}},r={},l=[{value:"Properties",id:"properties",level:2},{value:"canPickMany?",id:"canpickmany",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ignoreFocusOut?",id:"ignorefocusout",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"matchOnDescription?",id:"matchondescription",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"matchOnDetail?",id:"matchondetail",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"placeHolder?",id:"placeholder",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"title?",id:"title",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods",level:2},{value:"onDidSelectItem()?",id:"ondidselectitem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"interface-quickpickoptions",children:"Interface: QuickPickOptions"})}),"\n",(0,c.jsx)(n.p,{children:"Options to configure the behavior of the quick pick UI."}),"\n",(0,c.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(n.h3,{id:"canpickmany",children:"canPickMany?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"canPickMany"}),": ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional flag to make the picker accept multiple selections, if true the result is an array of picks."}),"\n",(0,c.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/9f4bbe95f7c48c927cbc71bb77525981c435a392/packages/extension-api/src/extension-api.d.ts#L1425",children:"packages/extension-api/src/extension-api.d.ts:1425"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"ignorefocusout",children:"ignoreFocusOut?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"ignoreFocusOut"}),": ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Set to ",(0,c.jsx)(n.code,{children:"true"})," to keep the picker open when focus moves to another part of the editor or to another window.\nThis setting is ignored on iPad and is always false."]}),"\n",(0,c.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/9f4bbe95f7c48c927cbc71bb77525981c435a392/packages/extension-api/src/extension-api.d.ts#L1420",children:"packages/extension-api/src/extension-api.d.ts:1420"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"matchondescription",children:"matchOnDescription?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"matchOnDescription"}),": ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional flag to include the description when filtering the picks."}),"\n",(0,c.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/9f4bbe95f7c48c927cbc71bb77525981c435a392/packages/extension-api/src/extension-api.d.ts#L1404",children:"packages/extension-api/src/extension-api.d.ts:1404"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"matchondetail",children:"matchOnDetail?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"matchOnDetail"}),": ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional flag to include the detail when filtering the picks."}),"\n",(0,c.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/9f4bbe95f7c48c927cbc71bb77525981c435a392/packages/extension-api/src/extension-api.d.ts#L1409",children:"packages/extension-api/src/extension-api.d.ts:1409"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"placeholder",children:"placeHolder?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"placeHolder"}),": ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional string to show as placeholder in the input box to guide the user what to pick on."}),"\n",(0,c.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/9f4bbe95f7c48c927cbc71bb77525981c435a392/packages/extension-api/src/extension-api.d.ts#L1414",children:"packages/extension-api/src/extension-api.d.ts:1414"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"title",children:"title?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"title"}),": ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional string that represents the title of the quick pick."}),"\n",(0,c.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/9f4bbe95f7c48c927cbc71bb77525981c435a392/packages/extension-api/src/extension-api.d.ts#L1399",children:"packages/extension-api/src/extension-api.d.ts:1399"})}),"\n",(0,c.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsx)(n.h3,{id:"ondidselectitem",children:"onDidSelectItem()?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"onDidSelectItem"}),"(",(0,c.jsx)(n.code,{children:"item"}),"): ",(0,c.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional function that is invoked whenever an item is selected."}),"\n",(0,c.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(n.p,{children:["\u2022 ",(0,c.jsx)(n.strong,{children:"item"}),": ",(0,c.jsx)(n.code,{children:"string"})," | ",(0,c.jsx)(n.a,{href:"/api/interfaces/QuickPickItem",children:(0,c.jsx)(n.code,{children:"QuickPickItem"})})]}),"\n",(0,c.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"any"})}),"\n",(0,c.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/9f4bbe95f7c48c927cbc71bb77525981c435a392/packages/extension-api/src/extension-api.d.ts#L1431",children:"packages/extension-api/src/extension-api.d.ts:1431"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var c=i(63696);const t={},s=c.createContext(t);function o(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);