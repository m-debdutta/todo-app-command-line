Objective:- Make a todo app for command line.

---

How to use the app?

command-line:
  - todo  (shows all task)
  - todo --add 'task to add'. (add a task to the list)
  - todo --remove 'taskId'. (removes the task from the list)
  - todo --mark 'taskId'. (mark a task as done)
  - todo --unmarked 'taskId' (unmarked a task)
  - todo --clear (clears the todo list)

---

How will be the view?

- All the marked tasks will be at the bottom. (default)

Todos :
  - taskId: 'task' (unmarked task)
  - taskId: '~~task~~' (marked task)
----

How will the flow works?

When the user write `todo` and press enter.
The shell script will take the arguments and calls `main.js` with those arguments.
The `renderTodo` method of the controller will get triggered.
Then the controller will take the info from the storage and generate all the todo and display it.

---

How will i store the todo?

todo = [
  {message, markedStatus},
  {message, markedStatus},
  {message, markedStatus}
]