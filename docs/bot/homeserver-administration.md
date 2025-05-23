# Homeserver administration

<!-- cSpell:words shadowbanned CSAM unshadowban -->

:::danger

The Matrix protocol is unsafe by default. Your homeserver will be abused by
malicious actors, and your resident users will receive unsolicited abuse. If you
have a homeserver with public registration you will want to read this section
carefully. ALL of the offered homeserver protections in this document are
recommended and necessary to maintain a safe homeserver on Matrix. If you have
concerns about a specific protection or use case, please reach out to us in
[#draupnir:matrix.org](https://matrix.to/#/%23draupnir%3Amatrix.org). We are
happy to make changes or offer advice.

:::

## Draupnir protections & features

Draupnir offers capabilities for homeserver admins that are particularly
relevant when registration on a homeserver is open or public

These features may require either a
[synapse admin account](./setup_draupnir_account#making-draupnir-a-synapse-admin)
or [synapse-http-antispam](./synapse-http-antispam) to be available to Draupnir.

### Room takedown protection

The [Room takedown protection](../protections/room-takedown-protection) can
provide insight into the Matrix rooms your server is participating in and allow
them to be blocked and taken down. This protection is essential to prevent
resident users joining rooms containing CSAM or other abusive content, including
receiving unsolicited invitations to such rooms.

- See the [Room takedown protection](../protections/room-takedown-protection).

### Block invitations on server protection

The
[block invitations on server protection](../protections/block-invitations-on-server-protection)
provides invitation management. Draupnir can block invitations from users,
servers, or rooms. And reject invitations sent on behalf of your users that were
sent from taken down rooms when used in conjunction with the _room takedown
protection_.

- See the
  [Block invitations on server protection](../protections/block-invitations-on-server-protection).
- See the [Room takedown protection](../protections/room-takedown-protection)

### Homeserver user policy protection

Resident user accounts can be automatically suspended via the
[Homeserver user policy protection](../protections/homeserver-user-policy-protection)
when Draupnir receives a matching policy. Draupnir can also be prompted for
deactivation.

- See the
  [Homeserver user policy protection](../protections/homeserver-user-policy-protection).

### Suspension and account restriction

Resident user accounts can be managed using commands:

- The `!draupnir deactivate` command will prompt for confirmation before
  deactivation and can optionally purge all messages. While purging messages,
  users will be shadowbanned.
- The `!draupnir unrestrict` command can be used to unsuspend or unshadowban
  users.
- The `!draupnir suspend` command can suspend users without logging them out.

### Report forwarding

- Report forwarding and review: Draupnir can be used to view reports submitted
  by users on your homeserver.

#### Enabling readable abuse reports

Draupnir offers the ability to replace the Matrix endpoint used to report abuse
and display it into a room, instead of requiring you to request this data from
an admin API.

This requires two configuration steps:

1. In your Draupnir configuration file, typically
   `/etc/draupnir/config/production.yaml`, copy and paste the `web` section from
   `default.yaml`, if you don't have it yet (it appears with version 1.20) and
   set `enabled: true` for both `web` and `abuseReporting`.
2. Setup a reverse proxy that will redirect requests from
   `^/_matrix/client/(r0|v3)/rooms/([^/]*)/report/(.*)$` to
   `http://host:port/api/1/report/$2/$3`, where `host` is the host where you run
   Draupnir, and `port` is the port you configured in `production.yaml`. For an
   example nginx configuration, see `test/nginx.conf`. It's the confirmation we
   use during runtime testing.

#### Security note

This mechanism can extract some information from **unencrypted** rooms. We have
taken precautions to ensure that this cannot be abused: the only case in which
this feature will publish information from room _foo_ is:

1. If it is used by a member of room _foo_; AND
2. If said member did witness the event; AND
3. If the event was unencrypted; AND
4. If the event was not redacted/removed/...

Essentially, this is a more restricted variant of the Admin APIs available on
homeservers.

However, if you are uncomfortable with this, please do not activate this
feature. Also, you should probably setup your `production.yaml` to ensure that
the web server can only receive requests from your reverse proxy (e.g.
`localhost`).
