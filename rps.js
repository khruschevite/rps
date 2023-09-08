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
        console.log(`Draw! Both used ${capitalize(playerChoice)}`)
        return 'draw'
    }
    else if (playerChoice == "rock" && computerChoice == "scissors" ||
             playerChoice == "paper" && computerChoice == "rock" ||
             playerChoice == "scissors" && computerChoice == "paper") {
                console.log(`You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`)
                return 'win'
             }
    else {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`)
        return 
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

function game() {
    let playerCounter = 0
    let computerCounter = 0
    for (let i = 0; i<5; i++){
        let computerChoice = getComputerChoice()
        let playerChoice = getPlayerChoice()
        score = playRound(playerChoice, computerChoice)
        if (score == 'win') {
            playerCounter++
        }
        else if (score == 'lose') {
            computerCounter++
        }
    }
}