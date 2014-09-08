var express = require('express');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var api = express.Router();

module.exports = function(app){

	// attach post to req obj (req.post)
	api.param('post', function(req, res, next, id){
		var query = Post.findById(id);
		query.exec(function(err, post){
			if(err) return next(err);
			if(!post) return next(new Error('cannot find post'));
			req.post = post;
			return next();
		})
	});

	api.get('posts/:post', function(req, res){
		req.post.populate('comments', function(err, post){
			res.json(post);
		})
	});

	// all posts
	api.get('/posts', function(req, res, next){
		Post.find(function(err, posts){
			if (err) return next(err);
			res.json(posts);
		});
	});

	// create post
	api.post('/posts', function(req, res, next){
		var post = new Post(req.body);
		post.save(function(err, post){
			if (err) return next(err);
			res.json(post);
		})
	});

	api.put('/posts/:post/upvote', function(req, res, next){
		req.post.upvote(function(err, post){
			if(err) return next(err);
			res.json(post);
		})
	});

	api.post('/posts/:post/comments', function(req, res, next){
		var comment = new Comment(req.body);
		comment.post = req.post;

		comment.save(function(err, comment){
			if (err) return next(err);
			req.post.comments.push(comment);
			req.post.save(function(err, post){
				// post updated
				if(err) return next(err);
				res.json(comment);
			});
		});
	});

	app.use('/api', api);
	// not found error for undefined API routes
	app.all('/api/*', function(req, res){
		res.status(status).end();
	});

	//server side route for the angularjs partials
	app.get('/partials/:name', function(req, res){
		// http://expressjs.com/api#router
		// mergeParams Ensure the req.params values from the parent router are preserved. If the parent and the child have conflicting param names, the child's value take precedence. Defaults to false.
		res.render('partials/' + req.params.name);
	});

	// everything else handled by this route
	app.get('*', function(req, res){
		res.render('layout');
	});

};