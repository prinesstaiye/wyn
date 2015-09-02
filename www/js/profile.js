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
    (function () {
        var post = results[i];

        var like = new Parse.Query("Results");
        like.equalTo("Question",post);
        var likePromise = like.find();

        likePromise.then(function (results ) {
            var groupedResults = _.groupBy(results, function(result) {return result.get("Like");});
             var question = post.get("Question");
             var photo = post.get("Photo").url();
             var $img = $("<img src="+photo+">");
             var $question = $("<div> </div>").addClass("quests").text(question);
             var $li = $("<li> </li>").addClass( "Questions"+ i );
             var liked = !groupedResults["true"]  ? 0: groupedResults["true"].length;
             var disliked = !groupedResults["false"]  ? 0: groupedResults["false"].length;
             var $way = $("<p>Ways: " + liked + "<p>");
             var $noway = $("<p>No Ways: " + disliked + "<p>");
             $li.append($question);
             $li.append($img);
             //$li.css("image", "url("+photo+")");
             
             $img.css("height", "20%");
             $img.css("width", "20%");
             $img.css("margin-bottom", "10px");
             $img.css("margin-top", "10px");

             $question.css("font-weight", "bold");
             // $li.css("padding", "5%");
             $way.css("font-weight", "bold");
             $way.css("color", "blue");
             $noway.css("font-weight", "bold");
             $noway.css("color", "red");
             $noway.css("margin-top", "-5px");
             $li.append($way);
             $li.append($noway);
             $("#quesults").append($li);
         });
        }())
   }
 }
});




		$("#Logout").click(function() { Parse.User.logOut();

		var currentUser = Parse.User.current();
		window.location.replace("index.html");  // this will now be null
	});
});
