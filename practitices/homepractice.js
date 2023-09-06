const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

// Find the most expensive product   -> MacBook Pro 16-inch
// Find the least expensive product   -> AirPods Pro
// Find the product with the biggest quantity   -> AirPods Pro
// Find the product with the smallest quantity  -> MacBook Pro 16-inch
// Find all the product names   -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]


//Task - 1 Find all the product names  
const arr = []
for (const names of appleStore){
arr.push(names.productName)
}
console.log(arr)

//Task - 2  Find the most expensive product 
let most_expensive = {
    productName: null,
    price: 0,
    quantity: 0
};
for(const product of appleStore){
    if(product.price > most_expensive.price) most_expensive = product;
}
console.log(most_expensive.productName);

//Task - 3 //Find the least expensive product
let least_expensive = {
    productName: null,
    price: Infinity,
    quantity: 0
};
for(const product of appleStore){
    if(product.price < least_expensive.price) least_expensive = product;
}
console.log(least_expensive.productName);

//Task - 4 Find the product with the biggest quantity
let biggestQuantity = {
    productName: null,
    price: 0,
    quantity: null
}
for(const product of appleStore){
    if(product.quantity > biggestQuantity.quantity) biggestQuantity = product
}
console.log(biggestQuantity.productName);

//Task - 5  Find the product with the smallest quantity

let smalestQuantity = {
    productName: null,
    price: 0,
    quantity: Infinity
}
for(const product of appleStore){
    if(product.quantity < smalestQuantity.quantity) smalestQuantity = product
}
console.log(smalestQuantity.productName);

//Task - 1
function firstPos(array){
   for (number of array){
    if (number > 0) return number
   } 
}
console.log(firstPos([-1, -2, 3, -2]));

//Task - 2
function lastNed(array){
    for (number of array.reverse()){
     if (number < 0) return number
    } 
 }
 console.log(lastNed([-1, -2, 3, -2]));

 // 2a
function lastNeg(array) {
    for(let i = array.length-1; i >= 0; i--){
        if(array[i] < 0) return array[i];
    }
}

//2b
function lastNeg(array) {
    let lastNeg = null; 
    for(const number of array){
        if(number < 0) lastNeg = number;
    }
    return lastNeg;
}

//3
function firstLongest(array){
    let element = ' ';
    for (const string of array){
        if(string.length > element.length) element = string;   
    }
    return element
}
console.log(firstLongest(["red", "blue", "yellow", "white"]));

//4
function lastShortest1(array){
    let lastShorter = ' ';
    let maxLength = Infinity
    for(const string of array){
        if (string.length < maxLength) lastShorter = string
        maxLength  = string.length
    }
    return lastShorter
} 

//4b
function lastShortest2(array){
    let lastshorter = [0];
    for (const string of array){
        if(string.length <= lastshorter.lenght) lastshorter = string 
    }
}

//5
function max(array){
    let maxNum = -Infinity
    for(number of array){
        if (number > maxNum) maxNum = number
        return maxNum
    }
}

//6
function min(array){
    let min = Infinity

    for(number of array){
        if (number < min) min = number
        return min

    }
}

//7
function commonElements(arr1, arr2){
    let array =[]
    for(number of arr2) {
        if (arr1.includes(number)) array.push(number)

    }
    return array
}
console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]))


function reverseStringWords(str){
    let strAsArr = str.trim().split(' ')
  
    for(i = 0; i < strAsArr.length; i++){

    return strAsArr
  }}
  console.log(reverseStringWords(' i like JavaScript'))

let numbers = [5]
  for (const number of numbers){
    console.log(number)
  }
  


  console.log(findClosestTo10([12, 11, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 9, 15, -20]));
console.log(findClosestTo10([6,0, -1, -2]));

function findClosestTo10(number){
    let Maxnumber = number.filter(x => x < 10).find(x => Math.max(x))
    let Minnumber = number.filter(x => x > 10).find(x => Math.min(x))
    console.log(Maxnumber, Minnumber)
    if (Math.abs(Maxnumber - 10) < (Math.abs(Minnumber - 10))) return Maxnumber
    else return Minnumber
} 
console.log(findClosestTo10([10, -13, 8, 9, 15, -20]));