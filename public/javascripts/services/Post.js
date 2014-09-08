app.factory('Post', function(){
	return {
		posts: [
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
		]
	}
})