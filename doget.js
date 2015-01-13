var http = require('http');

module.exports = function (url) {
  http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
  });
}