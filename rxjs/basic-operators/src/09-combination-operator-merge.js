import { interval, take, merge, map } from 'rxjs';

// merge = OR
var foo = interval(500).pipe(
  take(4),
  map((x) => `foo: ${x}`)
);
var bar = interval(300).pipe(
  take(5),
  map((x) => `bar: ${x}`)
);

var merged = merge(foo, bar);

merged.subscribe({
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
