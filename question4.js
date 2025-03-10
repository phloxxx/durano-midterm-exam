// array for storing the todos
let todos = [];

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// function to render todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// function to add a new todo
function addTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
}

// function to edit a todo
function editTodo(index) {
    const updatedTodo = prompt('Edit todo:', todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

// function to delete a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

// initial renders
todoForm.addEventListener('submit', addTodo);

// intial render
renderTodos();