const { describe, it } = require("node:test");
const assert = require("assert");
const { TodoItem } = require("../src/todo-item");

describe("TodoItem", () => {
  describe("get message", () => {
    it("should return the message stored in it", () => {
      const todoItem = new TodoItem("todo-item-1", "eat breakfast");

      assert.deepEqual(todoItem.message, "eat breakfast");
    });
  });

  describe("get id", () => {
    it("should return the id of the todoItem", () => {
      const todoItem = new TodoItem("todo-item-1", "eat breakfast");

      assert.deepEqual(todoItem.id, "todo-item-1");
    });
  });

  describe("toggleMarkedStatus", () => {
    it("should initially be false", () => {
      const todoItem = new TodoItem("todo-item-1", "eat breakfast");

      assert.strictEqual(todoItem.markedStatus, false);
    });
    it("should be true, when toggled once", () => {
      const todoItem = new TodoItem("todo-item-1", "eat breakfast");

      todoItem.toggleMarkedStatus();

      assert.strictEqual(todoItem.markedStatus, true);
    });
  });
});
