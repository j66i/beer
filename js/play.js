(function(){
	var imgArray = ['Kitachino600', 'Mikkeller600', 'Dogfish600', 'EvilTwin600', 'HopNosh600', 'Nitro600', 'OmmeGang600', 'Resin600', 'Smuttynose600', 'ShinerBock600', 'Gonzo600', 'Brooklyn']; 
	var option1  = $('.img1');
	var option2  = $('.img2');
	var overlay  = $('.overlay');
	// var imgIndex = 0;
	var winners  = [];
	var match    = 1;
	// var r1Order  = 4;
	// var r2Order  = 8;
	// var r1Winner = 0;

	var r3Losers = [];
	var firstPlace;
	var secondPlace;
	var thirdPlace;

// Shuffle images
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	shuffle(imgArray);


//Round 1, Match 1

	overlay.click(function() {
		overlay.addClass("overlay-close");
		option1.css('background-image', 'url(img/' + imgArray[0] + '.png)').delay(200).fadeIn(400);
		option2.css('background-image', 'url(img/' + imgArray[1] + '.png)').delay(400).fadeIn(400);
	});


	option1.click(function() {
		match++;

		switch(match) {
		//Round 1
			case 2:
				//Log option 1 (of prevous round) as winner
				winners.push(imgArray[0]); 

				//imgArray[2]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[2] + '.png)').fadeIn(300);
				});

				//vs. imgArray[3]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + imgArray[3] + '.png)').delay(100).fadeIn(400);
				});
				break;
			case 3:
				//Log option 1 (of prevous round) as winner
				winners.push(imgArray[2]); 

				//imgArray[4]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[4] + '.png)').fadeIn(300);
				});

				//vs. imgArray[5]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + imgArray[5] + '.png)').delay(100).fadeIn(400);
				});
				break;
			case 4:
				//Log option 1 (of prevous round) as winner
				winners.push(imgArray[4]); 

				//imgArray[6]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[6] + '.png)').fadeIn(300);
				});

				//vs. imgArray[7]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + imgArray[7] + '.png)').delay(100).fadeIn(400);
				});
				break;
		//Round 2
			case 5:
				//Log option 1 (of prevous round) as winner
				winners.push(imgArray[6]);

				//imgArray[8]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[8] + '.png)').fadeIn(300);
				});

				//vs. winners[0]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[0] + '.png)').delay(100).fadeIn(400);
				});

				// //Populate next contestants
				// r2Order++;
				// r1Winner++;
				break;
			case 6:
				//Log option 1 (of prevous round) as winner
				winners.push(imgArray[8]);

				//imgArray[9]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[9] + '.png)').fadeIn(300);
				});

				//vs. winners[1]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[1] + '.png)').delay(100).fadeIn(400);
				});

				//Populate next contestants
				// r2Order++;
				// r1Winner++;
				break;
			case 7:
				//Log option 1 (of prevous round) as winner
				winners.push(imgArray[9]);

				//imgArray[10]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[10] + '.png)').fadeIn(300);
				});

				//vs. winners[2]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[2] + '.png)').delay(100).fadeIn(400);
				});

				//Populate next contestants
				// r2Order++;
				// r1Winner++;
				break;
			case 8:
				//Log option 1 (of prevous round) as winner
				winners.push(imgArray[10]);

				//imgArray[11]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[11] + '.png)').fadeIn(300);
				});

				//vs. winners[3]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[3] + '.png)').delay(100).fadeIn(400);
				});

				//Populate next contestants
				// r2Order++;
				// r1Winner++;
				break;
		//Round 3
			case 9:
				//Log option 1 (of prevous round) as winner
				winners.push(imgArray[11]);

				//winners[4]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + winners[4] + '.png)').fadeIn(300);
				});

				//vs. winners[5]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[5] + '.png)').delay(100).fadeIn(400);
				});
				break;
			case 10:
				//Log option 1 (of prevous round) as winner
				winners.push(winners[4]);

				//Log option 2 (of previous round) as loser
				r3Losers.push(winners[5]);

				//winners[6]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + winners[6] + '.png)').fadeIn(300);
				});

				//vs. winners[7]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[7] + '.png)').delay(100).fadeIn(400);
				});
				break;
		//Round 4 (Determines firstPlace)
			case 11:
				//Log option 1 (of previous round) as winner
				winners.push(winners[6]);

				//Log option 2 (of previous round) as loser
				r3Losers.push(winners[7]);

				//winners[8]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + winners[8] + '.png)').fadeIn(300);
				});

				//vs. winners[9]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[9] + '.png)').delay(100).fadeIn(400);
				});

				break;
		//Round 4 (Determines thirdPlace)
			case 12:
				//Store firstPlace winner (option1)
				firstPlace = winners[8];

				//Store secondPlace winner (option2)
				secondPlace = winners[9];

				//r3Losers[0]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + r3Losers[0] + '.png)').fadeIn(300);
				});

				//vs. r3Losers[1]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + r3Losers[1] + '.png)').delay(100).fadeIn(400);
				});

				break;
		//Go to results page
			case 13:
				//Log option1 as thirdPlace winner
				thirdPlace = r3Losers[0];

				localStorage.firstResult = firstPlace;
				localStorage.secondResult = secondPlace;
				localStorage.thirdResult = thirdPlace;

				//Go to results
				location.href = "results.html";
				break;
		}
	});

	option2.click(function() {
		match++;

		switch(match) {
		//Round 1
			case 2:
				//Log option 2 (of prevous round) as winner
				winners.push(imgArray[1]); 

				//imgArray[2]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[2] + '.png)').fadeIn(300);
				});

				//vs. imgArray[3]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + imgArray[3] + '.png)').delay(100).fadeIn(400);
				});
				break;
			case 3:
				//Log option 2 (of prevous round) as winner
				winners.push(imgArray[3]); 

				//imgArray[4]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[4] + '.png)').fadeIn(300);
				});

				//vs. imgArray[5]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + imgArray[5] + '.png)').delay(100).fadeIn(400);
				});
				break;
			case 4:
				//Log option 2 (of prevous round) as winner
				winners.push(imgArray[5]); 

				//imgArray[6]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[6] + '.png)').fadeIn(300);
				});

				//vs. imgArray[7]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + imgArray[7] + '.png)').delay(100).fadeIn(400);
				});
				break;
		//Round 2
			case 5:
				//Log option 2 (of prevous round) as winner
				winners.push(imgArray[7]);

				//imgArray[8]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[8] + '.png)').fadeIn(300);
				});

				//vs. winners[0]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[0] + '.png)').delay(100).fadeIn(400);
				});

				// //Populate next contestants
				// r2Order++;
				// r1Winner++;
				break;
			case 6:
				//Log option 2 (of prevous round) as winner
				winners.push(winners[0]);

				//imgArray[9]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[9] + '.png)').fadeIn(300);
				});

				//vs. winners[1]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[1] + '.png)').delay(100).fadeIn(400);
				});

				break;
			case 7:
				//Log option 2 (of prevous round) as winner
				winners.push(winners[1]);

				//imgArray[10]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[10] + '.png)').fadeIn(300);
				});

				//vs. winners[2]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[2] + '.png)').delay(100).fadeIn(400);
				});

				break;
			case 8:
				//Log option 2 (of prevous round) as winner
				winners.push(winners[2]);

				//imgArray[11]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + imgArray[11] + '.png)').fadeIn(300);
				});

				//vs. winners[3]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[3] + '.png)').delay(100).fadeIn(400);
				});

				break;
		//Round 3
			case 9:
				//Log option 2 (of prevous round) as winner
				winners.push(winners[3]);

				//winners[4]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + winners[4] + '.png)').fadeIn(300);
				});

				//vs. winners[5]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[5] + '.png)').delay(100).fadeIn(400);
				});
				break;
			case 10:
				//Log option 2 (of prevous round) as winner
				winners.push(winners[5]);

				//Log option 1 (of previous round) as loser
				r3Losers.push(winners[4]);

				//winners[6]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + winners[6] + '.png)').fadeIn(300);
				});

				//vs. winners[7]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[7] + '.png)').delay(100).fadeIn(400);
				});
				break;
		//Round 4 (Determines firstPlace)
			case 11:
				//Log option 2 (of previous round) as winner
				winners.push(winners[7]);

				//Log option 1 (of previous round) as loser
				r3Losers.push(winners[6]);

				//winners[8]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + winners[8] + '.png)').fadeIn(300);
				});

				//vs. winners[9]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + winners[9] + '.png)').delay(100).fadeIn(400);
				});

				break;
		//Round 4 (Determines thirdPlace)
			case 12:
				//Store firstPlace winner (option2)
				firstPlace = winners[9];

				//Store secondPlace winner (option1)
				secondPlace = winners[8];

				//r3Losers[0]
				option1.fadeOut(100, function() {
					option1.css('background-image', 'url(img/' + r3Losers[0] + '.png)').fadeIn(300);
				});

				//vs. r3Losers[1]
				option2.fadeOut(100, function() {
					option2.css('background-image', 'url(img/' + r3Losers[1] + '.png)').delay(100).fadeIn(400);
				});

				break;
		//Go to results page
			case 13:
				//Log option2 as thirdPlace winner
				thirdPlace = r3Losers[1];

				localStorage.firstResult = firstPlace;
				localStorage.secondResult = secondPlace;
				localStorage.thirdResult = thirdPlace;

				//Go to results
				location.href = "results.html";

				break;
		}
	});
})();


//Randomize background color
//Save overlay in cookie
//Make bubbles move on splash page
//Optimize code
//Store people's results somewhere

