import React from 'react';
import ReactDOM from 'react-dom';
import { timer } from 'rxjs';
import {
  newTaskStarted,
  existingTaskCompleted,
} from './03-spinner-exercise-problems';

const slowObservable = timer(3000);
const verySlowObservable = timer(6000);

const doWork = () => {
  newTaskStarted();
  slowObservable.subscribe(() => {
    existingTaskCompleted();
  });
};

const doLongWork = () => {
  newTaskStarted();
  verySlowObservable.subscribe(() => {
    existingTaskCompleted();
  });
};

const SlowExample = () => {
  return (
    <>
      <button onClick={doWork}>Start slow task - 3s</button>
      <button onClick={doLongWork}>Start very slow task - 6s</button>
    </>
  );
};

ReactDOM.render(<SlowExample />, document.getElementById('react-app'));
