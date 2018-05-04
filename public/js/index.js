var socket = io();
socket.on('connect',() => {
  console.log("connected to the server.");
socket.on('newMessage',(message) => {console.log(message)});
});
socket.on('disconnect',() => {console.log("disconnectd from the server.")});
