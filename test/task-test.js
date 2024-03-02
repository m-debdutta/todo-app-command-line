const { describe, it } = require("node:test");
const assert = require("assert");
const { Task } = require("../src/task");

describe("Task", () => {
  describe("get message", () => {
    it("should return the message stored in it", () => {
      const task = new Task("todo-item-1", "eat breakfast");

      assert.deepEqual(task.message, "eat breakfast");
    });
  });

  describe("get id", () => {
    it("should return the id of the task", () => {
      const task = new Task("todo-item-1", "eat breakfast");

      assert.deepEqual(task.id, "todo-item-1");
    });
  });

  describe("toggleMarkedStatus", () => {
    it("should initially be false", () => {
      const task = new Task("todo-item-1", "eat breakfast");

      assert.strictEqual(task.markedStatus, false);
    });
    it("should be true, when toggled once", () => {
      const task = new Task("todo-item-1", "eat breakfast");

      task.toggleMarkedStatus();

      assert.strictEqual(task.markedStatus, true);
    });
  });
});
