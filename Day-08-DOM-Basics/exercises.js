// DOM Exercises script
console.log('exercises.js loaded');
// EXERCISE 1: Create a new <p> element and append it to the container div.
// EXERCISE 2: On button click, change the heading text to "Mission Accomplished".
// EXERCISE 3: Create an input field. Whatever is written in it will be displayed in a div below.

const container = document.querySelector('#container');
const newPara = document.createElement('p');
newPara.innerText = "Generated with Main JS!";
container.appendChild(newPara);