const list = document.getElementById("list");
fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  .then(res => res.json())
  .then(data => {
    displayTodos(data);
  });

function displayTodos(todos) {
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    const text = document.createElement("span");
    text.textContent = todo.title;

    if (todo.completed) {
      li.classList.add("completed");
    }

    checkbox.addEventListener("change", () => {
      updateTodo(todo.id, checkbox.checked, li);
    });

    li.appendChild(checkbox);
    li.appendChild(text);
list.appendChild(li);
  });
}
function updateTodo(id, completed, element) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed: completed }),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(() => {
      element.classList.toggle("completed");
    });
}