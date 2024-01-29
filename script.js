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


function playRound(playerSelection,computerSelection){
    
    let playerLower = playerSelection.toLowerCase();
    let compLower = computerSelection.toLowerCase();

    if (playerLower == compLower){
            return "Draw! you both pick " + computerSelection + ".\nYou: " + playerScore + " Computer: " + compScore;
    } else if (playerLower == "rock" && compLower == "scissors") {
            playerScore += 1;
            return "You Win! Rock beats " + computerSelection + ".\nYou: " + playerScore + " Computer: " + compScore;
    } else if (playerLower == "paper" && compLower == "rock") {
            playerScore += 1;
            return "You Win! Paper beats " + computerSelection + ".\nYou: " + playerScore + " Computer: " + compScore;
    } else if (playerLower == "scissors" && compLower == "paper") {
            playerScore += 1;
            return "You Win! Scissors beats " + computerSelection + ".\nYou: " + playerScore + " Computer: " + compScore;
    }  else if (playerLower == "rock" && compLower == "paper"){
            compScore += 1;
            return "You Lose! " + computerSelection + " beats Rocks.\nYou: " + playerScore + " Computer: " + compScore;
    }  else if (playerLower == "paper" && compLower == "scissors"){
            compScore += 1;
            return "You Lose! " + computerSelection + " beats Paper.\nYou: " + playerScore + " Computer: " + compScore;
    }  else if (playerLower == "scissors" && compLower == "rock"){
            compScore += 1;
            return "You Lose! " + computerSelection + " beats Scissors.\nYou: " + playerScore + " Computer: " + compScore;
    } else {
            return "Invalid input!";
    }

    



}

let playerScore = 0;
let compScore = 0;

function playGame(){
    const player = prompt("Pick (Rock, Paper, Scissors)");
    const computer = getComputerChoice();
    console.log(playRound(player, computer));
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (playerScore == 3 || playerScore > compScore){
    console.log("You win!");
} else if (compScore == 3 || compScore > playerScore){
    console.log("Computer win!");
} else if (playerScore == compScore){
    console.log("Its a tie!")
}








