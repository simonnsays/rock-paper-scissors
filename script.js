function getComputerChoice() {
    const answer = Math.floor(Math.random() * 3)
    if(answer === 0) {
        return "scissors"
    } else if (answer === 1) {
        return "rock"
    } else {
        return "paper"
    }
}

console.log(getComputerChoice())