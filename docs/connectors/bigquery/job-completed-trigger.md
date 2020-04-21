---
title: Workato connectors - BigQuery Job completed trigger
date: 2019-12-10 06:00:00 Z
---

# BigQuery - Job completed trigger

## Job completed trigger
This trigger polls regularly for jobs completed in BigQuery. It can be configured to listen on various levels from entire projects to individual tables. This trigger only picks up completed jobs.

![Job completed trigger](~@img/bigquery/job-completed-input.png)
*Job completed trigger*

### Input fields
|Field|Description|
|--- |--- |
|Project|Configure to listen on a project.|
|Dataset|Optional. Configure to listen on a specific dataset.|
|Table|Optional. Configure to listen on a specific table.|
|All users|Defaults to "No". If "Yes", all jobs will be listened on including those not pegged to the user. The user would be the user who authorised the BigQuery connection.|
|When first started, this recipe should pick up events from|A time to retrospectively pick up jobs from.|
|Job Type|Leave blank to listen on all jobs. When configured, it will only trigger on jobs that match.|

### Output fields
|Field|Description|
|--- |--- |
|ID|The ID of the job completed.|
|Kind|The type of the BigQuery Job|
|Job Reference|Contain information about the job such as Project ID, Job ID and location.|
|State|State of job. Must be DONE.|
|Statistics|Contains information about the query time and total bytes processed by the job.|
|Configuration|Contains information about the query configuration|
|Status|Contains error results and messages if any.|
|User email|Email of the user who ran the job.|
