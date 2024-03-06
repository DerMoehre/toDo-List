import { myToDos } from "./toDoCard";


function generateOverviewToDoHtml () {
    console.log("toDo_container");
    return `
    <div class="toDo_container">
        <p>Test</p>
    </div>
    `;
}

function generateToDoCardHtml (title, description) {
    console.log("toDo Card");
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
    let toDoContainer = document.querySelector('.toDo_container');
    toggleNavContent();
    toDoContainer.innerHTML = '';
    for (let i = 0; i < myToDos.length; i++) {
        toDoContainer.innerHTML += generateToDoCardHtml(myToDos[i].title, myToDos[i].description);
    }
}

export { renderToDoCard, generateOverviewToDoHtml, generateToDoCardHtml }