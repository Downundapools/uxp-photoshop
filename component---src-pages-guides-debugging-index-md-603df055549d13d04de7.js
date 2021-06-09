(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[8319],{71417:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return r},default:function(){return u}});var a=o(22122),n=o(19756),i=(o(15007),o(64983)),s=o(99536),l=["components"],r={},p={_frontmatter:r},h=s.Z;function u(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.mdx)(h,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"debugging-uxp-plugins"},"Debugging UXP Plugins"),(0,i.mdx)("p",null,"Although you'll certainly write your plugin code so that it has zero bugs, it is sometimes handy to know how to use the debugging tools available with UXP."),(0,i.mdx)("h2",{id:"debugging-tools"},"Debugging Tools"),(0,i.mdx)("p",null,"There are two ways to debug. The simplest way, suitable for many plugins, is to use the UXP Developer Tool. After a plugin has been loaded in the Developer Tool, choose ",(0,i.mdx)("inlineCode",{parentName:"p"},"Debug")," from the Actions menu for the plugin (on the far right of the Developer Tool window)."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"218px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"288.9908256880734%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/544165114740b71b8742735726c236a5/b53ac/devtool-ellipsis-menu.webp 218w"],sizes:"(max-width: 218px) 100vw, 218px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/544165114740b71b8742735726c236a5/5c416/devtool-ellipsis-menu.png 218w"],sizes:"(max-width: 218px) 100vw, 218px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/544165114740b71b8742735726c236a5/5c416/devtool-ellipsis-menu.png",alt:"Debugging Tools",title:"Debugging Tools",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"The other way, if you've loaded your plugin using the command-line tools, is to use ",(0,i.mdx)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/javascript"},"Chrome DevTools"),", as follows:"),(0,i.mdx)("p",null,"In a new Chrome window, navigate to ",(0,i.mdx)("inlineCode",{parentName:"p"},"chrome://inspect"),'. Press Configure... next to Discover network targets checkbox, and add localhost:xxxx (where "xxxx" is the port you declared in your debug.json file). '),(0,i.mdx)("p",null,"When the extension is loaded, it should show up with its ID on this page."),(0,i.mdx)("p",null,"Make sure that you check ",(0,i.mdx)("inlineCode",{parentName:"p"},"Pause on caught exceptions")," in the Chrome debugger (on the right side of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Sources")," tab). "),(0,i.mdx)("p",null,"The Chrome debugger arguably has more features than the UXP Developer Tool, but many of those features are not applicable in the UXP environment. The best thing about the UXP Developer Tool is that you can choose ",(0,i.mdx)("inlineCode",{parentName:"p"},"Watch")," from the Actions menu, and the tool will automatically reload your plugin whenever you've changed your JavaScript, HTML, or CSS files. You can also select ",(0,i.mdx)("inlineCode",{parentName:"p"},"Reload")," from the Actions menu whenever you want to manually reload your plugin."),(0,i.mdx)("h2",{id:"why-doesnt-my-plugin-work"},"Why Doesn't My Plugin Work?"),(0,i.mdx)("p",null,"You've just written a UXP plugin that will change the world and make you famous (in a geek-culture kind of way). But it doesn't work! Why not?"),(0,i.mdx)("h3",{id:"manifest-problems"},"Manifest Problems"),(0,i.mdx)("p",null,"The JSON format is known for being easier for humans to read than XML. That doesn't mean it's easy, though. The smallest glitch in your JSON manifest file (a misplaced bracket, a missing comma, etc.) can cause your plugin to fail to load. You can use a JSON linter (one is built into VS code, and there are many available online both as apps and built into websites). Bottom line: if you're not seeing anything in Photoshop, check the Developer Tool for error messages, and look carefully at your ",(0,i.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file."),(0,i.mdx)("h3",{id:"installation-problems"},"Installation Problems"),(0,i.mdx)("p",null,"During the beta period for Photoshop UXP, there were a variety of ways to get plugins into the directory where Photoshop could find them. Now, there is just one approved way to bring your development plugin into Photoshop: the ",(0,i.mdx)("a",{parentName:"p",href:"/uxp-photoshop/guides/uxp-developer-tool/"},"UXP Developer Tool"),"."),(0,i.mdx)("h3",{id:"javascript-problems"},"JavaScript Problems"),(0,i.mdx)("p",null,"If your plugin fails to run due to a JavaScript error, usually that error will show up in the debugger console. Like most error messages since the dawn of the computer age, sometimes the error message is buried in a cryptic stack trace, but it will definitely be in there, usually with the offending JavaScript line number displayed at the top right of the trace."),(0,i.mdx)("h3",{id:"css-problems"},"CSS Problems"),(0,i.mdx)("p",null,"Although the browser that underlies UXP supports common HTML/CSS use cases that enable a rich UI for plugins, there are some aspects of those languages that it doesn't support, or where the behavior is limited and/or different."),(0,i.mdx)("p",null,'Troubleshooting CSS is a full-time job for some web developers. For UXP plugins, it\'s not as bad because the CSS is only targeting one "browser." On the other hand, CSS bugs are often difficult to track down. Selective refinement is one way to track CSS bugs (comment out or cut parts of CSS definitions until you see something change).'),(0,i.mdx)("p",null,"You can also check the Debug window; the leftmost ",(0,i.mdx)("inlineCode",{parentName:"p"},"Elements")," menu lets you expand the HTML in your plugin. Selecting an element in that window shows you the CSS that's been applied (on the right side of the debugger window, under ",(0,i.mdx)("inlineCode",{parentName:"p"},"Styles"),"):"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"617px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"152.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/9f64219aa06da99471b4368620df181e/cb523/css-styles.webp 320w","/uxp-photoshop/static/9f64219aa06da99471b4368620df181e/0acf1/css-styles.webp 617w"],sizes:"(max-width: 617px) 100vw, 617px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/9f64219aa06da99471b4368620df181e/72799/css-styles.png 320w","/uxp-photoshop/static/9f64219aa06da99471b4368620df181e/bc962/css-styles.png 617w"],sizes:"(max-width: 617px) 100vw, 617px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/9f64219aa06da99471b4368620df181e/bc962/css-styles.png",alt:"Styles Tab",title:"Styles Tab",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"The Developer Tool CSS view is not as powerful as that in a browser; for example, it doesn't let you change the CSS \"on the fly.\" But it's very useful nonetheless."),(0,i.mdx)("h3",{id:"not-watching"},"Not Watching"),(0,i.mdx)("p",null,'The UXP Developer Tool has a great "watch" feature that automatically reloads your plugins when (almost) any of the files in your plugin folder change. But unless you enable this watch feature (by selecting ',(0,i.mdx)("inlineCode",{parentName:"p"},"Watch")," in the Actions column), nothing will change in Photoshop when you save a change to one of your files while editing."),(0,i.mdx)("p",null,"You can always reload your plugin manually, but it's nice when the system does it for you."),(0,i.mdx)("h3",{id:"gremlins"},"Gremlins"),(0,i.mdx)("p",null,"Sometimes, restarting Photoshop and the UXP Developer Tool will make a problem mysteriously vanish. Why does this happen? Yes, yes it does."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-debugging-index-md-603df055549d13d04de7.js.map