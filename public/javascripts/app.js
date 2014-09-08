var app = angular.module('mean-thinkster', [
	'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.jade',
			controller: 'MainCtrl'
		})
})