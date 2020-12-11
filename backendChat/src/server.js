var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http,{
        transports: ['websocket', 'polling']
      });

//Cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//users Conected
var users = [] 


//Sockets
io.on('connection', socket => {
  console.log('conectado!')

  socket.on("oauth", identify =>{
    users.push({socketId: socket.id, userId: identify.id})
    console.log('Users:')
    console.log(users)
  })

  socket.on("send_message", (msg) => {
    console.log('MENSAJE ENVIADO')
    console.log(msg)
    console.log('USUARIOS:')
    console.log(users)
    let to = users.find(user => user.userId == msg.message.to)
    console.log(to)
    console.log(to.socketId)
    socket.to(to.socketId).emit("new_message", msg);
  });

  socket.on('disconnect', () => {
    console.log('Desconectado')
    users = users.filter(user => user.socketId != socket.id)
    console.log(users)
  });
});


//start Server
http.listen(3001, () => {
  console.log('Listening on *:3001');
});








/*const { send } = require('process');

const express = require('express'),
      cors = require('cors'),
      app = express(),
      port = 3001,
      socket = require('./socket');

var corsOptions = {
    origin: 'http://localhost:8080/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.static(__dirname + '/../public'));


const http = require('http').createServer(app);


http.listen(port, () =>{
    console.log(`Server running http://localhost:${port}`)
})

socket(http);

*/