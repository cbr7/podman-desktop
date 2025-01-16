"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78110],{47271:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"compose/running-compose","title":"Running Compose files","description":"With Podman Desktop, you can manage multi-container applications defined in Compose files.","source":"@site/docs/compose/running-compose.md","sourceDirName":"compose","slug":"/compose/running-compose","permalink":"/docs/compose/running-compose","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/compose/running-compose.md","tags":[{"inline":true,"label":"compose","permalink":"/docs/tags/compose"}],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Running Compose files","description":"With Podman Desktop, you can manage multi-container applications defined in Compose files.","sidebar_position":3,"keywords":["compose"],"tags":["compose"]},"sidebar":"mySidebar","previous":{"title":"Setting up Compose","permalink":"/docs/compose/setting-up-compose"},"next":{"title":"Troubleshooting Compose","permalink":"/docs/compose/troubleshooting"}}');var i=n(62540),c=n(43023);const r={title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",sidebar_position:3,keywords:["compose"],tags:["compose"]},t=void 0,l={},a=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(e){const o={a:"a",code:"code",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components},{Details:s,Icon:r}=o;return s||m("Details",!0),r||m("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"With Podman Desktop, you can manage multi-container applications defined in a Compose file."}),"\n",(0,i.jsx)(o.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Podman 4.7.0 or greater."}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"/docs/compose/setting-up-compose",children:"You have set up Compose"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#compose-file",children:"You have a Compose file"}),", such as ",(0,i.jsx)(o.code,{children:"compose.yaml"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.h4,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"Run the command in a terminal:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell-session",children:"$ podman compose --file compose.yaml up --detach\n"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(o.p,{children:["(Alternatively) With an older Podman version, run ",(0,i.jsx)(o.code,{children:"docker-compose"}),":"]})}),(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"/docs/migrating-from-docker/using-the-docker_host-environment-variable",children:"Set the DOCKER_HOST variable"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Run ",(0,i.jsx)(o.code,{children:"docker-compose"})," rather than ",(0,i.jsx)(o.code,{children:"podman compose"}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell-session",children:"$ docker-compose --file compose.yaml up --detach\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(o.p,{children:"(Optionally) Learn about Compose commands:"})}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell-session",children:"$ podman compose --help\n"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h4,{id:"verification",children:"Verification"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"The Compose engine starts the containers and services, and adds a label to each resource:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Container label: ",(0,i.jsx)(o.code,{children:"com.docker.compose.project"})]}),"\n",(0,i.jsxs)(o.li,{children:["Service label: ",(0,i.jsx)(o.code,{children:"com.docker.compose.service"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"Podman Desktop detects the Compose labels, and displays the container group as a group of containers."}),"\n",(0,i.jsxs)(o.p,{children:["The Podman Desktop ",(0,i.jsxs)(o.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cube",size:"lg"})," Containers"]})," list displays the containers created by Compose grouped in a container group with a ",(0,i.jsx)(o.code,{children:"(compose)"})," suffix, such as ",(0,i.jsx)(o.code,{children:"flask-redis (compose)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"img2",src:n(34848).A+"",width:"1017",height:"742"})})]})}function p(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function m(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},34848:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/compose-in-containers-view-b93a1a1667842a10985bf3203a035f3b.png"},43023:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>t});var s=n(63696);const i={},c=s.createContext(i);function r(e){const o=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:o},e.children)}}}]);