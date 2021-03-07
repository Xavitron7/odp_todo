import displayTasks from "./displaytasks.js"

const updateTasks = (id) => {
    let projectlist = JSON.parse(localStorage.getItem("project-list"));
    let currentProject = projectlist.filter(project => project.id === Number(id))[0]
    console.log(currentProject)
    displayTasks(currentProject)
}



export default updateTasks;