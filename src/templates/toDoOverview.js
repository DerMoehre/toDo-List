import { myToDos } from "./toDoCard";
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
    if (myToDos.length === 1) {
        toggleNavContent();
    }
    let toDoContainer = document.querySelector('.toDo_container');
    toDoContainer.innerHTML = '';
    for (let i = 0; i < myToDos.length; i++) {
        toDoContainer.innerHTML += generateToDoCardHtml(myToDos[i].title, myToDos[i].description);
    }
}

showToDoInput();

export { renderToDoCard, toggleNavContent }