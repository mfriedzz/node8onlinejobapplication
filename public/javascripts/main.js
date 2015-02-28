// $(function(){

// });

var jobView = function(e){
	e.preventDefault();

	
};

var applicantDelete = function(e){
	e.preventDefault();

	var originalApplicant = $(this).closest('jobid');
	var targetId = originalApplicant.attr('data-id');

	$.post('/deleteApplicant', {targetId: targetId}, function(dataFromServer){
			originalApplicant.remove();
	});

};


$(document).on('ready', function(){
 
  // Handle view clicks
  $(document).on('click', '.view', jobView);

  // Delete applicant
  $(document).on('click', '.delete', deleteApplicant);

 
});
