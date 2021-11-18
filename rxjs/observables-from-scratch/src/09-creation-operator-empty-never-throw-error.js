import { EMPTY, NEVER, throwError } from 'rxjs';

// var foo = EMPTY;
// var foo = NEVER; // infinitely expecting a value that is why nothing has been logged
var foo = throwError(() => new Error('error :('));
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
