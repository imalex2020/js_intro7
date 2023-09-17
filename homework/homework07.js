//Task - 1
const hasUpperCase = (str) => str !== str.toLowerCase()
console.log(hasUpperCase('T$123'))

//Task - 2
const noDigit = (str) =>{
let array = str.split('')
let newArr = [];
for (const obj of array){
    if(isNaN(obj)) newArr.push(obj)
}
   return newArr.join("")
}  

console.log(noDigit("123Hello"))

//2a
const noDigit2 = (str) => str.split("").filter(x => isNaN(x)).join("")
console.log(noDigit2("123Hell55o"))

//Task - 3
const noVowel = (str) =>{
let arr = str.split('');
let newArr = [];
for (const obj of arr){
    if (!("AOIUEaouie".includes(obj))) newArr.push(obj)
}
return newArr.join('');
}
console.log(noVowel("TechGlobal"))

//3a
const noVowel2 = (str) => str.split('').filter(x => !("AOIUEaouie".includes(x))).join("")
console.log(noVowel2("TechGlobal"))

//Task - 4
const no13 = (arr) => arr.map(x => x === 13 ? 0 : x)
console.log(no13([13, 13, 13, 13]))

//Task - 5
const middleInt = (num1, num2, num3) => {
newArr = [num1, num2, num3];
return newArr.sort((n1, n2) => n1 - n2)[1]
}
console.log(middleInt(5, 3, 5))

//5a
const middleInt2 = (num1, num2, num3) => [num1, num2, num3].sort((n1, n2) => n1 - n2)[1]
console.log(middleInt2(5, 3, 5))


//Task - 6
const sumOfDigit = (str) =>{
    let array = str.split('')
    let NewArr = [];
    for (number of array){
        if (!isNaN(number)) NewArr.push(number)   
    }
    reduceArr =  NewArr.reduce((sum, num) => parseInt(sum) + parseInt(num))
   return reduceArr

}
console.log(sumOfDigit("jfjf558jhj"))

//6a
const sumOfDigit2 = (str) => str.split('').filter(x => !isNaN(x)).reduce((sum, num) => parseInt(sum) + parseInt(num))
console.log(sumOfDigit2("jfjf558jhj"))

//Task - 7
const factorial = (n) => (n < 1 ? 1 : n * factorial(n - 1));
const arrFactorial = (array) => array.map(factorial);
console.log(arrFactorial([1, 2, 3, 4]));

//Task - 8
const categorizeCharacters = (str) =>{
    const letters = [];
    const numbers = [];
    const specialCharacters = [];
    str.split("").forEach(x =>{
        if( x > "A" && x < "Z" || x >= "a" && x <= "z") letters.push(x)
        else if( !isNaN(x)) numbers.push(x)
       else specialCharacters.push(x)
    })
    return [letters.join(""),numbers.join(""), specialCharacters.join("")]
}
console.log(categorizeCharacters("12ab$%3c%"))

