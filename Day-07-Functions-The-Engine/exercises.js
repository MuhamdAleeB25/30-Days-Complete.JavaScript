// EXERCISE 1: Create a function to convert temperatures from Celsius to Fahrenheit.
// EXERCISE 2: Write an arrow function to check whether a number is 'Even' or 'Odd'.
// EXERCISE 3: Create a function to take an array and return its maximum number.

const isEven = (num) => num % 2 === 0;
console.log("Is 10 Even?", isEven(10));

const convertToFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log("25°C in Fahrenheit:", convertToFahrenheit(25));

const findMax = (arr) => Math.max(...arr);
console.log("Maximum number in [3, 7, 2, 9, 1]:", findMax([3, 7, 2, 9, 1]));