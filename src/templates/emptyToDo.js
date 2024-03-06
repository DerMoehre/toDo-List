

function generateEmptyToDoHtml () {
    return `
    <div class="empty_toDo">
        <button class="nav_button large" id="nav_button_addItem">Add ToDo</button>
        <button class="nav_button large" id="nav_button_addProject">Add Project</button>
    </div>
    `
}

export { generateEmptyToDoHtml }