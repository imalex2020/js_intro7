//Task - 1 
const toCamelCase = (str) => {
    let arr = str.trim().split(/\s+/).map((x, index) => index === 0 ? x.toLowerCase() : x[0].toUpperCase() + x.slice(1).toLowerCase())
    return arr.join('')
}
console.log(toCamelCase("I Learn Java Script"))
console.log(toCamelCase("last     name"))
console.log(toCamelCase("   ZIP CODE"))
console.log(toCamelCase("helloWorld"))


//Task - 2
const toSnakeCase = (str) => str.trim().split(" ").map(x => x.toLowerCase()).join(" ").replaceAll(" ", "_")
console.log(toSnakeCase("hello"))

//Task - 3

const alternatingCases = (str) => {
    let newArr = [];
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i].toUpperCase());
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join("");
};
console.log(alternatingCases("basketball"))

//Task - 3 (b)
const alternatingCases2 = str => str.split("").map((x, index) => index % 2 === 0 ? x.toUpperCase() : x).join('')
console.log(alternatingCases2("basketball"))

//Task - 4
const isNeutral = (str1, str2) => {
    if (str1 === str2) return str1
    let arr = []
    for (i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) arr.push(str1[i])
        else arr.push('0')
    }
    return arr.join('')
}
console.log(isNeutral("-++-", "-+-+"))

//Task - 5
const isTrueOrFalse = (str) => {
    let pos = 0
    let neg = 0
    str.toLowerCase().split(" ").forEach(x => {
        if(x[0] >= "a" && x[0] <= "m") pos++
        else neg++
    })

    return `positive:${pos} and negative:${neg} result ${pos >= neg} `
} 

console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"))