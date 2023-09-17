//IIFE
(function(){
    console.log("I am an IIFE")
})();

// CURRYING
//Expected result:

//HQ() => TechGlobal is at Planet Earth, United States, Illinois, Chicago

let place = 'Planet Earth';

function fullstackHQ(country){
  return middleFunction('United States');

  function middleFunction(state) {
    return innerFunction('Illinois');

    function innerFunction(state) {
      city = 'Chicago';
      return innermostFunction();

      function innermostFunction() {
        return 'Techglobal is at ' + place + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}
console.log(fullstackHQ())



incrementalChange(2); // => 2
incrementalChange(6); // => 8
incrementalChange(-1); // => 7

let counter = 0;
function incrementalChange(x){
    return counter += x
}

console.log(incrementalChange(2)); // => 2
console.log(incrementalChange(6)); // => 8
console.log(incrementalChange(-1)); // => 7

//
let sum = 0;

function sumThings(num1, num2) {
  sum = num1 + num2
  return sum;
}

console.log(sumThings(2,4)); // is it 6 ?
console.log(sumThings(4,6));   // is it 10 ?
// if not how to fix it?