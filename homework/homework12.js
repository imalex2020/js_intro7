//Task - 1
const makeNegative = (num) => num <= 0 ? num : num * (-1)
console.log(makeNegative(1))

//Task - 2
const isSumEvenOrOdd = (num1, num2, num3) => (num1 + num2 + num3) % 2 === 0 ? 'even': 'odd'
console.log(isSumEvenOrOdd(0,-1,-5))

//Task - 3
const decimal2 = (arr) => arr.map(x => x.toFixed(2))
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] ))

//Task - 4
const myPow = (x, n) => x**n
console.log(myPow(1, 1))

//Task - 5
const findLongestWord = (str) =>{
    let arr = str.trim().split(' ')
    let longest = arr[0]
    for(const word of arr ){
       if (word.length > longest.length) longest = word
    }
    return longest
}
console.log(findLongestWord("This is a sample string for testing"))
