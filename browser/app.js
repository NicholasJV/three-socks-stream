// app.js

var socket = io(window.location.origin);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 0, 1, 0 );
scene.add( directionalLight );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// CUBE creator
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
    	// renData = renderData;
			beta = renderData.beta * Math.PI/180;
			gamma = renderData.gamma * Math.PI/180;
			alpha = renderData.alpha * Math.PI/180;
		}
	})

	// uncomment this to see device data stream logged:
	// setInterval(function(){console.log('device data via server- beta:',
	//		Math.floor(beta), 'gamma:',  Math.floor(gamma))}, 1000)

	function render() {
		requestAnimationFrame( render );

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


// -=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-
//	AUTO-MOVING FOR TESTING RENDER GRAPHICS
// 		cube.rotation.x += 0.015;
//		cube.rotation.y += 0.01;
// -=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-
