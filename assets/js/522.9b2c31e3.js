(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{2577:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),s("p",[e._v("Below, we have compiled a list of best practices which makes development of your custom connector easier to build, test and maintain. We have organised this best practices in the following way:")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#general-best-practices"}},[e._v("General best practices")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#block-specific-best-practices"}},[e._v("Block specific best practices")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#connection-block"}},[e._v("Connection block")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#test-block"}},[e._v("Test block")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#object-definitions"}},[e._v("Object definitions block")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#actions"}},[e._v("Actions block")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#triggers"}},[e._v("Triggers block")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#sample-output"}},[e._v("Sample output block")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#error-handling"}},[e._v("Error handling")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#usability-and-testing-best-practices"}},[e._v("Usability and testing best practices")])])]),e._v(" "),s("h2",{attrs:{id:"general-best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-best-practices"}},[e._v("#")]),e._v(" General best practices")]),e._v(" "),s("p",[e._v("These best practices relate directly to the development of a custom connector on Workato's SDK platform.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("The connector should be named after the application. This makes it easier for you or collaborators in your workspace to search for your own custom connector")]),e._v(" "),s("ul",[s("li",[e._v("If a standard/global connector already exists, the SDK should be named "),s("code",[e._v("<app name> (Custom)")]),e._v(", which indicates it’s custom SDK connector")])])]),e._v(" "),s("li",[s("p",[e._v("Provide trigger and action level hints when building actions. This allows users who aren't familiar with your connector understand which action to choose")])]),e._v(" "),s("li",[s("p",[e._v("Avoid leaving unused variables, methods, pick lists and object_definitions inside your connector code")])]),e._v(" "),s("li",[s("p",[e._v("Keep the code clean, easy to read, understand and extensible")]),e._v(" "),s("ul",[s("li",[e._v("Follow the DRY principle of Ruby, use methods and object_definitions for reusable code liberally")])])]),e._v(" "),s("li",[s("p",[e._v("Always be expressive when declaring named objects or methods")]),e._v(" "),s("ul",[s("li",[e._v("Do not use short codes, special chars for declaring variables")]),e._v(" "),s("li",[e._v("Users should be able to understand what each block of code is trying to accomplish based on its name")]),e._v(" "),s("li",[e._v("Include comments before Actions and Triggers, indicate what it does and any special instructions and limitations")])])]),e._v(" "),s("li",[s("p",[e._v("Prefix with "),s("code",[e._v("_")]),e._v(" for unused parameters in blocks")]),e._v(" "),s("ul",[s("li",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" lambda "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("_connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" _config_fields"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Some code here that doesn't reference the connection or config_fields object")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Include empty lines between each code block (methods, actions, triggers, pick lists etc.). This makes your code more readable for those looking to improve upon it")])]),e._v(" "),s("li",[s("p",[e._v("Use the "),s("code",[e._v("dig")]),e._v(" method when you need to navigate data to two or more levels. "),s("a",{attrs:{href:"http://ruby-doc.org/core-2.3.0_preview1/Hash.html#method-i-dig",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[e._v("Use "),s("code",[e._v("#{}")]),e._v(" instead of string concatenation ("),s("code",[e._v('"string" + "string"')]),e._v(") whenever possible")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("#{}")]),e._v(" is more defensive as errors are not raised when the variable is not declared")])])]),e._v(" "),s("li",[s("p",[e._v("Use Date fields and format cautiously, ensure the time zones are handled")])]),e._v(" "),s("li",[s("p",[e._v("Avoid puts inside the code except for when testing and debugging using the "),s("code",[e._v("Console")]),e._v(" tab in the debugger console")])]),e._v(" "),s("li",[s("p",[e._v("Avoid implementing triggers(strictly) and actions for endpoints with HTTP Rate limits")]),e._v(" "),s("ul",[s("li",[e._v("If the action is required, then handle rate limit logic on the recipe but not in the connector code")])])]),e._v(" "),s("li",[s("p",[e._v("Each Trigger and Action should have a description tag with appropriate action or trigger name")]),e._v(" "),s("ul",[s("li",[e._v("Standard convention: "),s("code",[e._v("<action/trigger> <object> in <applicationName>")])]),e._v(" "),s("li",[e._v("Example: Search invoices in Xero")])])])]),e._v(" "),s("h2",{attrs:{id:"block-specific-best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-specific-best-practices"}},[e._v("#")]),e._v(" Block specific best practices")]),e._v(" "),s("h3",{attrs:{id:"connection-block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-block"}},[e._v("#")]),e._v(" Connection block")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Use control_type: password for sensitive data")])]),e._v(" "),s("li",[s("p",[e._v("Use control_type: subdomain and url when requesting user input about a subdomain parameter")]),e._v(" "),s("ul",[s("li",[e._v("This makes your input fields more usable to end users and minimises the amount of human error possible")]),e._v(" "),s("li",[e._v("Example:"),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" lambda "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("_connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" _config_fields"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'sub_domain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      control_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'subdomain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.salesforce.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      hint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Provide salesforce sub-domain e.g. <code>test_instance</code>'")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])])])])]),e._v(" "),s("li",[s("p",[e._v("If the connector is intended for distribution, ensure that no sensitive details are kept inside the code")]),e._v(" "),s("ul",[s("li",[e._v("This is especially important for Client IDs and Secrets when authenticating through an OAuth 2.0 flow")])])]),e._v(" "),s("li",[s("p",[e._v("Define refresh_token and detect_on blocks for authorization tokens that expires over time. While your initial connection may be successful, your connection may break when the token expires")])]),e._v(" "),s("li",[s("p",[e._v("Provide reference links to aid users into how to attain credentials to create a successful connection")]),e._v(" "),s("ul",[s("li",[e._v("A simple thing like adding a link to the URL that lets you generate API keys or client IDs and secrets are go a long way for users of your custom connector.")])])]),e._v(" "),s("li",[s("p",[e._v("Ensure required scopes are included in the authorization URL for Oauth 2 authentication")])]),e._v(" "),s("li",[s("p",[e._v("When using "),s("code",[e._v('type: "custom_auth"')]),e._v(", the "),s("code",[e._v("acquire:")]),e._v(" block is only run if the "),s("code",[e._v("detect_on:")]),e._v(" or "),s("code",[e._v("refresh_on:")]),e._v(" is triggered. When using the "),s("code",[e._v("acquire:")]),e._v(" block to retrieve credentials like tokens, be sure to include the error code that is returned when your "),s("code",[e._v("test:")]),e._v(" block is executed without retrieving the proper tokens.")])]),e._v(" "),s("li",[s("p",[e._v("Include version of the API if the app supports multiple versions at the same time")])]),e._v(" "),s("li",[s("p",[e._v("Store the API url in connection hash")]),e._v(" "),s("ul",[s("li",[e._v("If the base url is dynamic and tenant specific, use acquire block to fetch the base_url dynamically")])])]),e._v(" "),s("li",[s("p",[e._v("Use picklists to select production, sandbox environments if the SDK need to support different environments")])]),e._v(" "),s("li",[s("p",[e._v("Use picklists in the "),s("code",[e._v("fields:")]),e._v(" block in the "),s("code",[e._v("connection:")]),e._v(" block to avoid typos, which leads to connection failures")])]),e._v(" "),s("li",[s("p",[e._v("Use base_uri(when applicable) to set the base url for API calls, which avoids keeping the full URL in triggers, actions, methods and picklists")]),e._v(" "),s("ul",[s("li",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("base_uri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" lambda "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("connection"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'custom_domain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[e._v("#{")]),e._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'custom_domain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[e._v("}")])]),e._v('"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://go.trackvia.com'")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Use the static base_uri or acquire the base_url from the endpoint (if there is an API which returns base_url account specific)")])])]),e._v(" "),s("h2",{attrs:{id:"test-block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-block"}},[e._v("#")]),e._v(" Test block")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Use endpoint with least privileges and minimum data in the response for testing the connection.")]),e._v(" "),s("ul",[s("li",[e._v("E.g. use endpoint “get(/profile/me”), which may hold min. data in the memory.")])])]),e._v(" "),s("li",[s("p",[e._v("Minimize the get method to store least possible data on the test endpoint call.")]),e._v(" "),s("ul",[s("li",[e._v("This reduces the amount of time to successfully create a connection")]),e._v(" "),s("li",[e._v("Validate connection status before a recipe is started")])])])]),e._v(" "),s("h2",{attrs:{id:"object-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-definitions"}},[e._v("#")]),e._v(" Object definitions")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Dynamic object definitions should be preferred over static object definitions")]),e._v(" "),s("ul",[s("li",[e._v("Dynamic object definitions reduce the amount of maintenance of the custom connector - especially when users can create custom fields in the application which you want to connect to")]),e._v(" "),s("li",[e._v("Dynamic object definitions normally depend on sending HTTP requests to metadata endpoints of the App you hope to connect to. Use the response to transform the data into the format expected in the "),s("code",[e._v("input_fields:")]),e._v(" and "),s("code",[e._v("output_fields:")]),e._v(" blocks.")])])]),e._v(" "),s("li",[s("p",[e._v("Special characters are not allowed in object field names except underscore "),s("code",[e._v("_")])])]),e._v(" "),s("li",[s("p",[e._v("Use labels to increase the usability for custom connector end users")]),e._v(" "),s("ul",[s("li",[e._v("For example, some APIs provide metadata endpoints whose responses come with suitable labels for fields. For example, metadata about fields in an target application may contain an "),s("code",[e._v("ID")]),e._v(" field as well as a "),s("code",[e._v("name")]),e._v(" field. This may require us to map "),s("code",[e._v("name")]),e._v(" in our object definitions to "),s("code",[e._v("ID")]),e._v(" and "),s("code",[e._v("label")]),e._v(" in our object definitions to "),s("code",[e._v("name")]),e._v(" to maximise usability for end users.")])])]),e._v(" "),s("li",[s("p",[e._v("Use "),s("code",[e._v("control_type:")]),e._v(" judiciously to reduce user error")]),e._v(" "),s("ul",[s("li",[e._v("For example, use "),s("code",[e._v("control_type:")]),e._v(" = "),s("code",[e._v("date_time")]),e._v(" instead of "),s("code",[e._v("text")]),e._v(" when looking to collect date time input")])])]),e._v(" "),s("li",[s("p",[e._v("Toggle fields should be used for "),s("code",[e._v("boolean")]),e._v(", "),s("code",[e._v("select")]),e._v(", "),s("code",[e._v("multi-select")]),e._v(" control_types to allow users to toggle to "),s("code",[e._v("text")]),e._v(" input to map datapills during recipe design time")])]),e._v(" "),s("li",[s("p",[e._v("When Toggle option is provided, toggle hints should indicate allowed values.")]),e._v(" "),s("ul",[s("li",[e._v("List values on the recipe UI if only few values, otherwise link to the appropriate page to show possible values for the toggle field")])])]),e._v(" "),s("li",[s("p",[e._v("Use number type when you need double and float, currency values.")])]),e._v(" "),s("li",[s("p",[e._v("Use static pick_list values for select options if the options are static e.g. Genders, Address Type, Currency types")])])]),e._v(" "),s("h2",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[e._v("#")]),e._v(" Actions")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Actions should be clearly named")]),e._v(" "),s("ul",[s("li",[e._v("Naming conventions for actions:\n"),s("ul",[s("li",[e._v("Get - Get only one specific record by ID")]),e._v(" "),s("li",[e._v("Search - Return 0, 1 or more records based on a search query")]),e._v(" "),s("li",[e._v("List - List out all records")]),e._v(" "),s("li",[e._v("Add - Create a new record")]),e._v(" "),s("li",[e._v("Create - Create a new record")]),e._v(" "),s("li",[e._v("Update - Update an existing record")]),e._v(" "),s("li",[e._v("Upsert - Create a new record or update an existing record")])])])])]),e._v(" "),s("li",[s("p",[e._v("Be sure to perform validations on input_fields whenever necessary")]),e._v(" "),s("ul",[s("li",[e._v("We always advise guarding against edge cases by performing validation")])])]),e._v(" "),s("li",[s("p",[e._v("Use "),s("code",[e._v("help")]),e._v(" tag, to indicate any special instructions to the user")])]),e._v(" "),s("li",[s("p",[e._v("In execute block, call target application endpoints only for the data")]),e._v(" "),s("ul",[s("li",[e._v("Metadata HTTP requests should have been executed in "),s("code",[e._v("object_definitions:")])])])]),e._v(" "),s("li",[s("p",[e._v("Use methods as much as possible to reduce redundant code")])]),e._v(" "),s("li",[s("p",[e._v("Use "),s("code",[e._v("after_response")]),e._v(" block to capture response header information like cookies etc.")])]),e._v(" "),s("li",[s("p",[e._v("It’s good practice to have a custom action in connector for CRUD operations, which can be used for any endpoint")])]),e._v(" "),s("li",[s("p",[e._v("Actions that delete entire tables or impact object_definitions are not advisable in Workato")]),e._v(" "),s("ul",[s("li",[e._v("These actions have lasting impacts and potentially lead to data loss")]),e._v(" "),s("li",[e._v("It is advised for these actions to be deliberate and done directly by the an admin on the application instead of through a recipe")])])])]),e._v(" "),s("h2",{attrs:{id:"triggers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#triggers"}},[e._v("#")]),e._v(" Triggers")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Name of the trigger should be specific to what it does")])]),e._v(" "),s("li",[s("p",[e._v("E.g. New employee in Replicon - Triggers when new employee created in Replicon")])]),e._v(" "),s("li",[s("p",[e._v("Naming conventions for Triggers:")]),e._v(" "),s("ul",[s("li",[e._v("New - Trigger that detects when objects are created")]),e._v(" "),s("li",[e._v("New or updated - Trigger that detects when objects are either created or updated")]),e._v(" "),s("li",[e._v("Deleted - Trigger that detects when objects are deleted")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Since")]),e._v(" input fields are often useful for users to retrieve data from the past")]),e._v(" "),s("ul",[s("li",[e._v("This could be an optional field to allow users the ability to pull records from a past date when first starting the recipe")]),e._v(" "),s("li",[e._v("Traditionally, APIs should support this by allowing you to query records since a past date using a set parameter")])])]),e._v(" "),s("li",[s("p",[e._v("Avoid making unnecessary API requests in the poll block as this block is executed at least once in each trigger poll")])]),e._v(" "),s("li",[s("p",[e._v("Use closure block to store query fields, page number, last modified date time (only if required)")]),e._v(" "),s("ul",[s("li",[e._v("Information cached in closure is persisted across poll intervals.")])])]),e._v(" "),s("li",[s("p",[e._v("Use methods as much as possible to reduce redundant code")])]),e._v(" "),s("li",[s("p",[e._v("Dynamic webhooks should be used in APIs that have functionality for programatic setting up and tearing down of webhook URLs")]),e._v(" "),s("ul",[s("li",[e._v("Static webhooks are the alternative but require you to manually register Workato's given static URL")])])])]),e._v(" "),s("h3",{attrs:{id:"sample-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-output"}},[e._v("#")]),e._v(" Sample output")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("In Workato recipes, every action or trigger should have sample output data populated with output data pills under app data section")]),e._v(" "),s("ul",[s("li",[e._v("This gives user idea about the data that he uses in downstream systems and improves usability")])])]),e._v(" "),s("li",[s("p",[e._v("Static static sample output data is preferred for the objects with fewer fields")]),e._v(" "),s("ul",[s("li",[e._v("Dynamic sample outputs can be used for objects with large amounts of fields")]),e._v(" "),s("li",[e._v("Avoid too much of data transformation and too many API calls to show sample data in the sample_output block")]),e._v(" "),s("li",[e._v("For download files actions, use static data in sample output block")])])]),e._v(" "),s("li",[s("p",[e._v("Ensure the sample data is populated for each trigger or action(output)")]),e._v(" "),s("ul",[s("li",[e._v("This should show up as grey text next to each datapill")]),e._v(" "),s("li",[e._v("When triggers do not have any input fields, the datatree does not show up until a second action is added")])])])]),e._v(" "),s("h3",{attrs:{id:"error-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[e._v("#")]),e._v(" Error handling")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Signal exceptions using the raise method")])]),e._v(" "),s("li",[s("p",[e._v("Catch validation errors early, instead of waiting for API to return errors.")])]),e._v(" "),s("li",[s("p",[e._v("Implement Error handling when you need to handle specific error codes in the SDK and define your own response")])]),e._v(" "),s("li",[s("p",[e._v("Don’t suppress exceptions, better to expose more API information than hide them")])])]),e._v(" "),s("h2",{attrs:{id:"usability-and-testing-best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usability-and-testing-best-practices"}},[e._v("#")]),e._v(" Usability and testing best practices")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Check the Recipe UI for actions and triggers")])]),e._v(" "),s("li",[s("p",[e._v("Ensure the action names, triggers names, labels and help instructions clearly communicate their purpose to the end user")])]),e._v(" "),s("li",[s("p",[e._v("Remember to set up some end to end tests for your custom connector by creating recipes")]),e._v(" "),s("ul",[s("li",[e._v("This is especially useful for pushing new versions of your connector to your production workspace by first testing it in recipes using your sandbox environment")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);