## Prototypal Inheritance

<i>dunder</i> - is the common pronunciation for method names with start and end double underscores

<i>\_\_proto\_\_</i> or dunder proto

Every object in JS has this property. It points back to the prototype object of the constructor function that created that object.

  <pre>
  const a = {};
  console.log(a);
  </pre>

  <pre>
  const a = {};
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
