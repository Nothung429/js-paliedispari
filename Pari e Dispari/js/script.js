// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const oddEven = prompt("Scegli tra pari e dispari")
console.log(oddEven);
const playerNumber = Number(prompt("Scegli un numero tra 1 e 5"));
console.log(playerNumber);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const cpuNumber = Math.floor(Math.random() * 5) + 1;
console.log(cpuNumber);
// Sommiamo i due numeri
const sum = cpuNumber + playerNumber;
console.log(sum);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let sumEven = "pari";
let sumOdd = "dispari";
if ( sum % 2 === 0 ) {
    sumEven = alert("la somma è pari");
} else {
    sumOdd = alert("la somma è dispari");
}
// Dichiariamo chi ha vinto
if (oddEven === sumEven) {
    alert("hai vinto");
} else {
    alert("ritenta");
}