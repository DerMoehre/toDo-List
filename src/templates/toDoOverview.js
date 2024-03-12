import { renderEmptyToDoHtml } from "./emptyToDo";
import { showToDoInput } from "./modal";

function toggleActive (checkbox, index, currentToDos) {
    if (checkbox.checked == true) {
        currentToDos[index].status = "checked";
        currentToDos.push(currentToDos.splice(index, 1)[0]);
        localStorage.setItem('data', JSON.stringify(currentToDos));
        renderToDoCard();
    } else {
        currentToDos[index].status = "";
        let current = currentToDos[index];
        currentToDos.splice(index, 1);
        currentToDos.unshift(current);
        localStorage.setItem('data', JSON.stringify(currentToDos));
        renderToDoCard();
    }
}

function renderToDoCard () { 
    let currentToDos = JSON.parse(localStorage.getItem('data'));
    let toDoContainer = document.querySelector('.toDo_container');
    toDoContainer.innerHTML = '';
    if (currentToDos === null) {
        renderEmptyToDoHtml();
    } else {
        for (let i = 0; i < currentToDos.length; i++) {
            toDoContainer.innerHTML += generateToDoCardHtml(i, currentToDos[i].title, currentToDos[i].description, currentToDos[i].dueDate, currentToDos[i].priority, currentToDos[i].status);
        }
        let checkboxes = document.querySelectorAll('.toDo_card input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('change', () => {
                toggleActive(checkbox, index, currentToDos);
            });
        });
    }
}

function generateToDoCardHtml (index, title, description, dueDate, important, status) {
    return `
        <div class="toDo_card ${important} ${status}">
            <div class="card_content">
                <div class="top_toDo_card">
                    <input type="checkbox" id="status_card" value="checked" ${status}>
                    <p class="dueDate_card">${dueDate}</p>
                </div>
                <p class="title_card">${title}</p>
                <p class="description_card">${description}</p>
            </div>
        </div>
    `;
}

showToDoInput();
export { renderToDoCard, toggleActive }