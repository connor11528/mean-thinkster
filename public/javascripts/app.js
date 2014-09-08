var app = angular.module('mean-thinkster', [
	'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home',
			controller: 'MainCtrl',
			resolve: {
				postPromise: function(Post){
					return Post.getAll();
				}
			}
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partials/about'
		})
		.state('post', {
			url: '/post/{id}',	// id as a $stateParams.id
			// template: '<div>{{ post }}</div> is that',
			templateUrl: "partials/post",
			controller: 'PostCtrl'
		});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
})