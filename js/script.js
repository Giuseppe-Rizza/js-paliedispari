
// richiesta info all'utente (parola)
const word = prompt ("Inserisci una parola");

console.log(verifica(word));

// verifica se la parola è palindroma
function verifica (string) {

    let wordInvert = "";

    for (let i = string.length - 1; i >= 0; i--) {

        wordInvert +- stringa [i];

    }

        // SE la parola è palindroma

    if (string === wordInvert) {

            // setto il risultato su Parola palindroma

        return "Parola palindroma"

        // SE la parola non è palindroma

    } else {

        // setto il risultato su Parola non palindroma

        return "Parola non palindroma"
    }
}
