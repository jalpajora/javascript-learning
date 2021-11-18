import { fromEvent, interval, map, timer, skip } from 'rxjs';
import {
  map,
  switchMap,
  exhaustMap,
  takeUntil,
  takeWhile,
  take,
  tap,
  filter,
} from 'rxjs/operators';

/*
  whenever somebody starts a combo
    keep talking(listening) for the rest of the combo keys
      until the timer has run out
      while the combo is being followed correctly
      and until we've got (comboLength - 1) keys back
*/

const anyKeyPress = fromEvent(document, 'keypress').pipe(
  map((event) => event.key),
  tap(console.log)
);

function keyPressed(key) {
  return anyKeyPress.pipe(filter((pressedKey) => pressedKey === key));
}

function keyCombo(keyCombo) {
  const combiInitiator = keyCombo[0];

  return keyPressed(combiInitiator).pipe(
    exhaustMap(() => {
      return anyKeyPress.pipe(
        takeUntil(timer(3000)),
        takeWhile((keyPressed, index) => {
          console.log('keypressed');
          console.log(keyPressed);
          console.log(index);
          return keyCombo[index + 1] === keyPressed;
        }),
        skip(keyCombo.length - 2),
        take(1)
      );
    })
  );
}
const comboTriggered = keyCombo(['a', 's', 'a', 'f']);

interval(1000)
  .pipe(takeUntil(comboTriggered))
  .subscribe({
    next: (x) => console.log(x),
    complete: () => console.log('COMPLETED'),
  });
