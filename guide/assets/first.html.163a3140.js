import{r as n,o as s,c as a,a as t,b as e,w as p,F as o,f as c,d as l}from"./app.fc90f079.js";const u={},i=c('<h1 id="creating-your-first-command" tabindex="-1"><a class="header-anchor" href="#creating-your-first-command" aria-hidden="true">#</a> Creating your first command</h1><h2 id="creating-a-new-command" tabindex="-1"><a class="header-anchor" href="#creating-a-new-command" aria-hidden="true">#</a> Creating a new command</h2><p>Let&#39;s start by creating a new file in your commands directory and initializing a new class extending from the <code>Command</code> class.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gcommands&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// or</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gcommands&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> Hello<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>This creates a new class extending from the <code>Command</code> class, and exports it for use.</p><h2 id="setting-the-name-and-description-of-the-command" tabindex="-1"><a class="header-anchor" href="#setting-the-name-and-description-of-the-command" aria-hidden="true">#</a> Setting the name and description of the command</h2>',6),r=l("Next we need to set the "),d=t("code",null,"name",-1),m=l(" and "),k=t("code",null,"description",-1),b=l(" of the command, we can do this by using the "),h=t("code",null,"constructor()",-1),g=l(" and "),f=t("code",null,"super()",-1),w=l(". You can also create new "),v=t("code",null,"CommandOptions",-1),y=l(" by using the "),x=t("code",null,"CommandOptionsBuilder",-1),C=l(", explained "),j=l("here"),H=l("."),q=c('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gcommands&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Set the name of the command</span>\n      description<span class="token operator">:</span> <span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Set the description of the command</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="responding-to-the-command" tabindex="-1"><a class="header-anchor" href="#responding-to-the-command" aria-hidden="true">#</a> Responding to the command</h2><p>Now we need to actualy respond to the user. We can do this by creating the <code>run()</code> function in our command.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Ephemeral messages only work on slash commands.</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> respond<span class="token punctuation">,</span> author <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">respond</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello **</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>author<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">**!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Send a response</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),N=l("The "),O=t("code",null,"respond",-1),R=l(" function allows you to send responses with message, slash and context menu commands."),S=t("br",null,null,-1),T=l(" The respond function works the same way as "),L=t("code",null,"TextBasedChannel.send",-1),B=l(" function but has more options. You can find them "),G={href:"https://gcommands.js.org/docs/#/docs/main/dev/typedef/GPayloadOptions",target:"_blank",rel:"noopener noreferrer"},W=l("here"),Y=c('<h2 id="resulting-code" tabindex="-1"><a class="header-anchor" href="#resulting-code" aria-hidden="true">#</a> Resulting code</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gcommands&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>\n      description<span class="token operator">:</span> <span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> respond<span class="token punctuation">,</span> author <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">respond</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello **</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>author<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">**!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',2);u.render=function(c,l){const u=n("RouterLink"),$=n("OutboundLink");return s(),a(o,null,[i,t("p",null,[r,d,m,k,b,h,g,f,w,v,y,x,C,e(u,{to:"/gcommands-latest/commands/usingbuilders.html"},{default:p((()=>[j])),_:1}),H]),q,t("p",null,[N,O,R,S,T,L,B,t("a",G,[W,e($)])]),Y],64)};export{u as default};