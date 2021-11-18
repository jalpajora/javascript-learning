import {
  interval,
  take,
  debounceTime,
  throttleTime,
  fromEvent,
  map,
  zip,
  of,
  distinct,
} from 'rxjs';

// debounceTime -> waits for silence, then emits
// throttleTime -> first emits, then causes silence

var foo = zip(
  interval(500).pipe(take(5)),
  of('a', 'b', 'A', 'c', 'b'),
  (x, y) => y
);

// var result = foo.pipe(distinct());
var result = foo.pipe(distinct());

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
