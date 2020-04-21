---
title: Workato connectors - BigQuery Select actions
date: 2019-12-10 06:10:00 Z
---

# BigQuery - Select actions

## Select rows
This action lets you select rows based on certain criteria defined by a `WHERE` condition. Rows from the selected table that match the `WHERE` condition will be returned as the output of this action. This action is a long action, enabling you to pull data from larger tables. If no data is returned in the first few seconds of the job execution in BigQuery, Workato will wait a periodic amount of time before checking if the data is ready to be retrieved from BigQuery.

![Select rows action](~@img/bigquery/select-rows-action.png)
*Select rows action*

### Input fields
|Field|Description|
|--- |--- |
|Project|The project available in the connection to be billed for the query.|
|Dataset|The dataset which the action or trigger will pull the possible tables from.|
|Table|The table inside the dataset.|
|Output columns|After selecting your table, you'll also be able to select which columns you want returned. Selecting only what you need for your recipe increases job throughput and overall efficiency of the recipe.|
|WHERE condition|Refer to the WHERE condition guide for more information.|
|Order by|Rows returned from this action can be ordered based on the Order by input field. This field is used to change the default ordering of rows from your BigQuery database. <br> You can also define the direction of order for each column you wish to order by. The following order by statement will order rows by `priority` in ascending order followed by `created_date` in descending order (latest first). <br> `priority asc, created_date desc`|
|Limit|This input field determines the maximum number of rows to return. The default limit is 50000 and this can be left blank for the entire result set to return. To retrieve all rows, you will need to use the get query result action to retrieve more rows|
|Offset|This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input 100 to this field. The default is 0.|
|Location|The geographical location of where the job should be run. This field isn't required in most cases.|


### Output fields
|Field|Description|
|--- |--- |
|Rows|An array of the rows. Each datapill in the row object corresponds to a single column.|
|Kind|The kind of job that was executed. This should be `queryResponse`|
|Job reference|Detils about the job itself. This object returns the Project ID, Job ID and location of the query. In cases where you need more results, you can use the the [get query result action to retrieve more rows](/connectors/bigquery/get-query-result-action.md)|
|Total rows|Total rows returned by this query. Useful when helping with Pagination using the [get query result action](/connectors/bigquery/get-query-result-action.md)|
|Etag|Schema of the table or result.|
|Jobs complete|Should always be "Done".|
|Total Bytes processed by the query|The total number of bytes processed by this action. This counts towards your BigQuery bill|


## Select rows using custom SQL
This action lets you select rows based on a custom SQL query. Rows that are returned from the query will be returned as the output of this action. This action is a long action, enabling you to pull data from larger tables or perform complex queries including `JOINS`, `GROUP BY` or any other SQL functions available in BigQuery. If no data is returned in the first few seconds of the job execution in BigQuery, Workato will wait a periodic amount of time before checking if the data is ready to be retrieved from BigQuery.

![Select rows using custom SQL action](~@img/bigquery/custom-sql-action.png)
*Select rows using custom SQL action*

### Input fields
|Field|Description|
|--- |--- |
|Project|The project available in the connection to be billed for the query.|
|SQL|Provide the SQL query to be executed to select rows. The query here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes (`''`) if they are used to compared against string datatypes. When using datapills, you will need to use the output columns schema designer to let us know what columns will be returned.<br> Do not use the `LIMIT` clause in your SQL but use the limit input field instead.|
|Automatic schema introspection|Workato automatically tries to introspect the output of your query. In cases where the query takes too long or if datapills are used, toggle this to false and define the output fields of your query manually.|
|Output fields|This input field appears when "Automatic schema introspection" is false. Use this to manually define the output fields of your query. The names given to the output should be identical to the column names expected. Find out how to define your output fields quickly and easily.  Find out how to define your output fields quickly and easily.|
|Limit|This input field determines the maximum number of rows to return. The default limit is 50000 and this can be left blank for the entire result set to return. To retrieve all rows, you will need to use the get query result action to retrieve more rows|
|Offset|This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input 100 to this field. The default is 0.|
|Location|The geographical location of where the job should be run. This field isn't required in most cases.|
|Legacy SQL|The default is assumed to be standard SQL. Select true to use legacy SQL instead.|


### Output fields
|Field|Description|
|--- |--- |
|Rows|An array of the rows. Each datapill in the row object corresponds to a single column.|
|Kind|The kind of job that was executed. This should be `queryResponse`|
|Job reference|Detils about the job itself. This object returns the Project ID, Job ID and location of the query. In cases where you need more results, you can use the get query result action to retrieve more rows|
|Total rows|Total rows returned by this query. Useful when helping with Pagination using the [get query result action](/connectors/bigquery/get-query-result-action.md)|
|Etag|Schema of the table or result.|
|Jobs complete|Should always be "Done".|
|Total Bytes processed by the query|The total number of bytes processed by this action. This counts towards your BigQuery bill|


### Working with automatic schema introspection
When working with large queries or datapills, we are unable to automatically introspect the schema of the expected rows for you. As such, the action also gives you the ability to define the output schema of the result set.

Workato has set some basic limitations before schema introspection is disabled
* Query's estimated bytes processed is larger than 1 Gigabyte
* Query contains datapills

Relevant error messages are shown when this happens and you should toggle the `Automatic schema introspection` input field to `No`.
