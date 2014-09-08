var path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		database: 'mongodb://localhost/mean-thinkster',
		port: process.env.PORT || 3000
	},
	testing: {

	},
	production: {
		rootPath: rootPath,
		database: 'mongodb://jasonshark:multivision@ds037478.mongolab.com:37478/multivision',
		port: process.env.PORT || 80
	}
}
