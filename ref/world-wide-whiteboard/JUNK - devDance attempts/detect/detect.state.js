// detect.state.js

app.config( function ($stateProvider){
	$stateProvider.state('detectState', {
		url: "/detect",
		templateUrl: "detect/detect.html",
		controller: 'detectCtrl'
	})
})