function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    let hand = ""
    if (choice == 0) {
        hand = "rock"
    }
    else if (choice == 1) {
        hand = "paper"
    }
    else {
        hand = "scissors"
    }
    return hand
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice == computerChoice) {
        return `Draw! Both used ${capitalize(playerChoice)}`
    }
    else if (playerChoice == "rock" && computerChoice == "scissors" ||
             playerChoice == "paper" && computerChoice == "rock" ||
             playerChoice == "scissors" && computerChoice == "paper") {
                return `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`
             }
    else {
        return `You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`
    }
}

function getPlayerChoice() {
    while (true) {
        let playerChoice = prompt("Rock Paper Scissors: ")
        if (playerChoice.toLowerCase() == "rock" ||
            playerChoice.toLowerCase() == "paper" ||
            playerChoice.toLowerCase() == "scissors") 
        {
            return playerChoice
        }
        else {
            console.log("Please, input a valid hand. (Rock, Paper or Scissors)")
        }
    }
}
