---
sidebar_position: 1
---

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
