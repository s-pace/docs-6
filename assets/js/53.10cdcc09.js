(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{2007:function(t,e,a){t.exports=a.p+"assets/img/adding-parameters.db9462db.png"},2008:function(t,e,a){t.exports=a.p+"assets/img/adding-a-parameter.5198badc.png"},2009:function(t,e,a){t.exports=a.p+"assets/img/configuring-a-parameter.ac3eb4a9.png"},2010:function(t,e,a){t.exports=a.p+"assets/img/buttons.3f125b9f.png"},2011:function(t,e,a){t.exports=a.p+"assets/img/quick-reply-buttons.d003b845.png"},205:function(t,e,a){t.exports=a.p+"assets/img/command-recipes.d20dd266.png"},206:function(t,e,a){t.exports=a.p+"assets/img/button-click.d90c298b.png"},207:function(t,e,a){t.exports=a.p+"assets/img/collecting-parameters.f20b4ada.png"},2755:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"workbot-command-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#workbot-command-trigger"}},[t._v("#")]),t._v(" Workbot command trigger")]),t._v(" "),n("p",[t._v("Workbot commands allow you to trigger recipes from Workplace. These recipes can then perform actions in your apps (e.g. creating new ServiceNow tickets, listing Salesforce opportunities).")]),t._v(" "),n("p",[t._v("This means you can from perform actions in your apps from within Workplace!")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(64),alt:"Command example",width:"1268",height:"874"}}),t._v(" "),n("em",[t._v("Sending a 'new_issue' command with additional parameters in Workplace, then receiving a reply")])],1),t._v(" "),n("p",[t._v("When a command is sent to Workbot in Workplace, it will trigger the Workbot recipe and execute its actions.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(205),alt:"Command recipe",width:"3640",height:"1548"}}),t._v(" "),n("em",[t._v("A Workbot recipe with a Workbot command trigger")])],1),t._v(" "),n("h2",{attrs:{id:"configuring-the-command"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-command"}},[t._v("#")]),t._v(" Configuring the command")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(63),alt:"New command",width:"3304",height:"2094"}}),t._v(" "),n("em",[t._v("Example 'new_issue' command")])],1),t._v(" "),n("h3",{attrs:{id:"input-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),n("p",[t._v("The table below lists the input fields in the trigger and what they do.")]),t._v(" "),n("table",{staticClass:"unchanged rich-diff-level-one"},[n("thead",[n("tr",[n("th",[t._v("Input field")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("a",{attrs:{href:"#command-name"}},[t._v("Command name")])]),t._v(" "),n("td",[t._v("\n              Name of the command.\n            ")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"#parameters"}},[t._v("Parameters")])]),t._v(" "),n("td",[t._v("\n              Parameter can store additional data that can be used as datapills in follow-up recipe actions.\n            ")])]),t._v(" "),n("tr",[n("td",[t._v("Command hint")]),t._v(" "),n("td",[t._v("\n            Display this instead of command name in response to "),n("b",[t._v("help")]),t._v(" messages.\n            ")])]),t._v(" "),n("tr",[n("td",[t._v("Hidden command")]),t._v(" "),n("td",[t._v("\n              If "),n("b",[t._v("Yes")]),t._v(", command will not show up as a command in "),n("b",[t._v("help")]),t._v(" messages. Defaults to "),n("b",[t._v("No")]),t._v(".\n            ")])])])]),t._v(" "),n("h4",{attrs:{id:"command-name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command-name"}},[t._v("#")]),t._v(" Command name")]),t._v(" "),n("p",[t._v("Workbot commands can invoke their recipes by:")]),t._v(" "),n("ol",[n("li",[t._v("Sending the command name in a direct message to Workbot, e.g. "),n("strong",[t._v("new_issue")])]),t._v(" "),n("li",[t._v("Sending the command name in a channel and tagging Workbot, e.g. "),n("strong",[t._v("@workbot new_issue")])]),t._v(" "),n("li",[t._v("Submitting a command button with the command name configured:\n"),n("DocImage",{attrs:{src:a(289),alt:"Command name in button",width:"3304",height:"1772"}}),n("br"),n("em",[t._v("A button can be configured to invoke another Workbot recipe")]),n("br")],1),t._v(" "),n("li",[t._v("Submitting a quick reply button with the command name configured:\n"),n("DocImage",{attrs:{src:a(290),alt:"Command name in button",width:"3304",height:"1781"}}),n("br"),n("em",[t._v("Quick reply button configured to invoke another Workbot recipe")]),n("br"),t._v(" "),n("DocImage",{attrs:{src:a(206),alt:"Command name in button example",width:"1112",height:"716"}}),t._v(" "),n("em",[t._v("The 'Next' button invokes the 'new_issue' command and executes the recipe when submitted")])],1)]),t._v(" "),n("h4",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),n("p",[t._v("Commands can also prompt users for additional parameters. For example, to create a new Github ticket, the user should provide the "),n("code",[t._v("title")]),t._v(" and "),n("code",[t._v("description")]),t._v(" of the incident.")]),t._v(" "),n("p",[t._v("In this case, you can add 2 parameters; "),n("code",[t._v("title")]),t._v(" & "),n("code",[t._v("description")]),t._v(". When the command is invoked, Workbot will prompt the user for each parameter.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(207),alt:"Collecting parameters",width:"1230",height:"972"}}),t._v(" "),n("em",[t._v("Workbot can ask users for info if you specify additional parameters in your command")])],1),t._v(" "),n("p",[t._v("Users can also skip the prompts by supplying the parameters together with the command.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(64),alt:"Command with in-line parameters",width:"1268",height:"874"}}),t._v(" "),n("em",[t._v("Sending a 'new_issue' command with additional parameters Title and Description")])],1),t._v(" "),n("h5",{attrs:{id:"defining-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defining-parameters"}},[t._v("#")]),t._v(" Defining parameters")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(2007),alt:"Adding parameters",width:"3304",height:"908"}}),t._v(" "),n("em",[t._v("2 parameters added to command")])],1),t._v(" "),n("p",[t._v("To add a parameter, click on the "),n("strong",[t._v("+Add parameter")]),t._v(" button under the "),n("strong",[t._v("Parameters")]),t._v(" section of a Workbot command trigger.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(2008),alt:"Adding a new parameter",width:"1412",height:"531"}}),t._v(" "),n("em",[t._v("Adding a new parameter")])],1),t._v(" "),n("p",[t._v("Configure the parameter by specfying the parameter name, the data type (typically string) and so on.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(2009),alt:"Parameter form empty",width:"3304",height:"2374"}}),t._v(" "),n("em",[t._v("Configuring a parameter")])],1),t._v(" "),n("p",[t._v("The table below describes in further detail what each parameter configuration field does.")]),t._v(" "),n("table",{staticClass:"unchanged rich-diff-level-one"},[n("thead",[n("tr",[n("th",[t._v("Input field")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Name")]),t._v(" "),n("td",[t._v("\n              Name of the parameter. This is the name you use to reference the parameter in:"),n("br"),t._v(" "),n("ul",[n("li",[t._v("\n                  In-line commands")]),n("br"),n("img",{attrs:{src:a(64)}}),t._v(" "),n("li",[t._v("\n                  Buttons"),n("br"),n("img",{attrs:{src:a(2010)}})]),t._v(" "),n("li",[t._v("\n                  Quick reply buttons"),n("br"),n("img",{attrs:{src:a(2011)}})])])])]),t._v(" "),n("tr",[n("td",[t._v("Data type")]),t._v(" "),n("td",[t._v("\n              Data type of the parameter. Currently only supports "),n("code",[t._v("string")]),t._v(".\n            ")])]),t._v(" "),n("tr",[n("td",[t._v("Optional?")]),t._v(" "),n("td",[t._v("\n              If set to "),n("b",[t._v("Yes")]),t._v(", users can skip this input. If set to "),n("b",[t._v("No")]),t._v(", users are required to provide this input.\n            ")])]),t._v(" "),n("tr",[n("td",[t._v("Options")]),t._v(" "),n("td",[t._v("\n              If the display name and the value are different, separate the two by a colon, e.g. "),n("b",[t._v("High:1,Medium:2,Low:3")]),t._v(".\n            ")])])])]),t._v(" "),n("h5",{attrs:{id:"advanced-methods-to-pass-parameter-values"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-methods-to-pass-parameter-values"}},[t._v("#")]),t._v(" Advanced methods to pass parameter values")]),t._v(" "),n("p",[t._v("Parameter values can also be passed by buttons and quick reply buttons when they invoke a downstream Workbot command recipe. Typically, you use parameters to pass additional context for downstream Workbot recipe to use.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(289),alt:"Command name in button",width:"3304",height:"1772"}}),t._v(" "),n("em",[t._v("A 'Duplicate incident' button which invokes the 'new_issue' recipe, passing it context about the incident to be duplicated.")])],1),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(290),alt:"Command name in quick reply button",width:"3304",height:"1781"}}),t._v(" "),n("em",[t._v("A 'Duplicate incident' quick reply button which invokes the 'new_issue' recipe, passing it context about the incident to be duplicated.")])],1),t._v(" "),n("h1",{attrs:{id:"learn-more"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#learn-more"}},[t._v("#")]),t._v(" Learn more")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/workbot-for-workplace/using-workbot-for-workplace.html"}},[t._v("Using Workbot for Workplace")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/workbot-for-workplace/workbot-actions.html"}},[t._v("Workbot actions")])],1)])])}),[],!1,null,null,null);e.default=r.exports},289:function(t,e,a){t.exports=a.p+"assets/img/command-button.dae8b014.png"},290:function(t,e,a){t.exports=a.p+"assets/img/command-quick-reply-button.2c6d6c2d.png"},63:function(t,e,a){t.exports=a.p+"assets/img/new-command.f64d1499.png"},64:function(t,e,a){t.exports=a.p+"assets/img/workbot-command-example.1c21f54f.png"}}]);