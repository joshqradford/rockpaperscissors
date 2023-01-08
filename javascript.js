let cpuChoice;
let userChoice;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if(choice === 1) {
        let userChoice = "Rock";
        return userChoice;

    } else if (choice === 2) {
        let userChoice = "Paper";
        return userChoice;
        
    } else {
        let userChoice = "Scissors";
        return userChoice;
    }
}