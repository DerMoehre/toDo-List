import './style.css';
import './fonts.css';

import { renderEmptyToDoHtml } from './templates/emptyToDo';
import { renderToDoCard, generateOverviewToDoHtml, generateToDoCardHtml } from './templates/toDoOverview';
import { myToDos, ToDoCard } from './templates/toDoCard';



function main() {
    if (myToDos.length < 1) {
        renderEmptyToDoHtml();
    }else{
        console.log("Test");
        renderToDoCard();
    }
    
}

main();
 