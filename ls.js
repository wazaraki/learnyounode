var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
  if (err) throw err;

  console.log(
    list.filter(function (p) {
      return path.extname(p) === ('.' + process.argv[3]);
    })
    .join('\n')
  );
});