 // $(document).ready(function() {
Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
			/* var pictureSource;   // picture source
		 var destinationType; // sets the format of returned value

		 // Wait for Cordova to connect with the device
		 //
		 document.addEventListener("deviceready",onDeviceReady,false);

		 // Cordova is ready to be used!
		 //
		 function onDeviceReady() {
				 pictureSource=navigator.camera.PictureSourceType;
				 destinationType=navigator.camera.DestinationType;
		 }

		 // Called when a photo is successfully retrieved
		 //
		 function onPhotoDataSuccess(imageData) {
			 // Uncomment to view the base64 encoded image data
			 // console.log(imageData);

			 // Get image handle
			 //
			 var smallImage = document.getElementById('smallImage');

			 // Unhide image elements
			 //
			 smallImage.style.display = 'block';

			 // Show the captured photo
			 // The inline CSS rules are used to resize the image
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
			 // The inline CSS rules are used to resize the image
			 //
			 largeImage.src = imageURI;
		 }

		 // A button will call this function
		 //
		 function capturePhoto() {
			 // Take picture using device camera and retrieve image as base64-encoded string
			 navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
				 destinationType: destinationType.DATA_URL });
		 }

		 // A button will call this function
		 //
		 function capturePhotoEdit() {
			 // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
			 navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
				 destinationType: destinationType.DATA_URL });
		 }

		 // A button will call this function
		 //
		 function getPhoto(source) {
			 // Retrieve image file location from specified source
			 navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
				 destinationType: destinationType.FILE_URI,
				 sourceType: source });
		 }

		 // Called if something bad happens.
		 //
		 function onFail(message) {
			 alert('Failed because: ' + message);
		 }

		  var NoteOb = Parse.Object.extend("Upload");
		 	var imagedata = "";
			var noteText = $("#QuestionText").val();

 	$("#Post").on("touchend", function(e) {
		 if(imagedata != "") {
	 var parseFile = new Parse.File("mypic.jpg", {base64:imagedata});
	 console.log(parseFile);
		 parseFile.save().then(function() {
			 var note = new NoteOb();
			 note.set("Username", Parse.User.current().getUsername());
			 note.set("Question",noteText);
			 note.set("Photo",parseFile);
			 note.save(null, {
				 success:function(ob) {
					location.replace("profile.html");
				 }, error:function(e) {
					alert("error");
				 }
			 });
			 });}
			 else {
			 	alert("You must add a picture!");
			 }
		 });

		 function gotPic(data) {
	 console.log('got here');
	 imagedata = data;
 }

 function failHandler(e) {
	 alert("ErrorFromC");
	 alert(e);
	 console.log(e.toString());
 } */



 $("#Upload").on("click", function(e) {
e.preventDefault();
navigator.camera.getPicture(gotPic, failHandler, {quality:50, destinationType:navigator.camera.DestinationType.DATA_URL, sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY});

});

function gotPic(data) {
var parseFile = new Parse.File("mypic.jpg", {base64:data});
		parseFile.save().then(function() {
				navigator.notification.alert("Got it!", null);
				console.log("Ok");
				console.log(arguments.toString());
		}, function(error) {
				console.log("Error");
				console.log(error);
		});
}
