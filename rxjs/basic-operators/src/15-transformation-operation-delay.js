import { interval, take, delay, delayWhen } from 'rxjs';

var foo = interval(600).pipe(take(5));

// var result = foo.pipe(delay(2000));

// var futureDate = new Date(new Date().getTime() + 1000);
// var result = foo.pipe(delay(futureDate));

var result = foo.pipe(delayWhen((x) => interval(x * x * 100).pipe(take(1))));

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
