shortcut---
title: Workbot New shortcuts trigger
date: 2020-04-14 10:40:00 Z
---

# New shortcuts trigger (real-time)
The Shortcuts trigger is a powerful way to kickstart your workflows. Turn any Slack message into tasks, tickets, leads and more — without leaving your Slack workspace.

![Shortcuts trigger](~@img/workbot/workbot/shortcuts-trigger.png)
*New shortcuts trigger*

![Shortcuts example](~@img/workbot/workbot/shortcuts-example.jpg)
*Shortcut example*

Similar to the <b>[Post command](/workbot/workbot-commands.md)</b> trigger, command input fields can be defined if you need user input for follow-up actions. If command input fields are specified, shortcuts will launch a modal to get user input.

If you'd rather customize your own modal view, do not define any define command input fields but instead open your own modal using the [Open/update or push modal view](/workbot/modals.md#open-update-or-push-modal-view-action) action.

## How shortcuts work
Shortcuts can be triggered from the shortcuts menu or the search bar.

Click on the shortcuts menu or search for your shortcut in the search bar at the top of your Slack UI.

![Accessing shortcuts](~@img/workbot/workbot/accessing-shortcuts.png)
*Accessing shortcuts from Slack*

## Requirements: Custom bot
To use shortcuts, you first need to create a custom bot. If you haven't done so already, head over to our [custom bot documentation](/workbot/workbot-custom-bots.md) to learn how to do it.

The message action must be added and configured under a custom bot in Slack before they can be used in Workato.

![Creating shortcuts in Slack](~@img/workbot/workbot/shortcuts-slack.png)
*Shortcuts created under Interactive Components*

If you already have a custom bot, proceed on to learn how to use shortcuts with your custom bot.

## Configuring the shortcut
In this section, we will go through how to configure a shortcut.

![Shortcuts trigger](~@img/workbot/workbot/shortcuts-trigger.png)
*Shortcuts trigger fields*

The table below shows the input schema for the shortcuts trigger.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Field</th>
            <th>Explanation</th>
            <th>What goes in here</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Shortcuts name</td>
          <td>Name of the message action</td>
          <td>
            The name of the shortcut should be descriptive of its function, e.g. Create Jira ticket. <br><br>The shortcut name also doubles as a <b>Callback ID</b>, which is used in configuring the corresponding shortcut in Slack.<br><br>Shortcut names should be unique across all recipes.
          </td>
        </tr>
        <tr>
          <td>Command input fields</td>
          <td>
            Fields you need from the user
          </td>
          <td>
          Often, you need your bot to obtain more information from users before it can carry out subsequent recipe actions. <br><br>If you've defined any command input fields, the custom bot will automatically launch a modal for users to key in each input field. There is no limit to the number of command input fields, but there is a 100 block limit for the modal that launches to collect the values.
          </td>
        </tr>
        <tr>
          <td>Modal title</td>
          <td>
            Title of the modal that is launched
          </td>
          <td>
            Define the title of the modal that launches when collecting user input for command input fields. Maximum of 24 characters.
          </td>
        </tr>
    </tbody>
</table>

### Callback ID
When shortcuts are triggered from Slack, the **Callback ID** is used to match the trigger event with the correct recipe.

![Callback ID](~@img/workbot/workbot/shortcuts-callback-id.png)
*Callback ID generated from Shortcuts name*

**Callback ID** is generated from the shortcut's name — so make sure that the name you choose is unique.

