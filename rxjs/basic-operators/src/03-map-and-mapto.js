import { interval, map, mapTo } from 'rxjs';

var foo = interval(1000);
console.log(foo);
// var bar = foo.pipe(map((x) => x / 2));
// if constant use mapTo
var bar = foo.pipe(mapTo(10));

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
