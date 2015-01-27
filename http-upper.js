
var http = require('http');
var fs = require('fs');
var through = require('through');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});

    var tr = through(function (buf) {
      this.queue(buf.toString().toUpperCase());
    });

    req.pipe(tr).pipe(res);

  }
});

server.listen(process.argv[2]);
