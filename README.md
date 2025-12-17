# todo-js
beginner level js project

🧱 PART 1: HTML + Tailwind (What you SEE)
🔹 Main container
<div class="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">


Meaning:

bg-white → white background

p-6 → padding

rounded-xl → rounded corners

shadow-lg → shadow

max-w-md → fixed nice width

👉 This creates the card UI

🔹 Input + Add Button
<div class="flex gap-2 mb-4">


flex → items in one line

gap-2 → space between input & button

<input id="taskInput">
<button id="addBtn">Add</button>


id is used by JavaScript to control them

🔹 Task List
<ul id="taskList"></ul>


🧠 Empty at first
JS will add <li> items dynamically

⚙️ PART 2: JavaScript (The BRAIN)
🔹 Step 1: Connect JS to HTML
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


What’s happening:

JS stores HTML elements into variables

Now JS can read and change them

🔹 Step 2: Button click listener
addBtn.addEventListener("click", addTask);


🧠 Means:

When user clicks Add, run addTask() function

🔹 Step 3: Main function
function addTask() {


This function runs every time you click Add

🔹 Get input value
const taskText = input.value.trim();


input.value → text typed by user

trim() → removes extra spaces

🔹 Validation (Very important)
if (taskText === "") {
    alert("Please enter a task");
    return;
}


🧠 If input is empty:

show alert

return stops the function

🔹 Create <li> (Task row)
const li = document.createElement("li");


🧠 Creates a new <li> in memory

li.className = "flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm";


👉 Tailwind styles for each task row

🔹 Task text
const span = document.createElement("span");
span.textContent = taskText;


🧠 <span> holds the task text

🔹 Delete button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";


Creates a Delete button for each task

🔹 Delete logic
deleteBtn.addEventListener("click", function () {
    li.remove();
});


🧠 When Delete is clicked:

remove that specific task

No effect on others

🔹 Add everything to page
li.appendChild(span);
li.appendChild(deleteBtn);
taskList.appendChild(li);


🧠 Order:

span + button → inside <li>

<li> → inside <ul>

🔹 Clear input
input.value = "";


Resets input box after adding task