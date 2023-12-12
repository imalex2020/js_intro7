//Task - 1 
const replaceFirstLast = (string) => {
    let str = string.trim()
    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
}
console.log(replaceFirstLast('Hello'))

//Task - 2 Swap First and Last Words??

const swapFirstLastWord = (string) => {
    let words = string.trim().split(" ")
    if (words.length < 2) return ""
    else {
        [words[0], words[length - 1]] = [words[length - 1], words[0]]
        return words.join(" ")
    }
}

console.log(swapFirstLastWord("foo bar foo bar"))

//Task - 3 factorial()

const factorial = (num) => num < 1 ? 1 : num * factorial(num - 1)
console.log(factorial(5))

//Task - 4 removeExtraSpaces()
const removeExtraSpaces = (str) => str.trim().split("").join("")
console.log(removeExtraSpaces(" JavaScript is fun"))

//Task - 5  firstDuplicate()
const firstDuplicate = arr => {
    let FDuplicat = null
    for (i = 0; i < arr.length; i++) {
        if (arr.slice(i + 1).includes(arr[i])) {
            FDuplicat = arr[i]
            break;
        }

    }
    if (FDuplicat === null) return - 1
    else return FDuplicat
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]))
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]))
console.log(firstDuplicate([5, '5', 3, 7, 4]))
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']))
console.log(firstDuplicate([1, 2, 3]))
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']))

//Task - 6 getDuplicates()
const getDuplicates = arr => {
    const container = []
    const duplicates = []
    for (const obj of arr) {
        if (container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
        else container.push(obj)
    }
    return duplicates
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]))

//Task - 7 reverseStringWords()
const reverseStringWords = (str) => str.split("").reverse().join("").split(" ").reverse().join(" ")
console.log(reverseStringWords("Hello World"))

//Task - 8 add two arrays

const add = (arr1, arr2) => {
    const newArr = []
    for (i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        newArr.push((arr1[i] || 0) + (arr2[i] || 0))
    }
    return newArr
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))

//Task - 9 Palindrome

const isPalindrome = (str) => str.toLowerCase().split("").reverse().join('') === str.toLowerCase()
console.log(isPalindrome("Kayak"))

//Task - 10 removeDuplicates()
const removeDuplicates = (arr) => {
    let noDuplicats = []
    let duplicates = []
    for (const obj of arr) {
        if (noDuplicats.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
        else noDuplicats.push(obj)
    }
    return noDuplicats

}
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]))

//Task - 11 - isPrime
const isPrime = (num) => {
    if (num < 2) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    for (i = 2; i < num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(1))

//Task - 12
const factorial1 = (num) => num < 1 ? 1 : num * factorial1(num - 1)

const arrFactorial = (arr) => arr.map(x => factorial1(x))
console.log(arrFactorial([1, 2, 3, 4]))

//Task - 13
const findBiggestNumber = str =>{
    const numbers = []
   str.split('').forEach( x =>{
    if(!(x >= '0' && x <= '9')) numbers.push(' ')
    else numbers.push(x)
   })
   
   const arr = numbers.join('').split(' ')
 return Math.max(...arr)
}


console.log(findBiggestNumber("3 for 10 dollars"))

//Task - 14 Find Sum Numbers
const findSumNumbers = str => str.split('').map( x => isNaN(x) ? " ": x).join("").split(" ").reduce((acum, num) => Number(acum) + Number(num))

console.log(findSumNumbers("3 for 10 dollars"))

//Task - 14 isPowerOf3() !!!!!!
const isPowerOf3 = (num) =>{
    for(i = num; i > 0; i/=3){
        if( i === 1) return true
    }
    return false
}

//Task - 15
const fibonacciSer = num =>{
    if (num === 1) return [0]
    if (num === 2) return [0, 1]
    let result = [0, 1]
    for(let i = 2; i < num; i++){
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}
console.log(fibonacciSer(8))

//Task - 16
const fibonachi2 = num =>{
    if(num === 1) return [0]
    if(num === 2) return [0, 1]
    let result = [0, 1]
    for(let i = 2; i > num; i++){
        result.push[relust[i - 1] + result[i - 2]]
    }
    return result[result.length - 1]
    
}

//Task - 17 findUniques()
const findUniques = (arr1, arr2) => {
    let result = []

    for(let i = 0; i < arr1.length; i++){
       if (!arr2.includes(arr1[i]) && !result.includes(arr1[i])) result.push(arr1[i])
    }
    for(let i = 0; i < arr2.length; i++){
        if (!arr1.includes(arr2[i]) && !result.includes(arr2[i])) result.push(arr2[i])
     }
    return result
}

console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]))


//Is Anagram
const isAnagram = (str1, str2) => str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
console.log(isAnagram("Apple", "Peach"))
console.log(isAnagram("CINEMA", "iceman"))