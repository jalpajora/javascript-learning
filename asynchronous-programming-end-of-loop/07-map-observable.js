var button = document.getElementById('button');

// var handler = function (e) {
//   alert('clicked');
//   button.removeEventListener('click', handler);
// };

// button.addEventListener('click', handler);

var clicks = rxjs.fromEvent(button, 'click');
console.dir(clicks);
var points = clicks.pipe(
  rxjs.operators.map(function (e) {
    return { x: e.clientX, y: e.clientY };
  })
);

var subscription = points.subscribe((point) => {
  alert('clicked: ' + JSON.stringify(point));
  subscription.unsubscribe();
});
