import './style.css';
import './fonts.css';

import { renderEmptyToDoHtml } from './templates/emptyToDo';
import { renderToDoCard, toggleNavContent } from './templates/toDoOverview';
import { myToDos } from './templates/toDoCard';


function main() {
    if (myToDos.length < 1) {
        renderEmptyToDoHtml();
    }else{
        toggleNavContent();
        renderToDoCard();
    }
    
}

main();
 