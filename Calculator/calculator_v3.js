const n1Elem = document.getElementById("n1");
const n2Elem = document.getElementById("n2");
const calcolBtn = document.getElementById("calcolaBtn")
const sumBtn = document.getElementById("sumBtn")
const subBtn = document.getElementById("subBtn")
const multBtn = document.getElementById("multBtn")

const op = document.getElementById("operation");
const resElem = document.getElementById("result")

let interval;

//JS OBJ = hashmap -> K,V
const operations = {
   '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        if (b === 0) throw new Error("Denominator is zero.")
        return a / b
    },
    '%': (a, b) => {
        if (b === 0) throw new Error("Denominator is zero.")
        return a % b
    },
    'max': (a, b) => a > b ? a : b,
    'min': (n, m) => Math.min(n, m),
    'media': (a, b) => (a + b) / 2
}

const keyMap = {
    Enter: update,
    Escape: () => {
        n1Elem.value = "" 
        n2Elem.value = "" 
    }
}

function keyManager(keyMap) {
    return (e) => {
        const userAction = keyMap[e.key]
        if (userAction !== undefined) userAction()
    }
}

function executeOp(a, simbolo, b) {
    //prendere primo numero
    const n1 = Number(n1Elem.value)
    const n2 = Number(n2Elem.value)

    try {
        //const res = format(n1, simbolo, b, compute(operations[simbolo], n1, n2))
        const res = compute(operations[simbolo], n1, n2)
        resElem.textContent = format(n1, simbolo, b, res)
    } catch (err) {
        resElem.textContent = err.message
    }
}

function forOperation(sym) {
    return () => {
        executeOp(n1Elem.value, sym, n2Elem.value)
    }
}

subBtn.addEventListener("click", forOperation(subBtn.textContent))
sumBtn.addEventListener("click", forOperation(sumBtn.textContent))

function scegliOperazione(simbolo) {
    const v = operations[simbolo]; //undefined se !Key
    if (v === undefined) throw new Error("Operazione non supportata: " + simbolo)
    return v;
}

function format(a, sym, b, res) {
    //"a simbolo b = res"
    return a + " " + sym + " " + b + " = " + res
}

function compute(f, a, b) {
    return f(a, b)
}

function update() {
    return executeOp(n1Elem.value, op.value, n2Elem.value)
}

//Come controllo il btn? AEL
/*calcolBtn.addEventListener("click", function () {
    executeOp(n1Elem.value, op.value, n2Elem.value)
})*/
calcolBtn.addEventListener("click", update)
op.addEventListener("change", update)
n1Elem.addEventListener("input", update)
n2Elem.addEventListener("input", update)

document.addEventListener("keydown", keyManager(keyMap))

//Eseguo quando HTML è renderizzato
document.addEventListener("DOMContentLoaded", () => {
    //setTimeout setInterval
    let i = 0

    setTimeout(() => console.log("qui"), 2000)
    //interval = setInterval(() => console.log("repetion"), 500)
})

n1Elem.addEventListener("input", (e) => {
    let v = e.target.value
    if (v.length >= 10) {
        //n1Elem.disabled = true
        //n1Elem.readOnly = true
        n1Elem.value = v.slice(0, 10)
    }
})

