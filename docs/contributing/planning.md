# Planning

Planning is essential to project management and organising work. Contributors
are free to make plans however they please or make none at all. However, the
_root contribution circle_ uses a specific model in order to document progress
and assess the future.

This system helps the _root contribution circle_ in several ways:

- Principally helps us to explore problems more deeply before working on a
  solution to a particular problem. As otherwise it is easy to converge on a
  solution without considering the bigger picture.
- Keeps work and planning transparent and easy to share with the _draupnir
  longhouse assembly_. So it is easy to explain to stakeholders what is being
  worked on and why.
- Makes it easier to check that work is implemented correctly and to a high
  quality.
- Helps new contributors to onboard as the tasks show them which parts of the
  project to change.
- Preserves a record of decisions and history of problem exploration that is
  well documented.

## Planning essentials

In order to understand the planning system, you need to understand some basic
rules of planning and the trade-off between certainty and agility.

The more concrete a plan is, the less agile it is. And as we know requirements
and the world is never static, and plans need to adapt over time. The trick to
managing this is to make sure that plans become more detailed the closer they
are to being implemented. And that certainty about the cost of plans can only
become more detailed as more work is done to develop them. Keeping plans
abstract and untied to implementation keeps them agile.

The same is also true for exploring a problem space, you learn much more about
problems while working on solutions to them than you do by hypothesizing
solutions to them. And this is another reason why plans need to be adaptive.

This is also why it is important for work to be incremental. It allows problems
to be explored in smaller units, while keeping other aspects of a plan abstract,
and thus adaptive to change from exploration.

The final mechanic to balance is that by concreting plans later, we are more
likely to know more about the problem, and less likely to have to rework the
solution. If the plans that we turn concrete are smaller, the less risky the
plan is and we give ourself more opportunity to learn.

## Overview

Draupnir's planning system is layered:

Problem -> Bet -> Solution -> Increment -> Task.

Bet, Increment, and Task serve planning purposes, while Problem and Solution
serve design purposes.

- Problems give us high level context of large systemic issues or feature
  requests.

- Solutions give us an exploration and design space for solving a problem.

- Bets give us high level abstract plans to explore a solution, wagered against
  the value we gain from succeeding, and the maximum value we can commit to
  exploration before sunk-cost.

- Increments give us concrete plans defined in terms of deliverables to learn
  about a solution to a problem and provide value. That can be delivered within
  a longhouse cycle.

- Tasks provide very focussed and details plans for units of work.

So the layers really exist in two tiers:

- Planning tier: Bet -> Increment -> Task.
- Design tier: Problem -> Solution.

Both interact and feed each other.

## Problems

Problems are more of a strategic mechanism than a planning mechanism. They
provide the context that allow plans to be made. And provide an adapting rolling
discussion about a problem based on experience gained from exploration.

After triage issues are consolidated into a "bigger picture" discussion that
captures and describes the problem. This is done at as higher level as possible
without implementation detail. It is extremely important to refrain from the
temptation to describe the problem in a way that precludes it to a specific
solution. Keeping the problem abstract gives us the opportunity to consider our
options and the trade-offs with each of them. This is strategically significant
as without this step, the consideration likely will not happen.

Problems should have the following properties:

- A list of actors involved.
- The current workflow for the problem, how does the system already work
- The problems with this workflow and what commands / prompts / protections are
  involved in the interaction.
- A concise high level description of what the actors are attempting to achieve
  with the current workflow in the absence of implementation detail, commands,
  prompts, or protections.
- A specific high level analysis of the problem in the absence of implementation
  detail.
- No requirements or language that attempts to form requirements is used at all.
  This is not the place for requirements engineering. As this risks sneaking
  solutions into the problem statement

Problems should also record the following:

- A list of issues that are considered
- The triage score of those issues
- A list of solutions that have been explored
- Possibly an analysis of why a solution failed if exploration brought us back
  to the problem space.

## Bets

:::note

