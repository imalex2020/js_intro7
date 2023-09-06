// const sum = (a, b) => a + b;



function product1 (a, b){  //regular function
    return a * b
}

const product2 = function (a, b){ // function exspression syntax
    return a * b
}

const product3 = (a, b) => a * b; //arrow function


const fizzBuzz = (num) => {
    if (num % 5 === 0 && num % 3 === 0) console.log('FizzBuzz')
    else if (num % 5 === 0) console.log('Buzz')
    else if ( num % 3 === 0) console.log('Fizz')
    else console.log(num)

};

fizzBuzz(3)
 

const fizzBuzz1 = function(num) {
    if (num % 5 === 0 && num % 3 === 0) console.log('FizzBuzz')
    else if (num % 5 === 0) console.log('Buzz')
    else if ( num % 3 === 0) console.log('Fizz')
    else console.log(num)

};

fizzBuzz(3)

