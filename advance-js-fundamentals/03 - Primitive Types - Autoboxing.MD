## Primitive Types - Autoboxing

When a primitive type is treated as an object.

Primitive type doesn't have a method or property, so when a primitive type is treated as an object, this is called autoboxing. Example:

<pre>
const str = 'foo'
// accessing length property of a string type
console.log(str.length)
// accessing length method of a number type
console.log((10).toString())
</pre>

#### What Autoboxing in JS does is

JS will wrap primitives into an object and this new object will connect it to the object prototype correspondent to the primitive type.
Example:

<pre>
const str = 'foo'
// String.prototype
console.log(str.length)
// Number.prototype
console.log((10).toString())
</pre>
