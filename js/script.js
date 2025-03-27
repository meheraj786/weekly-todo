const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const doneList = document.getElementById("done-list");

const sunList = document.querySelector("#sunday-list");
const monList = document.querySelector("#monday-list");
const tuesList = document.querySelector("#tuesday-list");
const wedList = document.querySelector("#wednesday-list");
const thursList = document.querySelector("#thursday-list");
const friList = document.querySelector("#friday-list");
const satList = document.querySelector("#saturday-list");

const days = [
  {
    name: "Sunday",
    checkbox: document.querySelector(".Sunday"),
    list: sunList,
  },
  {
    name: "Monday",
    checkbox: document.querySelector(".Monday"),
    list: monList,
  },
  {
    name: "Tuesday",
    checkbox: document.querySelector(".Tuesday"),
    list: tuesList,
  },
  {
    name: "Wednesday",
    checkbox: document.querySelector(".Wednesday"),
    list: wedList,
  },
  {
    name: "Thursday",
    checkbox: document.querySelector(".Thursday"),
    list: thursList,
  },
  {
    name: "Friday",
    checkbox: document.querySelector(".Friday"),
    list: friList,
  },
  {
    name: "Saturday",
    checkbox: document.querySelector(".Saturday"),
    list: satList,
  },
];

addTaskButton.addEventListener("click", function () {
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please write something before adding!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" style="margin-right: 10px;">
        <span class="task-text">${taskText}</span>
        <button class="edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.477 3.004c.167.015.24.219.12.338l-8.32 8.32a.75.75 0 0 0-.195.34l-1 3.83a.75.75 0 0 0 .915.915l3.829-1a.75.75 0 0 0 .34-.196l8.438-8.438a.198.198 0 0 1 .339.12a45.7 45.7 0 0 1-.06 10.073c-.223 1.905-1.754 3.4-3.652 3.613a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082a47.5 47.5 0 0 1 9.707-.078"/><path fill="currentColor" d="M17.823 4.237a.25.25 0 0 1 .354 0l1.414 1.415a.25.25 0 0 1 0 .353L11.298 14.3a.25.25 0 0 1-.114.065l-1.914.5a.25.25 0 0 1-.305-.305l.5-1.914a.25.25 0 0 1 .065-.114z"/></svg></button>
        <button class="delete-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
           <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
           <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
         </svg></button>
    `;
  taskInput.value = "";


  // Delete functionality
  const deleteButton = listItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", function () {
    listItem.remove();
    
  });

  // Edit functionality
  const editButton = listItem.querySelector(".edit");
  editButton.addEventListener("click", function () {
    editTask(editButton);
  });

  function editTask(editButton) {
    let listItem = editButton.parentElement;
    let taskText = listItem.querySelector(".task-text").innerText;
    let editInput = document.createElement("input");
    editInput.style.backgroundColor = "#EDEEF0";
    editInput.style.borderRadius = "30px";
    editInput.style.paddingLeft = "20px";
    editInput.value = taskText;

    listItem.innerHTML = "";
    listItem.appendChild(editInput);

    let saveButton = document.createElement("button");
    saveButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1200 1200"><path fill="white" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600s600-268.63 600-600S931.369 0 600 0m0 130.371c259.369 0 469.556 210.325 469.556 469.629S859.369 1069.556 600 1069.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371m229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754z"/></svg>`;
    saveButton.style.backgroundColor = "#FF5945";
    saveButton.style.borderRadius = "30px";
    saveButton.style.padding = "5px 10px";
    saveButton.style.cursor = "pointer";

    listItem.appendChild(saveButton);
    saveButton.addEventListener("click", function () {
      if (editInput.value.trim() === "") {
        alert("Please write something");
      } else {
        listItem.innerHTML = `
                    <input type="checkbox" class="task-checkbox" style="margin-right: 10px;">
                    <span class="task-text">${editInput.value}</span>
                    <button class="edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.477 3.004c.167.015.24.219.12.338l-8.32 8.32a.75.75 0 0 0-.195.34l-1 3.83a.75.75 0 0 0 .915.915l3.829-1a.75.75 0 0 0 .34-.196l8.438-8.438a.198.198 0 0 1 .339.12a45.7 45.7 0 0 1-.06 10.073c-.223 1.905-1.754 3.4-3.652 3.613a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082a47.5 47.5 0 0 1 9.707-.078"/><path fill="currentColor" d="M17.823 4.237a.25.25 0 0 1 .354 0l1.414 1.415a.25.25 0 0 1 0 .353L11.298 14.3a.25.25 0 0 1-.114.065l-1.914.5a.25.25 0 0 1-.305-.305l.5-1.914a.25.25 0 0 1 .065-.114z"/></svg></button>
                    <button class="delete-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
           <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
           <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
         </svg></button>
                `;
        listItem.classList.add("do");

        listItem.querySelector(".edit").addEventListener("click", function () {
          editTask(this);
        });

        listItem
          .querySelector(".delete-button")
          .addEventListener("click", function () {
            listItem.remove();
          });

        listItem
          .querySelector(".task-checkbox")
          .addEventListener("change", function () {
            moveToDoneList(this, listItem);
          });
      }
    
    });
  }

  // Assign to selected day
  let addedToDay = false;
  days.forEach((day) => {
    if (day.checkbox.checked) {
      day.list.appendChild(listItem);
      listItem.classList.add("do");
      addedToDay = true;
      listItem.style.backgroundColor = "#99b4eb";

      const check = listItem.querySelector(".task-checkbox");
      check.addEventListener("change", function () {
        moveToDoneList(check, listItem);
        logTaskCounts()
      });
    }
  });


  logTaskCounts()});

