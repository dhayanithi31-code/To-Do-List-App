
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                ${task.name}
            </span>
            <div>
                <button class="btn btn-success btn-sm me-1"
                    onclick="completeTask(${index})">✓</button>
                <button class="btn btn-danger btn-sm"
                    onclick="deleteTask(${index})">X</button>
            </div>
        `;

        taskList.appendChild(li);
    });

    document.getElementById("taskCount").innerText =
        "Total Tasks: " + tasks.length;

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: taskName,
        completed: false
    });

    input.value = "";
    displayTasks();
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

displayTasks();
