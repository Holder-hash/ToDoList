const addInp = document.getElementById('addInp');
const addBtn = document.getElementById('addBtn');
const todoElContain = document.querySelector('.todo-el-contain');

let todoSum = todoElContain.childElementCount;
addBtn.addEventListener('click', addElementFunc);

function addElementFunc() {
    let todoSum = todoElContain.childElementCount;
    todosAllSpan.innerHTML = todoSum + 1;
    console.log(todoElContain.childElementCount)
    emtySpan.style = 'display: none'
    let todoElement = document.createElement('div');
    // todoElement.classList.toggle('todoElementStyle');
    todoElement.setAttribute('class', 'todoEl')

    let todoElementDiscraption = document.createElement('h2');
    if (addInp.value) {
        todoElementDiscraption.innerHTML = addInp.value;
    }
    else {
        todoElementDiscraption.innerHTML = 'Задача №' + (todoSum + 1);
    }

    let delBtn = document.createElement('button');
    delBtn.innerHTML = 'X';
    delBtn.setAttribute('id', 'elDeleteBtn');
    delBtn.addEventListener('click', delElementFunc);

    todoElement.appendChild(todoElementDiscraption);
    todoElement.appendChild(delBtn);
    todoElContain.appendChild(todoElement);
    addInp.value = '';
}

function delElementFunc(e) {
    e.target.parentElement.remove();
    todosAllSpan.innerHTML = todoElContain.childElementCount;
    if (todoSum == 0) {
        emtySpan.style = 'display: block';
    }

}

 document.addEventListener('keyup', (e) => {
    if (e.key == 'n' || e.key == 'N') {
        addInp.focus();
    }
    if (e.key == 'Enter') {
        addBtn.classList.toggle('btnAnimationPressedToggle')
        addElementFunc();
        setTimeout( () => {
            addBtn.classList.remove('btnAnimationPressedToggle')
        }, 100)
        
    }
 })

 const resetBtn = document.querySelector('.material-symbols-outlined');
 let todoEl = document.querySelectorAll('.todoEl')
 resetBtn.addEventListener('click', resetFunc)

 function resetFunc() {
    todosAllSpan.innerHTML = todoSum;
    emtySpan.style = 'display: block';
    while (todoElContain.firstChild) {
        todoElContain.removeChild(todoElContain.firstChild);
    }
 }