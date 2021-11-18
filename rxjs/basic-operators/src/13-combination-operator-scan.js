import { interval, withLatestFrom, map, take, scan, of, zip } from 'rxjs';

var foo = of('H', 'e', 'l', 'l', 'o');
var bar = interval(600).pipe(take(5));

var combined = zip(foo, bar, (x, y) => x).pipe(scan((acc, x) => acc + x, ''));

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
