let playerScore = 0;
let computerScore = 0;

let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let result = document.querySelector('#result');
let match = document.querySelector('#matchWinner');
let playerDisplay = document.querySelector('#player');
let buttons = document.querySelector('.buttons');
let computerDisplay = document.querySelector('#computer');


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

function playRound(playerSelection,computerSelection){
    
    let playerLower = playerSelection.toLowerCase();
    let computerLower = computerSelection.toLowerCase();

    if (playerLower == computerLower){
        result.textContent = "Draw! you both pick " + computerSelection;
    } else if (playerLower == "rock" && computerLower == "scissors") {
        playerScore += 1;
        playerDisplay.textContent = playerScore;
        result.textContent = "Rock beats " + computerSelection + "";
    } else if (playerLower == "paper" && computerLower == "rock") {
        playerScore += 1;
        playerDisplay.textContent = playerScore;
        result.textContent = "Paper beats " + computerSelection + "";
    } else if (playerLower == "scissors" && computerLower == "paper") {
        playerScore += 1;
        playerDisplay.textContent = playerScore;
        result.textContent = "Scissors beats " + computerSelection + "";
    }  else if (playerLower == "rock" && computerLower == "paper"){
        computerScore += 1;
        computerDisplay.textContent = computerScore;
        result.textContent = computerSelection + " beats Rocks";
    }  else if (playerLower == "paper" && computerLower == "scissors"){
        computerScore += 1;
        computerDisplay.textContent = computerScore;
        result.textContent = computerSelection + " beats Paper";
    }  else if (playerLower == "scissors" && computerLower == "rock"){
        computerScore += 1;
        computerDisplay.textContent = computerScore;
        result.textContent = computerSelection + " beats Scissors";
    } else {
        result.textContent = "Invalid input!";
    }

    if (playerScore == 5){
        console.log("You Win!");
        match.textContent = "You win!";
        buttons.style.cssText = "display: none";
        result.style.cssText = "display: none";
    } else if (computerScore == 5){
        console.log("computer win");
        match.textContent = "Computer win!";
        buttons.style.cssText = "display: none";
        result.style.cssText = "display: none";
    } else if (playerScore == 0 && computerScore == 0){
        match.textContent == "";
    } 
}

btnRock.addEventListener('click', function() {
    return matchSelection("Rock");
});

btnPaper.addEventListener('click', function() {
    return matchSelection("Paper");
});

btnScissors.addEventListener('click', function() {
    return matchSelection("Scissors");
});




function matchSelection(player){
    const computer = getComputerChoice();
    console.log(player, computer);
    return playRound(player, computer)
}













