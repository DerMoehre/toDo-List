function generateEmptyToDoHtml(){return'\n    <div class="empty_toDo">\n        currently no to dos :)\n    </div>\n    '}function renderEmptyToDoHtml(){let t=document.querySelector(".toDo_container");t.innerHTML="",t.innerHTML+=generateEmptyToDoHtml()}export{renderEmptyToDoHtml};