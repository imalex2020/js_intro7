//Task - 1
for (let i = 1; i <= 100; i++){
    if (i % 7 === 0) console.log(i);
}

//Task - 2
for (let i = 1; i <= 50; i++){
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

//Task - 3
for (let i = 100; i >= 50; i--){
    if (i % 5 === 0) console.log(i)
}

//Task - 4
for (let i  = 0; i <= 7; i++){
    console.log(`The square of ${i} is = ${i * i}`);
}

//Task - 5
let sum = 0
for (let i = 1; i <= 10; i++){
    sum += i; 
}
console.log(sum);

//Task - 6 
let ranNum = Math.floor(Math.random() * 10) + 1;
let fNum = 1
for (let i = 1; i <= ranNum; i++){
fNum = fNum * i

}

console.log(`${ranNum}! = ${fNum}`);

//Task - 7
let rNum = 1;
let att = 0;
while (rNum % 5 !== 0){
    rNum = Math.ceil(Math.random() * 100);
    att++;
}
console.log(`The random number is ${rNum} and it took ${att} attempt/s to generate it.`);



//Task - 8
const countries = ["Germany", "Argentina", "Ukraine", "Romania"];
console.log(countries);
console.log(countries.sort());

//Task - 9
const dogs = ["Scooby Doo", "Snoopy", "Blue", "Pluto", "Dino", "Sparky"]; 
console.log(dogs);
console.log(dogs.includes("Pluto"));

//Task - 10
const cats = ["Garfield", "Tom", "Sylvester", "Azrael"];
cats.reverse()
console.log(cats);
console.log(cats.includes("Garfield") && cats.includes("Felix"));

//Task - 11
const numbers =  [10.5, 20.75, 70, 80, 15.75];
console.log(numbers)
for (let i = 0; i <= 4; i++){
console.log(numbers[i]);
}

//Task - 12
let startBandP = 0;
let bookAndPan = 0;

const officeObjects = ["Pen", "notebook", "Book", "paper", "bag", "pencil", "Ruler"];
console.log(officeObjects)
for (name of officeObjects){
    if (name[0].toUpperCase() === "P" || name[0].toUpperCase() === "B") startBandP++
}
console.log(`Elements starting with 'B' or 'P' = ${startBandP}`);

for (name of officeObjects){
    if (name.toLowerCase().includes("book") || name.toLowerCase().includes("pen")) bookAndPan++
}
console.log(`Elements having 'book' or 'pen' = ${bookAndPan}`);

//Task - 13

const numbers1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numbers1);
let countMore10 = 0;
let countLess10 = 0;
let count10 = 0;
for (const number of numbers1){
    if (number > 10 ) countMore10++;
    if (number < 10) countLess10++;
    if (number === 10) count10++
}
console.log(`Elements that are more than 10 = ${countMore10}
Elements that are less than 10 = ${countLess10}
Elements that are 10 = ${count10}`);

//Task - 14
const First_array = [ 5, 8, 13, 1, 2 ];
const Second_array =  [ 9, 3, 67, 1, 0 ];
const Third_array = [];
for (let i = 0; i < First_array.length; i++){
    Third_array.push(Math.max(First_array[i], Second_array[i]));
}

console.log(Third_array);

//Task - 15
function firstDuplicate(array){
    let firstDuplicate1 = null;
    for (i = 0; i < array.length; i++){
        if(array.slice(i+1).includes(array[i])){
            firstDuplicate1 = array[i]
            break;
        }
    }
    if(firstDuplicate1 === null) return -1
    else return firstDuplicate1
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]))

//Task - 16

function getDuplicates(array) {
  let container = [];
  let allDuplicates = [];
  for(let obj of array){
    if(container.includes(obj) && !allDuplicates.includes(obj)) allDuplicates.push(obj)
    else container.push(obj)

  }
  return container;
}
console.log(getDuplicates([5,5,9,15,-7,-7,-7]));


//Task - 17
function reverseStringWords(str){
  let strAsArr = str.trim().split(' ')

  for(i = 0; i < strAsArr.length; i++){
    strAsArr[i] = strAsArr[i].split('').reverse().join('')
  }
  return strAsArr.join(' ');
}
console.log(reverseStringWords(' i like JavaScript'))







//Task - 18
function getEven(num1, num2){
  const evens = [];
  let first = Math.min(num1, num2);
  let second = Math.max(num1, num2)
  for (i = first; i <= second; i++){
      if (i % 2 === 0) evens.push(i)
  }
  return (evens);
} 
console.log(getEven(17, 5));

//Task - 19
function getMultipleOf5(num1, num2) {
    const MultipleOf5 = [];
    let first = Math.min(num1, num2);
    let second = Math.max(num1, num2)
    for (let i = first; i <= second; i++) {
      if (i % 5 === 0) MultipleOf5.push(i);
    }

    if (num1 < num2) return MultipleOf5
    return MultipleOf5.reverse()
   
  }
console.log(getMultipleOf5(3, 17));

//Task - 20
function fizzBuzz(num1, num2) 


