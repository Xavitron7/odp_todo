const addTask = () => {
    let addTaskDiv = document.querySelector("#add-task-div");
    let addTaskInputs = document.querySelectorAll(".task-input");
    addTaskInputs.forEach(input => {
        input.value = ""
    }
    )
    
    addTaskDiv.classList.remove("hidden");
    }
    
    export default addTask;