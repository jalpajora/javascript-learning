import { interval, take, concatWith, of, pipe } from 'rxjs';

var foo = interval(1000).pipe(take(4));
var more = of(4, 5, 6, 7, 8, 9);
var prefix = of('a');

var bar = prefix.pipe(concatWith(foo), concatWith(more));

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
