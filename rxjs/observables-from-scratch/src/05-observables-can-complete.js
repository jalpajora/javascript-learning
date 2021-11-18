import { Observable } from 'rxjs';

var bar = new Observable((subscriber) => {
  try {
    console.log('Hello');
    subscriber.next(42);
    subscriber.next(100);
    subscriber.next(200);

    setTimeout(function () {
      subscriber.next(500);
      subscriber.complete();
    }, 1000);
  } catch (err) {
    subscriber.error(new Error('bad'));
  }
});

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
