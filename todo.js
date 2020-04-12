// for the title "My Todo List"
function randomRGB(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

const letters = document.querySelectorAll('.letter');

setInterval(function(){
    for (let letter of letters){
        letter.style.color=randomRGB();
    }
}, 1000)

// for the input
const event = document.querySelector('#addEvent');
const inputEvent = document.querySelector('#inputEvent');
const todoList = document.querySelector('#todoList');

todoList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === 'LI'){
        // e.target.classList.toggle('emergent');
        e.target.style.textDecoration = "line-through";
    }
});

event.addEventListener('submit', function(e){
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText=inputEvent.value;

    const newBtn = document.createElement('button');
    newBtn.innerText = 'delete';

    newLi.appendChild(newBtn);

    inputEvent.value='';
    todoList.appendChild(newLi);
});