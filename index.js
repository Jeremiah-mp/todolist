//variables
const addButton = document.querySelector("#add-item")
const todoItems = document.getElementById("todo-list")
const addItemDiv = document.querySelector(".add-item")

//event listeners
//event listener for enter button
document.addEventListener("keydown", function(event){
    addTodo(event)
})

//event listener for add button
addButton.addEventListener("click", function(event){
    addTodo(event)
})

// addButton.addEventListener("click", addTodo)

//event listener to mark todo as complete
todoItems.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        const itemKey = e.target.id
        deleteTodo(itemKey)
    }else if(e.target.tagName === "LI"){
        const itemKey = e.target.id
        console.log(itemKey);
        markAsComplete(itemKey)
    }
})


//functions
//function to add delete button to all list itmes
function addDeletButton() {
    const todoItems = document.querySelectorAll("li")
    for(let i = 0 ; i < todoItems.length ; i++){
        const deleteButton = document.createElement("button")
        const text = document.createTextNode("x")
        deleteButton.className = "delete"
        deleteButton.append(text)
        todoItems[i].append(deleteButton)
    }   
}

//calls the add delete button
addDeletButton()

//function to add new todo item
function addTodo(event) {

    //checks to know what type of event occured
    if(event.type === "click"){
        const todoItems = document.getElementById("todo-list")
        const input = document.getElementById("type-todo")
        const newTodo = document.createElement("li")
        
        if(input.value == ''){
            alert("input cannot be empty !")
        }else{
            const text = document.createTextNode(input.value)
            newTodo.append(text)
            newTodo.setAttribute("id", Date.now())
            todoItems.append(newTodo)
            console.log(newTodo)
            input.value = ''
            input.focus()
        }
    
        const deleteButton = document.createElement("button")
        const text = document.createTextNode("x")
        deleteButton.className = "delete"
        deleteButton.append(text)
        newTodo.append(deleteButton)
        
    }
    else if(event.type === "keydown"){
        switch (event.key) {
            case 'Enter':
                const ul = document.getElementById("todo-list")
                const input = document.getElementById("type-todo")
                const newTodo = document.createElement("li")
                if(input.value == ''){
                    alert("invalid input !")
                }else{
                    const text = document.createTextNode(input.value)
                    newTodo.append(text)
                    newTodo.setAttribute("id", Date.now())
                    ul.append(newTodo)
                    console.log(newTodo)
                    input.value = ''
                    input.focus()
                }
            
                const deleteButton = document.createElement("button")
                const text = document.createTextNode("x")
                deleteButton.className = "delete"
                deleteButton.append(text)
                newTodo.append(deleteButton)
                break;
            default:
                break;
        }
    }
}

//function to mark todo as complete
function markAsComplete(key) {
    const todoItem = document.querySelectorAll("li")
    let index = -1
    for (let i = 0; i < todoItem.length; i++) {
        if (todoItem[i].id === key) {
            index = i;
            if(todoItem[index].classList.contains("line-through") === false){
                todoItem[index].classList.add("line-through")
            }else{
                todoItem[index].classList.remove("line-through")
            }
        }
    }   
}

//function to delete todo
function deleteTodo(key){
    const todoItem = document.querySelectorAll("li")
    let index = -1
    for (let i = 0; i < todoItem.length; i++) {
        if (todoItem[i].id === key) {
          index = i;
          todoItem[index].remove()
          break;
        }
    }    
}

function availaibleTodo(){
    const todoItem = document.querySelectorAll("li")
    let count = 0
    for(let i = 0 ; i < todoItem.length ; i ++){
        if(todoItem[i].classList.contains("line-through") === false){
            count ++
        }else{
            count += 0
        }
    }

    console.log(count)
}
