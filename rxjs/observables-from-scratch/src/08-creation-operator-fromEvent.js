import { fromEventPattern, fromEvent } from 'rxjs';

function addEventListener(handler) {
  document.addEventListener('click', handler);
}
function removeEventListener(handler) {
  document.addEventListener('click', handler);
}

// var foo = fromEventPattern(addEventListener, removeEventListener);

var foo = fromEvent(document, 'click');

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
