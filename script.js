const display = document.querySelector('.led');
const botones = Array.from(document.querySelectorAll('button'));
botones.forEach(btn => btn.addEventListener('click', operacion));

let operando = '';
let operador = '';
let firstNum = '';

function operacion() {
    if (this.id == 'numeros') {
        operando = operando.concat(this.value);
        display.textContent = operando;
    } else if (this.id == 'operadores') {
        if (operador == '') {
            if (firstNum != '') {
                operador = this.value;
            } else {
                if (operando == '') {
                    display.textContent = 'ERROR';
                    operador = '';
                    operando = '';
                    firstNum = '';                    
                } else {
                    firstNum = operando;
                    operador = this.value;
                    operando = '';
                }
            }
        } else if (operador != '') {
            firstNum = operate(firstNum,operando,operador);
            display.textContent = firstNum;
            operando = '';
            operador = this.value;
        }
    } else if (this.id == 'borrar') {
        if (this.class = 'delete') {
            operando = operando.slice(0,-1);
            display.textContent = operando;
        } else if (this.class = 'clear') {
            operando = '';
            operador = '';
            firstNum = '';
            display.textContent = '';
        }
    } else if (this.id == 'enter') {
        if (operando == '') {
            operando = firstNum;
            firstNum = operate(firstNum,operando,operador);
            display.textContent = firstNum;
            operando = '';
            operador = '';
        } else {
            firstNum = operate(firstNum,operando,operador);
            display.textContent = firstNum;
            operando = firstNum;
            operando = '';
            operador = '';
        }

    }
    console.log(firstNum);
    console.log(operador);
    console.log(operando);
}


/* FUNCIONES MATEMATICAS */
function add (a,b) {
    return a + b;   
}
function substract (a,b) {
    return a - b;
}
function multiply (a,b) {
    return a * b;
}
function divide (a,b) {
    return a / b;
}
function operate(a,b,operador) {
    a = parseFloat(a);
    b = parseFloat(b);
    
    let result;
    
    operador == "+" ? result = add(a,b) : {};
    operador == "-" ? result = substract(a,b) : {};
    operador == "*" ? result = multiply(a,b) : {};
    operador == "/" && b !== 0 ? result = divide(a,b) : {};

    return (Math.round(result * 100) / 100).toString();
    
}