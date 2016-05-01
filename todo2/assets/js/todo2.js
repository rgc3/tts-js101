var firebaseReference = new Firebase("https://shining-heat-2879.firebaseio.com/tasks/");


var tasks = [];
firebaseReference.on("value", function(value){
  tasks = value.val();
  updateView();
});

function addTask(taskThatImGoingToAdd) {
  // add new tasks to tasks array
  tasks.push({
    title: taskThatImGoingToAdd,
    completed: false
  });
  // clear out the input box
  document.getElementById("newTask").value = "";
  firebaseReference.set(tasks);
  // replacing the old tasks array in firebase with our new tasks array in our todo app
  updateView();
}

function toggleTaskCompleted(el) {
  var taskIndex = $(el).attr('taskId');
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  firebaseReference.set(tasks);
  updateView();
}

function removeTask(el) {
  var taskIndex = $(el).attr('taskId');
  tasks.splice(taskIndex, 1);
  firebaseReference.set(tasks);
  updateView();
}

function updateView() {
  // reference the "ul" element in our HTML
  var taskListDiv = document.getElementById('taskList');
  taskListDiv.innerHTML = '';
  // for each task, I need to create a "li" element
  // in each "li" element, I want to display the task
  // then, I want to add the task to the task list
  tasks.forEach(function(task, index) {
    // creating an empty li element, assigning the value to individualTask
    var individualTask = document.createElement('li'); // creates empty <li>
    // taking the title property of each task, putting the text into the list item
    // <li>task text</li>
    individualTask.innerHTML = task.title;
    // as I'm iterating through each task, each task has a property called completed (boolean)
    // <li completed="true">Task Text</li>
    individualTask.setAttribute('completed', task.completed); //(name of attribute, value)
    individualTask.setAttribute('taskId', index); //setting taskid = index
    individualTask.setAttribute('onclick', 'toggleTaskCompleted(this)');
    individualTask.setAttribute('ondblclick', 'removeTask(this)');
    taskListDiv.appendChild(individualTask); // put individualTask inside of the taskListDiv
  });
  $('li').on('swipe', function(el) {
    var taskIndex = $(this).attr('taskId');
    var task = tasks.splice(taskIndex, 1);
    tasks.unshift(task[0]);
    updateView();
  });
}

updateView();
