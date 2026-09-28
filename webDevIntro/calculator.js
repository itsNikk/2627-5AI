//+ - * /

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calcola(a, b, op) {
    return op(a, b);
}

//Arrow function (anon func) => () => {}
console.log(calcola(1, 2, (a, b) => a * b))
console.log(calcola(1, 2, sum))
console.log(calcola(1, 2, subtract))