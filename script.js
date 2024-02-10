let playerScore = 0;
let computerScore = 0;

let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let result = document.querySelector('#result');
let match = document.querySelector('#matchWinner');


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
       result.textContent = "Draw! you both pick " + computerSelection 
        + ".\nYou: " + playerScore + " Computer: " + computerScore;
    } else if (playerLower == "rock" && computerLower == "scissors") {
        playerScore += 1;
       result.textContent = "You Win! Rock beats " + computerSelection + ".\nYou: " 
        + playerScore + " Computer: " + computerScore;
    } else if (playerLower == "paper" && computerLower == "rock") {
        playerScore += 1;
       result.textContent = "You Win! Paper beats " + computerSelection + ".\nYou: " 
        + playerScore + " Computer: " + computerScore;
    } else if (playerLower == "scissors" && computerLower == "paper") {
        playerScore += 1;
       result.textContent = "You Win! Scissors beats " + computerSelection + ".\nYou: " 
        + playerScore + " Computer: " + computerScore;
    }  else if (playerLower == "rock" && computerLower == "paper"){
        computerScore += 1;
       result.textContent = "You Lose! " + computerSelection + " beats Rocks.\nYou: " 
        + playerScore + " Computer: " + computerScore;
    }  else if (playerLower == "paper" && computerLower == "scissors"){
        computerScore += 1;
       result.textContent = "You Lose! " + computerSelection + " beats Paper.\nYou: " 
        + playerScore + " Computer: " + computerScore;
    }  else if (playerLower == "scissors" && computerLower == "rock"){
        computerScore += 1;
       result.textContent = "You Lose! " + computerSelection + " beats Scissors.\nYou: " 
        + playerScore + " Computer: " + computerScore;
    } else {
       result.textContent = "Invalid input!";
    }

    if (playerScore == 5){
        console.log("You Win!");
        match.textContent = "You win!";
        btnRock.setAttribute('disabled', '');
        btnPaper.setAttribute('disabled', '');
        btnScissors.setAttribute('disabled', '');
        result.style.cssText = "display: none";
    } else if (computerScore == 5){
        console.log("computer win");
        match.textContent = "Computer win!";
        btnRock.setAttribute('disabled', '');
        btnPaper.setAttribute('disabled', '');
        btnScissors.setAttribute('disabled', '');
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













