const socket = io();

// Elements
const messageForm = document.querySelector('form');
const messageInput = document.querySelector('input');
const messageButton = document.querySelector('#send-message');
const locationButton = document.querySelector('#send-location');
const messages = document.querySelector('#messages');
const roomTitle = document.querySelector('#room-title');
const userList = document.querySelector('#user-list');

// Options
const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true });

// autoscroll function
const autoscroll = () => {
  const newMessage = messages.lastElementChild;
  const newMessageStyles = getComputedStyle(newMessage);
  const newMessageMargin = parseInt(newMessageStyles.marginBottom);
  const newMessageHeight = newMessage.offsetHeight + newMessageMargin;
  const visibleHeight = messages.offsetHeight;
  const containerHeight = messages.scrollHeight;
  const scrollOffset = messages.scrollTop + visibleHeight;

  if (containerHeight - newMessageHeight <= scrollOffset) {
    messages.scrollTop = messages.scrollHeight;
  }
};

// populate list of users in room
socket.on('sendUsers', (users) => {
  roomTitle.textContent = users[0].room;
  userList.innerHTML = '';
  users.forEach((user) => {
    userList.insertAdjacentHTML('beforeend', `<li>${user.username}</li>`);
  });
});

// listen for messages
socket.on('message', ({ username, text, createdAt }) => {
  const html = `<div class="message"><p><span class="message__name">${username}</span><span class="message__meta">${moment(
    createdAt
  ).format('h:mm A')}</span></p><p>${text}</p></div>`;
  messages.insertAdjacentHTML('beforeend', html);
  autoscroll();
});
socket.on('locationMessage', ({ username, url, createdAt }) => {
  const html = `<div class="message"><p><span class="message__name">${username}</span><span class="message__meta">${moment(
    createdAt
  ).format('h:mm A')}</span></p><p><a href="${url}" target="_blank">${username}'s Location</a></p></div>`;
  messages.insertAdjacentHTML('beforeend', html);
  autoscroll();
});

// on submit of form, send message to server
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  messageButton.setAttribute('disabled', 'true');
  const message = messageInput.value;
  socket.emit('sendMessage', message, (message) => {
    messageButton.removeAttribute('disabled');
    messageInput.value = '';
    messageInput.focus();
    console.log('the message was delivered', message);
  });
});

// send location to server when button is clicked
locationButton.addEventListener('click', () => {
  locationButton.setAttribute('disabled', 'true');
  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your browser.');
  }
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    socket.emit('sendLocation', { latitude: coords.latitude, longitude: coords.longitude }, () => {
      locationButton.removeAttribute('disabled');
      console.log('Your location was shared.');
    });
  });
});

// send username and room
socket.emit('join', { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = '/';
  }
});
