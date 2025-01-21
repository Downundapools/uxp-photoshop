"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[25575],{88011:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return l},default:function(){return m}});var t=o(87462),a=o(45987),i=(o(15007),o(64983)),s=o(91515);const r=["components"],l={},d={_frontmatter:l},p=s.Z;function m(e){let{components:n}=e,o=(0,a.Z)(e,r);return(0,i.mdx)(p,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"how-do-i"},"How Do I..."),(0,i.mdx)("p",null,"This section provides snippets of HTML, CMS, and JavaScript code needed to accomplish common operations needed in many plugins. There are no complete plugins in this section, only code snippets. Copy and paste these snippets into sections of your plugin as needed."),(0,i.mdx)("h2",{id:"basic-javascript"},"Basic JavaScript"),(0,i.mdx)("p",null,"If you're already a JavaScript expert, skip this section. But if you're coming to UXP from ExtendScript, you might want to read it."),(0,i.mdx)("h3",{id:"how-to-include-an-external-javascript-file"},"How to ",(0,i.mdx)("inlineCode",{parentName:"h3"},"#include")," An External JavaScript File"),(0,i.mdx)("p",null,"JavaScript has never had the ",(0,i.mdx)("inlineCode",{parentName:"p"},"#include")," syntax of C and its descendants, nor the ",(0,i.mdx)("inlineCode",{parentName:"p"},"import"),' of Python. However, recent JavaScript (including that used in UXP) has "modules" and the ',(0,i.mdx)("inlineCode",{parentName:"p"},"require")," statement. Here's how to use them:"),(0,i.mdx)("p",null,"In the JavaScript file you want to be included, structure it like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'// file "includeMe.js"\n// this file will be included by some other file\nfunction foo(someNumber) {\n    return(someNumber * 2);\n}\n\nfunction bar() {\n    return(42);\n}\nmodule.exports = {\n    foo,\n    bar\n}\n')),(0,i.mdx)("p",null,"and then in the file that wants to include the above file, add this line at the top:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'const {foo, bar} = require("./includeMe.js");\n. . .\n    result = foo(3); // will return 6\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"require")," in UXP isn't as robust as some other include systems (e.g., it doesn't search any global paths to find the file you want), but careful use of relative paths allows you to structure your plugin directory the way you want. For example, you can have a subdirectory named ",(0,i.mdx)("inlineCode",{parentName:"p"},"lib")," and require a file in there this way:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},'const {foo, bar} = require("./lib/includeMe.js");')),(0,i.mdx)("h3",{id:"how-to-write-debugging-statements"},"How to write debugging statements"),(0,i.mdx)("p",null,"This one is easy. It's no longer ",(0,i.mdx)("inlineCode",{parentName:"p"},"console.writeln()"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'console.log("foo"); // writes "foo" to the UXP Developer Tool console.\n\nconsole.error("foo"); // does the same thing, but the text is shown in red so errors are more easily seen.\n')),(0,i.mdx)("h3",{id:"how-to-use-promises-and-asyncawait"},"How to Use Promises and async/await"),(0,i.mdx)("p",null,"This is one of the most puzzling features of modern JavaScript for those new to the latest language versions. Basically, ",(0,i.mdx)("inlineCode",{parentName:"p"},"await")," allows your code to wait for an operation to complete, without blocking the host application (e.g., Photoshop). But the trick is you ",(0,i.mdx)("em",{parentName:"p"},"cannot")," use ",(0,i.mdx)("inlineCode",{parentName:"p"},"await")," in a regular function; any function in which ",(0,i.mdx)("inlineCode",{parentName:"p"},"await")," is used has to be declared like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"    async function foo(argument1, argument2...) {\n\n    }\n")),(0,i.mdx)("p",null,"This is a very cavilier treatment of ",(0,i.mdx)("inlineCode",{parentName:"p"},"async")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"await"),", which are actually part of a larger ",(0,i.mdx)("inlineCode",{parentName:"p"},"promises")," feature in JavaScript. For the real story, consult your favorite search engine. You might start with the highly regarded MDN page ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"here"),"."),(0,i.mdx)("h2",{id:"uxp-specific-snippets"},"UXP-specific Snippets"),(0,i.mdx)("h3",{id:"how-to-determine-the-host-and-os-a-plugin-is-using"},"How to determine the host and OS a plugin is using"),(0,i.mdx)("p",null,"Sometimes it's necesssary (for localization or other reasons) to find out what a plugin's host environment is. Here's how to do that:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const host = require('uxp').host;\nconst locale = host.uiLocale;\nconst hostName = host.name\nconst hostVersion = host.version;\nconst hostOS = require('os').platform(); // note that this is a method, not a property\nconsole.log(`locale: ${locale}  host ${hostName} version ${hostVersion} running on ${hostOS}`);\n")),(0,i.mdx)("h3",{id:"how-to-get-notified-that-your-panel-is-opening-or-closing"},"How to get notified that your panel is opening or closing"),(0,i.mdx)("p",null,"In your startup code, add something like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('uxpcommand', (event) => {\n  const { commandId } = event\n  if (commandId === 'uxpshowpanel') {\n    console.log(\"panel is showing\");\n  } else if (commandId === 'uxphidepanel') {\n    console.log('panel is hiding');\n  }\n})\n")),(0,i.mdx)("h2",{id:"file-io"},"File I/O"),(0,i.mdx)("p",null,"Files and folders in UXP for Photoshop can exist in four different places:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Your plugin's home directory. Files in this directory are ",(0,i.mdx)("em",{parentName:"p"},"read-only"),". This is a good place to keep localizations, data files that never change, etc.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Your plugin's data directory. This is a directory managed by UXP which allows read/write access for ",(0,i.mdx)("em",{parentName:"p"},"only")," your plugin. Files in this directory survive application restarts and OS reboots.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Your plugin's temp directory. This is a place to store session-specific data which will not necessarily persist. You shouldn't rely on anything in this directory lasting beyond an application restart.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The host OS filesystem. Access to specific files or folders in the computer's filesystem must be requested of the user by your plugin, by showing a file or folder picker. If the user selects a file and does not cancel, your plugin code receives a ",(0,i.mdx)("inlineCode",{parentName:"p"},"token")," which you can use to access that file or folder.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"UXP also provids ",(0,i.mdx)("inlineCode",{parentName:"p"},"Secure Storage"),". This is a UXP-managed facility that holds encrypted key/value pairs. This is good for storing login information and any other data that needs to be securely stored. As such, it's not for general file access, but if you're not writing a lot of data it might be appropriate."))),(0,i.mdx)("h3",{id:"how-to-read-a-file"},"How to Read a File"),(0,i.mdx)("p",null,"Coming soon."),(0,i.mdx)("h3",{id:"how-to-write-a-file"},"How to Write a File"),(0,i.mdx)("p",null,"Coming Soon"),(0,i.mdx)("h2",{id:"other-useful-snippets"},"Other Useful Snippets"),(0,i.mdx)("h3",{id:"how-to-display-a-simple-alert"},"How to Display a Simple Alert"),(0,i.mdx)("p",null,"Sometimes you don't need a complicated dialog box, just a simple alert message. If you don't need any icons or special branding in your alert, this will do the trick:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const psCore = require('photoshop').core;\npsCore.showAlert({ message: 'Warp Factor 9!'});\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-how-to-index-md-48d8ead27d79601972ba.js.map