//Task - 1 Double or Triple the Word
const doubleOrTripleWord = (str) => str.length % 2 === 0 ? str + str + str : str + str;
console.log(doubleOrTripleWord("Tech"))
console.log(doubleOrTripleWord(" "))

//Task - 2 First and Last Word only
const firstlastWord = (str) => str.length === 0 ? '' : str.split(" ")[0] + str.split(" ")[str.split(" ").length - 1]
console.log(firstlastWord("Hello"))

//Task - 3 Has Vowel
const hasVowel = (str) => str.split("").some(x => "AOUEIaouei".includes(x))
console.log(hasVowel("1A234"))

//Task - 4 Start Vowel
const startVowel = (str) => "AOEUIaoeui".includes(str[0])
console.log(startVowel("AHello"))

//Task - 5 Average of Edges
const averageOfEdges = (num1, num2, num3) => (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2
console.log(averageOfEdges(10, 13, 20))
q
//Task - 6 Swap First and Last Characters
const replaceFirstLast = (str) => {
    str = str.trim()
    if (str.length < 2) return ''
    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
}
console.log(replaceFirstLast("Tech Global"))

//Task - 7 Swap First and Last Four Characters-----------------------------
const swap4 = (str) => str.length < 8 ? " " : str.slice(4, str.length) + str.slice(0, 4)
console.log(swap4("JavaScript"))

//Task - 8 ???Swap First and Last Words -----------------------
const swapFirstLastWord = (str) => {
    let Newstr = str.trim()
    if (!Newstr.includes(" ")) return " "
    return Newstr.slice(Newstr.lastIndexOf(" ") + 1) + Newstr.slice(0, Newstr.indexOf(" ") + 1)
}
console.log(swapFirstLastWord("foo bar foo bar"))

//Task - 9 Count Positive Numbers
const countPos = (arr) => arr.filter(x => x > 0).length
console.log(countPos([-45, 0, 0, 34, 5, 67]))

//Task - 10 Find Even Numbers
const getEvens = (num1, num2) => {
    let arr = []
    for (i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 2 === 0) arr.push(i)
    }
    return arr
}
console.log(getEvens(17, 5))

//Task - 11 Find Numbers Divisible By 5
const getMultipleOf5 = (num1, num2) => {
    let arr = [];
    for (i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 5 === 0) arr.push(i)
    } return arr
}
console.log(getMultipleOf5(2, 4))

//Task - 12 Count Negative Numbers
const countNeg = (arr) => arr.filter(x => x < 0).length
console.log(countNeg([0, -1, -2, -3]))

//Task - 13 countA()
const countA = (str) => str.toLowerCase().split("").filter(x => x === "a").length
console.log(countA("QA stands for Quality Aassurance"))

//Task - 14 countWords()
const countWords = (str) => str.trim().split(" ").length
console.log(countWords("1 2 3 4 "))

//Task - 15 Factorial //repeat----------------------
const fac = (n) => {
    if (n < 1) return 1
    return n * fac(n - 1);
}
console.log(fac(5))

//Task - 16 count3OrLess()
const count3OrLess = (str) => str.trim().split(" ").filter(x => x.length >= 3).length
console.log(count3OrLess("My name is John Doe"))

//Task - 17 removeExtraSpaces()
const removeExtraSpaces = (str) => str.trim().split(" ").join("")
console.log(removeExtraSpaces(" Hello World "))

//Task - 18 middleInt()
const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((x, y) => x - y)[1]
console.log(middleInt(-1, 25, 10))

//Task - 19 First Duplicate Element()
const firstDuplicate = arr => {
    let fDuplicate = null
    for (i = 0; i < arr.length; i++) {
        if (arr.slice(i + 1).includes(arr[i])) {
            fDuplicate = arr[i]
            break;
        }
    }
    if (fDuplicate === null) return -1
    else return fDuplicate 
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])) 
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]) )
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))

//Task - 20 Find All Duplicate Elements
const getDuplicates = arr => {
    const container = [];
    const duplicates = [];
    for (const obj of arr) {
        if (container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
        else container.push(obj)
    }
    return duplicates
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]))

