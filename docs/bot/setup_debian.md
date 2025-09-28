---
sidebar_position: 6
sidebar_label: Installation on Debian
---

<!-- cspell:ignore SUIDSGID, EPERM, tunables -->

# Installation on Debian

:::tip

These are instructions for the installation of draupnir from source on Debian.
This installation method is intended for experienced sysadmins.

:::

## Prerequisites & System User

### Install System Packages

Update `apt` and install required tools **as your regular sudo user**:

```bash
apt update
apt install -y git curl sudo
```

- `git` : version control
- `curl` : data transfer
- `sudo` : execute commands as root

### Create User

Create the `draupnir` system user (no login shell):

```bash
useradd --system --home-dir /opt/draupnir draupnir
```

### Install Node.js (v20)

Draupnir requires Node.js 20.x. Install via NodeSource:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt update
apt install -y nodejs
```

Verify Node.js version:

```bash
node --version
# Should output v20.x.x
```

## Install Yarn

Still as your sudo user:

```bash
npm install --global yarn
yarn --version
```

## Setup Directories & Permissions

Clone the repository:

```bash
git clone https://github.com/the-draupnir-project/Draupnir.git /opt/draupnir
```

Create the data directory:

```bash
mkdir -p /var/lib/draupnir
```

Change ownership to `draupnir`:

```bash
chown draupnir:draupnir /var/lib/draupnir
chown -R draupnir:draupnir /opt/draupnir
```

## Build Draupnir

Switch to the `draupnir` user:

```bash
su - draupnir
```

Then within that shell:

Fetch all tags:

```bash
cd /opt/draupnir
git fetch --tags
```

Check out the latest tag:

```bash
latest_tag=$(git tag --sort=version:refname | tail -n1)
git checkout "$latest_tag"
```

### Install Dependencies & Build

Run as `draupnir`:

```bash
yarn install
yarn build
```

- `yarn install` installs dependencies
- `yarn build` compiles TypeScript into `lib/`

## Configure Draupnir

Still under `draupnir`:

Copy the default config:

```bash
cp /opt/draupnir/config/default.yaml /opt/draupnir/config/production.yaml
```

Update the data path:

```bash
sed -i 's|dataPath: "/data/storage"|dataPath: "/var/lib/draupnir"|' /opt/draupnir/config/production.yaml
```

Edit production settings:

```bash
nano /opt/draupnir/config/production.yaml
```

Set at least:

- `homeserverUrl:` (e.g., `https://matrix.example.com`)
- `rawHomeserverUrl:` (e.g., `https://matrix.example.com`)
- `accessToken:` (your bot's access token)
- `managementRoom:` (e.g., `!roomid:example.com`)

Exit the `draupnir` user shell:

```bash
exit
```

## Create Systemd Service

As your sudo user, create `/etc/systemd/system/draupnir.service`:

```ini
[Unit]
Description=Draupnir
#After=matrix-synapse.service       # You can enable this if your matrix server is synapse, otherwise you might want to change it to the service that starts your homeserver
#After=matrix-synapse.target        # You can enable this if your matrix server is synapse and you have installed workers via the official instructions

[Service]
ExecStart=/usr/bin/node /opt/draupnir/lib/index.js --draupnir-config /opt/draupnir/config/production.yaml
WorkingDirectory=/opt/draupnir
Restart=always
User=draupnir
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
SyslogIdentifier=draupnir

ReadWritePaths=/opt/draupnir
ReadWritePaths=/var/lib/draupnir
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
# EnvironmentFile=-/path/to/env/file  # Optional: if you want to load environment variables from a file

[Install]
WantedBy=multi-user.target
```

Reload systemd, enable and start:

```bash
systemctl daemon-reload
systemctl enable --now draupnir
systemctl status draupnir
```

# Update Draupnir

When a new release is out:

Stop service:

```bash
systemctl stop draupnir
```

Pull updates & fetch tags as `draupnir`:

```bash
sudo -u draupnir bash <<'EOF'
cd /opt/draupnir
git pull
git fetch --tags
latest_tag=$(git tag --sort=version:refname | tail -n1)
git checkout "$latest_tag"
yarn install
yarn build
EOF
```

Restart service:

```bash
systemctl restart draupnir
```
