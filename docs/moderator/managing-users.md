---
sidebar_position: 3
sidebar_label: Managing users
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Managing users

## Context

To be able to understand how to manage users effectively, you will
want to read our conceptual documentation on Matrix room membership
[here](../concepts/room-essentials/#membership).

## Checking whether a user is banned

If you want to check whether a user is already banned, you can use
the following command to check whether there are existing policies
that match the user: `!draupnir rules matching @spam:example.com`.

## The `BanPropagationProtection`

Just by banning or unbanning users as you would normally from your
Matrix client in a single room, Draupnir will detect the actions you
have taken. Once Draupnir has detected a ban or an unban, Draupnir
will send a prompt to the management room asking whether to create a
policy which will be enforced across the entire set of protected
rooms.

It's important to note that if you ban a user from a room in your
client, then the user will be able to see that your account banned
them. If you need anonymity, then you can use the [ban
command](#the-ban-command).

When unbanning a user with the `BanPropagationProtection`, the target
user will be unbanned from the protected rooms set and the associated
policies will be removed from all lists where Draupnir has write
access.

## The `ban` command

In order to preserve anonymity while issuing a ban, you can use the
ban command.

In order to do so, you must first know which list you want to create
the policy within. If you are unsure about which list to use, you can
check the `!draupnir status` to see which lists you have watched.

Alternatively, you can just use `!draupnir ban @spam:example.com` and
follow the prompts. During the prompt stage, Draupnir will only show
policy rooms that you have write access for.

## The `unban` command

The `unban` command Works exactly the same way as the ban command,
although please note that you will need to provide the option `--true`
if you want the command to unban users from all rooms.

## Wildcards

It is possible to create policies that target a range of users
by using wildcards. For instance, if I wanted to target all of
the users with `spam` in their mxid from the server `example.com`,
then i would use the pattern `@*spam*:example.com`.

Be very careful when issuing with wildcards, as it can be difficult to
predict their effect.

You can find the specification for Matrix's glob syntax [here](https://spec.matrix.org/v1.8/appendices/#glob-style-matching).

## Redaction

If a user has sent a large number of messages to a Matrix room, you
can use the `!draupnir redact` command to clean up the room.  So for
example if the user `@spam:example.com` has spammed
`#my-room:example.com`, then issuing the following command will redact
the messages sent by `@spam:example.com` up to a limit: `!draupnir
redact @spam:example.com #my-room:example.com`.

## Automatic redaction

There is limited support for automatic redactions when Draupnir issues
a ban. These are triggered by the words configured under the
`automaticallyRedactForReasons` key in Draupnir's config.
