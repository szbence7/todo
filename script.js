const todoInput = document.querySelector("#todoInput")
const todoList = document.querySelector("#todoList")

function addTodo() {
    const todoValue = todoInput.value;
    if (!todoValue) return;

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = todoValue;

    todoList.appendChild(todoItem);
    todoInput.value = "";
  }