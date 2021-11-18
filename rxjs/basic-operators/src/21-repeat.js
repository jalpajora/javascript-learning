import {
  interval,
  take,
  debounceTime,
  throttleTime,
  fromEvent,
  map,
  zip,
  of,
  distinct,
  catchError,
  retry,
  retryWhen,
  repeat,
} from 'rxjs';

var foo = zip(interval(500).pipe(take(5)), of('a', 'b', 'A', 'c'), (x, y) => y);
var bar = foo.pipe(map((x) => x.toUpperCase()));

// var result = bar.pipe(retry(2));
var result = bar.pipe(repeat(3));

result.subscribe({
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
