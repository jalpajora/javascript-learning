## Class

Behind the hood, this is just a function.

<pre>
class Workshop {}

// in babel when converted 
// var Workshop = function Workshop() {
//  _classCallCheck(this, Workshop)
// }
</pre>

### extends

Connecting 2 classes in the prototype chain

Example:

<pre>
class Rectangle {}
class Square extends Rectangle {}

console.log(Object.getPrototypeOf(Square)) // Rectangle
</pre>

#### To de-sugar the above example, see below:

<pre>
function Rectangle {}
function Square  {}

Object.setPrototypeOf(Square, Rectangle)
console.log(Object.getPrototypeOf(Square)) // Rectangle
</pre>

#### Problem with de-sugar approach

When we create a new object using Square, the next prototype after Square will not be Rectangle but the Object prototype unlike with class

De-sugar approach

<pre>
function Rectangle {}
function Square  {}

Object.setPrototypeOf(Square, Rectangle);
var shape = new Square();

console.log(Object.getPrototypeOf(Square)) // Rectangle

console.log(Object.getPrototypeOf(shape)) // Square.prototype

console.log(Object.getPrototypeOf(Object.getPrototypeOf(shape))) // Object.prototype
</pre>

class approach

<pre>
class Rectangle {}
class Square extends Rectangle {}
var shape = new Square();

console.log(Object.getPrototypeOf(Square)) // Rectangle

console.log(Object.getPrototypeOf(shape)) // Square.prototype

console.log(Object.getPrototypeOf(Object.getPrototypeOf(shape))) // Rectangle.prototype
</pre>
