//Task - 1
const findMedian = (arr1, arr2) => {
    let arr = arr1.concat(arr2).sort((a, b) => a - b)
    if (arr.length % 2 === 0) return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2
    else return arr[(arr.length - 1) / 2]
}

console.log(findMedian([1], [3, 2]))



//Task - 2
calculateFactorial = (num) => num < 1 ? 1 : num * calculateFactorial(num - 1)
console.log(calculateFactorial(6))


//Task - 3
function calculateGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(calculateGCD(17, 5))

//Task - 4
const calculateLCM = (num1, num2) => (num1 * num2) / calculateGCD(num1, num2)
console.log(calculateLCM(60, 48))
