//detect.controller.js

app.controller('detectCtrl', function ($scope, socket){

    var socket = io(window.location.origin)s

    socket.on('connect', function(){

        if (window.DeviceOrientationEvent) {
            console.log("DeviceOrientation is supported");
            
            var tiltLR;
            var tiltFB;
            var direction;
        
            window.addEventListener('deviceorientation', function(eventData) {
            // gamma is the left-to-right tilt in degrees, where right is positive
            // beta is the front-to-back tilt in degrees, where front is positive
            // alpha is the compass direction the device is facing in degrees
                $scope.tiltLR = eventData.gamma;
                $scope.tiltFB = eventData.beta;
                $scope.direction = eventData.alpha;
                
                tiltLR = eventData.gamma;
                tiltFB = eventData.beta;
                direction = eventData.alpha;
                
                var data = {
                    alpha: eventData.alpha,
                    beta: eventData.beta,
                    gamma: eventData.gamma
                };

                // send to server   
                Socket.emit('orientationData', data);

            // deviceOrientationHandler(tiltLR, tiltFB, dir);
            }, false);
        }
    })

    setInterval(function(){console.log("tiltLR", tiltLR, "tiltFB", tiltFB, "dir", direction)}, 1000);

})