class Renderer {
  #outputStream;

  constructor(outputStream) {
    this.#outputStream = outputStream;
  }

  display(data) {
    this.#outputStream.write(data);
  }
}

module.exports = { Renderer };
