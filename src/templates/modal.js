
function generateNewToDoModalHtml () {
    return `
        <div class="modal">
            <fieldset>
                    <label for="input_title">Title</label>
                    <input type="text" id="input_title" name="input_title" pattern="^[a-zA-Z]+$">

                    <label for="input_author">Author</label>
                    <input type="text" id="input_author" name="input_author" pattern="^[a-zA-Z]+$">

                    <label for="input_page">Pages</label>
                    <input type="number" id="input_page" name="input_page" min="1">
                <div class="bottom_modal">
                    <div class="modal_read">
                        <label for="input_read">Read</label>
                        <input type="checkbox" id="input_read" name="input_read" value="on">
                    </div>
                    <div class="modal_control">
                        <button class="btn_submit" type="submit">Submit</button>
                        <button class="btn_remove">Close</button>
                    </div>
                </div>    
            </fieldset>
        </div>
    `;
}

function toggleModal () {
    let modal = document.querySelector('.bg_container');
    modal.classList.toggle('d_none');
}

