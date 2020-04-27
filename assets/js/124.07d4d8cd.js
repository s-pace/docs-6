(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{145:function(e,t,o){e.exports=o.p+"assets/img/download-file-action.2ca8763f.png"},146:function(e,t,o){e.exports=o.p+"assets/img/move-file-action.3f632f91.png"},2342:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"on-prem-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-files"}},[e._v("#")]),e._v(" On-prem Files")]),e._v(" "),a("p",[e._v("This connector lets you integrate with files within a secure network. These files typically are behind a corporate firewall and cannot be accessed directly. To create a connection to on-prem files, you "),a("strong",[e._v("must")]),e._v(" use an "),a("router-link",{attrs:{to:"/on-prem.html"}},[e._v("On-prem agent")]),e._v(".")],1),e._v(" "),a("p",[e._v("Workato's "),a("code",[e._v("On-prem files")]),e._v(" connector allows you to securely connect to those on-premises files and build automation around them.")]),e._v(" "),a("h2",{attrs:{id:"how-to-connect-to-on-prem-files-on-workato"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-on-prem-files-on-workato"}},[e._v("#")]),e._v(" How to connect to on-prem files on Workato")]),e._v(" "),a("p",[e._v("Before creating a connection for this connector, make sure you go through an "),a("router-link",{attrs:{to:"/on-prem/agents/setup.html"}},[e._v("on-prem agent setup")]),e._v(" and create a profile for "),a("router-link",{attrs:{to:"/on-prem/agents/profile.html#on-prem-files-profile"}},[e._v("on-prem files")]),e._v(".")],1),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(799),alt:"On-prem files connection",width:"2324",height:"1514"}}),e._v(" "),a("em",[e._v("On-prem files connection using on-prem agent")])],1),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Connection name")]),e._v(" "),a("td",[e._v("Give this On-prem files connection a unique name that identifies which On-prem files instance it is connected to.")])]),e._v(" "),a("tr",[a("td",[e._v("On-prem connection profile")]),e._v(" "),a("td",[e._v("Name of the profile you wish to connect to. This should be defined in your "),a("code",[e._v("config.yml")]),e._v(" file in your On-prem agent.")])]),e._v(" "),a("tr",[a("td",[e._v("Is this app in a private network?")]),e._v(" "),a("td",[e._v("Select the on-prem agent that you setup earlier.")])])])]),e._v(" "),a("h2",{attrs:{id:"working-with-the-on-prem-files-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-on-prem-files-connector"}},[e._v("#")]),e._v(" Working with the On-prem files connector")]),e._v(" "),a("h3",{attrs:{id:"relative-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relative-path"}},[e._v("#")]),e._v(" Relative path")]),e._v(" "),a("p",[e._v("Relative path is a way to specify the location of a file or folder based on the location of another folder. This is different from absolute path where you specify the full location of a file.")]),e._v(" "),a("p",[e._v("File or folder path in the on-prem files connector are all relative paths. It is relative to the base path you define in the connection "),a("router-link",{attrs:{to:"/on-prem/agents/profile.html#on-prem-files-profile"}},[e._v("profile")]),e._v(" of your "),a("code",[e._v("config.yml")]),e._v(" file. Let's take a look at an example.")],1),e._v(" "),a("p",[e._v("Here, we have a profile with the base path defined as the "),a("code",[e._v("/Users/admin/projects")]),e._v(" folder using the "),a("code",[e._v("base")]),e._v(" property.")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("projects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /Users/admin/projects\n")])])]),a("p",[e._v("Now, if you wish to point to a file in this sub-folder "),a("code",[e._v("/Users/admin/projects/engineering/2018_roadmap.csv")]),e._v(", you will have to use the relative path "),a("code",[e._v("/engineering/2018_roadmap.csv")]),e._v(". When used in a download file action, it will look like this.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(145),alt:"Download content from file path",width:"2219",height:"1791"}}),e._v(" "),a("em",[e._v("Download content from file path")])],1),e._v(" "),a("p",[e._v("Similarly, to point to a sub-folder "),a("code",[e._v("/Users/admin/projects/marketing/users")]),e._v(", use the relative path "),a("code",[e._v("/marketing/users")]),e._v(".")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(146),alt:"Move file to a folder using folder path",width:"2207",height:"2097"}}),e._v(" "),a("em",[e._v("Move file to a folder using folder path")])],1),e._v(" "),a("h3",{attrs:{id:"naming-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming-pattern"}},[e._v("#")]),e._v(" Naming pattern")]),e._v(" "),a("p",[e._v("Frequently, you may have a log of multiple files with a naming convention. These names typically either includes an incremental count to represent the versions or timestamp to represent the effective date of the contents. Defining a naming pattern allows you to filter files based on these naming conventions. Workato uses the "),a("code",[e._v("?")]),e._v(" and "),a("code",[e._v("*")]),e._v(" symbols to represent any single character or multiple characters respectively.")]),e._v(" "),a("h4",{attrs:{id:"single-character-wildcard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-character-wildcard"}},[e._v("#")]),e._v(" Single character wildcard "),a("code",[e._v("?")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("?")]),e._v(" symbol is used to represent any character once. For example, "),a("code",[e._v("Report_draft_?.pdf")]),e._v(" can be used to represent "),a("code",[e._v("Report_draft_1.pdf")]),e._v(", "),a("code",[e._v("Report_draft_2.pdf")]),e._v(" and "),a("code",[e._v("Report_draft_3.pdf")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"multiple-character-wildcard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-character-wildcard"}},[e._v("#")]),e._v(" Multiple character wildcard "),a("code",[e._v("*")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("*")]),e._v(" symbol is used to represent any zero or more characters. For example, "),a("code",[e._v("Report_draft*.pdf")]),e._v(" can be used to represent "),a("code",[e._v("Report_draft.pdf")]),e._v(", "),a("code",[e._v("Report_draft_1.pdf")]),e._v(", "),a("code",[e._v("Report_draft_2.pdf")]),e._v(" and "),a("code",[e._v("Report_draft_3.pdf")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"using-naming-pattern-in-a-recipe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-naming-pattern-in-a-recipe"}},[e._v("#")]),e._v(" Using naming pattern in a recipe")]),e._v(" "),a("p",[e._v("Let's look at an example of a marketing manager who needs to work with a folder that contains a few type of information series of webinar.")]),e._v(" "),a("p",[e._v("📂 Marketing")]),e._v(" "),a("ul",[a("li",[e._v("📂  ProductHour\n"),a("ul",[a("li",[e._v("📄 Attendees_2018_11_29.csv")]),e._v(" "),a("li",[e._v("📄 Attendees_2018_11_15.csv")]),e._v(" "),a("li",[e._v("📄 Attendees_2018_11_01.csv")]),e._v(" "),a("li",[e._v("📋 Poll_responses_2018_11_29.txt")]),e._v(" "),a("li",[e._v("📋 Poll_responses_2018_11_15.txt")]),e._v(" "),a("li",[e._v("📋 Poll_responses_2018_11_01.txt")]),e._v(" "),a("li",[e._v("📊 Slides_2018_11_29.pptx")]),e._v(" "),a("li",[e._v("📊 Slides_2018_11_15.pptx")]),e._v(" "),a("li",[e._v("📊 Slides_2018_11_01.pptx")])])])]),e._v(" "),a("p",[e._v("Based on each use case, files from this folder can be filtered in a number of ways.")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Use case")]),e._v(" "),a("th",{attrs:{width:"15%"}},[e._v("Naming pattern")]),e._v(" "),a("th",{attrs:{width:"60%"}},[e._v("Usage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Trigger on CSV lines in Attendees information")]),e._v(" "),a("td",[a("b",[e._v("Attendees*.csv")])]),e._v(" "),a("td",[a("img",{attrs:{src:o(800)}}),a("i",[e._v("Filter Attendees CSV files in a trigger")])])]),e._v(" "),a("tr",[a("td",[e._v("List only Poll responses files from November")]),e._v(" "),a("td",[a("b",[e._v("Poll_reponses_2018_11_??.txt")])]),e._v(" "),a("td",[a("img",{attrs:{src:o(801)}}),a("i",[e._v("Filter Poll responses from November")])])]),e._v(" "),a("tr",[a("td",[e._v("Trigger on new Presentation slides in 2018")]),e._v(" "),a("td",[a("b",[e._v("Slides_2018*.pptx")])]),e._v(" "),a("td",[a("img",{attrs:{src:o(802)}}),a("i",[e._v("Filter Presentation slides")])])])])])])}),[],!1,null,null,null);t.default=r.exports},799:function(e,t,o){e.exports=o.p+"assets/img/connection.193fc940.png"},800:function(e,t,o){e.exports=o.p+"assets/img/attendees-filter.362d1b7e.png"},801:function(e,t,o){e.exports=o.p+"assets/img/november-filter.38a1fba6.png"},802:function(e,t,o){e.exports=o.p+"assets/img/slides-filter.f98281c9.png"}}]);