import{renderEmptyToDoHtml}from"./emptyToDo";import{showToDoInput}from"./modal";function generateToDoCardHtml(t,e,o,n){return`\n        <div class="toDo_card ${n}">\n            <div class="card_content">\n                <div class="top_toDo_card">\n                    <p class="dueDate_card">${o}</p>\n                </div>\n                <p class="title_card">${t}</p>\n                <p class="description_card">${e}</p>\n            </div>\n        </div>\n    `}function toggleNavContent(){document.querySelector(".nav_content").classList.toggle("d_none")}function renderToDoCard(){let t=JSON.parse(localStorage.getItem("data")),e=document.querySelector(".toDo_container");if(e.innerHTML="",null===t)renderEmptyToDoHtml();else for(let o=0;o<t.length;o++)e.innerHTML+=generateToDoCardHtml(t[o].title,t[o].description,t[o].dueDate,t[o].priority)}export{renderToDoCard,toggleNavContent};