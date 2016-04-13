var tasks = [
  {title: "Eat Panera with Zack", completed: true},
  {title: "Walk the dog", completed: false},
  {title: "Create a JavaScript App", completed: false}
];

function addTask(newTask) {
  tasks.push({title: newTask, completed: false});
  updateView();
}

function toggleTaskCompleted() {
  var completed = $(this).attr("completed");
  completed = !completed
  $(this).attr("completed", completed);
}

function updateView() {
// reference the "ul" element in our HTML
  var taskListDiv = document.getElementById("taskList");
  taskListDiv.innerHTML = "";

// for each task I need to create a "li" element
// in each "li" element I want to display the task
// then, I want to add the task to the task list
  for (var i = 0; i < tasks.length; i++) {
    var individualTask = document.createElement("li");
    individualTask.innerHTML = tasks[i].title;
    individualTask.setAttribute("completed", tasks[i].completed);
    individualTask.onclick = toggleTaskCompleted;
    taskListDiv.appendChild(individualTask);
  }
}

updateView();
