// Array that was retrieved from local storaged used to generate the project list.

const renderProjects = (projectlist) => {

    let projectNav = document.querySelector("#project-nav");
    projectNav.innerHTML = ""

    let allLi = document.createElement("li");
    allLi.classList.add("project-item")

    let allText = document.createTextNode("All")
    allLi.appendChild(allText);

    projectNav.appendChild(allLi)


    projectlist.forEach(project => {
        let li = document.createElement("li");
        li.classList.add("project-item")

        let projName = document.createTextNode(project["project"]);
        li.appendChild(projName);
        projectNav.appendChild(li)        
        
    })
}

export default renderProjects;