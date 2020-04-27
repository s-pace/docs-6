(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{2237:function(t,e,a){"use strict";a.r(e);var r=a(0),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"bigquery-inserting-data-into-bigquery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bigquery-inserting-data-into-bigquery"}},[t._v("#")]),t._v(" BigQuery - Inserting data into BigQuery")]),t._v(" "),r("p",[t._v("Workato provides you with 4 different ways to send data into BigQuery:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#insert-row"}},[t._v("Insert single row")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#insert-rows-in-batches"}},[t._v("Insert batch of rows")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#insert-rows-in-bulk"}},[t._v("Insert rows in bulk")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#load-data-into-bigquery"}},[t._v("Load file into BigQuery")])])]),t._v(" "),r("h2",{attrs:{id:"insert-row"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#insert-row"}},[t._v("#")]),t._v(" Insert row")]),t._v(" "),r("p",[t._v("This action inserts a single row into a table in BigQuery via streaming. There is no limit to the number of rows you can stream per day. When rows are streamed, this data can take up to 90 minutes to become available for copy and export operations. "),r("a",{attrs:{href:"https://www.workato.com/recipes/1142458?st=aa73c6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample Recipe"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),r("p",[t._v("Streaming of rows is done on a best effort basis by BigQuery. In cases where rows have failed, they will show up in the step output. The action can always be run again in cases of failures.")])]),t._v(" "),r("h3",{attrs:{id:"input-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Project")]),t._v(" "),r("td",[t._v("The project available in the connection to be billed for the query.")])]),t._v(" "),r("tr",[r("td",[t._v("Dataset")]),t._v(" "),r("td",[t._v("The dataset which the action or trigger will pull the possible tables from.")])]),t._v(" "),r("tr",[r("td",[t._v("Table")]),t._v(" "),r("td",[t._v("The table inside the dataset.")])]),t._v(" "),r("tr",[r("td",[t._v("Ignore schema mismatch")]),t._v(" "),r("td",[t._v('If set to "No" and values that are streamed that do not match the expected data type, an error will be thrown. Set to "Yes" to ignore these rows')])]),t._v(" "),r("tr",[r("td",[t._v("Fields")]),t._v(" "),r("td",[t._v("The columns of the table you have selected.")])]),t._v(" "),r("tr",[r("td",[t._v("Insert ID")]),t._v(" "),r("td",[t._v("This is used to deduplicate rows when streaming. BigQuery will not stream rows again if the insert IDs are the same.")])])])]),t._v(" "),r("h3",{attrs:{id:"output-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Errors")]),t._v(" "),r("td",[t._v("Contains all the errors that occurred during the streaming of this row. Use this to check if inserting a row had an error so you can stream it once more.")])])])]),t._v(" "),r("h2",{attrs:{id:"insert-rows-in-batches"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#insert-rows-in-batches"}},[t._v("#")]),t._v(" Insert rows in batches")]),t._v(" "),r("p",[t._v("This action inserts a batch of rows into a table in BigQuery via streaming. There is no limit to the number of rows you can stream per day. When rows are streamed, this data can take up to 90 minutes to become available for copy and export operations. "),r("a",{attrs:{href:"https://www.workato.com/recipes/1142493?st=22f16d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample recipe"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),r("p",[t._v("Streaming of rows is done on a best effort basis by BigQuery. In cases where rows have failed, they will show up in the step output. The action can always be run again in cases of failures.")])]),t._v(" "),r("h3",{attrs:{id:"input-fields-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-2"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Project")]),t._v(" "),r("td",[t._v("The project available in the connection to be billed for the query.")])]),t._v(" "),r("tr",[r("td",[t._v("Dataset")]),t._v(" "),r("td",[t._v("The dataset which the action or trigger will pull the possible tables from.")])]),t._v(" "),r("tr",[r("td",[t._v("Table")]),t._v(" "),r("td",[t._v("The table inside the dataset.")])]),t._v(" "),r("tr",[r("td",[t._v("Ignore schema mismatch")]),t._v(" "),r("td",[t._v('If set to "No" and values that are streamed that do not match the expected data type, an error will be thrown. Set to "Yes" to ignore these rows')])]),t._v(" "),r("tr",[r("td",[t._v("Fields")]),t._v(" "),r("td",[t._v("The columns of the table you have selected.")])]),t._v(" "),r("tr",[r("td",[t._v("Insert ID")]),t._v(" "),r("td",[t._v("This is used to deduplicate rows when streaming. BigQuery will not stream rows again if the insert IDs are the same.")])])])]),t._v(" "),r("h3",{attrs:{id:"output-fields-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Insert Errors")]),t._v(" "),r("td",[t._v("Contains all the errors that have occurred during the streaming of each row. Use this to check if inserting a row had an error so you can stream it once more.")])]),t._v(" "),r("tr",[r("td",[t._v("Failed rows")]),t._v(" "),r("td",[t._v("Contains data about each of the failed rows. Use this to retry streaming the rows")])])])]),t._v(" "),r("h2",{attrs:{id:"insert-rows-in-bulk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#insert-rows-in-bulk"}},[t._v("#")]),t._v(" Insert rows in Bulk")]),t._v(" "),r("p",[t._v("This action inserts a batch of rows into the selected table.")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),r("p",[t._v("We strongly advise users to use our insert row and insert rows in batch actions where ever possible. These actions face no limits no insert limits per day whereas inserting in Bulk can only be done 1000 times per table per day.")])]),t._v(" "),r("p",[r("DocImage",{attrs:{src:a(487),alt:"Insert row action",width:"2462",height:"1318"}}),t._v(" "),r("em",[t._v("Insert row action")])],1),t._v(" "),r("h3",{attrs:{id:"input-fields-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-3"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Project")]),t._v(" "),r("td",[t._v("The project available in the connection to be billed for the query.")])]),t._v(" "),r("tr",[r("td",[t._v("Dataset")]),t._v(" "),r("td",[t._v("The dataset which the action or trigger will pull the possible tables from.")])]),t._v(" "),r("tr",[r("td",[t._v("Table")]),t._v(" "),r("td",[t._v("The table inside the dataset.")])]),t._v(" "),r("tr",[r("td",[t._v("Columns")]),t._v(" "),r("td",[t._v("After a table is chosen, Workato introspects the table to retrieve the available columns. Each column will be represented by a single input field. "),r("br"),t._v(" When inserting multiple rows into BigQuery, use the "),r("code",[t._v("Rows source list")]),t._v(" input field to let Workato know to insert all rows of that list datapill into BigQuery. This is done in a single "),r("code",[t._v("Insert")]),t._v(" statement.")])]),t._v(" "),r("tr",[r("td",[t._v("Location")]),t._v(" "),r("td",[t._v("The geographical location of where the job should be run. This field isn't required in most cases.")])])])]),t._v(" "),r("h3",{attrs:{id:"output-fields-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-3"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Project ID")]),t._v(" "),r("td",[t._v("The ID of the project which contains the table with the inserted rows.")])]),t._v(" "),r("tr",[r("td",[t._v("Job ID")]),t._v(" "),r("td",[t._v("The ID of the Job which inserted the rows in BigQuery.")])]),t._v(" "),r("tr",[r("td",[t._v("Location")]),t._v(" "),r("td",[t._v("The location of the Job which inserted the rows in BigQuery.")])]),t._v(" "),r("tr",[r("td",[t._v("Job complete")]),t._v(" "),r("td",[t._v("Boolean value as to whether the job was completed.")])]),t._v(" "),r("tr",[r("td",[t._v("Number of affected rows")]),t._v(" "),r("td",[t._v("Integer value of however many rows were inserted.")])]),t._v(" "),r("tr",[r("td",[t._v("Errors")]),t._v(" "),r("td",[t._v("If Job complete is false, this errors object will contain the reason returned from BigQuery")])])])]),t._v(" "),r("h2",{attrs:{id:"rate-limits-on-bigquery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rate-limits-on-bigquery"}},[t._v("#")]),t._v(" Rate limits on BigQuery")]),t._v(" "),r("p",[t._v("We highly recommend using batch actions to insert multiple rows as a time. "),r("a",{attrs:{href:"https://cloud.google.com/bigquery/quotas#standard_tables",target:"_blank",rel:"noopener noreferrer"}},[t._v("BigQuery's rate limits"),r("OutboundLink")],1),t._v(" on Standard tables indicates that operations on tables that append, overwrite or insert data in tables can only be performed 1000 times a day. This may be easily exceeded if rows are added one by one.")]),t._v(" "),r("h2",{attrs:{id:"load-data-into-bigquery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#load-data-into-bigquery"}},[t._v("#")]),t._v(" Load data into BigQuery")]),t._v(" "),r("p",[t._v("This action loads data from a file into BigQuery. This is a powerful action that can senses changes in the number of columns in an incoming CSV or JSON file and extend the schema of the table in BigQuery to accept it. "),r("a",{attrs:{href:"https://www.workato.com/recipes/1142619?st=28a85c",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample recipe"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),r("p",[t._v("This is a powerful action that can immediately detect the schema of incoming CSV and JSON files so you don't need to provide the schema of the table. When files have different columns than the destination table, you can use "),r("code",[t._v("Schema update options")]),t._v(" to allow BigQuery to extend the columns in the table.")])]),t._v(" "),r("h3",{attrs:{id:"input-fields-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-4"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Project")]),t._v(" "),r("td",[t._v("The project available in the connection to be billed for the query.")])]),t._v(" "),r("tr",[r("td",[t._v("Dataset")]),t._v(" "),r("td",[t._v("The dataset which the action or trigger will pull the possible tables from.")])]),t._v(" "),r("tr",[r("td",[t._v("Table")]),t._v(" "),r("td",[t._v('The table inside the dataset. Toggle to "Enter table ID" and provide a friendly name to create a new table if needed.')])]),t._v(" "),r("tr",[r("td",[t._v("File contents")]),t._v(" "),r("td",[t._v("The file contents of the file to stream. This can be in the format - CSV, Datastore backup, New line delimited JSON, AVRO, PARQUET, ORC")])]),t._v(" "),r("tr",[r("td",[t._v("File size")]),t._v(" "),r("td",[t._v("The exact file size of the file being loaded. This is needed for us to stream the data into BigQuery.")])]),t._v(" "),r("tr",[r("td",[t._v("Schema")]),t._v(" "),r("td",[t._v('The schema of the file. Only needed if Autodetect is set to "No"')])]),t._v(" "),r("tr",[r("td",[t._v("Autodetect")]),t._v(" "),r("td",[t._v("Only applies to CSV and JSON files. BigQuery will introspect the file and detect the schema of the file automatically.")])]),t._v(" "),r("tr",[r("td",[t._v("Schema update options")]),t._v(" "),r("td",[t._v("Allows BigQuery to update the schema of a table if the incoming file does not match the columns in the target table.")])]),t._v(" "),r("tr",[r("td",[t._v("Create disposition")]),t._v(" "),r("td",[t._v("Tells BigQuery to create the table if needed or to throw an error.")])]),t._v(" "),r("tr",[r("td",[t._v("Write disposition")]),t._v(" "),r("td",[t._v("Tells BigQuery to either truncate the table before writing, append the data to the end of the table or throw and error if the table already exists.")])]),t._v(" "),r("tr",[r("td",[t._v("Chunk size")]),t._v(" "),r("td",[t._v("The size of the chunks in each packet sent to BigQuery. Often not needed to be configured.")])])])]),t._v(" "),r("h3",{attrs:{id:"output-fields-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-4"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ID")]),t._v(" "),r("td",[t._v("ID of the Load job created")])]),t._v(" "),r("tr",[r("td",[t._v("Kind")]),t._v(" "),r("td",[t._v("The kind of BigQuery job created.")])]),t._v(" "),r("tr",[r("td",[t._v("Self link")]),t._v(" "),r("td",[t._v("The link to the load job in the BigQuery console")])]),t._v(" "),r("tr",[r("td",[t._v("Job reference")]),t._v(" "),r("td",[t._v("Contains data about the job created.")])]),t._v(" "),r("tr",[r("td",[t._v("State")]),t._v(" "),r("td",[t._v('Whether the job is completed. It should always be "Done"')])]),t._v(" "),r("tr",[r("td",[t._v("Statistics")]),t._v(" "),r("td",[t._v("Statistics associated with the load job created.")])]),t._v(" "),r("tr",[r("td",[t._v("Status")]),t._v(" "),r("td",[t._v("Contains information about any errors in the load job.")])]),t._v(" "),r("tr",[r("td",[t._v("User email")]),t._v(" "),r("td",[t._v("Email of the user who created the job. This would be the email of the user authenticated to this Workato connection.")])])])])])}),[],!1,null,null,null);e.default=i.exports},487:function(t,e,a){t.exports=a.p+"assets/img/insert-row-action.1c02fd94.png"}}]);