//This function is triggered by a submit event on the task add form

const addTaskToProjectList = (event) => {
    event.preventDefault();
    let projectNameDiv = document.querySelector("#project-name");
    let titleInput = document.querySelector("#task-title")
    let descInput = document.querySelector("#task-description")
    let dateInput = document.querySelector("#task-date");
    let priorityInput = document.querySelector("#priority");


    //tagging form details

    let newTask = {
        "title": titleInput.value,
        "description": descInput.value,
        "date": dateInput.value,
        "priority": priorityInput.value
    }

    //Next: check that data key is not "all", retrieve from local storage, identify project, push this task to it
}

export default addTaskToProjectList