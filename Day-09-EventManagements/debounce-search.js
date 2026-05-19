// PROBLEM: If an API call is made for every character typed on Flipkart/Amazon, the server will crash.
// SOLUTION: Debouncing — Pause the action until the user pauses typing.


const SearchBar = document.querySelector('#search-bar');
const searchStatus = document.querySelector('#search-status');
let debouncetimer;
let apiCallCount = 0;

SearchBar.addEventListener('input', function(event){
     clearTimeout(debouncetimer);

     debouncetimer = setTimeout(() =>{
       apiCallCount++;
       searchStatus.textContent = `API calls sent: ${apiCallCount} for keyword ${event.target.value}`;
       console.log("fetching search result from backend");
     }, 200);
});