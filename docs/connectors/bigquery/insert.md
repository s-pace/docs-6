---
title: Workato connectors - BigQuery Insert actions
date: 2019-12-10 06:10:00 Z
---

# BigQuery - Insert rows action

## Insert row
This action inserts a single row into a table in BigQuery via streaming. There is no limit to the number of rows you can stream per day. When rows are streamed, this data can take up to 90 minutes to become available for copy and export operations. [Sample Recipe](https://www.workato.com/recipes/1142458?st=aa73c6)

:::note
Streaming of rows is done on a best effort basis by BigQuery. In cases where rows have failed, they will show up in the step output. The action can always be run again in cases of failures.
:::

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project</td>
      <td>The project available in the connection to be billed for the query.</td>
    </tr>
    <tr>
      <td>Dataset</td>
      <td>The dataset which the action or trigger will pull the possible tables from.</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>The table inside the dataset.</td>
    </tr>
    <tr>
      <td>Ignore schema mismatch</td>
      <td>If set to "No" and values that are streamed that do not match the expected data type, an error will be thrown. Set to "Yes" to ignore these rows</td>
    </tr>
    <tr>
      <td>Fields</td>
      <td>The columns of the table you have selected.</td>
    </tr>
    <tr>
      <td>Insert ID</td>
      <td>This is used to deduplicate rows when streaming. BigQuery will not stream rows again if the insert IDs are the same.</td>
    </tr>
  </tbody>
</table>

### Output fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Errors</td>
      <td>Contains all the errors that occurred during the streaming of this row. Use this to check if inserting a row had an error so you can stream it once more.</td>
    </tr>
   </tbody>
</table>

## Insert rows in batches
This action inserts a batch of rows into a table in BigQuery via streaming. There is no limit to the number of rows you can stream per day. When rows are streamed, this data can take up to 90 minutes to become available for copy and export operations. [Sample recipe](https://www.workato.com/recipes/1142493?st=22f16d)

:::note
Streaming of rows is done on a best effort basis by BigQuery. In cases where rows have failed, they will show up in the step output. The action can always be run again in cases of failures.
:::

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project</td>
      <td>The project available in the connection to be billed for the query.</td>
    </tr>
    <tr>
      <td>Dataset</td>
      <td>The dataset which the action or trigger will pull the possible tables from.</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>The table inside the dataset.</td>
    </tr>
    <tr>
      <td>Ignore schema mismatch</td>
      <td>If set to "No" and values that are streamed that do not match the expected data type, an error will be thrown. Set to "Yes" to ignore these rows</td>
    </tr>
    <tr>
      <td>Fields</td>
      <td>The columns of the table you have selected.</td>
    </tr>
    <tr>
      <td>Insert ID</td>
      <td>This is used to deduplicate rows when streaming. BigQuery will not stream rows again if the insert IDs are the same.</td>
    </tr>
  </tbody>
</table>

### Output fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Insert Errors</td>
      <td>Contains all the errors that have occurred during the streaming of each row. Use this to check if inserting a row had an error so you can stream it once more.</td>
    </tr>
    <tr>
      <td>Failed rows</td>
      <td>Contains data about each of the failed rows. Use this to retry streaming the rows</td>
    </tr>
   </tbody>
</table>

## Insert rows in Bulk
This action inserts a batch of rows into the selected table.

:::note
We strongly advise users to use our insert row and insert rows in batch actions where ever possible. These actions face no limits no insert limits per day whereas inserting in Bulk can only be done 1000 times per table per day.
:::

![Insert row action](~@img/bigquery/insert-row-action.png)
*Insert row action*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project</td>
      <td>The project available in the connection to be billed for the query.</td>
    </tr>
    <tr>
      <td>Dataset</td>
      <td>The dataset which the action or trigger will pull the possible tables from.</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>The table inside the dataset.</td>
    </tr>
    <tr>
      <td>Columns</td>
      <td>After a table is chosen, Workato introspects the table to retrieve the available columns. Each column will be represented by a single input field. <br> <br>
      To insert a single row into the BigQuery table, simply ignore the `Rows source list` input field. In cases where you are mapping datapills from an array, this would only insert a row with data from the first index of the array. <br> <br>
      When inserting multiple rows into BigQuery, use the `Rows source list` input field to let Workato know to insert all rows of that list datapill into BigQuery. This is done in a single `Insert` statement.</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>The geographical location of where the job should be run. This field isn't required in most cases.</td>
    </tr>
  </tbody>
</table>

### Output fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project ID</td>
      <td>The ID of the project which contains the table with the inserted rows.</td>
    </tr>
    <tr>
      <td>Job ID</td>
      <td>The ID of the Job which inserted the rows in BigQuery.</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>The location of the Job which inserted the rows in BigQuery.</td>
    </tr>
    <tr>
      <td>Job complete</td>
      <td>Boolean value as to whether the job was completed.</td>
    </tr>
    <tr>
      <td>Number of affected rows</td>
      <td>Integer value of however many rows were inserted.</td>
    </tr>
    <tr>
      <td>Errors</td>
      <td>If Job complete is false, this errors object will contain the reason returned from BigQuery</td>
    </tr>
   </tbody>
</table>

## Rate limits on BigQuery
We highly recommend using batch actions to insert multiple rows as a time. [BigQuery's rate limits](https://cloud.google.com/bigquery/quotas#standard_tables) on Standard tables indicates that operations on tables that append, overwrite or insert data in tables can only be performed 1000 times a day. This may be easily exceeded if rows are added one by one.

## Load data into BigQuery
This action loads data from a file into BigQuery. This is a powerful action that can senses changes in the number of columns in an incoming CSV or JSON file and extend the schema of the table in BigQuery to accept it. [Sample recipe](https://www.workato.com/recipes/1142619?st=28a85c)

:::note
To enable this schema detection and let BigQuery know to extend the table schema, you will need to configure a few properties such as `Autodetect`, `Schema update options` and `Write disposition`.
:::

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project</td>
      <td>The project available in the connection to be billed for the query.</td>
    </tr>
    <tr>
      <td>Dataset</td>
      <td>The dataset which the action or trigger will pull the possible tables from.</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>The table inside the dataset. Toggle to "Enter table ID" and provide a friendly name to create a new table if needed.</td>
    </tr>
    <tr>
      <td>File contents</td>
      <td>The file contents of the file to stream. This can be in the format - CSV, Datastore backup, New line delimited JSON, AVRO, PARQUET, ORC</td>
    </tr>
    <tr>
      <td>File size</td>
      <td>The exact file size of the file being loaded. This is needed for us to stream the data into BigQuery.</td>
    </tr>
    <tr>
      <td>Schema</td>
      <td>The schema of the file. Only needed if Autodetect is set to "No"</td>
    </tr>
    <tr>
      <td>Autodetect</td>
      <td>Only applies to CSV and JSON files. BigQuery will introspect the file and detect the schema of the file automatically.</td>
    </tr>
    <tr>
      <td>Schema update options</td>
      <td>Allows BigQuery to update the schema of a table if the incoming file does not match the columns in the target table.</td>
    </tr>
    <tr>
      <td>Create disposition</td>
      <td>Tells BigQuery to create the table if needed or to throw an error.</td>
    </tr>
    <tr>
      <td>Write disposition</td>
      <td>Tells BigQuery to either truncate the table before writing, append the data to the end of the table or throw and error if the table already exists.</td>
    </tr>
    <tr>
      <td>Chunk size</td>
      <td>The size of the chunks in each packet sent to BigQuery. Often not needed to be configured.</td>
    </tr>
  </tbody>
</table>

### Output fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID</td>
      <td>ID of the Load job created</td>
    </tr>
    <tr>
      <td>Kind</td>
      <td>The kind of BigQuery job created.</td>
    </tr>
    <tr>
      <td>Self link</td>
      <td>The link to the load job in the BigQuery console</td>
    </tr>
    <tr>
      <td>Job reference</td>
      <td>Contains data about the job created.</td>
    </tr>
    <tr>
      <td>State</td>
      <td>Whether the job is completed. It should always be "Done"</td>
    </tr>
    <tr>
      <td>Statistics</td>
      <td>Statistics associated with the load job created.</td>
    </tr>
    <tr>
      <td>Status</td>
      <td>Contains information about any errors in the load job.</td>
    </tr>
    <tr>
      <td>User email</td>
      <td>Email of the user who created the job. This would be the email of the user authenticated to this Workato connection.</td>
    </tr>
   </tbody>
</table>
