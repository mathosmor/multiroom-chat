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
    });

    socket.on('msgForServer', function(data){
        /**Dialogo */
        socket.emit(
            'msgForClient',
            {apelido: data.apelido, msg: data.msg}
        );
        socket.broadcast.emit(
            'msgForClient',
            {apelido: data.apelido, msg: data.msg}
        );
        /* Participantes */
        if(parseInt(data.apelidoAtualizado) == 0){
        socket.emit(
            'participantesForClient',
            {apelido: data.apelido}
        );
        socket.broadcast.emit(
            'participantesForClient',
            {apelido: data.apelido}
        );}
    })
})

