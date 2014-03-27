var express = require('express');
var app = express();

app.use(express.static(__dirname + "/assets"));
app.use('/underscore', express.static(__dirname + '/node_modules/underscore'));

app.listen(5000);
console.log("App listening on port 5000");
console.log("For the first example go to http://localhost:5000/ex1.html");