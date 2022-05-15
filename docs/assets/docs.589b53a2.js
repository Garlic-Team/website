import{o as l,c as _,a as t,d as se,b as s,u as _e,e as ve,f as he,g as ye,r as Q,h as y,M as m,i as M,j as ke,w as be,k as we,l as xe,n as g,m as F,p as o,q as e,F as j,s as S,t as k,v as $e,x as h,y as re,z as D,A as Ce,B as Te,H as ne,C as Fe,D as Ee,E as Ve,G as ie}from"./index.3359f5ea.js";import{u as z,t as Be}from"./ReducedMotion.b21787e9.js";import{_ as Me,a as je}from"./chevron-right.23c11e5b.js";import{r as Z,a as ee,i as te,I as de,D as ue,w as ce,L as pe,U as fe,G as ge,$ as me}from"./headlessui.esm.decdff49.js";import{_ as ze}from"./Spinner.723a140b.js";const Re={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Se=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m8 7l4-4m0 0l4 4m-4-4v18"},null,-1),De=[Se];function Ue(W,w){return l(),_("svg",Re,De)}var Le={name:"heroicons-outline-arrow-narrow-up",render:Ue};const Ae={class:"fixed bottom-0 right-0 pb-4"},Ne={class:"px-6 lg:px-8"},Ge=se({setup(W){const w=()=>{var r;return(r=document.getElementById("container"))==null?void 0:r.scrollTo({top:0,behavior:z.value?void 0:"smooth"})};return(r,p)=>{const X=Le;return l(),_("div",Ae,[t("div",Ne,[t("button",{class:"bg-discord-blurple-500 hover:bg-discord-blurple-530 dark:hover:bg-discord-blurple-560 text-gray-200 hover:text-white rounded-md p-2 leading-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200",onClick:p[0]||(p[0]=$=>w())},[s(X,{class:"h-6 w-6"})])])])}}}),Ie={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ke=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m5 15l7-7l7 7"},null,-1),Oe=[Ke];function He(W,w){return l(),_("svg",Ie,Oe)}var Pe={name:"heroicons-outline-chevron-up",render:He};const Ye=["aria-expanded"],qe=t("span",{class:"sr-only"},"Open menu",-1),Je={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},Qe={class:"my-5 px-2 space-y-1 z-10"},We={class:"pb-1"},Xe={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Ze=["aria-expanded"],et={class:"sr-only"},tt=D(" Docs settings "),st={class:"relative mt-1"},at={class:"truncate"},ot={class:"truncate"},lt={class:"relative mt-1"},rt={class:"truncate"},nt={class:"truncate"},it={class:"flex justify-between px-2"},dt=D("Reduced Motion"),ut={class:"flex justify-between px-2"},ct=D("Show privates"),pt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ft=["aria-expanded"],gt={class:"sr-only"},mt={class:"truncate"},_t={class:"truncate"},vt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ht=["aria-expanded"],bt={class:"sr-only"},xt=D(" Classes "),yt={class:"truncate"},kt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},wt=["aria-expanded"],$t={class:"sr-only"},Ct=D(" Typedefs "),Tt={class:"truncate"},Ft=se({setup(W){var I,K,O,H,P;const w=_e(),r=ve(),p=he(),$=ye($e).greater("lg"),f=Q(!1),b=Q(),U=y(()=>p.state.sources),E=y(()=>p.state.source),L=y(()=>p.state.tag),i=y(()=>p.state.docs),A=y(()=>p.state.branches),V=y(()=>U.value.find(d=>r.params.source===d.id)),B=Q({source:(K=(I=V.value)==null?void 0:I.source)!=null?K:m,name:(H=(O=V.value)==null?void 0:O.name)!=null?H:m.name}),T=Q((P=r.params.tag)!=null?P:m.defaultTag),N=y(()=>{var d,a;return M.value?(d=i.value)==null?void 0:d.classes:(a=i.value)==null?void 0:a.classes.filter(v=>v.access!=="private")}),G=y(()=>{var d,a;return M.value?(d=i.value)==null?void 0:d.typedefs:(a=i.value)==null?void 0:a.typedefs.filter(v=>v.access!=="private")});return ke(b,()=>f.value=!1),be($,()=>f.value=!1,{immediate:!0}),we([B,T],async([d,a],[v,x])=>{if(d!==v)return T.value=d.source.defaultTag,w.push({name:"docs-source-tag-category-file",params:{source:d.source.id,tag:d.source.defaultTag,category:d.source.defaultFile.category,file:d.source.defaultFile.id}});if(a!==x)return w.push({name:"docs-source-tag-category-file",params:{source:d.source.id,tag:a,category:d.source.defaultFile.category,file:d.source.defaultFile.id}})}),(d,a)=>{var q,J,ae;const v=Me,x=je,Y=Pe,R=xe("router-link");return l(),_(j,null,[f.value?F("",!0):(l(),_("div",{key:0,class:g(["block fixed lg:hidden z-10 transition-transform transform-gpu",f.value?"translate-x-72 md:translate-x-80":null])},[t("button",{type:"button",class:"rounded-md rounded-l-none rounded-tr-none p-3 inline-flex items-center justify-center text-gray-200 bg-discord-blurple-600 hover:bg-discord-blurple-630 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"sidebar-menu","aria-expanded":f.value,onClick:a[0]||(a[0]=u=>f.value=!f.value)},[qe,s(v,{class:g(["h-6 w-6",{hidden:f.value,block:!f.value}]),"aria-hidden":"true"},null,8,["class"])],8,Ye)],2)),t("div",{ref_key:"sidebarElement",ref:b,class:g(["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",f.value?"translate-x-0":"-translate-x-full lg:translate-x-0"])},[t("div",Je,[t("nav",Qe,[t("ul",null,[t("li",We,[s(e(Z),{"default-open":!0},{default:o(({open:u})=>[s(e(ee),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",Xe,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":u},[t("span",et,h(u?"Shrink":"Expand"),1),s(v,{class:g(["inline-block",{hidden:u}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:g(["inline-block",{hidden:!u}]),"aria-hidden":"true"},null,8,["class"])],8,Ze),tt])]),_:2},1024),s(e(te),{as:"ul",class:"px-2 space-y-3"},{default:o(()=>[t("li",null,[s(e(de),{modelValue:B.value,"onUpdate:modelValue":a[1]||(a[1]=n=>B.value=n)},{default:o(({open:n})=>[t("div",st,[s(e(ue),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:o(()=>[t("span",at,h(B.value.name),1),n?F("",!0):(l(),k(x,{key:0})),n?(l(),k(Y,{key:1})):F("",!0)]),_:2},1024),s(e(ce),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:o(()=>[(l(!0),_(j,null,S(e(U),c=>(l(),k(e(pe),{key:c.source.id,class:"cursor-default",value:c},{default:o(({active:C})=>[t("li",{class:g(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":C}])},[t("span",ot,h(c.name),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),t("li",null,[s(e(de),{modelValue:T.value,"onUpdate:modelValue":a[2]||(a[2]=n=>T.value=n)},{default:o(({open:n})=>[t("div",lt,[s(e(ue),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:o(()=>[t("span",rt,h(T.value),1),n?F("",!0):(l(),k(x,{key:0})),n?(l(),k(Y,{key:1})):F("",!0)]),_:2},1024),s(e(ce),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:o(()=>[(l(!0),_(j,null,S(e(A),c=>(l(),k(e(pe),{key:c,class:"cursor-default",value:c},{default:o(({active:C})=>[t("li",{class:g(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":C}])},[t("span",nt,h(c),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),t("li",null,[s(e(fe),null,{default:o(()=>[t("div",it,[s(e(ge),{class:"mr-4 dark:text-gray-200"},{default:o(()=>[dt]),_:1}),s(e(me),{modelValue:e(z),"onUpdate:modelValue":a[3]||(a[3]=n=>re(z)?z.value=n:null),class:g(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",e(z)?"bg-discord-blurple-500":"bg-gray-500"]),onClick:a[4]||(a[4]=n=>e(Be)(e(z)))},{default:o(()=>[t("span",{class:g(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",e(z)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})]),t("li",null,[s(e(fe),null,{default:o(()=>[t("div",ut,[s(e(ge),{class:"mr-4 dark:text-gray-200"},{default:o(()=>[ct]),_:1}),s(e(me),{modelValue:e(M),"onUpdate:modelValue":a[5]||(a[5]=n=>re(M)?M.value=n:null),class:g(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",e(M)?"bg-discord-red-500":"bg-gray-500"])},{default:o(()=>[t("span",{class:g(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",e(M)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})])]),_:1})]),_:1})]),(l(!0),_(j,null,S((q=e(i))==null?void 0:q.custom,(u,n)=>(l(),_("li",{key:n},[s(e(Z),{"default-open":!0},{default:o(({open:c})=>[s(e(ee),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",pt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":c},[t("span",gt,h(c?"Shrink":"Expand"),1),s(v,{class:g(["inline-block",{hidden:c}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:g(["inline-block",{hidden:!c}]),"aria-hidden":"true"},null,8,["class"])],8,ft),t("span",mt,h(u.name),1)])]),_:2},1024),s(e(te),{as:"ul"},{default:o(()=>[(l(!0),_(j,null,S(u.files,(C,oe)=>{var le;return l(),_("li",{key:oe},[s(R,{to:{name:"docs-source-tag-category-file",params:{source:(le=e(E))==null?void 0:le.id,tag:e(L),category:n,file:oe}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:a[6]||(a[6]=Mt=>f.value=!1)},{default:o(()=>[t("span",_t,h(typeof C=="object"?C.name:C),1)]),_:2},1032,["to"])])}),128))]),_:2},1024)]),_:2},1024)]))),128)),(J=e(N))!=null&&J.length?(l(),k(e(Z),{key:0,as:"li","default-open":!0},{default:o(({open:u})=>[s(e(ee),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",vt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":u},[t("span",bt,h(u?"Shrink":"Expand"),1),s(v,{class:g(["inline-block",{hidden:u}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:g(["inline-block",{hidden:!u}]),"aria-hidden":"true"},null,8,["class"])],8,ht),xt])]),_:2},1024),s(e(te),{as:"ul"},{default:o(()=>[(l(!0),_(j,null,S(e(N),n=>{var c;return l(),_("li",{key:n.name},[s(R,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:(c=e(E))==null?void 0:c.id,tag:e(L),class:n.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:a[7]||(a[7]=C=>f.value=!1)},{default:o(()=>[t("span",yt,h(n.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):F("",!0),(ae=e(G))!=null&&ae.length?(l(),k(e(Z),{key:1,as:"li","default-open":!0},{default:o(({open:u})=>[s(e(ee),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",kt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":u},[t("span",$t,h(u?"Shrink":"Expand"),1),s(v,{class:g(["inline-block",{hidden:u}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:g(["inline-block",{hidden:!u}]),"aria-hidden":"true"},null,8,["class"])],8,wt),Ct])]),_:2},1024),s(e(te),{as:"ul"},{default:o(()=>[(l(!0),_(j,null,S(e(G),n=>{var c;return l(),_("li",{key:n.name},[s(R,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:(c=e(E))==null?void 0:c.id,tag:e(L),typedef:n.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:a[8]||(a[8]=C=>f.value=!1)},{default:o(()=>[t("span",Tt,h(n.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):F("",!0)])])])],2)],64)}}}),Et={class:"lg:flex mx-auto w-full max-w-screen-2xl"},Vt={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},Bt=D(" Couldn't load the documentation data. "),Ut=se({setup(W){const w=_e(),r=ve(),p=he(),{Ctrl_K:X}=Ce({passive:!1,onEventFired(i){i.ctrlKey&&i.key==="k"&&i.type==="keydown"&&i.preventDefault()}}),$=Te({main:m,[ne.id]:ne}),f=Q(!1),b=y(()=>p.state.source),U=y(()=>p.state.tag),E=y(()=>p.state.docs);Fe(()=>{const i=document.getElementById("container");Ee(i,"scroll",()=>{i&&i.scrollTop>300?f.value=!0:f.value=!1})}),be(X,()=>{var i;(i=document.getElementById("search"))==null||i.focus()});const L=async()=>{var i,A,V,B,T,N,G,I,K,O,H,P,d,a,v,x,Y,R,q,J;if(r.path!=="/"){if(r.params.source&&r.params.tag&&(((i=E.value)==null?void 0:i.id)!==$[r.params.source].id||((A=E.value)==null?void 0:A.tag)!==r.params.tag)&&(await p.dispatch({type:"fetchDocs",inputSource:(V=$[r.params.source])!=null?V:m,inputTag:(B=r.params.tag)!=null?B:U.value}),await p.dispatch({type:"fetchTags",currentSource:(T=$[r.params.source])!=null?T:m})),r.params.source&&$[r.params.source])p.commit({type:"setSource",source:$[r.params.source]});else return w.replace({name:"docs-source-tag-category-file",params:{source:m.id,tag:m.defaultTag,category:m.defaultFile.category,file:m.defaultFile.id}});if(r.params.tag)p.commit({type:"setTag",tag:r.params.tag}),p.commit({type:"setSource",source:$[r.params.source]});else return w.replace({name:"docs-source-tag-category-file",params:{source:(G=(N=b.value)==null?void 0:N.id)!=null?G:m.id,tag:((I=b.value)==null?void 0:I.recentTag)||((K=b.value)==null?void 0:K.defaultTag),category:(H=(O=b.value)==null?void 0:O.defaultFile.category)!=null?H:m.defaultFile.category,file:(d=(P=b.value)==null?void 0:P.defaultFile.id)!=null?d:m.defaultFile.id}});if(!r.params.file&&!r.params.class&&!r.params.typedef&&r.name!=="docs-source-tag-search")return w.replace({name:"docs-source-tag-category-file",params:{source:(v=(a=b.value)==null?void 0:a.id)!=null?v:m.id,tag:(x=U.value)!=null?x:m.defaultTag,category:(R=(Y=b.value)==null?void 0:Y.defaultFile.category)!=null?R:m.defaultFile.category,file:(J=(q=b.value)==null?void 0:q.defaultFile.id)!=null?J:m.defaultFile.id}})}};return Ve(()=>void L()),(i,A)=>{const V=xe("router-view");return l(),_("div",null,[t("div",Et,[s(Ft),e(E)?(l(),k(V,{key:i.$route.path})):e(ie)?(l(),_("div",Vt,[Bt,t("pre",null,h(e(ie).toString()),1)])):(l(),k(ze,{key:2}))]),f.value?(l(),k(Ge,{key:0})):F("",!0)])}}});export{Ut as default};
