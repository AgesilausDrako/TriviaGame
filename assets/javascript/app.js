$("document").ready(function(){

	var correctGuesses = 0;
	var incorrectGuesses = 0;
	var unansweredGuesses = 0;
	
	var gameHtml = "";

	var resultsHtml = "<h1 class='text-center'>Correct Answers: " + correctGuesses + "</h1>" +
						"<h1 class='text-center'>Incorrect Answers: " + incorrectGuesses + "</h1>" +
						"<h1 class='text-center'>Unanswered Questions: " + unansweredGuesses + "</h1>" +
						"<img id='bear' src='assets/images/Bear.jpg' class='bear'>";
	

	function gameResults () {
		var monk = document.getElementsByName("monk");
			for(i=0; i<=monk.length; i++) {
				 if(monk[i].checked){
		         if(monk[i].value == "Grigori Rasputin") {
		            correctGuesses++;
		            break;
		         }
		     }
		}



		$("#game-box").html(resultsHtml);
	}
	//Counter for the timer
	var counter = 3;
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