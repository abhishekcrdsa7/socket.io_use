const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const {generateMessage} = require('./utils/message');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) => {console.log('New Connection');

socket.emit('newMessage',generateMessage('Admin','Welcome to the chat room.'));
socket.broadcast.emit('newMessage',generateMessage('Admin','new user connected to the chat room.'));

socket.on('createMessage',(message,callback) => {
  let {from,text} = message;
  io.emit('newMessage',generateMessage(from,text));
  callback('this is from the server');
})
socket.on('disconnect',() => {console.log("client disconnectd")});

})


server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
