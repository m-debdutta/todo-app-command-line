const { TodoItem } = require("./task");

class Controller {
  #todo;
  #uniqueNumber;
  #renderer;

  constructor(todo, renderer) {
    this.#todo = todo;
    this.#uniqueNumber = 0;
    this.#renderer = renderer;
  }

  #generateUniqueTaskId() {
    this.#uniqueNumber += 1;
    return `task-${this.#uniqueNumber}`;
  }

  createTodoItem(task) {
    const taskId = this.#generateUniqueTaskId();
    const todoItem = new TodoItem(taskId, task);
    this.#todo.add(todoItem);
  }

  displayTodo() {
    this.#renderer.display(this.#todo.getTasks());
  }
}

module.exports = { Controller };
