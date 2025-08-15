---
sidebar_label: Room upgrades
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Room upgrades

:::tip

It is recommended that you use Draupnir v2.6.1 or above before upgrading rooms.

See https://github.com/the-draupnir-project/planning/issues/44 for progress on
room upgrade features.

:::

## Hydra disclosure

:::note

This advice is provided in relation to the
[hydra security disclosure](https://matrix.org/blog/2025/08/project-hydra-improving-state-res/).

:::

We strongly recommend communities do not upgrade their rooms until Draupnir
provides a way to upgrade rooms itself.

This is because the upgrade UX on Matrix is currently poor, and if managed
naively it is possible to down your own community by mistake.

Additionally it is taking time for community servers to update to the latest
releases that support room V12. The result of which is that many users will be
unable to participate in the replacement rooms, and may forget to join them as
room activity decays. This may mean that they never join the replacement room if
you upgrade too soon.

If you have done your own research, and you are willing to accept the risks and
take responsibility, then the rest of this page does offer advice about the
current level of support in Draupnir for room upgrades.

## Upgrading protected rooms

When protected rooms are upgraded, Draupnir will automatically join and protect
the replacement room. This behaviour is provided as a part of the
`RoomsSetBehaviour` protection, which is enabled by default.

Please follow the
[official guide](https://matrix.org/docs/communities/administration/) for how to
upgrade rooms.

## Upgrading policy rooms

:::danger

Just don't do this yet. You do not know better. Please speak to us in
#draupnir:matrix.org if you think that you do. But you do not.

:::

Policy rooms may only be upgraded at the moment with the expectation that
policies will not be moved across to the new room, and that the old policy room
will need to remain watched. Draupnir will not currently do anything if it
notices a policy room has been upgraded. Please see
https://github.com/the-draupnir-project/planning/issues/44.

## Upgrading the management room

:::danger

Just don't do this yet. There is no reason to as the management room is a
private room. You do not know better. Please speak to us in #draupnir:matrix.org
if you think that you do. But you do not.

:::

Upgrading the management room is not supported currently. This is due to data
that is stored within the management room that would need to be copied into the
replacement room. And doing so can result in a loss of data to protection
settings.
