import mongoose from 'mongoose';

//   Task model
const Task = mongoose.model('Task', {
  task: {
    type: String,
    required: true,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default Task;
