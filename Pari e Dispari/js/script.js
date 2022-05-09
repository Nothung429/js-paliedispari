// L’utente sceglie tra pari o dispari
let oddEven;
do {
    oddEven = prompt("Scegli tra pari e dispari")
} while (oddEven !== "pari" && oddEven !== "dispari");
console.log(oddEven);

// L'utente sceglie un numero tra 1 e 5
let playerNumber;
do {
    playerNumber = Number(prompt("Scegli un numero tra 1 e 5"));
} while (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 5);
console.log(playerNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function getRandomNumber (min , max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
const cpuNumber = getRandomNumber(1,5);
console.log(cpuNumber);

// Sommiamo i due numeri
const sum = cpuNumber + playerNumber;
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let sumEven = 0;
let sumOdd = 0;
if ( sum % 2 === 0 ) {
    sumEven = "pari";
} else {
    sumOdd = "dispari";
}

// Dichiariamo chi ha vinto
if (oddEven === sumEven || oddEven === sumOdd) {
    alert("hai vinto");
} else {
    alert("ritenta");
}