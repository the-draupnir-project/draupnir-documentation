---
sidebar_label: Project vision
---

<!--
SPDX-FileCopyrightText: 2025 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# The Draupnir project vision

:::note

This document contains the opinions, ideas, and dreams of the project. Not all
of the content in this document can be considered objective and it is an
artistic choice to present the vision in this way. Please keep this in mind as
you read.

:::

This document describes the vision and goals that the Draupnir project has. Some
of these goals have already been achieved. And some of them are ambitious. We
believe they are all reasonable. We would already long be here if effort had
been concentrated on Draupnir sooner.

## Draupnir as essential open community management infrastructure

Draupnir is a community management service specifically designed for communities
that have public rooms. Because of the open nature of these communities and the
broken access control system that Matrix provides, Draupnir is essential to the
management of open communities on Matrix.

Here are the goals for the Draupnir project to provide in its role to provide a
community management service:

- Maintaining the community's moderation decisions in the form of policy rules.

- Informing users of the community's code of conduct and normalities.

- Managing access control and gently on-boarding new users to the community
  without providing them the means to disrupt the conversation.

- Facilitating around the clock distributed moderation through watching
  community curated policy rooms.

- A service is provisioned to automatically protect a new space on the
  homeserver as soon as the space is created. Any space added to the room at any
  time is also subsequently protected.

- The Matrix community understands a community management service is essential
  to running open communities and the development of these services is as valued
  and respected as the development of homeservers.

- Open community management has its own dedicated seat on the Spec Core Team.

- Community management services are recognised as integrations to Matrix rooms.

## Draupnir's primary deployment method as a bot remains supported as Matrix moves to embrace community management services

Currently, the primary mode of deployment for Draupnir among its users is as a
bot. This is because of the ease of use that this deployment option provides. As
Matrix moves towards specifying community management services, Draupnir users
with deployments as bots should not be left out from receiving new capabilities.
Neither through specification or support from implementation.

### Policy servers as an example of friction

An example we can point to is
[policy servers](https://matrix.org/blog/2025/04/introducing-policy-servers/).
To implement a policy server, projects must implement federation authentication,
PKI and signature verification. Developing this infrastructure carries a huge
amount of risk, and people have implemented it incorrectly when trying to roll
their own. This would have been avoidable if all implementations agreed to use
[pass-through](https://github.com/element-hq/synapse/issues/18597) developed
within Synapse.

This is not the end of the issues though, because pass-through itself provides
no way to interoperate with Draupnir bots that are not associated with
homeserver administration. If a community has deployed Draupnir as a bot for
their community, and are using a matrix.org account to do so, how is their
Draupnir meant to function as a policy server within its protected rooms?

## Draupnir as a service

Many communities that move to Matrix are unable to operate their own
infrastructure. Either because they do not have the resources or the people
required to do so. These communities are also less tech centric and have less
ideological allegiance to privacy and foss software, in other words they have
higher standards and aren't sworn to accept poor UX.

### Service UX

Currently, setting up Draupnir for a Matrix community is not a streamlined as it
should be. Draupnir already does very well for itself through the prompt UX.
However, a number of steps must be taken to make sure that each room is
protected by Draupnir, and these steps can be a turn off.

A simple way around this problem is to include a web app as part of the
provisioning process that the user can sign into with their matrix account and
automatically protect rooms and make sure all of the permissions are correct.
Even better than this would be using OIDC to ensure that draupnir itself was
always authorised to use the user's account to obtain permissions.

### Space centric

To simplify the experience for new users and our internal abstractions, each
Draupnir could shadow a single Matrix Space. Draupnir would automatically
protect rooms as they are added or removed from the space and also manage
permissions. When a user is banned from within a client, Draupnir automatically
adds the ban to a policy room for the community. There would not be any
interactions required from the user to Draupnir, which keeps the UX simple and
consistent for less technical users. However, the options remains to interact
with the bot.

### Service architecture

Because Draupnir uses Node.JS, our only option for horizontally scaling Draupnir
is through the use of multiple processes. As sharing memory between processes is
not possible, this does put constraints on the architecture that we can design.
Fortunately, Draupnir and the matrix-protection-suite already uses persistent
data structures for all of its most resource intensive calculations. This means
we should be able to move Draupnir between processes without interruption to
service.

Draupnir's design is currently optimised to reduce CPU time through the design
and architecture of the matrix-protection-suite's
[revision system](../matrix-protection-suite/concepts/revisions).

## Draupnir for homeserver administration

Draupnir has had to step up and provide advanced features for server
administrators. In particular the
[room takedown protection](https://the-draupnir-project.github.io/draupnir-documentation/bot/homeserver-administration#room-takedown-protection)
and
[homeserver user policy application](https://the-draupnir-project.github.io/draupnir-documentation/bot/homeserver-administration#homeserver-user-policy-protection),
with both of these features involving policy room subscription.

Previously, it was thought that moderation policies were easy to implement or
apply with other tools or server implementations. It is now understood that this
is not true. And there are many subtle complexities in implementing policy room
subscription, and also UX requirements. Fortunately the draupnir project
provides an entire stack to handling these and so features can be relatively
quickly added to Draupnir to support new use cases for server admins.

While it may appear confusing that the bot can both manage community rooms
associated with a homeserver, and also the homeserver itself. They are already
distinct parts of the bot and could even be extracted into another repository.
It hasn't made sense to do this though because of the ease of deployment in
having a unified tool.

## Draupnir as the foundation's tool of choice for room moderation

Because of the investment into the matrix-protection-suite and other parts of
Draupnir's technical stack. We believe that the foundation will inevitably to
work with Draupnir and its stack. This will give them a huge boost to any R&D
work because of the maturity of the stack and its design specifically for safety
work. No longer would the foundation spend so much time on resources on
duplicating a technical stack in fragments throughout various projects an
experiments over and over. A unified technical stack allows safety developers to
focus on responding to current threats and requirements. Instead of spending a
huge amount of time building a unique stack each time a problem comes to be
solved.

Eventually we do see that the foundation will embrace Draupnir as though it were
their own idea all along. And it will be easy for them to do so due to its
modular nature, contributor model, and governance.

## Draupnir's governance

There is a need for proper governance structures. Not only to foster direct
contribution, but to also understand the needs of Matrix's open communities, who
participate enthusiastically in discussion about Draupnir's upcoming priorities.

Unlike the rest of the Matrix ecosystem, which has many unfocussed goals and can
never agree on what they want Matrix to be or how they use it. For the open
communities that support Draupnir it has always been clear how they use Matrix.
And that allows the community to organise around issues important to them even
outside the capabilities of Draupnir. Including changes to clients and
homeservers.

The Draupnir project also has a good understanding of the theory of open
software production because of its roots. The project understands the causes of
forking among software projects, which amount to an inability to change the
behaviour of software externally for a specific requirement or need. Which in
turn are caused by in turn: lack of modularity, poor governance, and finally
software licensing and copyright.
