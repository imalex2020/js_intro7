//Task - 1
const toInitials = (str) => `${str[0].toUpperCase()}. ${str.slice(str.indexOf(' ') + 1, str.indexOf(' ') + 2)}. `
console.log(toInitials( "Bruce Willis"))

//Task - 2
const hasNumbers = (str) => str.split('').some(x => !isNaN(x))
console.log(hasNumbers("Hello3") )

//Task - 3
const elementLength = (arr) => arr.map(x => x.length)
console.log(elementLength( [ "Apple", "Banana", "Orange", "Pear" ] ))

//Task - 4
const isArraySumEvenOrOdd = (arr) => (arr.reduce((num, sum) => num + sum)) % 2 === 0 ? 'even' : 'odd'
console.log(isArraySumEvenOrOdd( [ 1,1,1,1,1 ] ))

//Task - 5
const reverse = (str) => str.split('').reverse().join('')
console.log(reverse('Hello World'))

//Task - 6
const reverseWords = (str) => str.split('').reverse().join('').split(' ').reverse().join(' ')
console.log(reverseWords('Hello World'))