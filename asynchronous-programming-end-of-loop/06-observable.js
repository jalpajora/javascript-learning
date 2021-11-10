var button = document.getElementById('button');

// var handler = function (e) {
//   alert('clicked');
//   button.removeEventListener('click', handler);
// };

// button.addEventListener('click', handler);

var clicks = rxjs.fromEvent(button, 'click');

var subscription = clicks.subscribe((e) => {
  alert('clicked');
  subscription.unsubscribe();
});
