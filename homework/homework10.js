//Task - 1
const calculateTotalPrice1 = (obj) => {
    const product = {
        apple: 2,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25,
    };
    let sum = 0;
    for (const prod in obj) {
        for (const price in product) {
            if (prod === price) sum += obj[prod] * product[price];
        }
    }
    return console.log(sum);

};
calculateTotalPrice1({ apple: 3, mango: 1 });
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 });
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 });
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 });

//Task - 2
function calculateTotalPrice2(obj) {
    const priceList = {
      Apple: 2.00,
      Orange: 3.29,
      Mango: 4.99,
      Pineapple: 5.25,
    };
  
 
    let total = 0;
    let appleCount = 0;
    let mangoCount = 0;
  
    for (const item in obj) {
      if (item in priceList) {
        const price = priceList[item];
        const quantity = obj[item];
  
        if (item === "Apple") {
      
          appleCount += quantity;
          total += price * (quantity - Math.floor(appleCount / 2));
        } else if (item === "Mango") {
   
          mangoCount += quantity;
          total += price * (mangoCount - Math.floor(mangoCount / 4));
        } else {
          total += price * quantity;
        }
      }
    }
  
    return total.toFixed(2); 
  }
  


//Task - 3
const nthWord = (str, num) =>{
let arr = str.trim().split(' ')
if (arr[num - 1] === undefined) return " "
else return arr[num - 1]
}
console.log(nthWord("", 1))

//Task - 4
const isArmstrong = (num) =>{
let str = num.toString()
let CubeNum = 0
for(const obj of str){
    
CubeNum += Math.pow(obj, str.length)

}
return CubeNum === num
}
console.log(isArmstrong(1634))

//Task - 5
const reverseNumber = (num) =>{
    let rNum = 0
 while (num !== 0) {
    rNum = rNum * 10 + num % 10
    num = Math.trunc(num / 10)
 }   
 return rNum
}
console.log(reverseNumber(371))

//Task - 6
const doubleOrTriple = (arr, bValue) => bValue === true ? arr.map(x => x * 2) : arr.map(x => x * 3)
console.log(doubleOrTriple([3, 7, 2], false)) 

//Task - 7
const splitString = (str, num) => str.length > num ? str.slice(0, num) + " " + str.slice(num) : " "
console.log(splitString("Hello", 6))


