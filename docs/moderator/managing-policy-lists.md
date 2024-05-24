---
sidebar_position: 2
sidebar_label: Managing policy lists
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Managing policy lists

If you are struggling to understand what a policy list or a policy
room is, and why they are useful you should see our [policy
lists](../concepts/policy-lists) documentation.

## Reviewing which lists Draupnir is watching

After watching or unwatching policy rooms, you may wish to confirm
what policy lists Draupnir is watching. This can be done by issuing
the `!draupnir status` command.

Rooms that are marked as `protected` also belong to Draupnir's
protected rooms set, and you likely have write access to these lists.
You can find the documentation for managing protected rooms
[here](./managing-protected-rooms.md).

## Inviting Draupnir to policy rooms

Just by inviting Draupnir to a policy room, Draupnir will ask you
within the management room whether you wish for Draupnir to watch for
and to subscribe to policies.

The answer to the question can be given by clickin on the reactions in
your Matrix client. By selecting 'Ok', Draupnir will watch the list,
and if all goes well Draupnir will leave behind a green tick.

## Using Draupnir's `watch` command to subscribe to policy rooms

The easiest way to watch a room is to use the `!draupnir watch`
command.  This will tell Draupnir to watch the list and apply its
policies to your rooms.  We recommend subscribe to to the list curated
by the community moderation effort, which exclusively focusses on
spam. You can do so with the following command `!draupnir watch
#community-moderation-effort-bl:neko.dev`.

## Using the `status` command to view watched lists

By calling `!draupnir status`, you will be able to see a list of
policy rooms and their associated "shortcodes".

Usually, lists that you can write to will be marked as protected.

## Using Draupnir's `list create` command to create a policy room

If for some reason you don't have access to a writable list, you can
create one using `!draupnir list create`. So for example, if I wanted
to create a a policy room for paw prints community, then I would use
the command like so `!draupnir list create my-bans my-bans-bl`. This
will create a policy room with the shortcode `paws` and an alias
`#may-bans-bl:example.com`, which can be used to share the list with
other communities.
