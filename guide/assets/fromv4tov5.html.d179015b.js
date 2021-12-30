import{r as n,o as s,c as a,a as e,b as p,w as t,F as c,f as l,d as o}from"./app.fc90f079.js";const i={},r=l('<h1 id="updating-from-v4-to-v5" tabindex="-1"><a class="header-anchor" href="#updating-from-v4-to-v5" aria-hidden="true">#</a> Updating from v4 to v5</h1><h2 id="changes-in-v5" tabindex="-1"><a class="header-anchor" href="#changes-in-v5" aria-hidden="true">#</a> Changes in v5</h2><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> docs\n</span><span class="token prefix inserted">+</span><span class="token line"> command classes\n</span><span class="token prefix inserted">+</span><span class="token line"> event classes\n</span><span class="token prefix inserted">+</span><span class="token line"> cooldown bypass for app owner/team\n</span><span class="token prefix inserted">+</span><span class="token line"> typings\n</span><span class="token prefix inserted">+</span><span class="token line"> gpayload\n</span><span class="token prefix inserted">+</span><span class="token line"> ginteraction\n</span><span class="token prefix inserted">+</span><span class="token line"> support ws (raw) events\n</span><span class="token prefix inserted">+</span><span class="token line"> normal arguments\n</span><span class="token prefix inserted">+</span><span class="token line"> inhibitors major change\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> SlashCommand.\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> CommandType.\n</span></span>\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;interaction&gt;.createdTimestamp\n</span><span class="token prefix inserted">+</span><span class="token line"> interaction.think() in cmd\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> client.commands\n</span><span class="token prefix deleted">-</span><span class="token line"> client.aliases\n</span><span class="token prefix deleted">-</span><span class="token line"> client.events\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> client.gcommands\n</span><span class="token prefix inserted">+</span><span class="token line"> client.galiases\n</span><span class="token prefix inserted">+</span><span class="token line"> client.gevents\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> guild.prefix\n</span><span class="token prefix deleted">-</span><span class="token line"> guild.language\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> guild.getCommandPrefix()\n</span><span class="token prefix inserted">+</span><span class="token line"> guild.getLanguage()\n</span></span>\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> setDisabled() to MessageSelectMenu\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;gcommands&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> wait <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;util&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">promisify</span><span class="token punctuation">(</span>setTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span>\n      description<span class="token operator">:</span> <span class="token string">&quot;Pongs the bot&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">async</span> <span class="token function">run</span><span class="token punctuation">(</span>\n    <span class="token parameter"><span class="token punctuation">{</span> client<span class="token punctuation">,</span> interaction<span class="token punctuation">,</span> member<span class="token punctuation">,</span> message<span class="token punctuation">,</span> guild<span class="token punctuation">,</span> channel<span class="token punctuation">,</span> respond<span class="token punctuation">,</span> edit <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    args</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    interaction<span class="token punctuation">.</span><span class="token function">think</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">await</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">edit</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Pong! WS: **</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>client<span class="token punctuation">.</span>ws<span class="token punctuation">.</span>ping<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms**</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;gcommands&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Event <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>\n      once<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      ws<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">async</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">client<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="more-changes" tabindex="-1"><a class="header-anchor" href="#more-changes" aria-hidden="true">#</a> More Changes</h2>',8),u=o("Arguments");i.render=function(l,o){const i=n("RouterLink");return s(),a(c,null,[r,e("ul",null,[e("li",null,[p(i,{to:"/gcommands-latest/arguments/usingargsincmd.html"},{default:t((()=>[u])),_:1})])])],64)};export{i as default};