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

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];


for (let i = 0; i < savedTodos.length; i++) {
  let newLi = document.createElement("li");
  newLi.innerText = savedTodos[i].task;

  const newBtn = document.createElement('button');
  newBtn.innerText = ' ';

  newLi.appendChild(newBtn);

  newLi.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newLi.isCompleted) {
    newLi.style.textDecoration = "line-through";
  }
  else {
    todoList.appendChild(newLi);
  }
}

event.addEventListener('submit', function(e){
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText=inputEvent.value;

    const newBtn = document.createElement('button');
    newBtn.innerText = ' ';

    newLi.appendChild(newBtn);

    inputEvent.value='';
    todoList.appendChild(newLi);

    savedTodos.push({ task: newLi.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function(e) {

  if (!e.target.isCompleted) {

    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === 'LI'){
        // e.target.classList.toggle('emergent');
        e.target.style.textDecoration = "line-through";
    }

    e.target.isCompleted = true;

  } else {
    e.target.style.textDecoration = "none";
    e.target.isCompleted = false;
  }

  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === e.target.innerText) {
      savedTodos[i].isCompleted = e.target.isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});