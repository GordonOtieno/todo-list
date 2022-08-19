/**
 * @jest-environment jsdom
 */

const { StorageMock, task } = require('./tasks.test');

const clearAll = `
        <div class="clear">
            <a class="clear-btn">Clear All</a>
        </div>
`;

describe('Todo List Operations', () => {
  document.body.insertAdjacentHTML('beforeend', clearAll);
  test('Todo list description should change from `Aakash` to `New Gordon`', () => {
    const todoContainer = document.querySelector('.todo-container');
    const taskInputValue = todoContainer.querySelector('.todo-edit');

    expect(taskInputValue.value).toMatch('Aakash');

    const newDescription = 'New Gordon';
    taskInputValue.value = newDescription;
    task.editTodo(taskInputValue.id, newDescription);

    expect(StorageMock.data[0].description).toMatch(newDescription);
    expect(taskInputValue.value).toMatch('New Gordon');
  });

  test('Todo list should be marked as completed TRUE', () => {
    const todoContainer = document.querySelector('.todo-container');
    const taskCheck = todoContainer.querySelector('.todo-check');

    expect(taskCheck.checked).toBeFalsy();

    taskCheck.checked = true;
    task.completeTodo(taskCheck.id, taskCheck.checked);

    expect(StorageMock.data[0].completed).toBeTruthy();
    expect(taskCheck.checked).toBeTruthy();
  });

  test('All marked should delete and todoContainer must be empty', () => {
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', task.clearCompletedTodos());
    clearBtn.click();
    expect(StorageMock.data.length).toBe(0);
  });
});
