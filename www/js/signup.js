$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  		alert("yay! it worked");
	});
	
	$("#SignUp").click(function(){
		var user = new Parse.User();
		user.set("username", $("#UsernameUp").val() );
		user.set("password", $("#PasswordUp").val() );
		user.set("email", $("#EmailUp").val() );
		user.signUp (null, {
  			success: function(user) {
    			alert("Success! You are ready to log in.");
    			window.location.href = "index.html"; 
  			},
  			error: function(user, error) {
    		// Show the error message somewhere and let the user try again.
    		alert("Error: " + error.code + " " + error.message); 
  			}
  		});
	});
});
function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('PasswordUp');
    var pass2 = document.getElementById('ConfPasswordUp');
    if(pass1.value == pass2.value){
        //The passwords match. 
        document.getElementById("SignUp").disabled = false;
    }else{
      document.getElementById("SignUp").disabled = true;
    }
}  
