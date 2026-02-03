console.log('My code is running');
//create variable that would hold to-do items
let btnSubmit = document.querySelector('#submitForm');




// add finction to tkae in string as input and add to to-do list
const taskCreator = (test) => {
  test.preventDefault();
  let taskFormTitle = document.querySelector('#taskTitle');
  let taskFormDesc = document.querySelector('#taskDesc');
  if (!(taskFormTitle.value == '') && !(taskFormDesc.value == '') ) {
    let titleCreate = document.createTextNode(taskFormTitle.value);
    let descCreate = document.createTextNode(taskFormDesc.value);
    let h3Title = document.createElement('h3');
    let pDesc = document.createElement('p');
    let taskBlockCreate = document.createElement('div')
    let container = document.querySelector('#taskList');
    h3Title.appendChild(titleCreate);
    pDesc.appendChild(descCreate);
    taskBlockCreate.appendChild(h3Title);
    taskBlockCreate.appendChild(pDesc);
    taskBlockCreate.classList.add("taskBlock");
    container.insertBefore((taskBlockCreate), container.childNodes[0])
    
    taskFormTitle.value = '';
    taskFormDesc.value = '';


  } else {
    alert('Please fill out both title and descriptor before proceeding');
  }
  
}
btnSubmit.addEventListener("click", taskCreator)




// add event handeler to populate an html element with your to-do list when user clicks on appropriate button.

