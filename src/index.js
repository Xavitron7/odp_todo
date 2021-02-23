import addProject from "./addproject.js";
import addTask from "./addtask.js";
import closeButton from "./closebutton.js";




let projectAddButton = document.querySelector("#add-project");
let projDivCloseButton = document.querySelector("#proj-div-close");
let taskAddButton = document.querySelector("#add-task")
let taskDivCloseButton = document.querySelector("#task-div-close")

projectAddButton.addEventListener("click", addProject);
projDivCloseButton.addEventListener("click", closeButton);

taskAddButton.addEventListener("click", addTask);
taskDivCloseButton.addEventListener("click", closeButton);

//Need a module that checks that the project and task divs can't open at the same time
