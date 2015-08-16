$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  		alert("yay! it worked");
	});
		var currentUser = Parse.User.current();
		var username = document.getElementById('username').innerHTML;
		currentUser.fetch().then(function(fetchedUser){
    var username = fetchedUser.getUsername();
    $( "#username" ).replaceWith( fetchedUser.getUsername() );
}, function(error){
    //Handle the error
});

		$("#Logout").click(function() { Parse.User.logOut();

		var currentUser = Parse.User.current();
		window.location.replace("index.html");  // this will now be null
	});
});
