---
sidebar_position: 7
sidebar_label: Advanced setup from source
---

# Advanced setup from source

:::tip

This guide is for experienced system administrators.
The recomended installation method is [using Docker with systemd](./systemd).

:::

:::info

This guide is meant to be read in conjunction with [Draupnir parameters and options](./starting_draupnir).

:::

These instructions are to build and run draupnir without using [Docker](./setup_docker.md).
You need to have installed `yarn` 1.x and Node 18.

```bash
git clone https://github.com/the-draupnir-project/Draupnir.git
cd draupnir
git fetch --tags

yarn install
yarn build

# Copy and edit the config. It *is* recommended to change the data path,
# as this is set to `/data` by default for dockerized draupnir.
cp config/default.yaml config/production.yaml
nano config/production.yaml

node lib/index.js --draupnir-config ./config/production.yaml
```
