---
sidebar_position: 7
sidebar_label: Advanced setup from source
---

# Advanced setup from source

:::tip

This guide is for experienced system administrators. The recommended
installation method is [using Docker with systemd](./systemd).

:::

:::info

This guide is meant to be read in conjunction with
[Draupnir parameters and options](./starting_draupnir).

:::

These instructions are to build and run Draupnir without using
[Docker](./setup_docker.md). You need to have installed Node.js 24 and `npm`.

<!-- renovate: draupnir-install-tag -->
```bash
git clone --branch v3.1.0 --depth 1 https://github.com/the-draupnir-project/Draupnir.git
cd Draupnir
git fetch --tags

npm ci
npm run build

# Copy and edit the config. It *is* recommended to change the data path,
# as this is set to `/data` by default for dockerised draupnir.
cp config/default.yaml config/production.yaml
nano config/production.yaml

./draupnir-entrypoint.sh bot --draupnir-config ./config/production.yaml
```

## Legacy versions

For Draupnir versions `v2.9.0` and below, Draupnir requires yarn classic and
Node 20. Instructions are otherwise the same, except instead of using npm to
install dependencies and build, you instead use

```bash
yarn install
yarn build
```
