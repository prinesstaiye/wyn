$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  		alert("yay! it worked");
	});

	var fileUploadControl = $("#Upload")[0];
if (fileUploadControl.files.length > 0) {
  var file = fileUploadControl.files[0];
  var name = "photo.jpg";

  var parseFile = new Parse.File(name, file);
}
parseFile.save().then(function() {
  alert("File has been saved!");
}, function(error) {
	alert("Error!");
  // The file either could not be read, or could not be saved to Parse.
});
$("#Login").click (function (){	
	var Upload = new Parse.Object("Upload");
	Upload.set("Username", Parse.User.current());
	Upload.set("Photo", parseFile);
	Upload.save();
});
});
