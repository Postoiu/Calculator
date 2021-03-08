const display = document.querySelector('.calculator-screen');
const keys = document.querySelectorAll('button');

let input1, operator, input2;
let arr1 = [];
let arr2 = [];

keys.forEach(key => {
    key.addEventListener('click', () => {
        if(!key.classList.contains('operator') && !key.classList.contains('equal-sign')) {

            if(operator === undefined) {
                arr1.push(key.value);
                display.value = arr1.join('');
                input1 = display.value;

            } else {
                arr2.push(key.value);
                display.value = arr2.join('');
                input2 = display.value;
            }
        }

        if(key.classList.contains('operator')) {
            operator = key.value;
        }

        if(key.classList.contains('equal-sign')) {
            let result = operate(input1, input2, operator);
            if(result === Infinity) {
                display.value = 'Can not divide by 0'
            } else {
                if(result.toString().indexOf('.') === -1) {
                    display.value = result;
                } else {
                    display.value = result.toFixed(2);
                }
            }
        }

        if(key.classList.contains('decimal')) {
            key.setAttribute('disabled', 'true');
        }

        if(key.classList.contains('all-clear')) {
            arr1.splice(0);
            arr2.splice(0);
            operator = undefined;
            display.value = '0';
            document.getElementsByClassName('decimal')[0].removeAttribute('disabled');
        }
    })
})


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

