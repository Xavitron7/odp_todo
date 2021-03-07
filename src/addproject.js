//opens the add project div

const addProject = () => {
let addProjDiv = document.querySelector("#add-project-div");
let addProjInputs = document.querySelectorAll(".project-input");

addProjInputs.forEach(input => {
    input.value = ""
}
)

addProjDiv.classList.remove("hidden");
}

export default addProject;