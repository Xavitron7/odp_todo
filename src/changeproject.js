import displayTasks from "./displaytasks.js";

//If the "all" item was selected, pass "all" task text. Make sure target has a data key (i.e. not a button). This needs to be done because I've put the event listener on the li element. Else copy the project list from local storage, identify the project with the matching id, "remove" from array and set as own object. Pass object into displayTasks function.

const changeProject = (event) => {

    if (event.target.getAttribute("data-key") === null || event.target.getAttribute("data-key") === undefined) {
        return
    }


    else if (event.target.getAttribute("data-key") === "all") {
        displayTasks({"id":"all", "project": "All Tasks", "desc": "All tasks are listed here"})
    }

    else {

    let projectlist = [...JSON.parse(localStorage.getItem("project-list"))]


    let filteredProjectlist = projectlist.filter(project => {
        return Number(event.target.getAttribute("data-key")) === project["id"]
    })

    let targetProject = filteredProjectlist[0]; 



    displayTasks(targetProject)

        }
}

export default changeProject