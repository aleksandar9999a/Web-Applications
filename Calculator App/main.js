let numberArr = [];

const calculation = (numberArr, operator) => {
    if (operator == '+') {
        return a + b;
    }
    else if (operator == '-') {
        return a - b;
    }
    else if (operator == '*') {
        return a * b;
    }
    else if (operator == '/') {
        return a / b;
    }
}

const getNumberFromDisplay = (operator) => {
    let currentNumber = document.querySelector('.calculator-screen').value;
    numberArr.push(currentNumber);
}

const addToDisplay = (number) => {
    document.querySelector('.calculator-screen').value += number;
}