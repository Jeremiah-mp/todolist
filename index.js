const todoArray = []
const add = document.getElementById("add")
const input = document.getElementById("type-todo")
const list = document.getElementById("todo-list")

add.addEventListener("click", function(){

    const text = input.value
    if(text !== ""){
        addTodo(text)
        input.value = ''
        input.focus()
    }else{
        alert("input a valid string")
    }
})

function addTodo(text){
    const todo = {
        text,
        checked: false,
        id: Date.now()
    }

    todoArray.push(todo)
    displayTodo(todo)
}

function displayTodo(todo){
    const todoItem = document.createElement("li")
    const checkBox = document.createElement("input")
    // todoItem.textContent = todo.text
    todoItem.innerHTML = "<span><input type ='checkbox' id =" + todo.id + "><span>" + todo.text
    list.appendChild(todoItem)
    console.log(todoItem)
}

function deleteTodo(){

}

function markAsComplete(){
    
}

function editTodo(){

}