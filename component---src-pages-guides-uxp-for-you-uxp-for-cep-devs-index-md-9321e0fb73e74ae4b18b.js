(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[5255],{72430:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return m}});var a=n(22122),o=n(19756),i=(n(15007),n(64983)),s=n(99536),r=["components"],l={},p={_frontmatter:l},d=s.Z;function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.mdx)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"uxp-for-cep-developers"},"UXP for CEP Developers"),(0,i.mdx)("h2",{id:"goodbye-cep"},"Goodbye CEP"),(0,i.mdx)("p",null,"The Common Extensibility Platform has been the method of choice for plugin developers who needed anything beyond the simplest of user interfaces. While it's still going to be around in Photoshop for some time, it will at some point be deprecated and then, eventually, removed from Photoshop."),(0,i.mdx)("p",null,"CEP is being retired for several reasons:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"CEP uses a full version of Chromium as a web host. This is very resource intensive for the host application, even more so since ",(0,i.mdx)("em",{parentName:"li"},"each")," CEP plugin runs in its ",(0,i.mdx)("em",{parentName:"li"},"own")," instance of Chromium."),(0,i.mdx)("li",{parentName:"ul"},"CEP doesn't talk directly to the host application, but requires that host scripts be written in ExtendScript, and passed to the app via EvalScript calls. So there are two different JavaScript engines running. In practice, this means that a plugin's code is artifically split between ExtendScript and JavaScript, and passing anything more than simple parameters between the two layers is awkward and inefficient."),(0,i.mdx)("li",{parentName:"ul"},"CEP plugins cannot use native host controls, so CEP dialogs and panels don't match host ones without a lot of CSS fiddling."),(0,i.mdx)("li",{parentName:"ul"},"The ExtendScript side of CEP uses a very old JavaScript version that lacks many modern features. As such, a developer must juggle two different JavaScript environments.")),(0,i.mdx)("h2",{id:"hello-uxp"},"Hello UXP"),(0,i.mdx)("p",null,"UXP supports the HTML and CSS you'll need to make simple or, with the addition of the React JavaScript framework, complex panels as well as dialogs and headless (no UI) plugins."),(0,i.mdx)("p",null,"Because UXP communicates directly with the host application, the issues associated with the CEP/ExtendScript interface disappear. In general, plugin development is simpler with UXP."),(0,i.mdx)("p",null,"UXP comes with a plugin loader and debugger that makes managing plugin development much simpler than what's available in CEP."),(0,i.mdx)("p",null,"UXP plugins can use the ",(0,i.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-css/"},"Spectrum CSS")," components, which can be used to provide theme-aware cross-platform user interfaces that look the same across CC applications."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-for-you-uxp-for-cep-devs-index-md-9321e0fb73e74ae4b18b.js.map