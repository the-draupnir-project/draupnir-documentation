---
sidebar_position: 4
sidebar_label: Draupnir parameters and options
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Draupnir parameters and options

:::info

This section is supposed to be read in conjunction with one of the
following installation routes:

1. [Installation with Docker and systemd](./systemd) (recommended).
2. [Installation on Debian](./setup_debian)
3. [Advanced Docker setup](./setup_docker).
4. [Advanced setup from source](./setup_selfbuild).

:::

Before you proceed with the installation method, you will need to be
aware of the files and directories that Draupnir requires access to.

## The configuration file

Most of Draupnir's configuration is done through a YAML file. The path
of this config is provided with the `--draupnir-config` option.

Please go through [the sample configuration file's
documentation](https://github.com/the-draupnir-project/Draupnir/blob/main/config/default.yaml),
download it, and rename it `production.yaml`. You should read over the
different options and edit them to your liking. This is the file that
will be refered to as "the config" throughout Draupnir's
documentation. Your copy of the config file should be named
`production.yaml` and placed within `./config/production.yaml`
relative to [the data directory](#the-data-directory) (explained
below). Where your data directory is will depend on the
installation method you are using, so please refer to the respective
guide that you are following.

## The data directory

:::warning

Do not change the value for `dataPath` if you are using Docker, this
is the path that Draupnir will use to find the path within the Docker
container, not the host filesystem. Please see either [installation
with Docker and systemd](./systemd) or [advanced Docker
setup](./setup_docker).

:::

Draupnir stores persistent data to a directory called the *data
directory*. This is a directory that Draupnir must have read and write
access to. This is configured using the toplevel `dataPath` option
within Draupnir's configuration.

## Secret Management

If you need to use a secret management system, such as systemd's
service credentials, the following options are available at the
command line:

- The access token can be provided with the option `--access-token-path`.
- The Pantalaimon password can be provided with the option
  `--pantalaimon-password-path`.

These are files that Draupnir will load the associated secrets from.
