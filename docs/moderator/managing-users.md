---
sidebar_position: 3
sidebar_label: Managing users
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

## Context

To be able to understand how to manage users effectively, you will want
to read our conceptual documentation on Matrix room membership [here](../concepts/room-membership.md).

## The `BanPropagationProtection`

Just by banning or unbanning users as you would normally from a single room,
Draupnir will detect the actions you have taken. Once Draupnir has detected
a ban or an unban, Draupnir will send a prompt to the management room asking
whether to create a policy which will be enforced across the entire set
of protected rooms.

## The `ban` command

In order to preserve total anonymity of the banner, you can use the ban command.

In order to do so, you must first know which list you want to create the policy
within. If you are unsure about which list to use, you can check the
`!draupnir status` to see which lists you have watched.

Alternatively, you can just use `!draupnir ban @spam:example.com` and follow
the prompts.

## The `unban` command

Works exactly the same way as the ban command, although please note that
you will need to provide the option `--true` if you want the command
to unban users rom all rooms.