//Task - 21 countVowels()
const countVowels = (str) => str.split("").filter(x => "AOUEIaouei".includes(x)).length
console.log(countVowels("Hello"))

//Task - 22 reverseStringWords()
const reverseStringWords = (str) => str.split(" ").reverse().join(" ").split("").reverse().join("")
console.log(reverseStringWords("Hello World"))

const reverseStringWords2 = str => str.split(" ").map((word => word.split("").reverse().join(""))).join(" ")
console.log(reverseStringWords2("Hello World"))

//Task - 23 countConsonants()
const countConsonants = (str) => str.split("").filter(x => !"AOUEIaouei".includes(x)).length
console.log(countConsonants("JavaScript is fun"))

//Task - 24 countMultipleWords()
//Task - 25 fizzBuzz()
const fizzBuzz = (num1, num2) => {
    const arr = []
    for (i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 15 === 0) arr.push("FizzBuzz")
        else if (i % 3 === 0) arr.push("Fizz")
        else if (i % 5 === 0) arr.push("Buzz")
        else arr.push(i)


    }
    return arr.join('|')

}
console.log(fizzBuzz(12, 5))

//Task - 26 isPalindrome()
const isPalindrome = (str) => str.toLowerCase().split("").reverse().join("") === str.toLowerCase()
console.log(isPalindrome("civic"))

//Task - 27  isPrime()------------------
const isPrime = (num) => {
    if (num < 2) return false
    if (num === 2) return true;
    if (num % 2 === 0) return false
    for (i = 2; i < num; i += 2) {
        if (num % i === 0) false
    }
    return true
}
console.log(isPrime(5))

const isPrime1 = (num) => {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0) false;

    let d = 5;
    while (d < num) {
        if (num % d === 0) return false
        d += 2;

    }
    return true;
}
console.log(isPrime1(5))

//Task - 28 Add Two Arrays()-----------------------
const add = (arr1, arr2) => {
    let maxArr = Math.max(arr1.length, arr2.length)
    const newArr = [];
    for (i = 0; i < maxArr; i++) {
        newArr.push((arr1[i] || 0) + (arr2[i] || 0))
    } return newArr
}

console.log(add([5,6,9,7,1,], [3, 0, 0, 7, 5, 10]))

//Task -29 noA()
const noA = arr => {
    return arr.map(x => {
        if (x.startsWith("A") || x.startsWith("a")) return "###"
        else return x
    })

}
console.log(noA(["apple", "123", "ABC", "javascript"]))


//Task - 30 no3and5()
const no3and5 = arr => {
    return arr.map(x => {
        if (x % 15 === 0) return 101
        else if (x % 3 === 0) return 100
        else if (x % 5 === 0) return 99
        else return x
    })
}
console.log(no3and5([10, 11, 12, 13, 14, 15]))

//Task - 31
const no13 = arr => arr.map(x => x === 13 ? 0 : x)
console.log(no13([13, 13, 13, 14]))

//Task - 32 removeDuplicates()
const removeDuplicates = arr => {
    const duplicates = []
    const container = []
    for (const num of arr) {
        if (container.includes(num) && !duplicates.includes(num)) duplicates.push(num)
        else container.push(num)
    }
    return container
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))



//Task - 33 noDigit()???
const noDigit = str => str.split("").filter(x => isNaN(x) || x === " ").join("")
console.log(noDigit("123Hello World149"))

//Task -34 noVowel()
const noVowel = (str) => str.split("").filter(x => !"AOUEIaouei".includes(x)).join("")
console.log(noVowel("TechGlobal"))

//Task - 35 sumOfDigits()
const sumOfDigits = str => str.split("").filter(x => !isNaN(x)).reduce((sum, num) => Number(sum) + Number(num))
console.log(sumOfDigits("jfjf558jhj"))

//Task - 36 arrFactorial()
const factorial = num => num < 1 ? 1 : num * factorial(num - 1)
const arrFactorial = arr => arr.map(x => factorial(x))
console.log(arrFactorial([5, 0, 6]))




const firstLastWord = (str) => str.slice(str[0], str.indexOf(" ")) + str.slice(str.lastIndexOf(" ") + 1, str.length);
console.log(firstLastWord("I like JavaScript"))



