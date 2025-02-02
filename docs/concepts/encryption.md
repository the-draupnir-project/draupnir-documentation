---
sidebar_position: 1
sidebar_label: Encryption
---

# Encryption in a Draupnir Context

**You do not need Encryption Support in Draupnir** E2EE does not provide any additional security in Draupnir's context.

### Management Room Encryption

E2EE provides limited protection against unauthorised access to the information in the management room. Be that via homeserver admin snooping or database compromise.

However Draupnir does not enforce cross signing and therefore wont provide any protection from impersonation attacks.

For this reason we strongly recommend against encrypting the management room.

Sensitive discussions should be relegated to dedicated moderation communication channels that can use E2EE properly to
avoid needing E2EE for the Draupnir management room. Draupnir should ofc not be present in these rooms.

E2EE does not protect commands from metadata based deanonymisation.

### Room Level Encryption

E2EE support does not help room level moderation involving dishonest users and moderation involving honest users
is a social problem not a Draupnir problem.

Dishonest users can just maliciously cause UTD errors to deny Draupnir the ability to properly moderate. This
attack can not be defended against because UTDs happen naturally. Automatic UTD sanctions would have a disastrously
high false positive rate of close to 100%.

## How to disable Management Room Encryption

To disable encryption support in your bot you have to disable the encryption in your management room. You either create a completely separate management room or
you can execute a manual room upgrade on the room. If doing a manual room upgrade usage of scripts like [this one](https://gitea.blesmrt.net/mikaela/scripts/src/branch/master/bash/matrix-upgrade-room.bash) by Aminda.

Please note that protection settings are stored as room state and therefore will be reset by the migration away from E2EE if not manually transferred over.
