# Room Takedown Protection

:::info

You need to be using Draupnir v2.3.0 or above to use this protection

You also need to follow the [instructions](../bot/synapse-http-antispam) for adding the synapse-http-antispam module.

:::

The room takedown protection matches policies from Draupnir's watched
lists against the rooms your homeserver is joined to.

This protection is useful when you are administrating a server with
open registration and need to protect yourself and your users from
two scenarios:

1. Spam invitations targetting your local users that have already been
   sent and need to be rejected automatically.

2. Preventing local users from joining rooms with intolerable or
   illegal content, and removing these rooms if they are detected
   on the homeserver.

If the protection discovers a room is marked with the `takedown`
recommendation, then the protection will instruct your homeserver to
shutdown the room. This will force all local participants to leave the
room, purge the history from your database, and block the room.

## Room Discovery

The protection provides a means of oversight into the rooms your
homeserver is participating within. When a room is discovered no your
homeserver, a notification is sent to a configured room with details
about the room: the title, description, creator, and member count.

The protection includes a threshold
`discoveryNotificationMembershipThreshold` that must be met before
displaying the notification. By default, a room needs to have `20`
members before its details will be displayed. This is a privacy
concious default to balance between alerting the server admins of all
rooms, and those that are large enough to be of concern.

## Configuration

See [configuring protections](./configuring-protections) for a guide
on how to configure this protection.

## Taking down a room

To takedown a room yourself, you will need to use the `!draupnir
takedown` command. You will be prompted for confirmation, and will be
required to read the details very carefully.
