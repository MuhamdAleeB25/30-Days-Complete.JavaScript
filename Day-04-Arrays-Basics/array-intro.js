//An array is a non-primitive data type that stores multiple values.
//We can also store numbers, strings, objects, or other arrays in names.
console.log("--- Introduction to Array ---");
const CarGarage = ["Repairing Master", "Twining Boy", "Learner boy"];

//Garage members
console.log("We have Workers Like:", CarGarage);


//Accessing Elements(In JS counting starts wit 0 instead 1)
console.log("Passionate Worker:", CarGarage[0]);
console.log("Total Workers:", CarGarage.length);

//modifying  elements Values
CarGarage[2] = "Gear Changer";
console.log("Learner boy Placed with:" , CarGarage[2]);
