# The Dogfood Guide

Welcome to the Dogfood Guide. This document details a semi updated list of who is Dogfooding what and this list serves to inform you of what components are under the most review due to this.


## The List

Out of our installation methods from setup.md the dogfood statuses are

- [Docker](/bot/setup_docker.md) is run by Gnuxie using Develop as the target.
- [Building It](/bot/setup_selfbuild.md) This Install Method is NOT dogfooded currently.
- [matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy/blob/master/docs/configuring-playbook-bot-draupnir.md) is run by Cat using Develop as target.

While its not mentioned in Setup.md the nix module and package for Draupnir that is being worked on by Emma is what Emma is running. This package is always tied to a release of Draupnir and does not track git.

And as for Install methods for the appservice mode the statuses are as follows

- [Docker](/appservice/appservice.md) Run by MTRNord on a special derivative branch under K8s and this branch is currently not tracking 2.0 waiting for the work of untangling the merge mess to be done on their end.
- Building It: Not run by any member of the draupnir project.
- [matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy/blob/master/docs/configuring-playbook-appservice-draupnir-for-all.md) is run by Cat using Develop as target. This method is thought of as being close to bug compatible with Docker due to that its essentially just ansible orchestrating docker containers to exist to be managed by a systemd service.

## E2EE Support

E2EE support is not dogfooded by any party mentioned in this document currently and this means that we can not guarantee that [Pantalaimon](https://github.com/matrix-org/pantalaimon) or the experimental native rust crypto support is working. Especially as the CI does not use these it complicates testing for them.
