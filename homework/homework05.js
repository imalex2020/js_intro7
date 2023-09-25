//Task - 1
function countPos(array){
return array.filter(number => number > 0).length
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));

// const countPos = (arr)  => arr.filter(num =>  num > 0).length


//Task - 2
const countA = (string) => {
  let count = 0
    string.split('').forEach((word) =>{ 
        if (word.toUpperCase().includes('A')) count++ 
    })
    return count
}
console.log(countA("QA stands for Quality Assurance"))

//Task - 2a
const countA2 = (str) => { 
  str.split('').filter(letter => letter.toLowerCase() === 'a').length
}

//Task - 3
function countVowels(string){
    return (string.split('').filter((str) => ('AEOUIaeoui'.includes(str)))).length
}
console.log(countVowels('Hello World'))

//Task - 4
function counyConsonats(string){
    return (string.split('').filter((str) => (!('AEOUIaeoui').includes(str)))).length
}
console.log(counyConsonats('JavaScript is fun'))

//Task - 5
function countWords(string){
    return (string.trim().split(' ').map((word) => word)).length;
}
console.log(countWords("Cypress is an UI automation tool.    "));

//Task - 6
function factorial(number){
let fNum = 1;
    for (let i = 1; i <= number; i++){
    fNum *= i
}
    if (fNum === 0) return 1 
    return fNum
}
console.log(factorial(3))

//Task - 6a
function factorial(number){
let arr =[]
for (let i = 1; i <= number; i++){
    arr.push(i)
} 
return arr.reduce((sum, num) => sum * num);
}  
console.log(factorial(5));
//Task - 6b
const fac = (n) => {
  if (n === 0 || n === 1) return 1
  return n * fac(n - 1);
}

console.log(fac(5))


//Task - 7
function isPalindrome(string){
   const arr = string.split('')
   if (string.length % 2 === 0) return arr.slice(0, (arr.length / 2)).toString().toLowerCase() === arr.slice((arr.length / 2), arr.length).reverse().toString().toLowerCase()
   else return arr.slice(0, (arr.length - 1) / 2).toString().toLowerCase() === arr.slice((arr.length + 1) / 2, arr.length).reverse().toString().toLowerCase()
}
console.log(isPalindrome('abba'));

//Task - 7a

function isPalindrome(string){
    return string.toLowerCase().split('').reverse().join('') === string.toLowerCase()
    
}
console.log(isPalindrome('Atta'))

//Task - 8
function countMultippleWords(array){
    let count = 0;
for (const element of array){
    let string = element.toString().trim()
if (string.includes(' ') && !(string.slice(0, string.indexOf(' ')) + string.slice(string.indexOf(' ') + 1 )).includes(' ')) count++; 
   
} if(count === 1) return 1
else return count * 2
}
console.log(countMultippleWords(["foo", "bar", "foobar", "     foobar   " ]));
//8b
const countMultipleWords = (arr) =>{
  let count = 0;
  arr.forEach(e =>{
    if(e.trim().includes(' ')) count++
  });
  return count
}
//8c
const countMultipleWords2 = (arr) =>{
return arr.reduce((count, str) =>{

}, 0)
}

//Task - 9
function count3OrLess(string){
    let w3OrLess = 0
    let arr = string.split(' ')
    for(const word of arr){
       if (word.length <= 3) w3OrLess++

    }
    return w3OrLess

}
console.log(count3OrLess("Hi John"))
// 9a
const count3OrLess = (str) =>{
  let count = 0;
  const arr = str.trim().split(' ');
  str.forEach( x =>{ 
    if(x.length > 0 && x.lenght <= 3) count++ 
    })
    return count
}

//9b
const count3OrLess = (str) =>{
  return str.trim().split(' ').filter(x => x.length > 0 && x <= 3).lenght
}

//Task - 10
function isPrime(number) {
    let count = 0
for(i = 0; i <= 10; i++){
    if((number / i).toString().includes('.')) count++
    if (count >= 9 || number === 2 || number === 3 || number === 5 || number === 7 ) return true
   
} return false  

}
console.log(isPrime(599))

//10A
const isPrime1 = (num) => {
  if(num < 2) return false;
  if(num === 2 || num === 3) return true;
  if(num % 2 === 0) false;

  let d = 5;
  while (d < num){
    if(num % d === 0) return false
    d+=2;

  }
  return true;

}
console.log(isPrime1(5))

//Task - 11
function add(arr1, arr2){
    maxArray = Math.max(arr1.length, arr2.length) 
   const AddArr = []
  
 
    for( i = 0; i < maxArray; i++ ){
      if(arr1[i] === undefined) arr1[i] = 0
      if(arr2[i] === undefined) arr2[i] = 0
       AddArr.push(arr1[i] + arr2[i])
        
}  return AddArr
}
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))
//11a
const add = (arr1, arr2) =>{
  if(arr2.length > arr1.length) [arr1 , arr2] = [arr2, arr1]
  for(let i = 0; i < arr2.length; i++){
    arr[i] += arr2[i]
  }
  return arr1
}
//11b
const add = (arr1, arr2) =>{
  if(arr2.length > arr1.length) [arr1 , arr2] = [arr2, arr1]
  return arr1.map((value, index) => value + (arr[i] || 0))
}

//Task - 12
function removeExtraSpaces(string){
return string.split(' ').filter(string => string.length >= 1).join(" ")
}
console.log(removeExtraSpaces("      Hello    World     "))

//Task - 13
function findClosestTo10(arr) {
    let closest = Infinity;
    for (let i = 0; i < arr.length; i++) {
      const diff = Math.abs(arr[i] - 10); 
      if( arr[i] === 10) continue;
      else if (diff < Math.abs(closest - 10)) { 
        closest = arr[i]; 
      }
      else if (diff === Math.abs(closest - 10) && arr[i] < closest) {
        closest = arr[i]; 
      }
    }
    return closest;
  }
  
//Task - 14
function isEmailValid(email) {
    // Split the email into parts
    const parts = email.split('@');

    if (parts.length !== 2) {
        return false;
    }
    const [firstPart, secondPart] = parts;
    if (firstPart.length < 2) {
        return false;
    }
    if (secondPart.length < 5) {
        return false;
    }
    if (firstPart.includes('@') || secondPart.includes('@')) {
        return false;
    }
    if (email.includes(' ')) {
        return false;
    }
    if (secondPart.indexOf('.') - secondPart.indexOf('@') < 3) {
        return false;
    }
    if (secondPart.length - secondPart.lastIndexOf('.') < 3) {
        return false;
    }

    return true;
}

//Task - 15
function isPasswordValid(password) {
    if (password.length < 8 || password.length > 16) {
      return false;
    }
    let hasDigit = false;
    let hasUppercase = false;
    let hasLowercase = false;
    let hasSpecialChar = false;
    
    const specialChars = "!@#$%^&*()_+{}[]:;<>,.?~\\-";
    for (let i = 0; i < password.length; i++) {
      const char = password.charAt(i);

      if (!hasDigit && char >= '0' && char <= '9') {
        hasDigit = true;
      }
  
      if (!hasUppercase && char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      }
  
      if (!hasLowercase && char >= 'a' && char <= 'z') {
        hasLowercase = true;
      }
      if (!hasSpecialChar && specialChars.includes(char)) {
        hasSpecialChar = true;
      }
  
      if (char === ' ') {
        return false;
      }
    }
  
    return hasDigit && hasUppercase && hasLowercase && hasSpecialChar; 
  }

