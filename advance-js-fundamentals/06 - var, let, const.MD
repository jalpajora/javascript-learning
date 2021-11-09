## Block Scoping

Block scoping is defiend via `{` and `}`

## var

`var` - do not respect block scoping, they only care about function execution scopes

<pre>
var firstName = 'tyler';

{
  var firstName = 'clark';
  console.log(firstName); // clark
}

console.log(firstName); // clark

// The execution context here is the window global object for both  firstName variables
</pre>

To correct this we can use a function scope

<pre>
var firstName = 'tyler';

function foo() {
  var firstName = 'clark';
  console.log(firstName); // clark
}

foo();

console.log(firstName); // tyler
</pre>

#### var - hoisted

This means that before JS codes are processed, all var declarations are hoisted on top of their execution context with undefined value, so the above code will look like this behind the scenes.

<pre>
var firstName = undefined;
firstName = 'tyler';

function foo() {
  var firstName = undefined;
  firstName = 'clark';
  console.log(firstName); // clark
}

foo();

console.log(firstName); // tyler
</pre>

#### var - window object

Any var declared in the global context is placed in `window` object

<pre>
var firstName = undefined;
firstName = 'tyler';

console.log(window.firstName) // 'tyler'
function foo() {
  var firstName = undefined;
  firstName = 'clark';
  console.log(firstName); // clark
  console.log(window.firstName) // 'tyler'
}

foo();
</pre>

## let

- `let` does use block scopes, it is not hoisted
- when you declare let variable in the same scope it will throw an error

<pre>
let firstName = 'tyler';

{
  let firstName = 'clark';
  console.log(firstName); // clark
}

console.log(firstName); // tyler
</pre>

## const

- `const` does use block scopes, it is not hoisted
- you can not changed the value but object and array can be mutated

<pre>
const firstName = 'tyler';

console.log(firstName); // tyler

{
  const firstName = 'clark'; // throws error
}
</pre>
