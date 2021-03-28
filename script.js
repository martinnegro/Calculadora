function concatenador(a) {
    console.log('hola');
}


let numeros = document.querySelectorAll('#numeros');
console.table(numeros);
numeros.forEach(a => a.addEventListener('click',concatenador));


/* FUNCIONES M  ATEMATICAS */
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
    let result;
    
    operador == "+" ? result = add(a,b) : {};
    operador == "-" ? result = substract(a,b) : {};
    operador == "*" ? result = multiply(a,b) : {};
    operador == "/" ? result = divide(a,b) : {};

    return result;
    
}