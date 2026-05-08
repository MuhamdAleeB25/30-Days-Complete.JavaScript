// exercise.js
// JavaScript exercise file for Day 05 array methods
// EXERCISE 1: Map the array of prices [10, 20, 30] to give a 10% discount.
// EXERCISE 2: Filter out names from the array of names whose length is greater than 5.
// EXERCISE 3: Use reduce to find the maximum number in the array.


const names = ["Muhammad", "Alee", "NAS", "CodeVerse"];
const longNames = names.filter(name => name.length > 5);
console.log("Exercise - Long Names:", longNames);