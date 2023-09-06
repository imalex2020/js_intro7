//Task - 1
function firstPos(array) {
    for (const number of array){
    if (number > 0) return number;
    }
    
}
console.log(firstPos([1, 2 , 3, -2]));

//Task - 2
function lastNeg(array){
    for (const number of array.reverse()){
        if(number < 0) return number;
    }
}
console.log(lastNeg([-2, 0, -7, 10, -5]));

//Task - 2 
function lastNeg(arr){
    let newN = null;
    for (const x of arr){
        if (x < 0 ) newN = x
    }
    return newN
}
console.log(lastNeg([-2, 0, -7, 10, -5]))

//Task - 3
function firstLonger(array){
    let longest = " ";
    for(const string of array){
        if (string.length > longest.length) longest = string;
    }
    return longest;
}
console.log(firstLonger(["red", "blue", "yellowkkk", "white"]));


function lastShortest(array){
    let shorter = array[0];
    for(const string of array){
        if (string.length <= shorter.length) shorter = string;
    }
    return shorter;
}
console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));




//Task - 4
function max(array){
    let MaxNum =  -Infinity
    for (const number of array){
        if (number > MaxNum) MaxNum = number
    }
    return MaxNum
}
console.log(max([-2, 0, -7, 10, -5]));
console.log(max([]));

//Task - 5

function min(array){
    if (array.length === 0) return array
    let MinNum = Infinity
    for (const number of array){
        if (number < MinNum) MinNum = number
    }
    return MinNum
}
console.log(min([-2, 0, -7, 10, -5]));
console.log(min([]));
 
//Task - 6
function commonElements(arr1, arr2){
    const arr3 = [];
    for (let i = 0; i < arr2.length; i++){
        if (arr1.includes(arr2[i])) arr3.push(arr2[i])
    }
    return arr3
}

console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));

