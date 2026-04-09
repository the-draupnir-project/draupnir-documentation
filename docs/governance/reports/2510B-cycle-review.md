---
unlisted: true
---

# 2025-10-B-Review: Longhouse Cycle Review

## Overview

This cycle has culminated in the release of Draupnir v3.0.0, a major milestone
for the long term health of the project. At the beginning of this cycle, we
elected to work on policy room subscription previews, and we released this
feature in v2.8.0 just before December. There was a significant amount of
maintenance to carry out in the wake of this release, both accumulated from
Draupnir development[^simulated] and changes to the toolchain and dependencies.
And this would become the main focus up until today.

<!-- Cspell:ignore NLnet -->

Meanwhile, NLnet supported an
[expansion of the grant goals](https://matrix.org/blog/2026/01/16/this-week-in-matrix-2026-01-16/#draupnir-website)
and Gnuxie also gave a
[talk about the project at FOSDEM](https://fosdem.org/2026/schedule/event/SHYBQ7-draupnir_a_field_report_on_building_community_focussed_t_s_tooling_within_an_ope/).

## Completed work

- Policy room subscription previews. Draupnir now shows all of the changes
  relevant to protected rooms before watching the list.

- Responding to the accessibility and security audits generously provided by
  NLnet. You can read up on the accessibility audit
  [here](https://github.com/the-draupnir-project/Draupnir/issues/997). The
  security report will be released in May, though note this isn't because there
  are security concerns related to Draupnir, we have agreed with matrix.org time
  for them to also read the report and see if the discussion is relevant to any
  of their projects.

- Moved all of the base packages of Draupnir into the main repository and
  migrated package manager from yarn classic to npm
  https://github.com/the-draupnir-project/planning/issues/99. This was a pretty
  big move and it now means that changes to Draupnir's base packages, such as
  the matrix-protection-suite, are now much easier to make in conjunction with
  Draupnir itself. And all our tooling across the packages is now consistent.

- Introduced a lifetime primitive to the matrix-protection-suite for structured
  resource management
  https://github.com/the-draupnir-project/planning/issues/80. This makes it
  impossible to allocate resources dynamically without also providing the
  clean-up for the resource and also an owner. This complements JavaScript's
  [_await using_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/await_using),
  which is focussed on resources with dynamic extent, by providing a mechanism
  that can also be used to manage resources with indefinite extent.

- We're staring down a long road towards making the entire core of Draupnir and
  the matrix-protection-suite entirely deterministic, fault tolerant, and able
  to utilise distributed compute. We're calling this work the _deterministic
  projection system_[^dps], and we used the _policy list subscription preview_
  development to implement and evaluate some of the general abstractions for a
  deterministic core. And this was a success, you can read about it here
  https://github.com/the-draupnir-project/planning/pull/94.

- We conducted an exploration into how to improve our approach to unit testing
  https://github.com/the-draupnir-project/planning/pull/116. We developed a
  utility that would let us describe the expected behaviour of an interface
  before considering its implementation. Which brings the benefit of test driven
  development forward and concretely away from implementation detail. We also
  had problems with how tests can become a messy adhoc imperative encoding of
  behaviour. And we think we have learned how to manage this while maintaining
  structure and documenting why the behaviour exists.

- We developed an MSC so that clients could understand and send bot commands
  https://github.com/matrix-org/matrix-spec-proposals/pull/4391. This
  essentially brings parts of the interface-manager system Draupnir has to the
  Matrix spec. There's still work to do to introduce prompts and responses.

## Direction

Continued maintenance of the project for the long term is secure. But continued
development (including bug fixing) is much less so. It feels like it is the
correct time to start looking at how we can make Draupnir more sustainable more
directly. We're going to be looking at options such as open collective for this,
but we probably need to think carefully about how to launch this and make it
effective.

Cat has begun contributing minor fixes and improvements to the appservice and
Gnuxie is probably going to continue to invest in bringing Cat up to speed with
programming on the project.

In the wake of a lot of speculation from discord communities about moving to
Matrix, it would make sense to focus next on improving the onboarding of
community moderators to Draupnir via the
[integrated appservice](https://marewolf.me/posts/draupnir/24-nlnet-goals.html#goal-integrated-appservice)
project goals.

## Findings and challenges

### Burnout and loss of capacity

Gnuxie has been experiencing burn out on and off for most of 2025 and relapsed
shortly after the release of v2.8.0. And a significant amount of capacity was
lost. The project stayed moving and Gnuxie is back and has since documented some
of the causes for her burnout, and you can read that analysis
[here](https://marewolf.me/posts/draupnir/26/01.html).

[^dps]:
    We intentionally wanted the abbreviation to clash with _damage per second_
    from video games.

[^simulated]:
    We had made a shift to showing users "intent" over "effects", even when
    those effects (such as banning a room member) were previously simulated.
    Originally capability providers were designed to show the effects of
    watching a certain list or enabling a protection. And Draupnir still works
    this way. By adding the intent step we can make clearer UX and it also adds
    a step towards generalising Draupnir's internals into an incremental
    deterministic projection system.
