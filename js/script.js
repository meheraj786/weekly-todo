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
    { name: "Sunday", checkbox: document.querySelector(".Sunday"), list: sunList },
    { name: "Monday", checkbox: document.querySelector(".Monday"), list: monList },
    { name: "Tuesday", checkbox: document.querySelector(".Tuesday"), list: tuesList },
    { name: "Wednesday", checkbox: document.querySelector(".Wednesday"), list: wedList },
    { name: "Thursday", checkbox: document.querySelector(".Thursday"), list: thursList },
    { name: "Friday", checkbox: document.querySelector(".Friday"), list: friList },
    { name: "Saturday", checkbox: document.querySelector(".Saturday"), list: satList }
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
        <button class="edit">Edit</button>
        <button class="delete-button">Delete</button>
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
        saveButton.innerText = "Save";
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
                    <button class="edit">Edit</button>
                    <button class="delete-button">Delete</button>
                `;

                listItem.querySelector(".edit").addEventListener("click", function () {
                    editTask(this);
                });

                listItem.querySelector(".delete-button").addEventListener("click", function () {
                    listItem.remove();
                });

                listItem.querySelector(".task-checkbox").addEventListener("change", function () {
                    moveToDoneList(this, listItem);
                });
            }
        });
    }

    // Assign to selected day
    let addedToDay = false;
    days.forEach(day => {
        if (day.checkbox.checked) {
            day.list.appendChild(listItem);
            listItem.classList.add("do");
            addedToDay = true;
            listItem.style.backgroundColor = "#99b4eb";

            const check = listItem.querySelector(".task-checkbox");
            check.addEventListener("change", function () {
                moveToDoneList(check, listItem);
            });
        }
    });

    if (!addedToDay) {
        alert("Choose your day");
        return;
    }
});

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
  else {
      let parentList = listItem.parentElement;
      
      if (parentList) {
          parentList.appendChild(listItem);
          listItem.classList.remove("done");
          listItem.classList.add("do");
          
          const checkbox = listItem.querySelector(".task-checkbox");
          const editButton = listItem.querySelector(".edit");
          checkbox.style.display = "inline-block";
          editButton.style.display = "inline-block";
      }
  }
}
let day1= document.querySelector(".day1")
let day2= document.querySelector(".day2")
let day3= document.querySelector(".day3")
let day4= document.querySelector(".day4")
let day5= document.querySelector(".day5")
let day6= document.querySelector(".day6")
let day7= document.querySelector(".day7")
let doneTodo= document.querySelector(".done-todo")
let SundayTodo= document.querySelector(".do-todo-sunday")
let MondayTodo= document.querySelector(".do-todo-monday")
let TuesdayTodo= document.querySelector(".do-todo-tuesday")
let WednesdayTodo= document.querySelector(".do-todo-wednesday")
let ThursdayTodo= document.querySelector(".do-todo-thursday")
let FridayTodo= document.querySelector(".do-todo-friday")
let SaturdayTodo= document.querySelector(".do-todo-saturday")
day1.addEventListener("click", function(){
  SundayTodo.style.display="block"
  MondayTodo.style.display="none"
  TuesdayTodo.style.display="none"
  WednesdayTodo.style.display="none"
  ThursdayTodo.style.display="none"
  FridayTodo.style.display="none"
  SaturdayTodo.style.display="none"
  day1.classList.add("active")
  day2.classList.remove("active")
  day3.classList.remove("active")
  day4.classList.remove("active")
  day5.classList.remove("active")
  day6.classList.remove("active")
  day7.classList.remove("active")
})
day2.addEventListener("click", function(){
  SundayTodo.style.display="none"
  MondayTodo.style.display="block"
  TuesdayTodo.style.display="none"
  WednesdayTodo.style.display="none"
  ThursdayTodo.style.display="none"
  FridayTodo.style.display="none"
  SaturdayTodo.style.display="none"
  day1.classList.remove("active")
  day2.classList.add("active")
  day3.classList.remove("active")
  day4.classList.remove("active")
  day5.classList.remove("active")
  day6.classList.remove("active")
  day7.classList.remove("active")
})
day3.addEventListener("click", function(){
  SundayTodo.style.display="none"
  MondayTodo.style.display="none"
  TuesdayTodo.style.display="block"
  WednesdayTodo.style.display="none"
  ThursdayTodo.style.display="none"
  FridayTodo.style.display="none"
  SaturdayTodo.style.display="none"
  day1.classList.remove("active")
  day2.classList.remove("active")
  day3.classList.add("active")
  day4.classList.remove("active")
  day5.classList.remove("active")
  day6.classList.remove("active")
  day7.classList.remove("active")
})
day4.addEventListener("click", function(){
  SundayTodo.style.display="none"
  MondayTodo.style.display="none"
  TuesdayTodo.style.display="none"
  WednesdayTodo.style.display="block"
  ThursdayTodo.style.display="none"
  FridayTodo.style.display="none"
  SaturdayTodo.style.display="none"
  day1.classList.remove("active")
  day2.classList.remove("active")
  day3.classList.remove("active")
  day4.classList.add("active")
  day5.classList.remove("active")
  day6.classList.remove("active")
  day7.classList.remove("active")
})
day5.addEventListener("click", function(){
  SundayTodo.style.display="none"
  MondayTodo.style.display="none"
  TuesdayTodo.style.display="none"
  WednesdayTodo.style.display="none"
  ThursdayTodo.style.display="block"
  FridayTodo.style.display="none"
  SaturdayTodo.style.display="none"
  day1.classList.remove("active")
  day2.classList.remove("active")
  day3.classList.remove("active")
  day4.classList.remove("active")
  day5.classList.add("active")
  day6.classList.remove("active")
  day7.classList.remove("active")
})
day6.addEventListener("click", function(){
  SundayTodo.style.display="none"
  MondayTodo.style.display="none"
  TuesdayTodo.style.display="none"
  WednesdayTodo.style.display="none"
  ThursdayTodo.style.display="none"
  FridayTodo.style.display="block"
  SaturdayTodo.style.display="none"
  day1.classList.remove("active")
  day2.classList.remove("active")
  day3.classList.remove("active")
  day4.classList.remove("active")
  day5.classList.remove("active")
  day6.classList.add("active")
  day7.classList.remove("active")
})
day7.addEventListener("click", function(){
  SundayTodo.style.display="none"
  MondayTodo.style.display="none"
  TuesdayTodo.style.display="none"
  WednesdayTodo.style.display="none"
  ThursdayTodo.style.display="none"
  FridayTodo.style.display="none"
  SaturdayTodo.style.display="block"
  day1.classList.remove("active")
  day2.classList.remove("active")
  day3.classList.remove("active")
  day4.classList.remove("active")
  day5.classList.remove("active")
  day6.classList.remove("active")
  day7.classList.add("active")
})


