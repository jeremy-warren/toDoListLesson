let toDoList = document.getElementById("toDoList");
let adderForm = document.getElementById("adderForm");

adderForm.addEventListener("submit", function (e) {
  // stop form submission from reloading
  e.preventDefault();

//   add textbox content as a new task
  let newListItem = document.createElement("li");
  newListItem.classList.add("toDoItem");
  newListItem.innerText = document.querySelector("#task").value;

  toDoList.append(newListItem);
  adderForm.reset()
});

// on click, strikethrough a task
document.addEventListener("click", function (e) {
    console.log(e);
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
  }
});

// on double click, delete a task
document.addEventListener("dblclick", function (e) {
    console.log(e);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

//querySelect is querying THE DOM
