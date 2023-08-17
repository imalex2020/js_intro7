let text = "Chicago is my Favorite city and I love Chicago so much"

console.log(text.length); // Length
console.log(text.toUpperCase()); //toUpperCase / toLowerCase

console.log(text[5]); //g   (undefined)
console.log(text.charAt(5)); //g (    )
console.log(text.charCodeAt(5)); //103

console.log(text.search("city")); // 23
console.log(text.includes("city")); // true

console.log(text.indexOf("Chi")); //0
console.log(text.lastIndexOf("Chi")); //39

console.log(text.startsWith("Chi")); //true
console.log(text.endsWith("ch"));

console.log(text.trim());
console.log(text.trimEnd());
console.log(text.trimStart());

console.log(text.padStart(57, "-").padEnd(60, "-"));

console.log(text.slice(17, 31));
console.log(text.substring(17, 31));

console.log(text.split("is"));

console.log(text.replace("is my", "is our"));
console.log(text.replaceAll("Chicago", "New York"));

let rn1 = Math.floor(Math.random() * 10);
let rn2 = Math.floor(Math.random() * 10);
let rn3 = Math.floor(Math.random() * 10)
console.log(rn1, rn2, rn3);

console.log(Math.abs(Math.max(rn1, rn2, rn3) - Math.min(rn1, rn2, rn3)));

//Task - 1
let num1 = 76
if(num1 <= 25) {
    console.log(`is in the 1st quater is in the first half`)
}
else if(num1 >=26 && num1 <= 50){
    console.log('is in the 2nd quater is in the first half')
}
else if(num1 >= 51 && num1 <= 75){
    console.log(`is in the 3th quater is in the second half`)
}
else {
    console.log(`is in the 4th quater is in the second half`)
}

let num1 = 34
if(num1 <= 50) {
    console.log("1st half")
    if(num1 <= 25) {
        console.log("1st quarter");
    }
    else{
        console.log("2nd quater");
    }
}
else{
    console.log("2nd half");
    if (num1 <= 75){
        console.log("3rd quarter");
    }
    else{
        console.log("4th quater");
    }
}
//Task - 3
let num1 = 2;
let num2 = 4;
let num3 = 2;
console.log(num1 === !num2);

//Task - 3
console.log(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0);

//Task - 4
let l1 = "v";
if(l1.charCodeAt(0) >= 48 && l1.charCodeAt(0) <= 57) console.log(` ${"l1"} is a digit`); //digit
else console.log(`${"l1"} is a letter`);

if("012345678910".includes(l1)) console.log (` ${"l1"} is a digit`)
else console.log(`${"l1"} is a letter`);

//Task - 5
let l2 = "5"
if (l2.charCodeAt(0) >= 65 && l2.charCodeAt(0) <=90) {
    console.log("UpperCase");
}
else if (l2.charCodeAt(0) >= 97 && l2.charCodeAt(0) <=122) {
    console.log("LowerCase"); 
    }
    else {
        console.log("INVALID INPUT")
    }

//Task - 6




