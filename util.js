var net = require('net');
var util = module.exports = {};

util.isPortInUse = function(port, error, success) {
  var conn = net.createServer();
  conn.unref();
  conn.on('error', error.bind(null, port));
  conn.listen(port, function() {
    conn.close(success.bind(null, null, conn.address().port));
  });
};

/*
  Simple template

  ```
  var tpl = '{{name}}/{{version}}';
  util.template(tpl, {name:'base', version: '1.0.0'});
  ```
*/
util.template = function(format, data) {
  if (!format) return '';
  return format.replace(/{{([a-z]*)}}/g, function(all, match) {
    return data[match] || '';
  });
};

util.normalizeBase = function(base) {
  if (base) {
    var re = /^https?:\/\/[^\/]+?\//;
    if (re.test(base)) {
      base = base.replace(re, '');
    }
    if (base.charAt(0) !== '/') {
      base = '/' + base;
    }
    if (base.slice(-1) !== '/') {
      base = base + '/';
    }
  }
  return base;
}
