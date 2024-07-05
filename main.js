let taskInput = document.getElementById('todoInput')
let taskList = document.getElementById('taskList')


function addTask(){
    const taskText = taskInput.value
    console.log(taskText)
    if(taskText!= ''){
        const li= document.createElement('li')
        li.textContent = taskText
        taskList.appendChild(li)
        li.addEventListener('click', completedTask)
        taskInput.value = ''
        const deletBtn = document.createElement('button')
        deletBtn.textContent = 'Delt'
        deletBtn.classList.add('del-btn')
        deletBtn.addEventListener('click' , taskDeletion)
        li.appendChild(deletBtn)
        saveTask()
    }
    

}

function completedTask(event){
    const task = event.target
    task.classList.toggle("completed-tasks");
}



function taskDeletion(event){
    const task = event.target.parentElement
    taskList.removeChild(task)

}


function saveTask(){
    const task= []
    const taskItems = taskList.getElementsByTagName('li')
    for (let i =0 ; i<taskItems.length ; i++){
        task.push(taskItems[i].textContent)
    }
    localStorage.setItem('tasks' , JSON.stringify(tasks))
}

function loadTaks(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if(tasks){
        tasks.forEach(taskText => {
            const li = document.createElement('li')
            li.textContent = taskText
            taskList.appendChild(li)
            li.addEventListener('click', completedTask)
            taskInput.value = ''
            const deletBtn = document.createElement('button')
            deletBtn.textContent = 'Delt'
            deletBtn.classList.add('del-btn')
            deletBtn.addEventListener('click' , taskDeletion)
            li.appendChild(deletBtn)
        });
    }
}