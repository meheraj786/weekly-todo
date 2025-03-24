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
      <button class="edit">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.477 3.004c.167.015.24.219.12.338l-8.32 8.32a.75.75 0 0 0-.195.34l-1 3.83a.75.75 0 0 0 .915.915l3.829-1a.75.75 0 0 0 .34-.196l8.438-8.438a.198.198 0 0 1 .339.12a45.7 45.7 0 0 1-.06 10.073c-.223 1.905-1.754 3.4-3.652 3.613a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082a47.5 47.5 0 0 1 9.707-.078"/><path fill="currentColor" d="M17.823 4.237a.25.25 0 0 1 .354 0l1.414 1.415a.25.25 0 0 1 0 .353L11.298 14.3a.25.25 0 0 1-.114.065l-1.914.5a.25.25 0 0 1-.305-.305l.5-1.914a.25.25 0 0 1 .065-.114z"/></svg>
      </button>
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

    const editBtn= document.querySelector(".edit")

    const checkbox = listItem.querySelector(".task-checkbox");
    checkbox.addEventListener("input", function () {
      if (checkbox.checked) {
        doneList.appendChild(listItem);
        listItem.style.textDecoration = "line-through";
        editBtn.style.display="none"
        
        listItem.style.backgroundColor = "#e4b5b0";
      } else {
        todoList.appendChild(listItem);
        listItem.style.textDecoration = "none";
        listItem.style.backgroundColor = "#99b4eb";
        editBtn.style.display="inline-block"
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
  editInput.style.backgroundColor="#EDEEF0"
  editInput.style.borderRadius="30px"
  editInput.style.paddingLeft="20px"
  editInput.value = taskText;

  listItem.innerHTML = "";
  listItem.appendChild(editInput);
  
  let saveButton = document.createElement("button");
  saveButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1200 1200"><path fill="white" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600s600-268.63 600-600S931.369 0 600 0m0 130.371c259.369 0 469.556 210.325 469.556 469.629S859.369 1069.556 600 1069.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371m229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754z"/></svg>`;
  saveButton.style.backgroundColor= "#FF5945";
  saveButton.style.borderRadius= "100%";
  saveButton.style.display= "flex";
  saveButton.style.justifyContent= "center";
  saveButton.style.alignItems= "center";
  saveButton.style.cursor= "pointer";


  

  listItem.appendChild(saveButton);
  saveButton.addEventListener("click", function () {
    if (editInput.value=="") {
      alert("please write something")
    }else{
      listItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" style="margin-right: 10px;">
        <span class="task-text">${editInput.value}</span>
        <button class="edit">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.477 3.004c.167.015.24.219.12.338l-8.32 8.32a.75.75 0 0 0-.195.34l-1 3.83a.75.75 0 0 0 .915.915l3.829-1a.75.75 0 0 0 .34-.196l8.438-8.438a.198.198 0 0 1 .339.12a45.7 45.7 0 0 1-.06 10.073c-.223 1.905-1.754 3.4-3.652 3.613a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082a47.5 47.5 0 0 1 9.707-.078"/><path fill="currentColor" d="M17.823 4.237a.25.25 0 0 1 .354 0l1.414 1.415a.25.25 0 0 1 0 .353L11.298 14.3a.25.25 0 0 1-.114.065l-1.914.5a.25.25 0 0 1-.305-.305l.5-1.914a.25.25 0 0 1 .065-.114z"/></svg>
        </button>
        <button class="delete-button" style="margin-left: 0px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
          </svg>
        </button>
      `;
    }

    const checkbox = listItem.querySelector(".task-checkbox");
    checkbox.addEventListener("input", function () {
      const editBtn= document.querySelector(".edit")
      if (checkbox.checked) {
        doneList.appendChild(listItem);
        listItem.style.textDecoration = "line-through";
        editBtn.style.display="none"
        listItem.style.backgroundColor = "#e4b5b0";
      } else {
        todoList.appendChild(listItem);
        listItem.style.textDecoration = "none";
        listItem.style.backgroundColor = "#99b4eb";
        editBtn.style.display="inline-block"
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