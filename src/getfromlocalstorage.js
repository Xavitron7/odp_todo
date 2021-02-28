import renderProjects from "./renderprojects.js";

//Retrieves list from local storage, turns it into an array, and passes it to the render function.
const getFromLocalStorage = () => {
    let projects = JSON.parse(localStorage.getItem("project-list"));
    renderProjects(projects);
}

export default getFromLocalStorage;