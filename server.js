var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var config = require('./server/config/environments')[env];
var app = express();

// Express config
require('./server/config/express')(app, config);

// MongoDB
var mongoose = require('mongoose');
mongoose.connect(config.database);
require('./server/models/Post');
require('./server/models/Comment');


// Routes
require('./server/config/routes')(app);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});