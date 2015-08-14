$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  		alert("yay! it worked");
	});
$("#Post").click(function() {
	  function saveJobApp(objParseFile)
  {
     var jobApplication = new Parse.Object("JobApplication");
     jobApplication.set("applicantName", "Joe Smith");
     jobApplication.set("profileImg", objParseFile);
     jobApplication.save(null, 
     {
        success: function(gameScore) {
          // Execute any logic that should take place after the object is saved.
          var photo = gameScore.get("profileImg");
          $("#profileImg")[0].src = photo.url();
        },
        error: function(gameScore, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and description.
          alert('Failed to create new object, with error code: ' + error.description);
        }
     });
  }

   
  	$('#Upload').bind("change", function(e) {
         var fileUploadControl = $("#Upload")[0];
         var file = fileUploadControl.files[0];
         var name = file.name; //This does *NOT* need to be a unique name
         var parseFile = new Parse.File(name, file);

         parseFile.save().then
         (
           function() 
           {
               saveJobApp(parseFile);
           }, 
           function(error) 
           {
             alert("error");
           }
         );
  }); 
});
});
