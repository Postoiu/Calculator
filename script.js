


function operate(a, b, operator) {
    return operator === '+' ? add(a,b):
            operator === '-' ? sub(a,b):
            operator === '*' ? multiply(a,b):
            operator === '/' ? divide(a,b): 'Unknown operator!';
    
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

