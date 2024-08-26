---
sidebar_label: Mention Limit Protection
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Mention Limit Protection

:::danger

This is an experimental protection that should only be used as a last
resort when your community is under persistent attack.

This protection is unavailable in Draupnir version `2.0.0-beta.4` and
below.

This protection may be removed or changed entirely.

:::

This is a protection that can help when one of your rooms is coming
under a persistent attack where a user pings your room members.

The protection will redact any message that contains more mentions
than a preconfigured limit.

## Configuration

To configure the protection, append the following under the
`protections:` header in your config file:

```yaml
mentionLimitProtection:
  maxMentions: 3
```

You will need to restart the bot to make this effective.

The redact reason can also be changed with the option `redactReason:`.

By default this reads "You have mentioned too many users in this message,
so we have had to redact it.".
