//Task - 1
const noSpace = (str) => str.split(" ").join('');
console.log(noSpace(" Hello World   "))

//Task - 2
const replaceFirst = (str) => str.slice(str.length - 1,) + str.slice(1, str.length - 2) + str.slice(0, 1)
console.log(replaceFirst("Tech Global"))

//Task - 3
const hasVowel = (str) => {
    for (letter of str) {
        if ("AEOUIaeoui".includes(letter))
            return true
    }
    return false
}
console.log(hasVowel("123o4"))

//Task - 4
const checkAge = (num) => {
    if ((new Date().getFullYear() - num) > 120 || num > new Date().getFullYear()) return "AGE IS NOT VALID"
    else if ((new Date().getFullYear() - num) >= 16) return "AGE IS ALLOWED"
    else return "AGE IS NOT ALLOWED"
}
console.log(checkAge(1800))

//Task - 5
const averageOfEdges = (num1, num2, num3) => (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2
console.log(averageOfEdges(-2, -2, 10))

//Task - 6
const noA = (arr) => {
    newAr = arr.map((x) => {
        if (x.includes("a")) return "###"
        else return x
    })

    return newAr
}
console.log(noA(["apple", "123", "ABC", "javascript"]))

//Task - 7
const no3and5 = (arr) => {
    newArr = arr.map((x) => {
        if (x % 15 === 0) return 101
        if (x % 3 === 0) return 100
        if (x % 5 === 0) return 99
        else return x
    })
    return newArr
}
console.log(no3and5([10, 11, 12, 13, 14, 15]))

//Task - 8
const IsPrime = (number) => {
    let p = 5
    if (number % 2 === 0 || number % 3 === 0) return false
    if (number < 2) return false
    if (number === 2 || number === 3)

        while (number > p) {
            if (number % p === 0) return false
            p += 2
        }
    ; return true
}

const countPrimes = (array) => (array.filter(number => IsPrime(number))).length
console.log(countPrimes([41, 53, 19, 47, 67]))



//Task - 9
const removeDuplicates = (arr) => {
    let noDuplicats = []
    let duplicates = []
    for (obj of arr) {
        if (noDuplicats.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
        else noDuplicats.push(obj)

    } return noDuplicats
}
console.log(removeDuplicates((["1", "2", "3", "2", "3"])))

//Task - 9a
const removeDuplicates2 = (arr) => {
    const newArray = arr.filter((item, index, self) => {
        return self.indexOf(item) === index;
    });

    return newArray;
};
console.log(removeDuplicates2(["1", "2", "3", "2", "3"]))

//Task - 10
const isDateFormatValid = (string) => {

    if (string.trim().length !== 10) return false
    if (string.split('/').length !== 3) return false
    if (!(string.split('/')[0] <= 12 && string.split('/')[0] >= 1)) return false
    if (!(string.split('/')[1] <= 31 && string.split('/')[1] >= 1)) return false
    return true
}
console.log(isDateFormatValid("10-30-2020"))

//Task - 11
const secondMax = (arr) => {
    let Maxnum = Math.max(...arr)
    let secondMaxNum = arr[0]
    for (number of arr) {

        if (number > secondMaxNum && number != Maxnum) secondMaxNum = number

    }
    return secondMaxNum
}
console.log(secondMax([3, 24, 5, 6, 23, 1, 9, 456]))

//Task - 12
const secondMin = (arr) => {
    let Maxnum = Math.max(...arr)
    let Minnum = Math.min(...arr)
    let secondMinNum = 0
    for (number of arr) {

        if (number < Maxnum && number != Minnum) Maxnum = number
        secondMinNum = Maxnum
    }
    return secondMinNum
}
console.log(secondMin([3, 4, 5, 6]))

//Task - 13
function mostRepeated(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    let mostRepeatedElement = arr[0];
    let maxCount = 1;
    let currentElement = arr[0];
    let currentCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentElement) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
                mostRepeatedElement = currentElement;
            }
            currentElement = arr[i];
            currentCount = 1;
        }
    }


    if (currentCount > maxCount) {
        mostRepeatedElement = currentElement;
    }

    return mostRepeatedElement;
}
console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]))
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])) 


