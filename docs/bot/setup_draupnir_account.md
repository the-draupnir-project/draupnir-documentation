---
sidebar_position: 2
sidebar_label: Creating an account for Draupnir
---

# Creating an account for Draupnir

:::tip

If you want Draupnir to be a Synapse admin, you might want to create
the account using Synapse's `register_new_matrix_user` command.
See the Synapse documentation [here](https://element-hq.github.io/synapse/latest/usage/administration/admin_api/index.html).

:::

If you aren't using encrypted rooms anywhere, get an access token by
opening Element in a separate browser profile or incognito tab, and
log in as the bot. Then, go to "All Settings", "Help & About", and
click the little triangle next to "Access token". Copy and paste that
into your config under `accessToken`.

:::note

Do not log out, just close the window, otherwise the access token
will be invalidated.

:::

## Disabling rate limiting

:::info

While Draupnir can be run on a rate limited account without issue. We
recommend disabling rate limiting if the option is available to you.

:::

By default, Draupnir will be rate limited by Synapse, which can
inhibit Draupnir's ability to respond in some scenarios, particularly
while redacting lots of messages.

It's therefore recommended to turn off ratelimiting for a draupnir
bot, see [the synapse admin API
documentation](https://matrix-org.github.io/synapse/latest/admin_api/user_admin_api.html#set-ratelimit)
for more information.


## Making Draupnir a Synapse Admin

:::note

To deactivate users, move aliases, and shutdown rooms, Draupnir will
need to be a server admin. These features are only supported on
Synapse.

:::

Please see the Synapse documentation for how to do this [here](https://element-hq.github.io/synapse/latest/usage/administration/admin_api/index.html).
