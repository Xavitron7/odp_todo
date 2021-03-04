import addToLocalStorage from "./addtolocalstorage.js";

//Take the form input values, use them to create project object, retrieve the array from local storage, push new project to array, send to local storage function.

const addToProjectList = (event) => {
    event.preventDefault()
    let projectName = document.querySelector("#project-input-field");
    let projectDesc = document.querySelector("#project-desc-field");
    let newProject = {
        "id": Date.now(),
        "project": projectName.value, 
        "desc": projectDesc.value
    };

    let projectlist = JSON.parse(localStorage.getItem("project-list"));

    if (projectlist === null) {
        projectlist = []
    }


   projectlist.push(newProject);


    addToLocalStorage("project-list", JSON.stringify(projectlist));


    projectName.value = "";
    projectDesc.value = "";
}


export default addToProjectList
