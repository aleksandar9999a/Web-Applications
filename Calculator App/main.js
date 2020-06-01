function app(screen) {
    const validValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '=', '-', '+', '*', '/', 'AC'];
    const commands = ['-', '+', '*', '/'];
    let value = '';
    return {
        handleEvent: function (e) {
            if (e.target.tagName !== 'BUTTON') { return; }
            if (!validValues.includes(e.target.value)) { return; }
            if (e.target.value === 'AC') { value = ''; screen.value = value; return; }
            if (commands.includes(value[value.length - 1]) && commands.includes(e.target.value)) {
                value = value.slice(0, value.length - 1);
            }
            if (e.target.value === '=') { value = this.initCalc(); } else { value += e.target.value; }

            screen.value = value;
        },
        calculate: function (firstValue, secondValue, command) {
            if (!commands.includes(command)) { return firstValue; }
            if (command === '+') { return Number(firstValue) + Number(secondValue); }
            if (command === '-') { return Number(firstValue) - Number(secondValue); }
            if (command === '*') { return Number(firstValue) * Number(secondValue); }
            if (command === '/') { return Number(firstValue) / Number(secondValue); }
        },
        initCalc: function () {
            return value
                .split('')
                .reduce((acc, x) => {
                    if (!acc[acc.length - 1] || commands.includes(x) || commands.includes(acc[acc.length - 1])) { acc.push(x); return acc; }
                    acc[acc.length - 1] += x;
                    return acc;
                }, [])
                .reduce((acc, x, i, arr) => {
                    if (commands.includes(x)) { return acc; }
                    if (i === 0) { return x; }

                    return this.calculate(acc, x, arr[i - 1]);
                }, 0)
        }
    }
}

document.addEventListener('DOMContentLoaded', () => { document.addEventListener('click', app(document.getElementById('screen'))); })