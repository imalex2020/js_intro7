let fname = "Alex"; // string
let age = 25; // number - integer
let address = "Chicago"; //string

console.log(fname);// Alex
console.log("My name is " + fname); // My name is Alex
console.log("My age is "+age); //25
console.log("My address is " + address); //Chicago

//console.log(city); //Error

var lname; //declaration
console.log(lname); // undefined

lname = "Doe"; //assignment
console.log(lname); //Doe

lname = "Morgan"; //re-assinment
console.log(lname); //Morgan

//differences between let and const

const street = "S river";
console.log(street); // S river

street = "N River"; //can't re-assinment
console.log(street); //Error