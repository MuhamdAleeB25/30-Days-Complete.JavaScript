// scope-and-hoisting.js
// Add scope and hoisting examples and practice code here.
 
console.log("-----------Scope & Hoisting--------");
let globalVar = "I am everwhere in Code";

function scopeTest(){
    let localVar = "I am in local Function";
    console.log(globalVar); // Accessing global variable inside function
    console.log(localVar); // Accessing local variable inside function
}

scopeTest();