// function-basics.js
// Add function declaration examples and practice code here.

console.log("------------Functions Basics");
function welcomeuser (username = "Guest") {
    return `Hello ! ${username} Welcome to Function's Lecture.` ;
}

//Function Calll(Execution)
//Argument : Real data we give to function!!

const message = welcomeuser("John");
console.log(message);

//Function Calll(Execution) without argument
const message2 = welcomeuser("Ready to learn");
console.log(message2);