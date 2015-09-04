
//
var pictureSource; // picture source
var destinationType; // sets the format of returned value
var imagedata = "";
// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
    // Uncomment to view the base64-encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage = document.getElementById('smallImage');

    // Unhide image elements
    //
    smallImage.style.display = 'block';

    // Show the captured photo
    // The in-line CSS rules are used to resize the image
    //
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    // Uncomment to view the image file URI
    // console.log(imageURI);

    // Get image handle
    //
    var largeImage = document.getElementById('largeImage');

    // Unhide image elements
    //
    largeImage.style.display = 'block';

    // Show the captured photo
    // The in-line CSS rules are used to resize the image
    //
    largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}

// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20,
        allowEdit: true,
        destinationType: destinationType.DATA_URL
    });
}

// A button will call this function
//
$("#SelectPic").on("click", function(e) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {quality:50, destinationType:navigator.camera.DestinationType.DATA_URL,
			 sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY});
});

// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}

//  });
  /*  $('#Post').bind("click", function(e) {
    var noteText = $("#QuestionText").val();
    var parsefile = new Parse.File("mypic.jpg", { base64: imagedata });
    console.log(parseFile);
    parseFile.save().then(function() {
        var note = new Parse.Object.extend("Upload");
        note.set("Username", Parse.User.current().getUsername());
        note.set("Question", noteText);
        note.set("Photo", parseFile);
        note.save();
        alert("Success! You make check your results in your profile page");
    });
*/

    $('#Post').bind("click", function(e) {

      var noteText = $("#QuestionText").val();
      var parsefile = new Parse.File("mypic.jpg", { base64: imagedata });
      console.log(parseFile);
      parseFile.save().then(function() {

         var note = new Parse.Object("Upload");
         note.set("Username", Parse.User.current().getUsername());
         note.set("Question", noteText);
         note.set("Photo", parseFile);
         note.save();
         alert("Success");
        }, function(error) {

          alert("error:" + JSON.stringify(error));

        });
});
