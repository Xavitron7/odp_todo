(()=>{"use strict";const e=e=>{let t=document.querySelector("#add-project-div"),d=document.querySelector("#add-task-div");"add-project"===e.target.id?d.classList.contains("hidden")&&(()=>{let e=document.querySelector("#add-project-div");document.querySelectorAll(".project-input").forEach((e=>{e.value=""})),e.classList.remove("hidden")})():"add-task"===e.target.id&&t.classList.contains("hidden")&&(()=>{let e=document.querySelector("#add-task-div");document.querySelectorAll(".task-input").forEach((e=>{e.value=""})),e.classList.remove("hidden")})()},t=e=>{e.target.parentElement.parentElement.parentElement.classList.add("hidden")},d=e=>{let t=JSON.parse(localStorage.getItem("project-list")),d=Number(e.target.parentElement.getAttribute("data-key"));t=t.filter((e=>d!==e.id)),l("project-list",JSON.stringify(t))},r=({id:e,project:t,desc:d})=>{let r=document.querySelector("#project-name"),a=document.querySelector("#project-desc");r.setAttribute("data-key",e),r.innerHTML=t,a.innerHTML=d},a=e=>{let t=document.querySelector("#edit-button"),d=document.querySelector("#add-task");if(null!==e.target.getAttribute("data-key")&&void 0!==e.target.getAttribute("data-key"))if("all"===e.target.getAttribute("data-key"))t.classList.add("hidden"),d.classList.add("hidden"),r({id:"all",project:"All Tasks",desc:"All tasks are listed here"});else{let a=[...JSON.parse(localStorage.getItem("project-list"))].filter((t=>Number(e.target.getAttribute("data-key"))===t.id))[0];r(a),t.classList.contains("hidden")&&t.classList.remove("hidden"),d.classList.contains("hidden")&&d.classList.remove("hidden")}},c=()=>{let e=JSON.parse(localStorage.getItem("project-list"));null!==e&&(e=>{let t=document.querySelector("#project-nav");t.innerHTML="";let r=document.createElement("li");r.classList.add("project-item"),r.setAttribute("data-key","all"),r.addEventListener("click",a);let c=document.createTextNode("All");r.appendChild(c),t.appendChild(r),e.forEach((e=>{let r=document.createElement("li");r.classList.add("project-item"),r.setAttribute("data-key",e.id),r.addEventListener("click",a);let c=document.createTextNode(e.project),l=document.createElement("button"),o=document.createTextNode("X");l.classList.add("btn"),l.classList.add("btn-project"),l.classList.add("btn-remove"),l.appendChild(o),l.addEventListener("click",d),r.appendChild(c),r.appendChild(l),t.appendChild(r)}))})(e)},l=(e,t)=>{localStorage.setItem(e,t),c()};let o=document.querySelector("#add-project"),i=document.querySelector("#proj-div-close"),n=document.querySelector("#add-task"),s=document.querySelector("#task-div-close"),u=document.querySelector("#add-project-form"),m=document.querySelector("#add-task-form");o.addEventListener("click",e),i.addEventListener("click",t),n.addEventListener("click",e),s.addEventListener("click",t),u.addEventListener("submit",(e=>{e.preventDefault();let t=document.querySelector("#project-input-field"),d=document.querySelector("#project-desc-field"),r={id:Date.now(),project:t.value,desc:d.value,tasks:[]},a=JSON.parse(localStorage.getItem("project-list"));null===a&&(a=[]),a.push(r),l("project-list",JSON.stringify(a)),t.value="",d.value=""})),m.addEventListener("submit",(e=>{e.preventDefault(),document.querySelector("#project-name");let t=document.querySelector("#task-title"),d=document.querySelector("#task-description"),r=document.querySelector("#task-date"),a=document.querySelector("#priority");t.value,d.value,r.value,a.value})),c()})();