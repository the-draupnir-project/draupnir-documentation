---
sidebar_label: Releasing Draupnir
---

<!-- cspell:ignore TWIM -->

# Releasing Draupnir

To produce a release, checkout main.

Update `CHANGELOG.md`, usually this is done by reading the commits, and checking
closed issues. And taking the time to acknowledge all contributors. Including
those from the support room.

Once this is done, stage the changelog in git.

Use `yarn version --minor` (or `--major` or `--patch`) to create a tagged commit
and change all the numbers. This was also automatically include the staged
changelog.

To create a beta release use `yarn version --preminor --preid beta`.

Now push the commit to GitHub with `git push --atomic origin main v2.3.0`

Go to the releases section on GitHub and copy in the CHANGELOG. Make sure to
check beta releases as a pre-release and do not set them to be the latest
release.

Publishing a release causes the docker images do be built.

You can wait for those GitHub actions to complete before announcing the release
in other channels such as TWIM.
