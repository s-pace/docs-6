(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{2673:function(e,t,n){"use strict";n.r(t);var r=n(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"upgrading-to-newer-versions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-newer-versions"}},[e._v("#")]),e._v(" Upgrading to newer versions")]),e._v(" "),n("p",[e._v("Follow the instructions below for upgrading an existing agent:")]),e._v(" "),n("h2",{attrs:{id:"windows"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),n("ol",[n("li",[n("router-link",{attrs:{to:"/on-prem/agents/setup.html"}},[e._v("Download the newest installer")])],1),e._v(" "),n("li",[e._v("Verify that the agent is stopped (either stop "),n("strong",[e._v("Workato Agent")]),e._v(" Windows service or terminate console-based agent)")]),e._v(" "),n("li",[e._v("Uninstall the agent (e.g.  "),n("strong",[e._v("Start Menu → Workato → Uninstall")]),e._v("). This should not change the "),n("code",[e._v("config.yml")]),e._v(" file and the certificate files ("),n("code",[e._v("cert.key")]),e._v(", "),n("code",[e._v("cert.pem")]),e._v(") in "),n("code",[e._v("C:\\Program Files\\Workato Agent/conf")]),e._v(".")]),e._v(" "),n("li",[e._v("Run the downloaded installer (this will automatically install to the same location)")]),e._v(" "),n("li",[e._v("Run the agent. Depending on the setup, either start "),n("strong",[e._v("Workato Agent")]),e._v(" Windows service or run the agent from command line.")]),e._v(" "),n("li",[e._v("Make sure your agent is active and verify its version number on the "),n("a",{attrs:{href:"https://www.workato.com/on_prem_groups",target:"_blank",rel:"noopener noreferrer"}},[e._v("on-prem agent page"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"linux-macos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[e._v("#")]),e._v(" Linux/MacOS")]),e._v(" "),n("ol",[n("li",[e._v("Verify that the agent process is stopped. The upgrade will fail if any running agents are detected.")]),e._v(" "),n("li",[e._v("Navigate to the agent directory (e.g. "),n("code",[e._v("cd ~/programs/workato-agent/")]),e._v("). "),n("strong",[e._v("Do not")]),e._v(" navigate further into the "),n("code",[e._v("/bin/")]),e._v(" directory.")]),e._v(" "),n("li",[e._v("Run the upgrade script: "),n("code",[e._v("bin/upgrade.sh")]),e._v(". Make sure you have enough permissions.")]),e._v(" "),n("li",[e._v("Follow the instructions provided by the upgrade script. Confirm the upgrade when prompted.")]),e._v(" "),n("li",[e._v("Upon successful completion of the upgrade, run the agent (e.g. "),n("code",[e._v("bin/run.sh")]),e._v(").")]),e._v(" "),n("li",[e._v("Make sure your agent is active and verify its version number on the "),n("a",{attrs:{href:"https://www.workato.com/on_prem_groups",target:"_blank",rel:"noopener noreferrer"}},[e._v("on-prem agent page"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("The upgrade process is not triggered if no new versions are available. However, it might be necessary to repair a broken installation; in that case use the command line option when running the upgrade: "),n("code",[e._v("bin/upgrade.sh --enforce")]),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"troubleshoot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#troubleshoot"}},[e._v("#")]),e._v(" Troubleshoot")]),e._v(" "),n("ul",[n("li",[e._v("For Linux/MacOS users, if you have anaconda installed on your terminal, be sure to deactivate any conda environments with "),n("code",[e._v("conda deactivate")]),e._v(" as it will cause an error when upgrading.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);