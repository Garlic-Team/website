import{r as n,o as a,c as s,a as e,b as t,w as p,F as i,d as r,f as l}from"./app.5625e3e9.js";const o={},c=e("h1",{id:"creating-your-first-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creating-your-first-plugin","aria-hidden":"true"},"#"),r(" Creating your first plugin")],-1),u=e("h2",{id:"what-is-a-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-a-plugin","aria-hidden":"true"},"#"),r(" What is a plugin?")],-1),d=r("GCommands Next has started to support plugins. A plugin is an addition to GCommands that will make your job easier. Users can create custom plugins for inhibitors, events and such. GCommands has a couple of official plugins, which can be found "),g={href:"https://github.com/Garlic-Team/gcommands-plugins/",target:"_blank",rel:"noopener noreferrer"},h=r("here"),m=r("."),b=l('<h2 id="creating-a-plugin" tabindex="-1"><a class="header-anchor" href="#creating-a-plugin" aria-hidden="true">#</a> Creating a plugin</h2><p>First we need to tell ourselves if we want to do the plugin as an npm package, or some folder just for us. If we want to do the plugin as an npm package then we need to make our package called <code>gcommands-plugin-{name}</code>. If we want it purely just a folder then we just need to make a <code>plugins</code> folder, into which we put the plugin folder.</p><p>You can also do the plugin in TypeScript, but you don&#39;t have to. If you do make the plugin in TypeScript, you have to build the plugin before publishing.</p><p>Now that we have everything ready, let&#39;s create the main <code>index.js</code> file for the plugin.<br> Then we import <code>Plugin</code> from <code>gcommands</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Plugin<span class="token punctuation">,</span> registerDirectory <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gcommands&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Plugin</span><span class="token punctuation">(</span><span class="token string">&#39;my-first-plugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">registerDirectory</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;listeners&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',5),k=r("We have registered a listeners folder that we will keep in the plugin. Then all you have to do is create listeners in this folder, as already shown "),f=r("here"),w=l('<h3 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> Package</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>├── node_modules\n    └── gcommands-plugin-my-pluginň\n        └── listeners\n            └── ready.js\n        └── index.js\n├── package.json\n└── src\n    └── index.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="folder" tabindex="-1"><a class="header-anchor" href="#folder" aria-hidden="true">#</a> Folder</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>├── node_modules\n├── package.json\n├── plugins\n    └── my-first-plugin\n        └── listeners\n            └── ready.js\n        └── index.js\n└── src\n    └── index.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',4);o.render=function(r,l){const o=n("OutboundLink"),y=n("RouterLink");return a(),s(i,null,[c,u,e("p",null,[d,e("a",g,[h,t(o)]),m]),b,e("p",null,[k,t(y,{to:"/getting-started/first-listener.html"},{default:p((()=>[f])),_:1})]),w],64)};export{o as default};