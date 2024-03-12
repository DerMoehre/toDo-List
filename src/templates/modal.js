import { ToDoCard } from "./toDoCard";
import { renderToDoCard } from "./toDoOverview";


function toggleModal () {
    let modal = document.querySelector('.bg_container');
    modal.classList.toggle('d_none');
}

function clearModalInput () {
    document.getElementById('input_title').value = '';
    document.getElementById('input_description').value = '';
}

function closeModal () {
    let close = document.querySelector('.btn_remove');
    close.addEventListener('click', () => {
        toggleModal();
        clearModalInput();
    });
}

function submit () {
    let submit = document.querySelector('.btn_submit');
    submit.addEventListener('click', () => {
        const toDo = new ToDoCard('', document.getElementById('input_title').value, document.getElementById('input_description').value, document.getElementById('input_date').value, document.getElementById('input_selection').value, "");
        toDo.save(toDo);
        toggleModal();
        clearModalInput();
        renderToDoCard();
    });
}

function showToDoInput () {
    let addToDo = document.querySelector('.add_item');
    addToDo.addEventListener('click', () => {
        toggleModal();
    }); 
}

submit()
closeModal();
export { showToDoInput } 