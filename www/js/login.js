$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  		alert("yay! it worked");
	});
	var currentUser = Parse.User.current();
if (currentUser) {
    window.location.replace("homepage.html");
} else {
}
	$("#Login").click(function() {
		Parse.User.logIn($("#UsernameIn").val(), $("#PasswordIn").val(), {
	  		success: function(user) {
	    		window.location.replace("homepage.html");
	  		},
	  		error: function(user, error) {
	    		alert("Error: " + error.code + " " + error.message); z
	  		}
		});
	})
});
