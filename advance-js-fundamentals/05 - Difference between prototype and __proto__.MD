## Prototype

When you create a function behide the scenes, JS will automatically create a prototype of your function.

  <pre>
  function sayHello() {}
  // Behind the scenes, a functional object (.prototype) will automatically be created
  console.log(sayHello.prototype)
  // Has 2 properties 
  // constructor = sayHello function
  // __proto__ = global object prototype
  </pre>

#### Difference between .prototype and \_\_proto\_\_

`__proto__` - is used for prototypal inheritance and when looking up for a property within objects via dot, the properties are available

`.prototype` - is not used for prototypal inheritance and when looking up for a property of the function via dot, the properties are not available

#### When does a prototype be a dunder proto of an object

Note:
The `.prototype` that lives in every function EXCEPT arrow functions can be a dunder proto object of a new object when the `new` keyword is used for creating the object.

Example:

  <pre>
  function foo() {}

  foo.prototype.test = 'hello world';

  console.log(foo.prototype)
  // Has 3 properties 
  // test = 'hellow world'
  // constructor = foo function
  // __proto__ = global object prototype

  const name = new foo();
  console.log(name.test); // hello world'
  // 
  </pre>
