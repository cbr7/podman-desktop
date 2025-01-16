"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55259],{48984:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"lima/creating-a-kubernetes-instance","title":"Lima instance for Kubernetes","description":"Podman Desktop can assist you to create a custom Lima instance on Linux and macOS.","source":"@site/docs/lima/creating-a-kubernetes-instance.md","sourceDirName":"lima","slug":"/lima/creating-a-kubernetes-instance","permalink":"/docs/lima/creating-a-kubernetes-instance","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/lima/creating-a-kubernetes-instance.md","tags":[{"inline":true,"label":"podman-desktop","permalink":"/docs/tags/podman-desktop"},{"inline":true,"label":"kubernetes","permalink":"/docs/tags/kubernetes"},{"inline":true,"label":"onboarding","permalink":"/docs/tags/onboarding"},{"inline":true,"label":"linux","permalink":"/docs/tags/linux"},{"inline":true,"label":"macOS","permalink":"/docs/tags/mac-os"}],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Lima instance for Kubernetes","description":"Podman Desktop can assist you to create a custom Lima instance on Linux and macOS.","tags":["podman-desktop","kubernetes","onboarding","linux","macOS"],"keywords":["podman desktop","kubernetes","lima","onboarding","linux","macos"]},"sidebar":"mySidebar","previous":{"title":"Lima instance for containers","permalink":"/docs/lima/creating-a-lima-instance"},"next":{"title":"Customizing Lima instance","permalink":"/docs/lima/customizing"}}');var t=s(62540),r=s(43023);const a={sidebar_position:3,title:"Lima instance for Kubernetes",description:"Podman Desktop can assist you to create a custom Lima instance on Linux and macOS.",tags:["podman-desktop","kubernetes","onboarding","linux","macOS"],keywords:["podman desktop","kubernetes","lima","onboarding","linux","macos"]},o="Creating a Lima instance for Kubernetes workloads with Podman Desktop",c={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Icon:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"creating-a-lima-instance-for-kubernetes-workloads-with-podman-desktop",children:"Creating a Lima instance for Kubernetes workloads with Podman Desktop"})}),"\n",(0,t.jsx)(n.p,{children:"To use the Lima provider you need a Lima instance running a Linux machine."}),"\n",(0,t.jsx)(n.p,{children:"In the future, Podman Desktop might be able to create Lima instances."}),"\n",(0,t.jsx)(n.p,{children:"Consider creating a custom Lima instance to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Control the assigned resources: CPUs, memory, and disk size."}),"\n",(0,t.jsxs)(n.li,{children:["Control which Kubernetes distribution (",(0,t.jsx)(n.code,{children:"template"}),") to install."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.a,{href:"/docs/lima/installing",children:["Install the ",(0,t.jsx)(n.code,{children:"lima"})," CLI"]}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In a terminal, create the Lima instance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To create a single-node Kubernetes cluster running ",(0,t.jsx)(n.a,{href:"https://k3s.io/",children:"k3s"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ limactl start template://k3s\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To create a single-node Kubernetes cluster running ",(0,t.jsx)(n.a,{href:"https://k8s.io/",children:"k8s"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ limactl start template://k8s\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To select the number of CPUs, the memory, and the disk size, add the options to the ",(0,t.jsx)(n.code,{children:"limactl start"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"--cpus=4 --memory=4 --disk=100\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Wait for the instance to start, and restart the Lima extension."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Extension: Lima"]}),", to change the instance name and type."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"k3s"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Type: kubernetes"}),"\n",(0,t.jsxs)(n.li,{children:["Name: k3s\n",(0,t.jsx)(n.img,{alt:"Lima preferences k3s",src:s(98730).A+"",width:"633",height:"211"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"k8s"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Type: kubernetes"}),"\n",(0,t.jsxs)(n.li,{children:["Name: k8s\n",(0,t.jsx)(n.img,{alt:"Lima preferences k8s",src:s(67503).A+"",width:"637",height:"205"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Extensions > Lima"]}),", to disable and enable the extension after changes."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When the installation is done, the location of the KUBECONFIG file is printed. See ",(0,t.jsx)(n.a,{href:"/docs/kubernetes/existing-kubernetes",children:"Configuring access to a Kubernetes cluster"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Path to the kubeconfig file"]}),", to set the path of the file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"kubectl.lima"})," wrapper script to connect to the cluster:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl.lima version\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},98730:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/lima-preferences-k3s-f3a4e45ffed36f9745abbcb886be432e.png"},67503:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/lima-preferences-k8s-57f8cf79ea9d3cad25160eac58b78484.png"},43023:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(63696);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);