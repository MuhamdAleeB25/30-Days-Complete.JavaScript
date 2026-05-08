// reduce-method.js
// JavaScript examples for Array.prototype.reduce()

console.log("-------Added Reduce method--------");
const cartprices = [150, 250, 400, 1200];


// accumulator (acc): That is saving
// currentValue (curr): which is taken by error
const totalBill = cartprices.reduce((acc , curr) => {
 return  acc + curr 
} , 0);

console.log("Total Checkout Amount:", totalBill);