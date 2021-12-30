import{r as n,o as s,c as a,b as t,w as e,F as o,f as c,a as l,d as p}from"./app.fc90f079.js";const i={},r=c('<h1 id="creating-your-first-listener" tabindex="-1"><a class="header-anchor" href="#creating-your-first-listener" aria-hidden="true">#</a> Creating your first listener</h1><h2 id="what-is-a-listener" tabindex="-1"><a class="header-anchor" href="#what-is-a-listener" aria-hidden="true">#</a> What is a listener?</h2><p>A listener listens to events that occur. This could be events from the discord API, or from GCommands.</p><h2 id="creating-a-listener" tabindex="-1"><a class="header-anchor" href="#creating-a-listener" aria-hidden="true">#</a> Creating a listener</h2><p>When setting up the client you added <code>path.join(__dirname, &#39;listeners&#39;)</code> so go ahead and open or create the listeners folder and create a new file in it.</p>',5),u=l("div",{class:"language-javascript ext-js line-numbers-mode"},[l("pre",{class:"language-javascript"},[l("code",null,[l("span",{class:"token keyword"},"const"),p(),l("span",{class:"token punctuation"},"{"),p("Listener"),l("span",{class:"token punctuation"},"}"),p(),l("span",{class:"token operator"},"="),p(),l("span",{class:"token function"},"require"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"'gcommands'"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),p("\n\n"),l("span",{class:"token comment"},'// Create a new listener listening to the "ready" event'),p("\n"),l("span",{class:"token keyword"},"new"),p(),l("span",{class:"token class-name"},"Listener"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"'ready'"),l("span",{class:"token punctuation"},","),p(),l("span",{class:"token punctuation"},"{"),p("\n\t"),l("span",{class:"token comment"},"// Set the name for the listener"),p("\n\tname"),l("span",{class:"token operator"},":"),p(),l("span",{class:"token string"},"'ready'"),l("span",{class:"token punctuation"},","),p("\n\t"),l("span",{class:"token comment"},"// The function thats called when the event occurs"),p("\n\t"),l("span",{class:"token function-variable function"},"run"),l("span",{class:"token operator"},":"),p(),l("span",{class:"token punctuation"},"("),l("span",{class:"token parameter"},"client"),l("span",{class:"token punctuation"},")"),p(),l("span",{class:"token operator"},"=>"),p(),l("span",{class:"token punctuation"},"{"),p("\n\t\t"),l("span",{class:"token keyword"},"return"),p(" console"),l("span",{class:"token punctuation"},"."),l("span",{class:"token function"},"log"),l("span",{class:"token punctuation"},"("),l("span",{class:"token template-string"},[l("span",{class:"token template-punctuation string"},"`"),l("span",{class:"token string"},"Ready! Initialized with "),l("span",{class:"token interpolation"},[l("span",{class:"token interpolation-punctuation punctuation"},"${"),p("client"),l("span",{class:"token punctuation"},"."),p("guilds"),l("span",{class:"token punctuation"},"."),p("cache"),l("span",{class:"token punctuation"},"."),p("size"),l("span",{class:"token interpolation-punctuation punctuation"},"}")]),l("span",{class:"token string"}," guilds"),l("span",{class:"token template-punctuation string"},"`")]),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),p("\n\t"),l("span",{class:"token punctuation"},"}"),p("\n"),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),p("\n\n")])]),l("div",{class:"line-numbers"},[l("span",{class:"line-number"},"1"),l("br"),l("span",{class:"line-number"},"2"),l("br"),l("span",{class:"line-number"},"3"),l("br"),l("span",{class:"line-number"},"4"),l("br"),l("span",{class:"line-number"},"5"),l("br"),l("span",{class:"line-number"},"6"),l("br"),l("span",{class:"line-number"},"7"),l("br"),l("span",{class:"line-number"},"8"),l("br"),l("span",{class:"line-number"},"9"),l("br"),l("span",{class:"line-number"},"10"),l("br"),l("span",{class:"line-number"},"11"),l("br"),l("span",{class:"line-number"},"12"),l("br")])],-1),k=l("div",{class:"language-javascript ext-js line-numbers-mode"},[l("pre",{class:"language-javascript"},[l("code",null,[l("span",{class:"token keyword"},"const"),p(),l("span",{class:"token punctuation"},"{"),p("Listener"),l("span",{class:"token punctuation"},"}"),p(),l("span",{class:"token operator"},"="),p(),l("span",{class:"token function"},"require"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"'gcommands'"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),p("\n\n"),l("span",{class:"token comment"},'// Create a new listener listening to the "ready" event'),p("\n"),l("span",{class:"token keyword"},"new"),p(),l("span",{class:"token class-name"},"class"),p(),l("span",{class:"token keyword"},"extends"),p(),l("span",{class:"token class-name"},"Listener"),p(),l("span",{class:"token punctuation"},"{"),p("\n\t"),l("span",{class:"token function"},"constructor"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),p(),l("span",{class:"token punctuation"},"{"),p("\n\t\t"),l("span",{class:"token keyword"},"super"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"'ready'"),l("span",{class:"token punctuation"},","),p(),l("span",{class:"token punctuation"},"{"),p("\n\t\t\t"),l("span",{class:"token comment"},"// Set the name for the listener"),p("\n\t\t\tname"),l("span",{class:"token operator"},":"),p(),l("span",{class:"token string"},"'ready'"),p("\n\t\t"),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),p("\n\t"),l("span",{class:"token punctuation"},"}"),p("\n\n\t"),l("span",{class:"token comment"},"// The function thats called when the event occurs"),p("\n\t"),l("span",{class:"token function"},"run"),l("span",{class:"token punctuation"},"("),l("span",{class:"token parameter"},"client"),l("span",{class:"token punctuation"},")"),p(),l("span",{class:"token punctuation"},"{"),p("\n\t\t"),l("span",{class:"token keyword"},"return"),p(" console"),l("span",{class:"token punctuation"},"."),l("span",{class:"token function"},"log"),l("span",{class:"token punctuation"},"("),l("span",{class:"token template-string"},[l("span",{class:"token template-punctuation string"},"`"),l("span",{class:"token string"},"Ready! Initialized with "),l("span",{class:"token interpolation"},[l("span",{class:"token interpolation-punctuation punctuation"},"${"),p("client"),l("span",{class:"token punctuation"},"."),p("guilds"),l("span",{class:"token punctuation"},"."),p("cache"),l("span",{class:"token punctuation"},"."),p("size"),l("span",{class:"token interpolation-punctuation punctuation"},"}")]),l("span",{class:"token string"}," guilds"),l("span",{class:"token template-punctuation string"},"`")]),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),p("\n\t"),l("span",{class:"token punctuation"},"}"),p("\n"),l("span",{class:"token punctuation"},"}"),p("\n")])]),l("div",{class:"line-numbers"},[l("span",{class:"line-number"},"1"),l("br"),l("span",{class:"line-number"},"2"),l("br"),l("span",{class:"line-number"},"3"),l("br"),l("span",{class:"line-number"},"4"),l("br"),l("span",{class:"line-number"},"5"),l("br"),l("span",{class:"line-number"},"6"),l("br"),l("span",{class:"line-number"},"7"),l("br"),l("span",{class:"line-number"},"8"),l("br"),l("span",{class:"line-number"},"9"),l("br"),l("span",{class:"line-number"},"10"),l("br"),l("span",{class:"line-number"},"11"),l("br"),l("span",{class:"line-number"},"12"),l("br"),l("span",{class:"line-number"},"13"),l("br"),l("span",{class:"line-number"},"14"),l("br"),l("span",{class:"line-number"},"15"),l("br"),l("span",{class:"line-number"},"16"),l("br")])],-1),d=l("p",null,[p("This listener listens to the "),l("code",null,"ready"),p(" event. The "),l("code",null,"ready"),p(" event gets emitted when your client becomes ready. After restarting your bot you should see this in your console:")],-1),m=l("div",{class:"language-bash ext-sh"},[l("pre",{class:"language-bash"},[l("code",null,[p("Ready"),l("span",{class:"token operator"},"!"),p(" Initialized with "),l("span",{class:"token number"},"1"),p(" guilds\n")])])],-1);i.render=function(c,l){const p=n("CodeGroupItem"),i=n("CodeGroup");return s(),a(o,null,[r,t(i,null,{default:e((()=>[t(p,{title:"listener"},{default:e((()=>[u])),_:1}),t(p,{title:"class listener"},{default:e((()=>[k])),_:1})])),_:1}),d,m],64)};export{i as default};