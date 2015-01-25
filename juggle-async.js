
var bl = require('bl');
var http = require('http');
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

juggle([process.argv[2], process.argv[3], process.argv[4]]);


function juggle (ops) {

  var completed = 0
     ,results = [];

  function queue (url, order) {
    http.get(url, function (response) {
      response.pipe(bl(function (err, data) {
        if (err) throw err;

        results[order] = data;
        completed++;
        emitter.emit('completed');
      }));
    });
  }

  emitter.on('completed', function () {
    if (completed === 3) {
       console.log(results.join('\n'));
    }
  });

  ops.forEach(queue);

}