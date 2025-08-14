<!--
SPDX-FileCopyrightText: 2024 Catalan Lover <catalanlover@protonmail.com>

SPDX-License-Identifier: AFL-3.0
-->

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Updating the API Specification

The API specification is generated from the openapi spec in `/api/draupnir-openapi.yaml`.

To update the API specification, run the following command:

```bash
yarn regenerate-api
```

This will regenerate the mdx files in the `docs/api` directory.
