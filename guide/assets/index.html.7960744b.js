import{r as n,o as s,c as a,a as t,b as p,w as e,F as o,d as c,f as l}from"./app.54098185.js";const u={},i=t("h1",{id:"getting-started",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),c(" Getting started")],-1),r=t("h2",{id:"installing-dependencies",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#installing-dependencies","aria-hidden":"true"},"#"),c(" Installing dependencies")],-1),k=c("Before continuing make sure you have "),d={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},m=c("NodeJS"),b=c(" v16.6 or higher installed on your machine. You can verify your installation with "),g=t("code",null,"node -v",-1),h=c(" in your terminal."),f=t("div",{class:"language-bash ext-sh"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"npm"),c(),t("span",{class:"token function"},"install"),c(" gcommands@next-dev\n")])])],-1),v=t("div",{class:"language-bash ext-sh"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),c(),t("span",{class:"token function"},"add"),c(" gcommands@next-dev\n")])])],-1),y=t("div",{class:"language-bash ext-sh"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"pnpm"),c(),t("span",{class:"token function"},"add"),c(" gcommands@next-dev\n")])])],-1),w=l('<h2 id="basic-client" tabindex="-1"><a class="header-anchor" href="#basic-client" aria-hidden="true">#</a> Basic client</h2><div class="custom-container tip"><p class="custom-container-title">It&#39;s recommended to use a .env for storing your bots token.:::</p><p>Let&#39;s get started by creating a new GClient! The GClient is the hub that will be running your bot (connecting to the discord API).</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;dotenv&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>GClient<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gcommands&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>Intents<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;discord.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Search for plugins in node_modules (folder names starting with gcommands-plugin-) or plugins folder</span>\nGClient<span class="token punctuation">.</span>gplugins<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t<span class="token comment">// Register the directories where your commands/components/listeners will be located.</span>\n\tdirs<span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\tpath<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;commands&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\tpath<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\tpath<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;listeners&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token comment">// Set the prefix for message commands</span>\n\tmessagePrefix<span class="token operator">:</span> <span class="token string">&#39;!&#39;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// Set the guildId where you will be developing your bot. This is usefull cause guild slash commands update instantly.</span>\n\tdevGuildId<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEV_SERVER</span><span class="token punctuation">,</span>\n\t<span class="token comment">// Set the global cooldown for your bot</span>\n\tcooldown<span class="token operator">:</span> <span class="token string">&#39;30s&#39;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// Set the intents you will be using (https://discordjs.guide/popular-topics/intents.html#gateway-intents)</span>\n\tintents<span class="token operator">:</span> <span class="token punctuation">[</span>Intents<span class="token punctuation">.</span><span class="token constant">FLAGS</span><span class="token punctuation">.</span><span class="token constant">GUILDS</span><span class="token punctuation">,</span> Intents<span class="token punctuation">.</span><span class="token constant">FLAGS</span><span class="token punctuation">.</span><span class="token constant">GUILD_MESSAGES</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Listen to warnings and errors.</span>\nclient<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\nclient<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Login to the discord API</span>\nclient<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>That&#39;s it! Try running <code>node index.js</code> in your terminal!</p></div>',2);u.render=function(c,l){const u=n("OutboundLink"),_=n("CodeGroupItem"),x=n("CodeGroup");return s(),a(o,null,[i,r,t("p",null,[k,t("a",d,[m,p(u)]),b,g,h]),p(x,null,{default:e((()=>[p(_,{title:"npm"},{default:e((()=>[f])),_:1}),p(_,{title:"yarn"},{default:e((()=>[v])),_:1}),p(_,{title:"pnpm"},{default:e((()=>[y])),_:1})])),_:1}),w],64)};export{u as default};
