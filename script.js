const inputElement = document.getElementById("task-input");
const addButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", () => {
  const taskText = inputElement.value.trim();
  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.style.display = "flex";
    taskItem.style.justifyContent = "space-between";
    taskItem.style.alignItems = "center";

    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "30px";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    inputElement.value = "";
  } else {
    alert("Please enter a valid task");
  }
});
