1: Mongoose offers several update methods:
A: Update a specific task by ID

Task.findByIdAndUpdate('task_id', { $set: { completed: true } }, (err, updatedTask) => {
  if (err) {
    console.error('Error updating task:', err);
  } else if (updatedTask) {
    console.log('Task updated:', updatedTask);
  } else {
    console.log('Task not found');
  }
});

//Here, $set is a modifier operator that updates the completed field to true.

B: Update multiple tasks using a query:

Task.updateMany({ completed: false }, { $set: { completed: true } }, (err, updateResult) => {
  if (err) {
    console.error('Error updating tasks:', err);
  } else {
    console.log('Updated tasks:', updateResult.modifiedCount); // Number of tasks updated
  }
});

