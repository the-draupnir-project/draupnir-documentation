---
sidebar_label: Mention Limit Protection
---

<!--
SPDX-FileCopyrightText: 2024 - 2025 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Mention Limit Protection

:::info

This protection is unavailable in Draupnir version `2.0.0-beta.4` and below.

Versions below `v2.3.0` have to be configured from the configuration file.

:::

This is a protection that can help when one of your rooms is coming under a
persistent attack where a user pings your room members.

The protection will redact any message that contains more mentions than a
preconfigured limit.

## Usage

Use `!draupnir protections show MentionLimitProtection` to show the available
protection settings for this protection.

The protection will redact any messages containing mentions over `maxMentions`.
The user who sent the message will then be warned not to send such a message
again.

If they send another message containing messages over the limit within a short
timeframe, they will be banned from the room.

## Configuration prior to `v2.3.0`

To configure the protection, append the following under the `protections:`
header in your config file:

```yaml
mentionLimitProtection:
  maxMentions: 3
```

You will need to restart the bot to make this effective.

The redact reason can also be changed with the option `redactReason:`.

By default this reads "You have mentioned too many users in this message, so we
have had to redact it.".
