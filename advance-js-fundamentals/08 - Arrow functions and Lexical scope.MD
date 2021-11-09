## Lexical scope

- Concept in JS that involves the fact that every function creates a new scope.
- Lexical scope references the author time of our code and not run time. Lexical scope is the author function scope.
- Opposite of `this` keyword because `this` keyword is the scope on run time

## Arrow function

<pre>
const person = {
  firstName: 'tyler',
  getName() {
    return `${this.firstName} is my first name`
  }
}

// behind the scenes window.setInterval
setInterval(person.getName, 1000) // undefined firstName because the scope is window and window.firstName is undefined
</pre>

If we use arrow function, we will still have the same error

<pre>
const person = {
  firstName: 'tyler',
  getName: () => {
    // Lexical scope finds the Next function scope (not arrow function) thus in this example the Next function lexical scope is global `window` because person is an object
    return `${this.firstName} is my first name`
  }
}

// behind the scenes window.setInterval
setInterval(person.getName, 1000) // undefined firstName because the scope is window and window.firstName is undefined
</pre>

To fix this, we can return a function inside getName so the `this` keyword will reference the next function scope which is getName

<pre>
const person = {
  firstName: 'tyler',
  getName() {
    return () => {
      console.log(`${this.firstName} is my first name`);
    }
  }
}

setInterval(person.getName(), 1000) // tyler is my firstName
</pre>
