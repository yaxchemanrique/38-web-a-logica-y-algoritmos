const addButton = document.querySelector('#add-button');
const todoInput = document.querySelector('#todo-input');

const todos = [];

function clickHandler(event) {
  event.preventDefault();
  const todoText = todoInput.value;
  
  if(todoText === '') {
    alert('Por favor ingresa un to-do');
    return;
  }

  console.log(todoText);
  todos.push(todoText);
  console.log(todos);
}

addButton.addEventListener('click', clickHandler);
