module.exports = http => {
    const io = require('socket.io')(http,{
        cors: {
            origin: 'http://localhost:8080',
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            //preflightContinue: false,
            //optionsSuccessStatus: 200,
            //credentials: false
        },
        transports: ['websocket', 'polling']
      });
      console.log('aca')
    io.on('connection', socket => {
        console.log('User conected')
        io.emit('chat-message','Pascual')
        socket.on('chat-message', msg => {
            io.emit('chat-message',msg)
        })
    })
}