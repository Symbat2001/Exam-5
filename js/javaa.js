// 1 tapsyrma

let num1 = +prompt("1-shi san engiz")
let num2 = +prompt("2-shi san engiz")
let tanba = prompt("Tanba engiz")

function calculator(san1, san2, tanba) {
    while (true) {
       if (tanba == "+") {
            return san1 + san2
       }else if (tanba == "-") {
            return san1 - san2 
       }else if (tanba == "*") {
            return san1 * san2
       }else if (tanba == "/") {
            return san1 / san2
       }else{
            alert("Qate engizdin!")
       }
    } 
    
}
alert("Natizhe: " + calculator(num1,num2,tanba));

// 2 tapsyrma

let bagasy = +prompt("Zattyn bagasyn engiz:")
let tovar = +prompt("Qansha zat alasyz?")
let i = 0;
let birge = 0;
let zhenildik = 0;

function findTovar() {
    while (i<tovar) {
        if (bagasy<5000) {
            alert("Sizge 10% zhenildik zhasalady!")
        }
        else if (5000<=bagasy && 10000>=bagasy) {
            alert("Sizge 20% zhenildik ")
        }
    }
}


// 3 tapsyrma

function zhasyryn() {
    let number = parseInt()
    
}



