import addToLocalStorage from "./addtolocalstorage";
import updateTasks from "./updatetasks.js"

//Retrieves the project list from local storage and identifies current project (i.e. where the task in which the remove event was called). Then the task array in the project is filtered to remove the task with the id that matches the id of the task that was clicked. Local storage is updated and task list refreshed.

const removeTaskFromList = (event) => {
let currentProjectDiv = document.querySelector("#project-name")
let currentProjectID = currentProjectDiv.getAttribute("data-key");
let currentTaskID = event.target.parentElement.getAttribute("data-key");

let projectlist = JSON.parse(localStorage.getItem("project-list"));

let currentProject = projectlist.filter(project => project.id === Number(currentProjectID))[0];

currentProject.tasks = currentProject.tasks.filter(task => task.id !== Number(currentTaskID))

addToLocalStorage("project-list", JSON.stringify(projectlist))
updateTasks(Number(currentProjectID))

}

export default removeTaskFromList;