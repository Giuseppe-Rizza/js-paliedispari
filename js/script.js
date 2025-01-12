
// richiesta info all'utente (parola)
const word = prompt ("Inserisci una parola");

console.log((word));

// verifica se la parola è palindroma attraverso l'uso di una funzione
function palindromeWord (string) {

    let wordInvert = "";

    for (let i = string.length - 1; i >= 0; i--) {

        wordInvert = wordInvert + string [i];

    }

        // SE la parola è palindroma

    if (string === wordInvert) {

            // setto il risultato su Parola palindroma

        return "Parola palindroma";

        // SE la parola non è palindroma

    } else {

        // setto il risultato su Parola non palindroma

        return "Parola non palindroma";
    }
}

console.log(palindromeWord(word));