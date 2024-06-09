1: Delete a specific task by ID:

Task.findByIdAndDelete('task_id', (err, deletedTask) => {
  if (err) {
    console.error('Error deleting task:', err);
  } else if (deletedTask) {
    console.log('Task deleted:', deletedTask);
  } else {
    console.log('Task not found');
  }
});


2: Delete multiple tasks using a query:

Task.deleteMany({ completed: true }, (err, deleteResult) => {
  if (err) {
    console.error('Error deleting tasks:', err);
  } else {
    console.log('Deleted tasks:', deleteResult.deletedCount); // Number of tasks deleted
  }
});

// Remember to handle errors appropriately in each operation. For more details and advanced usage, refer to the official Mongoose documentation: https://mongoosejs.com/docs/api.html.
