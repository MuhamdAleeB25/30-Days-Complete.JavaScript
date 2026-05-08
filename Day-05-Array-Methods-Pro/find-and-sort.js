// find-and-sort.js
// JavaScript examples for Array.prototype.find() and Array.prototype.sort()

console.log("-----------Find & Sort Array Methods----------");
const users = ["Alice", "Bob", "Charlie", "David", "Eve", "Chopan", "Chaman"];

const findser = users.find(user => user.startsWith("C"));
console.log("User Found:", findser);// Find is for single MATCHING WORD.   

const filteredUsers = users.filter(user => user.startsWith("C"));
console.log("All Users Starting with C:", filteredUsers); // Filter method use for listing all matching alphabets...

const sortedUsers = [...users].sort();  // [...] is spread operator it keeps the original format safe.
console.log("Users Sorted:", sortedUsers);