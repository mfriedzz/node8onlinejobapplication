var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
	applicantName: String,
	applicantDescription: String,
	applicantExperience: String,
	applicantYearsExperience: Number,
	applicantJobDesc: String
});

var Job = mongoose.model('Job', jobSchema);

// Create Instance


 	// export the model

 	module.exports = Job;