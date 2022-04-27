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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

export default Task;
