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
        const toDo = new ToDoCard('', document.getElementById('input_title').value, document.getElementById('input_description').value, '','');
        toDo.save(toDo);
        toggleModal();
        clearModalInput();
        renderToDoCard();
    });
}

function showToDoInput () {
    let addToDo = document.querySelectorAll('.add_item');
    addToDo.forEach((btnToDo) => {
        btnToDo.addEventListener('click', () => {
            toggleModal();
            });
    }); 
}

submit()
closeModal();
showToDoInput();
export { showToDoInput } 