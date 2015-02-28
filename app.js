var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Job = require('./models/jobSchema.js');
mongoose.connect('mongodb://localhost/mfapp');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});


// displays a list of applicants
app.get('/applicants', function(req, res){
	Job.find({}, function(err, data){
		if (err){
			console.log("Cannot read job applicant");
		} else {
			console.log(data);
			res.render( 'applications', {applicantData:data});
		}
	})
	
});

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	var jobInstance = new Job(req.body);

// Save Instance
 	jobInstance.save(function(err, result){
 		console.log('error', err);
 		console.log('result', result);

 	});
 	res.redirect('/applicants');

	console.log(req.body);
	//res.redirect('/success');
	//res.send('Success');
});

app.get('/success', function(req, res ){
	res.render('success');
})


var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});