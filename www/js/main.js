 	$(document).ready(function() {
	    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
	    /**
	     * jTinder initialization
	     */
$(".glyphicon.glyphicon-home").addClass("active")
	    /**
	     * Set button action to trigger jTinder like & dislike.
	     */
	    $('.actions .like, .actions .dislike').click(function(e) {
	        e.preventDefault();
	        $("#tinderslide").jTinder($(this).attr('class', "unique"));
	    });

	    var posts = Parse.Object.extend("Upload");
	    var findPost = new Parse.Query("Upload");
	    var Result = Parse.Object.extend("Results");
	    

	    // <li class="pane1">
	    //                     <div class="img"></div>
	    //                     <div>Placeholder</div>
	    //                     <div class="like"></div>
	    //                     <div class="dislike"></div>
	    //                 </li>

	    var currentUser = Parse.User.current();


	    findPost.notEqualTo("Username", currentUser.getUsername());
	    findPost.find({
	        success: function(results) {
	            for (var i = 0; i < results.length; i++) {
	                var post = results[i];
	                var question = post.get("Question");
	                var photo = post.get("Photo").url();
	                // var $img = $("<div style = 'background-image:url("+photo+");  background-size: 100% 100%; background-repeat: no-repeat;'> </div>").addClass("img");
	                var $question = $("<div> </div>").addClass("question").text(question);
	                var $li = $("<li> </li>").addClass("pane" + i);
	                // $li.append($img);
	                $li.css("background-image", "url(" + photo + ")");
	                $li.css("background-size", "100% 100%");
	                $li.append($question);
	                $li.append('<div class="like"> </div> <div class="dislike"> </div>');
	                $("#Posts").append($li);
	            }
	            $("#tinderslide").jTinder({

	                // dislike callback
	                onDislike: function(item) {
	                    // set the status text
	                    //saving dislike
	                    var result = new Result();
	                    var question = results[item.attr("class").substr(4)];
	                 //  var question = post.get("Question");
	                    
	                    result.relation("Users").add(Parse.User.current());
	                    result.relation("Question").add(question);
	                    result.set("Username", Parse.User.current().getUsername());
	                    result.set("Like", false);
	                    result.save();

	                },
	                // like callback
	                onLike: function(item) {

	                     var result = new Result();
	                    var question = results[item.attr("class").substr(4)];
	                 //  var question = post.get("Question");
	                    
	                    result.relation("Users").add(Parse.User.current());
	                    result.relation("Question").add(question);
	                    result.set("Username", Parse.User.current().getUsername());
	                    result.set("Like", true);
	                    result.save();
	                },
	                animationRevertSpeed: 200,
	                animationSpeed: 400,
	                threshold: 1,
	                likeSelector: '.like',
	                dislikeSelector: '.dislike'
	            });
	        },
	        error: function(error) {
	            console.log("Error: " + error.code + " " + error.message);
	        }
	    });
	});