import { interval, withLatestFrom, map, take, zip, of, pipe } from 'rxjs';

// combined = AND
var foo = zip(
  interval(500).pipe(take(5)),
  of('H', 'e', 'l', 'l', 'o'),
  (_, c) => c
);
var bar = zip(
  interval(300).pipe(take(7)),
  of(0, 1, 0, 1, 0, 1, 0),
  (_, x) => x
);

var combined = foo.pipe(
  withLatestFrom(bar, (c, n) => {
    return n === 1 ? c.toUpperCase() : c.toLowerCase();
  })
);

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
