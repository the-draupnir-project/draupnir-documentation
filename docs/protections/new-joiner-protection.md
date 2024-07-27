---
sidebar_label: New Joiner Protection
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# New Joiner Protection

:::danger

This is an experimental protection that should only be used as a last
resort when your community is under persistent attack.

This protection is unavailable in Draupnir version `2.0.0-beta.4` and
below.

This protection may be removed or changed entirely.

:::

This is a protection that can help when one of your rooms is coming
under a persistent attack from new joiners. Whether that be wave spam
or targeted attacked.

The protection works by banning new users from a set of configured
servers, leaving existing community members from the target servers
unaffected. The protection serves as an alternative to banning
the server outright.

## Configuration

To configure the protection, append the following under the
`protections:` header in your config file:

```yaml
newJoinerProtection:
  serverNames:
    - "example.com"
```

You will need to restart the bot to make this effective. We recommend
that you leave servers where abuse typically originates in the
configuration file. Then the protection can be enabled and disabled at
will without restarting the bot.

The ban message can also be changed with the option `banMessage:`.

By default this reads "Unfortunately we cannot accept new users from
your homeserver at this time.".
