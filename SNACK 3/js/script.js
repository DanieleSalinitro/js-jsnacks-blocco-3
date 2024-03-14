//SNACK 3

//funzione che genera numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let userNum = parseInt(prompt("inserisci un numero")); 

risultato = oddOrEven (userNum);

console.log(risultato);
function oddOrEven(number){
    if (number % 2 === 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}