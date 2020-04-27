(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1029:function(e,t,o){e.exports=o.p+"assets/img/basic_connection.188afaa2.png"},1030:function(e,t,o){e.exports=o.p+"assets/img/oauth_connection.5b9f8446.png"},1031:function(e,t,o){e.exports=o.p+"assets/img/oauth_plugin.88fc9f95.png"},1032:function(e,t,o){e.exports=o.p+"assets/img/oauth_client.e9112c2d.png"},1033:function(e,t,o){e.exports=o.p+"assets/img/authorization_window.d38a6af9.png"},1034:function(e,t,o){e.exports=o.p+"assets/img/elevate_privilege_acl.88d44945.gif"},1035:function(e,t,o){e.exports=o.p+"assets/img/incident_table_access_control.5b327f71.png"},2417:function(e,t,o){"use strict";o.r(t);var r=o(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"servicenow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#servicenow"}},[e._v("#")]),e._v(" ServiceNow")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.servicenow.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceNow"),r("OutboundLink")],1),e._v(" is a cloud software solution that offers a comprehensive suite of IT management software in the areas of IT service, IT operations, and IT business.")]),e._v(" "),r("h2",{attrs:{id:"api-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-version"}},[e._v("#")]),e._v(" API version")]),e._v(" "),r("p",[e._v("The ServiceNow connector uses "),r("a",{attrs:{href:"http://wiki.servicenow.com/index.php?title=REST_API#ServiceNow_REST_API_Resources",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceNow REST API V2"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"supported-editions-and-versions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-editions-and-versions"}},[e._v("#")]),e._v(" Supported editions and versions")]),e._v(" "),r("p",[e._v("The ServiceNow connector works with ServiceNow and ServiceNow Express editions.")]),e._v(" "),r("p",[e._v("All versions of ServiceNow is supported. However, only Istanbul (or later) supports OAuth 2.0 connection.")]),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",[e._v("Version")]),e._v(" "),r("th",[e._v("Release Date")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Kingston")]),e._v(" "),r("td",[e._v("Latest version")])]),e._v(" "),r("tr",[r("td",[e._v("Jakarta")]),e._v(" "),r("td",[e._v("July 2017")])]),e._v(" "),r("tr",[r("td",[e._v("Istanbul")]),e._v(" "),r("td",[e._v("January 2017")])]),e._v(" "),r("tr",[r("td",[e._v("Helsinki")]),e._v(" "),r("td",[e._v("May 2016")])]),e._v(" "),r("tr",[r("td",[e._v("Geneva")]),e._v(" "),r("td",[e._v("December 2015")])])])]),e._v(" "),r("h2",{attrs:{id:"how-to-connect-to-servicenow-on-workato"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-servicenow-on-workato"}},[e._v("#")]),e._v(" How to connect to ServiceNow on Workato")]),e._v(" "),r("p",[e._v("The ServiceNow connector supports 2 types of authentication")]),e._v(" "),r("ol",[r("li",[e._v("Username/Password (Basic authentication)")]),e._v(" "),r("li",[e._v("OAuth 2.0 (Authorization code grant)")])]),e._v(" "),r("h3",{attrs:{id:"username-password"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#username-password"}},[e._v("#")]),e._v(" Username/Password")]),e._v(" "),r("p",[e._v("Select "),r("strong",[e._v("Username/Password")]),e._v(" authentication type to connect to your ServiceNow instance with your login credentials.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(1029),alt:"Username/Password connection",width:"1153",height:"747"}}),e._v(" "),r("em",[e._v("Username/Password connection")])],1),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[e._v("Field")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Connection name")]),e._v(" "),r("td",[e._v("Give this ServiceNow connection a unique name that identifies which ServiceNow instance it is connected to.")])]),e._v(" "),r("tr",[r("td",[e._v("Authentication type")]),e._v(" "),r("td",[e._v("Choose an authentication type for this ServiceNow connection. The ServiceNow connector supports Username/Password (Basic) authentication and OAuth 2.0 using the authorization code grant.")])]),e._v(" "),r("tr",[r("td",[e._v("Instance name")]),e._v(" "),r("td",[e._v("If your ServiceNow url is https://acme.service-now.com, then instance name is "),r("b",[e._v("acme")]),e._v(".")])]),e._v(" "),r("tr",[r("td",[e._v("Username")]),e._v(" "),r("td",[e._v("Username to connect to ServiceNow.")])]),e._v(" "),r("tr",[r("td",[e._v("Password")]),e._v(" "),r("td",[e._v("Password to connect to ServiceNow.")])])])]),e._v(" "),r("h3",{attrs:{id:"oauth-2-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oauth-2-0"}},[e._v("#")]),e._v(" OAuth 2.0")]),e._v(" "),r("p",[e._v("Select "),r("strong",[e._v("OAuth 2.0")]),e._v(" authentication type to connect to your ServiceNow instance without using your login credentials. This authentication type allows you to grant access to Workato by obtaining a token rather than disclosing your login credentials.")]),e._v(" "),r("p",[e._v("Only Istanbul (or later) versions of ServiceNow supports OAuth 2.0 connection with authorization code grant flow. Make sure that your ServiceNow version supports this when selecting this authentication type.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(1030),alt:"OAuth 2.0 connection",width:"1143",height:"723"}}),e._v(" "),r("em",[e._v("OAuth 2.0 connection")])],1),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[e._v("Field")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Connection name")]),e._v(" "),r("td",[e._v("Give this ServiceNow connection a unique name that identifies which ServiceNow instance it is connected to.")])]),e._v(" "),r("tr",[r("td",[e._v("Authentication type")]),e._v(" "),r("td",[e._v("Choose an authentication type for this ServiceNow connection. The ServiceNow connector supports Username/Password (Basic) authentication and OAuth 2.0 using the authorization code grant.")])]),e._v(" "),r("tr",[r("td",[e._v("Instance name")]),e._v(" "),r("td",[e._v("If your ServiceNow url is https://acme.service-now.com, then instance name is "),r("b",[e._v("acme")]),e._v(".")])]),e._v(" "),r("tr",[r("td",[e._v("Client ID")]),e._v(" "),r("td",[e._v("Client ID to connect to use for authorization. More details about setting up Application Registry for an OAuth client below.")])]),e._v(" "),r("tr",[r("td",[e._v("Client secret")]),e._v(" "),r("td",[e._v("Client secret for this OAuth application. Remember to click on the lock to reveal the actual secret.")])])])]),e._v(" "),r("h3",{attrs:{id:"setting-up-oauth-2-0-client"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-oauth-2-0-client"}},[e._v("#")]),e._v(" Setting up OAuth 2.0 client")]),e._v(" "),r("p",[e._v("Setting up an OAuth 2.0 client requires "),r("strong",[e._v("admin")]),e._v(" role.")]),e._v(" "),r("p",[e._v("Before creating a client application in "),r("strong",[e._v("Application Registries")]),e._v(", remember to activate OAuth. Refer to this "),r("a",{attrs:{href:"https://docs.servicenow.com/bundle/istanbul-platform-administration/page/administer/security/task/t_ActivateOAuth.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(1031),alt:"Activate OAuth plugin",width:"997",height:"339"}}),e._v(" "),r("em",[e._v("Activate OAuth plugin")])],1),e._v(" "),r("p",[e._v("Next, create an endpoint for a client application to gain access to your ServiceNow instance. Refer to this "),r("a",{attrs:{href:"https://docs.servicenow.com/bundle/istanbul-platform-administration/page/administer/security/task/t_CreateEndpointforExternalClients.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide"),r("OutboundLink")],1),e._v(" for more information. During this setup step, you will need to use the following URLs:")]),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[e._v("Field")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Redirect URL")]),e._v(" "),r("td",[e._v("https://www.workato.com/oauth/callback")])]),e._v(" "),r("tr",[r("td",[e._v("Logo URL")]),e._v(" "),r("td",[e._v("https://www.workato.com/blog/wp-content/uploads/2015/10/workato-logo-small.png")])])])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(1032),alt:"OAuth 2.0 client",width:"999",height:"608"}}),e._v(" "),r("em",[e._v("OAuth 2.0 client")])],1),e._v(" "),r("p",[e._v("When the client application is successfully setup, use the Client ID and Client secret in when creating a ServiceNow connection in Workato. This will trigger an OAuth authorization code grant flow that opens a new brower window that requests for authorization.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(1033),alt:"Authorization window",width:"872",height:"485"}}),e._v(" "),r("em",[e._v("Authorization window")])],1),e._v(" "),r("h2",{attrs:{id:"roles-and-permissions-required-to-connect"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roles-and-permissions-required-to-connect"}},[e._v("#")]),e._v(" Roles and permissions required to connect")]),e._v(" "),r("p",[e._v("To use the ServiceNow connector, the connection must be established with a user that has roles(s) with access control to the following tables.")]),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",[e._v("Table")]),e._v(" "),r("th",[e._v("Purpose")]),e._v(" "),r("th",[e._v("Operation")]),e._v(" "),r("th",[e._v("Name")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://docs.servicenow.com/bundle/jakarta-platform-administration/page/administer/table-administration/reference/r_TablesModule.html"}},[e._v("Tables")]),e._v(" (sys_db_object)")]),e._v(" "),r("td",[r("b",[e._v("Tables")]),e._v(" is a table that contains a row for each table in your ServiceNow instance. This table is used to generate a list of tables to perform an action or trigger events from.")]),e._v(" "),r("td",[e._v("read")]),e._v(" "),r("td",[e._v("\n        sys_db_object"),r("br"),e._v("\n        sys_db_object.*\n      ")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://docs.servicenow.com/bundle/jakarta-platform-administration/page/administer/data-dictionary-tables/concept/c_SystemDictionary.html"}},[e._v("Dictionary Entry")]),e._v(" (sys_dictionary)")]),e._v(" "),r("td",[e._v("Contains details for each table and columns in each table in your ServiceNow instance. This table is used to generate input and/or output fields when you select a table to perform and action.")]),e._v(" "),r("td",[e._v("read")]),e._v(" "),r("td",[e._v("\n        sys_dictionary"),r("br"),e._v("\n        sys_dictionary.*\n      ")])])])]),e._v(" "),r("p",[e._v("Some "),r("a",{attrs:{href:"https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/roles/reference/r_BaseSystemRoles.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Base system roles"),r("OutboundLink")],1),e._v(" (such as "),r("strong",[e._v("admin")]),e._v(") will include access control to these tables. However, if you wish to grant only the minimum required access control to use the ServiceNow connector, you may want to "),r("a",{attrs:{href:"#create-a-custom-role"}},[e._v("create a custom role")]),e._v(" with these access control.")]),e._v(" "),r("p",[e._v("On top of these, the user must also have the necessary access control to the tables that are required in the integration use case. For example, to create an integration user that can perform standard ITIL helpdesk actions (open, update, close incidents, problems, changes, configuration management items), you will need to assign it the "),r("strong",[e._v("itil")]),e._v(" role. To grant access only to specific tables or tables besides those available in the base system roles, we recommend "),r("a",{attrs:{href:"#create-a-custom-role"}},[e._v("creating custom roles")]),e._v(" and assigning the appropriate access control as needed.")]),e._v(" "),r("h3",{attrs:{id:"create-a-custom-role"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-role"}},[e._v("#")]),e._v(" Create a custom role")]),e._v(" "),r("p",[e._v("If you do not wish to use any of the "),r("a",{attrs:{href:"https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/roles/reference/r_BaseSystemRoles.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Base system roles"),r("OutboundLink")],1),e._v(" to connect to Workato. You can create a custom role with sufficient access control for the tables you want to work with.")]),e._v(" "),r("p",[e._v("First, create a role in your ServiceNow instance with a name that indicates usage with the Workato connector (For example, "),r("em",[e._v("Workato integrator")]),e._v("). Refer to this "),r("a",{attrs:{href:"https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/roles/task/t_CreateARole.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation "),r("OutboundLink")],1),e._v(" for more details about creating roles. When this is completed, your new role must be given the following access control rules to use the ServiceNow connector.")]),e._v(" "),r("p",[e._v("Only a user with "),r("strong",[e._v("security_admin")]),e._v(" role has the ability to edit or create access control. Check with your ServiceNow administrator if you are unsure. Refer to this "),r("a",{attrs:{href:"https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/contextual-security/concept/access-control-rules.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),r("OutboundLink")],1),e._v(" for more details about access control.")]),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",[e._v("Table")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Operation")]),e._v(" "),r("th",[e._v("Name")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Tables")]),e._v(" "),r("td",[e._v("record")]),e._v(" "),r("td",[e._v("read")]),e._v(" "),r("td",[e._v("\n        sys_db_object"),r("br"),e._v("\n        sys_db_object.*\n      ")])]),e._v(" "),r("tr",[r("td",[e._v("Dictionary Entry")]),e._v(" "),r("td",[e._v("record")]),e._v(" "),r("td",[e._v("read")]),e._v(" "),r("td",[e._v("\n        sys_dictionary"),r("br"),e._v("\n        sys_dictionary.*\n      ")])])])]),e._v(" "),r("p",[r("em",[e._v("Basic Access Control required")])]),e._v(" "),r("p",[e._v("Next, this role should be assigned the relevant access control to use the triggers/actions you need in your integration use case. For a workflow that requires triggering of closed incident events, the user must have a custom role that includes access control to "),r("em",[e._v("read")]),e._v(" and "),r("em",[e._v("write")]),e._v(" to the incident table.")]),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",[e._v("Table")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Operation")]),e._v(" "),r("th",[e._v("Name")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Incident")]),e._v(" "),r("td",[e._v("record")]),e._v(" "),r("td",[e._v("read")]),e._v(" "),r("td",[e._v("incident")])]),e._v(" "),r("tr",[r("td",[e._v("Incident")]),e._v(" "),r("td",[e._v("record")]),e._v(" "),r("td",[e._v("write")]),e._v(" "),r("td",[e._v("incident")])])])]),e._v(" "),r("p",[r("em",[e._v("Additional Access Control required for specific table(s)")])]),e._v(" "),r("p",[e._v("Remember to elevate to a privileged role (security_admin) to edit Access Control records.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(1034),alt:"Elevate to privilege role",width:"1205",height:"526"}}),e._v(" "),r("em",[e._v("Elevate to privilege role")])],1),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(1035),alt:"Granting access control rule for  table to custom role",width:"2548",height:"1412"}}),e._v(" "),r("em",[e._v("Granting access control rule for "),r("code",[e._v("incident")]),e._v(" table to custom role")])],1),e._v(" "),r("h3",{attrs:{id:"real-time-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-time-trigger"}},[e._v("#")]),e._v(" Real-time trigger")]),e._v(" "),r("p",[e._v("The ServiceNow connector features a set of real-time triggers for new and updated records in a selected table. This trigger uses the "),r("code",[e._v("sys_script")]),e._v(" table to send HTTP requests to Workato's webhook gateway when the specified event (new or new and updated records) occurs in your ServiceNow instance.")]),e._v(" "),r("p",[e._v("When you start a recipe with one of these triggers, a record is automatically created in the "),r("code",[e._v("sys_script")]),e._v(" table which points to a webhook URL unique to your recipe. Similarly, when the recipe is stopped, the same record in the "),r("code",[e._v("sys_script")]),e._v(" table is deleted.")]),e._v(" "),r("p",[e._v("To enable this feature, the user account used to establish the ServiceNow connection must be assigned role(s) with the following access control rules.")]),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",[e._v("Table")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Operation")]),e._v(" "),r("th",[e._v("Name")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Business Rules")]),e._v(" "),r("td",[e._v("record")]),e._v(" "),r("td",[e._v("read")]),e._v(" "),r("td",[e._v("\n        sys_script"),r("br"),e._v("\n        sys_script.*\n      ")])]),e._v(" "),r("tr",[r("td",[e._v("Business Rules")]),e._v(" "),r("td",[e._v("record")]),e._v(" "),r("td",[e._v("write")]),e._v(" "),r("td",[e._v("\n        sys_script"),r("br"),e._v("\n        sys_script.*\n      ")])]),e._v(" "),r("tr",[r("td",[e._v("Business Rules")]),e._v(" "),r("td",[e._v("record")]),e._v(" "),r("td",[e._v("create")]),e._v(" "),r("td",[e._v("sys_script")])]),e._v(" "),r("tr",[r("td",[e._v("Business Rules")]),e._v(" "),r("td",[e._v("record")]),e._v(" "),r("td",[e._v("delete")]),e._v(" "),r("td",[e._v("sys_script")])])])]),e._v(" "),r("p",[r("em",[e._v("Access Control required to use real-time triggers")])])])}),[],!1,null,null,null);t.default=a.exports}}]);