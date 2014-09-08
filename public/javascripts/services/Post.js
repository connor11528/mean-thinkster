app.factory('Post', function($http){
	var Post = {};

	Post.posts = [
		{
		  title: 'Google',
		  link: 'google.com',
		  upvotes: 8,
		  comments: [
		    {author: 'Kate', body: 'google is a search engine', upvotes: 0},
		    {author: 'Louise', body: 'Fictional comment', upvotes: 0}
		  ]
		},
		{
		  title: 'Facebook',
		  link: 'facebook.com',
		  upvotes: 2,
		  comments: [
		    {author: 'Joe', body: 'Cool post!', upvotes: 0},
		    {author: 'John', body: 'Great idea dude!', upvotes: 0}
		  ]
		},
		{
		  title: 'Something else',
		  link: 'funnyjunk.com',
		  upvotes: 1,
		  comments: [
		    {author: 'Joe', body: 'First comment', upvotes: 0},
		    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
		  ]
		},
		{
		  title: 'My site',
		  link: 'github.com/jasonshark',
		  upvotes: 13,
		  comments: [
		    {author: 'Mary', body: 'Cool post about your site!', upvotes: 0},
		    {author: 'Thorn', body: 'Great idea!', upvotes: 0}
		  ]
		}
	];

	Post.upvote = function(post){
		return $http.put('api/posts/' + post._id + '/upvote')
			.success(function(data){
				post.upvotes += 1;
			})
	}

	Post.getAll = function(){
		$http.get('api/posts').success(function(data){
			angular.copy(Post.posts, data);
		})
	};

	Post.create = function(post){
		return $http.post('api/posts', post).success(function(data){
			Post.posts.push(data);
		})
	}

	return Post;
})