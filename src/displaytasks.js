
//Takes the value of the id, project and desc keys in an object and changes the text of the project info section based on those values
const displayTasks = ({id, project, desc}) => {
    
    let projectNameDiv = document.querySelector("#project-name");
    let projectDescDiv = document.querySelector("#project-desc");    

    projectNameDiv.setAttribute("data-key", id);
    projectNameDiv.innerHTML = project;
    projectDescDiv.innerHTML = desc;

}

export default displayTasks;