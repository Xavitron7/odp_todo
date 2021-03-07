//This function is triggered by a submit event on the task add form. Adds the values of the form to an object and adds them to the task array of the current project. Adds the updated project list to local storage and re-renders the task list.

import addToLocalStorage from "./addtolocalstorage";
import updateTasks from "./updatetasks.js";

const addTaskToProjectList = (event) => {
    event.preventDefault();
    let projectNameDiv = document.querySelector("#project-name");
    let currentProjectID = projectNameDiv.getAttribute("data-key")
    let titleInput = document.querySelector("#task-title")
    let descInput = document.querySelector("#task-description")
    let dateInput = document.querySelector("#task-date");
    let priorityInput = document.querySelector("#priority");
    let projectlist = JSON.parse(localStorage.getItem("project-list"));

      //tagging form details

      let newTask = {
        "id": Date.now(),
        "title": titleInput.value,
        "description": descInput.value,
        "date": dateInput.value,
        "priority": priorityInput.value
    }


    for (let project of projectlist) {

        if (project.id === Number(currentProjectID)) {
            project.tasks.push(newTask)
        }

    }

    addToLocalStorage("project-list", JSON.stringify(projectlist))

    titleInput.value = ""
    descInput.value = ""
    dateInput.value = ""
    priorityInput.value = ""

    updateTasks(currentProjectID)

  


    //Next: check that data key is not "all", retrieve from local storage, identify project, push this task to it
}

export default addTaskToProjectList