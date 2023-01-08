let userChoice;
let cpuChoice;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if(choice === 1) {
        let cpuChoice = "rock";
        return cpuChoice;

    } else if (choice === 2) {
        let cpuChoice = "paper";
        return cpuChoice;

    } else {
        let cpuChoice = "scissors";
        return cpuChoice;
    }
}

function playGame(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    let winner;

        /* Losing Conditions */
        if (playerChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            winner = false;
        }

        else if (playerChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            winner = false;
        }

        else if (playerChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            winner = false;
        }

        /* Winning Conditions */
        else if (playerChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            winner = true;
        }

        else if (playerChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            winner = true;
        }

        else if (playerChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            winner = true;
        }

        /* Tie Conditions */
        else if (playerChoice === "rock" && computerChoice === "rock") {
            console.log("It's a tie! You both chose Rock");
            winner = null;
        }

        else if (playerChoice === "scissors" && computerChoice === "scissors") {
            console.log("It's a tie! You both chose Scissors");
            winner = null;
        }

        else if (playerChoice === "paper" && computerChoice === "paper") {
            console.log("It's a tie! You both chose Paper");
            winner = null;
        }

        else {
            console.log("Incorrect inputs. Please try again");
    }

    return winner;

}

function game() {
    let wins = 0;
    let losses = 0;
    let winner;

    for (let i = 0; i < 5; i++) {
    let roundWinner = playGame(prompt("Rock, paper, or scissors?"), getComputerChoice());

    if (roundWinner === true) {
        wins++;
    } else if (roundWinner === false) {
        losses++;
    }
    }

    if(wins === losses) {
        winner = "It's a draw. You both won an equal amount of times."
    } else if (wins > losses) {
        winner = "You've won the match with " + wins + " wins out of 5.";
    } else {
        winner = "You've lost the match with " + losses + " losses out of 5.";
    }
    return alert(winner);
}