import './style.css';
import showTodo from './showTodos';
import Tasks from './tasks';

const todosList = new Tasks();
showTodo(todosList);

const refresBtn = document.querySelector('.fa-refresh');
refresBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.querySelector('.input-text').value.trim();
  const completed = false;
  const index = todosList.list.length + 1;

  const newTodo = {
    id,
    description,
    completed,
    index,
  };
  if (description) {
    todosList.addTodo(newTodo);
    showTodo(todosList);
  }
});

const clearCompleted = document.querySelector('.clear-btn');
clearCompleted.addEventListener('click', () => {
  todosList.clearCompletedTodos();
  showTodo(todosList);
});
