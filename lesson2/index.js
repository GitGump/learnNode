var express = require('express');
var utility = require('utility');
var app = express();

app.get('/', function(req, res) {
  var q = req.query.q;
  var p = req.query.p;
  if (q) {
    var md5Value = utility.md5(q);
    res.send('md5 ' + q + ' = ' + md5Value);
  } else if (p) {
    var sha1Value = utility.sha1(p);
    res.send('sha1 ' + p + ' = ' + sha1Value);
  } else {
    res.send('please enter a query string');
  }
});

app.listen(3000, function(req, res) {
  console.log('app is running at port 3000');
});

