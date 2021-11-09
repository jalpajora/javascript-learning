## coercion

Conversion. Changing of types from primitive to primitive or object to primitive.

## Implicit coercion

Rely on JS to convert the type

Example:

<pre>
const someNumber = 2
const str = `Hello, i have ${somenumber}` eyes`;
console.log(str) // Hello, i have 2 eyes
</pre>

## Explicit coercion

Not relying on JS to convert the type and manually converting/assigning the type

Example:

<pre>
const someNumber = String(2)
const str = `Hello, i have ${somenumber}` eyes`;
console.log(str) // Hello, i have 2 eyes
</pre>
