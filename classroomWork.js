/*
  TODO
    -user should be able to view all tasks
    -able to add a to-do item to the list
    -should be able to mark a task complete
    -remove tasks by clicking
    -page should not be completeely uglyy
*/

let userInput = document.querySelector('#userText');
let button = document.querySelector('#userSubBtn');
let taskList = document.querySelector('#taskList');
let taskCounter = 1;
let tasks = [];

function grabUserInput() {
  if(!(userInput.value == '')) {
    tasks.push(userInput.value);
    createTaskDiv(userInput.value);
  } else alert('insert text into field');
}

function createTaskDiv(inputValue) {
  let curId = `task${taskCounter}`
  let newDiv = document.createElement('div');
  let newTask = taskList.appendChild(newDiv);
  newDiv.id = curId;
  taskCounter += 1;
  newTask.append(inputValue);

  newTask.addEventListener('click', () => strikeout(curId));

  cleanUp();
}

function cleanUp() {
  userInput.value = ''
}

function removeTask(n) {
  let task = document.querySelector(`#${n}`);
  taskList.removeChild(task);
}

function strikeout(j) {
  let task = document.querySelector(`#${j}`);
  task.className = "complete";
}

button.addEventListener("click", () => grabUserInput());


