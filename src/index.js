import './style.css';
import './fonts.css';

import { renderEmptyToDoHtml } from './templates/emptyToDo';
import { renderToDoCard, toggleNavContent } from './templates/toDoOverview';
import { myToDos, ToDoCard } from './templates/toDoCard';


function main() {
    if (JSON.parse(localStorage.getItem('data')) === null) {
        renderEmptyToDoHtml();
    }else{
        toggleNavContent();
        renderToDoCard();
    }
    
}

main();
 