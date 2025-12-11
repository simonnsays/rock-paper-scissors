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
    } else if(answer === 's') {
        return'scissors'
    }
} 

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        const humanAnswer = humanChoice.toLowerCase()
        const computerAnswer = computerChoice.toLowerCase()
        console.log(humanAnswer, computerAnswer)

        if(humanAnswer === 'rock' && computerAnswer === 'scissors' ||
            humanAnswer === 'scissors' && computerAnswer === 'paper' ||
            humanAnswer === 'paper' && computerAnswer === 'rock'
        ) {
            humanScore++
            alert("You Win! " + humanAnswer + " beats " + computerAnswer)
        } else if(humanAnswer === computerAnswer) {
            alert("It's a draw")
        } else {
            computerScore++ 
            alert("You lose! " + computerAnswer + " beats " + humanAnswer) 
        }
    }


    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
    }

    if(humanScore > computerScore) {
        console.log("You win!")
    } else if(humanScore === computerScore) {
        console.log("Draw")
    } else {
        console.log("Computer Wins..")
    }
    console.log(`score:
    Human: ${humanScore}
    Computer: ${computerScore}
    `)
}


playGame()