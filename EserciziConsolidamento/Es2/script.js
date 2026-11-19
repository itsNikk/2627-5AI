const counterElem = document.getElementById("valore")
const avvisoElem = document.getElementById("avviso")
const piu10Btn = document.getElementById("piu10")

let counter = 0;
function cambiaDi(n) {
    /*return () => {
        counter += n //counter = counter + n
        counterElem.textContent = counter
    }*/
    return () => filtro(counter + n)
}

function filtro(newVal) {
    if (counter > 100 || counter < 0) {
        avvisoElem.textContent = "Limite raggiunto"
        return
    }
    counter = newVal
    counterElem.textContent = counter
    avvisoElem.textContent = ""
}

function azzera() {
    counter = 0
    counterElem.textContent = counter
    avvisoElem.textContent = ""
}

const keys = {
    ArrowUp: cambiaDi(1),
    ArrowDown: cambiaDi(-1),
    Escape: azzera
}

function keyManager(keymap) {
    return (e) => {
        const action = keys[e.key]
        if (action !== undefined) action()
    }
}

document.addEventListener("keydown", keyManager(keys))

//azzera() vs azzera
piu10Btn.addEventListener("click", cambiaDi(10))
//piu10Btn.addEventListener("click", () => {filtro(counter + n))
document.getElementById("meno10").addEventListener("click", cambiaDi(-10))
document.getElementById("azzera").addEventListener("click", azzera)