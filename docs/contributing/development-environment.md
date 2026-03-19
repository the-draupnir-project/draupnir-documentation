---
sidebar_position: 4
sidebar_label: Tests, tools, and environment
---

# Developing Draupnir - tests, tools, and environment

This document is a part of our [contributing documentation](./CONTRIBUTING.md)
and describes how to setup a development environment that we to develop
Draupnir. If you already have your own workflow for typescript projects, you
should still read this document to spot any caveats that might require you to
adapt for our recommendations.

## Cloning the monorepo

Draupnir uses a monorepo architecture for its packages, currently using npm
workspaces without orchestration. The bot and appservice can be found in
`apps/draupnir`, and dependencies such as the `matrix-protection-suite` or
`interface` manager can be found in `packages`.

The project can be installed with `npm install` and built using
`npm run build:all`.

### VSCode

Correct source level debugging might require you to edit your `settings.json`.

```json
    "debug.javascript.terminalOptions": {
        "runtimeArgs": ["--preserve-symlinks"],
        "sourceMaps": true,
        "outFiles": [
            "${userHome}/experiments/Draupnir/apps/**/*.ts",
            "${userHome}/experiments/Draupnir/apps/**/*.js",
            "${userHome}/experiments/Draupnir/packages/**/*.ts",
            "${userHome}/experiments/Draupnir/packages/**/*.js"
          ]
    }
```

## mx-tester

For integration testing, and spinning up a local synapse we use
[mx-tester](https://github.com/matrix-org/mx-tester) and Docker. While not
required for basic changes, it is strongly recommended to use mx-tester or have
the ability to spin up your own development Synapse to develop draupnir
interactively.

To install `mx-tester` you will need the [rust toolchain](https://rustup.rs/)
and Docker. You should refer to your linux distribution's documentation for
installing both, and do not naively follow the instructions from rustup.rs
without doing so first. Then you will be able to install `mx-tester` with
`cargo install mx-tester`. Updating mx-tester can be done by installing
`cargo install cargo-update` and using `cargo install-update mx-tester`, though
you may skip this step until it is necessary to update `mx-tester`.

### Usage

You can then start a local synapse using `mx-tester build`, followed by
`mx-tester up`. You can then use `up`, `down` as many times as you like. If for
some reason you need to get a clean Synapse database, you can just use
`mx-tester down build`.

### Development and testing with mx-tester

If you have docker installed you can quickly get setup with a development
environment by using [mx-tester](https://github.com/matrix-org/mx-tester).

To use mx-tester you will need to have rust installed. You can do that at
[rustup](https://rustup.rs/) or
[here](https://rust-lang.github.io/rustup/installation/other.html), you should
probably also check your distro's documentation first to see if they have
specific instructions for installing rust.

Once rust is installed you can install mx-tester like so.

```bash
cargo install mx-tester
```

Once you have mx-tester installed you we will want to build a synapse image with
synapse_antispam from the Draupnir project root.

```bash
mx-tester build
```

Then we can start a container that uses that image and the config in
`mx-tester.yml`.

```bash
mx-tester up
```

Once you have called `mx-tester up` you can run the integration tests.

```bash
npm run -w apps/draupnir test:integration
```

After calling `mx-tester up`, if we want to play with Draupnir locally we can
run the following and then point a matrix client to http://localhost:9999. You
should then be able to join the management room at `#moderators:localhost:9999`.

```bash
npm run -w apps/draupnir test:manual
```

Once we are finished developing we can stop the synapse container.

```bash
mx-tester down
```

## Debugging

For debugging mx-tester it is recommended to use Visual Studio Code. If you open
the project in visual studio code, press `F1`, type
`Debug: JavaScript Debug Terminal` (see the
[documentation](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal)),
and you should get a terminal from which node will always connect to Visual
Studio Code.

The following sections assume that a Synapse is running and
`config/harness.yaml` has been configured to connect to it. If you are using
`mx-tester` and you use `mx-tester up`, this will already be the case.

### Debugging and reproducing an issue

If you need to debug an issue that is occurring through use in matrix, say the
unban command has stopped working, you can launch draupnir from the JavaScript
Debug Terminal using `npm run -w apps/draupnir test:manual`. This will launch
draupnir using the config found in `config/harness.yaml`. You can now open
https://app.element.io, change the server to `localhost:8081`, and then create
an account. From here you can join the room `#moderators:localhost:9999` (you
will also be able to find it in the rooms directory) and interact with draupnir.

It is recommended to set breakpoints in the editor while interacting and switch
the tab to "DEBUG CONSOLE" (within Visual Studio Code) to evaluate arbitrary
expressions in the currently paused context (when a breakpoint has been hit).

### Running integration tests

The integration tests can be run with
`npm run -w apps/draupnir test:integration`. The config that the tests use is in
`config/harness.yaml` and by default this is configured to work with the server
specified in `mx-tester.yml`, but you can configure it however you like to run
against your own setup.

### Debugging an integration test

To debug the integration test suite from the JavaScript Debug Terminal, you can
start them using `npm run -w apps/draupnir test:integration`. However, more
often than not there is a specific section of code you will be working on that
has specific tests. Running the entire suite is therefore unnecessary. To run a
specific test from the JavaScript Debug Terminal, you can use the script
`npm run -w apps/draupnir test:integration:single test/integration/banListTest.ts`,
where `test/integration/banListTest.ts` is the name of the integration test you
want to run.
