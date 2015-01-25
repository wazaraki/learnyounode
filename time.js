
var net = require('net');
var server = net.createServer(function (socket) {
var date = new Date();

function pad(s) { return s > 9 ? s : ('0' + s); }

var result = [  date.getFullYear()
              , '-'
              , pad(date.getMonth() + 1)
              , '-'
              , pad(date.getDate())
              , ' '
              , pad(date.getHours())
              , ':'
              , pad(date.getMinutes())
              , '\n']
              .join('');

  socket.end(result);
});

server.listen(process.argv[2]);