import { interval, combineLatestWith, map, take } from 'rxjs';

// combined = AND
var foo = interval(500).pipe(
  take(4)
  // map((x) => `foo: ${x}`)
);
var bar = interval(300).pipe(
  take(5)
  // map((x) => `bar: ${x}`)
);

var combined = foo.pipe(combineLatestWith(bar, (x, y) => x + y));

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
