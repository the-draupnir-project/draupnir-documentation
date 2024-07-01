---
sidebar_position: 1
sidebar_label: Setting up Draupnir
---

# Setting up Draupnir

This page describes how to setup Draupnir as a bot user that runs
against any Matrix homeserver. This includes homeservers that you do
not administer.

## Overview

There are a number of steps to complete to get Draupnir running:

1. [Create an account](./setup_draupnir_account) for Draupnir to use.
    - Optionally disabling rate limits for this account.
2. Review our notes on [encryption](./encryption).
3. [Create a management room](./setup_management_room) for Draupnir to use.
4. [Install Draupnir](#installation) on your system.
5. [Fill out Draupnir's config file](./starting_draupnir) to complete
   the installation.
6. Start using Draupnir by referring to the [moderator's guide](../moderator/setting-up-and-configuring).

## Installation

Draupnir can be installed in three ways, via Docker, building it
yourself from source, or via
[matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy/blob/master/docs/configuring-playbook-bot-draupnir.md).

:::tip

We strongly recommend new or inexperienced system administrators to
follow our guide for [installation with Docker and
systemd](./systemd).  If you are preparing to administer a new
homeserver, then we strongly recommend using
[matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy).

:::

See the following links for corresponding installation documentation:

- [Installation with Docker and systemd](./systemd.md) - The
  recommended and supported setup for users who do not wish to use
  matrix-docker-ansible-deploy.
- [matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy/blob/master/docs/configuring-playbook-bot-draupnir.md) -
  the most convenient way to run Matrix services. Recommended if you
  are preparing a new homeserver or are already using
  matrix-docker-ansible-deploy.
- [Advanced Docker setup](./setup_docker.md) - for experienced system
  administrators.
- [Advanced setup from source](./setup_selfbuild.md) - for experienced
  system administrators.
