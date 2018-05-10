var socket = io();
socket.on('connect',() => {
  console.log("connected to the server.");
socket.on('newMessage',(message) => {console.log(message)});
});

socket.emit('createMessage',{from: "ashu", text: "this is ashu"},(data) => {
  console.log('got it'+data);
});
socket.on('disconnect',() => {console.log("disconnectd from the server.")});
