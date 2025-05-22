# Synapse http antispam

:::info

You need to be using Draupnir v2.3.0 or above to use this Synapse module.

:::

The [synapse-http-antispam](https://github.com/maunium/synapse-http-antispam)
module allows Draupnir to make decisions about events that are received by your
homeserver. This module replaces the functionality of the legacy Mjolnir
antispam module.

Please see the page on [homeserver administration](./homeserver-administration)
to see the range of features that this module enables.

## Installation

If you are using matrix-docker-ansible-deploy, then enabling the module is very
simple
[link](https://github.com/spantaleev/matrix-docker-ansible-deploy/blob/master/docs/configuring-playbook-bot-draupnir.md#enabling-synapse-http-antispam-support).

Otherwise follow the instructions from the
[synapse-http-antispam readme](https://github.com/maunium/synapse-http-antispam).

## Configuration

Your synapse module configuration should look something like this:

```yaml
modules:
  - module: synapse_http_antispam.HTTPAntispam
    config:
      # http://`<draupnir host>:<port>/api/1/spam_check`
      base_url: http://localhost:8080/api/1/spam_check
      authorization: YOUR_SECRET_TOKEN
      enabled_callbacks:
        - check_event_for_spam
        - user_may_invite
        - user_may_join_room
      fail_open:
        check_event_for_spam: true
        user_may_invite: true
        user_may_join_room: true
      async:
        check_event_for_spam: true
```

Currently we only support the `check_event_for_spam`, `user_may_invite`, and
`user_may_join_room` callbacks. We strongly recommend that these endpoints are
configured to `fail_open` so that your homeserver's service is not degraded
should Draupnir fail or go offline.

Additionally it is important that `check_event_for_spam` is configured to be
`async`. This means that Synapse will not wait for a response from Draupnir.
Draupnir only uses this check to source information about the matrix rooms your
server is participating in.

If your server has a very high maximum PDU rate (50PDU/s or above) you may wish
to consider disabling the `check_event_for_spam` callback entirely. It is
unlikely that your server will unless you are offering a service on the scale of
matrix.org.

### Draupnir Configuration

You will also need to enable `synapseHTTPAntispam` under the `web` property in
Draupnir's config (see
[default.yaml](https://github.com/the-draupnir-project/Draupnir/blob/main/config/default.yaml)).
