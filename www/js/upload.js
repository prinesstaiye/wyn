 /*$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");


  $('#Post').bind("click", function(e) {
        var fileUploadControl = $("#Upload")[0];
         var file = fileUploadControl.files[0];
         var name =  new Date().getTime() + ".jpg"; //This does *NOT* need to be a unique name
         var parseFile = new Parse.File(name, file);


         parseFile.save().then(function saveJobApp (objParseFile) {


     var jobApplication = new Parse.Object("Upload");
     jobApplication.set("Question", $("#QuestionText").val());
     jobApplication.set("Username", Parse.User.current().getUsername());
     jobApplication.set("Photo", objParseFile);
     jobApplication.save();
     alert("Success! You may check your results on your profile page!");
     location.reload();
         },
           function(error)
           {
             alert("error:" + JSON.stringify(error));
           });
       });



  });*/
  var pictureSource;
  var destinationType;

  document.addEventListener("deviceready",onDeviceReady,false);

  function onDeviceReady()
  {
      pictureSource=navigator.camera.PictureSourceType;
      destinationType=navigator.camera.DestinationType;
  }


  function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
      destinationType: destinationType.FILE_URI,
      sourceType: source });
  }
