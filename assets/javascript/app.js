$("document").ready(function(){

	//Creates, appends, and autoruns the anthem music
	$("<audio>").attr({
	    'src':'assets/audio/Russian-anthem.mp3',
	    'autoplay' : 'autoplay'
	}).appendTo("body");
	// document.getElementById("anthem").play();
	var correctGuesses = 0;
	var incorrectGuesses = 0;
	var unansweredGuesses = 0;
	var correctArray = ["Grigori Rasputin", "Nicholas II", "Nicolai Chernyshevsky",
					"Alexander Solzhenitsyn", "Yuri Modin"];

	function gameResults () {

		//Checks for unanswered questions
		$("div .form-check").find("[type='radio']").each(function(){
			    if($(this).prop("checked") === false){
			       unansweredGuesses++;
				}
			});

		//This is a more elegant solution but doesn't render correctly if there are unanswered questions.
		// var $answers = $(":checked");
		// for (i=0; i<$answers.length; i++) {
		// 	console.log($answers[i].value, correctArray[i]);
		// 	if ($answers[i].value === correctArray[i]) {
		// 		correctGuesses++;
		// 	} else {
		// 		incorrectGuesses++;
		// 	}
		// }
		
		//These statements work but also record unanswered as incorrect
		if ($("input[type='radio'][name='monk']:checked").val() === "Grigori Rasputin") {
			correctGuesses++;
		} else if ($(":checked").val() != "Grigori Rasputin") {
			incorrectGuesses++;
		}

		if ($("input[type='radio'][name='tsar']:checked").val() === "Nicholas II") {
			correctGuesses++;
		} else if ($(":checked").val() != "Nicholas II") {
			incorrectGuesses++;
		}

		if ($("input[type='radio'][name='book']:checked").val() === "Nikolai Chernyshevsky") {
			correctGuesses++;
		} else if ($(":checked").val() != "Nikolai Chernyshevsky") {
			incorrectGuesses++;
		}

		if ($("input[type='radio'][name='dissident']:checked").val() === "Alexander Solzhenitsyn") {
			correctGuesses++;
		} else if ($(":checked").val() != "Alexander Solzhenitsyn") {
			incorrectGuesses++;
		}

		if ($("input[type='radio'][name='agent']:checked").val() === "Yuri Modin") {
			correctGuesses++;
		} else if ($(":checked").val() != "Yuri Modin") {
			incorrectGuesses++;
		}

		var resultsHtml = "<h1 class='text-center'>Correct Answers: " + correctGuesses + "</h1>" +
						"<h1 class='text-center'>Incorrect Answers: " + incorrectGuesses + "</h1>" +
						"<h1 class='text-center'>Unanswered Questions: " + (unansweredGuesses - 15) + "</h1>" +
						"<button type='button' class='btn btn-inverse'>Answers</button>" +
						"<img id='bear' src='assets/images/Bear.jpg' class='bear'>";
		//Updates the game-box with results
		$("#game-box").html(resultsHtml);

		$("button").click(function() {
	    	var answersHtml = "<h1 class='text-center'>1. Grigori Rasputin</h1>" +
		    				  "<h1 class='text-center'>2. Nicholas II</h1>" +
		    				  "<h1 class='text-center'>3. Nicholai Chernyshevsky</h1>" +
		    				  "<h1 class='text-center'>4. Alexander Solzhenitsyn</h1>" +
		    				  "<h1 class='text-center'>5. Yuri Modin</h1>" +
		    				  "<img src='assets/images/Russian_Empire.png' class='img-responsive answer-flag'>";
		    $("#game-box").removeClass("game-screen");
		    $("#game-box").addClass("answer");
	    	$("#game-box").html(answersHtml);
    	});
	}
	//Counter for the timer
	var counter = 60;
	var interval;


	function run() {
      interval = setInterval(decrement, 1000);
    }

    function decrement() {
    	counter--;
    	$("#counter").html(counter);
    	if (counter <= 30) {
    		$("#remaining").addClass("halfway");
    	}
    	if (counter <= 15) {
    		$("#remaining").removeClass("halfway");
    		$("#remaining").addClass("almostUp");
    	}
      	if (counter === 0) {
        //Runs the stop function when counter equals 0
        stop();
        //Stops the anthem music by removing the element
        $("audio").remove();
        //Calls the gameResults function
        gameResults();
      }
    }

    //Stop function
    function stop() {

      clearInterval(interval);
      $("#remaining").removeClass("almostUp");
    }

    run();

});