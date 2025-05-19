# Homeserver administration

Draupnir offers capabilities for homeserver admins that are
particularly relevant when registration on a homeserver is open or
public:

* Room management: Draupnir can provide insight into the Matrix rooms
  your server is participating in and allow them to be blocked and
  taken down.
  + See the [Room takedown protection](../protections/room-takedown-protection).

* Invitation management: Draupnir can block invitations from users,
  servers, or rooms. And reject invitations sent on behalf of your users
  that were sent from taken down rooms.
  + See the  [Block invitations on server protection](../protections/block-invitations-on-server-protection).

* Report forwarding and review: Draupnir can be used to view
  reports submitted by users on your homeserver.

* User management: Accounts can be deactivated using the `!draupnir
  deactivate` command.

These features may require either a [synapse admin
account](./setup_draupnir_account#making-draupnir-a-synapse-admin) or
[synapse-http-antispam](./synapse-http-antispam) to be available to
Draupnir.

## Enabling readable abuse reports

Draupnir offers the ability to replace the Matrix endpoint used to
report abuse and display it into a room, instead of requiring you to
request this data from an admin API.

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

### Security note

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
