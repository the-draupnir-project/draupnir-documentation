---
unlisted: true
---

# 2026-04-A-Selection: Selection

## Context

The [previous cycle](./2510B-cycle-review.md) remained open for quite a long
time, and expanded in scope to carry out maintenance on the project.

### Community management focus

<!-- Cspell:ignore Matricians -->

During that time, Discord
[made a mistake](https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing)
with its age-verification policy, which contributed to a renewed interest in
Matrix from Discord communities.

This highlighted a number of known weaknesses with the current community
management onboarding UX for both Draupnir and Matrix, that we already have
[un-executed plans](https://marewolf.me/posts/draupnir/24-nlnet-goals.html#goal-integrated-appservice)
to address.

The UX of Spaces management on Matrix as a whole remains poor. And while ban
synchronisation is one of the basic features of Draupnir and other moderation
tools, this is taken for granted by Matricians. This is not a Matrix-native
feature and there is significant work required to set Draupnir and other tools
which makes them inaccessible and discouraging to use. We believe the
[aforementioned goals](https://marewolf.me/posts/draupnir/24-nlnet-goals.html#goal-integrated-appservice)
are perfectly placed to improve this.

Given that the full roll-out of age-verification within discord has been
delayed, and various governments are developing laws that mandate
age-verification thing for all platforms, it seems likely that there will be a
similar wave of interest in alternative infrastructure in the near future. And
that strongly signals that this should be a priority for the project.

Additionally it presents an opportunity to bring the project to a new audience
without making fundamental changes.

### Zero Touch Deployment

Cat is currently working on improvements to deploying Draupnir for those that
own their infrastructure, and this work is being done under the title of
[Zero Touch Deployment](https://github.com/the-draupnir-project/Draupnir/issues/1077).
Essentially minimising the number of manual steps required to get Draupnir
running. And this work will align nicely with the community management focus as
it would mean we are focussing on Draupnir setup across the stack.

## Options

### Option A: Increment community management onboarding

Given that there is a need to improve onboarding that tied to a window of
opportunity around the rollout of age-verification, and that we have contributor
energy and interest on improving the onboarding of Draupnir generally, this
seems like the clear priority for the moment.

As for what gets delivered in this direction, we would most likely first further
improve the UX of adding Draupnir to rooms, see
[Planning #117](https://github.com/the-draupnir-project/planning/issues/117).
And this includes the delegation of permissions to Draupnir and using Matrix
Spaces as a source of protected rooms. Essentially minimising the steps required
to protect a community with Draupnir.

### Option Z: None of the above

This is an expression of no confidence in the direction. If you have further
comments, please see [consultation](../longhouse-consultation.md).

## Discounted options

<!-- Cspell:ignore NLnet -->

### Increment explicit agreement & approval / disapproval

In the
[last cycle selection](./2510A-selection#increment-explicit-agreement--approval--disapproval)
we hadn't had time to rework the plan for approval/disapproval. This has now
been
[done as part of a rework of the NLnet NGI Zero Core goals](https://marewolf.me/posts/draupnir/24-nlnet-goals.html#goal-approval-disapproval-ratings-for-policies).

Given that there is a limited window of opportunity to bring Draupnir to more
users, we believe it would be a mistake to make this the focus of the project at
this time. However, this remains a valuable objective to pursue, both to enhance
distributed moderation and hardening the security of Draupnir. And will be
revisited.

### Room upgrade support

The room upgrade support in Matrix remains a diabolical experience. And the need
to upgrade rooms is not going away, as there is significant work on the horizon
in two more units in the Matrix foundation's project Hydra trilogy. And Element
has secured some kind of investment into P2P work, which will also no doubt
require room upgrades.

Given that the UX for managing groups of rooms in Draupnir isn't perfect, and
would have to be revisited by the community management focus, we don't think
this can come before. However it remains very important as no other project
plans to provide the level of support that we do here. See also the
[NLnet NGI Zero Core goal](https://marewolf.me/posts/draupnir/24-nlnet-goals.html#goal-room-upgrade-support)

### Community participant onboarding

We believe that the onboarding flow is key to preventing abuse within matrix
rooms, see a discussion of the topic on
[Gnuxie's blog](https://marewolf.me/posts/draupnir/25/02.html#priorities-a-focus-on-on-boarding-users).
An emerging vector of spam in the advent of the availability of LLMs comes from
users engaging in unrelated conversations in Matrix rooms before engaging with
users privately through direct messages or sending spam, and so there is even
greater need.

This line of work would consolidate two previously considered routes,
[policy server support](./2510A-selection#policy-server-support) and the
[user familiarity metric](./2510A-selection#increment-user-familiarity-metric)
(previously also called user participation metric). And is generally where we
want to head to supersede the role most protections play in Draupnir right now.

If this was to become the focus, what we would try deliver first would most
likely be communicating community norms and a code of conduct to new users to
start with. It would be a pretty significant improvement to the current
situation. And this would have to be worked out with or without policy server
support initially.

Again this is important work but it doesn't match up against the window of
opportunity around refugees from age-verification rollout on other platforms.

## Feedback and discussion

_Voting is still in progress or has not yet occurred_.

## Outcome

_Voting is still in progress or has not yet occurred_.
