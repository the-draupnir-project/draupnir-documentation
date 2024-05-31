---
sidebar_position: 2
sidebar_label: Creating the management room
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Creating the management room

## Introduction

The management room is where you will interact with Draupnir. This is
the room where Draupnir will respond to commands, allowing you to
coordinate with Draupnir and other moderators without disrupting your
public Matrix rooms. You can find further information about the
mangement room [here](../concepts/management-room).

You should create this room after you have created a user for your
Draupnir bot.

## Creating the room

:::warning

We strongly recommend against encrypting the management room, and we
cannot provide support if you do. Please see the section on encrypting
the management room [here](#encrypting-the-management-room).

:::

The management room should be created using your client from any
Matrix user account. The room should not be public as any user that
joins this room will be able to control Draupnir.

Once you have created the room, you should invite the bot user that
you created for Draupnir to the room.

You will also need to acquire the room ID of this room, in Element Web
you can find this by going to the room, going to: Settings -> Advanced
-> "Internal Room ID".

In your configuration, set `managementRoom` to this Room ID, and now
Draupnir will only respond to commands originating from that room. If
you want to upgrade your room in the future, you will have to update
the configuration with it. Alternatively, you can create a room alias.


## Encrypting the management room

We do not recommend setting up an encrypted management room, and we
cannot provide support for setting one up. This is because Pantalaimon
has consistently confused beginners that are setting it up with
Draupnir, and we do not use it ourselves. Experienced system admins
are welcome to attempt to set up Pantalaimon, but must be aware that
any issues that they experience getting Draupnir to start are
extremely likely to be from the Pantalaimon configuration and not
Draupnir itself.
