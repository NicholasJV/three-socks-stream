// scene.controller.js


app.controller('sceneCtrl', function ($scope, socket){

	var renData;

	socket.on('connect', function(){

		socket.on('broadcastData', function(renderData){
	        renData = renderData;
	    })
		
	}) 

    setInterval(function(){console.log('data back from server:', renData)}, 1000)

})