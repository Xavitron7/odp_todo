import removeTaskFromList from "./removetaskfromlist.js";
import updateTasks from "./updatetasks.js"
//Takes the value of the id, project and desc keys in an object and changes the text of the project info section based on those values
const displayTasks = ({id, project, desc, tasks}) => {
    
    let projectNameDiv = document.querySelector("#project-name");
    let projectDescDiv = document.querySelector("#project-desc");
    let currentProjectID = id;  
    let taskList = document.querySelector("#task-list");

//Display product details
    projectNameDiv.setAttribute("data-key", id);
    projectNameDiv.innerHTML = project;
    projectDescDiv.innerHTML = desc;

    //display all the tasks

    taskList.innerHTML = "";

    tasks.forEach(task => {
        //Divs and buttons
        let taskDiv = document.createElement("article");
        let taskInfo = document.createElement("div");
        let taskPrioDiv = document.createElement("div");
        let remButton = document.createElement("button");

        //p elements

        let taskTitle = document.createElement("p")
        let taskDesc = document.createElement("p")
        let taskDate = document.createElement("p");
        let taskPrio = document.createElement("p");
        
        taskTitle.innerHTML = task.title
        taskDesc.innerHTML = task.description
        taskDate.innerHTML = task.date
        taskPrio.innerHTML = task.priority

        remButton.innerHTML = "X"

        //Adding classes and events
        taskDiv.classList.add("task");
        taskDiv.setAttribute("data-key", task.id)
        taskTitle.classList.add("task-title")
        taskDesc.classList.add("task-desc")
        taskDate.classList.add("due-date")
        taskPrio.classList.add("priority")
        taskInfo.classList.add("task-info")
        taskPrioDiv.classList.add("task-priority")
        remButton.classList.add("btn-remove")
        remButton.classList.add("btn-task")
        remButton.classList.add("btn");
        remButton.addEventListener("click", removeTaskFromList)

        if (task.priority === "high") {taskPrio.classList.add("pr-high") }
        else if (task.priority === "medium") {taskPrio.classList.add("pr-medium") }
        else {taskPrio.classList.add("pr-low")}

        taskInfo.appendChild(taskTitle)
        taskInfo.appendChild(taskDesc)

        taskPrioDiv.appendChild(taskDate)
        taskPrioDiv.appendChild(taskPrio)

        taskDiv.appendChild(taskInfo)
        taskDiv.appendChild(taskPrioDiv)
        taskDiv.appendChild(remButton)



        taskList.appendChild(taskDiv)
    })

    //updateTasks(currentProjectID)

}

export default displayTasks;