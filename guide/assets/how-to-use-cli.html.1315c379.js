import{r as e,o as a,c as n,a as s,b as t,w as o,F as l,d as r,f as c}from"./app.115d4de6.js";const i={},d=s("h1",{id:"what-is-a-cli",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#what-is-a-cli","aria-hidden":"true"},"#"),r(" What is a CLI?")],-1),p=r("CLI stands for "),u={href:"https://en.wikipedia.org/wiki/Command-line_interface",target:"_blank",rel:"noopener noreferrer"},m=r("Command-Line Interface"),h=r("."),g=s("p",null,"We created the CLI to make it easier for you to create your projects using GCommands.",-1),b=s("p",null,"Our CLI can generate a basic project, a component (command, listener) for you.",-1),f=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),r(),s("span",{class:"token function"},"install"),r(" @gcommands/cli -g\n")])])],-1),y=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),r(" global "),s("span",{class:"token function"},"add"),r(" @gcommands/cli\n")])])],-1),w=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),r(),s("span",{class:"token function"},"add"),r(" @gcommands/cli --global\n")])])],-1),j=c('<p>Then when you install <code>@gcommands/cli</code>, it will register the <code>gcommands</code> and <code>gc</code> commands</p><p>It is possible that <code>gc</code> will not work, so we also made a long version of <code>gcommands</code></p><h2 id="create-a-project" tabindex="-1"><a class="header-anchor" href="#create-a-project" aria-hidden="true">#</a> Create a project</h2><p>So once you have cli installed and you want to create a project, there is nothing easier than to open the folder in which you want the project to be created and you use:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gcommands new\n\n√ What&#39;s the name of your project? ... myfirstbot\n√ Select a language for your project » JavaScript\n√ Select a template for your project » Bot template\n√ Cloning the repository\n√ Moving the folder &amp; Creating config\n√ Installing dependencies\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Then you fill in the questions, and hit enter. The project will be created.</p>',6);i.render=function(r,c){const i=e("OutboundLink"),k=e("CodeGroupItem"),C=e("CodeGroup");return a(),n(l,null,[d,s("p",null,[p,s("a",u,[m,t(i)]),h]),g,b,t(C,null,{default:o((()=>[t(k,{title:"npm"},{default:o((()=>[f])),_:1}),t(k,{title:"yarn"},{default:o((()=>[y])),_:1}),t(k,{title:"pnpm"},{default:o((()=>[w])),_:1})])),_:1}),j],64)};export{i as default};
