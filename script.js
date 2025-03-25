const form = document.getElementById("todo-form");
const input = document.getElementById("task");
const list = document.getElementById("task-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const task = input.value;
    const li = document.createElement("li");
    li.innerText = task;
    list.appendChild(li);
    input.value = "";
}
);

