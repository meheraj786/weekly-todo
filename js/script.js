const taskInput = document.getElementById("new-task"); 
const addTaskButton = document.getElementById("add-task"); 
const todoList = document.getElementById("todo-list"); 
const doneList = document.getElementById("done-list"); 

addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value;
  if (taskText == "") {
    alert("Please write something before adding!");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" class="task-checkbox" style="margin-right: 10px;">
      <span class="task-text">${taskText}</span>
      <button class="edit">Edit</button>
      <button class="delete-button" style="margin-left: 0px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
      </button>
    `;
    todoList.appendChild(listItem);
    listItem.style.backgroundColor = "#99b4eb";
    taskInput.value = "";

    const checkbox = listItem.querySelector(".task-checkbox");
    checkbox.addEventListener("input", function () {
      if (checkbox.checked) {
        doneList.appendChild(listItem);
        listItem.style.textDecoration = "line-through";
        listItem.style.backgroundColor = "#e4b5b0";
      } else {
        todoList.appendChild(listItem);
        listItem.style.textDecoration = "none";
        listItem.style.backgroundColor = "#99b4eb";
      }
    });

    const deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      listItem.remove(); 
    });

    const editButton = listItem.querySelector(".edit");
    editButton.addEventListener("click", function () {
      edit(editButton);
    });
  }
});

function edit(editButton) {
  let listItem = editButton.parentElement;
  let taskText = listItem.querySelector(".task-text").innerText;
  let editInput = document.createElement("input");
  editInput.value = taskText;

  listItem.innerHTML = "";
  listItem.appendChild(editInput);
  
  let saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  listItem.appendChild(saveButton);
  saveButton.addEventListener("click", function () {
    listItem.innerHTML = `
      <input type="checkbox" class="task-checkbox" style="margin-right: 10px;">
      <span class="task-text">${editInput.value}</span>
      <button class="edit">Edit</button>
      <button class="delete-button" style="margin-left: 0px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
      </button>
    `;

    const checkbox = listItem.querySelector(".task-checkbox");
    checkbox.addEventListener("input", function () {
      if (checkbox.checked) {
        doneList.appendChild(listItem);
        listItem.style.textDecoration = "line-through";
        listItem.style.backgroundColor = "#e4b5b0";
      } else {
        todoList.appendChild(listItem);
        listItem.style.textDecoration = "none";
        listItem.style.backgroundColor = "#99b4eb";
      }
    });

    const deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      listItem.remove(); 
    });

    const editButton = listItem.querySelector(".edit");
    editButton.addEventListener("click", function () {
      edit(editButton);
    });
  });
}