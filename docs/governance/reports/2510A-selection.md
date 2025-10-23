# 2025-10-A-Selection: Selection

Milestone: https://github.com/the-draupnir-project/planning/milestone/2

## Context

In the [current cycle](./2510A-cycle-review.md) we have been making changes to
give draupnir users more control in the project's direction. And to reaffirm
contributors work on the project.

## Options

As per [the longhouse cycle](../longhouse-cycle.md) process, the _contribution
guild_ will only select options within material constraints. Members of the
assembly may pledge material support against options as part of the
[_consultation_](../longhouse-consultation.md) process. Contributors retain the
right of self determination as contribution is a voluntary process.

You SHOULD read the context of the selection before voting. See the
[cycle review](./2510A-cycle-review.md).

### Option A: Policy room subscription preview

<!-- Cspell:ignore NLnet -->

This would mean changing the policy room watch command to preview the effects of
all protections when subscribing to the room.
[Milestone for the cycle](https://github.com/the-draupnir-project/planning/milestone/2).

Material support: NLnet goal
https://marewolf.me/posts/draupnir/24-nlnet-goals.html#goal-preview-policy-list.

### Option Z: None of the above

This is an expression of no confidence in the direction. If you have further
comments, please see [consultation](../longhouse-consultation.md).

## Discounted options

These are options that haven't been included but would be good candidates.

### Continue with room upgrade support for Hydra

This would mean incrementing towards full room upgrade management by
implementing
[MSC4321](https://github.com/matrix-org/matrix-spec-proposals/pull/4321) in its
entirety. See
[project hydra mitigation](https://github.com/the-draupnir-project/planning/issues/44).

This is still important and will likely become the primary focus of the project
once the NLnet grant expires. Synapse does not yet create rooms at V12 by
default, and we take this as a signal from the proponents of hydra that the risk
to V11 rooms is very low. Which matches our own assessment.

Material support: None.

### Increment user familiarity metric

We last worked on
[user familiarity](https://github.com/the-draupnir-project/planning/issues/43)
in July, formerly known as
[participation metric](https://github.com/the-draupnir-project/planning/issues/24).

The user familiarity metric would be used to bias protections to discriminate
more against less familiar users, and less against more familiar users. And
potentially be used to add further safe guards to Draupnir. This is a core piece
of the roadmap that we do eventually want to deliver.

However, this is a large piece of work that will take a long time for end users
to receive value from. And we need more certainty about the support of the
project before we can sustain focus on a large piece of work like this.

Material support: NLnet goal, but unlikely to be attainable.

### Increment explicit agreement & approval / disapproval

We last explored approval/disapproval in June, and we have even written
[MSC4273](https://github.com/matrix-org/matrix-spec-proposals/pull/4273) to
describe how the ratings would be persisted and shared.

This is an essential missing building block for Matrix policy rooms, providing
the ability to subjectively rate policies in order to determine whether they can
be considered for evaluation by your tools.

While we could easily provide an increment with the ability to rate policies, I
don't think that provides value without the explicit agreement policy room
subscription. And changes to policy room subscription requires more thought in
the design space at this time. Particularly, subscription needs to be framed in
terms of the policy curators themselves, the people writing the policies. And
scoping trust for direct propagation to specific policy rooms and
recommendations. And I just haven't had time to do that work.

Material support: NLnet goal.

### Policy server support

[MSC4248: Policy Servers](https://github.com/matrix-org/matrix-spec-proposals/pull/4284)
are unable to provide pre-emptive moderation capability to most Draupnir
deployments without significant work, see
https://github.com/matrix-org/matrix-spec-proposals/pull/4284/files#r2446071861.

We would have to create a proxy to provide pass-through capability, similar to
synapse-http-antispam, or implement the necessary parts of the server-server
specification ourselves. Which has already led to critical security bugs in
implementations that attempted to do this.

Still, the pre-emptive moderation capability provided by policy servers is
incredibly powerful and we need it.

Material support: None.

### Service architecture

We're exploring the design space around _Draupnir for all_, and we do have an
architecture design that would allow us to host more Draupnir than Matrix would
ever need (the homeserver would fall over first). And we do think that it will
be necessary in the future to do this to provide the capabilities of draupnir to
any Matrix community. And allow Draupnir to become the backend for a community
management platform.

Material support: None.

### We need your support to implement these options

Many of these discounted options would already have been implemented if the
project had the support and participation of the Matrix foundation, and
representatives of organisations using Draupnir much earlier. Support is
increasing, and the [_longhouse_](../governance.md) system is supposed to
facilitate this participation.

## Feedback and discussion

_Voting is still in progress or has not yet occurred_.

## Outcome

_Voting is still in progress or has not yet occurred_.