**Callback ID** is required to configure your shortcuts in Slack. More on this in a [later section](#creating-shortcuts-on-your-custom-bot-in-slack).

### Modal for command input fields
If you've defined any command input fields, a modal is automatically launched to collect them from the user. There is no limit to the number of command input fields - however there is a limit of 100 blocks in a modal view.

![Adding command input fields](~@img/workbot/workbot/shortcuts-modal.png)
*Shortcut modal in Slack, with 5 different fields*

Each time you add a command input value, you can control how it shows up in the modal.

![Adding command input fields](~@img/workbot/workbot/add-command-input-value-shortcuts.png)
*Adding a command input value*

#### Collecting text input using a single-line input field
Under **Command input fields**, click on **+Add Field**.

Under **Data type**, choose **String**.

Under **Modal input control type**, choose **Single-line** to display a single-line text input field.  Text fields are capped at 3,000 characters.

![Text field config](~@img/workbot/workbot/single-line-config.png)
*Single-line text input in command input fields*

![Text field](~@img/workbot/workbot/single-line-modal.png)
*Example single-line text input field in a Slack modal*

To save, click on **Add field**.
#### Collecting text input using a multi-line input field
Under **Command input fields**, click on **+Add Field**.

Under **Data type**, choose **String**.

Under **Modal input control type**, choose **Multi-line** to display a multi-line text input field. Text area fields are capped at 3,000 characters.

![Text area field config](~@img/workbot/workbot/multi-line-config.png)
*Multi-line text input in command input fields*

![Text area field](~@img/workbot/workbot/multi-line-modal.png)
*Example multi-line text input field in a Slack modal*

To save, click on **Add field**.
#### Display a select menu in modal
Under **Command input fields**, click on **+Add Field**.

Under **Data type**, choose **String**.

Under **Modal input control type**, choose **Select** to display a select menu with menu options. This enables a new setting called **Select menu options type**.

![Select control type](~@img/workbot/workbot/select-control-type.png)

You can choose from 5 different types of select menus. Each differ by the menu options displayed:
  - **Channels** displays the list of all public channels in your Slack workspace.

  ![Channel menu options](~@img/workbot/workbot-message-actions/channels-select.gif)
  *Example of a channels menu in a Slack modal*

  When a channel is selected, the channel ID is returned, e.g. **CA83MDSK0**.

  - **Users** displays the list of all users (including bots) in your Slack workspace.

    ![Users menu options](~@img/workbot/workbot-message-actions/users-select.gif)
    *Example of a users menu in a Slack modal*

    When a user is selected, the user ID is returned, e.g. **UBTDVPFMM**.

  - **Conversations** displays the list of public and private channels the bot is participating in.

    ![Conversations menu options](~@img/workbot/workbot/conversations-select.gif)

    When a conversation is selected, the channel ID is returned, e.g. **D011Q8PB36H**

  - **Custom** allows you to define a list of comma-separated menu options in the **Options** field. The menu option themselves cannot contain commas.

    ![Custom menu config](~@img/workbot/workbot-message-actions/custom-select.png)
    *Custom menu config*

    ![Custom menu modal](~@img/workbot/workbot-message-actions/custom-select.gif)
    *Example of a custom menu in a Slack modal*

  - **Dynamic** allows you to dynamically define menu options (from a secondary recipe) which the user can select from at runtime. Use this if your list of menu options is very large and you want the user to filter through them.

    ![Dynamic menu](~@img/workbot/workbot-trigger/dynamic-menu.png)
    *A Workbot command recipe with dynamic menu options*

    ![Menu options at runtime](~@img/workbot/workbot/menu-options-runtime.gif)
    *Menu options generated at runtime*

    The dynamic menu options are generated by a secondary 'Dynamic menu recipe'. As its name suggests, this recipe handles 3 important things:

    1. Monitors for dynamic menu events from dynamic menus in modals,
    2. Generates menu options, and
    3. Returns the menu options to the primary command recipe.

To save, click on **Add field**.
#### Display a datepicker in modal
Under **Command input fields**, click on **+Add Field**.

Under **Data type**, choose **Date**.

Optionally specify the placeholder text which will be shown on the datepicker.

Optionally specify an initial date when this input field is first shown.

To save, click on **Add field**.

After configuring your shortcuts trigger, you'll need to create the shortcut in Slack.

## Creating shortcuts on your custom bot in Slack
Head to https://api.slack.com/apps and go to your custom bot.

![Custom bot](~@img/workbot/workbot-slash-commands/custom-bot.png)
*Click on your custom bot*

Under **Interactive components**, click on **Create New Shortcut**.

![Create new shortcut](~@img/workbot/workbot/create-new-shortcut.png)
*Click on **Create New Shortcut***

In the next page, choose **Global**.

![Choose Global](~@img/workbot/workbot/choose-global.png)
*Click on **Global***

In the shortcuts configuration, choose a descriptive name for your shortcut, a short description of its function, followed by the **Callback ID**.

![Shortcuts config](~@img/workbot/workbot/shortcuts-config.png)
*Shortcuts config*

As mentioned above, the **Callback ID** used here must be identical to the **Callback ID** in the shortcuts trigger.

![Callback ID](~@img/workbot/workbot/callback-id-shortcuts.png)
*Callback ID generated from shortcut name*

Click **Create** to finish setting up the shortcut on Slack. You can test it out by using the shortcut from the shortcut menu in the Slack UI.

## Troubleshooting
### Unable to see shortcut in shortcut menu
Reinstall your bot if you are unable to see your shortcut in the shortcut menu.

### Shortcut does not do anything after clicking
Make sure your shortcut recipe has been started, and that the callback ID is unique across your Workato workspace.
