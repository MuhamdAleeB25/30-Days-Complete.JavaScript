// filter-method.js
// JavaScript examples for Array.prototype.filter()

//// .filter() is used when we need to "filter" some items out of an array.

// If the condition is true, the item will be moved to a new array.

console.log("-------Filtering Array Method----------");

const ages = [12, 17, 28 , 40, 16, 82, 15];

const adults = ages.filter(age =>{
return age >=18;
});

console.log("Interested Peoples:", ages);

console.log("Adults:", adults);