Bet's are derived from James's shore's blog post
[_the accountability problem_](https://www.jamesshore.com/v2/blog/2025/the-accountability-problem).

:::

Bets are provisional hypotheses about high level objectives. They are not
designs or solutions, they encapsulate the value of pursuing an objective and
the maximum material cost we are willing to pay to achieve the objective. These
are important to make because they allow us to be accountable to the use of
resources with respect to value. Which is not only important for strategic
management.

Bets are also the long-term planning unit that we expose to third parties to
discuss material support for the project. And we have to be able to do this at a
high level, further away from the planning horizon so that we can maintain
agility[^agility-experience].

### Present value and wager

Bets are crucially defined in terms of their _present value_ (which is what we
gain if the bet succeeds) and the _wager_ (what we are willing to commit to the
bet, and lose, before it is recognised as a failure).

- Opportunity cost: What is lost or gained by pursuing an objective relative to
  other objectives, and within the environment. For example, if there is an
  ongoing attack vector being used in the wild that there is a designed solution
  for, there is lost opportunity by not working on it.

- Value, what is valuable to the draupnir project is contributor time, user pain
  (see [triaging](./triaging.md)), and opportunity cost.

- Present value: The user pain erased, the opportunistic value, the learning
  value in terms of problem exploration, the compound value in terms of
  advancing us to other goals.

- Wager, the amount of contributor time that we're willing to wager against the
  bet before it's time to move on or create a new bet. This is not, and cannot
  be how much the bet _costs_ or an estimate of cost because we don't know
  enough about the problem at this high level. It's a commitment of the maximum
  value we are prepared to lose in order to pursue the objective. Because we
  might get no value at all from pursuing the bet. This stops us from getting
  stuck in sunk cost.

### Commitment

This is an explanation of what the objective is, which problems we are solving
or making progress on, and any other context.

### Other risks that can fail the bet

These are other factors that can fail the bet other than exhausting the wager.
E.g. if an MSC doesn't pass, or if another third party solution arises.

### Deliverable meaningful results

These are used to know how we know if bet has produced its intended value. They
are not a specification, success or acceptance criteria, because we need
agility. The outcomes should not prescribe implementation detail. They are very
abstract and refer to solving associated problems, and abstract deliverables.

These are here so that we can demonstrate that the bet has succeeded to
stakeholders through public artefacts, such as releases of features,
documentation, or publication of research results.

## Solution hypotheses

Once a problem has been described, a solution can be designed. These are
speculative designs about how to solve a problem, capturing and recording
insight at any time while context is fresh on a contributor's mind. The purpose
is to preserve ideas and thought.

Solutions should have the following properties:

- An approach for how the problem is going ot be solved.
- An overview of any risks with the approach or any trade-offs.

If a line of work through increments makes a discovery that compromises the
solution, then a new solution should be created after the problem is updated.

Solutions should be iterated from feedback experienced from working on tasks and
increments.

## Increment

:::note

Increments are derived from
[James Shore and Shane Warden's adaptive planning](https://www.jamesshore.com/v2/books/aoad2/adaptive_planning)
book.

:::

An increment represents a small end-to-end unit of delivery that advances a
bet's commitment. The outcomes are always observable and are completable within
one longhouse cycle. The bet commitment is advanced by either creating value or
by providing insight into solutions.

The observable value is usually:

- A new feature being released in Draupnir.
- Documentation being published.
- New infrastructure being deployed and accessible to stakeholders.
- New understanding of a problem or solution that is written up in the planning
  system.

Discovery tasks should be included under increments that have uncertainty or
need refinement.

Increments include details about:

- The bet they are associated with and how they advance the commitment.
- The success criteria with reference to actors.
- A list of tasks that break down the solution into workable units.
- An overview of any planning risks with the approach or any trade-offs.

## Deliverable Tasks

Once a solution hypothesis has been designed. The solution needs to be broken
down into instructions for work that can be delivered. These tasks are the only
planning issue that can be reliably estimated in development cycles with.

Tasks are also used to document any work that has been undertaken.

Tasks should explain very specifically what protections, commands, library code
is going to be edited and how.

Tasks can be thought of as "document what you intend to change and work on
before you change it". It helps to build a picture of the size of the task
without actually committing to or doing much work. They also help contributors
less familiar with the project pick up work easily.

Solutions may have one task which is to simply explore the problem space and
write up the other tasks. A workload cycle would then simply only include this
one task.

Tasks typically include:

- A high level description of the task.
- A description of what pieces of software are going to be changed.
- The acceptance criteria for the task.
- The details of any work undertaken on the task.

For a concrete problem, Tasks should typically be created for:

- Implementation how-to for a specific part of a deliverable.
- Regression test for a piece of functionality.
- End-user documentation is to be created for a deliverable.
- Implementation how to for a library change that may be required.
- Discovery placeholders when library changes have other dependants.
- Development documentation for new patterns or abstractions.

For a planned problem, Tasks should be created for:

- Research and planning tasks for deriving or exploring a solution.
- Refinement placeholders when solutions remain abstract.

## Review

Work that is completed should first be reviewed against the solution, and then
reviewed against the original problem

## Success vs acceptance criteria

Success criteria are related to solutions, they're related to the problem and
are always grounded with actors.

Acceptance criteria aren't grounded with actors and are specific to making sure
important aspects of the task are complete.

## Common actors

### Contributor

Someone who contributes to the draupnir project.

### Room moderator

A moderator for a room on Matrix.

### Homeserver administrator

A moderator managing users resident to a Matrix homeserver, and rooms that the
homeserver is joined to.

### System administrator

This is someone who is deploying and managing draupnir at a software systems
level, rather than someone who necessarily uses it.

## Why we do not use story pointing

<!-- cspell:ignore Goodhart's nlnet -->

Story pointing may work in some environments. We used to use it for this project
but we have identified some weaknesses:

- We do not have reliable historical information on completion of other tasks,
  it's also very difficult to do this if you need to change methodologies.
- The bigger a story is, the more inaccurate the estimate is going to be,
  because there is going to be less detail and less consideration with reference
  to the implementation.

We also became prone to Goodhart's law: "When a measure becomes a target, it
ceases to be a good measure". If you note that you work on 20 story points in a
week, you'll start scoring things to fit that. It is very difficult to avoid
this bias and everyone involved has an interest to score lower or higher.

Using Tasks as the fundamental unit of work means that they are always grounded
in the implementation. And there is no estimation of task size required, they're
all the same size.

[^agility-experience]:
    We did this in the past for our first nlnet grant, all planning was concrete
    and in terms of increments. And this cost us all agility. And and also made
    it harder to adapt for our stakeholders.
