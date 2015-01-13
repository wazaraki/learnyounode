var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {
  fs.readdir(dir, function (err, list) {
    if (err) return cb(err);

    cb(null,
      list.filter(function (p) {
        return path.extname(p) === ('.' + ext);
      })
    );
  });
}