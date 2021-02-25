import projectlist from "./projectlist.js";

const addToProjectList = (event) => {
    event.preventDefault()
    let projectName = document.querySelector("#project-input-field");
    let projectDesc = document.querySelector("#project-desc-field");
    let newProject = {
        "id": Date.now(),
        "project": projectName.value, 
        "project-desc": projectDesc.value
    };


    projectlist.push(newProject);

    console.log(projectlist)

    projectName.value = "";
    projectDesc.value = "";
}

export default addToProjectList;