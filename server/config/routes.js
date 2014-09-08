var express = require('express');
var router = express.Router();

module.exports = function(app){

	//server side route for the angularjs partials
	app.get('/partials/:name', function(req, res){
		res.render('partials/' + req.params.name);
	})

	// not found error for undefined API routes
	app.all('/api/*', function(req, res){
		res.send(404)
	})

	// everything else handled by this route
	app.get('*', function(req, res){
		res.render('layout');
	});
};