# EmitKit

The easiest way to build SWC transforms.

## `jsxTransform`

The `@swc/core` `transform` function is very useful,
however will also compile any JSX expressions to `React.createElement` calls.

You can customise which function it calls etc etc,
but you cannot just make it output the JSX as-is.

`jsxTransform` and `jsxTransformSync` have this capability:

Passed through `transform`:
`<div>foo</div>` becomes `/*#__PURE__*/ React.createElement("div", null, "foo");`

Passed through `jsxTransform`:
`<div>foo</div>` becomes `<div >foo</div>;`

## Emitters

Writing out object literals to create new code is painful.

The feature that gives EmitKit its name: the emitters!

These are functions with a sane API to make writing ASTs a joy.

If any are missing, feel free to open an issue,
there are a lot of syntax nodes in SWC!

## `AuxVisitor`

SWC has a very useful utility called `Visitor`.
This will pass every instance of a given syntax node type
to a function in a class.

It initialises all of these functions to call each other to make this work.

It has a fatal flaw, however: when you override one of these functions to
actually use the Visitor, you must remember to then pass the node back
into the Visitor (for example, passing the props and body of a function back in).

For some overrides, such as `visitExpression`, however, this is infeasible
as you would have to manually handle every single type of Expression.

`AuxVisitor` solves this: for each `visit` function on the Visitor it exports an
equivalent `auxVisit` function:

For a function `visitNODETYPE(n: T): T`,
there is an equivalent `auxVisitNODETYPE(n: T): [T, boolean] | undefined`.

Return `undefined` to do nothing and leave the node untouched,
this extra isn't really necessary, but there's no reason not to add it for QoL.

Make any changes you want to your syntax node, then return it in an array.
The second value is very important: in most cases this should be true.

The second array value controls if the AuxVisitor will keep the internal routing
intact for this call: if you set this `false`,
the Visitor will not visit children of that node,
essentially acting as if you overrode the main `visit` function.

This is useful to prevent infinite loops in some cases,
but usually should be left true as the whole point of AuxVisitor is leaving
internal routing intact.