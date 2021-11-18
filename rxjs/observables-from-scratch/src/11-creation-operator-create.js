import { Observable } from 'rxjs';

function subscribe(observer) {
  observer.next(42);
  observer.next(100);
  observer.next(200);
  observer.complete();
}
var foo = new Observable(subscribe);

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
