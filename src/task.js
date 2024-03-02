class Task {
  #id;
  #task;
  #markedStatus;

  constructor(id, task) {
    this.#id = id;
    this.#task = task;
    this.#markedStatus = false;
  }

  get id() {
    return this.#id;
  }

  get message() {
    return this.#task;
  }

  get markedStatus() {
    return this.#markedStatus;
  }

  toggleMarkedStatus() {
    this.#markedStatus = !this.#markedStatus;
  }
}

module.exports = { Task };
