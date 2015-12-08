// app.js
// var app = angular.module('devDance', [])
// window.app = app;
////rooms: 
// we need this socket object to send messages to our server 
var socket = io(window.location.origin); 

// var renData;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 0, 1, 0 );
scene.add( directionalLight );



var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// CUBE
var geometry = new THREE.BoxGeometry( 2, 0.2, 3.5 );
var material = new THREE.MeshPhongMaterial( { color: 0x4169e1, transparency: 0} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

camera.position.z = 4;

socket.on('connect', function(){

    console.log('app made a two-way connection!');
    
    var renData;
    var beta = 0;
    var gamma = 0;
    var alpha = 0;

	socket.on('broadcastData', function(renderData){
    	if(renderData){
    		renData = renderData;
			// setInterval(function(){ 
			beta = renData.beta * Math.PI/180;
			gamma = renData.gamma * Math.PI/180;
			alpha = renData.alpha * Math.PI/180;
		}		
	})

	setInterval(function(){console.log('device data via server- beta:', Math.floor(beta), 'gamma:',  Math.floor(gamma))}, 1000)
	
	function render() {
		requestAnimationFrame( render );

// -=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-
//	AUTO-MOVING FOR TESTING RENDER GRAPHICS
	// cube.rotation.x += 0.015;
	// cube.rotation.y += 0.01;
// -=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-

		var m = new THREE.Matrix4();
		var mx = new THREE.Matrix4();
		var my = new THREE.Matrix4();
		var mz = new THREE.Matrix4();



		mx.makeRotationX(beta);
		my.makeRotationZ(-gamma);
		mz.makeRotationY(alpha);

		m.multiplyMatrices(mx, my);
		m.multiply(mz);

		cube.rotation.setFromRotationMatrix(m);

			
		renderer.render( scene, camera );
	}

	render();
})

	

/*

			// cube.rotation.set(beta);

			// cube.rotation.x += (
						// renderBeta +
						// || 
						// 0.0015
						// );
			// cube.rotation.y += (
							// gamma || 
							// 0.001);

	// setInterval(function(){
	// 	var stepBeta = beta;
	// 	var stepGamma = gamma;
	// }, 500)

	function render(renderBeta, renderGamma) {
		requestAnimationFrame( render );
			var radians = 0.01
			
			// update  frames only:
			if (frameCounter <= 1000){
				frameCounter += 1;
			} else { frameCounter = 0 }

			if (frameCounter % 20 === 0){
				radians += renderBeta;
			}

			cube.rotateX(radians
				// + renderBeta
				);
			// cube.rotateY(renderGamma);
			// cube.rotation.x += (
						// renderBeta +
						// || 
						// 0.0015
						// );
			// cube.position.x += renderGamma
			// cube.rotation.y += (
			// 				// gamma || 
			// 				0.001);
		renderer.render( scene, camera );
	}

			// var radians = 0.01
			
			// update  frames only:
			// if (frameCounter <= 1000){
			// 	frameCounter += 1;
			// } else { frameCounter = 0 }

			// if (frameCounter % 20 === 0){
			// 	radians += renderBeta;
			// }

			// cube.rotation.rotateX 
				// + renderBeta
				// );
			// cube.rotateY(renderGamma);
			


*/





