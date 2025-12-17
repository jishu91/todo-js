const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.className =
        "flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm";

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className =
        "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600";

    // Delete action
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
}
