import{r as n,o as s,c as a,b as e,w as t,F as o,f as c,a as l,d as i}from"./app.0a9ae018.js";const p={},r=c('<h1 id="creating-your-first-listener" tabindex="-1"><a class="header-anchor" href="#creating-your-first-listener" aria-hidden="true">#</a> Creating your first listener</h1><h2 id="what-is-a-listener" tabindex="-1"><a class="header-anchor" href="#what-is-a-listener" aria-hidden="true">#</a> What is a listener?</h2><p>A listener listens to events that occur. This could be events from the discord API, or from GCommands.</p><h2 id="creating-a-listener" tabindex="-1"><a class="header-anchor" href="#creating-a-listener" aria-hidden="true">#</a> Creating a listener</h2><p>When setting up the client you added <code>path.join(__dirname, &#39;listeners&#39;)</code> so go ahead and open or create the listeners folder and create a new file in it.</p>',5),u=l("div",{class:"language-javascript ext-js line-numbers-mode"},[l("pre",{class:"language-javascript"},[l("code",null,[l("span",{class:"token keyword"},"const"),i(),l("span",{class:"token punctuation"},"{"),i(" Listener "),l("span",{class:"token punctuation"},"}"),i(),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"require"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"'gcommands'"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),i("\n\n"),l("span",{class:"token comment"},'// Create a new listener listening to the "ready" event'),i("\n"),l("span",{class:"token keyword"},"new"),i(),l("span",{class:"token class-name"},"Listener"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"{"),i("\n\t"),l("span",{class:"token comment"},"// Set the name for the listener"),i("\n\tname"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'ready'"),l("span",{class:"token punctuation"},","),i("\n\t"),l("span",{class:"token comment"},"// Set the event to listen to"),i("\n\tevent"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'ready'"),l("span",{class:"token punctuation"},","),i("\n\t"),l("span",{class:"token comment"},"// The function thats called when the event occurs"),i("\n\t"),l("span",{class:"token function-variable function"},"run"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token punctuation"},"("),l("span",{class:"token parameter"},"client"),l("span",{class:"token punctuation"},")"),i(),l("span",{class:"token operator"},"=>"),i(),l("span",{class:"token punctuation"},"{"),i("\n\t\t"),l("span",{class:"token keyword"},"return"),i(" console"),l("span",{class:"token punctuation"},"."),l("span",{class:"token function"},"log"),l("span",{class:"token punctuation"},"("),l("span",{class:"token template-string"},[l("span",{class:"token template-punctuation string"},"`"),l("span",{class:"token string"},"Ready! Initialized with "),l("span",{class:"token interpolation"},[l("span",{class:"token interpolation-punctuation punctuation"},"${"),i("client"),l("span",{class:"token punctuation"},"."),i("guilds"),l("span",{class:"token punctuation"},"."),i("cache"),l("span",{class:"token punctuation"},"."),i("size"),l("span",{class:"token interpolation-punctuation punctuation"},"}")]),l("span",{class:"token string"}," guilds"),l("span",{class:"token template-punctuation string"},"`")]),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),i("\n\t"),l("span",{class:"token punctuation"},"}"),i("\n"),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),i("\n\n")])]),l("div",{class:"line-numbers"},[l("span",{class:"line-number"},"1"),l("br"),l("span",{class:"line-number"},"2"),l("br"),l("span",{class:"line-number"},"3"),l("br"),l("span",{class:"line-number"},"4"),l("br"),l("span",{class:"line-number"},"5"),l("br"),l("span",{class:"line-number"},"6"),l("br"),l("span",{class:"line-number"},"7"),l("br"),l("span",{class:"line-number"},"8"),l("br"),l("span",{class:"line-number"},"9"),l("br"),l("span",{class:"line-number"},"10"),l("br"),l("span",{class:"line-number"},"11"),l("br"),l("span",{class:"line-number"},"12"),l("br"),l("span",{class:"line-number"},"13"),l("br"),l("span",{class:"line-number"},"14"),l("br")])],-1),k=l("div",{class:"language-javascript ext-js line-numbers-mode"},[l("pre",{class:"language-javascript"},[l("code",null,[l("span",{class:"token keyword"},"const"),i(),l("span",{class:"token punctuation"},"{"),i(" Listener "),l("span",{class:"token punctuation"},"}"),i(),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"require"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"'gcommands'"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),i("\n\n"),l("span",{class:"token comment"},'// Create a new listener listening to the "ready" event'),i("\n"),l("span",{class:"token keyword"},"new"),i(),l("span",{class:"token class-name"},"class"),i(),l("span",{class:"token keyword"},"extends"),i(),l("span",{class:"token class-name"},"Listener"),i(),l("span",{class:"token punctuation"},"{"),i("\n\t"),l("span",{class:"token function"},"constructor"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),i(),l("span",{class:"token punctuation"},"{"),i("\n\t\t"),l("span",{class:"token keyword"},"super"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"{"),i("\n\t\t\t"),l("span",{class:"token comment"},"// Set the name for the listener"),i("\n\t\t\tname"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'ready'"),l("span",{class:"token punctuation"},","),i("\n\t\t\t"),l("span",{class:"token comment"},"// Set the event to listen to"),i("\n\t\t\tevent"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'ready'"),l("span",{class:"token punctuation"},","),i("\n\t\t"),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),i("\n\t"),l("span",{class:"token punctuation"},"}"),i("\n\n\t"),l("span",{class:"token comment"},"// The function thats called when the event occurs"),i("\n\t"),l("span",{class:"token function"},"run"),l("span",{class:"token punctuation"},"("),l("span",{class:"token parameter"},"client"),l("span",{class:"token punctuation"},")"),i(),l("span",{class:"token punctuation"},"{"),i("\n\t\t"),l("span",{class:"token keyword"},"return"),i(" console"),l("span",{class:"token punctuation"},"."),l("span",{class:"token function"},"log"),l("span",{class:"token punctuation"},"("),l("span",{class:"token template-string"},[l("span",{class:"token template-punctuation string"},"`"),l("span",{class:"token string"},"Ready! Initialized with "),l("span",{class:"token interpolation"},[l("span",{class:"token interpolation-punctuation punctuation"},"${"),i("client"),l("span",{class:"token punctuation"},"."),i("guilds"),l("span",{class:"token punctuation"},"."),i("cache"),l("span",{class:"token punctuation"},"."),i("size"),l("span",{class:"token interpolation-punctuation punctuation"},"}")]),l("span",{class:"token string"}," guilds"),l("span",{class:"token template-punctuation string"},"`")]),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),i("\n\t"),l("span",{class:"token punctuation"},"}"),i("\n"),l("span",{class:"token punctuation"},"}"),i("\n")])]),l("div",{class:"line-numbers"},[l("span",{class:"line-number"},"1"),l("br"),l("span",{class:"line-number"},"2"),l("br"),l("span",{class:"line-number"},"3"),l("br"),l("span",{class:"line-number"},"4"),l("br"),l("span",{class:"line-number"},"5"),l("br"),l("span",{class:"line-number"},"6"),l("br"),l("span",{class:"line-number"},"7"),l("br"),l("span",{class:"line-number"},"8"),l("br"),l("span",{class:"line-number"},"9"),l("br"),l("span",{class:"line-number"},"10"),l("br"),l("span",{class:"line-number"},"11"),l("br"),l("span",{class:"line-number"},"12"),l("br"),l("span",{class:"line-number"},"13"),l("br"),l("span",{class:"line-number"},"14"),l("br"),l("span",{class:"line-number"},"15"),l("br"),l("span",{class:"line-number"},"16"),l("br"),l("span",{class:"line-number"},"17"),l("br"),l("span",{class:"line-number"},"18"),l("br")])],-1),d=c('<p>In this case, you don&#39;t define the client in the first place, you define the variable directly. So for example, if you have a <code>messageCreate</code> listener, the run function will be something like this: <code>run: (message) =&gt; {}</code>. discord.js puts a client in each structure, so you just use <code>message.client</code> afterwards. In the case of <code>class</code>, you can use <code>this.client</code> as you do with commands.</p><p>This listener listens to the <code>ready</code> event. The <code>ready</code> event gets emitted when your client becomes ready. After restarting your bot you should see this in your console:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Ready<span class="token operator">!</span> Initialized with <span class="token number">1</span> guilds\n</code></pre></div>',3);p.render=function(c,l){const i=n("CodeGroupItem"),p=n("CodeGroup");return s(),a(o,null,[r,e(p,null,{default:t((()=>[e(i,{title:"listener"},{default:t((()=>[u])),_:1}),e(i,{title:"class extends"},{default:t((()=>[k])),_:1})])),_:1}),d],64)};export{p as default};
