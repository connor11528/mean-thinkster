var express = require('express');
var router = express.Router();

module.exports = function(app){

	//server side route for the angularjs partials
	app.get('/views/*', function(req, res){
		console.log(req.params[0])
		res.render('../../public/views/' + req.params[0]);
	})

	// not found error for undefined API routes
	app.all('/api/*', function(req, res){
		res.send(404)
	})

	// everything else handled by this route
	app.get('*', function(req, res){
		res.render('index', { title: 'My title'})
	})
};