let playerScore = 0;
let computerScore = 0;

let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let PlayAgain = document.querySelector('.playAgain');
let result = document.querySelector('#result');
let playerDisplay = document.querySelector('#playerDisplay');
let buttons = document.querySelector('.buttons');
let computerDisplay = document.querySelector('#computerDisplay');


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
        result.style.cssText = "color: black";
    } else if (playerLower == "rock" && computerLower == "scissors") {
        playerScore += 1;
        playerDisplay.textContent = playerScore;
        result.textContent = "Rock beats " + computerSelection + "";
        result.style.cssText = "color: green";
    } else if (playerLower == "paper" && computerLower == "rock") {
        playerScore += 1;
        playerDisplay.textContent = playerScore;
        result.textContent = "Paper beats " + computerSelection + "";
        result.style.cssText = "color: green";
    } else if (playerLower == "scissors" && computerLower == "paper") {
        playerScore += 1;
        playerDisplay.textContent = playerScore;
        result.textContent = "Scissors beats " + computerSelection + "";
        result.style.cssText = "color: green";
    }  else if (playerLower == "rock" && computerLower == "paper"){
        computerScore += 1;
        computerDisplay.textContent = computerScore;
        result.textContent = computerSelection + " beats Rocks";
        result.style.cssText = "color: red";
    }  else if (playerLower == "paper" && computerLower == "scissors"){
        computerScore += 1;
        computerDisplay.textContent = computerScore;
        result.textContent = computerSelection + " beats Paper";
        result.style.cssText = "color: red";
    }  else if (playerLower == "scissors" && computerLower == "rock"){
        computerScore += 1;
        computerDisplay.textContent = computerScore;
        result.textContent = computerSelection + " beats Scissors";
        result.style.cssText = "color: red";
    } else {
        result.textContent = "Invalid input!";
        result.style.cssText = "color: red";
    }

    if (playerScore == 5){
        console.log("You Win!");
        result.textContent = "You win!";
        result.style.cssText = "color: green";
        buttons.style.cssText = "display: none";
        PlayAgain.style.cssText = "display: block";
    } else if (computerScore == 5){
        console.log("computer win");
        result.textContent = "Computer win!";
        result.style.cssText = "color: red";
        buttons.style.cssText = "display: none";
        PlayAgain.style.cssText = "display: block";
    } else if (playerScore == 0 && computerScore == 0){
        result.textContent == "";
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













