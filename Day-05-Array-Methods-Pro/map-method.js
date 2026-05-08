//.map() is used when we need to transform each element of an array.
// It always returns a new array.
    console.log("-----Map Array-------");
const numbers = [1, 2, 3, 4, 5];

//lets say we want to create a new array where each number is doubled. We can use the .map() method for this.

const square = numbers.map((num) => {
    return num * num;
});

console.log("Original:", numbers);
console.log("Square (Mapped):", square);

//PRO TIP:
const doubled = numbers.map(n => n*n);
console.log("Doubled:", doubled);