import { addTwoNumbers,
        substractTwoNumbers,
        timesTwoNumbers,
        divideTwoNumbers 
 } from "../helpers/math-helpers";
 
// import { substractTwoNumbers  } from "./helpers/math-helpers";
// import { timesTwoNumbers  } from "./helpers/math-helpers";
// import { divideTwoNumbers  } from "./helpers/math-helpers";

let num1 =10;
let num2 =20; 

let total1: number = addTwoNumbers (num1, num2);
let total2: number = substractTwoNumbers (num1 ,num2);
let total3: number = timesTwoNumbers (num1, num2);
let total4: number = divideTwoNumbers (num1 ,num2);

console.log("Total:" , total1);
console.log("Total:" , total2);
console.log("Total:" , total3);
console.log("Total:" , total4);