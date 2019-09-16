const app = require('./config/server')

var server = app.listen(80, function() {
    console.log('Server on in port 80 ');
})

var io = require('socket.io').listen(server);
app.set('io', io);

io.on('connection', (socket) => {
    console.log("Conected User");

    socket.on('disconnect', () => {
        console.log("Disconected User")
    })
})

