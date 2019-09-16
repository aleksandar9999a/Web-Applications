let numberArr = [];

const clearAll = () => {
    numberArr = [];
    document.querySelector('.calculator-screen').value = '';
}
const calculation = (numberArr) => {
    let finishNumber = Number(numberArr[0]);
    for (let i = 1; i < numberArr.length; i += 2) {
        let nextNumber = Number(numberArr[i+1]);
        let operator = numberArr[i];

        if (nextNumber != undefined) {
            if (operator == '+') {
                finishNumber += nextNumber;
            }
            else if (operator == '-') {
                finishNumber -= nextNumber;
            }
            else if (operator == '*') {
                finishNumber *= nextNumber;
            }
            else if (operator == '/') {
                finishNumber /= nextNumber;
            }
        }
    }

    return finishNumber;
}

const filter = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/') && (arr[i + 1] == '+' || arr[i + 1] == '-' || arr[i + 1] == '*' || arr[i + 1] == '/')) {
            arr.splice(i - 1, 1);
            i--;
        }
    }
    return arr;
}

const getNumberFromDisplay = (operator) => {
    let currentNumber = document.querySelector('.calculator-screen').value;

    if (currentNumber != 0) {
        numberArr.push(currentNumber);
    }
    
    numberArr.push(operator);
    document.querySelector('.calculator-screen').value = 0;
}

const addToDisplay = (number) => {
    if (document.querySelector('.calculator-screen').value == 0) {
        document.querySelector('.calculator-screen').value = number;
    }
    else {
        document.querySelector('.calculator-screen').value += number;
    }
}

const finish = () => {
    let currentNumber = document.querySelector('.calculator-screen').value;
    numberArr.push(currentNumber);
    numberArr = filter(numberArr);
    document.querySelector('.calculator-screen').value = calculation(numberArr);
    numberArr = [document.querySelector('.calculator-screen').value];
}