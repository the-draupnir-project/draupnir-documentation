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

## Problems

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

## Solution hypotheses

Once a problem has been described, a solution can be designed. Solutions should
have the following properties:

- An approach for how the problem is going ot be solved.
- An overview of any planning risks with the approach or any trade-offs.
- The success criteria with reference to actors.
- A list of tasks that break down the solution into workable units.

If a line of work makes a discovery that compromises the solution, then a new
solution should be created after the problem is updated.

Discovery tasks should be included under solutions that have uncertainty or need
refinement.

Solutions should be iterated from feedback experienced from working on tasks.

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

<!-- cspell:ignore Goodhart's -->

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
