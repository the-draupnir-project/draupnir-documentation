# Block invitations on server protection

:::info

You need to be using Draupnir v2.3.0 or above to use this protection.

You also need to follow the
[instructions](../bot/synapse-http-antispam) for adding the
synapse-http-antispam module.

This functionality is compatible with synapse workers and replaces the
legacy synapse module from mjolnir.

:::

This protection blocks invitations on your homserver based on the
lists that Draupnir is subscribed to.

## Which policies will result in a rejected invitation

For policies that have a recommendation to ban users, the policy will
only apply if the ban reason matches one of the configured
`automaticallyRedactForReasons` in your Draupnir's [configuration
file](../bot/starting_draupnir#the-configuration-file). If
the user is targeted by a policy with the `takedown` recommendation,
invitations from them will always be blocked.

For policies that ban or takedown servers and rooms, matching invitations will
always be blocked.

## Enabling the protection

Run `!draupnir protections enable BlockInvitationsOnServerProtection`
in the management room.

## Taking down targeted invitations.

The most effective way to remove invitations targeting users on your
server to a room with intolerable content is by using the `!draupnir
takedown` command in conjunction with the [room takedown protection](./room-takedown-protection).
