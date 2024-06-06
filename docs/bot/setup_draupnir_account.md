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

If you are not using encrypted rooms anywhere, you can get an access
token by opening Element in a separate browser profile or incognito
tab and logging in as the bot or registering an account.  Once you are
logged in, go to "All Settings", "Help & About", and click the little
triangle next to "Access token". Copy and paste that into your
[config](./starting_draupnir) file under the `accessToken` key.

:::note

Do not log out, just close the window, otherwise the access token
will be invalidated.

If you have presence enabled on your homeserver, do not keep the
window open or use the same session to login to the Draupnir account
as this will cause you to accidentally trigger a bug in Synapse or
Element web that will flood presence updates.

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

If you registered a new account, please see the Synapse documentation
for how to make an existing account a Synapse admin
[here](https://element-hq.github.io/synapse/latest/usage/administration/admin_api/index.html).
