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

			// var $answers = $(":checked");
			// for (i=0; i<$answers.length; i++) {
			// 	console.log($answers[i].value, correctArray[i]);
			// 	if ($answers[i].value === correctArray[i]) {
			// 		correctGuesses++;
			// 	} else {
			// 		incorrectGuesses++;
			// 	}
			// }

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

			if ($("input[type='radio'][name='book']:checked").val() === "Georgi Plekhanov") {
				correctGuesses++;
			} else if ($(":checked").val() != "Georgi Plekhanov") {
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