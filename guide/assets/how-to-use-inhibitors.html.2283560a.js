import{r as n,o as s,c as a,a as t,b as p,F as e,f as o,d as c}from"./app.c5e6a831.js";const l={},u=o('<h1 id="what-are-inhibitors" tabindex="-1"><a class="header-anchor" href="#what-are-inhibitors" aria-hidden="true">#</a> What are inhibitors?</h1><p>The inhibitor is used to check/execute a function before starting a command. They are terribly useful because at least you don&#39;t have to duplicate code in every command.</p><p>GCommands already comes with default inhibitors and these are:</p><ul><li><code>ChannelOnly</code></li><li><code>ClientPermissions</code></li><li><code>ClientRoles</code></li><li><code>Nsfw</code></li><li><code>Or</code></li><li><code>UserOnly</code></li><li><code>UserPermissions</code></li><li><code>UserRoles</code></li></ul><p>Simply import them in the command, and then add them to the <code>inhibitors</code> parameter.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>\n\tCommand<span class="token punctuation">,</span>\n\tInhibitor<span class="token operator">:</span> <span class="token punctuation">{</span> ChannelOnly <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;gcommands&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\tname<span class="token operator">:</span> <span class="token string">&quot;inhibitor-test&quot;</span><span class="token punctuation">,</span>\n\tinhibitors<span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token keyword">new</span> <span class="token class-name">ChannelOnly</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\tids<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;channelId&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;channelId 2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\tmessage<span class="token operator">:</span> <span class="token string">&quot;You can&#39;t use this command here!&quot;</span><span class="token punctuation">,</span>\n\t\t\tephemeral<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token operator">...</span>other<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>You may be saying to yourself, what is <code>OrInhibitor</code> for. You can put 2 inhibitors in there, for example UserOnly and ChannelOnly and as long as one of those inhibitors is satisfied, the code will continue.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>\n\tCommand<span class="token punctuation">,</span>\n\tInhibitor<span class="token operator">:</span> <span class="token punctuation">{</span> ChannelOnly<span class="token punctuation">,</span> UserOnly<span class="token punctuation">,</span> Or <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;gcommands&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\tname<span class="token operator">:</span> <span class="token string">&quot;inhibitor-test&quot;</span><span class="token punctuation">,</span>\n\tinhibitors<span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token keyword">new</span> <span class="token class-name">Or</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\tinhibitors<span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token keyword">new</span> <span class="token class-name">ChannelOnly</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\t\t\tids<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;channelId&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;channelId 2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token keyword">new</span> <span class="token class-name">UserOnly</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\t\t\tids<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;userId 2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\tmessage<span class="token operator">:</span> <span class="token string">&quot;You can&#39;t use this command here!&quot;</span><span class="token punctuation">,</span>\n\t\t\tephemeral<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token operator">...</span>other<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',8),i=c("You put something different in each inhibitor. See "),r={href:"https://garlic-team.js.org/docs/#/docs/gcommands/next/general/welcome",target:"_blank",rel:"noopener noreferrer"},k=c("documentation"),b=c(" for more information.");l.render=function(o,c){const l=n("OutboundLink");return s(),a(e,null,[u,t("p",null,[i,t("a",r,[k,p(l)]),b])],64)};export{l as default};
