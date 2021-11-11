var parent = document.getElementById('parent');
var widget = document.getElementById('widget');

var mouseDowns = rxjs.fromEvent(widget, 'mousedown');
var parentMouseMoves = rxjs.fromEvent(parent, 'mousemove');
var parentMouseUps = rxjs.fromEvent(parent, 'mouseup');

var drags = mouseDowns.pipe(
  rxjs.operators.map(function (e) {
    return parentMouseMoves.pipe(rxjs.operators.takeUntil(parentMouseUps));
  }),
  rxjs.operators.concatAll()
);

var subscription = drags.forEach(function (e) {
  // console.log(e);
  widget.style.left = e.clientX + 'px';
  widget.style.top = e.clientY + 'px';
});
