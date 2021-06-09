(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[3121],{81388:function(e,i,n){"use strict";n.r(i),n.d(i,{_frontmatter:function(){return u},default:function(){return h}});var t,o=n(22122),a=n(19756),l=(n(15007),n(64983)),r=n(99536),s=["components"],u={},m=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),p={_frontmatter:u},d=r.Z;function h(e){var i=e.components,n=(0,a.Z)(e,s);return(0,l.mdx)(d,(0,o.Z)({},p,n,{components:i,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"submission-and-review"},"Submission and review"),(0,l.mdx)("p",null,"Congratulations! You've built a great plugin and you're ready to release it to your customers."),(0,l.mdx)("p",null,"To be able to publish on our marketplace, ",(0,l.mdx)("strong",{parentName:"p"},"your plugin must first go through a review process"),"."),(0,l.mdx)("p",null,"By reviewing every plugin, Adobe aims to help developers get ready for primetime and ensure that users have great experiences with the plugins they consume. Our goal is to balance providing you the best developer experience during review that we can, while helping ensure that approved plugins offer a great user experience for our mutual customers."),(0,l.mdx)("p",null,"This document will give you an idea of how to prepare for and submit to the review process, as well as details on what we’re checking for. While lengthy, working through the points below will help you make sure you’ve accounted for all of the requirements, and avoid having to fix things and resubmit before being published. Please note that this list is intended as a helpful overview; it will change over time, and cannot cover absolutely everything we look at."),(0,l.mdx)("h2",{id:"pre-submission-checklist"},"Pre-submission checklist"),(0,l.mdx)("p",null,"As part of submission, you will provide Adobe with 3 types of data via the ",(0,l.mdx)("a",{parentName:"p",href:"https://console.adobe.io"},"Adobe Developer Console"),":"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"A publisher profile about you, the developer"),(0,l.mdx)("li",{parentName:"ol"},"Listing information about the specific plugin you are submitting"),(0,l.mdx)("li",{parentName:"ol"},"Your plugin package")),(0,l.mdx)("p",null,"In this section, we will take a look at each of these types of data."),(0,l.mdx)("p",null,"For specifics regarding character lengths, image dimensions, and required fields, always refer to the Adobe Developer Console submission form for the latest requirements."),(0,l.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"We recommend that you draft this metadata in a text editor, and not directly in the Adobe Developer Console. This will help you avoid losing your writing if your browser refreshes before submission."),(0,l.mdx)("h3",{id:"publisher-profile"},"Publisher profile"),(0,l.mdx)("p",null,"Your publisher profile is about you as a company or developer as whole. Once you've submitted this information and it has been approved by Adobe, it is shown for ",(0,l.mdx)("em",{parentName:"p"},"all plugins and integrations you publish with Adobe"),"."),(0,l.mdx)("p",null,"Your publisher profile includes required details like:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Your publisher public name (often company name or, for individuals, your own name)"),(0,l.mdx)("li",{parentName:"ul"},"Your publisher marketing website (again, because this is part of the publisher profile, this website shows for ",(0,l.mdx)("em",{parentName:"li"},"all things you publish with Adobe")," and should be scoped to you as the publisher, not scoped to any single plugin or integration you submit)"),(0,l.mdx)("li",{parentName:"ul"},"A description of you, the publisher"),(0,l.mdx)("li",{parentName:"ul"},"Your logo")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Your publisher profile is an important thing to get right the first time!"),' After it is approved, changing it is not easy or fast: you will have to email us via the "View public profile" link on your ',(0,l.mdx)("a",{parentName:"p",href:"https://console.adobe.io"},"Adobe Developer Console")," project. Doing so will trigger a new review of your publisher details, and possibly of your plugin as well."),(0,l.mdx)("p",null,"Frequently changing your publisher profile will confuse users and erode trust. Please be sure you're ready before entering this information."),(0,l.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"You must complete your publisher profile")," in order to submit your first plugin or integration. Next time you submit something, your publisher profile will already be set, so you won't need to do this again."),(0,l.mdx)("h3",{id:"listing-information"},"Listing information"),(0,l.mdx)("p",null,"Your listing information provides Adobe and users with details about the specific plugin you are currently submitting. Each plugin you submit will have its own listing information that you provide."),(0,l.mdx)("p",null,"Always check the ",(0,l.mdx)("a",{parentName:"p",href:"https://console.adobe.io"},"Adobe Developer Console")," for the latest list of required details. At the time of writing, those details include the following lists."),(0,l.mdx)("h4",{id:"plugin-information"},"Plugin information"),(0,l.mdx)("p",null,"The information you add here will be made public to users via Adobe's marketplace surfaces once your plugin is approved."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Public plugin name"),(0,l.mdx)("li",{parentName:"ul"},"Subtitle"),(0,l.mdx)("li",{parentName:"ul"},"Support URL or email"),(0,l.mdx)("li",{parentName:"ul"},"Description"),(0,l.mdx)("li",{parentName:"ul"},"Tags"),(0,l.mdx)("li",{parentName:"ul"},"Categories"),(0,l.mdx)("li",{parentName:"ul"},"Languages supported")),(0,l.mdx)("h4",{id:"commerce"},"Commerce"),(0,l.mdx)("p",null,"Here, you'll be able to indicate whether your plugin is free or paid."),(0,l.mdx)("p",null,"For paid plugin listings, you’ll need to register with Adobe’s third-party payment provider, ",(0,l.mdx)("a",{parentName:"p",href:"https://fastspring.com/sign-up/payee-adobe/"},"FastSpring"),", and enter your FastSpring key. ",(0,l.mdx)("strong",{parentName:"p"},"Please note that it may take up to 24 hours for FastSpring to create your key.")),(0,l.mdx)("h4",{id:"connection-to-other-applications-and-services"},"Connection to other applications and services"),(0,l.mdx)("p",null,"You'll set flags that inform the user within your listing if your plugin requires connection to another application or service."),(0,l.mdx)("h4",{id:"privacy-policy-and-terms"},"Privacy policy and terms"),(0,l.mdx)("p",null,"Here, you'll be able to add a link to:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Your privacy policy"),(0,l.mdx)("li",{parentName:"ul"},"Your terms of service")),(0,l.mdx)("p",null,"Per the ",(0,l.mdx)("a",{parentName:"p",href:"http://www.adobe.com/go/developer-terms"},"Adobe Developer Agreement"),", if your plugin collects a user’s personal information, you must provide a link to the privacy policy listed on your app or plugin page."),(0,l.mdx)("h4",{id:"version-details"},"Version details"),(0,l.mdx)("p",null,"This information is specific to the version of your plugin that you are submitting. Let your users know what's new and what's changed."),(0,l.mdx)("h4",{id:"plugin-icon"},"Plugin icon"),(0,l.mdx)("p",null,"The plugin icon will be seen by users in the Plugin Marketplace and other marketplace surfaces."),(0,l.mdx)("p",null,"At the time of writing, you are required to provide us with three sizes of the same plugin icon: 48x48 px, 96x96 px, 192x192 px. These should all be in PNG or JPG format, and under 1MB in size."),(0,l.mdx)("p",null,"Again, always refer to the Adobe Developer Console submission form for the latest requirements."),(0,l.mdx)("h4",{id:"screenshots"},"Screenshots"),(0,l.mdx)("p",null,"Your screenshots will be featured in the detail page of your plugin. You should show your plugin in action and get users excited to try it out."),(0,l.mdx)("p",null,"These should all be in PNG or JPG format, under 5MB in size and 1360x800 px dimension. You must provide between 1 and 5 images."),(0,l.mdx)("p",null,"Again, always refer to the Adobe Developer Console submission form for the latest requirements."),(0,l.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Test accounts:")," If your plugin requires a user account to access any part of the plugin, ",(0,l.mdx)("strong",{parentName:"p"},'you must provide credentials for a test account in the "Notes to reviewer" field'),". If we are unable to access parts of the plugin, the submission will be rejected and you will need to resubmit."),(0,l.mdx)("h3",{id:"plugin-package"},"Plugin package"),(0,l.mdx)("p",null,"As part of your submission, you will upload your plugin package, which is a ",(0,l.mdx)("inlineCode",{parentName:"p"},".ccx")," file. You can learn how to create a ",(0,l.mdx)("inlineCode",{parentName:"p"},".ccx")," package on our ",(0,l.mdx)("a",{parentName:"p",href:"../packaging-your-plugin"},'"Packing your plugin"')," page."),(0,l.mdx)("p",null,"The plugin package you upload will be reviewed by Adobe (see the next section to learn more about what we review). When approved, this plugin package will become available on our marketplace surfaces."),(0,l.mdx)("h2",{id:"what-we-review"},"What we review"),(0,l.mdx)("p",null,"In this section, we will show many of our review test cases and criteria. Each review test case is cause for rejection if not adhered to."),(0,l.mdx)("p",null,"This is not meant to be an exhaustive list of what we review for, and our test cases will change and evolve over time. However, checking through each of these test cases will improve your chances of being approved the first time."),(0,l.mdx)("h3",{id:"publisher-profile-1"},"Publisher profile"),(0,l.mdx)("p",null,"All data in your publisher profile will be reviewed, including public profile name, website, and logo."),(0,l.mdx)("h3",{id:"listing-information-1"},"Listing information"),(0,l.mdx)("p",null,"Plugin listing information is the content that users will see in the Plugin Marketplace when browsing your listing. Unless otherwise noted, this is information that you will input and maintain on the ",(0,l.mdx)("a",{parentName:"p",href:"https://console.adobe.io"},"Adobe Developer Console"),"."),(0,l.mdx)("p",null,"In this section, we’ll go over what we’re checking for to ensure that your plugin listing is complete, correct, and in line with Adobe’s standards."),(0,l.mdx)("h4",{id:"plugin-description"},"Plugin description"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"A plugin name can only include the host app name (e.g., “Photoshop” or “XD”) if it fits the pattern “\\${Plugin Name} for XD”. Refer to the ",(0,l.mdx)("a",{parentName:"li",href:"../marketing"},"Adobe Branding Guidelines")," for further information.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"OK: “Rectangulator”, or “Rectangulator for Photoshop”"),(0,l.mdx)("li",{parentName:"ul"},"Not OK: “Photoshop Rectangulator”, or “Rectangulator Photoshop."))),(0,l.mdx)("li",{parentName:"ul"},"The plugin description must be relevant and self-explanatory."),(0,l.mdx)("li",{parentName:"ul"},"Regardless of supported languages, an English description must be provided."),(0,l.mdx)("li",{parentName:"ul"},"All listing content, including author name, email address, and website must comply with ",(0,l.mdx)("a",{parentName:"li",href:"../marketing"},"Adobe Branding Guidelines"),"."),(0,l.mdx)("li",{parentName:"ul"},"Any plugin website must provide an email address or contact form so that users can contact the plugin developer easily."),(0,l.mdx)("li",{parentName:"ul"},"The listing may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc). Your website will be reviewed, and it must be live ",(0,l.mdx)("em",{parentName:"li"},"at the time of review"),".")),(0,l.mdx)("h4",{id:"manifest-minversions"},"Manifest minVersions"),(0,l.mdx)("p",null,"You will need to set your plugin manifest's minimum version depending on the host app and API features you are using."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Photoshop")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"For all UXP plugins, the manifest minVersion must be set to 22.0 or above.")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"XD")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"For panel plugins, the manifest minVersion must be set to 21.0 or above."),(0,l.mdx)("li",{parentName:"ul"},"For modal or headless plugins, the manifest minVersion must be set to 13.0 or above, although 21.0 or above is recommended to take advantage of newer improvements in UXP.")),(0,l.mdx)("h4",{id:"icons"},"Icons"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Placeholder icons will not be accepted. Icons must be unique and must be property of the plugin author. Submissions that contain icons from sample projects (or variations thereof) will be rejected."),(0,l.mdx)("li",{parentName:"ul"},"Plugin icons may not contain Adobe product assets or icons."),(0,l.mdx)("li",{parentName:"ul"},"Plugin icons must be clear and free of distortion."),(0,l.mdx)("li",{parentName:"ul"},'All required plugin icons must be provided at the appropriate dimensions and file sizes. See the manifest documentation for your host app and "Pre-submission checklist" in this guide to learn more about which icons to include in your plugin package versus which to upload via the Adobe Developer Console.')),(0,l.mdx)("h4",{id:"adobe-branding"},"Adobe Branding"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Make sure to review and adhere to the ",(0,l.mdx)("a",{parentName:"li",href:"../marketing"},"Adobe Branding Guidelines"),"."),(0,l.mdx)("li",{parentName:"ul"},"Avoid using publisher names, domain names, email addresses, and other such property names that are confusingly similar to existing Adobe brand, product, or service names."),(0,l.mdx)("li",{parentName:"ul"},"Using Adobe assets and icons in your plugin or your plugin marketing material requires explicit permission from Adobe ",(0,l.mdx)("a",{parentName:"li",href:"../marketing"},"(see Adobe Branding Guidelines for details)"),". Note that getting permission to use Adobe branding assets can add to the time it takes to get your plugin approved and published.")),(0,l.mdx)("h4",{id:"external-services"},"External Services"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"If your plugin requires paid credentials, when you submit your plugin to Adobe, you must provide test account login credentials, license number, or anything else that would be required to ensure that we can fully review your plugin."),(0,l.mdx)("li",{parentName:"ul"},"All plugin functionality must be accessible, either openly or through the credentials that you provide Adobe, for Adobe's reviewers.")),(0,l.mdx)("h4",{id:"third-party-companion-apps"},"Third Party Companion Apps"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"When a companion app is required, your plugin's description must indicate where the user can download the companion app."),(0,l.mdx)("li",{parentName:"ul"},"The companion app must successfully install on platforms it claims to support."),(0,l.mdx)("li",{parentName:"ul"},"The companion app must be able to successfully communicate with the plugin."),(0,l.mdx)("li",{parentName:"ul"},"The companion app must not cause abnormal resource usage (e.g., CPU, RAM, storage).")),(0,l.mdx)("h3",{id:"user-experience"},"User experience"),(0,l.mdx)("p",null,"Checking the plugin's user experience is the core of our review process. Once users install your plugin, we want to make sure they have a great experience with their newfound addition to the host app's core product. In this section, we’ll go over what we’re reviewing in terms of your plugin’s functionality, UI, and more."),(0,l.mdx)("p",null,"Since all plugins are different, it isn't possible to provide a permanent and exhaustive list of what we look at. However, we are generally looking at these three areas: functionality, user interface, and performance."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Functionality:")," Does the plugin do what is suggested by the associated content and the user interface?"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"User interface:")," Is the user able to complete tasks? Is the UI broken or distorted in any way? Is the user made aware of what is (or isn't) happening?"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Performance:")," Are system or account resources misused or overused? Is the user left waiting for an abnormal amount of time?")),(0,l.mdx)("h4",{id:"functionality"},"Functionality"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The plugin must install without error."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must launch via all insertion points that the plugin claims to support (e.g. Plugins Menu, Plugins Panel)."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must support any keyboard shortcuts provided by the developer."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must show a loading indicator or spinner during longer operations like loading large content or accessing resources via a network connection."),(0,l.mdx)("li",{parentName:"ul"},"Modal dialogs must provide an affordance in the UI for closing the modal (e.g. a cancel/close button)."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must perform the desired actions when the user interacts with components in the plugin’s UI."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must support all user selection types. Alternatively, if the plugin doesn’t support some selection types, the plugin must communicate this to the user when an unsupported selection is selected."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must indicate to the user if an internet connection is not available but is required."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must provide feedback to the user if it is unable to perform an action triggered by the user."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must never show a completely blank UI."),(0,l.mdx)("li",{parentName:"ul"},"The plugin may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc)."),(0,l.mdx)("li",{parentName:"ul"},"If the plugin supports login functionality, it must also provide logout."),(0,l.mdx)("li",{parentName:"ul"},"Browsers are the only external applications that plugins are allowed to launch. If your plugin launches any other external application, it will be rejected."),(0,l.mdx)("li",{parentName:"ul"},"No “debug” items are allowing in the panel or in the flyouts. This includes things like “reload panel” as a user-facing feature, or directing users to developer console output.")),(0,l.mdx)("h4",{id:"user-interface"},"User Interface"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"For modal plugins, the plugin must be functional when the host application window is at the minimum size that the host application itself supports."),(0,l.mdx)("li",{parentName:"ul"},"For panel plugins, no content should be clipped when the plugins panel is at minimum width."),(0,l.mdx)("li",{parentName:"ul"},"For panel plugins, the plugin's UI content must adapt appropriately when the panel width is increased."),(0,l.mdx)("li",{parentName:"ul"},"For panel plugins, the plugin's UI content must adapt appropriately when the panel width is decreased."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must be functional when the host app application window is at maximum size."),(0,l.mdx)("li",{parentName:"ul"},"The plugin UI must scroll when all content is not visible on the screen."),(0,l.mdx)("li",{parentName:"ul"},"UI elements in the plugin must not overlap or truncate."),(0,l.mdx)("li",{parentName:"ul"},"UI content must wrap or adapt as necessary to accommodate the available width of the UI."),(0,l.mdx)("li",{parentName:"ul"},"For plugins with multiple panels, each panel needs a different icon so as to be differentiable by the user."),(0,l.mdx)("li",{parentName:"ul"},"Plugin content must be in compliance with ",(0,l.mdx)("a",{parentName:"li",href:"../marketing"},"Adobe Branding Guidelines"),".")),(0,l.mdx)("h4",{id:"performance"},"Performance"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The plugin must not degrade the performance of the host app."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must load in a timely manner."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must not cause abnormal resource usage (e.g., CPU, RAM, storage)."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must not cause crashes, system errors, or any major failures.")),(0,l.mdx)("h3",{id:"associated-content"},"Associated content"),(0,l.mdx)("p",null,"Content within, and associated with, your plugin with be reviewed."),(0,l.mdx)("h4",{id:"adobe-branding-1"},"Adobe Branding"),(0,l.mdx)("p",null,"See our ",(0,l.mdx)("a",{parentName:"p",href:"../marketing"},'"Marketing your plugin"')," page for guidelines on using Adobe brand assets and messaging your plugin to customers."),(0,l.mdx)("h4",{id:"inappropriate-content"},"Inappropriate content"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Your plugin and associated marketing surfaces must not include any intense violence, blood, gore, sexual content, nudity, or strong language."),(0,l.mdx)("li",{parentName:"ul"},"Your plugin must not promote or conduct phishing, spamming, hacking, password trafficking, or spyware, nor contain malware, trojans, or viruses.")),(0,l.mdx)("h4",{id:"internationalization-and-localization"},"Internationalization and Localization"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The plugin UI must not break when the user enters valid characters for all languages the plugin supports."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must support input from local keyboards for all languages the plugin supports."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must provide localized strings for all languages indicated as supported by the developer and successfully display them when the system is set to each supported locale."),(0,l.mdx)("li",{parentName:"ul"},"The plugin UI must not break due to localized strings for supported locales.")),(0,l.mdx)("h2",{id:"how-to-submit-for-review"},"How to submit for review"),(0,l.mdx)("p",null,"You can submit your plugin for review and approval on the ",(0,l.mdx)("a",{parentName:"p",href:"https://console.adobe.io"},"Adobe Developer Console"),"."),(0,l.mdx)("p",null,"The following is a basic overview of the steps for submitted a plugin for review."),(0,l.mdx)("h3",{id:"create-your-profile-and-listing"},"Create your profile and listing"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("a",{parentName:"li",href:"https://console.adobe.io"},"Visit the Adobe Developer Console")),(0,l.mdx)("li",{parentName:"ol"},"Go to the ",(0,l.mdx)("em",{parentName:"li"},"Projects")," tab"),(0,l.mdx)("li",{parentName:"ol"},"Find and select the project that contains the plugin ID you are seeking marketplace approval for"),(0,l.mdx)("li",{parentName:"ol"},"On your project page, select ",(0,l.mdx)("em",{parentName:"li"},"Distribute")),(0,l.mdx)("li",{parentName:"ol"},'(First time only) Complete your publisher profile via the "View public profile" button, and save'),(0,l.mdx)("li",{parentName:"ol"},'Click the "Create Photoshop plugin listing" button'),(0,l.mdx)("li",{parentName:"ol"},'Fill out the form on the "Listing information" tab')),(0,l.mdx)("p",null,"Further details on the data you are required to submit can be found in the ",(0,l.mdx)("a",{parentName:"p",href:"#pre-submission-checklist"},"Pre-submission checklist")," section of this page."),(0,l.mdx)("h3",{id:"upload-your-plugin-file"},"Upload your plugin file"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},'Click the "Plugin file" tab'),(0,l.mdx)("li",{parentName:"ol"},"Drag and drop your ",(0,l.mdx)("inlineCode",{parentName:"li"},".ccx")," plugin file onto the appropriate area"),(0,l.mdx)("li",{parentName:"ol"},"After you've dropped in your ",(0,l.mdx)("inlineCode",{parentName:"li"},".ccx"),' plugin file, the fields in the "Manifest details" section of the page will auto-populate based on values you\'ve set in your manifest.'),(0,l.mdx)("li",{parentName:"ol"},'Click "Preview and submit"')),(0,l.mdx)("p",null,"If you don't have a ",(0,l.mdx)("inlineCode",{parentName:"p"},".ccx")," yet, you can learn how to create one on our ",(0,l.mdx)("a",{parentName:"p",href:"../packaging-your-plugin"},'"Packing your plugin"')," page."),(0,l.mdx)("h3",{id:"preview-and-submit"},"Preview and submit"),(0,l.mdx)("p",null,'After you have filled out your publisher public profile and listing information, then uploaded your plugin, you will be able to click "Preview and submit".'),(0,l.mdx)("p",null,'On the "Preview and submit" page, you can:'),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Preview your listing on Adobe Exchange"),(0,l.mdx)("li",{parentName:"ul"},"Provide notes to Adobe reviewers"),(0,l.mdx)("li",{parentName:"ul"},"Choose whether to auto-publish or manually publish upon approval"),(0,l.mdx)("li",{parentName:"ul"},"Submit your plugin to Adobe for review")),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},'Click "Preview in Exchange" to see how your listing will look before you publish it'),(0,l.mdx)("li",{parentName:"ol"},'Fill in the "Note to Adobe reviewers" field with any further details we should know, ',(0,l.mdx)("em",{parentName:"li"},"including")," test credentials if any part of your plugin requires a logged in user"),(0,l.mdx)("li",{parentName:"ol"},"Choose whether you want to publish immediately after approval, or publish manually"),(0,l.mdx)("li",{parentName:"ol"},'Click "Submit"')),(0,l.mdx)("p",null,"After you submit, you will receive a confirmation email from Adobe with your unique submission identifiers."),(0,l.mdx)("h2",{id:"timelines-and-outcomes"},"Timelines and outcomes"),(0,l.mdx)("p",null,"We aim to respond to all submissions within 10 business days, but we are typically much faster on average."),(0,l.mdx)("p",null,"Ultimately, your submission will either be approved or rejected. In some cases, we may reach out to you with questions before we send you the outcome of the review."),(0,l.mdx)("p",null,"If your submission is rejected, we will provide the reasons. You can ask for clarifications, if you need any. Once you have addressed the reasons for rejection in your listing information, plugin, and/or associated content, you are welcome to resubmit."),(0,l.mdx)("p",null,"Again, our goal is to provide you the best developer experience during review that we can, while helping ensure that approved plugins and integrations offer a great user experience for our mutual customers."),(0,l.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.mdx)("p",null,"Sometimes things can go wrong while submitting. This section aims to help you with common Adobe Developer Console errors."),(0,l.mdx)("h3",{id:"error-messages"},"Error messages"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},'"Extension id: not matched"'),": The ",(0,l.mdx)("inlineCode",{parentName:"li"},"id")," in your manifest must match the plugin ID provided by the Adobe Developer Console. During development you're free to use whatever string you want as your manifest ",(0,l.mdx)("inlineCode",{parentName:"li"},"id"),", but for submission to succeed you must match the manifest ",(0,l.mdx)("inlineCode",{parentName:"li"},"id")," to the plugin ID provided by the Adobe Developer Console."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},'"Invalid"'),": The ",(0,l.mdx)("inlineCode",{parentName:"li"},"host")," field in your manifest ",(0,l.mdx)("strong",{parentName:"li"},"must not be an array")," when submitting to the marketplace. While UXP and the UXP DevTool both support arrays for ",(0,l.mdx)("inlineCode",{parentName:"li"},"host"),", this is a convenience for development against multiple hosts, and is not intended for deployment."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},'"Invalid"'),": Make sure your manifest is a valid JSON file (and is included in the package)."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},'"Version #.#.# already exists for extension ${pluginID}."'),": You have already submitted a plugin package with this version number specified in the manifest. Bump the plugin version number in the manifest, then submit.")),(0,l.mdx)("h3",{id:"silent-errors-and-hangs"},"Silent errors and hangs"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("strong",{parentName:"li"},"Plugin version number format"),": Make sure that the plugin version number specified in your manifest consists of three numeric parts, no more and no less. As an example, ",(0,l.mdx)("inlineCode",{parentName:"li"},"version: 2.0")," is currently not accepted by the marketplace, while ",(0,l.mdx)("inlineCode",{parentName:"li"},"version: 2.0.0"),' will work. If your version number format is not exactly correct, you\'ll see a hang on "Saving Draft".'),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("strong",{parentName:"li"},"Character limit for filenames"),": There's a 45-character limit on uploaded ",(0,l.mdx)("inlineCode",{parentName:"li"},".ccx")," filenames. If you exceed this limit, validation will fail but you may not get a helpful error message. If your upload is failing, check that your filename contains no more than 45-characters, including the ",(0,l.mdx)("inlineCode",{parentName:"li"},".ccx")," file extension."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("strong",{parentName:"li"},"Version numbers in filenames"),": Do not include version numbers in your ",(0,l.mdx)("inlineCode",{parentName:"li"},".ccx")," filename that you upload to the Adobe Developer Console. This is known to cause problems."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("strong",{parentName:"li"},"Plugin icons"),": Make sure you include required icons for both the plugin and its panels, if any. If all icons aren't included, your plugin will be rejected during review (but submission will succeed). See ",(0,l.mdx)("a",{parentName:"li",href:"/uxp-photoshop/guides/uxp_guide/uxp-misc/manifest-v4"},"the manifest docs for more info"),"."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("strong",{parentName:"li"},"No zero-byte files"),": Ensure your package has no zero-byte files within it. This will cause validation to fail.")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-distribution-submission-checklist-index-md-cc06208b8f54e04ed708.js.map