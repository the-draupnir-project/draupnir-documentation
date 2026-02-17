---
sidebar_position: 2
sidebar_label: Creating an account and access token for Draupnir
---

<!-- cspell:ignore XPOST -->

# Creating an account and access token for Draupnir

:::note

To deactivate users, move aliases, and shutdown rooms, Draupnir will need to be
a server admin. These features are only supported on Synapse.

:::

:::info

While Draupnir can be run on a rate limited account without issue. We recommend
disabling rate limiting if the option is available to you. After you have
created your account, you can see how to manage rate limiting
[here](#disabling-rate-limiting).

:::

## Pre-requisites

This page is going to tell you how to:

1. Create a fresh Matrix account for your Draupnir bot to use, optionally with
   server admin capabilities.
2. Create an _access token_ for your bot to use to access the Matrix account.
   Which is an opaque string that you will paste into your
   [config](./starting_draupnir) file under the `accessToken` key (or via the
   `--access-token-path` option).
3. Optionally disable rate limits for the account.
4. Optionally turn an existing Synapse account into a synapse admin account.

## Creating an account

### Synapse

To create a new server admin account, you can use Synapse's
`register_new_matrix_user` command. See the Synapse documentation for the
[admin api](https://element-hq.github.io/synapse/latest/usage/administration/admin_api/index.html).

If you are using MAS (Element's
[matrix-authentication-service](https://element-hq.github.io/matrix-authentication-service/index.html)),
see how to register users using the
[mas-cli](https://element-hq.github.io/matrix-authentication-service/reference/cli/manage.html#manage-register-user).

Once you have created an account proceed to
[creating a token](#creating-a-token-all-homeservers).

### Dendrite

Please see the dendrite documentation for the `create-account` command
[here](https://element-hq.github.io/dendrite/administration/createusers#from-the-command-line).

### Other or no server admin access

Proceed to
[creating an account or logging in with Element](#creating-an-account-or-logging-in-with-element).

## Creating a token (all homeservers)

### Creating a token with access to mas-cli

:::info

If you are deployed against a homeserver using MAS, but without access to the
mas-cli, you will need to follow the instructions for
[creating a token with curl](#getting-a-token-with-curl-mas-and-encryption-friendly).

:::

If you are using MAS, and you are a homeserver administrator, you will then need
to create a token for Draupnir using `mas-cli`.

1. `mas-cli manage issue-compatibility-token --yes-i-want-to-grant-synapse-admin-privileges <username>`[^compat-token]
1. `mas-cli manage provision-all-users` [^provision]

Note that these two command require an existing account.

### Creating an account or logging in with Element

You should create an account or login by opening
[Element](https://app.element.io) in a separate browser profile or incognito tab
and registering an account for the bot.

### Getting a token from Element web

:::info

Do not copy the access token from Element web if your homeserver is using MAS
(matrix-authentication-service). This includes bots deployed against matrix.org.
Instead, you should use curl (see below). This is because the token Element web
provisions expires very quickly. You can still register the user with Element
however.

:::

If your Draupnir is not configured to use Encryption, you can then, go to "All
Settings", "Help & About", and click the little triangle next to "Access token".
Copy and paste that into your [config](./starting_draupnir) file under the
`accessToken` key.

Do not log out, just close the window, otherwise the access token will be
invalidated.

If you have presence enabled on your homeserver, do not keep the window open or
use the same session to login to the Draupnir account as this will cause you to
accidentally trigger a bug in Synapse or Element web that will flood presence
updates.

### Getting a token with curl (MAS and Encryption friendly)

To get an access token with curl, you will need three pieces of information.

1. The base url for client-server connections.
2. Your draupnir user id localpart.
3. Your draupnir user password.

#### Finding the base url

To find the base url for your homeserver, you will need to visit
`https://example.com/.well-known/matrix/client` in your browser or with curl:

`curl https://example.com/.well-known/matrix/client`. You should see some JSON
like this in response:

```
{
    "m.homeserver": {
        "base_url": "https://matrix-client.example.com"
    }
}
```

The `base_url` under `m.homeserver` is your client-server base_url.

#### Finding the draupnir user id localpart

If your draupnir user matrix identifier is `@draupnir:example.com` the localpart
will be `draupnir`.

#### Fetching the access token

To create the access token replace DRAUPNIR_LOCALPART, DRAUPNIR_USER_PASSWORD,
and CLIENT_BASE_URL with the information gathered prior.

```
curl -XPOST -H "Content-Type: application/json" -d '{
    "identifier": { "type": "m.id.user", "user": "DRAUPNIR_LOCALPART" },
    "password": "DRAUPNIR_USER_PASSWORD",
    "type": "m.login.password",
}' 'CLIENT_BASE_URL/_matrix/client/r0/login'
```

So that it should look like this:

```
curl -XPOST -H "Content-Type: application/json" -d '{
    "identifier": { "type": "m.id.user", "user": "draupnir" },
    "password": "********",
    "type": "m.login.password",
}' 'https://matrix-client.example.com/_matrix/client/r0/login'
```

You should get a response containing your access token.

## Disabling rate limiting

By default, Draupnir will be rate limited by homeservers, which can inhibit
Draupnir's ability to respond in some scenarios, particularly while redacting
lots of messages.

It's therefore recommended to turn off ratelimiting for a draupnir bot, see
[the synapse admin API documentation](https://matrix-org.github.io/synapse/latest/admin_api/user_admin_api.html#set-ratelimit)
for more information. For Dendrite this is configured in
[dendrite.yaml](https://github.com/element-hq/dendrite/blob/main/dendrite-sample.yaml#L211)
by adding `exempt_user_ids:` under `rate_limiting:`.

## Making Draupnir a Synapse Admin

If you registered a new account, please see the Synapse documentation for how to
make an existing account a Synapse admin
[here](https://element-hq.github.io/synapse/latest/usage/administration/admin_api/index.html).

[^compat-token]:
    You can find more about it in the official documentation at
    [https://element-hq.github.io/matrix-authentication-service/reference/cli/manage.html#manage-issue-compatibility-token](https://element-hq.github.io/matrix-authentication-service/reference/cli/manage.html#manage-issue-compatibility-token)

[^provision]:
    This ensures that synapse is aware of the user's new device. Otherwise
    synapse will reject requests.
    [Check upstream for more information](https://element-hq.github.io/matrix-authentication-service/reference/cli/manage.html#manage-provision-all-users)
