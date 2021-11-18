import { Observable, merge, Subject, timer, combineLatest } from 'rxjs';
import {
  mapTo,
  scan,
  startWith,
  distinctUntilChanged,
  shareReplay,
  filter,
  pairwise,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

const initLoadingSpinner = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        show: () => {
          console.log('spinner..loading');
          document.getElementById('spinner').classList.remove('hide');
        },
        hide: () => {
          console.log('spinner..hidden');
          document.getElementById('spinner').classList.add('hide');
        },
      });
    }, 1000);
  });
};

/*
 What are tasks and how can we emit observables via tasks
 - timer(600).subscribe(...)
 - setTimeout(() => ..., 6000)
 - fetch('someapi.com', () => ...)
*/

/*
Exercise:
How do we count?
  Start from zero
  When an async task starts, increase the count by 1
  When a task ends, decrease the count by 1
*/
// Subject is both Observable and an Observer
// - when .next() is called, it will emit the obserble to whoever is subscribed to it
// const taskStarts = new Observable();
// const taskCompletions = new Observable();
const taskStarts = new Subject();
const taskCompletions = new Subject();

export function newTaskStarted() {
  taskStarts.next();
}

export function existingTaskCompleted() {
  taskCompletions.next();
}

const loadUp = taskStarts.pipe(mapTo(1));
const loadDown = taskCompletions.pipe(mapTo(-1));

// merge cretes brand new observable
const loadVariations = merge(loadUp, loadDown);

// Explanation:
// 1. The moment the task starts (taskStarts),
//    loadUp will give the value 1
//    which loadVariations will emit the value 1
//    which will add the amount by 1 via currentLoadCount
// 2. taskCompletions same scenario as 1

const currentLoadCount = loadVariations.pipe(
  startWith(0),
  // scan has the same API as reduce array method
  scan((totalCurrentLoads, changeinLoads) => {
    const newLoadCount = totalCurrentLoads + changeinLoads;
    return newLoadCount < 0 ? 0 : newLoadCount;
  }),
  distinctUntilChanged(),
  shareReplay({ bufferSize: 1, refCount: true })
);

const loadStats = currentLoadCount.pipe(
  scan((loadStats, loadingUpdate) => {
    const loadsWentDown = loadingUpdate < loadStats.previousLoading;
    const currentCompleted = loadsWentDown ? loadStats.completed + 1 : + 1 : loadStats.completed
    return {
      total: currentCompleted + loadingUpdate,
      completed: currentCompleted,
      previousLoading: loadingUpdate
    }
  }, {
    total: 0,
    completed: 0,
    previousLoading: 0
  })
)

const spinnerWithStats = loadStats.pipe(
  switchMap(stats => showSpinner(stats.total, stats.completed))
)
/*
When does the loader need to hide?
- When the count of async tasks goes to 0
*/
const spinnerDeactivated = currentLoadCount.pipe(
  filter((count) => count === 0)
);

/*
When does the loader need to show?
- When the count of async tasks goes 0 to 1
*/
const spinnerActivated = currentLoadCount.pipe(
  pairwise(), // is same as scan() but more human readable
  filter(([prevCount, currCount]) => prevCount === 0 && currCount === 1)
);

/*
When the spinner needs to show
  show the spinner..until it's time to hide it
*/

const showSpinner = (total, completed) =>
  new Observable(() => {
    // I've subscribed to!!
    const loadingSpinnerPromise = initLoadingSpinner(total, completed);

    loadingSpinnerPromise.then((spinner) => {
      console.log('showing..');
      spinner.show();
    });

    return () => {
      loadingSpinnerPromise.then((spinner) => {
        console.log('hiding..');
        spinner.hide();
      });
    };
  });
// const loadingSpinnerPromise = initLoadingSpinner();

// loadingSpinnerPromise.then((spinner) => {
//   spinner.show();
//   setTimeout(() => {
//     spinner.hide();
//   }, 3000);
// });

/*
The moment the spinner becomes active..
  Switch to waiting for 2s before showing it
  But cancel if it becomes inactive again in the meantime
*/
const flashTreshold = timer(2000);

const shouldShowSpinner = spinnerActivated.pipe(
  switchMap(() => flashTreshold.pipe(takeUntil(spinnerDeactivated)))
);

const shouldHideSpinner = combineLatest(spinnerDeactivated, flashTreshold);

shouldShowSpinner
  .pipe(switchMap(() => spinnerWithStats.pipe(takeUntil(shouldHideSpinner))))
  .subscribe();

export default {};
