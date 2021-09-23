const taskInput = document.querySelector('#task');
const addButton = document.querySelector('#add');
const clearButton = document.querySelector('#clear');
const taskList = document.querySelector('#taskList');

addButton.addEventListener('click', function(){
    var task = taskInput.value;

if (task.trim()) {
    var newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
    var newItem = document.createElement('li');
    var taskText = document.createTextNode(task);
    taskText.className = 'taskText'
    newItem.appendChild(taskText);
    newDiv.appendChild(newItem);

//COMPLETE BUTTON

    var completeButton = document.createElement('button')
    completeButton.innerHTML = '<i  class="fas fa-check"></i>';
    completeButton.classList = 'complete';
    completeButton.addEventListener('click', checkTask)
     newDiv.appendChild(completeButton);


//TRASH BUTTON
    var removeButton = document.createElement('button')
    removeButton.innerHTML = '<i  class="fas fa-trash"></i>';
    removeButton.classList = 'remove';
    removeButton.addEventListener('click', removeTask)
     newDiv.appendChild(removeButton);
      

      //APPEND TO LIST
    taskList.appendChild(newDiv);
    taskInput.value = " ";



} else {
    const error = document.getElementById('error').textContent = 'input an item';
}

clearButton.addEventListener('click', function(){
    taskList.innerHTML = " ";
    error.textContent = ' '
})

function removeTask(e) {
    var taskItem = e.target.parentElement;
        taskItem.classList.toggle('animation')
        taskItem.addEventListener('transitionend', function(){
            taskItem.remove();
        })
    }
    function checkTask(e) {
        var taskItem = e.target.parentElement;
            taskItem.classList.toggle('completed');
        }

})