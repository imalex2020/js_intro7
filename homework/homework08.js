//Task -1
const hasLowerCase = (str) => str.toUpperCase() !== str
console.log(hasLowerCase("Hello"))

//Task - 2
const noZero = (arr) => arr.filter(x => x !== 0)
console.log(noZero([5, 6, 8, 9, 0, 1, 0]))

//Task - 3
const numberAndSquare = (arr) => arr.map(x => ([x, x ** 2]))
console.log(numberAndSquare([1, 2, 3]))

//Task  - 4
const containsValue = (arr, str) => arr.some(x => x === str)
console.log(containsValue(["abc", "foo", "javascript"], "foo"))

//Task - 5
const reverseSentence = (str) => {
    let revStr = str.toLowerCase().split(" ").reverse().join(" ")
    if(str.split(' ').length < 2) return "There is not enough words!"
    else return revStr[0].toUpperCase() + revStr.slice(1)
}
console.log(reverseSentence("This is a sentence"))

//5b
const reverseSentence2 = sentence => sentence.split(' ').length < 2 ? "There is not enough words!" : sentence.split(' ').reverse().join(' ').replace(/\b\w/g, c => c.toUpperCase());
console.log(reverseSentence2("This is a sentence"))

//Task - 6
const removeStringSpecialsDigits = (str) => str.split("").filter(x => x > "A" && x < "Z" || x >= "a" && x <= "z" || x == " ").join("")
console.log(removeStringSpecialsDigits("123Javascript #$%is fun"))

//Task - 7
const removeArraySpecialsDigits = (arr) => arr.join(" ").split("").filter(x => x > "A" && x < "Z" || x >= "a" && x <= "z" || x == " ").join("")
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]))

//Task - 8
const getCommons = (arr1, arr2) => {
    let newArr = []
    for (const obj of arr1) {
        if (arr2.includes(obj) && !newArr.includes(obj)) newArr.push(obj)
    }
    return newArr
} 
console.log(getCommons(  ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ))

//8b ???
const getCommons2 = (arr1, arr2) => arr1.filter(x => arr2.includes(x))
console.log(getCommons2(  ["Javascript","Python", "C#", "C#"], ["Python", "C#", "C++"] ))

//Task - 9 
const noXInVariables = (arr) => arr.join(" ").split("").filter(x => x !=="x" && x!== "X").join('').split(' ').filter(x => x.length > 0)
console.log(noXInVariables(["", 123, "ABC"]))