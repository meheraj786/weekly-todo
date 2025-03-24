
function submit() {
  const userInput = document.querySelector(".input");

  let newParagraph = document.createElement("p");
  if (userInput.value.trim() === "") {
    alert("Please enter something!");
  } else {
    newParagraph.innerHTML = `${userInput.value} 
      <button onclick="edit(this)">Edit</button><button onclick="edit(this)">delet</button>`;
    document.body.appendChild(newParagraph);
    userInput.value = "";
  }
}

function edit(editButton) {
  let paragraph = editButton.parentElement;

  let oldText = paragraph.childNodes[0].nodeValue;
  let editInput = document.createElement("input");
  editInput.value = oldText;

  paragraph.innerHTML = "";

  paragraph.appendChild(editInput);

  let saveButton = document.createElement("button");
  saveButton.innerText = "Save";

  saveButton.onclick = function () {
    paragraph.innerHTML = `${editInput.value} 
      <button onclick="edit(this)">Edit</button>`;
  };

  paragraph.appendChild(saveButton);
}
