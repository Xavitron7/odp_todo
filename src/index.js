import addController from "./addcontroller.js";
import closeButton from "./closebutton.js";
import addToProjectList from "./addToProjectList.js";
import addTaskToProjectList from "./addtasktoproject.js"
import getFromLocalStorage from "./getfromlocalstorage.js";
import renderAllTasks from "./renderalltasks.js"

let projectAddButton = document.querySelector("#add-project");
let projDivCloseButton = document.querySelector("#proj-div-close");
let taskAddButton = document.querySelector("#add-task")
let taskDivCloseButton = document.querySelector("#task-div-close");
let addProjectForm = document.querySelector("#add-project-form");
let addTaskForm = document.querySelector("#add-task-form")

projectAddButton.addEventListener("click", addController);
projDivCloseButton.addEventListener("click", closeButton);

taskAddButton.addEventListener("click", addController);
taskDivCloseButton.addEventListener("click", closeButton);

addProjectForm.addEventListener("submit", addToProjectList);

addTaskForm.addEventListener("submit", addTaskToProjectList);

getFromLocalStorage();
renderAllTasks();


