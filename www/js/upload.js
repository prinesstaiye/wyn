 $( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
    var pictureSource;
    var destinationType;

    document.addEventListener("deviceready",onDeviceReady,false);

    function onDeviceReady()
    {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }


    function onPhotoURISuccess(imageURI)
    {
        console.log(imageURI);
        var largeImage = document.getElementById('largeImage');
        largeImage.style.display = 'block';
        largeImage.src = imageURI;
    }

    function onPhotoDataSuccess(imageURI)
    {
        var imgProfile = document.getElementById('imgProfile');
        imgProfile.src = imageURI;
        if(sessionStorage.isprofileimage==1)
        {
            getLocation();
        }
        movePic(imageURI);
    }

    function movePic(file)
    {
        window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError);
    }

    function resolveOnSuccess(entry)
    {
        var d = new Date();
        var n = d.getTime();
        var newFileName = n + ".jpg";
        var myFolderApp = "MyAppFolder";
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys)
        {
            fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory)
                    {
                        entry.moveTo(directory, newFileName,  successMove, resOnError);
                    },
            resOnError);
        },
        resOnError);
    }

    function successMove(entry)
    {
        sessionStorage.setItem('imagepath', entry.fullPath);
    }

    function resOnError(error)
    {
        alert(error.code);
    }

        function getPhoto(source)
    {
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }
    
    function onFail(message)
    {
        alert('Failed because: ' + message);
    }

/*  $('#Post').bind("click", function(e) {
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
*/


  });
