const todoInput = document.querySelector("#todoInput")
const todoList = document.querySelector("#todoList")

function addTodo() {
    const todoValue = todoInput.value;
    if (!todoValue) {
      alert("Please enter a ToDo"); 
      return;
    }
    else {

    const todoItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const todoText = document.createTextNode(todoValue);
    todoItem.classList.add("todo-item");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "×"
    deleteBtn.addEventListener("click", () => {
      todoItem.classList.add("fade-out");
      setTimeout(() => {
        todoList.removeChild(todoItem);}, 300);

    })

    todoItem.innerHTML = todoValue.charAt(0).toUpperCase() + todoValue.slice(1);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
    todoInput.value = "";

  }
  }

  function clearList() {

    if (todoList.childElementCount === 0) {
      alert("List is empty");
    } else if (confirm("Are you sure?")) {

    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }
    
    setTimeout (() => { alert("List cleared"); }, 200);
    
  }
  }