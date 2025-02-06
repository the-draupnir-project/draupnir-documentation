---
sidebar_position: 0
sidebar_label: Protections & Capabilities
---
<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Protections & Capabilities

:::tip

For a tutorial on how to use protections, please see [the protections
tutorial](../../protections/configuring-protections). This page is for an
advanced explanation of how protections work and what capabilities
are. Intended for room moderators with advanced use cases and
protection developers.

:::

## Overview

A protection is a self contained module that can hook into a variety of
different events and react to them:

* Protections provide functionality that is directly useful to the end
user, often in reaction to other events.
  - So for example, in Draupnir, a protection exists to ban room members
    in reaction to policies that exist on Draupnir's watched policy lists.

* Protections can be toggled between enabled and disabled at runtime
  to dynamically toggle functionality.
  - As an example, a community under a targeted attack may wish to
    enabled the `JoinWaveShortCircuitProtection` for the duration
	of the period, but might want to turn it off if they are
	advertising their community or have been featured somehwere.

* Protections have their own independent configuration settings, that
  can be changed dynamically at runtime.
  - No need to restart the bot to change protection settings.  So for
    example, tweaking the allowed number of joins in the
    `JoinWaveShortCircuitProtection`.

What sets protections apart from library and supporting code is that
supporting code provides protections with the means to fetch information,
and cause effects.

So as another example, library code needs to provide the underlying
functionality to watch policy lists. Library code also needs to
provide the infrastructure to inform protections when policies are
added and removed. Another example is that library code also needs to
provide code for effects, a protection cannot issue room level bans if
there is no supporting code to do that.

### How do protections express their behaviour?

In Draupnir, and the _matrix-protection-suite_, protections express
their behaviour and effects through _capabilities_. As an example, the
`MemberBanSynchronisationProtection`, which is responsible for issuing
room level bans in reaction to policies, uses a capability interface
called `UserConsequences`. When the protection needs to ban a user,
this capability is used to provide the room level bans.

### Why do protections cause effects through capabilities?

Conventionally in software, effects are caused by using _ambient
authority_. This is to say effects are caused directly, by using
authority that is available to the entire application. Draupnir has
access to the entire Matrix account it has been configured to use, and
so conventionally all parts of Draupnir could cause any effect.
Whether that be to shutdown Matrix rooms, ban users, hijack rooms, or
go rogue. Draupnir has the ambient authority to do all these things,
we have to challange this authority and create ways of containing and
auditing it.  Because without, any protection that is enabled could
act with the entire authority of Draupnir, to shutdown rooms and ban
users, and this would be very confusing to the end user, especially
when trying to find which protection is causing these effects and why.

Additionally, without describing effects through capability
interfaces, dry running protections or behaviours would require
special cased code to exist in sprinkles throughout the code base, and
would be very fragile to maintain. This was the reality of _Mjolnir_'s
dry-run feature.  It became very easy for contributors to forget the
feature existed, or not realise that a behaviour they were creating
should have a special case. Because effects were being implemented
implicitly with the general protection buisness logic.

By using capability interfaces we can make these effects explicit, and
accounting for different modes of operation becomes a first class
feature that is implicit to using capabilities. No special casing or
thought is required to implement a dry-run mode, because we can now
just replace the capabilities that are provided to the protection,
just by matching their interface.

### What is a capability interface?

A capability interface represents a place in the protection for a
specific behaviour. This interface gets used by the protection's code
in place of the _concrete_ (actual, real) capability.

So for example, in the matrix-protection-suite, we use the
`UserConsequences` interface for protections in place of the actual
capability to ban users from rooms.

When a protection is enabled, the protection asks Draupnir for
capabilities matching its capability interfaces. And this allows
Draupnir to choose whether to provide the capability to ban a user, or
instead a capability that simply logs a message when the protection
tried to ban a user. Without causing any other effect.

### What is a capability provider?

A capability provider is essentially a factory that produces a
specific capability for an interface, from an application context,
such as Draupnir. This is essentially used to provide the glue code to
decouple capabilities from the application context. The capability
provider is used by the application context to produce fresh
capabilities for a protection as the protection as enabled.  The
capability provider that is used for this purpose is called the
_active_ capability provider.

Capability providers in Draupnir are configurable on a per protection
basis.
