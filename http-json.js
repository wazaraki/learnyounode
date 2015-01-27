
var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    var parsedUrl = url.parse(req.url, true),
        date = new Date(parsedUrl.query.iso),
        response;

    if (parsedUrl.pathname === '/api/parsetime') {
      response = { hour: date.getHours()
                  ,minute: date.getMinutes()
                  ,second: date.getSeconds() };
    }
    if (parsedUrl.pathname === '/api/unixtime') {
      response = { unixtime: date.getTime() };
    }
    console.dir(response)
    res.end(JSON.stringify(response));

  }
});

server.listen(process.argv[2]);
