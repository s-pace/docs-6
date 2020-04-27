(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1047:function(t,e,o){t.exports=o.p+"assets/img/sftp-connection-setup.0f71ef82.png"},2422:function(t,e,o){"use strict";o.r(e);var r=o(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"sftp-connector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sftp-connector"}},[t._v("#")]),t._v(" SFTP connector")]),t._v(" "),r("p",[t._v("SSH File Transfer Protocol (SFTP) is a file transfer protocol that encodes and transmits data through a secure channel. It establishes security by encrypting both authentication credentials and data files being transferred.")]),t._v(" "),r("p",[t._v("Use this connector for bi-directional SFTP integrations. This connector allows you to read, write and manage files in your SFTP server.")]),t._v(" "),r("p",[t._v("With the SFTP connector, you use the triggers to monitor your SFTP server for events (e.g. "),r("router-link",{attrs:{to:"/connectors/sftp/updated-csv-trigger.html"}},[t._v("New/updated CSV file in directory")]),t._v("). You can also integrate recipe actions like "),r("router-link",{attrs:{to:"/connectors/sftp/upload-file-action.html"}},[t._v("Upload file")]),t._v(", "),r("router-link",{attrs:{to:"/connectors/sftp/rename-file-action.html"}},[t._v("Rename file")]),t._v(", and "),r("router-link",{attrs:{to:"/connectors/sftp/download-file-action.html"}},[t._v("Download file")]),t._v(".")],1),t._v(" "),r("h3",{attrs:{id:"how-to-authenticate-with-sftp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-authenticate-with-sftp"}},[t._v("#")]),t._v(" How to authenticate with SFTP")]),t._v(" "),r("p",[t._v("Because SFTP is built on top of the Secure Shell Protocol (SSH), you can include SSH keys as part of your authentication flow. SSH keys can be used in combination with user ID/password or used independently to authenticate Workato to your SFTP server. This extends the security of your connection with SSH encryption for your public and private keys.")]),t._v(" "),r("h2",{attrs:{id:"connection-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connection-setup"}},[t._v("#")]),t._v(" Connection setup")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(1047),alt:"Connection setup",width:"2807",height:"2831"}}),t._v(" "),r("em",[t._v("SFTP connection setup")])],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Input field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Connection name")]),t._v(" "),r("td",[t._v("Given this connection a unique name that identifies which SFTP server it is connected to.")])]),t._v(" "),r("tr",[r("td",[t._v("Auth type")]),t._v(" "),r("td",[t._v("Select which authentication method to use.")])]),t._v(" "),r("tr",[r("td",[t._v("Username")]),t._v(" "),r("td",[t._v("The user ID of the SFTP server to be connected.")])]),t._v(" "),r("tr",[r("td",[t._v("Password")]),t._v(" "),r("td",[t._v("The password credential to the SFTP server to be connected.")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Private key")])]),t._v(" "),r("td",[r("em",[t._v("Only for "),r("strong",[t._v("Public/private key")]),t._v(" authentication type.")]),r("br"),t._v("The SSH private key for the SFTP server to be connected.")])]),t._v(" "),r("tr",[r("td",[t._v("Hostname")]),t._v(" "),r("td",[t._v("The address of your SFTP server.")])]),t._v(" "),r("tr",[r("td",[t._v("Port")]),t._v(" "),r("td",[t._v("The default port for SFTP is "),r("code",[t._v("22")]),t._v(".")])]),t._v(" "),r("tr",[r("td",[t._v("Host key fingerprint")]),t._v(" "),r("td",[t._v("A hash of the SSH public key.")])]),t._v(" "),r("tr",[r("td",[t._v("Transfer buffer size")]),t._v(" "),r("td",[t._v("The size of the buffer used to transfer files.")])]),t._v(" "),r("tr",[r("td",[t._v("Force close")]),t._v(" "),r("td",[t._v("Shuts down the SSH connection at the end of each transaction. Toggle this if your SFTP server connection attempts get stuck. Otherwise, leave it blank.")])])])]),t._v(" "),r("h2",{attrs:{id:"other-related-chapters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-related-chapters"}},[t._v("#")]),t._v(" Other related chapters:")]),t._v(" "),r("p",[t._v("The SFTP connector documentation contains the following chapters:")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/sftp/updated-file-trigger.html"}},[t._v("New/updated file in directory")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/sftp/updated-csv-trigger.html"}},[t._v("New/updated CSV file in directory")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/sftp/create-folder-action.html"}},[t._v("Create folder")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/sftp/list-directory-action.html"}},[t._v("List directory")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/sftp/get-file-information-action.html"}},[t._v("Get file information")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/sftp/upload-file-action.html"}},[t._v("Upload file")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/sftp/download-file-action.html"}},[t._v("Download file")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/sftp/download-large-file-action.html"}},[t._v("Download large file")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/sftp/rename-file-action.html"}},[t._v("Rename file")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/sftp/remove-file-action.html"}},[t._v("Remove file")])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);