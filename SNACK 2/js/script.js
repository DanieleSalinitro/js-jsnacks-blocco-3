//SNACK 2

//funzione che genera numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let n = parseInt(prompt("Inserisci un numero"));

function genArray (){
    let array=[];
    for (i=0; i<10; i++){
        array.push(getRndInteger(1,100))
    }
    return array;
}
for (i = 0; i<n; i++){

}