// Exercises

//EXERCISE 1: Create a 'car' object (model, brand, year) and a method 'start' that console.logs "Engine Started".
// EXERCISE 2: Extract properties into variables using object destructuring.
// EXERCISE 3: Create an object and try 'Object.seal()' on it (find the difference between Freeze and Seal).

const car = {
brand: "Tesla",
start: function() {
console.log(`${this.brand}'s engine started!`);
}
};
car.start();