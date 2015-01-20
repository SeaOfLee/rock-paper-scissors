// I started here with a user prompt and wrote the game logic at the bottom first. 
// The game worked using the prompt below.

// var myChoice = prompt("Do ya feel lucky, punk? Please choose Rock, Paper or Scissors.");
// myChoice = myChoice.toLowerCase();
// console.log(myChoice);

//Trying to use an event handler so clicking on text "Rock" on web page defines the myChoice variable. 
// Loading the HTML file and clicking "Rock", "Paper" or "Scissors" triggers the correct console log.

var choseRock = document.getElementById("rock");
	choseRock.onclick = function() {
		console.log("user chose rock");
		myChoice = "rock";
	}

var chosePaper = document.getElementById("paper");
	chosePaper.onclick = function() {
		console.log("user chose paper");
		myChoice = "paper";
	}

var choseScissors = document.getElementById("scissors");
	choseScissors.onclick = function() {
		console.log("user chose scissors");
		myChoice = "scissors";
	}		


// Defines computer's choice of "rock", "paper" or "scissors"
var computerChoice = Math.random();

if(computerChoice < 0.34) {
	computerChoice = "rock";
}
else if (computerChoice < 0.67) {
	computerChoice = "paper";
}
else {
	computerChoice = "scissors";
}

console.log(computerChoice);


//The game logic determines a winner by comparing myChoice to computerChoice
if (myChoice == "rock") {
	if(computerChoice == "rock") {
		alert("You both chose rock. Tie!");
	}
	else if (computerChoice == "paper") {
		alert("Paper beats rock. You lose!");
	}
	else {
		alert("Rock beats scissors. You win!");
	}
}	
else if(myChoice == "paper") {
	if(computerChoice == "rock") {
		alert("Paper beats rock. You win, winner!");
	}	
	else if(computerChoice == "paper") {
		alert("You both chose Paper. Tie.");
	}
	else {
		alert("Scissors beats paper. You lose.");
	}	
}	
else {
	if(computerChoice == "rock") {
		alert("Rock beats scissors. You lose!");
	}
	else if(computerChoice == "paper") {
		alert("Scissors beats paper. You win!");
	}
	else {
		alert("Scissors sciss each other. Tie.")
	}
}

