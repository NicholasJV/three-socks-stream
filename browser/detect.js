// detect.js

var socket = io(window.location.origin);
socket.on('connect', function(){
    console.log('device made a two-way connection!');
    var detectData;
    if (window.DeviceOrientationEvent) {
        // document.getElementById("doEvent").innerHTML = "DeviceOrientation";
        console.log('device orientation supported')
        window.addEventListener('deviceorientation', function(eventData) {
        // gamma is the left-to-right tilt in degrees, where right is positive
            tiltLR = eventData.gamma;
        // beta is the front-to-back tilt in degrees, where front is positive
            tiltFB = eventData.beta;
        // alpha is the compass direction the device is facing in degrees
            dir = eventData.alpha

            var data = {
               alpha: eventData.alpha,
               beta: eventData.beta,
               gamma: eventData.gamma
            };

            detectData = data;
            socket.emit('orientationData', data);

        }, false);
    }

    setInterval(function(){console.log("sending this device data: ", detectData)}, 1000)
})
