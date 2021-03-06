import removeProject from "./removeproject.js";
import changeProject from "./changeproject.js";
//import renderTasks from "./rendertasks.js";

// Array that was retrieved from local storaged used to generate the project list.

const renderProjects = (projectlist) => {

    let projectNav = document.querySelector("#project-nav");
    //let taskList = document.querySelector("#task-list")
    projectNav.innerHTML = ""
    //taskList.innerHTML = "";

//Creating the "All Projects link. Different from the user-added ones"
    let allLi = document.createElement("li");
    allLi.classList.add("project-item")
    allLi.setAttribute("data-key", "all");
    allLi.addEventListener("click", changeProject)

    let allText = document.createTextNode("All")
    allLi.appendChild(allText);

    projectNav.appendChild(allLi)


    projectlist.forEach(project => {
        let li = document.createElement("li");
        li.classList.add("project-item")
        li.setAttribute("data-key", project.id)
        li.addEventListener("click", changeProject)

        let projName = document.createTextNode(project["project"]);

        let closeButton = document.createElement("button");
        let cross = document.createTextNode("X");

        closeButton.classList.add("btn")
        closeButton.classList.add("btn-project")
        closeButton.classList.add("btn-remove");
        closeButton.appendChild(cross)
        closeButton.addEventListener("click", removeProject)


        li.appendChild(projName);
        li.appendChild(closeButton);
        projectNav.appendChild(li)        
        
    })

    //renderTasks(projectlist)

}

export default renderProjects;