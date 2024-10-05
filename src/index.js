// Wait for the DOM to load before executing any code
document.addEventListener("DOMContentLoaded", () => {
  
  // Prevent the form from submitting and refreshing the page
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stops the default behavior of form submission

    // Get references to the input box and task list
    const inputBox = document.getElementById("input-box");
    const taskList = document.getElementById("tasks");

    // Function to add a new task
    function newTask() {
      // Check if the input box is empty
      if (inputBox.value === '') {
        alert("Please enter a task!");  // Alert if no task is entered
      } else {
        // Create a new list item (li) element
        const li = document.createElement("li");
        
        // Set the content of the new list item to the input value
        li.innerHTML = inputBox.value;

        // Add the new task (li) with the delete button to the task list (ul)
        taskList.appendChild(li);

        // Create a delete button for the task
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "❌";  // You can use an icon or just 'X'
        deleteBtn.style.marginLeft = "10px";  // Add a little space between task and button

        // Append the delete button to the task (li)
        li.appendChild(deleteBtn);

        // Clear the input box after adding the task
        inputBox.value = "";

        // Add an event listener to the delete button to remove the task when clicked
        deleteBtn.addEventListener("click", function() {
          taskList.removeChild(li);  // Remove the task from the list
        });
      }
    }

    // Call the newTask function when the form is submitted
    newTask();
  });
});
