// Task - 1
let t1 = "I like apples and oranges" //"APPLE"
let t2 = "Java is not a scripting programming language"   //"JavaScript”
let t3 = "I don't like books"  //"I like books

console.log(t1.toLocaleUpperCase().slice(7, 12));
console.log(t2.slice (0, 4) + t2[14].toUpperCase() + t2.slice(15, 20));
console.log(`${t3[0]} ${t3.slice(8, 18)}`);
console.log(t3.replace ("I don't like", "I like"));
console.log(t3[0] + t3.slice(7)); // "I like books"

//Task - 2

let s1 = "JavaScript";
console.log(`The length of the String = ${s1.length}
-First char in the String = ${s1[0]}
-Last char in the String = ${s1[s1.length - 1]}`);
console.log(s1.includes("a"));
console.log(
    s1.includes("a") || //VIDEO
    s1.includes("e") || 
    s1.includes("o") || 
    s1.includes("u") || 
    s1.includes("i") ||
    s1.includes("A") ||
    s1.includes("E") ||
    s1.includes("O") ||
    s1.includes("U") ||
    s1.includes("I"));
    
    console.log(
    s1.toLowerCase().includes("a") || 
    s1.toLowerCase().includes("e") || 
    s1.toLowerCase().includes("o") || 
    s1.toLowerCase().includes("u") || 
    s1.toLowerCase().includes("i"));
    
    console.log(
    s1.toUpperCase().includes("A") || 
    s1.toUpperCase().includes("E") || 
    s1.toUpperCase().includes("O") || 
    s1.toUpperCase().includes("U") || 
    s1.toUpperCase().includes("I") );

    //Task - 3
    let word = "civic"; //VIDEO
    console.log((word[(word.length-1) / 2]));

    //Task - 4
    let s3 = "JacaScript"; //bc
    console.log(s3.slice(s3.length/2 - 1, s3.length/2 + 1));

    //Task - 5
    let s4 = "JavaScript";
    console.log(`The first 2 characters are = ${s4.slice(0, 2)};
The last 2 characters are = ${s4.slice(s4.length - 2)}`);
   console.log(`The other characters are = ${s4.slice(2, s4.length-2)}`);

   //Task - 6
   let s5 = "13ddfdfd13"
   console.log(s5.slice(0, 2) === s5.slice(s5.length - 2));

   //Task - 7
   let s61 = "yellow";
   let s62 = "red";
   console.log(s61.slice(1, s61.length - 1) + s62.slice(1, s62.length - 1));

   //Task - 8
   let s7 = "xxbluexx"
   console.log(s7.startsWith ("xx") && s7.endsWith ("xx"));

   //Task - 9
   let s8 = "antony like Apple"
let firstW = s8.slice(0, s8.indexOf(" "));
let lastW = s8.slice(s8.lastIndexOf(" ") + 1);
let middle = s8.slice(s8.indexOf(" "), s8.lastIndexOf(" ") + 1);
console.log(lastW + middle + firstW);














