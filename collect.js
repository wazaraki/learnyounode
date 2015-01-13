

var bl = require('bl');
var http = require('http');

module.exports = function (url) {
  http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) return console.error(err);

      console.log(data.length);
      console.log(data.toString());
    }));
  });
}