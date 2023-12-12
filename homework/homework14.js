//Task - 1
const repeatingX = (str) => str.toLowerCase().includes("xx") ? true : false

console.log(repeatingX("x x"))

//Task - 2
const isPerfectSquare = (num) => {
    for (i = 0; i <= 9; i++){
        if ((num / i) === i) return true  
    }
    return false  
}
console.log(isPerfectSquare(25))


const isPerfectSquare2 = (num) => num / (Math.sqrt(num)) === Math.sqrt(num)

console.log(isPerfectSquare2(25))

//Task - 3
const convertTemperature = (num, str) => str === "Celsius" ? (num * 9/5) + 32 : (num - 32) * 5/9

console.log(convertTemperature(100, 'Celsius')) 
console.log(convertTemperature(212, 'Fahrenheit'))

//Task - 4
const sumOfEvenNumbers = (arr) => arr.filter(x => x % 2 === 0).reduce((num, sum)=> num + sum)

console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ))

//Task - 5
const  capsOdds = (arr) => arr.map(x => arr.indexOf(x) % 2 === 0 ? x : x.toUpperCase())

console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]) )