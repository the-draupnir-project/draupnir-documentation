---
sidebar_position: 1
sidebar_label: Revisions
---

<!--
SPDX-FileCopyrightText: 2025 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Revisions

:::tip

This page is intended for advanced users of Draupnir and protection
developers, who want to understand how protections work within the
matrix-protection-suite. Revisions are probably the most important
component of the matrix-protection-suite.

:::

:::note

There may be a legitimate name for this pattern, that we have
independently recreated.

:::

## Introduction to revisions

The matrix-protection-suite uses _revisions_ to model various forms of
state in Matrix. These are immutable snapshots that accurately reflect
some state at the point the revision was created.

Revisions can be used for almost anything, but as a list of examples
revisions are usually used to model the Matrix room state, or a collection
of moderation policies, and even the rooms that a matrix user is joined to
at a point in time.

### Evaluating the utility of revisions

There are a few reasons why we use an immutable snapshot to model.

* Avoiding a situation where an asynchronous task consuming a model
  of room state races with a service responsible for updating the model.
  Essentially if a background task is running incrementally against a model,
  the model changing half way through could have unintended consequences.

* The ability to cheaply create copies of models with slight
  variations, for the purpose of dry-running protections against new
  moderation policies or room state. Or dry-running commands and other
  changes, and being able to provide a preview of the outcome.

* Being able to see exactly what changed between one update and the
  previous.  _Revision issuers_ provide both the new current and
  previous revisions as well as a delta that describes exactly how the
  revisions were changed. This allows for very efficient and precise
  responses to updates, where only the changes need to be considered
  by the consumer.  Previous versions of Draupnir and Mjolnir that
  depended on a mutable model for room state and moderation policies
  would need to reapply and reconsider the entire model contents,
  rather than just the changes.

* Persistent data structures make keeping different versions of
  revisions very space efficient by reusing the original data
  structures. In other words, the original contents of a revision do
  not ever change, and so subsequent revisions can be encoded by
  wrapping the original revision with the changes.

Are there any drawbacks from using revisions?

* Calculating deltas between revisions can be complicated and requires
  robust unit testing because so much has to depend and trust this
  code.

* The dependency graph between various _revision issuers_ can be
  complicated.  For instance the `MembershipPolicyRevisionIssuer`
  depends on both a `SetMembershipRevisionIssuer` and a
  `PolicyListRevisionIssuer` to produce its revisions.

* Without clever design in revision calculation, it is easy to create
  revisions where a lot of data is cached indefinitely.  While
  previous revisions are garbage collected as soon as they stop being
  consumed, the current revision alone for something like the room
  state of a large room can be very large.

## Revision Issuers

Revision issuers are responsible for revising revisions to be more
accurate as state changes in Matrix. So for example, there is a
`RoomMembershipRevisionIssuer` that is responsible for creating a new
revision for a specific room when users join or leave it.

Revision issuers always have a public property, `currentRevision`,
that can be used by developers to get the most up to date revision.

Revision issuers may also provide the `EventEmitter` interface so
that components can provide a listener whenever a revision is created.

### The many revision issuers

:::info

While various interfaces described here use the `Manager` suffix, they
are in reality _factories_ for revision issuers. That also enforce
each revision issuer relevant to a room is a singleton.

:::

:::tip

If you are writing a protection, you may want to view the
documentation for the various revision issuers used by the _[protected
rooms
set](./protected-rooms-set#the-revision-issuers-used-by-a-protectedroomsset)_
as all the revision issuers that you may need to access are provided there.

:::

There are lots of revision issuers that make the
matrix-protection-suite work. However, most of the time they are only
used indirectly, by the handles that protections can provide when they
implement the `Protection` interface.

* `RoomStateRevisionIssuer` produces models of the room state,
  and is currently acquired by using the `RoomStateManager`.

* `RoomMembershipRevisionIssuer` produces models for room membership,
  and is currently acquired by using the `RoomMembershipManager`.

* `PolicyRoomRevisionIssuer` produces models for the policies in a
  matrix room's state, and is acquired by using the `PolicyRoomManager`.

* `PolicyListRevisionIssuer` produces models for aggregated and virtual
  policy lists that make up policies from several policy rooms. These
  are used to implement list subscription.

* `SetMembershipRevisionIssuer` produces a consolidated model for membership
  over a set of rooms.

* `SetMembershihpPolicyRevisionIssuer` produces a revision containing
  all of the members from a `SetMembershipRevisionIssuer` that also
  have matching policies from a `PolicyListRevisionIssuer`.
