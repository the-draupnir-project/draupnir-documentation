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

## 1. Prerequisites & System User

1. Ensure you have a user with `sudo` privileges.
2. Create the `draupnir` system user (no login shell):

   ```bash
   sudo useradd --system --home-dir /opt/draupnir --shell /usr/sbin/nologin draupnir
   ```

## 2. Install System Packages

Update `apt` and install required tools **as your regular sudo user**:

```bash
sudo apt update
sudo apt install -y git curl sudo
```

- `git` : version control
- `curl` : data transfer
- `sudo` : execute commands as root

## 3. Install Node.js (v20)

Draupnir requires Node.js 20.x. Install via NodeSource:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt update
sudo apt install -y nodejs
```
## 4. Install Yarn

Still as your sudo user:

```bash
sudo npm install --global yarn
yarn --version
```

## 5. Prepare Directories & Permissions

1. Clone the repository:

   ```bash
   git clone https://github.com/the-draupnir-project/Draupnir.git /opt/draupnir
   ```

2. Create the base directory and data directory:

   ```bash
   sudo mkdir -p /opt/draupnir/datastorage
   ```

3. Change ownership to `draupnir`:

   ```bash
   sudo chown -R draupnir:draupnir /opt/mod-bot
   ```

## 6. Clone Repository & Fetch Tags

Switch to the `draupnir` user:

```bash
sudo -u draupnir -i
```

Then within that shell:

1. Fetch all tags:

   ```bash
   cd /opt/draupnir
   git fetch --tags
   ```

2. Check out the latest tag:

   ```bash
   latest_tag=$(git tag --sort=version:refname | tail -n1)
   git checkout "$latest_tag"
   ```

## 7. Install Dependencies & Build

Run as `draupnir`:

```bash
yarn install
yarn build
```

- `yarn install` installs dependencies
- `yarn build` compiles TypeScript into `lib/`

## 8. Configure Draupnir

Still under `draupnir`:

1. Copy the default config:

   ```bash
   cp /opt/draupnir/config/default.yaml /opt/draupnir/config/production.yaml
   ```

2. Update the data path:

   ```bash
   sed -i 's|dataPath: "/data/storage"|dataPath: "/opt/draupnir/datastorage"|' /opt/draupnir/config/production.yaml
   ```

3. Edit production settings:

   ```bash
   nano /opt/draupnir/config/production.yaml
   ```

   Set at least:

   - `homeserverUrl:`
   - `rawHomeserverUrl:`
   - `accessToken:`
   - `managementRoom:`

## 9. Create Systemd Service

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
sudo systemctl daemon-reload
sudo systemctl enable --now draupnir
sudo systemctl status draupnir
```

## 10. Update Draupnir

When a new release is out:

1. Stop service:

   ```bash
   sudo systemctl stop draupnir
   ```

2. Pull updates & fetch tags as `draupnir`:

   ```bash
   sudo -u draupnir -i bash <<'EOF'
   cd /opt/draupnir
   git pull
   git fetch --tags
   latest_tag=$(git tag --sort=version:refname | tail -n1)
   git checkout "$latest_tag"
   yarn install
   yarn build
   EOF
   ```

3. Restart service:

   ```bash
   sudo systemctl restart draupnir
   ```
