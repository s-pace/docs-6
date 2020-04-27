(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{188:function(t,s,a){t.exports=a.p+"assets/img/job-details-overview.30ce5a6b.png"},2739:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[t._v("#")]),t._v(" Jobs")]),t._v(" "),e("h2",{attrs:{id:"list-jobs-from-a-recipe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-jobs-from-a-recipe"}},[t._v("#")]),t._v(" List Jobs from a Recipe")]),t._v(" "),e("p",[t._v("Returns aggregated job information as well as detailed job information for a specified recipe in Workato. Run-time data will not be available from this endpoint.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /api/recipes/:recipe_id/jobs\n")])])]),e("h3",{attrs:{id:"url-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters"}},[t._v("#")]),t._v(" URL Parameters")]),t._v(" "),e("table",{staticClass:"api-input"},[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("recipe_id")]),t._v(" "),e("td",[e("strong",[t._v("integer")]),e("br"),e("em",[t._v("required")])]),t._v(" "),e("td",[t._v("Recipe id.")])]),t._v(" "),e("tr",[e("td",[t._v("offset_run_id")]),t._v(" "),e("td",[e("strong",[t._v("integer")]),e("br"),e("em",[t._v("(deprecated)")])]),t._v(" "),e("td",[t._v("Offset run id.")])]),t._v(" "),e("tr",[e("td",[t._v("offset_job_id")]),t._v(" "),e("td",[e("strong",[t._v("integer")]),e("br"),e("em",[t._v("optional")])]),t._v(" "),e("td",[t._v("Offset job id. Jobs occuring after the offset job will be returned.")])]),t._v(" "),e("tr",[e("td",[t._v("prev")]),t._v(" "),e("td",[e("strong",[t._v("boolean")]),e("br"),e("em",[t._v("optional")])]),t._v(" "),e("td",[t._v("Previous jobs if "),e("code",[t._v("true")]),t._v(", next otherwise.")])]),t._v(" "),e("tr",[e("td",[t._v("failed")]),t._v(" "),e("td",[e("strong",[t._v("boolean")]),e("br"),e("em",[t._v("(deprecated)")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("true")]),t._v(", returns failed jobs only.")])]),t._v(" "),e("tr",[e("td",[t._v("status")]),t._v(" "),e("td",[e("strong",[t._v("string")]),e("br"),e("em",[t._v("optional")])]),t._v(" "),e("td",[t._v("Filter by status - succeeded, failed, pending.")])]),t._v(" "),e("tr",[e("td",[t._v("rerun_jobs")]),t._v(" "),e("td",[e("strong",[t._v("boolean")]),e("br"),e("em",[t._v("optional")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("true")]),t._v(", returns rerun jobs only.")])])])]),t._v(" "),e("h4",{attrs:{id:"sample-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-request"}},[t._v("#")]),t._v(" Sample request")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X GET https://www.workato.com/api/recipes/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("recipe_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/jobs?status"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("failed "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v("\n")])])]),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"job_succeeded_count"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"job_failed_count"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"job_count"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1004")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flow_run_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1004")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"completed_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-01-02T01:02:03.000Z"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"started_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-01-02T01:02:03.000Z"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"is_poll_error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"is_error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1003")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flow_run_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1004")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"completed_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-01-02T01:02:03.000Z"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"started_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-01-02T01:02:03.000Z"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"is_poll_error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_parts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"adapter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"marketo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Missing required field"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'Filter values' must be present\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"603260f5-a309-45b3-a20e-111d90a28917"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-01-22T01:17:18.021-08:00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"input"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<redacted>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inner_message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"is_error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"example-of-run-time-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-of-run-time-data"}},[t._v("#")]),t._v(" Example of Run-time Data")]),t._v(" "),e("p",[t._v("Run-time data is the data that flows through the recipe at the time of job execution. This includes the input and output data from individual steps.")]),t._v(" "),e("p",[t._v("This data is available through the Workato platform on the "),e("router-link",{attrs:{to:"/recipes/jobs.html#job-details"}},[t._v("job details page")]),t._v(".")],1),t._v(" "),e("p",[e("DocImage",{attrs:{src:a(188),alt:"Job details page",width:"2736",height:"1394"}}),t._v(" "),e("em",[t._v("Job details page")])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);