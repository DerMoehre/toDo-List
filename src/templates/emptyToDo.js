
function generateEmptyToDoHtml () {
    return `
    <div class="empty_toDo">
        currently no to dos :)
    </div>
    `
}

function renderEmptyToDoHtml () {
    let content = document.querySelector('.toDo_container');
    content.innerHTML = '';
    content.innerHTML += generateEmptyToDoHtml();
}

export { renderEmptyToDoHtml }