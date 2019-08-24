const SELECTORS = {
    gameText: '.myGame',
    rockBtn: '.rock',
    paperBtn: '.paper',
    scissorsBtn: '.scissors',
    text: '.myText',
}

const gameText = document.querySelector(SELECTORS.gameText);
const rockBtn = document.querySelector(SELECTORS.rockBtn);
const paperBtn = document.querySelector(SELECTORS.paperBtn);
const scissorsBtn = document.querySelector(SELECTORS.scissorsBtn);
const text = document.querySelector(SELECTORS.text);

rockBtn.addEventListener('click', choice);
paperBtn.addEventListener('click', choice);
scissorsBtn.addEventListener('click', choice);

function choice() {
    const computerChoice = randomChoice();
    const myChoice = this.className;

    if (myChoice === 'rock') {
        if (computerChoice === 'rock') {
            equality(myChoice);
        }
        else if (computerChoice === 'paper') {
            loss(myChoice, computerChoice);
        }
        else if (computerChoice === 'scissors') {
            win(myChoice, computerChoice);
        }
    }
    else if (myChoice === 'paper') {
        if (computerChoice === 'rock') {
            win(myChoice, computerChoice);
        }
        else if (computerChoice === 'paper') {
            equality(myChoice);
        }
        else if (computerChoice === 'scissors') {
            loss(myChoice, computerChoice);
        }
    }
    else if (myChoice === 'scissors') {
        if (computerChoice === 'rock') {
            loss(myChoice, computerChoice);
        }
        else if (computerChoice === 'paper') {
            win(myChoice, computerChoice);
        }
        else if (computerChoice === 'scissors') {
            equality(myChoice);
        }
    }
}

function randomChoice() {
    const arr = ['paper', 'rock', 'scissors'];

    return arr[Math.floor(Math.random()*arr.length)];
}

function win(myChoice, computerChoice) {
    text.innerHTML = `You win. <br> Your choice was ${myChoice} and its ${computerChoice}.`
}

function loss(myChoice, computerChoice) {
    text.innerHTML = `You loss. <br> Your choice was ${myChoice} and its ${computerChoice}.`;
}

function equality(myChoice) {
    text.innerHTML = `You are equal. <br>
    You both chose ${myChoice}.`;
}