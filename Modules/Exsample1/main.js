//const add require('/math.js')
//console.log(add(1,2));

require(['math'], function (add) {
    console.log(add(5, 3));
});