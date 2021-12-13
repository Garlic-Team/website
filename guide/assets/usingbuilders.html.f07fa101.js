import{r as n,o as s,c as a,a as p,b as t,F as e,d as o,f as c}from"./app.82252f83.js";const u={},l=p("h1",{id:"using-the-command-builders",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#using-the-command-builders","aria-hidden":"true"},"#"),o(" Using the command builders")],-1),i=p("h2",{id:"the-commandoptionsbuilder",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#the-commandoptionsbuilder","aria-hidden":"true"},"#"),o(" The CommandOptionsBuilder")],-1),r=o("The "),k={href:"https://gcommands.js.org/docs/#/docs/main/main/class/CommandOptionsBuilder",target:"_blank",rel:"noopener noreferrer"},m=p("code",null,"CommandOptionsBuilder",-1),d=o(" can be used to create CommandOptions, like the name or description of a command."),b=c('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> CommandOptionsBuilder <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;gcommands&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">CommandOptionsBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&#39;This is a example&#39;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">setCooldown</span><span class="token punctuation">(</span><span class="token string">&#39;2s&#39;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">setContext</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n            <span class="token comment">// And all other options</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="the-commandargsoptionbuilder" tabindex="-1"><a class="header-anchor" href="#the-commandargsoptionbuilder" aria-hidden="true">#</a> The CommandArgsOptionBuilder</h2>',2),g=o("The "),h={href:"https://gcommands.js.org/docs/#/docs/main/main/class/CommandArgsOptionBuilder",target:"_blank",rel:"noopener noreferrer"},f=p("code",null,"CommandArgsOptionBuilder",-1),C=o(" can be used to create new arguments."),w=c('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> ArgumentType<span class="token punctuation">,</span> CommandOptionsBuilder<span class="token punctuation">,</span> CommandArgsOptionBuilder <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;gcommands&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">CommandOptionsBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token comment">// Add one argument</span>\n            <span class="token punctuation">.</span><span class="token function">addArg</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CommandArgsOptionBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&#39;The example message&#39;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setPrompt</span><span class="token punctuation">(</span><span class="token string">&#39;What is your example message?&#39;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setRequired</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span>ArgumentType<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">)</span>\n            <span class="token punctuation">)</span>\n            <span class="token comment">// Add a array of arguments</span>\n            <span class="token punctuation">.</span><span class="token function">addArgs</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n                <span class="token keyword">new</span> <span class="token class-name">CommandArgsOptionBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&#39;The example message&#39;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setPrompt</span><span class="token punctuation">(</span><span class="token string">&#39;What is your example message?&#39;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setRequired</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span>ArgumentType<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="the-commandargschoiceoptionbuilder" tabindex="-1"><a class="header-anchor" href="#the-commandargschoiceoptionbuilder" aria-hidden="true">#</a> The CommandArgsChoiceOptionBuilder</h2>',2),y=o("The "),A={href:"https://gcommands.js.org/docs/#/docs/main/main/class/CommandArgsChoiceBuilder",target:"_blank",rel:"noopener noreferrer"},B=p("code",null,"CommandArgsChoiceBuilder",-1),x=o(" can be used to create new argument choices."),O=c('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> ArgumentType<span class="token punctuation">,</span> CommandOptionsBuilder<span class="token punctuation">,</span> CommandArgsOptionBuilder<span class="token punctuation">,</span> CommandArgsChoiceBuilder <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;gcommands&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">CommandOptionsBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">addArg</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CommandArgsOptionBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token comment">// Add one choice</span>\n                <span class="token punctuation">.</span><span class="token function">addChoice</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CommandArgsChoiceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n                <span class="token punctuation">)</span>\n                <span class="token comment">// Add a array of choices</span>\n                <span class="token punctuation">.</span><span class="token function">addChoices</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n                    <span class="token keyword">new</span> <span class="token class-name">CommandArgsChoiceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                        <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span>\n                        <span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">]</span><span class="token punctuation">)</span>\n            <span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',1);u.render=function(o,c){const u=n("OutboundLink");return s(),a(e,null,[l,i,p("p",null,[r,p("a",k,[m,t(u)]),d]),b,p("p",null,[g,p("a",h,[f,t(u)]),C]),w,p("p",null,[y,p("a",A,[B,t(u)]),x]),O],64)};export{u as default};
