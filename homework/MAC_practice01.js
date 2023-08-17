function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
} 
//Task - 1
let number = Math.floor(Math.random() * 10 + 1 ;
console.log(number);
console.log (number % 2 === 0);

//Task - 2
let number = Math.floor(Math.random() * 10 + 1);
console.log(number);
console.log (number % 2 !== 0);

//Task - 3
let number = Math.floor(Math.random() * 11) - 5;
console.log(number);
console.log(number > 0);

//Task - 3
let number = Math.floor(Math.random() * 11) - 5;
console.log(number < 0);

//Task - 4
let number = Math.floor(Math.random() * 51);
console.log(number);
console.log(number % 5 === 0);

//Task - 5
let number = Math.floor(Math.random() * 51);
console.log( number % 7 === 0);

//Task - 6
let number1 = Math.floor(Math.random() * 11); // 1 -10
let number2 = Math.floor(Math.random() * 11); // 1 -10
console.log(number1, number2);
console.log(number1 + number2);

//Task - 7
let number1 = Math.floor(Math.random() * 10) + 1; // 1 -10
let number2 = Math.floor(Math.random() * 11); // 1 -10
console.log(number1, number2);
console.log(Math.abs(number1 - number2));

//Task - 8
let number1 = Math.floor(Math.random() * 11); // 1 -10
let number2 = Math.floor(Math.random() * 11); // 1 -10
console.log(number1 * number2);

//Task - 9
let number1 = Math.floor(Math.random() * 11); // 1 -10 // Square
console.log( number1 ** 2);

//Task - 10
let number1 = Math.floor(Math.random() * 11); // 1 -10 //Cube
console.log( 2 ** 3);

//Task - 11
let miles = Math.floor(Math.random() * 11);
console.log(5 * 1.6);

//Task - 12
let kilograms = Math.floor(Math.random() * 100) + 1;
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.round(kilograms * 2.2));

//Task - 13
let number1 = 3
let number2 = 3
console.log(number1, number2);

if(number1 === number2) console.log("True");
else if(3 === 3) console.log("False");
else console.log("False");

//Task - 14
let age = Math.floor(Math.random() * 100) + 1;
console.log(age >= 16);

//Task - 15
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
console.log(num1, num2);
console.log(Math.max(num1, num2));

//Task - 16
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
console.log(num1, num2);
console.log(Math.min(num1, num2));

//Task - 17
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let num3 = Math.floor(Math.random() * 10) + 1;
console.log(num1, num2, num3);
console.log((num1 + num2 + num3) / 3);

//Task - 17
let number = Math.floor(Math.random() * 100 + 1);
console.log(number);
if(number <= 25) console.log("1st quater");
else if (number <= 50) console.log("2nd quater");
else if (number <= 75) console.log ("3th quater");
else console.log ("4th quater");

//Task - 18
let number = Math.floor(Math.random() * 100 + 1);
console.log(number);
number <= 50 ? console.log("1st quater") : console.log("2nd quater");

//Task - 19
let number1 = Math.floor(Math.random() * 10 + 1);
let number2 = Math.floor(Math.random() * 10 + 1);
console.log(number1, number2);
console.log ((number1 + number2) % 2 === 0);

let number1 = Math.floor(Math.random() * 10 + 1);
let number2 = Math.floor(Math.random() * 10 + 1);
console.log(number1, number2);
console.log((number1 + number2) % 2 !== 0);

//Task - 20
function rectangleArea(x, y){
    return x * y
}
console.log(rectangleArea(3, 7));

//Task - 21
function rectanglePerimeter(x, y){
    return 2 * (x + y);
}
console.log(rectanglePerimeter(6, 10));

//Task - 22
function squarePerimeter(x){
    return 4 * x;
}
console.log(squarePerimeter(6));

//Task - 23
function doubleWord(t1){
return t1 + t1;
}
console.log(doubleWord("Tech"));

//Task - 24
function firstCharacter(t2){
    return t2[0];
}
console.log(firstCharacter("Tech"));
//Task - 25
function firstTwoCharacters(t3){
    return t3.slice(0, 2);
}
console.log(firstTwoCharacters("Tech"));

//Task - 26
function lastTwoCharacters(t4){
    return t4.slice(t4.length - 2);
}
console.log(lastTwoCharacters("Global"));

//Task - 27
function firstLast(t5) {
    return t5[0] + t5[t5.length - 1];
}
console.log(firstLast("fgfdgd"));

//Task - 28
function hasFive(t5){
    return t5.length >= 5
}
console.log(hasFive("Tech"));

//Task - 29
function middle(t6){
    if (t6.length % 2 === 0) return (t6.slice(((t6.length / 2) - 1), (t6.length / 2) + 1))
    else return (t6[(t6.length - 1) / 2]);
}
console.log(middle("cavas"));

//Task - 30
function longer(s1, s2) {
    if (s1.length > s2.length) return s1
    else return s2
}
console.log(longer("Techiii", "Global"));

//Task - 31
function longer(s1, s2) {
    if (s1.length < s2.length) return s1
    else return s2
}
console.log(longer("Tech", "Global"));

//Task - 32
function concat(s1, s2){
    return s1 + s2;
}
console.log(concat("Hello", "World"));

//Task - 33
function startsVowel(s1){
if(s1[0].toUpperCase() === "A" ||
s1[0].toUpperCase() === "E" ||
s1[0].toUpperCase() === "O" ||
s1[0].toUpperCase() === "U" ||
s1[0].toUpperCase() === "I") 
return true
else return false
}
console.log(startsVowel("apple"));