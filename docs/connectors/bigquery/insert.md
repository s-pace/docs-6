---
title: Workato connectors - BigQuery Insert actions
date: 2019-12-10 06:10:00 Z
---

# BigQuery - Inserting data into BigQuery
Workato provides you with 4 different ways to send data into BigQuery:
* [Insert single row](#insert-row)
* [Insert batch of rows](#insert-rows-in-batches)
* [Insert rows in bulk](#insert-rows-in-bulk)
* [Load file into BigQuery](#load-data-into-bigquery)

## Insert row
This action inserts a single row into a table in BigQuery via streaming. There is no limit to the number of rows you can stream per day. When rows are streamed, this data can take up to 90 minutes to become available for copy and export operations. [Sample Recipe](https://www.workato.com/recipes/1142458?st=aa73c6)

::: warning NOTE
Streaming of rows is done on a best effort basis by BigQuery. In cases where rows have failed, they will show up in the step output. The action can always be run again in cases of failures.
:::

### Input fields
|Field|Description|
|--- |--- |
|Project|The project available in the connection to be billed for the query.|
|Dataset|The dataset which the action or trigger will pull the possible tables from.|
|Table|The table inside the dataset.|
|Ignore schema mismatch|If set to "No" and values that are streamed that do not match the expected data type, an error will be thrown. Set to "Yes" to ignore these rows|
|Fields|The columns of the table you have selected.|
|Insert ID|This is used to deduplicate rows when streaming. BigQuery will not stream rows again if the insert IDs are the same.|

### Output fields
|Field|Description|
|--- |--- |
|Errors|Contains all the errors that occurred during the streaming of this row. Use this to check if inserting a row had an error so you can stream it once more.|


## Insert rows in batches
This action inserts a batch of rows into a table in BigQuery via streaming. There is no limit to the number of rows you can stream per day. When rows are streamed, this data can take up to 90 minutes to become available for copy and export operations. [Sample recipe](https://www.workato.com/recipes/1142493?st=22f16d)

::: warning NOTE
Streaming of rows is done on a best effort basis by BigQuery. In cases where rows have failed, they will show up in the step output. The action can always be run again in cases of failures.
:::

### Input fields
|Field|Description|
|--- |--- |
|Project|The project available in the connection to be billed for the query.|
|Dataset|The dataset which the action or trigger will pull the possible tables from.|
|Table|The table inside the dataset.|
|Ignore schema mismatch|If set to "No" and values that are streamed that do not match the expected data type, an error will be thrown. Set to "Yes" to ignore these rows|
|Fields|The columns of the table you have selected.|
|Insert ID|This is used to deduplicate rows when streaming. BigQuery will not stream rows again if the insert IDs are the same.|

### Output fields
|Field|Description|
|--- |--- |
|Insert Errors|Contains all the errors that have occurred during the streaming of each row. Use this to check if inserting a row had an error so you can stream it once more.|
|Failed rows|Contains data about each of the failed rows. Use this to retry streaming the rows|

## Insert rows in Bulk
This action inserts a batch of rows into the selected table.

::: warning NOTE
We strongly advise users to use our insert row and insert rows in batch actions where ever possible. These actions face no limits no insert limits per day whereas inserting in Bulk can only be done 1000 times per table per day.
:::

![Insert row action](~@img/bigquery/insert-row-action.png)
*Insert row action*

### Input fields
|Field|Description|
|--- |--- |
|Project|The project available in the connection to be billed for the query.|
|Dataset|The dataset which the action or trigger will pull the possible tables from.|
|Table|The table inside the dataset.|
|Columns|After a table is chosen, Workato introspects the table to retrieve the available columns. Each column will be represented by a single input field. <br> When inserting multiple rows into BigQuery, use the `Rows source list` input field to let Workato know to insert all rows of that list datapill into BigQuery. This is done in a single `Insert` statement.|
|Location|The geographical location of where the job should be run. This field isn't required in most cases.|

### Output fields
|Field|Description|
|--- |--- |
|Project ID|The ID of the project which contains the table with the inserted rows.|
|Job ID|The ID of the Job which inserted the rows in BigQuery.|
|Location|The location of the Job which inserted the rows in BigQuery.|
|Job complete|Boolean value as to whether the job was completed.|
|Number of affected rows|Integer value of however many rows were inserted.|
|Errors|If Job complete is false, this errors object will contain the reason returned from BigQuery|

## Rate limits on BigQuery
We highly recommend using batch actions to insert multiple rows as a time. [BigQuery's rate limits](https://cloud.google.com/bigquery/quotas#standard_tables) on Standard tables indicates that operations on tables that append, overwrite or insert data in tables can only be performed 1000 times a day. This may be easily exceeded if rows are added one by one.

## Load data into BigQuery
This action loads data from a file into BigQuery. This is a powerful action that can senses changes in the number of columns in an incoming CSV or JSON file and extend the schema of the table in BigQuery to accept it. [Sample recipe](https://www.workato.com/recipes/1142619?st=28a85c)

::: warning NOTE
This is a powerful action that can immediately detect the schema of incoming CSV and JSON files so you don't need to provide the schema of the table. When files have different columns than the destination table, you can use `Schema update options` to allow BigQuery to extend the columns in the table.
:::

### Input fields
|Field|Description|
|--- |--- |
|Project|The project available in the connection to be billed for the query.|
|Dataset|The dataset which the action or trigger will pull the possible tables from.|
|Table|The table inside the dataset. Toggle to "Enter table ID" and provide a friendly name to create a new table if needed.|
|File contents|The file contents of the file to stream. This can be in the format - CSV, Datastore backup, New line delimited JSON, AVRO, PARQUET, ORC|
|File size|The exact file size of the file being loaded. This is needed for us to stream the data into BigQuery.|
|Schema|The schema of the file. Only needed if Autodetect is set to "No"|
|Autodetect|Only applies to CSV and JSON files. BigQuery will introspect the file and detect the schema of the file automatically.|
|Schema update options|Allows BigQuery to update the schema of a table if the incoming file does not match the columns in the target table.|
|Create disposition|Tells BigQuery to create the table if needed or to throw an error.|
|Write disposition|Tells BigQuery to either truncate the table before writing, append the data to the end of the table or throw and error if the table already exists.|
|Chunk size|The size of the chunks in each packet sent to BigQuery. Often not needed to be configured.|

### Output fields
|Field|Description|
|--- |--- |
|ID|ID of the Load job created|
|Kind|The kind of BigQuery job created.|
|Self link|The link to the load job in the BigQuery console|
|Job reference|Contains data about the job created.|
|State|Whether the job is completed. It should always be "Done"|
|Statistics|Statistics associated with the load job created.|
|Status|Contains information about any errors in the load job.|
|User email|Email of the user who created the job. This would be the email of the user authenticated to this Workato connection.|
