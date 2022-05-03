const users = [];

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room) {
    return {
      error: 'Username and room required.',
    };
  }

  const existingUser = users.find((user) => user.room === room && user.username === username);
  if (existingUser) {
    return {
      error: 'Username is already taken.',
    };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const userIdx = users.findIndex((user) => user.id === id);

  if (userIdx !== -1) {
    return users.splice(userIdx, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = { users, addUser, removeUser, getUser, getUsersInRoom };
