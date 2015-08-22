$( document ).ready(function () {
Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
/**
 * jTinder initialization
 */


/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class', "unique"));
});

var posts = Parse.Object.extend("Upload");
var findPost = new Parse.Query("Upload");

// <li class="pane1">
//                     <div class="img"></div>
//                     <div>Placeholder</div>
//                     <div class="like"></div>
//                     <div class="dislike"></div>
//                 </li>

var currentUser = Parse.User.current();


 findPost.notEqualTo("Username", currentUser.getUsername());
 findPost.find({
 	success:function(results){
 		for (var i=0; i<results.length; i++) {
 			var post = results[i];
 			var question = post.get("Question");
			var photo = post.get("Photo").url();
 			// var $img = $("<div style = 'background-image:url("+photo+");  background-size: 100% 100%; background-repeat: no-repeat;'> </div>").addClass("img");
 			var $question = $("<div> </div>").addClass("question").text(question);
 			var $li = $("<li> </li>").addClass( "pane"+ i );
 			// $li.append($img);
 			$li.css("background-image", "url("+photo+")");
 			$li.css("background-size", "100% 100%");
 			$li.append($question);
 			$li.append('<div class="like"> </div> <div class="dislike"> </div>');
 			$("#Posts").append($li);
 		}
 		$("#tinderslide").jTinder({
			// dislike callback
		    onDislike: function (item) {
			    // set the status text
		       //saving dislike
		    },
			// like callback
		    onLike: function (item) {
			    // set the status text
		       //like
		       //pull from parse, counting: filter by upload, group by likes (should give photo likes, photo dislikes) loop through it
		       //not letting user see what they already swiped (join. exclude where currentusers exist in the table) ()
		       //current user = dont show photo and swiped = dont show user photo
		       //join the two things above ^

		       //results page:
		       //

		    },
			animationRevertSpeed: 200,
			animationSpeed: 400,
			threshold: 1,
			likeSelector: '.like',
			dislikeSelector: '.dislike'
		});
 	},
 	error:function(error){
 		console.log("Error: " + error.code + " " + error.message);
 		}
 });
});
