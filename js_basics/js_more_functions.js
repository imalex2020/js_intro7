//reverse()
const arr1 = [2, 3, 5];
const arr2 = arr1.reverse();
console.log( arr1, arr2);

//slice()
// slice is use to get sub-array from an array
// splice() is used to add or remove elements from array

const arr = ['grapes', 'kiwi', 'apple', 'orange'];
const sub_array1 = arr.slice();
const sub_array2 = arr.slice(0);
const sub_array3 = arr.slice(1);
console.log(sub_array1, sub_array2, sub_array3);

const sub_array4 = arr.slice(0, 1); //grapes
const sub_array5 = arr.slice(1, 3); //'kiwi', 'apple'
const sub_array6 = arr.slice(2, 8); //'apple', 'orange
console.log(sub_array4, sub_array5, sub_array6);

//splice()
//const arr = ['grapes', 'kiwi', 'apple', 'orange'];
arr.splice(1, 0, "pineapple");
console.log(arr);

//[ 'grapes', 'pineapple', 'kiwi', 'apple', 'orange' ]
arr.splice(1, 3); //removed 'pineapple', 'kiwi', 'apple',
console.log(arr);



const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log()





