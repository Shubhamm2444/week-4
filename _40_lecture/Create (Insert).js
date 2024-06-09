const newTask = new Task({
  title: 'Finish project report',
  description: 'Analyze data and write conclusions',
});

newTask.save()
  .then(savedTask => {
    console.log('Task created:', savedTask);
  })
  .catch(error => {
    console.error('Error creating task:', error);
  });
