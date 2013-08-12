var express = require('express');
var app = express();

app.get('/ex1', function (req, res) {
  res.send('First Example');
});

app.listen(5000);
console.log("App listening on port 5000");