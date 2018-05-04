const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) => {console.log('New Connection');

socket.emit('newMessage',{
  from: "abhishek",
  text: "Hi my name is abhishek",
  time: new Date()
});

socket.on('createMessage',(message) => {console.log({...message,createdAt: new Date()})})
socket.on('disconnect',() => {console.log("client disconnectd")});

})


server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});