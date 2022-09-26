(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[4571],{58134:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return x}});var m=a(22122),n=a(19756),d=(a(15007),a(64983)),r=a(99536),l=["components"],p={},i={_frontmatter:p},o=r.Z;function x(e){var t=e.components,a=(0,n.Z)(e,l);return(0,d.mdx)(o,(0,m.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"pathitem"},"PathItem"),(0,d.mdx)("p",null,"A path or drawing object, such as the outline of a shape or a straight or curved line,\nwhich contains sub paths defining its geometry."),(0,d.mdx)("p",null,"Access through the collection in the ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/#pathitems"},"Document.pathItems")," property. For example, this selects a named path item:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},'const currentPathItem = app.activeDocument.pathItems.getByName("myPath");\ncurrentPathItem.select()\n')),(0,d.mdx)("p",null,"Create these objects by passing a set of SubPathInfo objects to the ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/pathitems/#add"},"PathItems.add"),"() method. This method creates\na ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/subpathitem/"},"SubPathItem")," object for each ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/subpathinfo/"},"SubPathInfo")," object, and creates and returns a new ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/pathitem/"},"PathItem")," object for the\npath represented by all of the subpaths."),(0,d.mdx)("h2",{id:"properties"},"Properties"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"docId"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The ID of the document of this pathItem.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"id"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"For use with batchPlay operations. This pathItem ID, along with its document ID can be used to represent this pathItem for the lifetime of this document.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"kind"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#pathkind"},(0,d.mdx)("em",{parentName:"a"},"PathKind"))),(0,d.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The specific kind of path.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"name"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Name of this path")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"parent"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,d.mdx)("em",{parentName:"a"},"Document"))),(0,d.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The document in which the path resides.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"subPathItems"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/subpathitems/"},(0,d.mdx)("em",{parentName:"a"},"SubPathItems"))),(0,d.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The contained ",(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/subpathitem/"},"SubPathItem"),"s in this path.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"typename"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The class name of the referenced object: ",(0,d.mdx)("em",{parentName:"td"},'"',"PathItem",'"'),".")))),(0,d.mdx)("h2",{id:"methods"},"Methods"),(0,d.mdx)("h3",{id:"deselect"},"deselect"),(0,d.mdx)("span",{className:"minversion",style:{cssFloat:"left",marginLeft:"36em",opacity:"0.5"}},"23.3"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"Deselects this ",(0,d.mdx)("inlineCode",{parentName:"p"},"pathItem")," object."),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"duplicate"},"duplicate"),(0,d.mdx)("span",{className:"minversion",style:{cssFloat:"left",marginLeft:"36em",opacity:"0.5"}},"23.3"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/pathitem/"},(0,d.mdx)("em",{parentName:"a"},"PathItem")),">"),(0,d.mdx)("p",null,"Duplicates the ",(0,d.mdx)("inlineCode",{parentName:"p"},"pathItem")," object with the new name, returning the duplicate."),(0,d.mdx)("h4",{id:"parameters"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"name?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"string"))))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"fillpath"},"fillPath"),(0,d.mdx)("span",{className:"minversion",style:{cssFloat:"left",marginLeft:"36em",opacity:"0.5"}},"23.3"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"Fills the area enclosed by this path."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"opacity")," is a percentage, in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"[0.0 ... 100.0]")," range."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"feather")," is in pixels, in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"[0.0 ... 250.0]")," range."),(0,d.mdx)("p",null,"If ",(0,d.mdx)("inlineCode",{parentName:"p"},"wholePath")," is true, all subpaths are used when doing the fill."),(0,d.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Default value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"fillColor?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/solidcolor/"},(0,d.mdx)("em",{parentName:"a"},"SolidColor"))),(0,d.mdx)("td",{parentName:"tr",align:"left"},"-")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"mode?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#colorblendmode"},(0,d.mdx)("em",{parentName:"a"},"ColorBlendMode"))),(0,d.mdx)("td",{parentName:"tr",align:"left"},"-")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"opacity")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"100.0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"preserveTransparency")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"boolean")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"false")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"feather")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"0.0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"wholePath")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"boolean")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"true")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"antiAlias")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"boolean")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"true")))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"makeclippingpath"},"makeClippingPath"),(0,d.mdx)("span",{className:"minversion",style:{cssFloat:"left",marginLeft:"36em",opacity:"0.5"}},"23.3"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"Makes this the clipping path for this document."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"flatness")," tells the PostScript printer how to approximate curves in the path."),(0,d.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"flatness?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"makeselection"},"makeSelection"),(0,d.mdx)("span",{className:"minversion",style:{cssFloat:"left",marginLeft:"36em",opacity:"0.5"}},"23.3"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"Makes a selection object whose border is this path."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"feather")," is in pixels, in the range ","[0.0...250.0]"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"operation"),", by default, is ",(0,d.mdx)("inlineCode",{parentName:"p"},"SelectionType.REPLACE")),(0,d.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"feather?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"antiAlias?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"boolean"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"operation?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#selectiontype"},(0,d.mdx)("em",{parentName:"a"},"SelectionType")))))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"remove"},"remove"),(0,d.mdx)("span",{className:"minversion",style:{cssFloat:"left",marginLeft:"36em",opacity:"0.5"}},"23.3"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"Deletes this object."),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"select"},"select"),(0,d.mdx)("span",{className:"minversion",style:{cssFloat:"left",marginLeft:"36em",opacity:"0.5"}},"23.3"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"Makes this the active or selected ",(0,d.mdx)("inlineCode",{parentName:"p"},"PathItem")," object."),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"strokepath"},"strokePath"),(0,d.mdx)("span",{className:"minversion",style:{cssFloat:"left",marginLeft:"36em",opacity:"0.5"}},"23.3"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"Strokes the path with the specified tool"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"tool")," is optional, and by default will use ",(0,d.mdx)("inlineCode",{parentName:"p"},"ToolType.PENCIL")),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"simulatePressure")," is false by default."),(0,d.mdx)("p",null,"If the tool is ",(0,d.mdx)("inlineCode",{parentName:"p"},"ToolType.CLONESTAMP")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"ToolType.HEALINGBRUSH"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"sourceOrigin")," must be provided as a\nan object with x and y properties (in pixels) to indicate the location of the stroke source. ",(0,d.mdx)("inlineCode",{parentName:"p"},"sourceLayer"),"\nis optional, and by default will use the active layer in the document."),(0,d.mdx)("h4",{id:"parameters-4"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Default value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"tool")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#tooltype"},(0,d.mdx)("em",{parentName:"a"},"ToolType"))),(0,d.mdx)("td",{parentName:"tr",align:"left"},"-")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"simulatePressure")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"boolean")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"false")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"sourceOrigin?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"object")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"-")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"sourceOrigin.x")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"-")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"sourceOrigin.y")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"-")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"sourceLayer?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/layer/"},(0,d.mdx)("em",{parentName:"a"},"Layer"))),(0,d.mdx)("td",{parentName:"tr",align:"left"},"-")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-pathitem-md-ca5f9cf70a22c6ecafed.js.map