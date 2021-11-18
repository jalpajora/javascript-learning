import { Observable } from 'rxjs';

// Function
function foo() {
  console.log('Hello');
  throw new Error(':(');
  return 42;
}

try {
  console.log(foo.call());
} catch (err) {
  console.log('something wrong happened! ' + err);
}
console.log('this still runs');

var bar = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(43);
  subscriber.error(new Error('bad'));
  setTimeout(function () {
    subscriber.next(100);
  }, 1000);
});

bar.subscribe({
  next(x) {
    console.log(x);
  },
  error(err) {
    console.log('Something wrong happened! ' + err);
  },
});
