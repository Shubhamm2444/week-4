1:This file defines your Mongoose model for a "Task" document:

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
