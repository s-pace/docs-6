---
title: Developer program
date: 2019-05-08 17:00:00 Z
---
# Using the Workato SDK Platform
Workato's SDK platform has numerous features that enable you to build, test, develop and share your custom connector. In this article, we will be going through the basic functionalities of the platform and how you can leverage different functionalities to make your connector development process smoother.  

## Before you begin
### Navigating to the SDK platform homepage
In the main Workato recipes page, head over to the tools tab and click on connector SDK. This will take you to your registry of custom connectors - a page where you can see all custom connectors that you have built or have cloned from others. If you're signed in, [click here](https://www.workato.com/custom_adapters) to be taken to that page.

![Navigating to SDK](~@img/sdk/Navigating-to-SDK.png)
*Located in the top navigation bar in Workato. This might look different depending on your plan.*

### Creating a new custom connector
In the top right corner of the page, you'll see a button to create a new custom connector. Clicking this will take you to your new custom connector's home page. This page will be where you can begin writing custom connector code and find useful information about it like its share link and version history.

### Changing your connector title, description, and logo
When first creating your custom connector, it is given a default title, logo and empty description. You should populate these fields first to make it easier to search for your custom connector when looking through your personal registry in the future.

Custom connector title changes can be done by clicking on the pencil icon next to the custom connector and editing the name in the box that appears. Saving your changes can be done by clicking the green tick when you are done. Clear any unsaved changes by clicking the grey cross instead.

![Changing title input field](~@img/sdk/change-title-view.png)
*Click on the green tick or blur out of the field to save*

Custom connector logo changes can be done by clicking on the logo image. This should prompt your browser to open up a system upload window for you to select the logo you would want to upload. This logo not only represents your custom connector in your registry but also shows up as the logo when using your custom connector in recipes.

![Changing logo](~@img/sdk/change-logo-view.gif)
*Click on the icon logo to upload an icon from your local machine*

Changing your description can be done by navigating to the `Settings` tab in your custom connector home page. This tab will contain information including a text input field for a description of your connector. This description will let others know more about your connector when they are deciding to clone your connector.

![Changing description in settings tab](~@img/sdk/change-description-view.png)
*Head over to the settings tab to change your description*

