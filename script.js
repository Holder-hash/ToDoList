const addInp = document.getElementById('addInp');
const addBtn = document.getElementById('addBtn');
const todoElContain = document.querySelector('.todo-el-contain');

let todoNum = 0;
addBtn.addEventListener('click', addElementFunc);

function addElementFunc() {
    todoNum++
    todosAllSpan.innerHTML = todoNum
    console.log(todoElContain.childElementCount)
    emtySpan.style = 'display: none'
    let todoElement = document.createElement('div');
    todoElement.classList.toggle('todoElementStyle');

    let todoElementDiscraption = document.createElement('h2');
    if (addInp.value) {
        todoElementDiscraption.innerHTML = addInp.value;
    }
    else {
        todoElementDiscraption.innerHTML = 'Задача №' + todoNum;
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
    todoNum--;
    e.target.parentElement.remove();
    todosAllSpan.innerHTML = todoNum;
    if (todoNum == 0) {
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