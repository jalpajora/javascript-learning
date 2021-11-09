## Implicit binding

`this` keyword references the execution context of a functions call. Determines how the function is called at run time EXCEPT for arrow functions.

## Questions to know what is the `this` value is

1. Was the function invoked?
2. How was it invoked? Implicit binding with ()
3. What context was it invoked in?

### Sample 1

<pre>
const person = {
  firstName: 'tyler',
  getName() {
    return `${this.firstName} is my first name`
  }
}

console.log(person.getName()) // tyler is my first name
</pre>

1. Was the function invoked?
   <i>Yes</i>
2. How was it invoked?
   <i>Implicit binding with ()</i>
3. What context was it invoked in?
   <i>person, the object immediately to the left of method called</i>

### Sample 2

<pre>
const person = {
  value: {
    firstName: 'tyler',
    getName() {
      return `${this.firstName} is my first name`
    }
  }
}

console.log(person.value.getName()) // tyler is my first name
</pre>

1. Was the function invoked?
   <i>Yes</i>
2. How was it invoked?
   <i>Implicit binding with ()</i>
3. What context was it invoked in?
   <i>value, the object immediately to the left of method called</i>

### Sample 3

<pre>
function getName() {
  return `${this.firstName} is my first name`
}
var firstName = 'tyler';

console.log(getName()) // behind the scenes it is window.getName();
</pre>

1. Was the function invoked?
   <i>Yes</i>
2. How was it invoked?
   <i>Implicit binding with ()</i>
3. What context was it invoked in?
   <i>window, the object immediately to the left of method called</i>

### Sample 4

<pre>
const person = {
  firstName: 'tyler',
  getName() {
    return `${this.firstName} is my first name`
  }
}

const anotherPerson = {};
anotherPerson.getName = person.getName;
console.log(anotherPerson.getName()) // firstName is undefined
</pre>

1. Was the function invoked?
   <i>Yes</i>
2. How was it invoked?
   <i>Implicit binding with ()</i>
3. What context was it invoked in?
   <i>anotherPerson, the object immediately to the left of method called</i>
