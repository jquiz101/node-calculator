const Calculator = require("./calculator.js")

let myCalc = new Calculator()

console.log(myCalc.add(3,4))
console.log(myCalc.subtract(9,4))
console.log(myCalc.mutiply(3,4))
console.log(myCalc.divide(40,4))

console.log(myCalc.findMinOfList([14,25,11,32]))
console.log(myCalc.findMaxOfList([99,87,101,3]))