## Using the Workato Code editor
The Workato SDK platform uses [Code Mirror](https://codemirror.net/) for editing your connector code. Whilst writing your connector code, you'll be able to see any syntax errors or code errors in real-time. Workato has a set of [white-listed ruby methods](/developing-connectors/sdk/methods.md) that we allow for use in the code editor. This means that any ruby methods not on our white list that are called inside your connector code would also result in errors being highlighted.

The code editor has a set of basic hotkeys that make your experience easier.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='10%'>Function</th>
        <th width='20%'>Hot-key</th>       
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Persistent Search</td>
      <td><code>Ctrl-F</code> / <code>Cmd-F</code></td>
    </tr>
    <tr>
      <td>Replace</td>
      <td><code>Shift-Ctrl-F / Cmd-Option-F</code></td>
    </tr>
    <tr>
      <td>Replace all</td>
      <td><code>Shift-Ctrl-R / Shift-Cmd-Option-F</code></td>
    </tr>
  </tbody>
</table>

## Introduction to version control
Version control in the Workato SDK platform can be done directly through the UI. When you first enter a custom connector homepage, you are greeted with the source code of the latest version of the custom connector inside the code editor. This represents the latest source code that you or anyone with access to your workspace has worked on and committed into a version.

Since the latest version of your custom connector may not be a version that you want your active recipes to be working off, we've also introduced the concept of releasing a specific version of your connector to be used by all recipes in your account.

In this way, you can have a stable version of your custom connector released for use in all your recipes and can freely continue improving your connector before releasing the next version which you believe is stable.

>You can always check the latest released version of a custom connector in the top right corner of a custom connector's homepage.

### Editing the latest version
The Workato SDK platform only allows you to edit the latest version of a custom connector's source code. By making changes directly in the code editor in the "Source Code" tab, you are effectively making edits to the latest version. These changes will not be saved until you explicitly press the save changes button in the top left corner of the page or start debugging through the debugger console. When these changes are saved, the new custom connector source code is saved as a new latest version.

### Releasing the latest version
The SDK platform only supports releasing of the latest version. When you release the latest version of a custom connector, this means that each recipe in your Workato account using this custom connector will begin using this version from the next job onwards. Be sure to do your relevant tests using the debugger console to make sure that your code is reliable before releasing it.

Workato actively searches for any errors in your code and prevents you from releasing a version with errors. This is to prevent any of your recipes from breaking. You'll be informed of the line of code which contains the error so you can jump to it and fix it.

>When you first create your connector, you need to release a version before you can search for it while building a recipe. The currently released version of the connector can be seen in the top right-hand corner.

### Viewing and reverting to an old version
In situations where you want to revert to an older version of your custom connector, head over to the "Versions" tab of the custom connector homepage to view a table of versions. Clicking on any version will bring you to a page that contains a snapshot of the custom connector at that version.

![View old version](~@img/sdk/viewing-old-version.gif)
*Click on a specific version to view details about it and you can choose to revert to that specific version*

When viewing a specific version, you are given the ability to restore your custom connector to this version by clicking "Restore this version" in the top right of the page. This restores the version by making a copy of that version's source code as a new latest version. You'll be able to begin editing from there or immediately release this version.

## Annotating your versions
As your connector grows in functionality (and versions), you'll be able to easily annotate different versions of your connector with notes. Use this to let you and your team know what changed in this version from the previous one such as the addition of a new action or the fixing of a bug. This allows other developers to immediately know what state the connector is in and what still needs to be done.

![Version notes plain view](~@img/sdk/base-view-version-notes.png)
*Annotating your versions with crucial information such as Milestones*

You'll also be able to filter versions to only see those that have been released to your production recipes if they contain version notes or both. This allows you to strip away the noise of smaller intermediary versions that might clutter your view. Being disciplined about annotating your versions after a round of enhancements makes it easier to collaborate with teammates to build robust and powerful connectors.

![Version notes plain view](~@img/sdk/filtered-view-version-notes.png)
*Version table when only those with version notes are chosen*

Right before you release a specific version of a connector, you'll also be shown a popup to remind you to include any important notes before release. This provides a simple and quick reminder to include what you might have changed or added in this released version. This popup is optional and may be submitted without notes if you choose to do so.

![Version notes plain view](~@img/sdk/modal-popup-version-notes.png)
*When releasing versions, let people know what you're doing. Whether it's testing changes you made to the front end of your connector or introducing new functionality*

## Using the debugger console
Below the code editor on the "Source code" tab, you'll see our debugger console which allows you to test various portions of your custom connector before releasing it. This debugger console allows you to run tests on the latest version of your custom connector code.

![Debugger console](~@img/sdk/debugger-console.png)
*Debugger console*

 **The debugger console always runs on the latest version of your connector code currently in your code editor. Any unsaved changes that are currently in the code editor will result in the custom connector creating a new latest version before running any tests are executed. There will be a notification to tell you when this is the case.**

In cases when there is an error in your latest version, the debugger console will be hidden instead. Fix the error in the line of code stated so you can start testing again.

![Debugger console with error](~@img/sdk/debugger-console-with-error.png)
*Debugger console when there is a syntax error*

### Testing a connection
When using the debugger console, the first thing you need to do is establish a successful connection. After defining the connection inside the source code, you'll be testing this connection immediately in the connection tab of the debugger console.

![Establishing connection](~@img/sdk/establishing-connection.gif)
*Successfully establishing a connection*

When the connection you make is successful, the debugger will immediately display a "Connection success" message to let you know. This connection you just established will be used as the connection for any tests that you execute in the debugger console following this.

>You can't test actions or triggers until a successful connection is made. Without a successful connection, HTTP requests sent during triggers and actions would not be able to actively authenticate itself with the API endpoint.

Find out more about configuring a connection in our SDK and what connection types we support. [Learn more](/developing-connectors/sdk/authentication.md).

### Testing actions and triggers
After establishing a successful connection, you'll be able to test any actions and triggers you have defined using the debugger console.

![Testing actions or triggers](~@img/sdk/testing-actions-triggers.png)
*Open up the dropdowns for triggers or actions to see the full list available in your latest version*

When attempting to test an action or trigger, you'll need to define the input parameters expected. This is done via a popup when pressing the "Test" button next to any action or trigger. When testing actions, we immediately populate the JSON with a skeleton to help you along. When you run the action or trigger, it is executed based on the latest version in the code editor and the output is shown in the console to the right of the debugger.

![Input popup](~@img/sdk/test-input-popup.png)
*Action popup during testing*

![Console tab](~@img/sdk/console-output-tab.png)
*Output of the execute block shown in the console*

Besides the input and outputs of the action or trigger, you'll also be able to see the network activity triggered such as any API requests sent. The console tab shows the result of any `puts` ruby methods that were executed during the test. This is especially useful for debugging and shows even if the test was unsuccessful due to a logic error in the action or trigger.

![Console tab with error](~@img/sdk/debugger-error-loc.png)
*Error messages also provide a basic stack trace that allows you to find out the line of codes involved*

In the event of unsuccessful tests, the debugger console would feature red accents and also feature an additional tab called `error`. In this tab, you would be able to see the error message raised due to the logic error as well as the exact line of code that causes our framework to raise this error. In the event that the line of code was raised in a block other than the `execute:` block, we also provide a trace of the lines of code called that lead up to the final error.

## Sharing your connector
After you've built and released a version of your connector, you'll be able to share this connector with others using the share tab. When you create a new connector, you'll first need to set up sharing via the `Share` tab. You'll need to have at least one released version to set up sharing.

![Empty state share tab](~@img/sdk/empty_state_share_tab.png)
*Empty state*

### Setting up sharing for your connector
Clicking on the `Enable sharing` button will bring up a modal which guides you through the set up. You'll need to select a version to *share* out of all your previously *released* versions.

![Share modal](~@img/sdk/share_modal.png)
*Select a version to share and provide a Description*

#### Released versions vs Shared versions
| Shared Version  | Released Version |
|----------------	|----------------	|
| Your connector's *shared* version is the version which others receive when they install your connector for the first time. When you switch your shared version, all those who have installed your connector receive an option to update to your latest shared version. 	| Your connector's *released* version is what all recipes in your workspace use. When you release a new version of your connector, all recipes using this connector will use this version immediately. 	|

You'll also need to provide a description of your connector which can be seen by anyone looking to install your connector. Provide useful information about the capabilities of your connector so your end users know what to expect.

::: tip
Your connector's description is the highlight of your install page. When you share your connector with others, make sure you have a description that showcases what your connector can do as well as other important information those using it might need.
:::

### Ways to share
Thee are two ways to share connectors in Workato after enabling sharing. You may share your connector directly via a private link or by listing your connector on our community! Listing on the community is a quick and easy way to share your connector with all Workato users. They will be able to find and install your connector for use in their own recipes.

![Two modes of sharing](~@img/sdk/share_privately_or_publicly.png)
*You may share your connector via share link or on the community*

#### Sharing your connector privately
Sharing your connector privately can be easily done via a private share link. You can find this in the `share` tab of your SDK console and pass anyone your connector's specific share link. When users open this link, they'll be brought to a landing page which contains up to date information about the latest shared version of your connector. They'll be able to view and then install the shared version of your custom connector.

![Share privately using link](~@img/sdk/share_privately.png)
*Click on the copy share link to receive a copy of your connector's personal share link*

#### Sharing your connector publicly via the community
After setting up sharing for your connector, you'll be able to share your connector publicly with the Workato community. You'll need to first use this connector in at least one recipe and have had run a successful job. This is done to ensure that your connector is working.

![Share publicly through the community](~@img/sdk/share_publicly.png)
*You may share your connector via share link or on the community*

::: tip
Sharing your connector on the community allows any Workato user to find, install and use your connector. We encourage you to share your connectors to help out other fellow citizen integrators in their own recipes. As many face the same issues with integrations that led you to build this connector, sharing your connector on the community helps others to achieve their integration goals faster!
:::

When you list on the community, you'll be asked for the app which this connector connects to. You should select the app that best describes your connector. Simply search for the name of the application you are connecting to and select from a list of apps that Workato has approved.

![Select the app that fits best](~@img/sdk/select_app.png)
*Select the app that your connector is built for*

In cases where you cannot find the app that you connect, type in the name of the application directly into the field. Give us a day to approve before your listing can go live on the community. We do this to ensure that all listing on the community are valid and so that users can easily find what they are looking for.

![Unknown apps require approval](~@img/sdk/unknown_app.png)
*Apps that we don't whitelist require a quick approval*

You'll also need to provide some basic categories of what your connector does. We provide a list of connector categories which you can pick from. Lastly, provide an accurate logo so people can identify your connector. We default to your current logo for your connector but you have an option to change it to a new logo before listing. Changing your logo here changes your connector's logo everywhere.

::: tip
You should only use a logo and provide categories which correspond to the app you are connecting to. In cases where we see otherwise, we may have to disable your listing until it is rectified.
:::

By sharing on the community, you'll also get your dedicated connector landing page which anyone can view. Users will be able to see more details about the current shared version of your connector, your connector's description as well as some details about you. Having a well thought out description and image for your account helps users build trust in your connector when they find it on the community.

## Exporting packages with custom connectors
[Recipe lifecycle management](/recipe-development-lifecycle.md) is a tool used to export and import entire folders of recipes from a sandbox environment to a production environment in Workato. Often, recipes that you want to export from one account and import into another contain custom connectors that you have built or cloned. When exporting these recipes, Workato helps to export any custom connectors in the manifests as well.

### Exporting a manifest
When exporting a manifest, the **latest released version** and the attached version note of your custom connector that is used in recipes are exported as well. [Find out more about exporting here](/recipe-development-lifecycle/export.md).

### Importing a manifest
When importing a manifest, Workato first checks to see if you have an existing copy of the custom connector. If no existing copy is found, a new one is created with the latest released version as version 1. If an existing copy is found, a new latest version is created instead. In both cases, importing a manifest will immediately release the latest version of the custom connector for you since the recipes you are importing will be using that latest version. [Find out more about importing here](/recipe-development-lifecycle/import.md).

>Be sure to explore any dependencies that your existing recipes in your production account might have when importing a manifest that overwrites a connector.

## Deleting a custom connector
A Workato account can have any number of custom connectors in its registry. However, in the case that you do need to delete a custom connector, you'll be prevented from doing so if any active running recipes are using it. You'll need to stop the recipes listed to delete this connector.

![Delete prevention popup](~@img/sdk/prevent-delete-popup.png)
*Stop or edit these recipes to delete a custom connector*

You'll be reminded again of any stopped recipes that will be affected by the deletion of this custom connector before you are able to delete it. Any custom connector(s) cloned from this will not be deleted.

![Delete popup warning](~@img/sdk/delete-popup-warning.png)
*Once you delete a custom connector, there is no recovering it*

## Frequently Asked Questions
##### 1. I've accidentally released an unstable version of my connector. How can I release the last version of my connector again?
Restoring an old stable version of your connector is easy. Simply look through your version history to find the version of your connector that was stable, using the "Released at" column to guide you. Restore that version as your latest version and release it to restore a stable version for all your recipes to run off.

##### 2. Why does an autosave occur before the release of a version or use of the debugger console?
Autosaves only occur when there are any unsaved changes to your connector code. This was done to ensure that any last-minute changes you may have made to your code without saving are picked up. It is always advised to test using the debugger console thoroughly before releasing a version.

##### 3. Which should I use to move my connector from my sandbox environment to my production environment - the connector share link or packages?
Packages through recipe lifecycle management are only available on certain plans. While both functionalities can accomplish the migration of your SDK connector, we highly recommend building and testing your custom connector and its associated recipes in your sandbox Workato environment. When you're ready, packages are the fastest way to bring your custom connector(and recipes) from your sandbox environment to production.

##### 4. What happens to all my existing connectors that existed before this enhancement?
All existing connectors are backward compatible with this enhancement. They will also contain a list of versions from before the release. You'll be able to see versions since the creation of your custom connector. Creating new versions will require you to release them to use the changes in your recipes.

##### 5. If I've cloned a custom connector and its parent has been updated(released) multiple times since I last updated, what happens when I press the update button in the notification?
Update notifications are always pegged to the latest released version of its parent connector. Choosing to update always create a new version on top of your custom connector. Be sure to verify that the newly updated connector has changes that make sense to you before releasing it. You can always make edits to the new connector code to suit your purpose.

##### 6. How do I know what changes occur across each version and who created that version when working in a team workspace?
Our version history table gives you insight into the actions and triggers present in each version. Our versions table also showcases the user who created a version and who released a certain version. More functionality will come to showcase more fine-grained details about specific changes in the code across versions and the ability to attach notes to different versions. Stay tuned!

##### 7. How can I test a specific version of my custom connector in recipes before releasing them to all my active recipes?
We are currently working on improving the coding experience further on the SDK platform to include the ability to run a variety of automated tests on different versions of your custom connector.

In the meantime, a valid workaround would be to create a dummy custom connector that hosts the same code as the latest stable version. You may introduce improvements to this dummy custom connector and test it separately with dedicated recipes. We would suggest testing this new version on copies of both existing recipes that use the custom connector and new recipes to ensure there are no regressions.

##### 8. Is there a set way that I should use version notes?
Version notes are meant to be simple ways to communicate information to others in your Workspace as well as to those whom you have shared your connector with. As such, we have made it free-form enough that you may be able to use it as you see fit. Do think about what best practices work best for you! In the future, we plan to introduce additional features that help you build a changelog around your connector. We recommended updating the description of your connector each time you reach a new milestone, such as new actions or triggers.

## Building your custom connector
Now that you're familiar with the platform, its time for you to build your custom connector! Check out our articles on the SDK conceptual model to get you going. [Learn more](/developing-connectors/sdk/SDK-conceptual-model.md).
