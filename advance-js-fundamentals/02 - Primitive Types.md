## Primitive Types

- You can not mutate a primitive variable unlike array or object
- Represents the lowest level of data representation

#### What are the primitive types?

1. string
   (e.g typeof 'hello world')
2. number
   (e.g typeof 1)
3. boolean
   (e.g typeof false)
4. bigint
   (e.g typeof 42n)
5. symbol
   (e.g typeof Symbol())
6. object (null)
   (e.g typeof null)
   due to bug in JS, null type is known as object
7. undefined
   (e.g typeof undefined)

## What does it mean by not mutable

Sample:
An object can be mutated: In the example, when we pass the object as a parameter, we are passing the object as it's memory reference. This means that when we update obj.a, we are directly updating the obj variable.

<pre>
let obj = { a: 1 };
function addTwo(obj) {
   obj.a = obj.a + 2
}
addTwo(obj);
</pre>

Sample:
For primitive type, we are passing the value of the variable and not the memory reference of the variable, thus it is not mutated

<pre>
let num;
function addTwo(num) {
   num = num + 2
}
addTwo(num);
</pre>
