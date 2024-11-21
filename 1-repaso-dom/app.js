const addButton = document.querySelector('#add-button');
const todoInput = document.querySelector('#todo-input');
const todosContainer = document.querySelector('#todos-container');
const form = document.querySelector('#create-todo-form');

let todos = [
  {id: 1732158284586, label: "sacar al perro"}, 
  {id: 1732158258137, label: "hacer el super"},
];

/*
todo = {
  label: 'sacar al perro',
  id: Date.now()
  // Math.random()
  // crypto.randomUUID()
  // label + Math.random() + Date.now()
}
*/

// function clickHandler(event) {
function submitHandler(event) {
  event.preventDefault();
  const todoText = todoInput.value;
  
  if(todoText === '') {
    alert('Por favor ingresa un to-do');
    return;
  }
  
  const id = Date.now();

  const newTodo = {
    label: todoText,
    id: id,
  }

  todos.push(newTodo);
  console.log(todos);

  renderTodos();
  todoInput.value = '';
}

function deleteHandler(event) {
  const idToDelete = event.target.parentNode.getAttribute('data-id');
  console.log(idToDelete);

  const newTodos = [];
  // debugger

  for(let i = 0; i < todos.length; i++) {

    if(idToDelete != todos[i].id) {
      newTodos.push(todos[i]);
    }
  }

  todos = newTodos;
  // console.log(newTodos)
  renderTodos();
}

function renderTodos() {
  todosContainer.innerHTML = '';
  
  for( let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement('div');
    todoItem.setAttribute('data-id', todos[i].id);

    const todoContent = document.createElement('span');
    todoContent.textContent = todos[i].label;

    const button = document.createElement('button');
    button.textContent = 'delete';

    button.addEventListener('click', deleteHandler)

    todoItem.appendChild(todoContent);
    todoItem.appendChild(button);

    todosContainer.appendChild(todoItem);
  }
}

// addButton.addEventListener('click', clickHandler);
form.addEventListener('submit', submitHandler);

renderTodos();