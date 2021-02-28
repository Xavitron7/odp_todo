import addController from "./addcontroller.js";
import closeButton from "./closebutton.js";
import addToProjectList from "./addToProjectList.js"
import getFromLocalStorage from "./getfromlocalstorage.js";

//window.localStorage.clear()
//console.log(window.localStorage)

let projectAddButton = document.querySelector("#add-project");
let projDivCloseButton = document.querySelector("#proj-div-close");
let taskAddButton = document.querySelector("#add-task")
let taskDivCloseButton = document.querySelector("#task-div-close");
let addProjectForm = document.querySelector("#add-project-form");

projectAddButton.addEventListener("click", addController);
projDivCloseButton.addEventListener("click", closeButton);

taskAddButton.addEventListener("click", addController);
taskDivCloseButton.addEventListener("click", closeButton);

addProjectForm.addEventListener("submit", addToProjectList);

getFromLocalStorage();


