const renderAllTasks = () => {
        let taskList = document.querySelector("#task-list");

        let allProjects = JSON.parse(localStorage.getItem("project-list"));

        let allTasks = [];

        //Going into each project's tasks and pushing the tasks into a new, separate array

        allProjects.forEach(project => {
                let projectTasks = project.tasks;
                
                for (let task of projectTasks) {
                        allTasks.push(task)

                }
                //console.log(allTasks)


        })
        



        allTasks.forEach(taskObject =>  {

                //console.log(taskObject)

                
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
                
                taskTitle.innerHTML = taskObject.title
                taskDesc.innerHTML = taskObject.description
                taskDate.innerHTML = taskObject.date
                taskPrio.innerHTML = taskObject.priority
        
                remButton.innerHTML = "X"
        
                //Adding classes
                taskDiv.classList.add("task");
                taskTitle.classList.add("task-title")
                taskDesc.classList.add("task-desc")
                taskDate.classList.add("due-date")
                taskPrio.classList.add("priority")
                taskInfo.classList.add("task-info")
                taskPrioDiv.classList.add("task-priority")
                remButton.classList.add("btn-remove")
                remButton.classList.add("btn-task")
                remButton.classList.add("btn");
                remButton.style.visibility = "hidden";
        
                if (taskObject.priority === "high") {taskPrio.classList.add("pr-high") }
                else if (taskObject.priority === "medium") {taskPrio.classList.add("pr-medium") }
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

        
 


}

export default renderAllTasks