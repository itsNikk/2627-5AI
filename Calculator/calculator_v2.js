const n1Elem = document.getElementById("n1");
const n2Elem = document.getElementById("n2");
const calcolBtn = document.getElementById("calcolaBtn")

const op = document.getElementById("operation");
const resElem = document.getElementById("result")

let interval;

//JS OBJ = hashmap -> K,V
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => {
        if (b === 0) throw new Error("Denominator is zero.")
        return a / b
    }
}

function compute(f, a, b) {
    return f(a, b)
}

//Come controllo il btn? AEL
calcolBtn.addEventListener("click", function () {
    //prendere primo numero
    const a = Number(n1Elem.value)
    const b = Number(n2Elem.value)

    try {
        const res = compute(operations[op.value], a, b)
        resElem.textContent = res
    } catch (err) {
        resElem.textContent = err.message
    }
    clearInterval(interval);

})

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