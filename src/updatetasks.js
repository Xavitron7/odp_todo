//All this function really does is identify the current project object and send it to the displayTasks function. Pretty redundant. Can merge with another function/module in the future.

import displayTasks from "./displaytasks.js"

const updateTasks = (id) => {
    let projectlist = JSON.parse(localStorage.getItem("project-list"));
    let currentProject = projectlist.filter(project => project.id === Number(id))[0]
    console.log(currentProject)
    displayTasks(currentProject)
}



export default updateTasks;