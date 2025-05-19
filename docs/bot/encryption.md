---
sidebar_position: 3
sidebar_label: Setting up encryption
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Setting up encryption

:::info

Draupnir can still protect encrypted rooms without an E2EE capable
device. Please see protecting encrypted rooms [here](../moderator/managing-protected-rooms#protecting-encrypted-rooms).

:::


:::danger

We can not at this time recommend setting up Draupnir with an E2EE
capable device - neither with Pantalaimon or the rust crypto.

:::

Historically there have been two options for providing an E2EE capable
device to Draupnir: Pantalaimon and the matrix-bot-sdk's
experimental rust crypto. Neither of these options are of a high
enough quality.

While we have previously permitted the use of Pantalaimon, it has
consistently confused beginners that are setting it up with Draupnir,
and we do not use it ourselves. Experienced system admins are welcome
to attempt to set up Pantalaimon, but must be aware that any issues
that they experience getting Draupnir to start are extremely likely to
be from the Pantalaimon configuration and not Draupnir itself.
Additionally, there are a couple of known bugs that inhibit the use of
reactions in the management room when using Pantalaimon. Which are
a core part of Draupnir's UX rework.

You can find individual keys in Draupnir's configuration relating to
both the matrix-bot-sdk and Pantalaimon.
