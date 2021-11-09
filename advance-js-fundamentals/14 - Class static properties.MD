## static

- cannot be accessed via new keyword
- cannot be called via .
- can only be accessed in super keyword in subcomponents

<pre>
class Rectangle {
  static callRectangle() {
    return 'hello rectangle';
  }
}

const myShape = new Rectangle();
console.log(myShape.callRectangle()) // undefined
</pre>

#### can only be accessed in super keyword in subcomponents

<pre>
class Rectangle {
  static callRectangle() {
    return 'hello rectangle';
  }
}

class Square extends Rectangle {
  static whoAmI() {
    return 'hello, ' + super.callRectangle();
  }
}


console.log(Square.callRectangle()) // hello, hello rectangle
</pre>
