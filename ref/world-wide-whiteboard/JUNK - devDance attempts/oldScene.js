


// this is global now 
window.scene = new window.EventEmitter();

(function () {


  


// pass in alpha beta gamma somehow?
    scene.move = function (data) {

        // Draw the line between the start and end positions
        // that is colored with the given color.

        // If shouldBroadcast is truthy, we will emit a draw event to listeners
        // with the start, end and color data.
        if (shouldBroadcast) {
            // this event we emit is caught by the whiteboard object in app.js
            whiteboard.emit('draw', start, end, strokeColor);
        }
        
    };

}) ();



  // var canvas = document.querySelector('#paint');
    // var sketch = document.querySelector('#sketch');
    // var sketchStyle = getComputedStyle(sketch);

    // canvas.width = parseInt(sketchStyle.getPropertyValue('width'));
    // canvas.height = parseInt(sketchStyle.getPropertyValue('height'));

    // var ctx = canvas.getContext('2d');

    // ctx.lineWidth = 5;
    // ctx.lineJoin = 'round';
    // ctx.lineCap = 'round';

    // var currentMousePosition = {
    //     x: 0,
    //     y: 0
    // };

    // var lastMousePosition = {
    //     x: 0,
    //     y: 0
    // };

    // var drawing = false;

    // canvas.addEventListener('mousedown', function (e) {
    //     drawing = true;
    //     currentMousePosition.x = e.pageX - this.offsetLeft;
    //     currentMousePosition.y = e.pageY - this.offsetTop;
    // });

    // canvas.addEventListener('mouseup', function () {
    //     drawing = false;
    // });

    // canvas.addEventListener('mousemove', function (e) {

    //     if (!drawing) return;

    //     lastMousePosition.x = currentMousePosition.x;
    //     lastMousePosition.y = currentMousePosition.y;

    //     currentMousePosition.x = e.pageX - this.offsetLeft;
    //     currentMousePosition.y = e.pageY - this.offsetTop;

    //     whiteboard.draw(lastMousePosition, currentMousePosition, color, true);

    // });

