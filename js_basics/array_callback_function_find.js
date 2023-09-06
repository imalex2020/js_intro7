
//Find
const numbers = [0, 10, -4, 5, 2, -3];
 console.log(numbers.find(x => x > 0)) //10
 console.log(numbers.find(x => x < 0)) // -4
 console.log(numbers.find(x => x % 2 === 0)) // 0
 console.log(numbers.find(x => x % 2 !== 0)) // 5

 //FindIndex
 console.log(numbers.findIndex(x => x > 0)) //1
 console.log(numbers.findIndex(x => x < 0))  //2
 console.log(numbers.findIndex(x => x % 2 === 0)) //0
 console.log(numbers.findIndex(x => x % 2 !== 0))  //3
 console.log(numbers.findIndex(x => x > 100)) // -1


 const things = ['knife', 'spoon', 'fork', 'pen', 'mug']

 const result = things.map((v, i) => {
    return {
        value: v,
        index: i
    }
}).find(obj => obj.value.length === 3);

console.log(result);


//ALTERNATIVE 1
const result = {
    value: things.find(x => x.length === 3),
    index: things.findIndex(x => x.length === 3)
};

console.log(result);



// ALTERNATIVE 2
for(let i = 0; i < things.length; i++){
    if(things[i].length === 3) {
        const result = {
            value: things[i],
            index: i
        }
        console.log(result);
        break;
    }
}
