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
    const temp = this.list.filter((todo) => todo.id !== todoID);
    temp.forEach((todo, index) => {
      todo.index = index + 1;
    });
    this.list = temp;
    StorageMock.data = this.list;
  }

  editTodo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === Number(todoId)) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    StorageMock.data = this.list;
  }

  completeTodo(todoId, status) {
    const selected = this.list.findIndex((element) => element.id === Number(todoId));
    this.list[selected].completed = status;
    StorageMock.data = this.list;
  }

  clearCompletedTodos() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    StorageMock.data = this.list;
  }
}
