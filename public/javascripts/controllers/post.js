app.controller('PostCtrl', function($scope, $stateParams, Post){
	console.log('posts controller')
	$scope.post = Post.posts[$stateParams.id]
})