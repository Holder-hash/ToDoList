const addInp = document.getElementById('addInp');
const addBtn = document.getElementById('addBtn');
const todoElContain = document.querySelector('.todo-el-contain');

let todoNum = 0;
addBtn.addEventListener('click', () => {
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
})

function delElementFunc(e) {
    todoNum--
    e.target.parentElement.remove()
    todosAllSpan.innerHTML = todoNum
    if (todoNum == 0) {
        emtySpan.style = 'display: block'
    }
}