"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37012],{76014:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"interfaces/Event","title":"Interface: Event()\\\\<T\\\\>","description":"Interface to subscribe specific events.","source":"@site/api/interfaces/Event.md","sourceDirName":"interfaces","slug":"/interfaces/Event","permalink":"/api/interfaces/Event","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"EndpointSettings","permalink":"/api/interfaces/EndpointSettings"},"next":{"title":"Extension","permalink":"/api/interfaces/Extension"}}');var t=s(62540),a=s(43023);const r={},c="Interface: Event()<T>",l={},o=[{value:"Example",id:"example",level:2},{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example-1",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-eventt",children:"Interface: Event()<T>"})}),"\n",(0,t.jsx)(n.p,{children:"Interface to subscribe specific events."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["This is an example for an hypothetic function ",(0,t.jsx)(n.code,{children:"onDidValueChange"})," implementing\nthe ",(0,t.jsx)(n.code,{children:"Event"})," interface."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import * as api from '@podman-desktop/api';\n\nclass MyValueManager {\n  private value: boolean | undefined = undefined;\n\n  private onChange(e: boolean) {\n    this.value = e;\n    console.log(this.value);\n  }\n\n  public init(subscriptions: api.Disposable[]) {\n    onDidValueChange(this.onChange, this, subscriptions);\n  }\n}\n\nexport async function activate(extensionContext: api.ExtensionContext): Promise<void> {\n  const myValueManager = new MyValueManager();\n  myValueManager.init(extensionContext.subscriptions);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"T"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Event"}),"(",(0,t.jsx)(n.code,{children:"listener"}),", ",(0,t.jsx)(n.code,{children:"thisArgs"}),"?, ",(0,t.jsx)(n.code,{children:"disposables"}),"?): ",(0,t.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Interface to subscribe specific events."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"listener"})]}),"\n",(0,t.jsx)(n.p,{children:"The listener function will be called when the event happens."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"thisArgs?"}),": ",(0,t.jsx)(n.code,{children:"any"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"this"}),"-argument which will be used when calling the event listener."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"disposables?"}),": ",(0,t.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})}),"[]"]}),"\n",(0,t.jsxs)(n.p,{children:["An array to which the resulting ",(0,t.jsx)(n.a,{href:"/api/classes/Disposable",children:"Disposable"})," will be added."]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})})}),"\n",(0,t.jsx)(n.p,{children:"A disposable which unsubscribes the event listener."}),"\n",(0,t.jsx)(n.h2,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["This is an example for an hypothetic function ",(0,t.jsx)(n.code,{children:"onDidValueChange"})," implementing\nthe ",(0,t.jsx)(n.code,{children:"Event"})," interface."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import * as api from '@podman-desktop/api';\n\nclass MyValueManager {\n  private value: boolean | undefined = undefined;\n\n  private onChange(e: boolean) {\n    this.value = e;\n    console.log(this.value);\n  }\n\n  public init(subscriptions: api.Disposable[]) {\n    onDidValueChange(this.onChange, this, subscriptions);\n  }\n}\n\nexport async function activate(extensionContext: api.ExtensionContext): Promise<void> {\n  const myValueManager = new MyValueManager();\n  myValueManager.init(extensionContext.subscriptions);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/cbr7/podman-desktop/blob/cc0331acdd073941c99795a2cab592590b5b3b4f/packages/extension-api/src/extension-api.d.ts#L157",children:"packages/extension-api/src/extension-api.d.ts:157"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(63696);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);