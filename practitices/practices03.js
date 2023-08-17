//Task - 1
function tripleWord(text1){

    return text1 + text1 + text1;
}

console.log(tripleWord("alex"));

//Task - 2
function has4(text2){
    return text2.length >=  4
}

console.log(has4("Denver"));
console.log(has4("one1"));

//Task - 3
function celciusToFahrenheit(celsius){
    return (celsius * 9) / 5 + 32
} 

console.log(celciusToFahrenheit(0));

//Task - 4
function kgToPounds(kilogram){
    return kilogram * 2.2
}

console.log(kgToPounds(20));

//Task - 5
function rectangleArea(x, y){
    return x * y
}

function rectanglePerimeter(x, y){
    return 2 * (x + y)
}
console.log(rectangleArea(5, 4))

console.log(rectanglePerimeter(5, 4))

//Task - 5
function squareArea(x){
    return x * x;
}
function squarePerimeter(x){
    return 4 * x;
}

console.log(squareArea(5));
console.log(squarePerimeter(5));

console.log(squareArea(5), squarePerimeter(5));