1:You can use various methods to find tasks:
A: Find all tasks:
Task.find({}, (err, tasks) => { // `{}` matches all documents
  if (err) {
    console.error('Error fetching tasks:', err);
  } else {
    console.log('All tasks:', tasks);
  }
});

B: Find a specific task by ID:
Task.findById('task_id', (err, task) => { // Replace `task_id` with actual ID
  if (err) {
    console.error('Error finding task:', err);
  } else if (task) {
    console.log('Found task:', task);
  } else {
    console.log('Task not found');
  }
});
