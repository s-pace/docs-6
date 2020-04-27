(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{2244:function(t,e,v){"use strict";v.r(e);var _=v(0),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"box-action-search-files-folders"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box-action-search-files-folders"}},[t._v("#")]),t._v(" Box Action - Search files/folders")]),t._v(" "),v("p",[t._v("This action searches for files or folders in Box.")]),t._v(" "),v("p",[t._v("Searches may not return newly created files or folders in Box due to time delay for indexing files and folders. Learn more about "),v("a",{attrs:{href:"https://community.box.com/t5/Managing-Files-and-Folders/Search-for-Files-Folders-and-Content/ta-p/19269#search_hdsiw",target:"_blank",rel:"noopener noreferrer"}},[t._v("Box indexing time here"),v("OutboundLink")],1),t._v(". Run the searches again after certain amount of time often solves the problem.")]),t._v(" "),v("h2",{attrs:{id:"input-fields"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Field name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Search text")]),t._v(" "),v("td",[t._v("Search against file name, description, contents. File name should include extension, e.g. File.csv")])]),t._v(" "),v("tr",[v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Whether you want to search files or folders.")])]),t._v(" "),v("tr",[v("td",[t._v("Starting folder")]),t._v(" "),v("td",[t._v("Narrow down your search to this folder.")])]),t._v(" "),v("tr",[v("td",[t._v("Exact match")]),t._v(" "),v("td",[t._v("Whether to search using exact match or partial match.")])]),t._v(" "),v("tr",[v("td",[t._v("File extensions")]),t._v(" "),v("td",[t._v("Comma separated list of file extensions to include.")])])])]),t._v(" "),v("h2",{attrs:{id:"output-fields"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Field name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Files")]),t._v(" "),v("td",[t._v("A "),v("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("list data pill")]),t._v(" representing the list of files/folders found from the search. You can loop through all files/folders in the list with a "),v("router-link",{attrs:{to:"/recipes/steps.html#repeat-step"}},[t._v("Repeat step")]),t._v(".")],1)]),t._v(" "),v("tr",[v("td",[t._v("ID")]),t._v(" "),v("td",[t._v("ID of the file.")])]),t._v(" "),v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("File name.")])]),t._v(" "),v("tr",[v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Type of this object, which in this case is "),v("code",[t._v("file")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("Description")]),t._v(" "),v("td",[t._v("Description of file.")])]),t._v(" "),v("tr",[v("td",[t._v("Size")]),t._v(" "),v("td",[t._v("Size of file.")])]),t._v(" "),v("tr",[v("td",[t._v("Shared link")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("- URL")]),t._v(" "),v("td",[t._v("Shared link URL for viewing file.")])]),t._v(" "),v("tr",[v("td",[t._v("- Download URL")]),t._v(" "),v("td",[t._v("Shared link URL for downloading file.")])]),t._v(" "),v("tr",[v("td",[t._v("Created at")]),t._v(" "),v("td",[t._v("Date/time file is created.")])]),t._v(" "),v("tr",[v("td",[t._v("Modified at")]),t._v(" "),v("td",[t._v("Date/time file is modified.")])]),t._v(" "),v("tr",[v("td",[t._v("Trashed at")]),t._v(" "),v("td",[t._v("Date/time file is trashed.")])]),t._v(" "),v("tr",[v("td",[t._v("Purged at")]),t._v(" "),v("td",[t._v("Date/time file is purged.")])]),t._v(" "),v("tr",[v("td",[t._v("Content created at")]),t._v(" "),v("td",[t._v("Date/time file content is created.")])]),t._v(" "),v("tr",[v("td",[t._v("Content modified at")]),t._v(" "),v("td",[t._v("Date/time file content is modified.")])]),t._v(" "),v("tr",[v("td",[t._v("Sequence ID")]),t._v(" "),v("td",[t._v("Position of this object in the folder hierarchy.")])]),t._v(" "),v("tr",[v("td",[t._v("Etag")]),t._v(" "),v("td",[t._v("Entity tag of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("Sha 1")]),t._v(" "),v("td",[t._v("SHA-1 hash value of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("Parent")]),t._v(" "),v("td",[t._v("Includes details about the file's parent folder.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of parent folder.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of parent folder.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Object type, which in this case is "),v("code",[t._v("folder")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("- Sequence ID")]),t._v(" "),v("td",[t._v("Position of this object in the folder hierarchy.")])]),t._v(" "),v("tr",[v("td",[t._v("- Etag")]),t._v(" "),v("td",[t._v("Entity tag of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("Path")]),t._v(" "),v("td",[t._v("File path.")])]),t._v(" "),v("tr",[v("td",[t._v("Path collection")]),t._v(" "),v("td",[t._v("Includes details of all paths this file belongs to.")])]),t._v(" "),v("tr",[v("td",[t._v("- Total count")]),t._v(" "),v("td",[t._v("Number of file paths.")])]),t._v(" "),v("tr",[v("td",[t._v("- Entries")]),t._v(" "),v("td",[t._v("File path entries.")])]),t._v(" "),v("tr",[v("td",[t._v("-- ID")]),t._v(" "),v("td",[t._v("ID of file path.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Name")]),t._v(" "),v("td",[t._v("File path.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Type")]),t._v(" "),v("td",[t._v("Type of file path.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Sequence ID")]),t._v(" "),v("td",[t._v("Position of this object in the folder hierarchy.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Etag")]),t._v(" "),v("td",[t._v("Entity tag of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("-- List size")]),t._v(" "),v("td",[t._v("Number of items in this "),v("code",[t._v("Entries")]),t._v(" list.")])]),t._v(" "),v("tr",[v("td",[t._v("Created by")]),t._v(" "),v("td",[t._v("Includes details about user who created this file.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Login")]),t._v(" "),v("td",[t._v("Login email of user.")])]),t._v(" "),v("tr",[v("td",[t._v("Modified by")]),t._v(" "),v("td",[t._v("Includes details about user who modified this file.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Login")]),t._v(" "),v("td",[t._v("Login email of user.")])]),t._v(" "),v("tr",[v("td",[t._v("Owned by")]),t._v(" "),v("td",[t._v("Includes details about user who owned this file.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Login")]),t._v(" "),v("td",[t._v("Login email of user.")])]),t._v(" "),v("tr",[v("td",[t._v("Item status")]),t._v(" "),v("td",[t._v("Status of this file, e.g. active.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);