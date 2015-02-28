var Job = require('../models/jobSchema.js')
var indexController = {
	index: function(req, res) {
	Job.find({}, function(err, jobsfromDB){

		res.render('index', {
			Job: jobsfromDB
		});
	});
		
}
	

};

module.exports = indexController;