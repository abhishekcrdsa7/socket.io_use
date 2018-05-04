var socket = io();
socket.on('connect',() => {
  console.log("connected to the server.");
socket.on('newMessage',(message) => {console.log("New message received.",message)});
socket.emit('createMessage',{
  to: "abhishek",
  text: "hello"
});
});
socket.on('disconnect',() => {console.log("disconnectd from the server.")});
