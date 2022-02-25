(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[772],{23548:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return h}});var n,o=a(22122),i=a(19756),p=(a(15007),a(64983)),r=a(99536),s=["components"],m={},l=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)}),d={_frontmatter:m},c=r.Z;function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,p.mdx)(c,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"editing-the-photoshop-document"},"Editing the Photoshop document"),(0,p.mdx)("p",null,"In this tutorial, you'll learn how to edit your document (more specifically, edit the layer names within your document)."),(0,p.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,p.mdx)("p",null,"To follow this tutorial, you need to have a plugin development project ready to go. If you don't have a plugin\ndevelopment project, yet, please first follow\nthe ",(0,p.mdx)("a",{parentName:"p",href:"../creating-your-first-plugin/index.md"},"Creating your first plugin tutorial"),"."),(0,p.mdx)("h2",{id:"step-1-adjust-the-panel-ui"},"Step 1: Adjust the panel UI"),(0,p.mdx)("p",null,"Since the plugin no longer needs to show the layer names in its UI, we can remove some elements from the ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.html")," file."),(0,p.mdx)("p",null,"Remove the ",(0,p.mdx)("inlineCode",{parentName:"p"},'<sp-body id="layers" />')," element, its associated styles, and rename the ",(0,p.mdx)("em",{parentName:"p"},'"Populate Layers"')," button to ",(0,p.mdx)("em",{parentName:"p"},'"Rename Layers"'),":"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <script src="index.js"><\/script>\n  </head>\n  <style>\n    body {\n      color: white;\n      padding: 0 16px;\n    }\n  </style>\n  <body>\n    <sp-heading>Layers</sp-heading>\n    <footer>\n      <sp-button id="btnRename">Rename Layers</sp-button>\n    </footer>\n  </body>\n</html>\n')),(0,p.mdx)("p",null,"Note that we also changed the button's ",(0,p.mdx)("inlineCode",{parentName:"p"},"id")," to ",(0,p.mdx)("inlineCode",{parentName:"p"},'"btnRename"'),". With that (after re-loading, in case you don't have UDT's ",(0,p.mdx)("em",{parentName:"p"},'"Watch"')," function enabled), your panel should look like this:"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"251px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"148.20717131474103%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/a1942babd3e4a14bb5cfae6486e921d4/bbf50/panel.webp 251w"],sizes:"(max-width: 251px) 100vw, 251px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/a1942babd3e4a14bb5cfae6486e921d4/26abe/panel.png 251w"],sizes:"(max-width: 251px) 100vw, 251px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/a1942babd3e4a14bb5cfae6486e921d4/26abe/panel.png",alt:'A Photoshop panel with a button "Rename Layers"',title:'A Photoshop panel with a button "Rename Layers"',loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("h2",{id:"step-2-adjust-the-indexjs"},"Step 2: Adjust the ",(0,p.mdx)("inlineCode",{parentName:"h2"},"index.js")),(0,p.mdx)("p",null,"Next, you need to adjust the ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.js")," code to match the new functionality. You might have already tried (while tinkering around) to just use something like this:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-js"},"layer.name = `${layer.name} (${layer.opacity} %)`;\n")),(0,p.mdx)("p",null,'While that\'s already close, you will run into an error stating that "Such events are only allowed from inside the modal scope":'),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"994px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/1f41fd1df8758fb975c9221a2327216e/cb523/modal-execution-error.webp 320w","/uxp-photoshop/static/1f41fd1df8758fb975c9221a2327216e/797b9/modal-execution-error.webp 640w","/uxp-photoshop/static/1f41fd1df8758fb975c9221a2327216e/ce056/modal-execution-error.webp 994w"],sizes:"(max-width: 994px) 100vw, 994px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/1f41fd1df8758fb975c9221a2327216e/72799/modal-execution-error.png 320w","/uxp-photoshop/static/1f41fd1df8758fb975c9221a2327216e/6af66/modal-execution-error.png 640w","/uxp-photoshop/static/1f41fd1df8758fb975c9221a2327216e/75609/modal-execution-error.png 994w"],sizes:"(max-width: 994px) 100vw, 994px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/1f41fd1df8758fb975c9221a2327216e/75609/modal-execution-error.png",alt:'Chrome Developer Tools showing an error: "Uncaught Error: Event: select may modify the state of Photoshop. Such events are only allowed from inside a modal scope"',title:'Chrome Developer Tools showing an error: "Uncaught Error: Event: select may modify the state of Photoshop. Such events are only allowed from inside a modal scope"',loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"To open a Chrome Developer Tools window for your plugin, select ",(0,p.mdx)("em",{parentName:"p"},'"Debug"')," in the plugin actions menu in the UXP\nDeveloper Tool."),(0,p.mdx)("p",null,"To get this to work, you need to wrap your code in a ",(0,p.mdx)("inlineCode",{parentName:"p"},"window.require('photoshop').core.executeAsModal(targetFunction, options)")," call. This creates a context in which your plugin has exclusive access to manipulating the document and thus ensures that no changes can be made to the document while your code executes (which could result in strange errors). You need to use ",(0,p.mdx)("inlineCode",{parentName:"p"},"executeAsModal")," for any operation that could edit the document. ",(0,p.mdx)("a",{parentName:"p",href:"/uxp-photoshop/src/pages/ps_reference/media/executeasmodal.md"},"Learn more about modal execution"),"."),(0,p.mdx)("p",null,"Adjust your ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.js")," code to look like this:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-js"},'function renameLayerNames() {\n  return window.require("photoshop").core.executeAsModal(\n    () => {\n      // now, we have write-access\n\n      const app = window.require("photoshop").app;\n\n      app.activeDocument.layers.forEach((layer) => {\n        layer.name = `${layer.name} (${layer.opacity} %)`;\n      });\n    },\n    {\n      commandName: "Rename layers",\n    }\n  );\n}\n\ndocument\n  .getElementById("btnRename")\n  .addEventListener("click", renameLayerNames);\n')),(0,p.mdx)("p",null,"When you reload your plugin using the UDT and press the new button, you can see that the layer names get adjusted accordingly:"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"254px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.362204724409445%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/a1cd6f74f71ce29dc3092b96a5b362cb/14ddf/layer-names.webp 254w"],sizes:"(max-width: 254px) 100vw, 254px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/a1cd6f74f71ce29dc3092b96a5b362cb/6a91e/layer-names.png 254w"],sizes:"(max-width: 254px) 100vw, 254px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/a1cd6f74f71ce29dc3092b96a5b362cb/6a91e/layer-names.png",alt:'Photoshop Layers panel with layer names "Layer 1 (60 %)" and "Background (100 %)"',title:'Photoshop Layers panel with layer names "Layer 1 (60 %)" and "Background (100 %)"',loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("h2",{id:"step-3-solve-problem-with-consecutive-executions"},"Step 3: Solve problem with consecutive executions"),(0,p.mdx)("p",null,"If you already have some development experience (or pressed the ",(0,p.mdx)("em",{parentName:"p"},'"Rename Layers"')," buttons more than one time), you might already see a problem with our implementation. While the button works perfectly for the first time, every other time, it adds another percentage to the layer name:"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"246px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.609756097560975%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/23f1556277ec5c03fed1101ac6af1b8d/18074/layer-name-problem.webp 246w"],sizes:"(max-width: 246px) 100vw, 246px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/23f1556277ec5c03fed1101ac6af1b8d/92252/layer-name-problem.png 246w"],sizes:"(max-width: 246px) 100vw, 246px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/23f1556277ec5c03fed1101ac6af1b8d/92252/layer-name-problem.png",alt:'A layer with the name "Layer 1 (60 %) (60 %) (60 %)"',title:'A layer with the name "Layer 1 (60 %) (60 %) (60 %)"',loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"To fix this, change your layer loop to the following:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-js"},"// [...]\napp.activeDocument.layers.forEach((layer) => {\n    // Regular Expression that searches for the layer's name\n    // without a previously appended layer opacity.\n    // Cf. https://regex101.com/r/iWF1Yw/1\n    const regExp = /^(.*?)( \\(\\d+ %\\))?$/;\n    const baseName = layer.name.match(regExp)[1];\n    layer.name = `${baseName} (${layer.opacity} %)`;\n});\n// [...]\n")),(0,p.mdx)("p",null,"This extracts the ",(0,p.mdx)("inlineCode",{parentName:"p"},"baseName"),", i.e., the layer name without an optional percentage after it, and always uses this as the base for the new layer name."),(0,p.mdx)("h2",{id:"next-steps"},"Next steps"),(0,p.mdx)("p",null,'You now know how to use the Photoshop APIs to both read and write your document. As a rule of thumb, calling methods and setting properties that are declared as "Read-write" in the ',(0,p.mdx)("a",{parentName:"p",href:"/uxp-photoshop/src/pages/ps_reference/index.md"},"Photoshop API Reference")," requires a modal execution context."),(0,p.mdx)("p",null,(0,p.mdx)("a",{parentName:"p",href:"../writing-a-file/index.md"},"In the next tutorial"),", you will learn how to use the UXP APIs to interact with the file system and create a ",(0,p.mdx)("inlineCode",{parentName:"p"},".tsv")," file with a list of your layers."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-editing-the-document-index-md-b232e76764e001a63c3c.js.map