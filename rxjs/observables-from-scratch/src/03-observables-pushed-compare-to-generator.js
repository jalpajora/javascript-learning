// OBSERVABLE = STYLE is PUSH
// Producer
// determines when the value are sent
var bar = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(43);
  setTimeout(function () {
    subscriber.next(100);
  }, 1000);
});

// Consumer
bar.subscribe({
  next(x) {
    console.log(x);
  },
});

// GENERATOR = STYLE is PULL
// Producer
function* baz() {
  console.log('Hello');
  yield 42;
  yield 100;
  yield 200;
}

// Consumer
// determines when the value are sent
var iterator = baz();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
