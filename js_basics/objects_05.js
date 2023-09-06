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

