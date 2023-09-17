// Keyword "this"
function printName(name){
    console.log(this)
    console.log(name);
}

printName("Ulan")

//Implicing binding
const person = {
name: "Alan",
age: 29,

}

//This keyword inside "Normal function" vs "arrow function"

