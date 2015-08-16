// $( document ).ready(function () {
//    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
//    var TestObject = Parse.Object.extend("TestObject");
//    var testObject = new TestObject();
//    testObject.save({foo: "bar"}).then(function(object) {
//        alert("yay! it worked");
//    });

//  $('#Post').bind("click", function(e) {
//       var fileUploadControl = $("#profilePhotoFileUpload")[0];
//         var file = fileUploadControl.files[0];
//         var name = file.name; //This does *NOT* need to be a unique name
//         var parseFile = new Parse.File(name, file);
//            
//
//         parseFile.save().then(function saveJobApp (objParseFile) {
//
//     var jobApplication = new Parse.Object("Upload");
//     jobApplication.set("Username", "Joe Smith");
//     jobApplication.set("Photo", objParseFile);
//     jobApplication.save();
//         },
//           function(error) 
//           {
//             alert("error");
//           });
//       });
//  });

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

function onFail(message) 
{
    alert('Failed because: ' + message);
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

function capturePhotoEdit() 
{
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
    destinationType: destinationType.DATA_URL });
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