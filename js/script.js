let array= [ ];
let sumNum= 0
while (sumNum < 50){
    let userNum= parseInt(prompt("inserisci un numero"))
    while(isNaN(userNum)){
        console.log("il numero inserito non è valido")
    }
                
    //loop
    sumNum += userNum
}