import { renderEmptyToDoHtml } from "./emptyToDo";
import { showToDoInput } from "./modal";

function generateToDoCardHtml (title, description) {
    return `
        <div class="toDo_card">
            <div class="top_toDo_card"></div>
            <div class="card_content">
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
            toDoContainer.innerHTML += generateToDoCardHtml(currentToDos[i].title, currentToDos[i].description);
        }
    }
    
}

export { renderToDoCard, toggleNavContent }