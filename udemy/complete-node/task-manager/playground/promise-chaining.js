import '../src/db/mongoose.js';
import User from '../src/models/user.js';

// User.findByIdAndUpdate('626062430e6ff1a775dc305f', { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('626062430e6ff1a775dc305f', 2)
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
