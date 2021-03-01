import addToLocalStorage from "./addtolocalstorage.js";

const removeProject = (event) => {
    let projects = JSON.parse(localStorage.getItem("project-list"));

    let targetId = Number(event.target.parentElement.getAttribute("data-key"));
    
    projects = projects.filter(project => {
            return targetId !== project["id"];
        })
        
        addToLocalStorage("project-list", JSON.stringify(projects))


}

export default removeProject