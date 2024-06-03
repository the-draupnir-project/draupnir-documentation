---
sidebar_position: 6
sidebar_label: Advanced Docker setup
---

# Advanced Docker setup

:::tip

This guide is for experianced system administrators. If you are
unfamiliar with Docker or system administration in general,
then you should refer to our recommended installation method
of [using Docker with systemd](./systemd).

:::

## Images

Draupnir is available as an image from Docker Hub as
[`gnuxie/draupnir`](https://hub.docker.com/r/gnuxie/draupnir/tags).
Draupnir is available under the following release tags:

### `latest`

The latest tag will always refer to the latest stable release. This
tag excludes any pre-releases. Please be aware, depending on the
container system you are using, that this means your Draupnir can
implicitly upgrade when restarted. Which may or may not be a problem
for your use case.

### Version tags - `vX.X.X`

:::warning

Releases and tags marked with `-beta.*` are pre-releases and are
intended for advanced users who are providing feedback via our support
room,
[#draupnir:matrix.org](https://matrix.to/#/#draupnir:matrix.org). You
are welcome to participate, but expect these releases to be of lower
quality and to contain bugs.

:::

Version tags are available for individual releases, you can find what
releases are available on the [release page on
GitHub](https://github.com/the-draupnir-project/Draupnir/releases).
If there are pre-releases, you should scroll down until you find the
latest release.

### `develop`
The `develop` tag will always refer to an image built from the `main`
branch of Draupnir's git repository. You will not experience any
severe breakages by using this tag, but you will want to be present
within the Draupnir support room.

## Running with Docker

Before any other steps, a configuration file must be prepared. You
should read through the [configuration and options
guide](./starting_draupnir) alongside this one as some sections
require cross referencing.

You will also need to have chosen a place on your system to serve as
the data directory for Draupnir. For most users this will be
`/var/lib/draupnir`.

### Docker Run

:::info

Arguments to Draupnir itself from `docker run` begin with `bot`.

:::

The container entrypoint is shared with the option to deploy Draupnir
as an appservice, and therefore *bot mode* must be explicitly asked
for when providing options with `docker run`. This is done by ensuring
the first argument that gets passed to the container is `bot`.

So for example: o start Draupnir, you could use the following command:

```bash
docker run --rm -it -v --name=draupnir ./var/lib/draupnir:/data gnuxie/draupnir:latest bot --draupnir-config /data/config/production.yaml
```
