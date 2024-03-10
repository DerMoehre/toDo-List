import { showToDoInput } from "./modal";

function generateEmptyToDoHtml () {
    return `
    <div class="empty_toDo">
        <button class="nav_button large add_item">Add ToDo</button>
        <button class="nav_button large" id="nav_button_addProject">Add Project</button>
    </div>
    `
}

function renderEmptyToDoHtml () {
    let content = document.querySelector('.toDo_container');
    content.innerHTML = '';
    content.innerHTML += generateEmptyToDoHtml();
    showToDoInput();
}

export { renderEmptyToDoHtml }