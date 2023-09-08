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