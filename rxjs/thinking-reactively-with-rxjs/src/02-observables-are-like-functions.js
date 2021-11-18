import { Observable } from 'rxjs';

/*
function foo() {
  console.log('Hello');
  return 42;
}
*/
// the function above is the same as the code below
var bar = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(43);
  setTimeout(function () {
    subscriber.next(100);
  }, 1000);
});

// This will display 42
// console.log(foo.call());
// calling the function is same as subscribe
console.log('Before');
// Will display 42 then 43 then after 1 second 100
bar.subscribe({
  next(x) {
    console.log(x);
  },
});
console.log('After');
