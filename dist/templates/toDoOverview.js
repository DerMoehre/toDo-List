import{myToDos}from"./toDoCard";function generateOverviewToDoHtml(){return console.log("toDo_container"),'\n    <div class="toDo_container">\n        \n    </div>\n    '}function generateToDoCardHtml(o,e){return console.log("toDo Card"),`\n        <div class="toDo_card">\n            <div class="top_toDo_card"></div>\n            <div class="card_content">\n                <p class="title_card">${o}</p>\n                <p class="description_card">${e}</p>\n            </div>\n        </div>\n    `}function renderToDoCard(){console.log(myToDos[0].title);let o=document.querySelector(".content_container");o.innerHTML="",o.innerHTML+=generateOverviewToDoHtml();let e=document.querySelector(".toDo_container");for(let o=0;o<myToDos.length;o++)console.log("for"),e.innerHTML+=generateToDoCardHtml(myToDos[o].title,myToDos[o].description)}export{renderToDoCard,generateOverviewToDoHtml,generateToDoCardHtml};