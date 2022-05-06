// Chiedere all’utente di inserire una parola
const word = prompt("Inserisci una parola ed io verificherò se è palindroma ;)")
console.log(word);
let wordReverse = "";
// parola lettera per lettera left to right
for (let i = 0 ; i < word.length ; i++) {
    console.log(i , word[i]);
}
// parola lettera per lettera right to left
for (let i = word.length - 1 ; i >= 0 ; i--) {
    console.log(i , word[i]);
    wordReverse += word[i];
}
// Adesso fare il confronto tra la parola e il suo contrario e vedere se sono uguali o diverse
if (word === wordReverse) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}
// Se sono uguali è palindroma, se sono diverse non lo è