class Todo {
  #tasks;

  constructor() {
    this.#tasks = new Map();
  }

  add(task) {
    this.#tasks.set(task.id, task);
  }

  #isMarked(taskId) {
    return this.#tasks.get(taskId).markedStatus;
  }

  #getDetails(task) {
    return {
      message: task.message,
      id: task.id,
      markedStatus: task.markedStatus,
    };
  }

  getTasks() {
    const todo = {};
    this.#tasks.forEach((task, taskId) => {
      todo[taskId] = this.#getDetails(task);
    });
    return todo;
  }

  toggleMarkedStatus(taskId) {
    this.#tasks.get(taskId).toggleMarkedStatus();
  }

  removeTask(taskId) {
    this.#tasks.delete(taskId);
  }
}

module.exports = { Todo };
