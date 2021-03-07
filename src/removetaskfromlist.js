import addToLocalStorage from "./addtolocalstorage";
import updateTasks from "./updatetasks.js"

const removeTaskFromList = (event) => {
let currentProjectDiv = document.querySelector("#project-name")
let currentProjectID = currentProjectDiv.getAttribute("data-key");
let currentTaskID = event.target.parentElement.getAttribute("data-key");

let projectlist = JSON.parse(localStorage.getItem("project-list"));

let currentProject = projectlist.filter(project => project.id === Number(currentProjectID))[0];
//console.log(currentProject.tasks)

currentProject.tasks = currentProject.tasks.filter(task => task.id !== Number(currentTaskID))
//console.log(currentProject.tasks)
addToLocalStorage("project-list", JSON.stringify(projectlist))
updateTasks(Number(currentProjectID))

}

export default removeTaskFromList;