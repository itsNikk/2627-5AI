//Le funzioni sono tipi, quindi sono valori
// uguaglianze in JS SEMPRE con === o !==
// == !=
// nomeFunzione != nomeFunzione()
let showMessage = function (from, text = "no text") {
    //if (text===undefined) 
    console.log(from + ": " + text);
}
//let = def di variabile, const = constant
let funcCopy = showMessage

funcCopy("Logan")
funcCopy("Ron", "sdffdgsaifawsasdfl")
showMessage("Nikk", "Ciao")
showMessage("luca", "altro messaggio")

let numbers = [1, 2, 3, 4, 5]

//Definite funzione che stampa il doppio di ogni
function printDoubles(elem) {
    //o for normale o foreach
        console.log(elem * 2)
}
//definite funzione che stampa il quadrato di ogni
function printSquare(elem) {
    //o for normale o foreach
        console.log(elem * elem)
}

function compute(data, func) {
    for (let e of data) {
        func(e)
    }
}

compute(numbers, printDoubles)
console.log();
compute(numbers, printSquare)

//Fate uno script che simula una calcolatrice
// definite solo una funzione calcola(a,b,op)