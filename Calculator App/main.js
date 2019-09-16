let numberArr = [];

const calculation = (numberArr, operator) => {
    if (operator == '+') {
        let number = 0;

        numberArr.forEach(e => {number += e;});

        return number;
    }
    else if (operator == '-') {
        let number = numberArr[0];

        for (let i = 1; i < numberArr.length; i++) {
            number -= numberArr[i];
        }

        return number;
    }
    else if (operator == '*') {
        let number = 1;

        for (let i = 0; i < numberArr.length; i++) {
            number *= numberArr[i];
        }

        return number;
    }
    else if (operator == '/') {
        let number = numberArr[0];

        for (let i = 1; i < numberArr.length; i++) {
            number /= numberArr[i];
        }

        return number;
    }
}

const getNumberFromDisplay = (operator) => {
    let currentNumber = document.querySelector('.calculator-screen').value;
    numberArr.push(currentNumber);
    document.querySelector('.calculator-screen').value = 0;
    let newNumber = calculation(numberArr, operator);
    numberArr = [newNumber];
    console.log(numberArr);
    
}

const addToDisplay = (number) => {
    document.querySelector('.calculator-screen').value += number;
}