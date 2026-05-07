//EXERCISE 1: Create a 'fruits' array and add 5 fruits to it.
// EXERCISE 2: Remove the first and last elements of the array and see.
// EXERCISE 3: Run a loop that prints each item in the array in uppercase.

let myTools = ["VS Code", "Git", "GitHub"];
myTools.push("Gemini AI");

console.log("Exercise Result:");
myTools.forEach(tool => console.log(tool.toUpperCase())); 
// (Sneak peek: forEach is a modern way to loop!)