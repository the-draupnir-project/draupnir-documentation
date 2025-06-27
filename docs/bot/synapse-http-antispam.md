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
      do_ping: true
      enabled_callbacks:
        - user_may_invite
        - user_may_join_room
      fail_open:
        user_may_invite: true
        user_may_join_room: true
```

Currently we only support the `user_may_invite`, and `user_may_join_room`
callbacks. We strongly recommend that these endpoints are configured to
`fail_open` so that your homeserver's service is not degraded should Draupnir
fail or go offline.

### Draupnir Configuration

You will also need to enable `synapseHTTPAntispam` under the `web` property in
Draupnir's config (see
[default.yaml](https://github.com/the-draupnir-project/Draupnir/blob/main/config/default.yaml)).

## Troubleshooting or verifying connection from Synapse

:::info

Support for `do_ping` is available from Draupnir v2.4.0.

:::

In order to verify that Synapse, or any of its workers, are able to reach the
draupnir antispam server, you can look for the following messages in Synapse
logs.

1. Verify that the Synapse module is loaded by searching for `Loaded module`.
   You should find a line that looks like this:
   `synapse.app._base - 584 - INFO - sentinel - Loaded module <synapse_http_antispam.HTTPAntispam object at 0x79613db08b00>`

2. Verify that synapse-http-antispam is able to reach Draupnir by searching for
   `Successfully pinged antispam server`. You should be able to see a line that
   looks like this:
   `synapse_http_antispam - 65 - INFO - sentinel - Successfully pinged antispam server with request ID UAhDvDkv`

3. Verify that synapse-http-antispam is unable to reach Draupnir by searching
   for `Failed to ping antispam server`. You should be able to see a line that
   looks like this:
   `synapse_http_antispam - 68 - ERROR - sentinel - Failed to ping antispam server (POST http://draupnir:localhost:8082/api/1/spam_check/ping)`

4. Verify that Draupnir's configuration is correct by looking for the message
   `There are unknown configuration properties` in Draupnir's log, and checking
   if any properties are relevant.
