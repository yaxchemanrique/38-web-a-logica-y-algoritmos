const addButton = document.querySelector('#add-button');
const todoInput = document.querySelector('#todo-input');
const todosContainer = document.querySelector('#todos-container');

const todos = ['sacar al perro', 'hacer el super'];

function clickHandler(event) {
  event.preventDefault();
  const todoText = todoInput.value;
  
  if(todoText === '') {
    alert('Por favor ingresa un to-do');
    return;
  }

  todos.push(todoText);
  console.log(todos);

  renderTodos();
}

function renderTodos() {
  todosContainer.innerHTML = '';
  
  for( let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement('div');
    todoItem.textContent = todos[i];
    todosContainer.appendChild(todoItem);
  }
}

addButton.addEventListener('click', clickHandler);

renderTodos();