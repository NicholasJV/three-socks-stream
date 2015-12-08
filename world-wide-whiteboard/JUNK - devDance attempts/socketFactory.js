// socketFactory.jss
app.factory('socket', ['$rootScope', function ($rootScope) {
    var socket = io.connect();
    
    console.log("socket created");
 
    return {
        on: function (eventName, callback) {
            function wrapper() {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            }
 
            socket.on(eventName, wrapper);
 
            return function () {
                socket.removeListener(eventName, wrapper);
            };
        },
 
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if(callback) {
                        callback.apply(socket, args);
                    }
                });
            });
        }
    };
}]);




// window.app = angular.module('DevDancerApp', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

// app.factory('Socket', function(){

// 	return window.io(window.location.origin); 
	
// })

