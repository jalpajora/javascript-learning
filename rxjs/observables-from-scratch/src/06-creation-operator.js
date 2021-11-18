import { of, Observable } from 'rxjs';

// var bar = var bar = new Observable((subscriber) => {
//   subscriber.next(42);
//   subscriber.next(43);
//   subscriber.next(200);
// });

// Same as code above,
// Synchronous values in sequence
var foo = of(42, 43, 200);

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
