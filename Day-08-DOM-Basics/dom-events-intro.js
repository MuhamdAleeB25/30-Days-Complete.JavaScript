// DOM Events Intro practice script
console.log('dom-events-intro.js loaded');

const btnEvents = document.getElementById("click-btn");

btnEvents.addEventListener(onclick, function (){
    alert("Button Clicked!!");
    document.body.style.backgroundColor = "LightYellow";
})