// --- REAL-WORLD EXERCISES ---
// 1. Create a password input field and check it is at least 8 chars long.
// 2. Create a dynamic "Add Task" button that adds new items to the Todo list above (event delegation will handle deletions automatically).

// Exercise 2 Solution Hint:
const addNewTask = (text) => {
    const li = document.createElement('li');
    li.innerHTML = `${text} <button class="delete-btn">X</button>`;
    document.querySelector('#todo-list').appendChild(li);
};
// Try invoking addNewTask("Learn React") in console!