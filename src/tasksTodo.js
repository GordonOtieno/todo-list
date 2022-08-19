import StorageMock from './__mocks__/storageMock';

export default class Tasks {
  constructor() {
    this.list = [];
  }

  addTodo(todo) {
    this.list.push(todo);
    StorageMock.data = this.list;
  }

  removeTodo(todoID) {
    this.list = this.list.filter((todo) => todo.id !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    StorageMock.data = this.list;
  }

  editTodo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  completeTodo(todoId, status) {
    const selected = this.list.findIndex((element) => element.id === todoId);
    this.list[selected].completed = status;
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  clearCompletedTodos() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('todos', JSON.stringify(this.list));
  }
}
