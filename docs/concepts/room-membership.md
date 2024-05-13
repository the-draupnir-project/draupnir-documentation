---
sidebar_position: 4
sidebar_label: Room membership
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

When you join a room in Matrix, you create a membership state event that tells
all of the servers that you are present so that they can authorise your messages.

This membership state event is called `m.room.member`, you can read
the specification for the event [here](https://spec.matrix.org/latest/client-server-api/#room-membership)

The membership event has a protected content field called `membership`,
which describes the membership state for a Matrix user in a room.

Whenever you ban or remove a user from a room, your homeserver has to create
a membership event for that user that supsersedes their current membership event.
Explicitly marking the target user's membership as `ban` or `leave`.
