//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event Listener

// todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click',deleteCheck)

//Functions
function addTodo(event){
    //Prevent form
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //Create li
    const  newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //Check Mark Button
    const completeButton = document.createElement('button')
    completeButton.innerHTML = '<i class="fas fa-check"><i/>'
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton)
    //Check Trash Button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"><i/>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    //Append to list
    todoList.appendChild(todoDiv)
    //Clear Input Value
    todoInput.value = ''

}


function deleteCheck(e){
    const item = e.target;

    //Delete Todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
        todo.remove()
        })
    }

    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}



