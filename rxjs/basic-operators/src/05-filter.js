import { interval, filter } from 'rxjs';

// predicate function takes an argument and returns true or false
var foo = interval(200);

var bar = foo.pipe(filter((x) => x % 2 === 0));

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
