---
sidebar_position: 1
sidebar_label: Zero Touch Deployment
---

# Zero Touch Deployment

## Introduction

Zero Touch Deployment for Draupnir is the Draupnir side of empowering
deployment methods like [matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy)
to offer a so called Turnkey deployment experience.

Instead of having to mess around with manually creating management rooms
and the whole dance of getting a the appservice running Zero Touch Deployment
trivialises the installation process.

## Zero Touch Deployment for Appservice mode

Zero Touch Deployment for Appservice mode only entailed having to make the appservice
configure its own admin room as all the managed install flows for the appservice
like the one offered in matrix-docker-ansible-deploy already did everything else.

Zero Touch Deployment for Appservice mode does not have any currently known upgrades
that can be made to it except for the idea of making the appservice puppet the person
listed in `initialManager` to accept the invite. That isn't deemed as necessary.

## Zero Touch Deployment for Bot Mode

Zero Touch Deployment for Draupnir Bot mode has been split into 2 separate stages.

Stage 1 is shared with the appservice and has the bot create its own management room.
This provides a much easier installation experience as you no longer have to deal with
creating the management room.

Stage 2 is having Draupnir be able to manage its own secrets to login to the homeserver
using for now username password. In the future use of native next gen auth APIs may be
under consideration.
