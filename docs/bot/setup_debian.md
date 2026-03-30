---
sidebar_position: 6
sidebar_label: Installation on Debian
---

<!-- cspell:ignore SUIDSGID, EPERM, tunables -->

# Installation on Debian

:::tip

These are instructions for installing Draupnir from source on Debian. This
installation method is intended for experienced system administrators.

:::

## Installation

Install the packages needed to build and run Draupnir:

```shell
apt update && apt install -y ca-certificates curl git sudo
```

Install Node.js 24 and `npm`.

The most convenient way to do that on Debian is NodeSource:

```shell
curl -fsSL https://deb.nodesource.com/setup_24.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt update && apt install nodejs -y
```

:::info

If you prefer not to use NodeSource, install any supported Node.js 24 plus `npm`
yourself and continue with the rest of this guide. For example, you might use
the official Node.js binaries or your own version manager. We do not document or
support those installation methods here.

:::

Create the directory to clone the repository into:

```shell
mkdir -p /opt/mod-bot
```

Clone the repository and fetch the tags:

```shell
git clone --branch v3.0.0 --depth 1 https://github.com/the-draupnir-project/Draupnir.git /opt/mod-bot/Draupnir
git -C /opt/mod-bot/Draupnir fetch --tags
```

Create the directory for Draupnir's persistent data:

```shell
mkdir -p /opt/mod-bot/Draupnir/datastorage
```

Add a dedicated user to run the bot. systemd will use this user, so there is no
need to run Draupnir with root permissions.

```shell
useradd -m draupnir
```

Give ownership of the Draupnir directory to the bot user:

```shell
chown -R draupnir:draupnir /opt/mod-bot/Draupnir
```

Install dependencies and build Draupnir:

```shell
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && npm ci"
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && npm run build"
```

## Edit the config

Copy the default config to `production.yaml`:

```shell
cp /opt/mod-bot/Draupnir/config/default.yaml /opt/mod-bot/Draupnir/config/production.yaml
```

Change the path of the data directory from the default to the directory we
created earlier, since the default path is for the Docker setup:

```shell
sed -i 's|dataPath: "/data/storage"|dataPath: "/opt/mod-bot/Draupnir/datastorage"|' /opt/mod-bot/Draupnir/config/production.yaml
```

Edit the production config. The most important things to configure are the
`homeserverUrl:`, the `rawHomeserverUrl:`, the `accessToken:`, and the
`managementRoom:`.

```shell
nano /opt/mod-bot/Draupnir/config/production.yaml
```

## Example systemd service

Copy this to `/etc/systemd/system/draupnir.service` and enable it with
`systemctl enable draupnir`, then start it with `systemctl start draupnir`.

:::tip

Before you attempt to start the service, make sure that the management room for
Draupnir exists on your homeserver and is joinable by Draupnir. Either make it
public or invite the bot account in advance.

:::

```ini
[Unit]
Description=Draupnir
#After=matrix-synapse.service       # You can enable this if your Matrix server is Synapse, otherwise you might want to change it to the service that starts your homeserver.
#After=matrix-synapse.target        # You can enable this if your Matrix server is Synapse and you have installed workers via the official instructions.

[Service]
ExecStart=/opt/mod-bot/Draupnir/draupnir-entrypoint.sh bot --draupnir-config /opt/mod-bot/Draupnir/config/production.yaml
WorkingDirectory=/opt/mod-bot/Draupnir
Restart=always
User=draupnir
Environment=PATH=/usr/local/bin:/usr/bin:/bin
Environment=NODE_ENV=production
SyslogIdentifier=draupnir

ReadWritePaths=/opt/mod-bot/Draupnir
NoNewPrivileges=yes
PrivateDevices=yes
PrivateTmp=yes
ProtectHome=yes
ProtectSystem=strict
ProtectControlGroups=true
RestrictSUIDSGID=true
RestrictRealtime=true
LockPersonality=true
ProtectKernelLogs=true
ProtectKernelTunables=true
ProtectHostname=true
ProtectKernelModules=true
PrivateUsers=true
ProtectClock=true
SystemCallArchitectures=native
SystemCallErrorNumber=EPERM
SystemCallFilter=@system-service
# EnvironmentFile=-/path/to/env/file  # Optional: if you want to load environment variables from a file.

[Install]
WantedBy=multi-user.target
```

## Updating the bot

If you want to update Draupnir, use the `draupnir` user account to avoid
ownership and permission conflicts.

Stop the bot:

```shell
systemctl stop draupnir
```

Fetch updates from GitHub and check out the version you want:

```shell
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && git fetch --tags && git checkout v3.0.0"
```

Install updated dependencies and rebuild:

```shell
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && npm ci"
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && npm run build"
```

Start the bot again:

```shell
systemctl restart draupnir
```
