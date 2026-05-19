// PROBLEM: If there are 1000 items in the list, setting a separate listener for each item will degrade performance.
// SOLUTION: Event Delegation — Set a single listener to the parent element (`ul`).



const todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function(event){
 if(event.target.classlist.conatins('delete-btn')){
    const listItem = event.target.parentElemnt;
    console.log(`Deleting : ${listItem.firstChild.textContent}`);
 }
});