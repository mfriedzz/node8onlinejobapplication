var Job = require('../models/jobSchema.js')
var indexController = {
	index: function(req, res) {
	Job.find({}, function(err, jobsfromDB){

		res.render('index', {
			Job: jobsfromDB
		});
	});
		
},
	getApplicant: function(req,res){
		var applicantId = req.params.job._id;
		Job.findById(applicantId, function(err, result) {
			console.log("Err", err);
			console.log("result", result);
			res.send(result);
		});


	},

	deleteApplicant: function(req, res){
		var deleteid = req.params.id;
		Job.findByIdAndRemove(deleteid, function(err, result){
			//res.send('Successful Delete');
			res.redirect('/applicants');	
		});
	}
	

};

module.exports = indexController;