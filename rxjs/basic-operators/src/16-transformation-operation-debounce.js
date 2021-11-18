import { interval, take, debounceTime, debounce, fromEvent, map } from 'rxjs';

// debounceTime -> delay
// debounce -> delayWhen

var foo = interval(100).pipe(take(5));

var result = foo.pipe(debounce(() => interval(1000).pipe(take(1))));

result.subscribe({
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

// var fieldElem = document.getElementById('field');
// var labelElem = document.getElementById('label');

// var inputText = fromEvent(fieldElem, 'input');
// var inputTextTransformation = inputText.pipe(
//   map((ev) => ev.target.value),
//   debounceTime(1000)
// );

// inputTextTransformation.subscribe({
//   next(x) {
//     labelElem.textContent = x;
//   },
//   error(err) {
//     console.log('Something wrong happened! ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
