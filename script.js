function getComputerChoice(){
    let randomPick = Math.floor((Math.random() * 3) + 1);
    let botChoice;

    if (randomPick == 1){
        botChoice = "Rock";
    } else if (randomPick == 2){
        botChoice = "Paper";
    } else if (randomPick == 3){
        botChoice = "Scissors";
    }

    return botChoice;
}

function playerSelection(){
    let playerChoice = prompt("Pick (Rock, Paper, Scissors) ");
    return playerChoice;
}

function playRound(playerSelection,computerSelection){
    
    let playerLower = playerSelection.toLowerCase();
    let compLower = computerSelection.toLowerCase();

    if (playerLower == compLower){
            return ("Draw! you both pick " + computerSelection);
    } else if (playerLower == "rock" && compLower == "scissors") {
            return "You Win! Rock beats " + computerSelection;
    } else if (playerLower == "paper" && compLower == "rock") {
            return "You Win! Paper beats " + computerSelection;
    } else if (playerLower == "scissors" && compLower == "paper") {
            return "You Win! Scissors beats " + computerSelection;
    }  else if (playerLower == "rock" && compLower == "paper"){
            return "You Lose! " + computerSelection + " beats Rocks";
    }  else if (playerLower == "paper" && compLower == "scissors"){
            return "You Lose! " + computerSelection + " beats Paper";
    }  else if (playerLower == "scissors" && compLower == "rock"){
            return "You Lose! " + computerSelection + " beats Scissors";
    } else {
            return "Invalid input!";
    }
}

     

const player = playerSelection();
const computer = getComputerChoice();

console.log(playRound(player, computer));