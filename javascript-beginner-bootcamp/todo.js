// finding the elements
const todoList = document.querySelector("ul");
const inputForm = document.querySelector("form");
const taskInput = document.getElementById("todo-input");
const clearBtn = document.getElementById("clear");
const test = document.getElementById("test");

// connecting to local storage
const storKey = "todos";
const thing = localStorage.getItem(storKey);
let todosArray = thing ? JSON.parse(thing) : [];
localStorage.setItem(storKey, JSON.stringify(todosArray));
let storage = JSON.parse(thing);

// inputting tasks
function todoMaker(input) {
  let task = document.createElement("li");
  task.textContent = input;
  task.classList.add("list-group-item");
  todoList.appendChild(task);
}
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  todosArray.push(taskInput.value);
  localStorage.setItem(storKey, JSON.stringify(todosArray));
  todoMaker(taskInput.value);
  taskInput.value = " ";
});

// keeping tasks that are in local storage
for (let i = 0; i < storage.length; i++) {
  todoMaker(storage[i]);
}

// change todos to "done" status
function makeDone(doneTask) {
  doneTask.classList.add("done");
}
function makeUndone(doneTask) {
  doneTask.classList.remove("done");
}
document.querySelectorAll(".list-group-item").forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("done")) {
      makeUndone(item);
    } else {
      makeDone(item);
    }
  });
});

// remove just one todo
// todo.addEventListener("click", function() {
//   removeToDo();
// });
// function removeToDo(todo) {
//   todoList.removeChild(todo);
// }

// clear all button
clearBtn.addEventListener("click", function () {
  localStorage.clear();
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
});
