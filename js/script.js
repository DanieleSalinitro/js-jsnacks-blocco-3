let array= [ ];
let sumNum= 0
while (sumNum < 50){
    let userNum= parseInt(prompt("inserisci un numero"))
    array.push(userNum)
    sumNum += userNum
}
console.log(array);