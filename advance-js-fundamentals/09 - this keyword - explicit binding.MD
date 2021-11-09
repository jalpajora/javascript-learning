## Explicit binding

## Checklist

1. Was the function invoked?
2. How was it invoked?
3. What context was it invoked in?

## Sample

<pre>
const person = {
  firstName: 'tyler'
}

function getName() {
  return `${this.firstName} is my first name`
}

console.log(getName()) // firstName is undefined because window object does not have firstName property
</pre>

To fix this we can use the following:

### .call

<pre>
const person = {
  firstName: 'tyler'
}

function getName() {
  return `${this.firstName} is my first name`
}

console.log(getName.call(person)) // tyler is my first name
</pre>

#### How to pass parameters

<pre>
getName.call(person, param1, param2, param3, ...)
</pre>

### .apply

<pre>
const person = {
  firstName: 'tyler'
}

function getName() {
  return `${this.firstName} is my first name`
}

console.log(getName.apply(person)) // tyler is my first name
</pre>

#### How to pass parameters

<pre>
getName.apply(person, [param1, param2, param3, ...])
</pre>

### .bind

<pre>
const person = {
  firstName: 'tyler'
}

function getName() {
  console.log(`${this.firstName} is my first name`)
}

setInterval(getName.bind(person), 1000) // tyler is my first name
</pre>

#### How to pass parameters

N/A
