//Task - 1
const FizzBuzz1 = (num) => {
    if (num % 15 === 0) return "FizzBuzz"
    else if (num % 5 === 0) return "Buzz"
    else if (num % 3 === 0) return "Fizz"
    return num
} 
console.log(FizzBuzz1(10))

//Task - 2
const FizzBuzz2 = (num) => {
    const arr = [];
    for (i = 1; i <= num; i++ ){
        if ( i % 15 === 0) arr.push("FizzBuzz")
        else if (i % 5 === 0) arr.push("Buzz")
        else if (i % 3 === 0) arr.push("Fizz")
    else arr.push(i)
    }
    return arr
}
console.log(FizzBuzz2(5))

//Task - 3
const findSumNumbers = (str) => str.split("").map(x => isNaN(x) ? x = "#" : x).join("").split("#").reduce((x, y) => Number(x) + Number(y))
console.log(findSumNumbers("3for10"))

//Task - 4
const findBiggestNumber = (str) => str.split("").map(x => isNaN(x) ? x = "#" : x).join("").split("#").reduce((x, y) => Math.max(x, y))
console.log(findBiggestNumber("ab110c045d"))

//Task - 5 
const countOccurrencesOfCharacters = (str) => {
    let count = 0
    for(i = 0; i <= str.length; i++){
        if( i === i + 1) count++
    } return  count
}

console.log(countOccurrencesOfCharacters("aabbc"))

//Task - 6
const fibonacciSeries1 = num => {
    let fNum = [0, 1]
    if (num <= 1) return [0];
    for (let i = 0; i < num - 2; i++){
    fNum.push(fNum[i] + fNum[i + 1])
}
return fNum
}
console.log(fibonacciSeries1(3));

//Task - 7
const fibonacciSeries2 = string => {
    let fNum = [0, 1];
    for (let i = 0; i < string -2; i++){
        fNum.push(fNum[i] + fNum[i + 1])
    
        
    }
    return fNum[string -1]
}

console.log(fibonacciSeries2(4));

//Task - 8
const findUniques = (arr1, arr2) => {
    const a = arr1.filter((v, i) => arr1.indexOf(v) === i)
    const b = arr2.filter((V, i) => arr2.indexOf(V) === i)
    const un = a.concat(b);
    const newArr = []
    console.log(un)
    for(const element of un){
        if(!a.includes(element) || !b.includes(element)) newArr.push(element)
    }
    return console.log(newArr)

}

findUniques([], [1, 2, 3, 2]);

//Task - 9
const isPowerOf3 = (num) => {
    if(num === 3 || num === 1) return true
    for(let i = 0; i <= num; i++){
        num = num / 3;
        if(num === 3) return true
        else if(num < 3) return false;
    }
    return false
}
console.log(isPowerOf3(1));
