// scene.state.js

app.config( function ($stateProvider){
	$stateProvider.state('sceneState', {
		url: "/scene",
		templateUrl: "scene/scene.html",
		controller: 'sceneCtrl'
	})
})

