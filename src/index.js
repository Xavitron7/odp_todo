import addProject from "./addproject.js";
import closeButton from "./closebutton.js";




let projectAddButton = document.querySelector("#add-project");
let projDivCloseButton = document.querySelector("#proj-div-close")

projectAddButton.addEventListener("click", addProject);
projDivCloseButton.addEventListener("click", closeButton);