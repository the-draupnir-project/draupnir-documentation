---
sidebar_position: 2
sidebar_label: Protected Rooms Set
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Protected Rooms Set

:::tip

This page is intended for advanced users of Draupnir and protection
developers, who want to understand how protections work within the
matrix-protection-suite.

:::

The _protected rooms set_ is one of the most importanat components of
the matrix-protection-suite. A _protected rooms set_ is a set of rooms
that a group of protections will interact with. So with each protected
rooms set, there is a collection of [protections](./protection) that
are enabled to protect the rooms. Draupnir itself is closely
associated with exactly one protected rooms set.

The protected rooms set is therefore responsible for listening for
events in all of the rooms marked as protected and inform protections
about them. The protected rooms set also keeps protections informed
about changes to membership and moderation policies from watched
policy rooms.

## The revision issuers used by a `ProtectedRoomsSet`

The protected rooms set sources its information by managing subscriptions
to multiple [revision issuers](./revisions).

### Sourcing moderation policies vis the _watched policy rooms_

The first of these can be found under the `watchedPolicyRooms`
property and the `WatchedPolicyRooms` object contained within
it. There is a `PolicyListRevisionIssuer` here that aggregates and
filters all policies from the various policy list subscription
profiles into one `PolicyListRevision` that can directly be consumed
by protections within the `ProtectedRoomsSet`.

When this _policy list revision issuer_ updates, _protections_ within
the _protected rooms set_ will each be called with the handle
`handlePolicyChange` described on the `Protection` interface. This
handle will provide an updated `PolicyListRevision` revision and any
changes that were made since the _previous revision_.

### Sourcing room state via the _set room state_

A _protected rooms set_ keeps track of changes to room state by
keeping a `SetRoomState` object under the `setRoomState`
property. This provides protections with immediate access to all room
state within the protected rooms set. By using the `SetRoomState`
interface, protections are able to retrieve any current
`RoomStateRevision` for any room within the _protected rooms set_.

When the room state of any room within the _protected rooms set_ is
changed, _protections_ within the _protected rooms set_ will be called
with the handle `handleStateChange` described on the `Protection`
interface. This will include the new _revision_ and also specify the
nature of any change to the room state.

### Sourcing room membership via the _set room membership_

Details of individual room membership can be found by accessing the
`setRoomMembership` property to obtain an object with the
`SetRoomMembership` interface.  From here, protections can get
immediate access to to the membership information for each room.
This is provided in the form of a `RoomMembershipRevision`.

When a user's membershihp within a _protected room_ changes, the
`handleMembershipChange` handle will be called for each _protection_
as described in the `Protection` interface. _Protections_ will
be given a new `RoomMembershipRevision` for the protected room,
and the exact details of any membership changes.

### Sourcing set membership via _set membership_

In addition to tracking user membership to each of the individual
_protected rooms_, the _protected rooms set_ also tracks each user's
membership to the community overall. This membership is reduced into
two simple possibilities, that the user is _present_ in the _protected
rooms set_ or they are _absent_.

This membership information can be accessed from the `setMembership`
property, implementing the `SetMembership` interface. From there, it
will be possible to obtain the current `SetMembershipRevision` for the
entire _protected rooms set_.

When a user's membership to the _protected rooms set_ changes overall,
because they have left all _protected rooms_ or have joined the
community for the first time, `handleSetMembershipChange` will be
called on protections. This will provide the current
`SetMembershipRevision`, as well as the exact detail of any changes to
set membership.

### Sourcing policy matches against members via _set membership policies_

In Mjolnir and previous versions of Draupnir, policy matching would
happen at the protection level. That's to say protections had to have
their own way of hand matching policies against room
members. Naturally, this led to inconsistencies, and also a great
waste of CPU time. As policy matching is the most CPU intensive task
Draupnir has to perform. This was compounded by the fact the current
Draupnir conception of _[revisions](./revisions)_ did not exist, and
so changes to room membership or policies were not calculated, and
each change needed the entire set of both policies and membership to
be rescanned and matched.

In order to provide a unified and shared means of accessing policies
relevant to room members, the matrix-protection-suite combines a
`SetMembershipRevision` and a `PolicyListRevision` to produce a
`SetMembershipPolicyRevision`, containing only the members that have
matching policies, alongside each of these policies.

Protections then only have to access precalculated matches when
enforcing consequences in relation to moderation policies.

This can be accessed from the `setPoliciesMatchingMembership` property
on the _protected rooms set_.

When the matches change, an enabled protection's
`handleSetMembershipPolicyMatchesChange` method will be called with a
new revision, and the precise changes that were made.
