import{d as S,u as R,e as z,f as F,h as f,l as J,o as e,c as n,a as r,b as u,p as M,z as y,x,m as l,q as t,t as _,F as k,r as N,a3 as ke,a4 as xe,a5 as $e,a6 as Te,s as H,n as j,g as we,i as P,w as Me,v as Le,a0 as Ce,J as He,k as Ee}from"./index.19f04dcc.js";import{m as q,_ as O,H as W}from"./markdown.bfdd78e4.js";import{c as A,_ as K,a as Y,p as De,t as I,b as B,d as X}from"./See.32351012.js";import{_ as je,a as Ze}from"./chevron-right.08f5076b.js";import{r as U,a as G,i as Q}from"./headlessui.esm.997756d3.js";import{u as V}from"./ReducedMotion.d4623f39.js";const qe=["id"],Ae={class:"flex items-center"},Be={class:"inline-block mr-2"},Se={class:"text-gray-200 text-sm font-semibold uppercase pt-6"},Pe={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Ie=["innerHTML"],Ve={class:"grid pl-2.5"},Ne=["innerHTML"],Re=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),ze=S({props:{event:null},setup(s){const d=s,v=R(),$=z(),L=F(),g=f(()=>L.state.docs),o=f(()=>q(A(d.event.description,g.value,v,$))),T=f(()=>typeof d.event.deprecated=="string"?q(A(d.event.deprecated,g.value,v,$)):"");return(E,p)=>{var C;const m=J("router-link");return e(),n(k,null,[r("div",{id:`doc-for-e-${s.event.name}`,class:"scroll-to mb-8"},[u(O,{class:"float-right mt-8",meta:s.event.meta},null,8,["meta"]),r("div",Ae,[r("h3",Be,[u(m,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${s.event.name}`}}},{default:M(()=>[y(x(s.event.name),1)]),_:1},8,["to"])]),r("span",Se,[s.event.deprecated?(e(),n("span",Pe,"Deprecated")):l("",!0)])]),s.event.deprecated&&t(T)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(T)},null,8,Ie)):l("",!0),r("div",Ve,[r("p",{class:"noprose",innerHTML:t(o)},null,8,Ne),s.event.params&&s.event.params.length?(e(),_(K,{key:0,parameters:s.event.params},null,8,["parameters"])):l("",!0),(C=s.event.see)!=null&&C.length?(e(),_(Y,{key:1,see:s.event.see},null,8,["see"])):l("",!0)])],8,qe),Re],64)}}}),Fe={class:"grid"},Je={class:"overflow-x-auto lg:custom-scroll"},Oe={class:"relative"},Ke={class:"my-0 javascript"},Ue=["innerHTML"],Ge=S({props:{code:null},setup(s){const d=s,v=N(),$=N(!1),L=ke(E=>{E(),$.value=!1},1e3),{show:g,hide:o}=xe(v,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),T=async()=>{try{await navigator.clipboard.writeText(d.code),g()}catch{}$.value=!0,L(o)};return(E,p)=>{const m=$e,C=Te;return e(),n("div",Fe,[r("div",Je,[r("div",Oe,[r("pre",Ke,[r("code",{innerHTML:t(W).highlight(s.code,{language:"javascript"}).value},null,8,Ue)]),r("button",{ref_key:"copyButton",ref:v,class:"absolute right-0 top-0 mt-4 mr-4 inline-block hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200","aria-label":"Copy code"},[$.value?(e(),_(C,{key:1,class:"fill-current text-discord-green-600 dark:text-discord-green-500","aria-hidden":"true",onClick:T})):(e(),_(m,{key:0,class:"fill-current text-gray-700 dark:text-gray-200","aria-hidden":"true",onClick:T}))],512)])])])}}});const Qe=["id"],We={class:"flex items-center"},Xe={class:"inline-block mr-2"},Ye=y(") "),et={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},tt={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},st={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},nt={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ot={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},rt=["innerHTML"],lt={class:"grid pl-2.5"},at=["innerHTML"],ct={class:"font-semibold mt-3"},it=y(" Returns: "),dt={key:0},ut={key:1},mt={class:"mt-3"},pt=["innerHTML"],ht={key:1,class:"font-semibold"},_t=y(" Throws: "),ft={key:2,class:"font-semibold"},yt=y(" Emits: "),vt={key:0},gt={key:3,class:"font-semibold mt-3"},bt=y(" Examples: "),kt=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),xt=S({props:{method:null},setup(s){const d=s,v=R(),$=z(),L=F(),g=f(()=>L.state.docs),o=f(()=>{var b;return q(A((b=d.method.description)!=null?b:"No description.",g.value,v,$))}),T=f(()=>typeof d.method.deprecated=="string"?q(A(d.method.deprecated,g.value,v,$)):""),E=f(()=>{var b;return q(A((b=d.method.returns.description)!=null?b:d.method.returnsDescription,g.value,v,$))}),p=f(()=>d.method.params?d.method.params.filter(b=>!b.name.includes(".")):null),m=f(()=>d.method.emits?d.method.emits.map(b=>De(b,g.value)):null),C=f(()=>`${d.method.scope==="static"?"s-":""}${d.method.name}`);return(b,c)=>{var a,D;const i=J("router-link");return e(),n(k,null,[r("div",{id:`doc-for-${t(C)}`,class:"scroll-to mb-8"},[u(O,{class:"float-right mt-9",meta:s.method.meta},null,8,["meta"]),r("div",We,[r("h3",Xe,[u(i,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(C)}}},{default:M(()=>[y(" ."+x(s.method.name)+"(",1),(e(!0),n(k,null,H(t(p),h=>(e(),n("span",{key:h.name,class:j(["method-param text-discord-blurple-560 dark:text-discord-blurple-300 opacity-90 dark:opacity-75",h.optional?"optional":""])},x(h.variable?"...":"")+x(h.name),3))),128)),Ye]),_:1},8,["to"])]),r("span",et,[s.method.scope==="static"?(e(),n("span",tt,"Static")):l("",!0),s.method.abstract?(e(),n("span",st,"Abstract")):l("",!0),s.method.deprecated?(e(),n("span",nt,"Deprecated")):l("",!0),s.method.access==="private"?(e(),n("span",ot,"Private")):l("",!0)])]),s.method.deprecated&&t(T)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(T)},null,8,rt)):l("",!0),r("div",lt,[r("p",{class:"noprose",innerHTML:t(o)},null,8,at),s.method.params?(e(),_(K,{key:0,parameters:s.method.params},null,8,["parameters"])):l("",!0),r("div",ct,[it,s.method.returns&&Array.isArray(s.method.returns)?(e(),n("span",dt,[(e(!0),n(k,null,H(s.method.returns,h=>(e(),_(B,{key:t(I)(h),names:h},null,8,["names"]))),128))])):s.method.returns&&!Array.isArray(s.method.returns)?(e(),n("span",ut,[(e(!0),n(k,null,H(s.method.returns.types||s.method.returns,h=>(e(),_(B,{key:t(I)(h),names:h,variable:s.method.returns.variable,nullable:s.method.returns.nullable},null,8,["names","variable","nullable"]))),128))])):(e(),_(X,{key:2,type:["void"]})),r("div",mt,[s.method.returns&&!Array.isArray(s.method.returns)&&s.method.returns.description||s.method.returnsDescription?(e(),n("p",{key:0,class:"noprose",innerHTML:t(E)},null,8,pt)):l("",!0)])]),s.method.throws?(e(),n("div",ht,[_t,(e(!0),n(k,null,H(s.method.throws,h=>(e(),_(B,{key:h,names:h},null,8,["names"]))),128))])):l("",!0),t(m)&&t(m).length?(e(),n("div",ft,[yt,t(m).length>1?(e(),n("ul",vt,[(e(!0),n(k,null,H(t(m),h=>(e(),n("li",{key:h.text},[u(i,{to:h.link},{default:M(()=>[y(x(h.text),1)]),_:2},1032,["to"])]))),128))])):(e(),_(i,{key:1,to:t(m)[0].link},{default:M(()=>[y(x(t(m)[0].text),1)]),_:1},8,["to"]))])):l("",!0),(a=s.method.examples)!=null&&a.length?(e(),n("div",gt,[bt,(e(!0),n(k,null,H(s.method.examples,h=>(e(),_(Ge,{key:h,code:h.trim()},null,8,["code"]))),128))])):l("",!0),(D=s.method.see)!=null&&D.length?(e(),_(Y,{key:4,see:s.method.see},null,8,["see"])):l("",!0)])],8,Qe),kt],64)}}});function Z(s){return`${s.scope==="static"?"s-":""}${s.name}`}const $t={key:0},Tt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},wt=["aria-expanded"],Mt={class:"sr-only"},Lt=y(" Properties "),Ct=["onClick"],Ht={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},Et={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},Dt={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},jt={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Zt={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},qt={key:1},At={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Bt=["aria-expanded"],St={class:"sr-only"},Pt=y(" Methods "),It=["onClick"],Vt={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},Nt={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},Rt={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},zt={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Ft={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Jt={key:2},Ot={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Kt=["aria-expanded"],Ut={class:"sr-only"},Gt=y(" Events "),Qt=["onClick"],Wt={key:0,class:"text-gray-200 text-sm font-semibold uppercase inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Xt=S({props:{properties:null,methods:null,events:null},setup(s){const d=s,$=we(Le).greater("lg"),L=N(!1),g=f(()=>{var p;return P.value?d.properties:(p=d.properties)==null?void 0:p.filter(m=>m.access!=="private")}),o=f(()=>{var p;return P.value?d.methods:(p=d.methods)==null?void 0:p.filter(m=>m.access!=="private")}),T=f(()=>{var p;return P.value?d.events:(p=d.events)==null?void 0:p.filter(m=>m.access!=="private")}),E=p=>{const m=document.getElementById(`doc-for-${p}`);m==null||m.scrollIntoView({behavior:V.value?void 0:"smooth",block:"start"})};return Me($,()=>L.value=!0,{immediate:!0}),(p,m)=>{const C=je,b=Ze,c=J("router-link");return e(),n("div",{class:j(["grid sm:grid-cols-2 mb-10",s.events&&s.events.length?"md:grid-cols-3":null])},[t(g)&&t(g).length?(e(),n("div",$t,[u(t(U),{"default-open":L.value},{default:M(({open:i})=>[u(t(G),{class:"focus:outline-none",tabindex:"-1"},{default:M(()=>[r("div",Tt,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",Mt,x(i?"Shrink":"Expand"),1),u(C,{class:j(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),u(b,{class:j(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,wt),Lt])]),_:2},1024),u(t(Q),{as:"ul",class:"no-list !mt-0 pl-2"},{default:M(()=>[(e(!0),n(k,null,H(t(g),a=>(e(),n("li",{key:t(Z)(a),class:"cursor-pointer mb-14 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500",onClick:D=>E(t(Z)(a))},[u(c,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(Z)(a)}},class:"mx-2"},{default:M(()=>[y(x(a.name),1)]),_:2},1032,["to"]),r("span",Ht,[a.scope==="static"?(e(),n("span",Et,"S")):l("",!0),a.abstract?(e(),n("span",Dt,"A")):l("",!0),a.deprecated?(e(),n("span",jt,"D")):l("",!0),a.access==="private"?(e(),n("span",Zt,"P")):l("",!0)])],8,Ct))),128))]),_:1})]),_:1},8,["default-open"])])):l("",!0),t(o)&&t(o).length?(e(),n("div",qt,[u(t(U),{"default-open":L.value},{default:M(({open:i})=>[u(t(G),{class:"focus:outline-none",tabindex:"-1"},{default:M(()=>[r("div",At,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",St,x(i?"Shrink":"Expand"),1),u(C,{class:j(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),u(b,{class:j(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,Bt),Pt])]),_:2},1024),u(t(Q),{as:"ul",class:"no-list !mt-0 pl-2"},{default:M(()=>[(e(!0),n(k,null,H(t(o),a=>(e(),n("li",{key:t(Z)(a),class:"cursor-pointer border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500",onClick:D=>E(t(Z)(a))},[u(c,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(Z)(a)}},class:"mx-2"},{default:M(()=>[y(x(a.name),1)]),_:2},1032,["to"]),r("span",Vt,[a.scope==="static"?(e(),n("span",Nt,"S")):l("",!0),a.abstract?(e(),n("span",Rt,"A")):l("",!0),a.deprecated?(e(),n("span",zt,"D")):l("",!0),a.access==="private"?(e(),n("span",Ft,"P")):l("",!0)])],8,It))),128))]),_:1})]),_:1},8,["default-open"])])):l("",!0),t(T)&&t(T).length?(e(),n("div",Jt,[u(t(U),{"default-open":L.value},{default:M(({open:i})=>[u(t(G),{class:"focus:outline-none",tabindex:"-1"},{default:M(()=>[r("div",Ot,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",Ut,x(i?"Shrink":"Expand"),1),u(C,{class:j(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),u(b,{class:j(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,Kt),Gt])]),_:2},1024),u(t(Q),{as:"ul",class:"no-list !mt-0 pl-2"},{default:M(()=>[(e(!0),n(k,null,H(t(T),a=>(e(),n("li",{key:a.name,class:"cursor-pointer border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500",onClick:D=>E(`e-${a.name}`)},[u(c,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${a.name}`}},class:"mx-2"},{default:M(()=>[y(x(a.name),1)]),_:2},1032,["to"]),a.deprecated?(e(),n("span",Wt,"D")):l("",!0)],8,Qt))),128))]),_:1})]),_:1},8,["default-open"])])):l("",!0)],2)}}}),Yt=["id"],es={class:"flex items-center"},ts={class:"inline-block mr-2"},ss={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},ns={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},os={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},rs={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ls={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},as=["innerHTML"],cs={class:"grid pl-2.5"},is=["innerHTML"],ds={class:"font-semibold mt-3"},us=y(" Type: "),ms={key:1,class:"mt-3"},ps=y(" Default: "),hs=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),_s=S({props:{prop:null},setup(s){const d=s,v=R(),$=z(),L=F(),g=f(()=>L.state.docs),o=f(()=>{var p;return q((p=A(d.prop.description,g.value,v,$))!=null?p:"")}),T=f(()=>typeof d.prop.deprecated=="string"?q(A(d.prop.deprecated,g.value,v,$)):""),E=f(()=>`${d.prop.scope==="static"?"s-":""}${d.prop.name}`);return(p,m)=>{var b;const C=J("router-link");return e(),n(k,null,[r("div",{id:`doc-for-${t(E)}`,class:"scroll-to mb-8"},[u(O,{class:"float-right mt-8",meta:s.prop.meta},null,8,["meta"]),r("div",es,[r("h3",ts,[u(C,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(E)}}},{default:M(()=>[y("."+x(s.prop.name),1)]),_:1},8,["to"])]),r("span",ss,[s.prop.scope==="static"?(e(),n("span",ns,"Static")):l("",!0),s.prop.readonly?(e(),n("span",os,"Read-only")):l("",!0),s.prop.deprecated?(e(),n("span",rs,"Deprecated")):l("",!0),s.prop.access==="private"?(e(),n("span",ls,"Private")):l("",!0)])]),s.prop.deprecated&&t(T)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(T)},null,8,as)):l("",!0),r("div",cs,[r("p",{class:"noprose",innerHTML:t(o)},null,8,is),s.prop.props&&s.prop.props.length>0?(e(),_(K,{key:0,parameters:s.prop.props},null,8,["parameters"])):l("",!0),r("div",ds,[us,(e(!0),n(k,null,H(s.prop.type,c=>(e(),_(B,{key:t(I)(c),names:c,nullable:s.prop.nullable},null,8,["names","nullable"]))),128))]),s.prop.default?(e(),n("div",ms,[ps,r("code",null,x(s.prop.default),1)])):l("",!0),(b=s.prop.see)!=null&&b.length?(e(),_(Y,{key:2,see:s.prop.see},null,8,["see"])):l("",!0)])],8,Yt),hs],64)}}}),fs={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},ys={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},vs=["id"],gs={class:"font-bold !mt-3"},bs={key:0},ks=y(" extends "),xs={key:1},$s=y(" implements "),Ts=["innerHTML"],ws={key:1,class:"grid"},Ms=r("h2",{class:"!mt-3"},"Constructor",-1),Ls=y(");"),Cs={key:2,class:"!mt-4"},Hs={key:3},Es={key:4},Ss=S({setup(s){var b;W.configure({ignoreUnescapedHTML:!0});const d=R(),v=z(),$=F(),L=N(),g=f(()=>$.state.docs),o=(b=g.value)==null?void 0:b.classes.find(c=>c.name===v.params.class),T=f(()=>q(A(o==null?void 0:o.description,g.value,d,v))),E=f(()=>!(o!=null&&o.construct)||!o.construct.params?null:o.construct.params.filter(c=>!c.name.includes("."))),p=f(()=>{if(!(o!=null&&o.props))return null;let c=o.props;return P.value||(c=c.filter(i=>i.access!=="private")),c.sort((i,a)=>`${i.scope==="static"?"ZZZ":""}${i.name}`.localeCompare(`${a.scope==="static"?"ZZZ":""}${a.name}`))}),m=f(()=>{if(!(o!=null&&o.methods))return null;let c=o.methods;return P.value||(c=c.filter(i=>i.access!=="private")),c.sort((i,a)=>`${i.scope==="static"?"ZZZ":""}${i.name}`.localeCompare(`${a.scope==="static"?"ZZZ":""}${a.name}`))}),C=c=>c;return Ce({title:f(()=>{var c;return`discord.js | ${(c=o==null?void 0:o.name)!=null?c:""}`})}),He(()=>{const c=document.getElementById(`doc-for-${v.query.scrollTo}`);c==null||c.scrollIntoView({behavior:V.value?void 0:"smooth",block:"start"});const i=document.getElementById("container");!v.query.scrollTo&&i&&i.scrollTop>200&&i.scrollTo({top:0,behavior:V.value?void 0:"smooth"}),L.value&&W.highlightElement(L.value)}),Ee(()=>v.query.scrollTo,()=>{const c=document.getElementById(`doc-for-${v.query.scrollTo}`);c==null||c.scrollIntoView({behavior:V.value?void 0:"smooth",block:"start"})}),(c,i)=>{var a,D,h,ee,te,se,ne,oe,re,le,ae,ce,ie,de,ue,me,pe,he,_e,fe,ye;return e(),n("div",fs,[u(O,{class:"float-right mt-2",meta:(a=t(o))==null?void 0:a.meta},null,8,["meta"]),r("div",ys,[r("h1",{id:`doc-for-${(D=t(o))==null?void 0:D.name}`,class:"!mb-3"},x((h=t(o))==null?void 0:h.name),9,vs),r("p",gs,[(ee=t(o))!=null&&ee.extends?(e(),n("span",bs,[ks,typeof((te=t(o))==null?void 0:te.extends[0])=="string"?(e(),_(X,{key:0,type:C((se=t(o))==null?void 0:se.extends)},null,8,["type"])):(e(!0),n(k,{key:1},H((ne=t(o))==null?void 0:ne.extends,w=>(e(),_(B,{key:t(I)(w),names:w},null,8,["names"]))),128))])):l("",!0),(oe=t(o))!=null&&oe.implements?(e(),n("span",xs,[$s,typeof((re=t(o))==null?void 0:re.implements[0])=="string"?(e(),_(X,{key:0,type:C((le=t(o))==null?void 0:le.implements)},null,8,["type"])):(e(!0),n(k,{key:1},H((ae=t(o))==null?void 0:ae.implements,w=>(e(),_(B,{key:t(I)(w),names:w},null,8,["names"]))),128))])):l("",!0)]),(ce=t(o))!=null&&ce.description?(e(),n("p",{key:0,class:"!mb-2",innerHTML:t(T)},null,8,Ts)):l("",!0),(ie=t(o))!=null&&ie.construct?(e(),n("div",ws,[Ms,r("pre",{ref_key:"codeblock",ref:L,class:"javascript"},[r("code",null,[y("new "+x((de=t(g))==null?void 0:de.global)+"."+x((ue=t(o))==null?void 0:ue.name)+"(",1),(e(!0),n(k,null,H(t(E),(w,be)=>{var ve,ge;return e(),n("span",{key:w.name},x(w.name)+x(((ge=(ve=t(E))==null?void 0:ve.length)!=null?ge:1)-1!==be?", ":""),1)}),128)),Ls])],512),t(o).construct.params?(e(),_(K,{key:0,parameters:t(o).construct.params},null,8,["parameters"])):l("",!0)])):l("",!0),u(Xt,{class:"mt-3",properties:(me=t(o))==null?void 0:me.props,methods:(pe=t(o))==null?void 0:pe.methods,events:(he=t(o))==null?void 0:he.events},null,8,["properties","methods","events"]),t(p)&&t(p).length?(e(),n("h2",Cs,"Properties")):l("",!0),(e(!0),n(k,null,H(t(p),w=>(e(),_(_s,{key:t(Z)(w),prop:w},null,8,["prop"]))),128)),t(m)&&t(m).length?(e(),n("h2",Hs,"Methods")):l("",!0),(e(!0),n(k,null,H(t(m),w=>(e(),_(xt,{key:t(Z)(w),method:w},null,8,["method"]))),128)),((_e=t(o))==null?void 0:_e.events)&&((fe=t(o))==null?void 0:fe.events.length)?(e(),n("h2",Es,"Events")):l("",!0),(e(!0),n(k,null,H((ye=t(o))==null?void 0:ye.events,w=>(e(),_(ze,{key:`e-${w.name}`,event:w},null,8,["event"]))),128))])])}}});export{Ss as default};
