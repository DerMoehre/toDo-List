import { renderEmptyToDoHtml } from "./emptyToDo";
import { showToDoInput } from "./modal";

function generateToDoCardHtml (title, description, dueDate, important) {
    return `
        <div class="toDo_card ${important}">
            <div class="card_content">
                <div class="top_toDo_card">
                    <p class="dueDate_card">${dueDate}</p>
                </div>
                <p class="title_card">${title}</p>
                <p class="description_card">${description}</p>
            </div>
        </div>
    `;
}

function toggleNavContent () {
    let navContent = document.querySelector('.nav_content');
    navContent.classList.toggle('d_none');
}

function renderToDoCard () { 
    let currentToDos = JSON.parse(localStorage.getItem('data'));
    let toDoContainer = document.querySelector('.toDo_container');
    toDoContainer.innerHTML = '';
    if (currentToDos === null) {
        renderEmptyToDoHtml();
    } else {
        for (let i = 0; i < currentToDos.length; i++) {
            toDoContainer.innerHTML += generateToDoCardHtml(currentToDos[i].title, currentToDos[i].description, currentToDos[i].dueDate, currentToDos[i].priority);
        }
    }
}

export { renderToDoCard, toggleNavContent }