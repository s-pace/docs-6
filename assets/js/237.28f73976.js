(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{2264:function(t,e,i){"use strict";i.r(e);var s=i(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cached-picklist-lookups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cached-picklist-lookups"}},[t._v("#")]),t._v(" Cached picklist lookups")]),t._v(" "),s("p",[t._v('In Microsoft Dynamics CRM API, picklist fields are returned with only the internal value of the picklist selection. For example, for the picklist "Contact industry" describing the industry that a contact works in, the internal value of "100000000" is returned representing the picklist option selected, instead of the contextual value of "Retail", "Energy", or "Education".')]),t._v(" "),s("p",[t._v('As these contextual picklist labels are important for integrations, where we\'re typically moving app-agnostic values (i.e. "100000000" does not mean anything to another app without the exact same picklist), we have implemented cached picklist lookup support into the connector.')]),t._v(" "),s("p",[t._v("These lookups act like an external lookup table stored in Workato, and are efficient since you're not making API lookup calls against Dynamics CRM when using this feature. The first time you interact with a specific record in Workato (e.g. Opportunity record or Customer record), we save your picklists and picklist option sets for that record. Subsequently, whenever you're working with the same record, you obtain these picklist values from Workato's cache, instead of a lookup call to Dynamics CRM.")]),t._v(" "),s("h2",{attrs:{id:"single-select-picklists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-select-picklists"}},[t._v("#")]),t._v(" Single-select picklists")]),t._v(" "),s("p",[t._v("Single-select picklists show up as datapills in an object. The datapills you might be using are still available for use, so your recipes will not break as a result of this new feature. However, they have been marked '(deprecated)' — we highly recommend that you switch to using the new datapills.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:i(534),alt:"Additional single-select picklist datapills in the datatree, and deprecated picklist datapill",width:"850",height:"894"}}),t._v(" "),s("em",[t._v("Additional single-select picklist datapills in the datatree, and deprecated picklist datapill")])],1),t._v(" "),s("h2",{attrs:{id:"multi-select-picklists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-select-picklists"}},[t._v("#")]),t._v(" Multi-select picklists")]),t._v(" "),s("p",[t._v("Multi-select picklists show up as datapills in a list. The datapills you might be using are still available for use, so your recipes will not break as a result of this new feature. However, they have been marked '(deprecated)' — we highly recommend that you switch to using the new datapills.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:i(535),alt:"Additional multi-select picklist datapills in the datatree, and deprecated picklist datapill",width:"412",height:"432"}}),t._v(" "),s("em",[t._v("Additional multi-select picklist datapills in the datatree, and deprecated picklist datapill")])],1),t._v(" "),s("h2",{attrs:{id:"missing-options-in-the-picklist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#missing-options-in-the-picklist"}},[t._v("#")]),t._v(" Missing options in the picklist")]),t._v(" "),s("p",[t._v("As Workato caches your picklists and their available options the first time you interact with the record type, (e.g. Opportunity records or Customer records), picklists saved in Workato might not always be in sync with picklists stored in your Dynamics CRM account.")]),t._v(" "),s("p",[t._v("A schema refresh will not work to update the picklists cached in Workato. Instead, disconnect and reconnect your Dynamics CRM account.")])])}),[],!1,null,null,null);e.default=a.exports},534:function(t,e,i){t.exports=i.p+"assets/img/single-select-picklist-values.30bc5e1f.png"},535:function(t,e,i){t.exports=i.p+"assets/img/multiselect-picklist-values.2b9da392.png"}}]);