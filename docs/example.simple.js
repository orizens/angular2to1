// supported api
// with controller as a string
var YoutubeVideos = angular
.Component({
	selector: 'my-app'
	appInjector: [ 
		'core.services'
	]
})
.View({
	templateUrl: 'app/my-app/my-app.tpl.html'
})
.Class({
	constructor: 'MyAppCtrl'
})

// supported api
// with controller as a function
function MyAppCtrl (coreServices) {
	this.name = 'Wall-e';
};

var YoutubeVideos = angular
.Component({
	selector: 'my-app'
	appInjector: [ 
		'core.services'
	]
})
.View({
	templateUrl: 'app/my-app/my-app.tpl.html'
})
.Class({
	constructor: MyAppCtrl
})