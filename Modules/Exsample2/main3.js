//import {add} from './math3.js'


/import { getCurrentYear, add as dateAdd } from './date3.js'

export * as MATH from './math3.js';
import * as DATE from './date3.js';
import MathClass from './math3.js';


console.log(add(1,2));
console.log(addAdd(4,5));

console.log(MATH.substract(9, 2));
console.log(DATE.getCurrentYear());

const mathObj = new MathClass(4,5);
console.log(mathObj.add());