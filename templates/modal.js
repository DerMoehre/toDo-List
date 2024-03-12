import{ToDoCard}from"./toDoCard";import{renderToDoCard}from"./toDoOverview";function toggleModal(){document.querySelector(".bg_container").classList.toggle("d_none")}function clearModalInput(){document.getElementById("input_title").value="",document.getElementById("input_description").value=""}function closeModal(){document.querySelector(".btn_remove").addEventListener("click",(()=>{toggleModal(),clearModalInput()}))}function submit(){document.querySelector(".btn_submit").addEventListener("click",(()=>{const e=new ToDoCard("",document.getElementById("input_title").value,document.getElementById("input_description").value,document.getElementById("input_date").value,document.getElementById("input_selection").value);e.save(e),toggleModal(),clearModalInput(),renderToDoCard()}))}function showToDoInput(){document.querySelectorAll(".add_item").forEach((e=>{e.addEventListener("click",(()=>{toggleModal()}))}))}submit(),closeModal(),showToDoInput();export{showToDoInput};