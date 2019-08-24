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
    
    
}