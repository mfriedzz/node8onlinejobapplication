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

var jobInstance = new Job({
	applicantName: "John Doe",
	applicantDescription: "lots of stuff",
	applicantExperience: " Done a million jobs",
	applicantYearsExperience: 5,
	applicantJobDesc: "Entry level programmer"
});

// Save Instance
 	jobInstance.save(function(err, result){
 		console.log('error', err);
 		console.log('result', result);

 	});

 	// export the model

 	module.exports = Job;