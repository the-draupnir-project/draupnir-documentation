---
sidebar_position: 1
sidebar_label: Managing protected rooms
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

## Protecting rooms

Draupnir functions by protecting a set of rooms, called the protected rooms set.
When you first use Draupnir, Draupnir won't know which rooms to protect yet.

Draupnir works by applying protections across a set of protected rooms,
some of these protections in turn work to enforce policies across the set of
protected rooms.

## Using the Draupnir `rooms` command

The easiest way to add a single room to Draupnir is to use the `rooms add` command.

If the room you are protecting is private, you will first need to invite your
Draupnir bot user to the room that you are trying to protect.

If you believe Draupnir is able to freely join the room you are trying to protect,
you can now use the `!draupnir rooms add` command.

The first step to doing this, is to go to the room you want to protect in your
client. Then once you can see the room timeline, go to the "room info" section
or "room settings". From there you should be able to "copy link" or "share"
the room. You want to then copy this link and provide it to Draupnir like so:
`!draupnir rooms add <your link>` which will look like this:
`!draupnir rooms add https://matrix.to/#/#my-room:example.com`.

### Giving Draupnir permission

Draupnir may then complain about missing permissions. You will want to go
to the protected rooms's settings and give Draupnir the "Admin" power level.

Please see our document on power levels to understand how permissions work
in Matrix.

## Using Rory&'s Matrix Utils

A third party tool can be used to quickly add entire groups of rooms to
be protected Draupnir. You will have to sign in using the same account
as Draupnir, so this is only supported by users of "bot mode" for now.
You can find the tool [here](https://mru.rory.gay/Moderation/DraupnirProtectedRoomsEditor).
