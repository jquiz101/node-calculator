const simpleStatistics = require("simple-statistics")

class Calculator {

    add = (num1, num2) => {
        return num1 + num2
    }

    subtract = (num1, num2) => {
        return num1 - num2
    }

    mutiply = (num1, num2) => {
        return num1 * num2
    }

    divide = (num1, num2) => {
        return num1 / num2
    }

    findMinOfList = (arrayOfNumbers) => {
        return simpleStatistics.min(arrayOfNumbers)
    }

    findMaxOfList(arrayOfNumbers) {
        return simpleStatistics.max(arrayOfNumbers)
    }
}

module.exports = Calculator