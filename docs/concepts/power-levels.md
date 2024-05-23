---
sidebar_position: 1
sidebar_label: Matrix power levels
---

<!--
SPDX-FileCopyrightText: 2022 The Matrix.org Foundation C.I.C.
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileAttributionText: <text>
This modified file contains work from the matrix.org website
https://github.com/matrix-org/matrix.org
</text>
-->

# Matrix power levels

Instead of a system like roles that you may be familiar with, Matrix has a
system called power levels. A power level is a number that normally ranges
between 0 to 100[^power-levels-range]. Within a room, each user has a power level
and each _permission_ also has a power level. For a user to be
able to use a _permission_, to for example remove a user, they have to have
the same (or a greater) power level than the power level of the permission.

## Standard roles

By default, Matrix homeservers and clients use different power levels to define
three roles:

| Power Level | Role          |
| ----------- | ------------- |
| 0           | User          |
| 50          | Moderator     |
| 100         | Administrator |

With the defaults, each member of a role will be able to do the following:

- **Users** can send messages, media, reactions and redact their own messages in
  a room.
- **Moderators** can also change the room name, address, topic, remove users
  from the room (temporarily or permanently), redact other's messages and send a
  notification to everyone in the room at once using `@room`.
- **Administrators** can also change the history visibility (whether people can
  see messages from before they joined or not), enable encryption in the room,
  remove entire servers from the room, and promote others to Moderator or
  Administrator.

Most members of a community are going to be regular users. Usually
Moderators are appointed to handle ad-hoc moderation issues, for example
removing or banning spam bots.

If you're taking over a community previously managed by someone with a high
level of technical expertise in Matrix, it could be possible that the roles may
not be the same. That's to say that the previous administrator could have
deviated from the defaults[^help].

## Permissions

Room permissions are broken down into three types: permissions, event
permissions, and state permissions.

### Standard permissions

Standard permissions include the ability to `ban` another room member, `redact`
another room member's messages, `invite` new user's to the room, and `kick`
members from the room. These are all fields that are _top level_ to the content
of the `m.room.power_levels` event, and all have an associated power level.
You can find the defaults [here](https://spec.matrix.org/latest/client-server-api/#mroompower_levels).

### Event permissions

Event permissions are used to encode the power level required for a user to send
a Matrix event of a given `type`. So for example, the ability for a user to send
most messages to a room would be `m.room.message`. These can be specified under
the `events` field at the top level of the `m.room.power_levels` event content.

If the `type` of an event cannot be found under the `events` field, then the
power level of the `events_default` field at the top level of the
`m.room.power_levels` event content will be used instead.

### State permissions

State permissions are used to encode the power level required for a user to send
a state event of a given `type`. Usually you do not want to give users the
ability to send state events.

If the `type` of a state event cannot be found under the `events` field, then
the power level of the `state_default` field at the top level of the
`m.room.power_levels` event content will be used instead.

## See also

- [The matrix specification for `m.room.power_levels`](https://spec.matrix.org/latest/client-server-api/#mroompower_levels)

[^power-levels-range]: Advanced users may use a different range.
[^help]:
    In that case, we recommend you to join the draupnir support room for
    help [#draupnir:matrix.org](https://matrix.to/#/#draupnir:matrix.org).

[^power-levels-spec]: The Matrix Specification for `m.room.power_levels` https://spec.matrix.org/latest/client-server-api/#mroompower_levels.
