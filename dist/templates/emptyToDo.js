function generateEmptyToDoHtml(){return'\n    <div class="empty_toDo">\n        <button class="nav_button large" id="nav_button_addItem">Add ToDo</button>\n        <button class="nav_button large" id="nav_button_addProject">Add Project</button>\n    </div>\n    '}function renderEmptyToDoHtml(){let t=document.querySelector(".toDo_container");t.innerHTML="",t.innerHTML+=generateEmptyToDoHtml()}export{renderEmptyToDoHtml};