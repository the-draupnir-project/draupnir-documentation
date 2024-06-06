---
sidebar_position: 4
sidebar_label: Installation with Docker and systemd
---

# Installation with Docker and systemd

If docker is installed on your system, installing Draupnir is as
simple as creating the following systemd unit file.

## Pre-requisites

This guide assumes you have read over the different options available
for starting Draupnir and understand the requirements Draupnir
has, which you can read [here](./starting_draupnir).

## Preparing your system

The first thing that you will need to do is create the directory
`/var/lib/draupnir`, which will be used to store Draupnir's
persistent data.

You will then want to copy your configuration file for Draupnir to
`/var/lib/draupnir/config/production.yaml`.

Then you will want to copy the following systemd unit file to
`/etc/systemd/system/draupnir.service`.

```
[Unit]
Description=Draupnir Docker Container
After=docker.service
Requires=docker.service

[Service]
Type=simple
ExecStartPre=-/usr/bin/env sh -c '/usr/bin/env docker stop --time=3 draupnir 2>/dev/null || true'
ExecStartPre=-/usr/bin/env sh -c '/usr/bin/env docker rm draupnir 2>/dev/null || true'

ExecStart=/usr/bin/docker run --rm --pull=always --name=draupnir -v /var/lib/draupnir:/data gnuxie/draupnir:latest bot --draupnir-config /data/config/production.yaml

ExecStop=-/usr/bin/env sh -c '/usr/bin/env docker stop --time=3 draupnir 2>/dev/null || true'
ExecStop=-/usr/bin/env sh -c '/usr/bin/env docker rm draupnir 2>/dev/null || true'

Restart=always
RestartSec=30

[Install]
```

Finally run `systemctl enable draupnir.service` to tell systemd to
start Draupnir the next time your system boots.

## Managing Draupnir

Now you can start draupnir with `systemctl start draupnir.service`.

If you need to access the logs, you can use
`journalctl -u draupnir.service`. If you need to follow the logs
because you want to watch Draupnir start, you can use `-f` option.

Draupnir can then be restarted or stopped with `systemctl restart
draupnir.service` and `systemctl stop draupnir.service` respectively.
