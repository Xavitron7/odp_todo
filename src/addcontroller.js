import addProject from "./addproject.js"
import addTask from "./addtask.js"

const addController = (event) => {
    let addProjectDiv = document.querySelector("#add-project-div");
    let addTaskDiv = document.querySelector("#add-task-div");

    if (event.target.id === "add-project"){
        if (addTaskDiv.classList.contains("hidden")) {
            addProject();
        }
    }

    else {
        if (event.target.id === "add-task" && addProjectDiv.classList.contains("hidden")) {
            addTask();
        }
    }
}

export default addController;