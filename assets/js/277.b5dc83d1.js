(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{1654:function(e,t,n){e.exports=n.p+"assets/img/database-opa-connection.67ce5674.png"},1655:function(e,t,n){e.exports=n.p+"assets/img/files-opa-connection.e624adf6.png"},2665:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"connections-using-on-prem-agent"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connections-using-on-prem-agent"}},[e._v("#")]),e._v(" Connections Using On-prem Agent")]),e._v(" "),o("p",[e._v("A "),o("router-link",{attrs:{to:"/connections.html"}},[e._v("connection")]),e._v(" determines where requests will be made from. With a direct connection, requests will be executed from Workato servers. A connection using an on-prem agent will have requests sent from the environment where the agent is installed in.")],1),e._v(" "),o("p",[e._v("For some of your connections, you may want to specify whether it connects through Workato servers or through your on-prem agent. The triggers and actions available in the chosen connector are the same regardless of your choice of connection. An on-prem app connection needs to point to a specific "),o("router-link",{attrs:{to:"/on-prem/agents/profile.html"}},[e._v("connection profile")]),e._v(" in your on-prem agent.")],1),e._v(" "),o("h2",{attrs:{id:"connecting-to-database-profiles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-database-profiles"}},[e._v("#")]),e._v(" Connecting to database profiles")]),e._v(" "),o("p",[e._v("All database connectors give you the option to connect through an on-prem agent. In the connection fields, Select the desired on-prem agent from the field labelled "),o("strong",[e._v("Is this app in a private network?")]),e._v(".")]),e._v(" "),o("p",[e._v("Once you select the on-prem agent, enter the "),o("strong",[e._v("On-prem connection profile")]),e._v(" name. This profile name should be the same as what you configured in the "),o("code",[e._v("database")]),e._v(" section of the "),o("code",[e._v("config.yml")]),e._v(" configuration file.")]),e._v(" "),o("p",[e._v("In the following example, we are connecting to a SQL Server database with the profile name "),o("code",[e._v("production")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language-YAML extra-class"},[o("pre",{pre:!0,attrs:{class:"language-yaml"}},[o("code",[o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("database")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("production")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("adapter")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" sqlserver\n    "),o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("host")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" localhost\n    "),o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("username")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" me\n    "),o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("password")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" foobar\n")])])]),o("p",[e._v("When configuring a SQL Server connection to this profile, we will need to provide the profile name accordingly.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1654),alt:"Database connection using on-prem agent ",width:"2232",height:"1246"}}),e._v(" "),o("em",[e._v("Database connection using on-prem agent")])],1),e._v(" "),o("h2",{attrs:{id:"connecting-to-on-prem-file-system-profiles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-on-prem-file-system-profiles"}},[e._v("#")]),e._v(" Connecting to on-prem file system profiles")]),e._v(" "),o("p",[e._v("All on-prem files connectors must be connected through an on-prem agent. In the connection fields, Select the desired on-prem agent from the field labelled "),o("strong",[e._v("Is this app in a private network?")]),e._v(".")]),e._v(" "),o("p",[e._v("Once you select the on-prem agent, enter the "),o("strong",[e._v("On-prem connection profile")]),e._v(" name. This profile name should be the same as what you configured in the "),o("code",[e._v("database")]),e._v(" section of the "),o("code",[e._v("config.yml")]),e._v(" configuration file.")]),e._v(" "),o("div",{staticClass:"language-YAML extra-class"},[o("pre",{pre:!0,attrs:{class:"language-yaml"}},[o("code",[o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("files")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("hrfiles")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("base")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"C:/Documents/HR"')]),e._v("\n")])])]),o("p",[e._v("When configuring an on-prem files connection to this profile, we will need to provide the profile name accordingly.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1655),alt:"On-prem file connection using on-prem agent",width:"2262",height:"1278"}}),e._v(" "),o("em",[e._v("On-prem file connection using on-prem agent")])],1),e._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/on-prem/agents/upgrade.html"}},[e._v("Upgrade your on-prem agent")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/on-prem/agents/password-encryption.html"}},[e._v("Avoid exposure of any sensitive data by using the encryptor tool provided")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/on-prem/agents/proxy.html"}},[e._v("Run your on-prem agent in environments with limited internet connectivity")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/on-prem/agents/extension.html"}},[e._v("Connect to legacy applications using Java")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);