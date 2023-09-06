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
console.log(middle(" "));

//Task - 30
function longer(s1, s2) {
    if (s1.length >= s2.length) return s1
    else return s2
}
console.log(longer("Globay", "Global"));

//Task - 31
function shorter(s1, s2) {
    if (s2.length <= s1.length) return s2
    else return s1
}
console.log(shorter("Tech", "g123"));

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


function  firstLast(string){
    if (string.length > 2) return string[0] + string.slice(string.length - 1);
    else return string;
}
console.log(firstLast("1"));

function hasFive(string){
    return (string.length >= 5);
}
console.log(hasFive("appl"));

function middle(string){
if (string.length % 2 === 0) return string.slice(string.length / 2 - 1, string.length / 2 + 1);
else return string[(string.length - 1) / 2]
}
console.log(middle("Apples"));

console.log((3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false) )
console.log((!true && !false) || 5 * 2 === true * 10 )
console.log("3" * "5" >= 15 && true == 1 && "   " == false && "" === 0) 
console.log(!((5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5)))
console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1") 
console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange")) 
console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false))
console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false)) 
console.log((4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat"))
console.log((20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true)) 
console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10)) 
console.log((5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true) )
console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true))
console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0))
console.log((5 * 2 === 9 || true) && !(10 - 5 !== 5 && 10 % 3 === 1))

console.log("cat" == "dog");



  !(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1"

  let num = Math.floor(Math.random() * 10) + 1;
console.log(num ** 3);
let num1 = Math.floor(Math.random() * 10) +1;
let num2 = Math.floor(Math.random() * 10) +1;
let num3 = Math.floor(Math.random() * 10) +1;
console.log((num1 + num2 + num3) / 3);

function shorter(str1, str2){
    if (str2.length <= str1.length) return str2;
    else return str1; 
}
console.log(shorter("apple", "applr"));

function startsVowel(s1){
return (s1[0].toUpperCase() === "A" ||
s1[0].toUpperCase() === "O" ||
s1[0].toUpperCase() === "U" ||
s1[0].toUpperCase() === "I" ||
s1[0].toUpperCase() === "E")}

console.log(startsVowel("pple"));

function middle(string){
    if(string.length % 2 === 0) return string.slice(string.length / 2 - 1, string.length / 2 + 1);
    else return string[(string.length - 1) / 2];
}
console.log(middle("Appled"));