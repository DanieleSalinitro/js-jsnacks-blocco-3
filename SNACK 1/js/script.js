
//SNACK 1

let array= [ ];
let sumNum= 0;
while (sumNum < 50){
    let userNum= parseInt(prompt("inserisci un numero"));
    if (!isNaN(userNum)){
    array.push(userNum);
    sumNum += userNum;
    }
}
console.log(array, sumNum);

