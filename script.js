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

function getHumanChoice(element) {    
    return element.id
} 

function playRound(humanChoice, computerChoice) {
    const humanAnswer = humanChoice.toLowerCase()
    const computerAnswer = computerChoice.toLowerCase()

    if(humanAnswer === 'rock' && computerAnswer === 'scissors' ||
        humanAnswer === 'scissors' && computerAnswer === 'paper' ||
        humanAnswer === 'paper' && computerAnswer === 'rock'
    ) {
        return 'human'
        // alert("You Win! " + humanAnswer + " beats " + computerAnswer)
    } else if(humanAnswer === computerAnswer) {
        // alert("It's a draw")
        return 'draw'
    } else {
        return 'computer' 
        // alert("You lose! " + computerAnswer + " beats " + humanAnswer) 
    }
}

function getImageSrc(answer) {
    switch(answer) {
        case 'scissors':
            return 'Scissors.png'
        case 'paper':
            return 'Paper.png'
        case 'rock':
            return 'Rock.png'
    }
}

function displayResult(humanAnswer, computerAnswer, winner) {
    const humanEl = document.querySelector('.human .image-choice')
    const computerEl = document.querySelector('.computer .image-choice')
    if(!humanEl || !computerEl) return
    // console.log(computerEl)
    [humanEl, computerEl].forEach(element => {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    })

    const humanImg = document.createElement('img')
    humanImg.src = getImageSrc(humanAnswer)
    humanImg.width = 150
    humanImg.height = 150
    humanEl.appendChild(humanImg)

    const compImg = document.createElement('img')
    compImg.src = getImageSrc(computerAnswer)
    compImg.width = 150
    compImg.height = 150
    computerEl.appendChild(compImg)

    const result = document.querySelector('.result')
    result.textContent = winner !== 'draw' 
            ? `${winner} won this round`
            : `It's a draw`

    document.querySelector('.human-score').textContent = humanScore
    document.querySelector('.comp-score').textContent = computerScore
}

function clearDisplay() {
    document.querySelector('.human-score').textContent = 0
    document.querySelector('.comp-score').textContent = 0

    document.querySelector('.human .image-choice').innerHTML = ''
    document.querySelector('.computer .image-choice').innerHTML = ''

    document.querySelector('.result').innerHTML = ''
}


let humanScore = 0
let computerScore = 0

const container = document.querySelector('.container')
container.addEventListener('click', (e) => {
    const element = e.target.closest('button')
    if (!element) return

    const humanChoice =  element.id
    const computerChoice = getComputerChoice()

    const winner = playRound(humanChoice, computerChoice)
    if (winner === 'human') humanScore++
    if (winner === 'computer') computerScore++

    displayResult(humanChoice, computerChoice, winner)
    console.log(humanScore, computerScore)
    if(humanScore === 5 || computerScore === 5) {
        alert(`${humanScore > computerScore ? 'You' : 'Computer'} Won`)

        humanScore = 0
        computerScore = 0

        clearDisplay()
    }
})
