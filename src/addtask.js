const addTask = () => {
    let addTaskDiv = document.querySelector("#add-task-div");
    let addTaskInputs = document.querySelectorAll(".task-input");

    //addTaskDiv.addEventListener("submit", addTaskToProject)

    addTaskInputs.forEach(input => {
        input.value = ""
    }
    )

    //On submit, take the values and pass them on
    




    
    addTaskDiv.classList.remove("hidden");
    }
    
    export default addTask;