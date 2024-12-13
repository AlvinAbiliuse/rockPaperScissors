function getComputerChoice() {
	let n = Math.floor(Math.random() * 3);
	if (n == 0) {
		return "rock";
	} else if (n == 1) {
		return "paper";
	} else if (n == 2) {
		return "scissors"
	}
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		return "It's a tie";
	} else if (humanChoice == "rock") {
		if (computerChoice == "paper") {
			computerScore++;
			count++;
			return "You lose, Paper beats rock";
		} else if (computerChoice == "scissors") {
			humanScore++;
			count++;
			return "You win, Rock beats Scissors";
		}
	} else if (humanChoice == "paper") {
		if (computerChoice == "rock") {
			humanScore++;
			count++;
			return "You win, Paper beats Rock";
		} else if (computerChoice == "scissors") {
			computerScore++;
			count++;
			return "You lose, Scissors beats paper";
		}
	} else if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			computerScore++;
			count++;
			return "You Lose, Rock beats scissors";
		} else if (computerChoice == "paper") {
			humanScore++;
			count++;
			return "You win, Scissors beats paper";
		}
	}
}	

function playGame(human, comp) {
	let message = playRound(human, comp); 
	if (count == 5) {
		message = "Game Over! Your Score: " + humanScore + 
				"    Computer Score: " + computerScore;
		count = 0;
		humanScore = 0;
		computerScore = 0;
		return message;
	} else {
		return message;
	}
}

const checkEvent = (e) => {
	if (e.target.nodeName == "BUTTON") {
		let comp = getComputerChoice();
		let msg = playGame(
			e.srcElement.textContent.toLowerCase(), comp);
		computerScoreEl.textContent = computerScore;
		humanScoreEl.textContent = humanScore;
		msgEl.textContent = msg;
	}
}

	
let humanScore = 0;
let computerScore = 0;
let count = 0;

const computerScoreEl = document.querySelector("#computerScore");
const humanScoreEl = document.querySelector("#humanScore");
const msgEl = document.querySelector("#message");
const btn = document.querySelector("#choices");

btn.addEventListener("click", checkEvent);





