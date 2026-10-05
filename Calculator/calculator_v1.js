const n1Elem = document.getElementById("n1");
const n2Elem = document.getElementById("n2");
const calcolBtn = document.getElementById("calcolaBtn")

const op = document.getElementById("operation");
const resElem = document.getElementById("result")

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

//Def chooseOp(operand) => restituisce funz relativa 
function chooseOp(operand) {
    switch (operand) {
        case '+':
            return sum
        case '-':
            return diff
    }
}

function compute(f, a, b) {
    return f(a, b)
}

//Come controllo il btn?
calcolBtn.addEventListener("click", function () {
    //prendere primo numero
    const a = Number(n1Elem.value)
    const b = Number(n2Elem.value)

    const chosenOp = chooseOp(op.value)
    const res = compute(chosenOp, a, b)

    resElem.textContent = res
})