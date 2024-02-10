let playerScore = 0;
let computerScore = 0;

let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let result = document.querySelector('#result');


btnRock.addEventListener('click', function(){
    console.log("Rock");
});

btnPaper.addEventListener('click', function(){
    console.log("Paper");
});

btnScissors.addEventListener('click', function(){
    console.log("Scissors");
});


function getComputerChoice(){
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    let computerChoice;

    if (randomChoice == 1){
        computerChoice = "Rock";
    } else if (randomChoice == 2){
        computerChoice = "Paper";
    } else if (randomChoice == 3){
        computerChoice = "Scissors";
    }

    return computerChoice;
}


function playGame(){

    function playRound(playerSelection,computerSelection){
    
        let playerLower = playerSelection.toLowerCase();
        let computerLower = computerSelection.toLowerCase();
    
        if (playerLower == computerLower){
            return "Draw! you both pick " + computerSelection 
            + ".\nYou: " + playerScore + " Computer: " + computerScore;
        } else if (playerLower == "rock" && computerLower == "scissors") {
            playerScore += 1;
            return "You Win! Rock beats " + computerSelection + ".\nYou: " 
            + playerScore + " Computer: " + computerScore;
        } else if (playerLower == "paper" && computerLower == "rock") {
            playerScore += 1;
            return "You Win! Paper beats " + computerSelection + ".\nYou: " 
            + playerScore + " Computer: " + computerScore;
        } else if (playerLower == "scissors" && computerLower == "paper") {
            playerScore += 1;
            return "You Win! Scissors beats " + computerSelection + ".\nYou: " 
            + playerScore + " Computer: " + computerScore;
        }  else if (playerLower == "rock" && computerLower == "paper"){
            computerScore += 1;
            return "You Lose! " + computerSelection + " beats Rocks.\nYou: " 
            + playerScore + " Computer: " + computerScore;
        }  else if (playerLower == "paper" && computerLower == "scissors"){
            computerScore += 1;
            return "You Lose! " + computerSelection + " beats Paper.\nYou: " 
            + playerScore + " Computer: " + computerScore;
        }  else if (playerLower == "scissors" && computerLower == "rock"){
            computerScore += 1;
            return "You Lose! " + computerSelection + " beats Scissors.\nYou: " 
            + playerScore + " Computer: " + computerScore;
        } else {
            return "Invalid input!";
        }
    
    }

    // const player = prompt("Choose (Rock, Paper, Scissors)");
    const computer = getComputerChoice();
    // console.log(playRound(player, computer));
  
}



// for (let i = 1; i <= 5; i ++){
//     playGame();
// }

playGame();


if (playerScore == 3 || playerScore > computerScore){
    result.textContent = "You win!";
} else if (computerScore == 3 || computerScore > playerScore){
    result.textContent = "Computer win!";
} else if (playerScore == computerScore){
    result.textContent = "Its a tie!";
}










