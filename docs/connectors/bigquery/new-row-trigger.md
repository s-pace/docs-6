---
title: Workato connectors - BigQuery new row triggers
date: 2019-12-10 06:00:00 Z
---

# BigQuery - New row triggers

## New row trigger
This trigger picks up rows that are inserted in the selected table. Each row is processed as a separate job. It checks for new rows once every poll interval.

![New row trigger](~@img/bigquery/new-row-trigger.png)
*New row trigger*

### Input fields
|Field|Description|
|--- |--- |
|Project|The project available in the connection to be billed for the query.|
|Dataset|The dataset which the action or trigger will pull the possible tables from.|
|Table|The table inside the dataset.|
|Unique key|Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe. <br> As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`) and must be of type integer.|
|Output columns|After selecting your table, you'll also be able to select which columns you want returned. Selecting only what you need for your recipe increases job throughput and overall efficiency of the recipe.|
|WHERE condition|Refer to the WHERE condition guide for more information.|
|Location|The geographical location of where the job should be run. This field isn't required in most cases.|


### Output fields
|Field|Description|
|--- |--- |
|Columns|Workato introspects the schema of the table and returns the value of each column as a datapill|

## New rows batch trigger
This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.

![New batch of rows trigger](~@img/bigquery/new-batch-of-rows-trigger.png)
*New batch of rows trigger*

### Input fields
|Field|Description|
|--- |--- |
|Project|The project available in the connection to be billed for the query.|
|Dataset|The dataset which the action or trigger will pull the possible tables from.|
|Table|The table inside the dataset.|
|Unique key|Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe. <br> As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`) and must be of type integer.|
|Output columns|After selecting your table, you'll also be able to select which columns you want returned. Selecting only what you need for your recipe increases job throughput and overall efficiency of the recipe.|
|Batch size|The batch size of the rows to be returned in each job. This can be anywhere from 1 to 50,000 with 50,000 being the default. Larger batch sizes will increase data throughput. If more new rows are found than the batch size, multiple jobs will be created until all new rows are processed.|
|WHERE condition|Refer to the WHERE condition guide for more information.|
|Location|The geographical location of where the job should be run. This field isn't required in most cases.|

### Output fields
|Field|Description|
|--- |--- |
|Rows|An array of the rows. Each datapill in the row corresponds to a single column.|
|Total rows|Total rows returned from this poll.|
