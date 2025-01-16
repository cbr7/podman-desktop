"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60441],{75619:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"interfaces/AuthenticationSession","title":"Interface: AuthenticationSession","description":"Defined in3953","source":"@site/api/interfaces/AuthenticationSession.md","sourceDirName":"interfaces","slug":"/interfaces/AuthenticationSession","permalink":"/api/interfaces/AuthenticationSession","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"AuthenticationProviderOptions","permalink":"/api/interfaces/AuthenticationProviderOptions"},"next":{"title":"AuthenticationSessionAccountInformation","permalink":"/api/interfaces/AuthenticationSessionAccountInformation"}}');var t=s(62540),c=s(43023);const o={},r="Interface: AuthenticationSession",a={},d=[{value:"Properties",id:"properties",level:2},{value:"accessToken",id:"accesstoken",level:3},{value:"account",id:"account",level:3},{value:"id",id:"id",level:3},{value:"scopes",id:"scopes",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-authenticationsession",children:"Interface: AuthenticationSession"})}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/8c0e97252430c8e5e87b77f603fe04bed363d3be/packages/extension-api/src/extension-api.d.ts#L3953",children:"packages/extension-api/src/extension-api.d.ts:3953"})]}),"\n",(0,t.jsx)(n.p,{children:"Represents a session of a currently logged in user."}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"accesstoken",children:"accessToken"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"accessToken"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/8c0e97252430c8e5e87b77f603fe04bed363d3be/packages/extension-api/src/extension-api.d.ts#L3962",children:"packages/extension-api/src/extension-api.d.ts:3962"})]}),"\n",(0,t.jsx)(n.p,{children:"The access token."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"account",children:"account"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"account"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationSessionAccountInformation",children:(0,t.jsx)(n.code,{children:"AuthenticationSessionAccountInformation"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/8c0e97252430c8e5e87b77f603fe04bed363d3be/packages/extension-api/src/extension-api.d.ts#L3967",children:"packages/extension-api/src/extension-api.d.ts:3967"})]}),"\n",(0,t.jsx)(n.p,{children:"The account associated with the session."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"id"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/8c0e97252430c8e5e87b77f603fe04bed363d3be/packages/extension-api/src/extension-api.d.ts#L3957",children:"packages/extension-api/src/extension-api.d.ts:3957"})]}),"\n",(0,t.jsx)(n.p,{children:"The identifier of the authentication session."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"scopes",children:"scopes"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"scopes"}),": readonly ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/8c0e97252430c8e5e87b77f603fe04bed363d3be/packages/extension-api/src/extension-api.d.ts#L3973",children:"packages/extension-api/src/extension-api.d.ts:3973"})]}),"\n",(0,t.jsxs)(n.p,{children:["The permissions granted by the session's access token. Available scopes\nare defined by the ",(0,t.jsx)(n.a,{href:"#AuthenticationProvider",children:"AuthenticationProvider"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(63696);const t={},c=i.createContext(t);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);