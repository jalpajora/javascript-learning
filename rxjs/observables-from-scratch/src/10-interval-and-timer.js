import { timer, interval } from 'rxjs';

// var foo = interval(1000); // sets a different interval for each subscriber
// var foo = timer(3000, 1000);
var date = new Date(new Date().getTime() + 3000);
var foo = timer(date, 1000);

// setTimeout(function () {
//   foo.subscribe({
//     next(x) {
//       console.log(x);
//     },
//     error(err) {
//       console.log('Something wrong happened! ' + err);
//     },
//     complete() {
//       console.log('done');
//     },
//   });
// }, 1500);

foo.subscribe({
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
