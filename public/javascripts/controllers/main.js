app.controller('MainCtrl', function($scope, Post){
	$scope.posts = Post.posts;

	$scope.incrementUpvotes = function(post){
		Post.upvote(post);
	}

	$scope.addPost = function(){
		// validation
		if($scope.title === '') { return; }

		Post.create({
		  title: $scope.title,
		  link: $scope.link
		});
		
		$scope.title = '';
		$scope.link = '';
	}
})