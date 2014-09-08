app.controller('MainCtrl', function($scope, Post){
	$scope.posts = Post.posts;

	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
	}

	$scope.addPost = function(){
		// validation
		if($scope.title === '') { return; }

		$scope.posts.push({
		  title: $scope.title,
		  link: $scope.link,
		  upvotes: 0,
		  comments: []
		});
		
		$scope.title = '';
		$scope.link = '';
	}
})