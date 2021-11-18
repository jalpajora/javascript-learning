import { Observable } from 'rxjs';

function subscribe(observer) {
  var hiIntervalId = setInterval(function () {
    observer.next('hi');
  }, 1000);

  return () => {
    clearInterval(hiIntervalId);
  };
}

var foo = new Observable(subscribe);

var subscription = foo.subscribe({
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

setTimeout(function () {
  subscription.unsubscribe();
}, 5000);
