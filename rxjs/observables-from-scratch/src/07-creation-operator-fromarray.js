import { from } from 'rxjs';

var arr = [42, 43, 300];

var foo = from(arr);
// var foo = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));

// function* generator() {
//   yield 42;
//   yield 43;
//   yield 200;
// }

// var iterator = generator();
// var foo = from(iterator);

foo.subscribe({
  next(x) {
    console.log(x);
  },
  error(err) {
    console.log('Something wrong happened! ' + err);
  },
  complete() {
    console.log('done');
  },
});
