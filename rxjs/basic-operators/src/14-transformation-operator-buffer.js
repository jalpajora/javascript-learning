import {
  interval,
  withLatestFrom,
  map,
  take,
  bufferCount,
  bufferTime,
  of,
  zip,
} from 'rxjs';

var foo = of('H', 'e', 'l', 'l', 'o');
var bar = zip(foo, interval(600).pipe(take(5)), (x, y) => x);

var combined = bar.pipe(bufferCount(2));
// var combined = bar.pipe(bufferTime(1000));

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
