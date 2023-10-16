function newItem() {
    // Create a new list item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
  
    // Check if the input is empty
    if (inputValue === '') {
      alert('You must write something!');
    } else {
      // Add the task to the list
      li.append(inputValue);
  
      // Function to toggle task completion on double-click
      function toggleStrike() {
        li.toggleClass('strike');
      }
      li.on('dblclick', toggleStrike);
  
      // Add a delete button "X"
      let deleteButton = $('<button></button>');
      deleteButton.append(document.createTextNode('X'));
      li.append(deleteButton);
  
      // Handle task deletion
      deleteButton.on('click', deleteTask);
  
      // Add a class to mark tasks for deletion
      function deleteTask() {
        li.addClass('delete');
      }
  
      // Enable task reordering
      $('#list').sortable();
  
      // Append the task to the list
      $('#list').append(li);
    }
  
    // Clear the input field
    $('#input').val('');
  }
  
  
  