
// var myChoice = prompt("Do ya feel lucky, punk? Please choose Rock, Paper or Scissors.");
// myChoice = myChoice.toLowerCase();
// console.log(myChoice);

var choseRock = document.getElementById("rock");
var chosePaper = document.getElementById("paper");
var choseScissors = document.getElementById("scissors");
	
choseRock.onclick = function() {
	console.log("user chose rock");
	myChoice = "rock";	
	determineWinner(myChoice, generateCompChoice());
};

chosePaper.onclick = function() {
	console.log("user chose paper");
	myChoice = "paper";
	determineWinner(myChoice, generateCompChoice());
};

choseScissors.onclick = function() {
	console.log("user chose scissors");
	myChoice = "scissors";
	determineWinner(myChoice, generateCompChoice());
};

// Defines computer's choice of "rock", "paper" or "scissors". 
// Math.floor(Math.ramdom() * 3) gives us a nice whole number, either 0,
// 1 or 2. Easier to read, avoids rounding errors. 

function generateCompChoice() {
	var choiceNumber = Math.floor(Math.random() * 3);
		if(choiceNumber === 0) {
			return "rock";
		}
		else if (choiceNumber === 1) {
			return "paper";
		}
		else {
			return "scissors";
		}
}	

var resultsText = document.getElementById('results');
// var loseText = document.getElementById('results');

function alertWinner() {
	resultsText.innerHTML = "You Win! :-)";
	resultsText.style.color="red";
}

function alertLoser() {	
	resultsText.innerHTML = "You Lose :-(";
	resultsText.style.color="red";
}	

function alertTie() {
	resultsText.innerHTML = "Both chose " + myChoice + ". Tie!";
	resultsText.style.color="red";
}

//The game logic determines a winner by comparing playerChoice to compChoice.
// An alert is triggered, changing the color and HTML of the result message.

function determineWinner(playerChoice, compChoice) {
	console.log('playerChoice', playerChoice);
	console.log('compChoice', compChoice);
	if (playerChoice === compChoice) {
		alertTie();
		alert("Both chose " + playerChoice + ". Tie!");
		resultsText.style.color="black";
	}
	if (playerChoice === "rock" && compChoice === "scissors") {
		alertWinner();
		alert("Computer chose scissors. You win!");
		resultsText.style.color="black";
	}
	if (playerChoice === "paper" && compChoice === "rock") {
		alertWinner();
		alert("Computer chose rock. You win!");
		resultsText.style.color="black";
	}
	if (playerChoice === "scissors" && compChoice === "paper") {
		alertWinner();
		alert("Computer chose paper. You win.");
		resultsText.style.color="black";
	}
	if (compChoice === "rock" && playerChoice === "scissors") {
		alertLoser();
		alert("Computer chose Rock. You Lose.");
		resultsText.style.color="black";
	}
	if (compChoice === "paper" && playerChoice === "rock") {
		alertLoser();
		alert("Computer chose Paper. You lose.");
		resultsText.style.color="black";
	}
	if (compChoice === "scissors" && playerChoice === "paper") {
		alertLoser();
		alert("Computer chose Scissors. You lose.");
		resultsText.style.color="black";
	}
}

// 	if (myChoice == "rock") {
// 		if(computerChoice == "rock") {
// 			alert("You both chose rock. Tie!");
// 		}
// 		else if (computerChoice == "paper") {
// 			alert("Paper beats rock. You lose!");
// 		} else {
// 			alert("Rock beats scissors. You win!");
// 		}
// 	}	
// 	else if(myChoice == "paper") {
// 		if(computerChoice == "rock") {
// 			alert("Paper beats rock. You win, winner!");
// 		}	
// 		else if(computerChoice == "paper") {
// 			alert("You both chose Paper. Tie.");
// 		} else {
// 			alert("Scissors beats paper. You lose.");
// 		}	
// 	}	
// 	else {
// 		if(computerChoice == "rock") {
// 			alert("Rock beats scissors. You lose!");
// 		}
// 		else if(computerChoice == "paper") {
// 			alert("Scissors beats paper. You win!");
// 		} else {
// 			alert("Scissors sciss each other. Tie.");
// 		}
// 	}
