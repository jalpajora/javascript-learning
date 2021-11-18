import { interval, pipe, map, mapTo, take, tap } from 'rxjs';

var foo = interval(200);

var bar = foo.pipe(
  take(4),
  tap((x) => {
    console.log('Before: ' + x);
  }),
  map((x) => x * 2),
  tap((x) => {
    console.log('After: ' + x);
  })
);

bar.subscribe({
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
