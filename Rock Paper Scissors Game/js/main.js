function app(paragraph) {
    const choices = ['rock', 'paper', 'scissors'];
    const results = {
        equal: function (choice) {
            paragraph.innerHTML = `You are equal. <br>
            You both chose ${choice}.`;
            this.resetText();
        },
        win: function (firstChoice, secondChoise) {
            paragraph.innerHTML = `You win. <br> Your choice was ${firstChoice} and its ${secondChoise}.`;
            this.resetText();
        },
        loss: function (firstChoice, secondChoise) {
            paragraph.innerHTML = `You loss. <br> Your choice was ${firstChoice} and its ${secondChoise}.`;
            this.resetText();
        },
        resetText: function () {
            setTimeout(() => {
                paragraph.innerHTML = `Choose one of them`;
            }, 3000);
        }
    }

    return {
        handleEvent: function (e) {
            if (!choices.includes(e.target.id)) { return; }

            const myChoice = e.target.id;
            const randomChoice = this.choice(choices);
            const result = this.checkForWinner(myChoice, randomChoice);
            if (results[result]) { results[result](myChoice, randomChoice); }
        },
        choice: function (choices) {
            return choices[Math.floor(Math.random() * choices.length)];
        },
        checkForWinner: function (firstChoice, secondChoise) {
            if (firstChoice === secondChoise) { return 'equal'; }

            if ((firstChoice === 'rock' && secondChoise === 'scissors') || (firstChoice === 'paper' && secondChoise === 'rock')) {
                return 'win';
            }

            return 'loss';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', app(document.getElementById('message')));
})
