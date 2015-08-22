$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
		var currentUser = Parse.User.current();
		var username = document.getElementById('username').innerHTML;
		currentUser.fetch().then(function(fetchedUser){
    var username = fetchedUser.getUsername();
    $( "#username" ).replaceWith( fetchedUser.getUsername() );
}, function(error){
    //Handle the error
});

var posts = Parse.Object.extend("Upload");
var findPost = new Parse.Query("Upload");


findPost.equalTo("Username", currentUser.getUsername());
findPost.find({
 success:function(results){
   for (var i=0; i<results.length; i++) {
     var post = results[i];
     var question = post.get("Question");
     var photo = post.get("Photo").url();
     // var $img = $("img src="("+photo)".addClass("img")));
     var $question = $("<div> </div>").addClass("quests").text(question);
     var $li = $("<li> </li>").addClass( "Questions"+ i );
     // $li.append($img);
     // $li.css("image", "url("+photo+")");
     //$li.css("height", "10%");
     //$li.css("width", "10%");
     $li.css("padding", "5%");
     $li.append($question);
     $("#quesults").append($li);
   }
 }
});




		$("#Logout").click(function() { Parse.User.logOut();

		var currentUser = Parse.User.current();
		window.location.replace("index.html");  // this will now be null
	});
});
