---
sidebar_position: 1
sidebar_label: Configuring protections
---

<!--
SPDX-FileCopyrightText: 2025 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Configuring protections

:::info

This is a tutorial that aims to guide a moderator through configuring
a protection. We use the `JoinWaveShortCircuitProtection` in the
examples, but the steps are the same for every protection.

:::

## Displaying the protection settings

:::tip

The commands displaying protections have key names surrounded in
_code_ blocks to make them easy to copy by double clicking.

You can copy _protection names_ from the `!draupnir protections`,
and copy individual protection _setting names_ from `!draupnir
protections show`.

:::

Each protection can provide different configuration options, which are
sometimes also referred to as _protection settings_. The command that
is used to view these settings is the `protections show` command.

To display an overview for a protection's protection settings, you can
use the `!draupnir protections show <protection name>` command. If you
don't know the name of the protection that you are trying to find, you
can copy the name from the list provided when using the `!draupnir
protections` command.

From the `protections show` command We are provided with a short
description of each setting, and the setting's name that we can copy
into a further command to edit the settings.

### An example, using the `JoinWaveShortCircuitProtection`:

When wanting to view the settings for the the
`JoinWaveShortCircuitProtection`, invoking the command would look like
this:

`!draupnir protections show JoinWaveShortCircuitProtection`:

**Protection Settings**

- `maxPer`: The maximum number of users that can join a room in the
  timescaleMinutes timescale before the room is set to invite-only.
  default value: 50 (number)

- `timescaleMinutes`: The timescale in minutes over which the maxPer
  users can join before the room is set to invite-only.

## Changing protection settings

:::tip

Use the `!draupnir protections config reset <protection name>` command
to restore the default settings for a given protection.

:::

Let's consider adjusting the protection settings for the
`JoinWaveShortCircuitProtection`. If we have a particularly inactive
room, we might want to reduce the timesacale and the maximum number of
joins within it.

To do this, we can use the `!draupnir protections config set
<protection name> <property name>` command.

`!draupnir protections config set JoinWaveShortCircuitProtection
maxPer 5` would set the `maxPer` setting to just 5 joins. And
`!draupnir protections config set JoinWaveShortCircuitProtection
timescaleMinutes 10` would make sure that a maximum of 5 joins is
allowed over a period of 10 minutes before triggering the short
circuit.

### Managing sets

Some protections have settings that are a set of values. The
`TrustedReporters` protection has a setting like this.

- `mxids`: The users who are marked as trusted reporters. default
  value: [] (empty array)

To manage the list, we can use the `!draupnir protections config <add/remove> <protection name> <property name>` command.

So to add a user to the list of trusted reporters, we would use
`!draupnir protections config add TrustedReporters mxids
@alice:example.com`, and to remove a user `!draupnir protections
config remove TrustedReporters mxids @alice:example.com`.

## Configuring protection capabilities

:::info

For more details about capabilities, see the [conceptual
documentation](../matrix-protection-suite/concepts/protection).
Capabilities are a relatively new feature in Draupnir, and we're still
working to update protections to make use of them.

Managing capabilities is a relatively advanced feature, and we aim to
make use of the functionality though protection specific configuration
commands that are easier to use.

:::

Protections use capabilities to cause actions such as redacting an
event, banning a user, or sending an alert to the management room.

A protection can have more than one capability, and each capability
has a name. Think of capabilities as a place for a specific piece of
functionality. Such as the ability to ban users is often provided by
the `StandardUserConsequences` _capability provider_ which satisfies
the `UserConsequences` _capability interface_. The configured provider
that gives a protection the functionality for a specific capability is
called the _active capability provider_. And collectively the
configured capability providers for all the protection's capabilities
is called _the capability provider set_.

### Viewing configured capability providers

To view which capability providers are currently active we can use the
`!draupnir protections show <protection name>` command.

Under the `Capability provder set` heading, each capability that the
protection supports is shown. There are three key pieces of
information here:

- The capability name
- The _capability interface_, which determines which _capability providers_ are
  compatible or interchangeable with this capability.
- The _active capability provider_, showing which of the compatible _capability providers_ is configured
  for and being used for this capability.

If you expand the details, you will be able to see a list of
compatible capability providers for the _capability interface_
desingated for this capability. Protections will always have at least
two different options, a standard capability and a simulated
capability. You will be able to read a description of what each capability
provider does.

### Changing the active capability provider for a protection capability

:::tip

To avoid typos, try copy and pasting the details from the `!draupnir
protections show <protection name>` command.

:::

To change the active capability provider for a protection, we can use
the `!draupnir protections capability <protection name> <capability
name> <capability provider name>` command.

### Restoring the default capability provider set for a protection

If you need to restore the default capability providers for a
protection, then you can use the `!draupnir protections capability
reset` command. This will restore all the default capability providers
for each capability that the protection offers.
