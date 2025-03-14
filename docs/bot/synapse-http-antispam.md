# Synapse http antispam

The
[synapse-http-antispam](https://github.com/maunium/synapse-http-antispam)
module allows Draupnir to make decisions about events that are
received by your homserver. We aim to replace the functionality of the
legacy Mjolnir antispam module with this one.

Currently, Draupnir uses the module to takedown rooms that have been
added to watched policy lists. We are also working to develop
countermeasures against invitations from banned users.

## Installation

Follow the instructions from the [synapse-http-antispam
readme](https://github.com/maunium/synapse-http-antispam).

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
```

Currently we only support the `check_event_for_spam`, `user_may_invite`, and `user_may_join_room` callbacks. We strongly recommend that these endpoints are configured to `fail_open` so that your homeserver's service is not degraded should Draupnir fail or go offline.

You will also need to enable `synapseHTTPAntispam` under the `web`
property in Draupnir's config (see
[default.yaml](https://github.com/the-draupnir-project/Draupnir/blob/main/config/default.yaml)).
