---
sidebar_position: 6
sidebar_label: Advanced Docker setup
---

# Advanced Docker setup

:::tip

This guide is for experienced system administrators. If you are
unfamiliar with Docker or system administration in general,
then you should refer to our recommended installation method
of [using Docker with systemd](./systemd).

:::

## Images

Draupnir is available via Github Container Repository and Docker Hub.
GHCR is the recommended distribution pathway for Draupnir images and is found under
[`the-draupnir-project/draupnir`](https://github.com/the-draupnir-project/Draupnir/pkgs/container/draupnir)

We also have our legacy Docker Hub distribution in parallel with GHCR under
[`gnuxie/draupnir`](https://hub.docker.com/r/gnuxie/draupnir/tags)

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

### `main`

The `main` tag will always refer to an image built from the `main`
branch of Draupnir's git repository. You will not experience any
severe breakages by using this tag, but you will want to be present
within the Draupnir support room.

This tag is GHCR Exclusive. Its functionally equivalent to `develop`
tag from Docker Hub.

### Branch Tags

Draupnir GHCR images are released for development branches. This
is especially useful when wanting to do dev testing against feature
branches. All the work for Zero Touch Deployment Stage 1 for example
was using this feature to be tested before it was merged into main.
That testing as done using [matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy)
together with a branch docker image.

These branch docker images are only rebuilt when that branch is pushed
to and only intended for development usage.

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

The container entry-point is shared with the option to deploy Draupnir
as an appservice, and therefore *bot mode* must be explicitly asked
for when providing options with `docker run`. This is done by ensuring
the first argument that gets passed to the container is `bot`.

So for example: o start Draupnir, you could use the following command:
<!-- renovate: docker-tag -->
```bash
docker run --rm -it --name=draupnir -v ./var/lib/draupnir:/data ghcr.io/the-draupnir-project/draupnir:3.1.0 bot --draupnir-config /data/config/production.yaml
```
