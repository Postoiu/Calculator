const calculator = {
    display: document.querySelector('.calculator-screen'),
    keys: document.querySelectorAll('button'),
}

let input1, operator, input2, result;
let count = 0;

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
            count += 1;
            if(count > 1) {
                input2 = calculator.display.value.slice(calculator.display.value.indexOf(operator) + 1);
                result = operate(input1, input2, operator);

                if(result.toString() === 'Infinity') {
                    calculator.display.value = 'Can not divide by 0';
                } else if(result.toString().indexOf('.') === -1) {
                    calculator.display.value = result.toString();
                } else {
                    calculator.display.value = result.toFixed(2).toString();
                }
            }

            input1 = calculator.display.value;
            calculator.display.value += key.value;
            operator = key.value;
        }
        if(key.classList.contains('equal-sign')) {
            input2 = calculator.display.value.slice(calculator.display.value.indexOf(operator) + 1);
            result = operate(input1, input2, operator);

            if(result.toString() === 'Infinity') {
                calculator.display.value = 'Can not divide by 0';
            } else if(result.toString().indexOf('.') === -1) {
                calculator.display.value = result.toString();
            } else {
                calculator.display.value = result.toFixed(2).toString();
            }

            count = 0;
        }
        if(key.classList.contains('all-clear')) {
            calculator.display.value = '0';
            count = 0;
            document.getElementsByClassName('decimal')[0].removeAttribute('disabled');
        }

        if(key.classList.contains('decimal')) {
            calculator.display.value += key.value;
            key.setAttribute('disabled', 'true');
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

