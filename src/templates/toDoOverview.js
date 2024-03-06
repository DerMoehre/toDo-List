import { myToDos } from "./toDoCard";


function generateOverviewToDoHtml () {
    console.log("toDo_container");
    return `
    <div class="toDo_container">
        
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

function renderToDoCard () {
    console.log(myToDos[0].title);
    let content = document.querySelector('.content_container');
    content.innerHTML = '';
    content.innerHTML += generateOverviewToDoHtml();
    let toDoContainer = document.querySelector('.toDo_container');
    for (let i = 0; i < myToDos.length; i++) {
        console.log("for")
        toDoContainer.innerHTML += generateToDoCardHtml(myToDos[i].title, myToDos[i].description);
    }
}

export { renderToDoCard, generateOverviewToDoHtml, generateToDoCardHtml }