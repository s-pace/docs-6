---
title: Auth Token
date: 2020-04-18 12:26:00 Z
---

# Auth token

An Auth token is the simplest way to authenticate the API request with Workato.

First, retrieve the API key from the access profile. Use the copy icon to copy the API key to your clipboard.

![Auth Token for an Access profile](~@img/api-mgmt/auth-token.png)
*Auth Token for an Access profile*

Next, configure a header with your API key value. For example:

```bash
-H 'API-TOKEN: <your-token>'
```

Now, when an API request is made, Workato will read this header value and recognize that the request is from a verified access profile.
