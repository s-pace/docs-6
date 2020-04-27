---
title: Managing API Clients and Access Policies
date: 2018-04-08 10:43:00 Z
---
# Managing API Clients and Access Policies

API owners can manage and monitor clients' usage of their APIs from the API Platform page. Clients are logical groups of users such as members from the same organization, and access profiles are individual API consumers.

## API Clients
From the API Platform page, select the **Clients** tab. Here, API owners can manage and create new API clients. A typical screen would look like this:

![API platform client tab](~@img/api-mgmt/api-client-homepage.png)
*API platform client tab*

### Create new API client

To create a new API client, simply select **Add New Client**. An API client creation wizard will appear to help you define details about your new API client.

![Create API Client](~@img/api-mgmt/api-new-client.png)
*Create API Client*

A client must have a name. It may have a description and an associated logo or image. It may represent an organization, department, or cluster of users who are accessing your Workato API.

## Access profile

Each client can contain multiple access profiles that are associated with groups of APIs ([API collection](/api-mgmt/api-collections.md)). Workato recommends that API owners provision unique access profiles for each API consumer. This allows the API owner to delegate access to specific API collections and impose selected [access policies](/api-mgmt/api-access-policies.md). Furthermore, it allows you to generate usage information about how your API consumers are using your API endpoints.

Note that there is no requirement for an API consumer to be a human individual. The actual API caller might be a script or automated program, rather than a person.

![API client with access profile](~@img/api-mgmt/api-client-creation.png)
*API client with access profile*

Note the **API key** field. A unique API key is generated for each client. This token is a long string of characters. It needs to be supplied to the client so that the client can connect to the API. Treat this API key as confidential information: it should be known only to the API owner and the client.

An API key can be revoked, and a new one issued, by clicking on the **Refresh** button next to the token.

A client can be **Disabled** or **Enabled**. A disabled client cannot call any APIs. Moving the slider right will switch the client's status to **Enabled**, after which API calls will be accepted.

### Create new Access Profile

From the Client tab, the API owner can create new access profiles for that client.

![New Access Profile](~@img/api-mgmt/api-new-access-profile.png)
*New Access Profile*

The access profile screen has the following fields:

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th colspan=2 width='30%'>Field Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan=2>Name<br><i>(Required)</i></td>
            <td>Provide a meaning ful access profile name.</td>
        </tr>
        <tr>
            <td colspan=2>API collections<br><i>(Required)</i></td>
            <td>One or more API collections to which the client has access.</td>
        </tr>
        <tr>
            <td colspan=2>Policy</td>
            <td>The policy that applies to this access profile.</td>
        </tr>
        <tr>
            <td colspan=2>IP Whitelist</td>
            <td>One or more IP addresses to be whitelisted. When this is set, only requests initiated from these addresses will be allowed: all other access will be denied.</td>
        </tr>
        <tr>
            <td colspan=2>Authentication method<br><i>(Required)</i></td>
            <td>This can be an Auth Token or a JSON Web Token (JWT).<br>See <a href="/api-mgmt/jwt-token.html">here</a> for more information on working with JWT Web Tokens.</td>
        </tr>
        <tr>
            <td rowspan=2><i>(Only if authentication method is JWT)</i></td>
            <td>Signing method</td>
            <td>Define your JWT signing method. This can be HMAC (shared) or RSA (public key).</td>
        </tr>
        <tr>
            <td>JWT secret/key</td>
            <td>The signing value or key.</td>
        </tr>
    </tbody>
</table>

