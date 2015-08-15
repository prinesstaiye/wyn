$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  		alert("yay! it worked");
	});

$('#Post').bind("click", function(e) {
     var fileUploadControl = $("#Upload")[0];
     var file = fileUploadControl.files[0];
     var filename = file.name; //This does *NOT* need to be a unique name
     var parseFile = new Parse.File(name, file);
     
     parseFile.save().then(function() {

     var UploadPost = new Parse.Object("Upload");
     UploadPost.set("Username", "John Smith");
     UploadPost.set("Photo", parseFile);
     UploadPost.save();

    }, function(error) {

      //error handling

    });

}); //end click handler for upload button

});  //end document ready