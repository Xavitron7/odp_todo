import addController from "./addcontroller.js";
import closeButton from "./closebutton.js";




let projectAddButton = document.querySelector("#add-project");
let projDivCloseButton = document.querySelector("#proj-div-close");
let taskAddButton = document.querySelector("#add-task")
let taskDivCloseButton = document.querySelector("#task-div-close")

projectAddButton.addEventListener("click", addController);
projDivCloseButton.addEventListener("click", closeButton);

taskAddButton.addEventListener("click", addController);
taskDivCloseButton.addEventListener("click", closeButton);

