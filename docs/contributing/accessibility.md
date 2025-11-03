# Accessibility

## Render methods for `org.matrix.custom.html` (DeadDocument)

To render command responses to Matrix, we use a custom JSX factory from
[interface-manager](https://github.com/the-draupnir-project/interface-manager)
to provide us with elements from `org.matrix.custom.html` (and the DOM that
facilitates this is called `DeadDocument`).

The general rule to keeping message content accessible is use semantic HTML
elements over arbitrary ways of maintaining structure.

The following describes what we should be doing to improve the accessibility of
message content. Pull request reviewers should check rendered messages match the
recommendations in this document.

### Headings

Headings should be used at the beginning of each section within a message. This
is because users of screen readers who depend on keyboard navigation need
headings to properly skip over sections.

### Descriptive text for indicators

If emoji or symbols are used to show a status, then the meaning should be
written explicitly. For example, the `!draupnir protections` command shows
whether each command is enabled or disabled with the green circle `🟢` and red
circle emoji `🔴`. But next to each we also say what these mean with `(enabled)`
or `(disabled)`. This is important not only for users struggling with colour
perception, but also because it can be unclear to users what the emoji means in
the first place.
