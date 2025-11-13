# Security

## Programming practices and considerations

Here are some general practices you should follow when programming in
TypeScript, which could otherwise have security implications.

### Property access with user supplied property names

The following example appears a lot in JavaScript code bases, particularly when
exposing configuration objects to the user interface:

```typescript
const config = readConfigFromFile();
const propertyName = readUserInput();
if (object[propertyName] !== undefined) {
  doSomething(config[propertyName]);
}
```

This looks innocent enough, but the issue is that this use of property access
also allows the user to access properties from the `Object.prototype`. Which at
best can cause a `TypeError` to be thrown, but at worst can lead to an RCE
vulnerability.

To prevent this, it is recommended to use the `Object.hasOwn` method to guard
user supplied property access. The `@gnuxie/typescript-result` package offers
its own generic `hasOwn` / `getOwn` functions that support type inference.

```typescript
const config = readConfigFromFile();
const propertyName = readUserInput();
if (hasOwn(config, propertyName) !== undefined) {
  doSomething(getOwn(config, propertyName));
}
```

#### Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
- https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md

### ReDoS

Can't provide an explanation for this one but just be careful with capturing
groups and check against the owasp resource below.

#### Resources

- [How regexes got catastrophic](https://www.youtube.com/watch?v=gITmP0IWff0&t=212s).
- https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS

### Prototype pollution

Prototype pollution is the collision of object property names with intrinsic
properties, in most contexts this means properties defined on the
`Object.prototype`, such as the `toString` method.

Prototype pollution typically effects programs in the following situations:

- Using an object as a map or dictionary instead of just using a
  [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
  Leading to problems when keys are derived from user input (including external
  APIs).
- Deserializing JSON payloads.

It is a mistake to ever use an object as a generic map, but it happens because
JSON configuration typically forms part of an interface with the program. And
the standard pattern is for JSON to be deserialized to objects through the use
of
[`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
And now we're stuck with this history.

Here is a list of properties that you should be considerate of if you ever end
up in a situation where it is important to sanitize property names
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_prototype_properties.

Be sure to also use the jsonReviver provided by Draupnir
https://github.com/the-draupnir-project/Draupnir/blob/0c448ab85e53e24cd4a9ffb81174c04a1a1f381b/src/utils.ts#L517-L531.

### Joe's law

Joe's law: crash, crash, crash, crash crash.

It is important to maintain awareness over situations that a program has
implicitly not been written to handle, and make these explicit by "crashing".

What this means for us is checking state and throwing a
[`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

This prevents the program from running in unanticipated ways and producing
potentially safety and security critical side effects. In other words, failing
to do this can allow attackers to exploit the application. This also makes sure
that developers do not use components inappropriately, in contexts that they
were not written for. Which can also lead to the same outcome. The environment
around code is always changing.

It also provides visibility to both the system administrator and eventually the
developer over the problem. You may think that doing this causes the program to
be less reliable or fault tolerant, but the opposite is actually true. As a
result of these assertions we get feedback from error states faster and can
adjust the program accordingly, leading to a more resilient program in the long
run.

### Matrix mixin validation and parsing

<!-- Cspell:ignore Postel -->

While you may be tempted to treat Matrix event parsing as atomic, this would be
a mistake, especially in a security and safety context. The Matrix specification
places no requirement for events to be "valid" or conform to the provided
schema. The only exception to this are specific event properties that are
validated as part of authorization rules. Even then, this happens implicitly as
part of imperative rule flow rather than declaratively.

Additionally, with the advent of extensible events, Matrix events actually have
multiple parts embedded within them that conform independently to different
schema. These independent units are called mixins.

In most cases Matrix clients will still display malformed events as best they
can, in adherence with the opposite of Joe's law, Postel's law. This allows
malicious actors to craft events specifically to trip up certain matrix clients
in order to make abuse visible only to specific clients.

It is exceptionally important to keep malformed events represented and in the
event processing pipeline as otherwise you can allow users to evade Draupnir
protections.

The approach Draupnir then takes to event parsing is to try parse a minimal
"core" of each mixin and otherwise provide a generic "invalid event" type. Valid
events with invalid mixins will be flagged for redaction to prevent external
abuse.
