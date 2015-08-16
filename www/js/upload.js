$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
        alert("yay! it worked");
    });

  $('#Post').bind("click", function(e) {
         var fileUploadControl = $("#profilePhotoFileUpload")[0];
         var file = fileUploadControl.files[0];
         var name = file.name; //This does *NOT* need to be a unique name
         var parseFile = new Parse.File(name, file);
            

         parseFile.save().then(function saveJobApp (objParseFile) {

     var jobApplication = new Parse.Object("Upload");
     jobApplication.set("Username", "Joe Smith");
     jobApplication.set("Photo", objParseFile);
     jobApplication.save();
         },
           function(error) 
           {
             alert("error");
           });
       });
  });