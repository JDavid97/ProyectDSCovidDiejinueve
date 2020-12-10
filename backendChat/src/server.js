var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http,{
       
        transports: ['websocket', 'polling']
      });


//yes I do not need Origin for now but for production I will use it.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.get('/', (req, res) => {
  let time = setInterval(() => {
    res.send(JSON.stringify(process.memoryUsage()));
  },100);
});

io.sockets.on('connection', socket => {
    console.log('conectado!')
  socket.on('disconnect', () => {
  });
});

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