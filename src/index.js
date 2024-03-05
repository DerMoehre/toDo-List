import './style.css';

import { generateEmptyToDoHtml } from './templates/emptyToDo';

function renderEmptyToDoHtml () {
    let content = document.querySelector('.content_container');
    content.innerHTML = '';
    content.innerHTML += generateEmptyToDoHtml();
}

function main() {
    renderEmptyToDoHtml();
}

main();