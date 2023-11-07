//Task - 1
const countPalindrome = (str) =>{
return str.toLowerCase().trim().split(' ').filter( x => x.split('').reverse().join('') === x).length
}
console.log(countPalindrome("See you at noon"))

//Task - 2
const sum = (arr, bln) => {
    let evenNum = 0
    let oddNum = 0
    for(const num of arr){
        if (arr.indexOf(num) % 2 === 0) evenNum += num
        else oddNum += num
    }
    
   if(bln === true) return evenNum
   else return oddNum
}
console.log(sum([1, 5, 10], true) )

//Task - 3
const nthChars = (str, num) =>{
    let result = ""

  for (let i = num - 1; i < str.length; i += num) {
    result += str[i];
  }

  return result;
}
console.log(nthChars("JavaScript", 5) )

//Task - 4
canFormString = (str1, str2) =>{
   return str2.toLowerCase().split(" ").join('').split("").every(x => str1.toLowerCase().split(' ').join('').includes(x))
}
console.log(canFormString("halogen", "hello"))


//Task - 5 
const isAnagram = (str1, str2) =>{
    return str2.toLowerCase().split(" ").join('').split("").every(x => str1.toLowerCase().split(' ').join('').includes(x)) ||
    str1.toLowerCase().split(" ").join('').split("").every(x => str2.toLowerCase().split(' ').join('').includes(x))
}
console.log(isAnagram("listen", "silent"))

//Task - 5b
const isAnagram2 = (str1, str2) =>{
    return str1.toLowerCase().split(" ").join('').split("").sort().join('') === str2.toLowerCase().split(" ").join('').split("").sort().join('')
}
console.log(isAnagram2("listen", "silent"))

//Task - 6
const count = (arr, bln) =>{

    let countEven = 0
    let countOdd = 0
    for(const num of arr){
        if (num % 2 === 0) countEven++
        else countOdd++
    }
    
   if(bln === true) return countEven
   else return countOdd
}
console.log(count([-1, 1, -2, 2], true) )

//Task - 7
const sumDigitsDouble = (str) => {
    const numbers = str.split('').filter(x => !isNaN(x))
    if (numbers.join('') === "") return -1
    else return numbers.reduce((sum, num) => Number(sum) + Number(num)) * 2
}

console.log(sumDigitsDouble('Hi-23'))

//Task - 8
const countOccurrence = (str1, str2) =>{
return Math.trunc(str1.toLowerCase().split('').filter(x => str2.toLowerCase().includes(x)).length / str2.length)
}

console.log(countOccurrence("Hello", "l"))


