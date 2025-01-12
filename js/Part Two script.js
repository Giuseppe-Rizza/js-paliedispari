
// richiesta info all'utente (parola)
const evenOdd = prompt ("Scegli tra even e odd");
const numberOneToFive = parseInt(prompt ("Inserisci un numero da 1 a 5"));

console.log(evenOdd);
console.log(numberOneToFive);


// genera un numero random (da 1 a 5) per il PC attraverso l'uso di una funzione

function numberRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

  }

let PcNumberRandom = numberRandom(1, 5);

console.log("Numero estratto PC: " + PcNumberRandom);


// somma i due numeri

let userPlusPc = numberOneToFive + PcNumberRandom;

console.log("Il valore della somma tra user e PC è: " + userPlusPc);


// stabilisci se la somma dei due numeri è pari o dispari attraverso l'uso di una funzione

function ifEvenOrOdd(sumNumbers) {

    if (userPlusPc % 2 === 0) {
        
        return "even";

    } else {

        return "odd";
    }
    
}

let resultEvenOrOdd = ifEvenOrOdd(userPlusPc);

console.log("La somma tra user e PC è: " + resultEvenOrOdd);


// dichiara il vincitore

if (evenOdd === resultEvenOrOdd) {
    
    console.log("User win");
    
} else {

    console.log("PC win");
    
}


