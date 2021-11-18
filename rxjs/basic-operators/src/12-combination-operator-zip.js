import { interval, withLatestFrom, map, take, zip, of, pipe } from 'rxjs';

// var foo = interval(500).pipe(take(5));
var foo = of('H', 'e', 'l', 'l', 'o');
var bar = interval(400).pipe(take(5));

var combined = zip(foo, bar, (x, y) => x);

combined.subscribe({
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
