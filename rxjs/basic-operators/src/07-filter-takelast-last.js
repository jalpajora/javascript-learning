import { interval, take, takeLast, last } from 'rxjs';

var foo = interval(1000);

var bar = foo.pipe(take(5), takeLast(2), last());

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
