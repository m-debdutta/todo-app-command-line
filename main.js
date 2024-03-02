const { Controller } = require("./src/controller");
const { Renderer } = require("./src/renderer");
const { Todo } = require("./src/todo");

const main = () => {
  const todo = new Todo();
  const renderer = new Renderer(process.stdout);
  const controller = new Controller(todo, renderer);
};

main();
