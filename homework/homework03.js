//Task - 1
let num1 = Math.floor(Math.random()  * 100 + 1);
let num2 = Math.floor(Math.random()  * 100 + 1);
let num3 = Math.floor(Math.random()  * 100 + 1);
console.log(((num1 + num2 + num3) / 3) >= 50);


//Task - 2
let number1 = Math.floor(Math.random()  * 3 + 1);
let number2 = Math.floor(Math.random()  * 3 + 1);
let number3 = Math.floor(Math.random()  * 3 + 1);

if (number1 === number2 && number2 === number3 && number3 === number1) console.log("TRIPLE MATCH");
else if (number1 === number2 || number2 === number3 || number3 === number1) console.log("DOUBLE MATCH");
else console.log("NO MATCH");


//Task - 3
function hasA(string) {
    return string.toLowerCase().includes("a")
}
console.log(hasA("Apple"));

//Task - 4
function doubleOrTripleWord(string) {
    if (string.length % 2 === 0) return string + string + string
    else return string + string
}
console.log(doubleOrTripleWord("22"));

//Task - 5
function firstWord(string) {
    if (string.includes(" ")) return string.slice(0, string.search(" "));
    else return (string);
} 
console.log(firstWord("I like JavaScript"));

//Task - 6
function firstWord(string) {
    return string.slice(string.lastIndexOf(" ") + 1);
}
console.log(firstWord("I like javaScript"));

//Task - 7
function firstLastWord(string) {
    if (string.includes(" ")) return string.slice(0, string.indexOf(" ")) + string.slice(string.lastIndexOf(" ") + 1);
    else return (string + string);
}
console.log(firstLastWord("Hello"));

//Task - 8
function startVower(string) {
    if (string[0].toUpperCase() == "A") return true
    else if (string[0].toUpperCase() == "E") return true
    else if (string[0].toUpperCase() == "O") return true
    else if (string[0].toUpperCase() == "U") return true
    else if (string[0].toUpperCase() == "I") return true
    else return false
    }

console.log(startVower("orange"));


//Task - 9
function swap4(string) {
    if (string.length >= 8) return  (string.slice(string.length - 4)) + (string.slice(4, string.length - 4)) + (string.slice(0, 4)) ;
    else return ("")
}
console.log(swap4("JavaScript"));


//Task - 10
function swapFirstLastWord(string) {
if (string.includes(" ")) return (string.slice(string.lastIndexOf(" ") + 1)) + (string.slice(string.indexOf(" "), string.lastIndexOf(" ") + 1)) + (string.slice(0, string.indexOf(" ")));
else return (" ");
}
console.log(swapFirstLastWord("foo bar foo bar"));
