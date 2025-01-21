"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[27865],{61606:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return i}});var m=a(87462),n=a(45987),r=(a(15007),a(64983)),p=a(91515);const o=["components"],l={},d={_frontmatter:l},s=p.Z;function i(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,r.mdx)(s,(0,m.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"layercomps"},"LayerComps"),(0,r.mdx)("p",null,"A collections class allowing for array access into a document's Layer Comps"),(0,r.mdx)("p",null,"Access this collection through ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/#layercomps"},"Document.layerComps")," property. For example,\nfollowing adds a new Layer Comp to the collection:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const comp = await app.activeDocument.layerComps.add();\n")),(0,r.mdx)("h2",{id:"indexable"},"Indexable"),(0,r.mdx)("p",null,"▪ ","[index: ",(0,r.mdx)("em",{parentName:"p"},"number"),"]",": ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/layercomp/"},(0,r.mdx)("em",{parentName:"a"},"LayerComp"))),(0,r.mdx)("p",null,"Used to access the Layer Comp in the collection"),(0,r.mdx)("p",null,"Access this collection through ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/#layercomps"},"Document.layerComps")," property. For example,\nfollowing adds a new Layer Comp to the collection:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const comp = await app.activeDocument.layerComps.add();\n")),(0,r.mdx)("h2",{id:"properties"},"Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"length"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Number of ",(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/layercomp/"},"LayerComp")," elements in this collection")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"parent"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,r.mdx)("em",{parentName:"a"},"Document"))),(0,r.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The owner document of this Layer comp collection")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"typename"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The name for this object collection: LayerComps")))),(0,r.mdx)("h2",{id:"methods"},"Methods"),(0,r.mdx)("h3",{id:"add"},"add"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.0"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Promise"),"<",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/layercomp/"},(0,r.mdx)("em",{parentName:"a"},"LayerComp")),">"),(0,r.mdx)("p",null,"Adds a Layer Comp to the document's collection. If no options are given, only visibility will be recorded."),(0,r.mdx)("p",null,"Note: This command will fail if the document is flat, that is, only a Background and no other layers."),(0,r.mdx)("h4",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/createoptions/layercompcreateoptions/"},(0,r.mdx)("em",{parentName:"a"},"LayerCompCreateOptions"))),(0,r.mdx)("td",{parentName:"tr",align:"left"},"{}"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"An optional object literal containing key/value pairs as described by ",(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/createoptions/layercompcreateoptions/"},"LayerCompCreateOptions")," ",(0,r.mdx)("inlineCode",{parentName:"td"},'javascript const options = {    name: "mockup",   comment: "First attempt",   visibility: true,   position: true  }; await require(\'photoshop\').app.activeDocument.layerComps.add(options); '))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getallbyname"},"getAllByName"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.0"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/layercomp/"},(0,r.mdx)("em",{parentName:"a"},"LayerComp")),"[]"),(0,r.mdx)("p",null,"Get all Layer Comps by name"),(0,r.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"removeall"},"removeAll"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.0"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"Clears all Layer Comps from this collection"))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-layercomps-md-724406988f80e1da1cf2.js.map