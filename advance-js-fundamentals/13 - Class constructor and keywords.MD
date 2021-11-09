## constructor

- the only body of the class executed with the new keyword

## super

- used to access and call functions on an object's parent.

<pre>
class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.height = width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}

const myShape = new Square(1); // Square { name: 'Square', height: 1, width: 1}
</pre>
