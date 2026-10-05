// def double(n) => restituise n*2
function double(n) {
    return n * 2
}

//def incrment(n) => restituisce il successivo di n
function increment(n) {
    return n + 1
}

// def apply() => applica una funzione a un x in ingresso
// f è di tipo funzione e x un qualunque valore
function apply(f, x) {
    return f(x)
}

console.log(apply(double, 21))
//apply(double, 21)
// return double(21)
console.log(apply(increment, 2));
console.log(apply(double, apply(increment, 5)));
// 1) apply(double, apply(increment(5))
// 2) apply => return double(apply(increment(5))
// 3) apply => return double(apply(increment(5)) => ERROR

//// 1) apply(double, apply(increment,5))
//// 2) apply=> return double(6) => return 12