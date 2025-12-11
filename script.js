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

function getHumanChoice() {    
    const answer = window.prompt('r for rock, p for paper, s for scissor')
    if (answer === 'r') {
        return 'rock'
    } else if(answer === 'p') {
        return 'paper'
    } else if(answer === s) {
        return'scissor'
    }
}

console.log(getHumanChoice())