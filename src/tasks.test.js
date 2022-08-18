import StorageMock from './__mocks__/storageMock';

import Tasks from './tasksTodo';

const task = new Tasks();

test('Add todo Item', () => {
  let newObj = {
    id: 1,
    description: 'Gordon with Aakash',
    completed: false,
    index: 1,
  };
  task.addTodo(newObj);
  expect(StorageMock.data[0]).toEqual(newObj);

  newObj = {
    id: 2,
    description: 'Gordon',
    completed: true,
    index: 2,
  };
  task.addTodo(newObj);
  expect(StorageMock.data[1]).toEqual(newObj);
});

test('Delete todo Item', () => {
  task.removeTodo(2);
  expect(StorageMock.data.length).toBe(1);
  task.removeTodo(1);
  expect(StorageMock.data.length).toBe(0);
});