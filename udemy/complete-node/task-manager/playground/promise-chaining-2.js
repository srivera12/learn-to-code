import '../src/db/mongoose.js';
import Task from '../src/models/task.js';

// Task.findByIdAndDelete('526055fff0f261d57c551b06')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ isCompleted: false });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ isCompleted: false });
  return count;
};

deleteTaskAndCount('6260561f88990b83b0cf8721')
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
