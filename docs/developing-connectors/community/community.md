---
title: Community connectors
date: 2019-05-08 17:00:00 Z
---
# Community connectors
The Workato community is a fast and easy way to get a head-start on your integrations. When you're unable to find a connector to an application out of Workato's library of connectors, head over to the Workato community to search for others who may have built and shared custom connectors to that application. This allows you to immediately start building recipes rather than having to build that connector yourself. Anyone - even you! - from the Workato community can contribute custom connectors they have built using [Workato's connector SDK](/developing-connectors/sdk.md). You'll be able to find a wide range of connectors contributed by anyone, including the Workato customer success team, power users and Workato's technology partners!

:::tip
Are you looking to build a connector to your own application? Contact our partnerships team today to join our technology partner program. We'll give you a dedicated developer account as well as the tools and training to get your connector up and running. [Find out more about why you should build with Workato.](/developing-connectors/community/becoming-a-partner.md)
:::

## How do I install community connectors?
Any Workato workspace has access to the community library and it is free to install connectors from the Community. There are also no limits to the number of connectors you can install for your workspace. Simply head over to the [community library](https://www.workato.com/browse/connectors) and start browsing. Search for connectors and click into each listing to find out more about the connector such as the developer's stats, the connector description as well as what it can do. Afterwards, installing the connector is as simple as clicking install.

![Changing logo](~@img/sdk/change-logo-view.gif)
*Click on the icon logo to upload an icon from your local machine*

:::warning
Only Admins and roles with developer permissions can install connectors from the community. If you do not have permissions to do so, contact your workspace admin to help you out.
:::

## How do I use community connectors?
When you install a community connector, a copy of it is cloned into your workspace. You may choose to extend the functionality of this connector or use it as-is, depending on your requirements. After testing the functionality, you may release this connector for use in recipes via the `Release latest version` button. Once you release this version, anyone in your workspace can begin to use this community connector in their recipes. It's as simple as that!

![Changing logo](~@img/sdk/change-logo-view.gif)
*Click on the icon logo to upload an icon from your local machine*

## Do I receive updates when the community connector is updated by the Author?
Connectors you install from the community always retain a relationship with its parent - the connector listed on the community. When the connector author publishes a new version of this shared connector, you receive a notification to update your connector. When updating your connector to the latest version, this does not change the version that is released to your workspace. This allows you to test and ensure that this new version of the connector is stable and suitable for your recipes.

## How do community connectors work with other features in Workato?
Using connectors from the community is highly complementary to other existing features in Workato.

 1. With Workato's [Recipe lifecycle management feature](/recipe-development-lifecycle.md), community connectors can be installed and tested with recipes in your development workspaces. When you are ready for deployment to production, these connectors are exported along with your recipes. You'll be able to ensure a stable and seamless integration experience even as you use and test connectors from the community.

2. Community connectors are also contained tied to [Workato's robust connector SDK](/developing-connectors/sdk.md). When you install connectors from the community, you'll be able to extend these connectors to suit your needs. You'll be able to add new triggers, actions or change the way you connect. This allows you to freely customise your connector to suit your integration needs. In addition to this, our connector SDK is able to work with a variety of other Workato features such as our [On-Premise Groups](/on-prem.md) to access applications behind firewalls or our [API platform](/api-management.md) to turn your connector into a service API endpoint for your team or customers.

3. Governance is a key feature of Workato to enable teams to work together securely without compromising company data. We impose restrictions on who can install connectors in the community to ensure that only Admins and those with developer roles can make the final installation. This was done to ensure that teams have proper processes in place to assess the suitability of connectors installed into their workspace. Currently, we only allow  workspace Admins and custom roles with `developer` permissions to view community connector source code and install them.

## Best practices - Installing a community connector
1. Choosing the right connector depends on your integration needs. When assessing a specific connector, you can always check the metrics on the connector landing page such as total number of installs as well as critical developer stats. This should allow you to assess the quality of the connector based on usage.

2. As an Admin or developer, always evaluate the quality of the connector code before releasing it to your workspace. Releasing this connector will allow anyone in your workspace to use this connector in recipes so remember to do thorough testing of its functionality and safety.

3. An easy way to test functionality and security of community connectors is through Workato's debugger console. Conduct tests on each action and trigger to ensure that no unexpected requests are sent and that data is being fetched from the expected application. To do so, you can use the output tab and debug tab. In these tabs, you'll be able to observe all network traffic and the output of the action or trigger you are testing.

4. When facing errors in integrations using your connector, reach out to Workato support. We will do our best to assess the points of failure as well as reach out to the connector developer for clarification.
