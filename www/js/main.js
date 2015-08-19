$( document ).ready(function () {
Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
/**
 * jTinder initialization
 */
$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
	    // set the status text
        $('#status').html('Dislike image ' + (item.index()+1));
    },
	// like callback
    onLike: function (item) {
	    // set the status text
        $('#status').html('Like image ' + (item.index()+1));
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

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
console.log(currentUser)

 findPost.notEqualTo("Username", String(currentUser));
 findPost.find({
 	success:function(results){
 		for (var i=0; i<results.length; i++) {
 			var post = results[i];
 			var question = post.get("Question");
			var photo = post.get("Photo");
 			console.log(question);
 			var $img = $("<div> </div>").addClass("img");
 			var $question = $("<div> </div>").addClass("question").text(question);
 			var $li = $("<li> </li>").addClass( "pane" + i);
 			$li.append($question)
 			$("#Posts").append($li);

 		}
 	},
 	error:function(error){
 		console.log("Error: " + error.code + " " + error.message);
 		}
 })
});