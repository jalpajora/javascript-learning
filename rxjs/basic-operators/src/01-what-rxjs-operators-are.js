import { Observable, of } from 'rxjs';

var foo = of(1, 2, 3, 4, 5);

function multiplyByTen(source) {
  var result = new Observable((observer) => {
    source.subscribe({
      next(x) {
        observer.next(x * 10);
      },
      error(err) {
        observer.error(err);
      },
      complete() {
        observer.complete();
      },
    });
  });
  return result;
}

var bar = multiplyByTen(foo);

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
