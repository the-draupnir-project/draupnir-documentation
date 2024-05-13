---
sidebar_position: 2
sidebar_label: Managing policy lists
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

If you are struggling to understand what a policy list or a policy room
is, and why they are useful you should see our [policy lists](../concepts/policy-lists.md)
documentation.

## Using Draupnir's `watch` command to subscribe to policy rooms

The easiest way to watch a room is to use the `!draupnir watch` command.
This will tell Draupnir to watch the list and apply its policies to your rooms.
We recommend subscribe to to the list curated by the community moderation effort,
which exclusively focusses on spam. You can do so with the following command
`!draupnir watch #community-moderation-effort-bl:neko.dev`.

## Using the `status` command to view watched lists

By calling `!draupnir status`, you will be able to see a list of policy rooms
and their associated "shortcodes".

Usually, lists that you can write to will be marked as protected.

## Using Draupnir's `list create` command to create a policy room

If for some reason you don't have access to a writable list, you can create
one using `!draupnir list create`. So for example, if I wanted to create a
a policy room for paw prints community, then I would use the command like so
`!draupnir list create paws paws-bl`. This will create a policy room with the
shortcode `paws` and an alias `#paws-bl:example.com`, which can be used
to share the list with other communities.
