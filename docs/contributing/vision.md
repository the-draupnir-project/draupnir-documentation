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

Early in Draupnir's history, the primary mode of deployment for Draupnir among
its users was as a bot. This was because of the ease of use that this deployment
option provides. As Matrix moved towards specifying community management
services, Draupnir deployments using bots were not forgotten or left out from
receiving new capabilities. Neither through specification or support from
implementation.

### Policy servers as an early example of friction

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

The Draupnir project had always developed an appservice deployment option. It is
clear that many communities that move to Matrix are unable to operate their own
infrastructure, even though the option is very much available to them.

The roadblocks to on-boarding UX were solved either by authenticating Draupnir
to protect a community via OIDC, or by simply signing in to a web app that would
configure Draupnir for them.

Concerns about performance and optimisation were also easily dismissed, because
we could point to the matrix-protection-suite's advanced persistent data
structures that allowed for efficient resource utilization and dynamic load
balancing.

## Draupnir for homeserver administration

The Draupnir project has a mature and well established tech stack that is
capable of supporting many use cases. Homeserver administration is a place where
Draupnir can quickly be adapted to stand in for projects that don't exist or
where the Matrix community does not have the resources to develop them.

Examples include Draupnir's
[room takedown protection](https://the-draupnir-project.github.io/draupnir-documentation/bot/homeserver-administration#room-takedown-protection),
and
[homeserver user policy application](https://the-draupnir-project.github.io/draupnir-documentation/bot/homeserver-administration#homeserver-user-policy-protection).

## Draupnir as the foundation's tool of choice for room moderation

Previously, it was thought that moderation policies were easy to implement or
adapt for other tools or server implementations. It is now understood that this
is not true. And there are many subtle complexities in implementing policy room
subscription, and also UX requirements. Fortunately as the Draupnir project had
pioneered here, the Matrix ecosystem was able to rally around Draupnir and
develop a range of tools in Draupnir's own ecosystem. The Draupnir project's
deep understanding of the interactions of moderation policies sourced from
policy rooms also meant that Draupnir was a perfect choice for this tooling.

Because of the investment into the matrix-protection-suite and other parts of
Draupnir's technical stack. The foundation also decided that working within this
ecosystem was the correct thing to do, and this gave them many benefits. No
longer would the foundation spend so much time on resources on duplicating a
technical stack in fragments throughout various projects an experiments over and
over. Which caused bugs and even regressions between one project and the next.
The foundation finally began to understand that a unified technical stack was
well within its interests and would allow safety developers to focus on
responding to current threats and requirements. Instead of needing to build a
unique stack each time a problem came to be solved.

Additionally the foundation saw that Draupnir had many benefits over its
predecessor and of similar experiments, including its independent governance and
contribution model. The foundation saw that its investments into these projects
was fighting the inevitable and instead embraced Draupnir as though it were
their own idea all along.

## Draupnir's governance

As the Draupnir project grew, it became clear that there is a need for proper
governance structures. Not only to foster direct contribution, but to also
understand the needs of Matrix's open communities, who would participate
enthusiastically in discussion about Draupnir's upcoming priorities.

Unlike the rest of the Matrix ecosystem, which has many unfocussed goals and can
never agree on what they want Matrix to be or how they use it. For the open
communities that support Draupnir it has always been clear how they use Matrix.
And that allowed the community to organise around issues important to them even
outside the capabilities of Draupnir. Including changes to clients and
homeservers.

The Draupnir project also had a good understanding of the theory of open
software production because of its roots. The project understood the causes of
forking among software projects, which amount to an inability to change the
behaviour of software externally for a specific requirement or need. Which in
turn are caused by in turn: lack of modularity, poor governance, and finally
software licensing and copyright.
