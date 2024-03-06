import './style.css';
import './fonts.css';

import { generateEmptyToDoHtml } from './templates/emptyToDo';
import { renderToDoCard, generateOverviewToDoHtml, generateToDoCardHtml } from './templates/toDoOverview';
import { myToDos, ToDoCard } from './templates/toDoCard';

function renderEmptyToDoHtml () {
    let content = document.querySelector('.content_container');
    content.innerHTML = '';
    content.innerHTML += generateEmptyToDoHtml();
}

function main() {
    if (myToDos.length < 1) {
        renderEmptyToDoHtml();
    }else{
        console.log("Test");
        renderToDoCard();
    }
    
    console.log(myToDos);
}

main();
 