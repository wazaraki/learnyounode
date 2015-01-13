//modulecall.js

var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function (err, files) {
  if (err) return console.error('Houston we\'ve got a problem...');
  console.log(files.join('\n'));
});