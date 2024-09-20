# Setting up Draupnir on Debian
These are instructions for the installation of draupnir from source on Debian  
This installation method is intended for experienced sysadmins.

## installation
install git curl and sudo
```shell
apt update && apt install -y git curl sudo
```
install node 18 from the node source repo, the full instructions can be found at https://github.com/nodesource/distributions
```shell
curl -fsSL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt update && apt install nodejs -y
```
install yarn via npm
```shell
npm install --global yarn                                                                                                                    # install yarn via npn
```
create the directory to clone the repo
```shell
mkdir /opt/mod-bot  
```
clone the repo
```shell
git clone https://github.com/the-draupnir-project/Draupnir.git /opt/mod-bot/Draupnir
```
create the directory for draupnirs datastorage
```shell
mkdir /opt/mod-bot/Draupnir/datastorage
```
add typescript and corepack
```shell
yarn global add typescript
yarn global add corepack
```
add a user to run the bot  
this user will be used by systemd to run the bot since there is no need to run it with root permissions
```shell
useradd -m draupnir  
```
give ownership of the draupnir directory to the bot user
```shell
chown -R draupnir:draupnir /opt/mod-bot/Draupnir
```
build the bot with yarn
```shell
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && yarn install"
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && yarn build"
```
## Edit the config
copy the default config to production.yaml
```shell
cp /opt/mod-bot/Draupnir/config/default.yaml /opt/mod-bot/Draupnir/config/production.yaml
```
change the path of the datadirectory from the default to the directory we created earlier since the default dir is for the docker setup
```shell
sed -i 's|dataPath: "/data/storage"|dataPath: "/opt/mod-bot/Draupnir/datastorage"|' /opt/mod-bot/Draupnir/config/production.yaml  
```
edit the production config:  
the most important things to configure are the `homeserverUrl:`, the `rawHomeserverUrl:`, the `accessToken:` and the `managementRoom:`
```shell
nano /opt/mod-bot/Draupnir/config/production.yaml
```

## Example systemd service
copy this to `/etc/systemd/system/draupnir.service` and enable with `systemctl enable draupnir`, then simply start with `systemctl start draupnir`  

!!IMPORTANT!!  

before you attempt to start the service, make sure that the management room for draupnir exists on your homeserver and is joinable by draupnir (either public room or invite the bot account in advance)

```ini

[Unit]
Description=Draupnir
#After=matrix-synapse.service       # You can enable this if your matrix server is synapse, otherwise you might want to change it to the service that starts your homeserver
#After=matrix-synapse.target        # You can enable this if your matrix server is synapse and you have installed workers via the official instructions

[Service]
ExecStart=/usr/bin/node /opt/mod-bot/Draupnir/lib/index.js --draupnir-config /opt/mod-bot/Draupnir/config/production.yaml
WorkingDirectory=/opt/mod-bot/Draupnir
Restart=always
User=draupnir
Environment=PATH=/usr/bin:/usr/local/bin
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
# EnvironmentFile=-/path/to/env/file  # Optional: if you want to load environment variables from a file

[Install]
WantedBy=multi-user.target
```
## Updating the bot
if you want to update && upgrade everything, use the draupnir useraccount in order to not create conflicts with filepermissions/ownerships

stop the bot
```shell
systemctl stop draupnir
```
pull updates from github with
```shell
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && git pull"
```
install/update yarn
```shell
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && yarn install"
```
build the bot
```shell
sudo -u draupnir bash -c "cd /opt/mod-bot/Draupnir && yarn build"
```

then simply start the bot again with
```shell
systemctl restart draupnir
```