function moveToDoneList(check, listItem) {
  if (check.checked) {
    doneList.appendChild(listItem);
    listItem.classList.remove("do");
    listItem.classList.add("done");

    const checkbox = listItem.querySelector(".task-checkbox");
    const editButton = listItem.querySelector(".edit");
    checkbox.style.display = "none";
    editButton.style.display = "none";
  }
}

let day1 = document.querySelector(".day1");
let day2 = document.querySelector(".day2");
let day3 = document.querySelector(".day3");
let day4 = document.querySelector(".day4");
let day5 = document.querySelector(".day5");
let day6 = document.querySelector(".day6");
let day7 = document.querySelector(".day7");
let doneTodo = document.querySelector(".done-todo");
let SundayTodo = document.querySelector(".do-todo-sunday");
let MondayTodo = document.querySelector(".do-todo-monday");
let TuesdayTodo = document.querySelector(".do-todo-tuesday");
let WednesdayTodo = document.querySelector(".do-todo-wednesday");
let ThursdayTodo = document.querySelector(".do-todo-thursday");
let FridayTodo = document.querySelector(".do-todo-friday");
let SaturdayTodo = document.querySelector(".do-todo-saturday");
day1.addEventListener("click", function () {
  SundayTodo.style.display = "block";
  MondayTodo.style.display = "none";
  TuesdayTodo.style.display = "none";
  WednesdayTodo.style.display = "none";
  ThursdayTodo.style.display = "none";
  FridayTodo.style.display = "none";
  SaturdayTodo.style.display = "none";
  day1.classList.add("active");
  day2.classList.remove("active");
  day3.classList.remove("active");
  day4.classList.remove("active");
  day5.classList.remove("active");
  day6.classList.remove("active");
  day7.classList.remove("active");
});
day2.addEventListener("click", function () {
  SundayTodo.style.display = "none";
  MondayTodo.style.display = "block";
  TuesdayTodo.style.display = "none";
  WednesdayTodo.style.display = "none";
  ThursdayTodo.style.display = "none";
  FridayTodo.style.display = "none";
  SaturdayTodo.style.display = "none";
  day1.classList.remove("active");
  day2.classList.add("active");
  day3.classList.remove("active");
  day4.classList.remove("active");
  day5.classList.remove("active");
  day6.classList.remove("active");
  day7.classList.remove("active");
});
day3.addEventListener("click", function () {
  SundayTodo.style.display = "none";
  MondayTodo.style.display = "none";
  TuesdayTodo.style.display = "block";
  WednesdayTodo.style.display = "none";
  ThursdayTodo.style.display = "none";
  FridayTodo.style.display = "none";
  SaturdayTodo.style.display = "none";
  day1.classList.remove("active");
  day2.classList.remove("active");
  day3.classList.add("active");
  day4.classList.remove("active");
  day5.classList.remove("active");
  day6.classList.remove("active");
  day7.classList.remove("active");
});
day4.addEventListener("click", function () {
  SundayTodo.style.display = "none";
  MondayTodo.style.display = "none";
  TuesdayTodo.style.display = "none";
  WednesdayTodo.style.display = "block";
  ThursdayTodo.style.display = "none";
  FridayTodo.style.display = "none";
  SaturdayTodo.style.display = "none";
  day1.classList.remove("active");
  day2.classList.remove("active");
  day3.classList.remove("active");
  day4.classList.add("active");
  day5.classList.remove("active");
  day6.classList.remove("active");
  day7.classList.remove("active");
});
day5.addEventListener("click", function () {
  SundayTodo.style.display = "none";
  MondayTodo.style.display = "none";
  TuesdayTodo.style.display = "none";
  WednesdayTodo.style.display = "none";
  ThursdayTodo.style.display = "block";
  FridayTodo.style.display = "none";
  SaturdayTodo.style.display = "none";
  day1.classList.remove("active");
  day2.classList.remove("active");
  day3.classList.remove("active");
  day4.classList.remove("active");
  day5.classList.add("active");
  day6.classList.remove("active");
  day7.classList.remove("active");
});
day6.addEventListener("click", function () {
  SundayTodo.style.display = "none";
  MondayTodo.style.display = "none";
  TuesdayTodo.style.display = "none";
  WednesdayTodo.style.display = "none";
  ThursdayTodo.style.display = "none";
  FridayTodo.style.display = "block";
  SaturdayTodo.style.display = "none";
  day1.classList.remove("active");
  day2.classList.remove("active");
  day3.classList.remove("active");
  day4.classList.remove("active");
  day5.classList.remove("active");
  day6.classList.add("active");
  day7.classList.remove("active");
});
day7.addEventListener("click", function () {
  SundayTodo.style.display = "none";
  MondayTodo.style.display = "none";
  TuesdayTodo.style.display = "none";
  WednesdayTodo.style.display = "none";
  ThursdayTodo.style.display = "none";
  FridayTodo.style.display = "none";
  SaturdayTodo.style.display = "block";
  day1.classList.remove("active");
  day2.classList.remove("active");
  day3.classList.remove("active");
  day4.classList.remove("active");
  day5.classList.remove("active");
  day6.classList.remove("active");
  day7.classList.add("active");
});

function clear(clear) {
  let clearArr = Array.from(clear);

  clearArr.map((item) => {
    item.remove();
  });
}
function logTaskCounts() {
  let doList= document.querySelectorAll('.do').length
  let doneList=document.querySelectorAll('.done').length
  let doNum= document.querySelector(".do-todo-num")
  
}