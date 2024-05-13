---
sidebar_position: 2
sidebar_label: Policy lists
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

## Policies

Policies are what Matrix uses to describe a recommendation for an action
against an entity. An entity can be any first class Matrix concept,
but the most common entity is a Matrix user. A recommendation is just a flag
that describes what the policy is for. For example, banning a user from a room
with Draupnir usually results in the creation of a policy of the type
`m.policy.room.user` with the recommendation `m.ban`. You can read about
in the Matrix specification [here](https://spec.matrix.org/latest/client-server-api/#moderation-policy-lists)

These policies are stored in Matrix rooms as _state events_. When this happens,
we can refer to the room as a _policy room_.

## Policy room vs policy list

A policy room is a Matrix room that contains policies.
A policy room is also a policy list, however Draupnir may use the term policy
list to also refer to what is effectively virtual policy list. A virtual policy
list would be a collection of policies where the list is not backed up by
a single Matrix room as the source of the policies. Internally, Draupnir
actually collects all the policies together and places them into the same
virtual policy list.
