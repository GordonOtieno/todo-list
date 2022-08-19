/**
 * @jest-environment jsdom
 */

import StorageMock from './__mocks__/storageMock';

import Tasks from './tasksTodo';

const task = new Tasks();

function liHtml(obj) {
  const html = `<div class="todo-item">
          <div>
          <input id="${obj.id}" class="todo-check" type="checkbox" ${obj.completed} />
          <input id="${obj.id}" class="todo-edit" type="text" value="${obj.description}" />
          </div>
          <button id="${obj.id}" class="remove-btn"> <i class="fas fa-trash"></i></button>
          </div>
      `;
  return html;
}

test('Add todo Item', () => {
  const bodyDummy = `
    <ul class="todo-container">
    </ul>
  `;
  document.body.insertAdjacentHTML('afterbegin', bodyDummy);
  const todoContainer = document.querySelector('.todo-container');
  let newObj = {
    id: 1,
    description: 'Gordon with Aakash',
    completed: false,
    index: 1,
  };
  task.addTodo(newObj);
  todoContainer.insertAdjacentHTML('afterbegin', liHtml(newObj));
  let countTodo = todoContainer.children.length;
  expect(StorageMock.data[0]).toEqual(newObj);
  expect(countTodo).toBe(1);

  newObj = {
    id: 2,
    description: 'Gordon',
    completed: true,
    index: 2,
  };
  task.addTodo(newObj);
  todoContainer.insertAdjacentHTML('afterbegin', liHtml(newObj));
  countTodo = todoContainer.children.length;
  expect(StorageMock.data[1]).toEqual(newObj);
  expect(countTodo).toBe(2);

  newObj = {
    id: 3,
    description: 'Aakash',
    completed: false,
    index: 3,
  };
  task.addTodo(newObj);
  todoContainer.insertAdjacentHTML('afterbegin', liHtml(newObj));
  countTodo = todoContainer.children.length;
  expect(StorageMock.data[2]).toEqual(newObj);
  expect(countTodo).toBe(3);
});



test('Delete todo Item', () => {
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      task.removeTodo(e.target.parentNode.id);
    });
  });

  document.querySelector('button[id="2"]').click();
});

test('The number of container children should be 1', () => {
  const todoContainer = document.querySelector('.todo-container');
  let countTodo = todoContainer.children.length;
  expect(countTodo).toBe(2);

  document.querySelector('button[id="1"]').click();
  countTodo = todoContainer.children.length;
  expect(countTodo).toBe(1);
});