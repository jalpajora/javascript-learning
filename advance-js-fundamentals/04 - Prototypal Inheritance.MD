## Prototypal Inheritance

<i>`dunder`</i> - is the common pronunciation for method names with start and end double underscores

<i>`__proto__`</i> (called as dunder proto) - Every object in JS has this property. It points back to the prototype object of the constructor function that created that object.

  <pre>
  const a = {};
  console.log(a);
  // toString method is not defined in 'a' but is automatically 
  // available due to prototypal inheritance. JS will look into dunder proto if it's not available in 'a'. It will go to dunder proto until it sees the method/property we are looking for.
  console.log(a.toString());
  </pre>

#### Multiple Inheritance

No limit in the number of nested objects

<pre>
const a = {};
const b = Object.create(a);
console.log(b);
// first __proto__ will be a object
// second __proto__ will be the global object
</pre>

#### Notes

`.prototype` and `__proto__` are different but somehow related because everytime you use `new` keyword to create an object, you automatically get the value of `.prototype` of that object and set it as `__proto__` of your new object.

All global objects are just functions that is created to be an object which inherits a corresponding global function `.prototype`
Example:

<pre>
console.log(Object);
console.log(Object.prototype);
console.log(Array);
console.log(Array.prototype);
console.log(Symbol);
console.log(Symbol.prototype);
// etc.
</pre>
