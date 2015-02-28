var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
	name: String,
	bio: String,
	skills: String,
	years: Number,
	why: String
});

var Job = mongoose.model('Job', jobSchema);

// Create Instance


 	// export the model

 	module.exports = Job;