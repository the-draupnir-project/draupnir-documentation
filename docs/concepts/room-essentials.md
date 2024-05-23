---
sidebar_position: 0
sidebar_label: Room essentials
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Room essentials

In Matrix, the place where you talk and see other users is called a
Matrix room. This is Matrix's equivalent to *channels* that you might
be familiar with on other platforms.

## Events

Everything that happens in Matrix is expressed with *events*.
This includes everything from the messages that you send to other
users, notifications that are sent to show that you are typing,
and profile changes such as changing your displayname within
a Matrix room.

These events accumulate in the room *timeline*, which is the what you
can see when you look at a Matrix room within your client.

You can read what the Matrix specification has to say for events [here](https://spec.matrix.org/latest/client-server-api/#events)

## State events

Matrix also has a concept of *state events*. These are special events
that servers, bots, bridges and clients all use to store and retrieve
data associated with the room easily. For example, the avatar
and displayname of a given user in a Matrix room is stored within
a state event to make it convenient for clients to access.

## Authorization events

Matrix also has a concept of *authorization events*. Thes are special
*state events* that are used to control what other events can be
sent to the room. For example, the `m.room.power_levels` event is
an authorization event that can be used to control which users can
send messages to a room.

Your own membership event, of the type `m.room.member`, is also an
authorization event, that authorizes you to participate within a
Matrix room.

## Membership

When you join a Matrix room, your homeserver creates a membership
state event in the room that you are joining. This membership event
tells all of the servers present within the room that you are also
present so that they can authorise your messages. They will also
use the event to remember to send your homeserver new messages.

This membership state event is called `m.room.member`, you can read
the specification for the event
[here](https://spec.matrix.org/latest/client-server-api/#room-membership)

The membership event has a protected content field called `membership`,
which describes the membership state for a Matrix user in a room.

Whenever you ban or remove a user from a room, your homeserver has to
create a membership event for that user that supsersedes their current
membership event.  Explicitly marking the target user's membership as
`ban` or `leave`.

## Lazy bans

Unfortunately, due to the nature of Matrix and state events, Draupnir
has to issue bans lazily. What this means is that Draupnir will not
ban users from Matrix rooms until they have joined. Normally the ban
will be issued by Draupnir instantaneously.

It is technically possible for room moderators to issue bans
preemptively, however if there is another user within the room from
the same server as the target of the ban, then the target will be
force-joined to the Matrix room. This normally is not a problem, but
for private rooms this behaviour can actually alert the target of the
presence of the room and give them access to the title and profile
picture.

The other reason Draupnir does not prematurely apply bans is that this
would lead Draupnir to send thousands of redundant state events to
every room that is being protected. This is because most of the users
that are banned will never actually attempt to join a room. These
events can degrade the performance of all servers that are
participating.
