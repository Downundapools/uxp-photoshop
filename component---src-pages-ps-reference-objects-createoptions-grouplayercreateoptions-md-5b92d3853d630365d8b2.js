"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[32178],{29798:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return x}});var r=a(87462),n=a(45987),m=(a(15007),a(64983)),d=a(91515);const p=["components"],l={},o={_frontmatter:l},i=d.Z;function x(e){let{components:t}=e,a=(0,n.Z)(e,p);return(0,m.mdx)(i,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"grouplayercreateoptions"},"GroupLayerCreateOptions"),(0,m.mdx)("p",null,"An object literal can be constructed with any of the following properties\nand passed to ",(0,m.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/#createlayergroup"},"Document.createLayerGroup"),".\nAs a type, ",(0,m.mdx)("inlineCode",{parentName:"p"},"GroupLayerCreateOptions")," can be used in Typescript development."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"const options = { name: \"myGroup\", opacity: 50 };\nawait require('photoshop').app.activeDocument.createLayerGroup(options);\n")),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Default"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"blendMode"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#blendmode"},(0,m.mdx)("em",{parentName:"a"},"BlendMode"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"NORMAL"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Blend mode of the newly created layer or group.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"color"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#labelcolors"},(0,m.mdx)("em",{parentName:"a"},"LabelColors"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"NONE"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Label color of the newly created layer or group.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"fromLayers"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/layer/"},(0,m.mdx)("em",{parentName:"a"},"Layer"))," ","|"," ",(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/layer/"},(0,m.mdx)("em",{parentName:"a"},"Layer")),"[]"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Layer(s) to populate the newly created group.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"group"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"boolean")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"false"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Whether to use previous layer to create clipping mask.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("del",{parentName:"td"},"mode")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#blendmode"},(0,m.mdx)("em",{parentName:"a"},"BlendMode"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"NORMAL"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Deprecated, please use ","`","blendMode","`"," above as it will override this value.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"name"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Name of the newly created layer group. If no value is provided, then a name will be generated following the template, ",'"',"Group #",'"',".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"opacity"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"100"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Opacity of the newly created layer or group.")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-objects-createoptions-grouplayercreateoptions-md-5b92d3853d630365d8b2.js.map