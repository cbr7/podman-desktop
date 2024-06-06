"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70633],{9146:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var i=s(24246),t=s(71670);const c={},o="Interface: AuthenticationSession",r={id:"interfaces/AuthenticationSession",title:"Interface: AuthenticationSession",description:"Represents a session of a currently logged in user.",source:"@site/api/interfaces/AuthenticationSession.md",sourceDirName:"interfaces",slug:"/interfaces/AuthenticationSession",permalink:"/api/interfaces/AuthenticationSession",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"AuthenticationProviderOptions",permalink:"/api/interfaces/AuthenticationProviderOptions"},next:{title:"AuthenticationSessionAccountInformation",permalink:"/api/interfaces/AuthenticationSessionAccountInformation"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"accessToken",id:"accesstoken",level:3},{value:"Source",id:"source",level:4},{value:"account",id:"account",level:3},{value:"Source",id:"source-1",level:4},{value:"id",id:"id",level:3},{value:"Source",id:"source-2",level:4},{value:"scopes",id:"scopes",level:3},{value:"Source",id:"source-3",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interface-authenticationsession",children:"Interface: AuthenticationSession"}),"\n",(0,i.jsx)(n.p,{children:"Represents a session of a currently logged in user."}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"accesstoken",children:"accessToken"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"accessToken"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The access token."}),"\n",(0,i.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/ee9b3a1ca2f066ecdbb73178f1a0535e6864105e/packages/extension-api/src/extension-api.d.ts#L3445",children:"packages/extension-api/src/extension-api.d.ts:3445"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"account",children:"account"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"account"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationSessionAccountInformation",children:(0,i.jsx)(n.code,{children:"AuthenticationSessionAccountInformation"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The account associated with the session."}),"\n",(0,i.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/ee9b3a1ca2f066ecdbb73178f1a0535e6864105e/packages/extension-api/src/extension-api.d.ts#L3450",children:"packages/extension-api/src/extension-api.d.ts:3450"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"id"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The identifier of the authentication session."}),"\n",(0,i.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/ee9b3a1ca2f066ecdbb73178f1a0535e6864105e/packages/extension-api/src/extension-api.d.ts#L3440",children:"packages/extension-api/src/extension-api.d.ts:3440"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"scopes",children:"scopes"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"scopes"}),": readonly ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The permissions granted by the session's access token. Available scopes\nare defined by the ",(0,i.jsx)(n.a,{href:"#AuthenticationProvider",children:"AuthenticationProvider"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/ee9b3a1ca2f066ecdbb73178f1a0535e6864105e/packages/extension-api/src/extension-api.d.ts#L3456",children:"packages/extension-api/src/extension-api.d.ts:3456"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(27378);const t={},c=i.createContext(t);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);