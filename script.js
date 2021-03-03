const calculator = {
    display: document.querySelector('.calculator-screen'),
    keys: document.querySelectorAll('button'),
}

let input1, operator, input2, result;

calculator.keys.forEach(key => {
    key.addEventListener('click', () => {
        

        if(key.classList.contains('key')) {
            if(calculator.display.value === '0') {
                calculator.display.value = key.value;
            } else {
                calculator.display.value += key.value;
            }
        }
        if(key.classList.contains('operator')) {
            input1 = calculator.display.value;
            calculator.display.value += key.value;
            operator = key.value;
        }
        if(key.classList.contains('equal-sign')) {
            input2 = calculator.display.value.slice(
                calculator.display.value.indexOf(operator) + 1
            );
            result = operate(input1, input2, operator);
            calculator.display.value = result.toString();
        }
    });
});


function operate(a, b, operator) {
    return operator === '+' ? add(a,b):
            operator === '-' ? sub(a,b):
            operator === '*' ? multiply(a,b):
            operator === '/' ? divide(a,b): 'Unknown operator!';
    
}

const add = (a, b) => +a + +b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

