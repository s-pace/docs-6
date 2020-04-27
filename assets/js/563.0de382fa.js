(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{2680:function(e,t,n){"use strict";n.r(t);var o=n(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"configuration-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file"}},[e._v("#")]),e._v(" Configuration file")]),e._v(" "),n("p",[e._v("The configuration file ("),n("strong",[e._v("config.yml")]),e._v(") contains one or more "),n("router-link",{attrs:{to:"/on-prem/agents/profile.html"}},[e._v("connection profiles")]),e._v(" used to establish an "),n("router-link",{attrs:{to:"/on-prem/agents/connection.html"}},[e._v("on-prem connection")]),e._v(".")],1),e._v(" "),n("p",[e._v("Since requests will be distributed evenly across all agents, the on-prem connection makes an assumption that the profile name used to obtain credentials is available and identical across every agent in the same group. Hence, all on-prem agents in the same on-prem group must use identical configuration files.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Creating agents in the same group with different or missing profiles will cause errors in unexpected ways.")])])]),e._v(" "),n("p",[e._v("It is recommended to configure a single agent first, with all the required profiles, and complete the setup before moving on to backup agents. The configuration file can then be duplicated and used for subsequent agents in the same group.")])])}),[],!1,null,null,null);t.default=i.exports}}]);