function getComputerChoice(){
    let randomPick = Math.floor((Math.random() * 3) + 1);
    let botChoice;

    if (randomPick == 1){
        botChoice = "Rock";
    } else if (randomPick == 2){
        botChoice = "Papper";
    } else if (randomPick == 3){
        botChoice = "Scissors";
    }

    console.log(randomPick);
    console.log(botChoice);
    return botChoice;
}

