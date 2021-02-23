const addTask = (event) => {
    let addTaskDiv = document.querySelector("#add-task-div");
    let addTaskInputs = document.querySelectorAll(".task-input");
    event.preventDefault()
    addTaskInputs.forEach(input => {
        input.value = ""
    }
    )
    
    addTaskDiv.classList.remove("hidden");
    }
    
    export default addTask;