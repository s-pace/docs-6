(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1652:function(e,t,o){e.exports=o.p+"assets/img/workato-embedded.065017a8.png"},1653:function(e,t,o){e.exports=o.p+"assets/img/embedded-iframe.7a822c94.png"},2664:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"workato-embedded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workato-embedded"}},[e._v("#")]),e._v(" Workato Embedded")]),e._v(" "),a("p",[e._v("Workato Embedded gives our OEM partner's customers the best end user experience to build and manage their integrations straight out of their product. It allows all pages and elements on the Workato platform to be embedded within in an iFrame built into the OEM partner’s platform UI.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1652),alt:"Workato embedded",width:"2880",height:"1434"}}),e._v(" "),a("em",[e._v("Workato embedded in an IFrame in ACME ERP")])],1),e._v(" "),a("p",[e._v("Instead of choosing to build an in-house integration or automation solution, partners can now embed a platform built and maintained by Workato, specialists in the integration and automation space. The OEM model allows our partners to utilize all of Workato's experience in the integration space and all the tools required to build, run and maintain integrations in a modern, scalable way.")]),e._v(" "),a("p",[e._v("The following describes the various features of Workato Embedded. For implementation details, read on "),a("router-link",{attrs:{to:"/oem/workato-embedded-implementation.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("You may also be looking to embed just the connection widget from Workato into your product, which allows customers to authenticate their applications. If so, read the "),a("router-link",{attrs:{to:"/oem/embedded-connections.html"}},[e._v("Embedded connection widget")]),e._v(" document.")],1),e._v(" "),a("h2",{attrs:{id:"key-benefits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-benefits"}},[e._v("#")]),e._v(" Key benefits")]),e._v(" "),a("p",[e._v("From a partner’s point of view,")]),e._v(" "),a("ul",[a("li",[e._v("You’re giving your customers the ability to build their own integrations while you have complete control over whether administration of customer accounts by your customer success teams are necessary")]),e._v(" "),a("li",[e._v("Your customers will get the most seamless transition from your product to Workato embedded in your own UI")]),e._v(" "),a("li",[e._v("All your customers will have access to the full set of features the Workato platform provides, including our 350+ out of the box connectors and 700+ community connectors and our library of 100,000 recipes")])]),e._v(" "),a("p",[e._v("All tools that we have built for our direct customers will be at the disposal of yours, allowing your team to to focus on the core features and innovations that you want to deliver to your customers while leaving the building and maintenance of the integration platform features to us.")]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("h3",{attrs:{id:"navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigation"}},[e._v("#")]),e._v(" Navigation")]),e._v(" "),a("p",[e._v("As an OEM partner, the first thing to think about is navigation. Your app will provide the appropriate navigation experience for your customers, giving them all the features that are most important and relevant to them.")]),e._v(" "),a("p",[e._v("As you can see in the screenshot below (with the Workato iFrame portion in green), the navigation through the Workato product is handled in the leftmost menu. In this case, the partner has chosen to implement the Dashboard, Recipes, App connections and Community pages, which is similar to the navigation bar in Workato. They have also chosen to provide links to Tools such as Lookup tables and Account properties.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1653),alt:"Navigation",width:"1568",height:"970"}}),e._v(" "),a("em",[e._v("Navigation and the Workato IFrame")])],1),e._v(" "),a("p",[e._v("The OEM partner can customize this experience completely by simply specifying the Workato paths (eg. /recipes) that link to the correct page. Note that only the pages the customer will have access to based on their role or based on their plan will be accessible.")]),e._v(" "),a("h3",{attrs:{id:"deep-linking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deep-linking"}},[e._v("#")]),e._v(" Deep linking")]),e._v(" "),a("p",[e._v("In a Workato embedded scenario, the OEM partner's URL will always be mapped to the Workato URL. With this, we ensure that launching vendor URL will always launch the correct IFrame URL and that the browser URL can be shared or bookmarked for future use.")]),e._v(" "),a("p",[e._v("In the image below, the URL provided by the vendor is "),a("code",[e._v("https://acme-erp.com/integration")]),e._v(". It will then be appended by the Workato path to direct users to the correct page.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(279),alt:"Workato embedded URL",width:"2880",height:"1520"}}),e._v(" "),a("em",[e._v("OEM Partner URL and Workato path")])],1),e._v(" "),a("h3",{attrs:{id:"new-tabs-back-forward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-tabs-back-forward"}},[e._v("#")]),e._v(" New tabs/back/forward")]),e._v(" "),a("p",[e._v("Browser navigation with back and forward buttons loads correct OEM partner pages and IFrame pages and all new tabs will also open to the correct page with the vendor URL and path.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(279),alt:"Workato embedded URL",width:"2880",height:"1520"}}),e._v(" "),a("em",[e._v("OEM Partner URL and Workato path")])],1),e._v(" "),a("h3",{attrs:{id:"redirection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirection"}},[e._v("#")]),e._v(" Redirection")]),e._v(" "),a("p",[e._v("Should your customer get curious and try to visit "),a("a",{attrs:{href:"http://workato.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("workato.com"),a("OutboundLink")],1),e._v(" while logged in to your app, don't worry! They will always be promptly redirected back to your site to the provided URL. In ACME's example, they will be redirected to "),a("code",[e._v("https://acme-erp.com/integration")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),a("p",[e._v("In order to provide a seamless user interface, OEM partners can customize Workato Embedded to suit their branding and configuration needs.")]),e._v(" "),a("p",[e._v("The following configurable attributes are provided by the OEM partner:")]),e._v(" "),a("ul",[a("li",[e._v("Origin and path prefix\n"),a("ul",[a("li",[e._v("For navigation and linking")])])]),e._v(" "),a("li",[e._v("Main branding colour\n"),a("ul",[a("li",[e._v("Applied to CTAs, tabs, highlights etc.")])])]),e._v(" "),a("li",[e._v("Hover colour\n"),a("ul",[a("li",[e._v("Applied to hover states")])])]),e._v(" "),a("li",[e._v("Fonts\n"),a("ul",[a("li",[e._v("Applied to all text")])])]),e._v(" "),a("li",[e._v("Iframe attributes\n"),a("ul",[a("li",[e._v("Margins, internal padding so the pages render correctly")])])])])])}),[],!1,null,null,null);t.default=r.exports},279:function(e,t,o){e.exports=o.p+"assets/img/embedded-url.f806185c.png"}}]);