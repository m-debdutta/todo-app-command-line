class TodoItem {
  #id;
  #message;
  #markedStatus;

  constructor(id, message) {
    this.#id = id;
    this.#message = message;
    this.#markedStatus = false;
  }

  get id() {
    return this.#id;
  }

  get message() {
    return this.#message;
  }

  get markedStatus() {
    return this.#markedStatus;
  }

  toggleMarkedStatus() {
    this.#markedStatus = !this.#markedStatus;
  }
}

module.exports = { TodoItem };
