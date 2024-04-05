async function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

async function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

async function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    const tasks = await getTasks();
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.classList.add('taskItem');
        const removeButtonContainer = document.createElement('div');
        removeButtonContainer.classList.add('removeButtonContainer');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Done';
        removeButton.classList.add('removeButton');
        removeButton.onclick = async function () {
            tasks.splice(index, 1);
            await saveTasks(tasks);
            await displayTasks();
        };
        removeButtonContainer.appendChild(removeButton);
        li.appendChild(removeButtonContainer);
        taskList.appendChild(li);
    });
}

async function addTask(task) {
    if (!task) {
        alert('Please enter task name');
        return;
    }
    const tasks = await getTasks();
    tasks.push(task);
    await saveTasks(tasks);
    await displayTasks();
}

async function clearTasks() {
    await saveTasks([]);
    await displayTasks();
}

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const clearButton = document.getElementById('clearButton');

addTaskButton.addEventListener('click', async function () {
    await addTask(taskInput.value);
    taskInput.value = '';
});

clearButton.addEventListener('click', clearTasks);

displayTasks();