// Task - 1
let str1 = "5", str2 = "2";
console.log(`The sum of 5 and 2 is = ${Number(str1) + Number(str2)}
The product of 5 and 2 is = ${str1 * str2}
The division of 5 and 2 is = ${str1 / str2}
The subtraction of 5 and 2 is = ${str1 - str2}
The remainder of 5 and 2 is = ${str1 % str2}
The exponentiation of 5 and 2 is = ${str1 ** str2}`);

// Task - 2
let s1 = "200", s2 = "-50";
console.log(`The greatest value is = ${Math.max(s1, s2)}
The smallest value is = ${Math.min(s1 ,s2)}
The average is = ${(Number(s1) + Number(s2)) / 2}
The absolute difference is = ${Math.abs(s1 - s2)}`);

// Task - 3
let random1 = Math.ceil(Math.random() * 50);
let random2 = Math.ceil(Math.random() * 50);
console.log(`The absolute difference between number is = ${Math.abs(random1 - random2)}`);

// Task - 4
let n1 = Math.ceil(Math.random() * 50);
let n2 = Math.ceil(Math.random() * 50);
let n3 = Math.ceil(Math.random() * 50);
let n4 = Math.ceil(Math.random() * 50);
let n5 = Math.ceil(Math.random() * 50);
console.log(`The max value = ${Math.max(n1, n2, n3, n4, n5)}
The min value = ${Math.min(n1, n2, n3, n4, n5)}`);

//Task - 5
let ranNum1 = Math.floor(Math.random()* 51) + 50;
let ranNum2 = Math.floor(Math.random()* 51) + 50;
let ranNum3 = Math.floor(Math.random()* 51) + 50;
console.log( `The number 1 = ${ranNum1}
The number 2 = ${ranNum2}
The number 3 = ${ranNum3}
The sum of numbers is = ${ranNum1 + ranNum2 + ranNum3}`);

//Task - 6
let r1 = Math.ceil(Math.random() * 100);
let r2 = Math.ceil(Math.random() * 100);
let r3 = Math.ceil(Math.random() * 100);
console.log(r1, r2, r3);
console.log(r1 > 25 && r2 > 25 && r3 >25);

//Task - 7
let name = "David";
console.log(`The length of the name is = ${name.length}
The first character in the name is = ${name[0]}
The last character in the name is = ${name.charAt(name.length - 1)}
The first 3 characters in the name are = ${name.slice (0, 3)}
The last 3 characters in the name are = ${name.slice (2)}`);

