
function determineChoice(n) {
	if (n == 0) {
		return "rock";
	} else if (n == 1) {
		return "paper";
	} else if (n == 2) {
		return "scissors"
	}
}

function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3);
	return determineChoice(randomNum);
}

function getHumanChoice() {
	/* let answer = prompt("1 for rock, 2 for paper and 3 for scissors");
	return determineChoice(answer - 1); */
}

function playRound(humanChoice, computerChoice) {
	let choiceWeight = {	
		rock: { beat: "scissors", lose: "paper"},
		paper: {beat: "rock", lose: "scissors"},
		scissors: {beat: "paper", lose: "rock"}
	}
	if (humanChoice == computerChoice) {
		console.log("It's a tie");
		return;
	} else if (humanChoice == "rock") {
		if (computerChoice == "paper") {
			console.log("You lose, Paper beats rock");
			computerScore++
		} else if (computerChoice == "scissors") {
			console.log("You win, Rock beats Scissors");
			humanScore++;
		}
	} else if (humanChoice == "paper") {
		if (computerChoice == "rock") {
			console.log("You win, Paper beats Rock");
			humanScore++;
		} else if (computerChoice == "scissors") {
			console.log("You lose, Scissors beat paper");
			computerScore++;
		}
	} else if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			computerScore++;
		} else if (computerChoice == "paper") {
			console.log("You win, Scissors beat paper");
			humanScore++;
		}
	}
	count++
}	
	
let humanScore = 0;
let computerScore = 0;
let count = 0;

function playGame(n) {
	while (count < n) {
		playRound(getHumanChoice(), getComputerChoice());
		console.log("Your Score: " + humanScore);
		console.log("Computer Score: " + computerScore);
	}
}

playGame(1) /* prompt("How many points do you want to play for (number)")); */
