---
sidebar_position: 1
sidebar_label: Encryption
---
<!--
SPDX-FileCopyrightText: 2025 FSG-Cat <catalanlover@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->
# Encryption and Draupnir

:::info

**Draupnir does not need support for encryption**. In Draupnir's
context, E2EE does not provide any additional security.  And Draupnir
can still protect encrypted rooms.

:::

### Management Room Encryption

:::tip

Sensitive moderation discussions should be conducted in dedicated E2EE
rooms outside of the management room. We strongly recommend against
encrypting the management room.

:::

E2EE provides only limited protection against unauthorised access to
the information in the management room. The main reason for encrypting
the management room is the belief that encryption would protect the
messages in the management room from a snooping server admin or a
compromised homeserver database.

However **Draupnir does not enforce cross signing** and therefore
Draupnir does not protect against impersonation attacks.  This
includes impersonation of the bot itself, any other user in the
management room.

For this reason we strongly recommend against encrypting the
management room.

Sensitive discussions should be relegated to dedicated moderation
communication channels that can use E2EE properly to avoid needing
E2EE for the Draupnir management room. Draupnir should not be present
in these rooms.

Another thing to note is that E2EE does not protect commands from
metadata based deanonymisation. Because the sender is encoded in the
plain text portion of Matrix events, along with the time the message
was sent, it is straightforward for anyone with access to the room
history to deanonymise the sender of bot commands.

### Room Level Encryption

:::warning

Matrix users in encrypted rooms can selectively withold encryption
keys from moderators and Draupnir to bypass automated protections that
scan message content, such as the `WordListProtection`.

Maliciously and selectively witholding encryption keys is
indistinguishable from regularly occurring Matrix encryption errrors.

:::

Also see [Protecting encrypted rooms](../moderator/managing-protected-rooms#protecting-encrypted-rooms).

## How to disable Management Room Encryption

To disable encryption support in your bot you have to disable the
encryption in your management room. To do this you have two options:

* Create a completely separate management room.
* Execute a manual room upgrade on the room. If doing a manual room
  upgrade usage of scripts like [this
  one](https://gitea.blesmrt.net/mikaela/scripts/src/branch/master/bash/matrix-upgrade-room.bash)
  by Aminda.

Please note that protection settings are stored in the mangement
room's room state and will be reset to default by the migration away
from E2EE. Unless you have tooling to copy these over to the new room.
