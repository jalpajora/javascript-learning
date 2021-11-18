import { interval, take, first, skip } from 'rxjs';

var foo = interval(1000);

// Take only 5
// var bar = foo.pipe(take(5));

// Take first only
// var bar = foo.pipe(first());

// Ignore first 5
var bar = foo.pipe(skip(5));

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
