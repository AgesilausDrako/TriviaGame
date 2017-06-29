$("document").ready(function(){
	
	document.getElementById("anthem").play();
	var correctGuesses = 0;
	var incorrectGuesses = 0;
	var unansweredGuesses = 0;
	var correctArray = ["Grigori Rasputin", "Nicholas II", "Georgi Plekhanov",
					"Alexander Solzhenitsyn", "Yuri Modin"];
	
	var gameHtml = "";

	
	
		function gameResults () {

			$("div .form-check").find("[type='radio']").each(function(){
			    if($(this).prop("checked") === false){
			       unansweredGuesses++;
			    }
			});

			var $answers = $(":checked");
			for (i=0; i<$answers.length; i++) {
				console.log($answers[i].value, correctArray[i]);
				if ($answers[i].value === correctArray[i]) {
					correctGuesses++;
				} else {
					incorrectGuesses++;
				}
			}

			var resultsHtml = "<h1 class='text-center'>Correct Answers: " + correctGuesses + "</h1>" +
							"<h1 class='text-center'>Incorrect Answers: " + incorrectGuesses + "</h1>" +
							"<h1 class='text-center'>Unanswered Questions: " + (unansweredGuesses - 15) + "</h1>" +
							"<img id='bear' src='assets/images/Bear.jpg' class='bear'>";
		

			$("#game-box").html(resultsHtml);
		}
		//Counter for the timer
		var counter = 12;
		var interval;


		function run() {
	      interval = setInterval(decrement, 1000);
	    }

	    function decrement() {
	    	counter--;
	    	$("#counter").html(counter);

	    	if (counter <= 20) {
	    		$("#remaining").addClass("almostUp");
	    	}
	    	//  Once number hits zero...
	      	if (counter === 0) {

	        //  ...run the stop function.
	        stop();

	        gameResults();

	      }
	    }

	    //  The stop function
	    function stop() {

	      clearInterval(interval);
	      $("#remaining").removeClass("almostUp");
	    }

	    run();


});