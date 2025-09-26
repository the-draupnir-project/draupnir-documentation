---
sidebar_position: 7
sidebar_label: Advanced setup from source
---

# Advanced setup from source

:::tip

This guide is for experienced system administrators.
The recommended installation method is [using Docker with systemd](./systemd).

:::

:::info

This guide is meant to be read in conjunction with [Draupnir parameters and options](./starting_draupnir).

:::

These instructions are to build and run draupnir without using [Docker](./setup_docker.md).
You need to have installed `yarn` 1.x and Node 20.

## 1. Clone the Repository & Fetch Tags

1. Clone Draupnir and enter the directory
   ```bash
   git clone https://github.com/the-draupnir-project/Draupnir.git draupnir
   cd draupnir
   ```
2. Fetch all tags
   ```bash
   git fetch --tags
   ```
3. Check out the latest release tag
   ```bash
   latest_tag=$(git tag --sort=version:refname | tail -n1)
   git checkout "$latest_tag"
   ```

## 2. Install Dependencies & Build

```bash
yarn install
yarn build
```

- `yarn install` installs all required packages
- `yarn build` compiles the TypeScript source into `lib/`

## 3. Configure Draupnir

1. Copy the default configuration
   ```bash
   cp config/default.yaml config/production.yaml
   ```
2. Edit `production.yaml`
   ```bash
   nano config/production.yaml
   ```
3. **Recommended:** change the data path  
   The default `dataPath: "/data"` is meant for Docker setups. Point it to wherever you prefer, for example:
   ```yaml
   dataPath: "/var/lib/draupnir/storage"
   ```

## 4. Run Draupnir

Start Draupnir with your production configuration:

```shell
node lib/index.js --draupnir-config ./config/production.yaml
```
