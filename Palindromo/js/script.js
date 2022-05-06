// Chiedere all’utente di inserire una parola
const wordRequest = prompt("Inserisci una parola ed io verificherò se è palindroma ;)")
console.log(wordRequest);
// parola lettera per lettera left to right
for (let i = 0 ; i < wordRequest.length ; i++) {
    console.log(i , wordRequest[i]);
}
// parola lettera per lettera right to left
function reverse (word) {
    let wordReverse = "";
    for (let i = word.length - 1 ; i >= 0 ; i--) {
        console.log(i , word[i]);
        wordReverse += word[i];
    }
    return wordReverse;
}
let wordReverse = reverse(wordRequest);
console.log(wordReverse);
// Adesso fare il confronto tra la parola e il suo contrario e vedere se sono uguali o diverse
if (wordRequest === wordReverse) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}
// Se sono uguali è palindroma, se sono diverse non lo è    