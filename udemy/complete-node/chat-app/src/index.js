const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const { generateMessage, generateLocationMessage } = require('./utils/messages.js');
const { users, addUser, removeUser, getUser, getUsersInRoom } = require('./utils/user.js');

const app = express();
// need to make the http server since io needs it
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

// print a message when a client connects
io.on('connection', (socket) => {
  console.log('new WebSocket connection');

  // listen for joining a room
  socket.on('join', (options, callback) => {
    const { user, error } = addUser({ id: socket.id, ...options });
    if (error) {
      return callback(error);
    }
    socket.join(user.room);

    // sending welcome message
    socket.emit('message', generateMessage('Admin', 'Welcome!'));
    // broadcast when user enters chat
    socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined the chat!`));

    // send list of users in room
    io.to(user.room).emit('sendUsers', getUsersInRoom(user.room));

    callback();
  });

  // listen for message sent from client
  socket.on('sendMessage', (message, callback) => {
    // send to ALL clients in room
    const { username, room } = getUser(socket.id);
    io.to(room).emit('message', generateMessage(username, message));
    // acknowledge the event
    callback('delivered');
  });

  // listen for location being sent
  socket.on('sendLocation', ({ latitude, longitude }, callback) => {
    const { username, room } = getUser(socket.id);
    io.to(room).emit(
      'locationMessage',
      generateLocationMessage(username, `https://www.google.com/maps/@${latitude},${longitude}`)
    );
    callback();
  });

  // broadcast message when a client is disconnected
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left.`));
      // send updated list of users in room
      io.to(user.room).emit('sendUsers', getUsersInRoom(user.room));
    }
  });
});

server.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
